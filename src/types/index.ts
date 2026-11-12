export type RoutePath =
  | '/'
  | '/que-hacemos'
  | '/proyecto'
  | '/recursos'
  | '/guias'
  | '/conocenos'
  | '/asociacion'
  | '/contacto'
  | '/transparencia'
  | '/privacidad'
  | '/aviso-legal'
  | '/cookies'
  | '/accesibilidad';

export type TextScale = '100' | '115' | '130';

export type ContactProfileTab = 'familia' | 'entidad' | 'socio';

export interface BoardMember {
  name: string;
  role: string;
  duty: string;
  bio: string;
  easyReadingBio?: string;
}

export interface GuideArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  simpleSummary: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  sources: string[];
  limitsNote: string;
}

export interface UpcomingGuide {
  id: string;
  title: string;
  statusTag: string;
  description: string;
}

export interface OfficialDocument {
  id: string;
  title: string;
  version: string;
  date: string;
  pages: string;
  fileName: string;
  downloadUrl: string;
  summary: string;
  simpleSummary: string;
}

export interface GuideResource {
  id: string;
  title: string;
  category: string;
  format: string;
  pages: number;
  updatedAt: string;
  summary: string;
  easyReadingSummary: string;
  highlights: string[];
  contentPreview?: string[];
  downloadUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  easyReadingExcerpt: string;
  content: string[];
  easyReadingContent: string[];
  tags: string[];
}
