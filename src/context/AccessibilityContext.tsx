import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { RoutePath, TextScale, ContactProfileTab } from '../types';

interface RouteSEO {
  title: string;
  description: string;
  announceText: string;
}

const ROUTE_SEO_MAP: Record<RoutePath, RouteSEO> = {
  '/': {
    title: 'NutriDiversa | Alimentación y nutrición inclusiva para personas con discapacidad y familias',
    description:
      'Asociación sin ánimo de lucro de ámbito nacional con sede en Alicante. Educación alimentaria accesible e iniciativas para familias, discapacidad y autismo.',
    announceText: 'Página de inicio. NutriDiversa: alimentación y nutrición inclusiva.',
  },
  '/proyecto': {
    title: 'Proyecto piloto de alimentación y autismo en Alicante | NutriDiversa',
    description:
      'Iniciativa educativa en preparación para familias de menores autistas de 6 a 12 años en Alicante. Abordamos selectividad, texturas y rutinas.',
    announceText: 'El proyecto piloto de alimentación y autismo en Alicante.',
  },
  '/guias': {
    title: 'Guías y educación alimentaria accesible | NutriDiversa',
    description:
      'Recursos prácticos y artículos divulgativos sobre selectividad alimentaria, texturas, comunicación en las comidas y nutrición inclusiva.',
    announceText: 'Guías y educación alimentaria accesible.',
  },
  '/asociacion': {
    title: 'La asociación: misión, ámbitos de actuación y cómo asociarse | NutriDiversa',
    description:
      'Conoce la misión de NutriDiversa, nuestros ámbitos de actuación en discapacidad, enfermedades raras y dependencia, y cómo formar parte.',
    announceText: 'La asociación: quiénes somos, junta directiva y cómo asociarse.',
  },
  '/contacto': {
    title: 'Contacto para familias, entidades y profesionales | NutriDiversa',
    description:
      'Canales de contacto diferenciados para familias interesadas en el proyecto piloto, entidades colaboradoras, voluntariado y personas asociadas.',
    announceText: 'Contacto segmentado para familias, entidades, profesionales y personas asociadas.',
  },
  '/transparencia': {
    title: 'Transparencia, Estatutos y datos registrales | NutriDiversa',
    description:
      'Información identificativa, inscripción en el Registro Nacional de Asociaciones (RNA 632919), NIF G22670707, Estatutos y gobernanza de NutriDiversa.',
    announceText: 'Portal de transparencia, estatutos y datos registrales.',
  },
  '/privacidad': {
    title: 'Política de privacidad y protección de datos | NutriDiversa',
    description:
      'Política de privacidad y protección de datos personales de la Asociación de Nutrición en la Discapacidad (NutriDiversa) conforme al RGPD y LOPDGDD.',
    announceText: 'Política de privacidad y protección de datos personales.',
  },
  '/aviso-legal': {
    title: 'Aviso legal y condiciones de uso | NutriDiversa',
    description:
      'Datos identificativos conforme a la LSSI-CE y exclusión de asistencia sanitaria clínica del sitio web oficial www.nutridiversa.org.',
    announceText: 'Aviso legal y condiciones de uso.',
  },
  '/cookies': {
    title: 'Política de cookies y almacenamiento local | NutriDiversa',
    description:
      'Información sobre el uso exclusivo de almacenamiento local técnico para recordar las preferencias de lectura en www.nutridiversa.org.',
    announceText: 'Política de cookies y almacenamiento local.',
  },
  '/accesibilidad': {
    title: 'Declaración y compromiso de accesibilidad | NutriDiversa',
    description:
      'Compromiso voluntario de accesibilidad tomando como referencia técnica las pautas WCAG 2.2 nivel AA en www.nutridiversa.org.',
    announceText: 'Declaración y compromiso de accesibilidad.',
  },
};

function normalizePath(rawPath: string): RoutePath {
  const clean = rawPath.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  // Map legacy routes gracefully
  if (clean === '/servicios') return '/proyecto';
  if (clean === '/actualidad') return '/guias';
  if (clean === '/conocenos' || clean === '/colabora' || clean === '/socios') return '/asociacion';
  if (clean in ROUTE_SEO_MAP) {
    return clean as RoutePath;
  }
  return '/';
}

function extractProfileFromSearch(search: string): ContactProfileTab | null {
  try {
    const params = new URLSearchParams(search);
    const perfil = params.get('perfil');
    if (perfil === 'familia' || perfil === 'entidad' || perfil === 'socio') {
      return perfil;
    }
  } catch {}
  return null;
}

interface AccessibilityContextType {
  // Simple summary mode ("Resumen sencillo" in Opciones de lectura)
  easyReading: boolean;
  setEasyReading: (val: boolean | ((prev: boolean) => boolean)) => void;
  toggleEasyReading: () => void;

  highContrast: boolean;
  setHighContrast: (val: boolean | ((prev: boolean) => boolean)) => void;
  toggleHighContrast: () => void;

  fontScale: TextScale;
  setFontScale: (scale: TextScale) => void;
  increaseFontScale: () => void;
  decreaseFontScale: () => void;
  resetFontScale: () => void;

  isSpeaking: boolean;
  isPaused: boolean;
  currentSpeechTitle: string;
  speakText: (text: string, title?: string) => void;
  stopSpeech: () => void;
  pauseSpeech: () => void;
  resumeSpeech: () => void;
  speakCurrentPage: () => void;

  activeRoute: RoutePath;
  contactProfile: ContactProfileTab;
  setContactProfile: (profile: ContactProfileTab) => void;
  navigateTo: (routeWithOptionalQuery: string) => void;

  announcement: string;
  announce: (message: string) => void;

  activeModal: string | null;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load initial preferences from localStorage using the exact keys documented in /cookies
  const [easyReading, setEasyReadingState] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nutridiversa_simple_summary') === 'true';
    } catch {
      return false;
    }
  });

  const [highContrast, setHighContrastState] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nutridiversa_contrast') === 'high';
    } catch {
      return false;
    }
  });

  const [fontScale, setFontScaleState] = useState<TextScale>(() => {
    try {
      const saved = localStorage.getItem('nutridiversa_font_size');
      if (saved === '100' || saved === '115' || saved === '130') return saved;
    } catch {}
    return '100';
  });

  const [activeRoute, setActiveRoute] = useState<RoutePath>(() =>
    typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/'
  );

  const [contactProfile, setContactProfile] = useState<ContactProfileTab>(() => {
    if (typeof window !== 'undefined') {
      return extractProfileFromSearch(window.location.search) || 'familia';
    }
    return 'familia';
  });

  const [announcement, setAnnouncement] = useState<string>('');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Web Speech API states
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentSpeechTitle, setCurrentSpeechTitle] = useState<string>('');

  const announce = useCallback((message: string) => {
    setAnnouncement(message);
    setTimeout(() => {
      setAnnouncement('');
    }, 4000);
  }, []);

  const setEasyReading = useCallback(
    (val: boolean | ((prev: boolean) => boolean)) => {
      setEasyReadingState((prev) => {
        const next = typeof val === 'function' ? val(prev) : val;
        try {
          localStorage.setItem('nutridiversa_simple_summary', String(next));
        } catch {}
        return next;
      });
    },
    []
  );

  const toggleEasyReading = useCallback(() => {
    setEasyReadingState((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('nutridiversa_simple_summary', String(next));
      } catch {}
      announce(
        next
          ? 'Resumen sencillo activado al inicio de cada página.'
          : 'Resumen sencillo desactivado.'
      );
      return next;
    });
  }, [announce]);

  const setHighContrast = useCallback(
    (val: boolean | ((prev: boolean) => boolean)) => {
      setHighContrastState((prev) => {
        const next = typeof val === 'function' ? val(prev) : val;
        try {
          localStorage.setItem('nutridiversa_contrast', next ? 'high' : 'warm');
        } catch {}
        return next;
      });
    },
    []
  );

  const toggleHighContrast = useCallback(() => {
    setHighContrastState((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('nutridiversa_contrast', next ? 'high' : 'warm');
      } catch {}
      announce(
        next
          ? 'Modo de alto contraste activado.'
          : 'Diseño cálido predeterminado activado.'
      );
      return next;
    });
  }, [announce]);

  const setFontScale = useCallback(
    (scale: TextScale) => {
      setFontScaleState(scale);
      try {
        localStorage.setItem('nutridiversa_font_size', scale);
      } catch {}
      announce(`Tamaño de texto ajustado al ${scale} por ciento.`);
    },
    [announce]
  );

  const increaseFontScale = useCallback(() => {
    setFontScaleState((prev) => {
      const next: TextScale = prev === '100' ? '115' : '130';
      try {
        localStorage.setItem('nutridiversa_font_size', next);
      } catch {}
      announce(`Tamaño de texto ajustado al ${next} por ciento.`);
      return next;
    });
  }, [announce]);

  const decreaseFontScale = useCallback(() => {
    setFontScaleState((prev) => {
      const next: TextScale = prev === '130' ? '115' : '100';
      try {
        localStorage.setItem('nutridiversa_font_size', next);
      } catch {}
      announce(`Tamaño de texto ajustado al ${next} por ciento.`);
      return next;
    });
  }, [announce]);

  const resetFontScale = useCallback(() => {
    setFontScale('100');
  }, [setFontScale]);

  // Synchronize CSS classes on document.documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-scale-100', 'font-scale-115', 'font-scale-130');
    root.classList.add(`font-scale-${fontScale}`);
  }, [fontScale]);

  // Update SEO document.title and meta description whenever activeRoute changes
  useEffect(() => {
    const seo = ROUTE_SEO_MAP[activeRoute] || ROUTE_SEO_MAP['/'];
    document.title = seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seo.description);
    }
  }, [activeRoute]);

  // Listen to browser Back/Forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const route = normalizePath(window.location.pathname);
      setActiveRoute(route);
      const profile = extractProfileFromSearch(window.location.search);
      if (profile) {
        setContactProfile(profile);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Speech Synthesis logic
  const stopSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentSpeechTitle('');
      announce('Lectura en voz alta detenida.');
    }
  }, [announce]);

  const pauseSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && isSpeaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      announce('Lectura en voz alta pausada.');
    }
  }, [isSpeaking, announce]);

  const resumeSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      announce('Lectura en voz alta reanudada.');
    }
  }, [isPaused, announce]);

  const speakText = useCallback(
    (text: string, title?: string) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        announce('Tu navegador no es compatible con la lectura en voz alta.');
        return;
      }

      window.speechSynthesis.cancel();

      const cleanText = text.replace(/<[^>]*>?/gm, '').trim();
      if (!cleanText) return;

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'es-ES';
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const spanishVoice = voices.find(
        (v) =>
          v.lang.startsWith('es') ||
          v.name.toLowerCase().includes('spanish') ||
          v.name.toLowerCase().includes('español')
      );
      if (spanishVoice) {
        utterance.voice = spanishVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsPaused(false);
        setCurrentSpeechTitle(title || 'Contenido de la página');
        announce(`Iniciando lectura en voz alta: ${title || 'sección actual'}.`);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setCurrentSpeechTitle('');
        announce('Finalizada la lectura en voz alta.');
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setCurrentSpeechTitle('');
      };

      window.speechSynthesis.speak(utterance);
    },
    [announce]
  );

  const speakCurrentPage = useCallback(() => {
    if (isSpeaking) {
      stopSpeech();
      return;
    }
    const mainEl = document.getElementById('main-content');
    const textToRead = mainEl?.innerText || document.title;
    const seo = ROUTE_SEO_MAP[activeRoute] || ROUTE_SEO_MAP['/'];
    speakText(textToRead.slice(0, 1800), seo.title);
  }, [activeRoute, isSpeaking, speakText, stopSpeech]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const navigateTo = useCallback(
    (routeWithOptionalQuery: string) => {
      const [pathPart, queryPart] = routeWithOptionalQuery.split('?');
      const normalized = normalizePath(pathPart);

      if (queryPart) {
        const profile = extractProfileFromSearch(`?${queryPart}`);
        if (profile) {
          setContactProfile(profile);
        }
      }

      setActiveRoute(normalized);

      if (typeof window !== 'undefined') {
        const targetUrl = queryPart ? `${normalized}?${queryPart}` : normalized;
        try {
          window.history.pushState({}, '', targetUrl);
        } catch {}
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          setIsSpeaking(false);
          setIsPaused(false);
          setCurrentSpeechTitle('');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      const seo = ROUTE_SEO_MAP[normalized] || ROUTE_SEO_MAP['/'];
      announce(seo.announceText);
    },
    [announce]
  );

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        easyReading,
        setEasyReading,
        toggleEasyReading,
        highContrast,
        setHighContrast,
        toggleHighContrast,
        fontScale,
        setFontScale,
        increaseFontScale,
        decreaseFontScale,
        resetFontScale,
        isSpeaking,
        isPaused,
        currentSpeechTitle,
        speakText,
        stopSpeech,
        pauseSpeech,
        resumeSpeech,
        speakCurrentPage,
        activeRoute,
        contactProfile,
        setContactProfile,
        navigateTo,
        announcement,
        announce,
        activeModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
