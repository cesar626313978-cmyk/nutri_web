import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User as FirebaseUser,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase/config';
import { handleFirestoreError, OperationType } from '../firebase/errors';
import { AppUser, UserRole, UserPermissions } from '../types/cms';

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userProfile: AppUser | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  updateUserRole: (targetUserId: string, newRole: UserRole, permissions?: Partial<UserPermissions>) => Promise<void>;
  // Fast tester role override so the user can easily test Admin, Presidente, Secretario, Vocal, Socio & Usuario
  activeSimulatedRole: UserRole | null;
  setSimulatedRole: (role: UserRole | null) => void;
  effectiveRole: UserRole;
  permissions: UserPermissions;
}

const DEFAULT_PERMISSIONS: Record<UserRole, UserPermissions> = {
  admin: {
    canEditSite: true,
    canPublishArticles: true,
    canManageUsers: true,
    canManageFiles: true,
    canAccessPartnerArea: true,
  },
  presidente: {
    canEditSite: true,
    canPublishArticles: true,
    canManageUsers: true,
    canManageFiles: true,
    canAccessPartnerArea: true,
  },
  secretario: {
    canEditSite: true,
    canPublishArticles: true,
    canManageUsers: false,
    canManageFiles: true,
    canAccessPartnerArea: true,
  },
  vocal: {
    canEditSite: false,
    canPublishArticles: true,
    canManageUsers: false,
    canManageFiles: true,
    canAccessPartnerArea: true,
  },
  socio: {
    canEditSite: false,
    canPublishArticles: false,
    canManageUsers: false,
    canManageFiles: false,
    canAccessPartnerArea: true,
  },
  usuario: {
    canEditSite: false,
    canPublishArticles: false,
    canManageUsers: false,
    canManageFiles: false,
    canAccessPartnerArea: false,
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSimulatedRole, setActiveSimulatedRole] = useState<UserRole | null>(null);

  useEffect(() => {
    let unsubscribeProfile: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const userRef = doc(db, 'users', user.uid);
        try {
          const snap = await getDoc(userRef);
          const isBootstrappedAdmin =
            user.email?.toLowerCase() === 'cesar626313978@gmail.com';

          if (!snap.exists()) {
            const initialRole: UserRole = isBootstrappedAdmin ? 'admin' : 'usuario';
            const newProfile: AppUser = {
              userId: user.uid,
              email: user.email || '',
              displayName: user.displayName || user.email?.split('@')[0] || 'Usuario NutriDiversa',
              photoURL: user.photoURL || undefined,
              role: initialRole,
              canEditSite: isBootstrappedAdmin,
              canPublishArticles: isBootstrappedAdmin,
              canManageUsers: isBootstrappedAdmin,
              canManageFiles: isBootstrappedAdmin,
              status: 'active',
              createdAt: new Date().toISOString(),
            };

            await setDoc(userRef, newProfile);
            if (isBootstrappedAdmin) {
              await setDoc(doc(db, 'admins', user.uid), {
                userId: user.uid,
                email: user.email,
                role: 'admin',
                createdAt: new Date().toISOString(),
              });
            }
            setUserProfile(newProfile);
          } else {
            const data = snap.data() as AppUser;
            // Ensure bootstrapped admin always has admin privileges
            if (isBootstrappedAdmin && data.role !== 'admin') {
              const updated = { ...data, role: 'admin' as UserRole, canEditSite: true, canManageUsers: true };
              await setDoc(userRef, updated, { merge: true });
              await setDoc(doc(db, 'admins', user.uid), {
                userId: user.uid,
                email: user.email,
                role: 'admin',
                createdAt: new Date().toISOString(),
              });
              setUserProfile(updated);
            } else {
              setUserProfile(data);
            }
          }

          // Real-time listener for profile changes
          unsubscribeProfile = onSnapshot(
            userRef,
            (docSnap) => {
              if (docSnap.exists()) {
                setUserProfile(docSnap.data() as AppUser);
              }
            },
            (err) => {
              handleFirestoreError(err, OperationType.GET, `users/${user.uid}`);
            }
          );
        } catch (error) {
          handleFirestoreError(error, OperationType.GET, `users/${user.uid}`);
        }
      } else {
        if (unsubscribeProfile) {
          unsubscribeProfile();
          unsubscribeProfile = null;
        }
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeProfile) unsubscribeProfile();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUserProfile(null);
      setActiveSimulatedRole(null);
    } catch (error) {
      console.error('Sign-out error:', error);
      throw error;
    }
  };

  const updateUserRole = async (
    targetUserId: string,
    newRole: UserRole,
    perms?: Partial<UserPermissions>
  ) => {
    const userRef = doc(db, 'users', targetUserId);
    const updates: Partial<AppUser> = {
      role: newRole,
      updatedAt: new Date().toISOString(),
      ...(perms || {}),
    };

    try {
      await setDoc(userRef, updates, { merge: true });

      // If promoted to admin or demoted, sync admins collection
      const adminRef = doc(db, 'admins', targetUserId);
      if (newRole === 'admin') {
        await setDoc(adminRef, {
          userId: targetUserId,
          role: 'admin',
          updatedAt: new Date().toISOString(),
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${targetUserId}`);
    }
  };

  // Compute effective role (either the actual DB profile role, or simulated test role if set)
  const effectiveRole: UserRole =
    activeSimulatedRole ||
    userProfile?.role ||
    'usuario';

  // Compute permissions
  const basePerms = DEFAULT_PERMISSIONS[effectiveRole];
  const permissions: UserPermissions = {
    canEditSite: userProfile?.canEditSite ?? basePerms.canEditSite,
    canPublishArticles: userProfile?.canPublishArticles ?? basePerms.canPublishArticles,
    canManageUsers: userProfile?.canManageUsers ?? basePerms.canManageUsers,
    canManageFiles: userProfile?.canManageFiles ?? basePerms.canManageFiles,
    canAccessPartnerArea: basePerms.canAccessPartnerArea,
  };

  // If role is simulated for testing, override perms to match simulation
  if (activeSimulatedRole) {
    permissions.canEditSite = DEFAULT_PERMISSIONS[activeSimulatedRole].canEditSite;
    permissions.canPublishArticles = DEFAULT_PERMISSIONS[activeSimulatedRole].canPublishArticles;
    permissions.canManageUsers = DEFAULT_PERMISSIONS[activeSimulatedRole].canManageUsers;
    permissions.canManageFiles = DEFAULT_PERMISSIONS[activeSimulatedRole].canManageFiles;
    permissions.canAccessPartnerArea = DEFAULT_PERMISSIONS[activeSimulatedRole].canAccessPartnerArea;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        signInWithGoogle,
        signOut,
        updateUserRole,
        activeSimulatedRole,
        setSimulatedRole: setActiveSimulatedRole,
        effectiveRole,
        permissions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
