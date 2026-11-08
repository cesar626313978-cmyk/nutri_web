import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { handleFirestoreError, OperationType } from '../firebase/errors';
import {
  SiteConfig,
  CMSArticle,
  PartnerResourceItem,
  MediaAsset,
  AppUser,
  UserRole,
  UserPermissions,
} from '../types/cms';
import { ARTICLES, INSTITUTIONAL_DATA } from '../data/associationData';

const DEFAULT_CONFIG: SiteConfig = {
  logoType: 'vector',
  logoUrl: '/assets/aistudio/Logotipo_nutridiversa_cuadrado-removebg-preview_123d2a34.png',
  logoUrlStacked: '/assets/aistudio/Logotipo_nutridiversa_cuadrado-removebg-preview_123d2a34.png',
  logoTitleFirst: 'Nutri',
  logoTitleSecond: 'Diversa',
  logoSubtitle: 'ASOCIACIÓN DE NUTRICIÓN EN LA DISCAPACIDAD',
  primaryColor: '#165B2E',
  secondaryColor: '#EB5A18',
  accentColor: '#F59E0B',
  fontFamily: 'Atkinson Hyperlegible, system-ui, sans-serif',
  headingFont: 'Playfair Display, serif',
  heroTitle: 'Promoción de la salud y nutrición inclusiva',
  heroSubtitle:
    'Asociación sin ánimo de lucro de ámbito estatal con sede en Alicante. Impulsamos proyectos de información y educación alimentaria y nutricional accesibles para personas con discapacidad, autismo, enfermedades raras, situación de dependencia y sus familias.',
  heroButtonText: 'Proyecto Piloto y Líneas de Actuación',
  heroButtonLink: '/servicios',
  heroImageUrl: '/src/assets/images/dossier_mesa_inclusiva_1793908196707.jpg',
  aboutMission: INSTITUTIONAL_DATA.mission,
  aboutVision: INSTITUTIONAL_DATA.vision,
  aboutHistory:
    'NutriDiversa nace en Alicante como una entidad sin ánimo de lucro de ámbito estatal impulsada por personas graduadas en Nutrición Humana y Dietética, personas con discapacidad, colaboradores del ámbito educativo y personas comprometidas con una sociedad más inclusiva.',
  contactEmail: INSTITUTIONAL_DATA.contact.email,
  contactPhone: INSTITUTIONAL_DATA.contact.phone,
  contactAddress: INSTITUTIONAL_DATA.headquarters.display,
  contactSchedule: 'Atención telemática · Sede en Alicante (Ámbito estatal)',
  partnerPerksTitle: 'Participación Asociativa en NutriDiversa',
  partnerPerksDesc:
    'Como persona asociada, participas en la vida asociativa y en el impulso de proyectos de educación alimentaria inclusiva, materiales con apoyos visuales y trabajo en red.',
  updatedAt: new Date().toISOString(),
  updatedBy: 'system',
};

const INITIAL_PARTNER_RESOURCES: PartnerResourceItem[] = [
  {
    id: 'res-dossier-institucional-2026',
    title: 'Dossier de Presentación Institucional NutriDiversa (Alicante, 2026)',
    category: 'Documento Oficial',
    description:
      'Documento marco de 16 páginas con la identidad, misión, visión, 7 valores, 8 objetivos, 6 líneas de actuación y el Proyecto Piloto Inicial sobre Alimentación y Autismo.',
    fileOrLinkUrl: '/assets/aistudio/Dossier_NutriDiversa__borrador_final_actualizado_dfe3321f.pdf',
    accessTier: 'all_members',
    createdAt: '2026-03-01T10:00:00Z',
    createdBy: 'system',
  },
  {
    id: 'res-lamina-durante-la-comida',
    title: 'Lámina de Apoyos Visuales y Lenguaje Claro: "Durante la comida"',
    category: 'Guía Especializada',
    description:
      'Recurso práctico con pictogramas comprensibles ("Me gusta", "No me gusta", "Necesito ayuda", "Necesito una pausa") para favorecer la participación y autonomía en las comidas.',
    fileOrLinkUrl: '/servicios',
    accessTier: 'all_members',
    createdAt: '2026-03-05T12:00:00Z',
    createdBy: 'system',
  },
  {
    id: 'res-protocolo-piloto-autismo',
    title: 'Ficha Metodológica: Proyecto Piloto de Alimentación y Autismo (6–12 años, Alicante)',
    category: 'Guía Especializada',
    description:
      'Resumen de las 5 fases del proyecto piloto (Preparación, Identificación de necesidades, Elaboración de materiales, Actividad educativa y Evaluación) dirigido a familias y personas cuidadoras.',
    fileOrLinkUrl: '/servicios',
    accessTier: 'all_members',
    createdAt: '2026-03-10T09:30:00Z',
    createdBy: 'system',
  },
  {
    id: 'res-estatutos-clases-socios',
    title: 'Guía Estatutaria de Participación, Asamblea General y Clases de Personas Asociadas',
    category: 'Documento Oficial',
    description:
      'Información detallada sobre las cuatro modalidades de socios/as (promotores/as, de número, colaboradores/as y de honor), órganos de gobierno y vías de colaboración.',
    fileOrLinkUrl: '/conocenos',
    accessTier: 'all_members',
    createdAt: '2026-03-12T16:00:00Z',
    createdBy: 'system',
  },
];

interface CMSContextType {
  siteConfig: SiteConfig;
  updateSiteConfig: (partial: Partial<SiteConfig>, updatedByUid: string) => Promise<void>;
  resetSiteConfig: () => Promise<void>;
  articles: CMSArticle[];
  createArticle: (article: Omit<CMSArticle, 'id' | 'createdAt'>) => Promise<void>;
  updateArticle: (id: string, partial: Partial<CMSArticle>) => Promise<void>;
  deleteArticle: (id: string) => Promise<void>;
  partnerResources: PartnerResourceItem[];
  createPartnerResource: (item: Omit<PartnerResourceItem, 'id' | 'createdAt'>) => Promise<void>;
  deletePartnerResource: (id: string) => Promise<void>;
  mediaFiles: MediaAsset[];
  uploadMediaFile: (file: Omit<MediaAsset, 'id' | 'createdAt'>) => Promise<void>;
  deleteMediaFile: (id: string) => Promise<void>;
  allUsers: AppUser[];
  updateUserRoleAndPerms: (userId: string, role: UserRole, perms: Partial<UserPermissions>) => Promise<void>;
  loading: boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(DEFAULT_CONFIG);
  const [articles, setArticles] = useState<CMSArticle[]>([]);
  const [partnerResources, setPartnerResources] = useState<PartnerResourceItem[]>(INITIAL_PARTNER_RESOURCES);
  const [mediaFiles, setMediaFiles] = useState<MediaAsset[]>([]);
  const [allUsers, setAllUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(true);

  const sanitizeConfig = (cfg: Partial<SiteConfig>): SiteConfig => {
    const merged = { ...DEFAULT_CONFIG, ...cfg };
    if (
      !merged.heroTitle ||
      merged.heroTitle.includes('clínica') ||
      merged.heroTitle.includes('Divulgación') ||
      merged.heroTitle === 'Nutrición en personas con discapacidad'
    ) {
      merged.heroTitle = DEFAULT_CONFIG.heroTitle;
    }
    if (
      !merged.heroSubtitle ||
      merged.heroSubtitle.includes('entidades del tercer sector, centros educativos y colectivos a través de talleres')
    ) {
      merged.heroSubtitle = DEFAULT_CONFIG.heroSubtitle;
    }
    if (
      merged.heroButtonText &&
      (merged.heroButtonText.toLowerCase().includes('orientaci') ||
        merged.heroButtonText.includes('SIO') ||
        merged.heroButtonText === 'Proyectos para Colectivos y Centros')
    ) {
      merged.heroButtonText = DEFAULT_CONFIG.heroButtonText;
    }
    if (!merged.contactEmail || merged.contactEmail.includes('contacto@nutridiversa.org') || merged.contactEmail.includes('@gmail.com')) {
      merged.contactEmail = 'info@nutridiversa.org';
    }
    merged.aboutMission = INSTITUTIONAL_DATA.mission;
    merged.aboutVision = INSTITUTIONAL_DATA.vision;
    return merged;
  };

  // Load initial local config if stored
  useEffect(() => {
    try {
      const storedConfig = localStorage.getItem('nutridiversa_site_config');
      if (storedConfig) {
        const parsed = JSON.parse(storedConfig);
        const clean = sanitizeConfig(parsed);
        setSiteConfig(clean);
        localStorage.setItem('nutridiversa_site_config', JSON.stringify(clean));
      } else {
        localStorage.setItem('nutridiversa_site_config', JSON.stringify(DEFAULT_CONFIG));
      }
      const storedMedia = localStorage.getItem('nutridiversa_media_files');
      if (storedMedia) {
        const parsedM = JSON.parse(storedMedia);
        if (Array.isArray(parsedM) && parsedM.length > 0) {
          setMediaFiles(parsedM);
        }
      }
    } catch (e) {
      console.warn('Local storage preload note:', e);
    }
  }, []);

  // Apply dynamic CSS variables for custom styling (colors and typography)
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', siteConfig.primaryColor);
    root.style.setProperty('--brand-secondary', siteConfig.secondaryColor);
    root.style.setProperty('--brand-accent', siteConfig.accentColor);
    if (siteConfig.headingFont) {
      root.style.setProperty('--font-heading', siteConfig.headingFont);
    }
    if (siteConfig.fontFamily) {
      root.style.setProperty('--font-body', siteConfig.fontFamily);
    }
  }, [siteConfig]);

  // Load site configuration in real-time from Firestore
  useEffect(() => {
    const configDocRef = doc(db, 'site_config', 'general');

    const unsubscribe = onSnapshot(
      configDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const rawData = docSnap.data() as Partial<SiteConfig>;
          const merged = sanitizeConfig(rawData);
          setSiteConfig(merged);
          try {
            localStorage.setItem('nutridiversa_site_config', JSON.stringify(merged));
          } catch {}
          const updatesToPush: Record<string, string> = {};
          if (rawData.heroTitle && (rawData.heroTitle.includes('clínica') || rawData.heroTitle.includes('Divulgación'))) {
            updatesToPush.heroTitle = 'Nutrición en personas con discapacidad';
          }
          if (rawData.contactEmail && rawData.contactEmail !== 'info@nutridiversa.org') {
            updatesToPush.contactEmail = 'info@nutridiversa.org';
          }
          if (Object.keys(updatesToPush).length > 0) {
            setDoc(configDocRef, updatesToPush, { merge: true }).catch(() => {});
          }
        } else {
          setSiteConfig(DEFAULT_CONFIG);
        }
        setLoading(false);
      },
      (err) => {
        console.warn('Notice reading site_config:', err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Load articles in real-time
  useEffect(() => {
    const articlesCol = collection(db, 'articles');

    const unsubscribe = onSnapshot(
      articlesCol,
      (snapshot) => {
        if (!snapshot.empty) {
          const list: CMSArticle[] = [];
          snapshot.forEach((docSnap) => {
            list.push(docSnap.data() as CMSArticle);
          });
          // Sort newest first
          list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setArticles(list);
        } else {
          // Pre-populate with initial association articles if collection empty
          const fallback: CMSArticle[] = ARTICLES.map((art) => ({
            id: art.id,
            title: art.title,
            slug: art.slug,
            excerpt: art.standardContent[0] || '',
            category: art.category,
            content: art.standardContent.join('\n\n'),
            easyReadingContent: art.easyReadingContent.join('\n\n'),
            coverImageUrl: '',
            authorId: 'system',
            authorName: art.author,
            authorRole: 'Comité Asesor',
            visibility: 'public',
            status: 'published',
            createdAt: '2025-01-20T10:00:00Z',
          }));
          setArticles(fallback);
        }
      },
      (err) => {
        // Fallback gracefully on read errors
        console.warn('Articles read notice:', err);
      }
    );

    return () => unsubscribe();
  }, []);

  // Load partner resources in real-time
  useEffect(() => {
    const resCol = collection(db, 'partner_resources');

    const unsubscribe = onSnapshot(
      resCol,
      (snapshot) => {
        if (!snapshot.empty) {
          const list: PartnerResourceItem[] = [];
          snapshot.forEach((docSnap) => {
            list.push(docSnap.data() as PartnerResourceItem);
          });
          setPartnerResources(list);
        } else {
          setPartnerResources(INITIAL_PARTNER_RESOURCES);
        }
      },
      (err) => {
        console.warn('Partner resources read notice:', err);
      }
    );

    return () => unsubscribe();
  }, []);

  // Load media files in real-time
  useEffect(() => {
    const mediaCol = collection(db, 'media_files');

    const unsubscribe = onSnapshot(
      mediaCol,
      (snapshot) => {
        const list: MediaAsset[] = [];
        snapshot.forEach((docSnap) => {
          list.push(docSnap.data() as MediaAsset);
        });
        setMediaFiles(list);
      },
      (err) => {
        console.warn('Media files read notice:', err);
      }
    );

    return () => unsubscribe();
  }, []);

  // Load all registered users for administration
  useEffect(() => {
    const usersCol = collection(db, 'users');

    const unsubscribe = onSnapshot(
      usersCol,
      (snapshot) => {
        const list: AppUser[] = [];
        snapshot.forEach((docSnap) => {
          list.push(docSnap.data() as AppUser);
        });
        setAllUsers(list);
      },
      (err) => {
        console.warn('Users list notice:', err);
      }
    );

    return () => unsubscribe();
  }, []);

  // CMS Actions
  const updateSiteConfig = async (partial: Partial<SiteConfig>, updatedByUid: string) => {
    const newConfig: SiteConfig = {
      ...siteConfig,
      ...partial,
      updatedAt: new Date().toISOString(),
      updatedBy: updatedByUid,
    };

    // 1. Instant local update for 100% responsive UI
    setSiteConfig(newConfig);
    try {
      localStorage.setItem('nutridiversa_site_config', JSON.stringify(newConfig));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }

    // 2. Synchronize to Firestore
    try {
      await setDoc(doc(db, 'site_config', 'general'), newConfig, { merge: true });
    } catch (error) {
      console.warn('Firestore write notice (unauthenticated or offline?):', error);
      // We don't throw if it was saved locally, but we report to console
    }
  };

  const resetSiteConfig = async () => {
    setSiteConfig(DEFAULT_CONFIG);
    try {
      localStorage.setItem('nutridiversa_site_config', JSON.stringify(DEFAULT_CONFIG));
    } catch {}

    try {
      await setDoc(doc(db, 'site_config', 'general'), DEFAULT_CONFIG);
    } catch (error) {
      console.warn('Firestore reset notice:', error);
    }
  };

  const createArticle = async (item: Omit<CMSArticle, 'id' | 'createdAt'>) => {
    const id = 'art-' + Date.now();
    const article: CMSArticle = {
      ...item,
      id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setArticles((prev) => [article, ...prev]);

    try {
      await setDoc(doc(db, 'articles', id), article);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, `articles/${id}`);
    }
  };

  const updateArticle = async (id: string, partial: Partial<CMSArticle>) => {
    const updates = {
      ...partial,
      updatedAt: new Date().toISOString(),
    };
    setArticles((prev) => prev.map((a) => (a.id === id ? { ...a, ...updates } : a)));

    try {
      await setDoc(doc(db, 'articles', id), updates, { merge: true });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `articles/${id}`);
    }
  };

  const deleteArticle = async (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
    try {
      await deleteDoc(doc(db, 'articles', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `articles/${id}`);
    }
  };

  const createPartnerResource = async (item: Omit<PartnerResourceItem, 'id' | 'createdAt'>) => {
    const id = 'res-' + Date.now();
    const newResource: PartnerResourceItem = {
      ...item,
      id,
      createdAt: new Date().toISOString(),
    };
    setPartnerResources((prev) => [newResource, ...prev]);

    try {
      await setDoc(doc(db, 'partner_resources', id), newResource);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, `partner_resources/${id}`);
    }
  };

  const deletePartnerResource = async (id: string) => {
    setPartnerResources((prev) => prev.filter((r) => r.id !== id));
    try {
      await deleteDoc(doc(db, 'partner_resources', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `partner_resources/${id}`);
    }
  };

  const uploadMediaFile = async (item: Omit<MediaAsset, 'id' | 'createdAt'>) => {
    const id = 'med-' + Date.now();
    const newMedia: MediaAsset = {
      ...item,
      id,
      createdAt: new Date().toISOString(),
    };

    // Update local state and localStorage
    setMediaFiles((prev) => [newMedia, ...prev]);
    try {
      const stored = localStorage.getItem('nutridiversa_media_files');
      const parsed = stored ? JSON.parse(stored) : [];
      localStorage.setItem('nutridiversa_media_files', JSON.stringify([newMedia, ...parsed]));
    } catch {}

    try {
      await setDoc(doc(db, 'media_files', id), newMedia);
    } catch (error) {
      console.warn('Firestore uploadMediaFile notice (unauthenticated or offline?):', error);
      // Saved locally, no hard crash
    }
  };

  const deleteMediaFile = async (id: string) => {
    setMediaFiles((prev) => prev.filter((m) => m.id !== id));
    try {
      const stored = localStorage.getItem('nutridiversa_media_files');
      if (stored) {
        const parsed = JSON.parse(stored).filter((m: any) => m.id !== id);
        localStorage.setItem('nutridiversa_media_files', JSON.stringify(parsed));
      }
    } catch {}

    try {
      await deleteDoc(doc(db, 'media_files', id));
    } catch (error) {
      console.warn('Firestore deleteMediaFile notice:', error);
    }
  };

  const updateUserRoleAndPerms = async (
    userId: string,
    role: UserRole,
    perms: Partial<UserPermissions>
  ) => {
    try {
      await setDoc(
        doc(db, 'users', userId),
        {
          role,
          ...perms,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );

      // Sync admins collection
      if (role === 'admin') {
        await setDoc(doc(db, 'admins', userId), {
          userId,
          role: 'admin',
          updatedAt: new Date().toISOString(),
        });
      } else {
        try {
          await deleteDoc(doc(db, 'admins', userId));
        } catch {
          // ignore if didn't exist
        }
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${userId}`);
    }
  };

  return (
    <CMSContext.Provider
      value={{
        siteConfig,
        updateSiteConfig,
        resetSiteConfig,
        articles,
        createArticle,
        updateArticle,
        deleteArticle,
        partnerResources,
        createPartnerResource,
        deletePartnerResource,
        mediaFiles,
        uploadMediaFile,
        deleteMediaFile,
        allUsers,
        updateUserRoleAndPerms,
        loading,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
