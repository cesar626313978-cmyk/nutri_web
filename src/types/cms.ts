export type UserRole = 'admin' | 'presidente' | 'secretario' | 'vocal' | 'socio' | 'usuario';

export interface UserPermissions {
  canEditSite: boolean;
  canPublishArticles: boolean;
  canManageUsers: boolean;
  canManageFiles: boolean;
  canAccessPartnerArea: boolean;
}

export interface AppUser {
  userId: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  memberNumber?: string;
  canEditSite?: boolean;
  canPublishArticles?: boolean;
  canManageUsers?: boolean;
  canManageFiles?: boolean;
  status: 'active' | 'pending' | 'suspended';
  createdAt: string;
  updatedAt?: string;
}

export interface SiteConfig {
  logoType: 'vector' | 'custom_url';
  logoUrl?: string;
  logoUrlStacked?: string;
  logoTitleFirst: string;
  logoTitleSecond: string;
  logoSubtitle: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  headingFont: string;
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  heroButtonLink: string;
  heroImageUrl?: string;
  aboutMission: string;
  aboutVision: string;
  aboutHistory: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  contactSchedule: string;
  partnerPerksTitle: string;
  partnerPerksDesc: string;
  updatedAt: string;
  updatedBy: string;
}

export interface CMSArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  content: string;
  easyReadingContent?: string;
  coverImageUrl?: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  visibility: 'public' | 'members_only';
  status: 'published' | 'draft' | 'archived';
  createdAt: string;
  updatedAt?: string;
}

export interface PartnerResourceItem {
  id: string;
  title: string;
  category: 'Guía Especializada' | 'Descuento o Convenio' | 'Documento Oficial' | 'Webinar o Grabación' | 'Protocolo Clínico';
  description: string;
  fileOrLinkUrl: string;
  accessTier: 'all_members' | 'board_only';
  createdAt: string;
  createdBy: string;
}

export interface MediaAsset {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'document' | 'logo';
  size: string;
  uploadedBy: string;
  createdAt: string;
}
