export type RoutePath = '/' | '/conocenos' | '/servicios' | '/colabora' | '/actualidad' | '/contacto' | '/socios' | '/admin';

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
  category: 'Estatutos' | 'Registro' | 'Cuentas' | 'Memorias' | 'Certificados';
  date: string;
  csvCode?: string;
  fileSize: string;
  summary: string;
  easyReadingSummary: string;
  legalBasis: string;
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

export interface SIOConsultation {
  beneficiary: string;
  primaryNeed: string;
  preferredChannel: 'whatsapp' | 'telefono' | 'email';
  contact: string;
  notes: string;
  consentArt42: boolean;
}

export interface EthicsReport {
  isAnonymous: boolean;
  fullName: string;
  email: string;
  phone: string;
  category: string;
  description: string;
  dateIncident: string;
  acceptedPrivacy: boolean;
}
