export type RoutePath =
  | '/'
  | '/proyecto'
  | '/guias'
  | '/asociacion'
  | '/contacto'
  | '/transparencia'
  | '/privacidad'
  | '/aviso-legal'
  | '/cookies'
  | '/accesibilidad';

export type ContactProfileTab = 'familia' | 'entidad' | 'socio';

export type TextScale = '100' | '115' | '130';

export interface BoardMember {
  name: string;
  role: string;
  duty: string;
  bio: string;
  easyReadingBio: string;
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

export interface GuideResource {
  id: string;
  title: string;
  subtitle: string;
  pages: number;
  format: string;
  topics: string[];
  description: string;
  easyReadingDescription: string;
  keyPoints: string[];
  pictograms: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category:
    | 'Proyectos y Pilotos'
    | 'Nutrición Inclusiva y Derechos'
    | 'Evidencia Científica'
    | 'Autonomía y Familias'
    | 'Testimonios'
    | 'Salud y Discapacidad';
  date: string;
  readTime: string;
  author: string;
  standardContent: string[];
  easyReadingContent: string[];
  audioText: string;
}
