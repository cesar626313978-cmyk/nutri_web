import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { RoutePath, TextScale } from '../types';

interface AccessibilityContextType {
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

  activeRoute: RoutePath;
  navigateTo: (route: RoutePath) => void;

  announcement: string;
  announce: (message: string) => void;

  activeModal: string | null;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [easyReading, setEasyReading] = useState<boolean>(false);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontScale, setFontScale] = useState<TextScale>('100');
  const [activeRoute, setActiveRoute] = useState<RoutePath>('/');
  const [announcement, setAnnouncement] = useState<string>('');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Web Speech API states
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentSpeechTitle, setCurrentSpeechTitle] = useState<string>('');

  const announce = useCallback((message: string) => {
    setAnnouncement(message);
    // Clear after delay so subsequent identical announcements can trigger
    setTimeout(() => {
      setAnnouncement('');
    }, 4000);
  }, []);

  const toggleEasyReading = useCallback(() => {
    setEasyReading(prev => {
      const next = !prev;
      announce(next ? 'Modo Lectura Fácil activado. Se muestran resúmenes claros con pictogramas.' : 'Modo Lectura Fácil desactivado. Mostrando texto estándar.');
      return next;
    });
  }, [announce]);

  const toggleHighContrast = useCallback(() => {
    setHighContrast(prev => {
      const next = !prev;
      announce(next ? 'Modo Alto Contraste activado: fondo negro y texto de alta visibilidad.' : 'Modo Alto Contraste desactivado: paleta estándar corporativa.');
      return next;
    });
  }, [announce]);

  const increaseFontScale = useCallback(() => {
    setFontScale(prev => {
      if (prev === '100') {
        announce('Tamaño de letra aumentado al 115 por ciento.');
        return '115';
      }
      if (prev === '115') {
        announce('Tamaño de letra aumentado al 130 por ciento.');
        return '130';
      }
      announce('Tamaño de letra en su valor máximo, 130 por ciento.');
      return '130';
    });
  }, [announce]);

  const decreaseFontScale = useCallback(() => {
    setFontScale(prev => {
      if (prev === '130') {
        announce('Tamaño de letra reducido al 115 por ciento.');
        return '115';
      }
      if (prev === '115') {
        announce('Tamaño de letra reducido al 100 por ciento normal.');
        return '100';
      }
      announce('Tamaño de letra en su valor estándar, 100 por ciento.');
      return '100';
    });
  }, [announce]);

  const resetFontScale = useCallback(() => {
    setFontScale('100');
    announce('Tamaño de letra restablecido al 100 por ciento normal.');
  }, [announce]);

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

  const speakText = useCallback((text: string, title?: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      announce('Su navegador no es compatible con la lectura en voz alta.');
      return;
    }

    window.speechSynthesis.cancel();

    // Clean up text
    const cleanText = text.replace(/<[^>]*>?/gm, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-ES';
    utterance.rate = 0.95; // Slightly slower for enhanced cognitive and audio clarity
    utterance.pitch = 1.0;

    // Try finding a native Spanish voice
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(v => v.lang.startsWith('es') || v.name.toLowerCase().includes('spanish') || v.name.toLowerCase().includes('español'));
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
      setCurrentSpeechTitle(title || 'Contenido en lectura');
      announce(`Iniciando lectura en voz alta: ${title || 'contenido seleccionado'}.`);
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
  }, [announce]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Navigation logic
  const navigateTo = useCallback((route: RoutePath) => {
    setActiveRoute(route);
    // Stop speaking when switching views
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentSpeechTitle('');
    }
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Announce page change to assistive tech
    const pageTitles: Record<RoutePath, string> = {
      '/': 'Página de Inicio. Asociación NutriDiversa.',
      '/conocenos': 'Área Institucional y Transparencia. Conócenos y Órganos de Gobierno.',
      '/servicios': 'Servicio de Información, Orientación y Guías Nutricionales.',
      '/colabora': 'Participación, Donaciones y Alianzas Empresariales.',
      '/actualidad': 'Actualidad, Divulgación y Artículos Científicos.',
      '/contacto': 'Atención Multicanal y Canales Accesibles.',
      '/socios': 'Área Privada de Socios y Recursos Clínicos Exclusivos.',
      '/admin': 'Panel de Administración y Gestor de Contenidos CMS.'
    };
    announce(pageTitles[route] || 'Nueva página cargada.');
  }, [announce]);

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
        activeRoute,
        navigateTo,
        announcement,
        announce,
        activeModal,
        openModal,
        closeModal
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
