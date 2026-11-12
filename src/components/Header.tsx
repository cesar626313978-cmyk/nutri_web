import React, { useState, useRef, useEffect } from 'react';
import {
  Sprout,
  SlidersHorizontal,
  Volume2,
  Square,
  Menu,
  X,
  Check,
} from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { RoutePath, TextScale } from '../types';

export const Header: React.FC = () => {
  const {
    activeRoute,
    navigateTo,
    fontScale,
    setFontScale,
    highContrast,
    setHighContrast,
    easyReading,
    toggleEasyReading,
    isSpeaking,
    speakCurrentPage,
    stopSpeech,
    announcement,
  } = useAccessibility();

  const [readingMenuOpen, setReadingMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: { label: string; path: RoutePath }[] = [
    { label: 'El proyecto', path: '/proyecto' },
    { label: 'Guías', path: '/guias' },
    { label: 'La asociación', path: '/asociacion' },
    { label: 'Contacto', path: '/contacto' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setReadingMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setReadingMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigateTo(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-40 w-full bg-[#FFFDF8] border-b border-[#E6E2D8] transition-colors"
      role="banner"
    >
      {/* Región viva para lectores de pantalla */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      {/* Enlace de salto al contenido principal (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#176B50] focus:text-white focus:px-4 focus:py-2.5 focus:rounded-lg focus:font-bold focus:shadow-md"
      >
        Saltar al contenido principal
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] max-h-[72px] flex items-center justify-between gap-2">
        {/* Izquierda: Logotipo limpio de una sola línea */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="inline-flex items-center gap-2.5 min-h-[44px] py-1 focus:outline-none rounded-lg group shrink-0"
          aria-label="NutriDiversa - Ir a la página de inicio"
        >
          <span
            className="w-9 h-9 rounded-full bg-[#EAF5EF] border border-[#176B50]/20 flex items-center justify-center text-[#176B50] group-hover:bg-[#176B50] group-hover:text-white transition-colors"
            aria-hidden="true"
          >
            <Sprout className="w-5 h-5" />
          </span>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none">
            <span className="text-[#1D3532]">Nutri</span>
            <span className="text-[#D96820]">Diversa</span>
          </span>
        </a>

        {/* Centro: Enlaces de navegación semánticos <a href="..."> */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {navItems.map((item) => {
            const isActive = activeRoute === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-lg text-[1rem] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#EAF5EF] text-[#176B50] font-bold'
                    : 'text-[#20282E] hover:bg-[#F7F3EB] hover:text-[#1D3532]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Derecha: Botón desplegable Opciones de lectura + Menú móvil */}
        <div className="flex items-center gap-2" ref={dropdownRef}>
          <div className="relative">
            <button
              type="button"
              onClick={() => setReadingMenuOpen((prev) => !prev)}
              aria-expanded={readingMenuOpen}
              aria-haspopup="dialog"
              aria-controls="reading-options-panel"
              className={`inline-flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-full border text-sm sm:text-[0.95rem] font-medium transition-colors ${
                readingMenuOpen || easyReading || highContrast || fontScale !== '100' || isSpeaking
                  ? 'bg-[#EAF5EF] border-[#176B50] text-[#176B50] font-bold'
                  : 'bg-white border-[#E6E2D8] text-[#20282E] hover:bg-[#F7F3EB]'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4 text-[#176B50] shrink-0" aria-hidden="true" />
              <span>Opciones de lectura</span>
            </button>

            {/* Panel flotante limpio de Opciones de lectura */}
            {readingMenuOpen && (
              <div
                id="reading-options-panel"
                role="dialog"
                aria-label="Opciones de lectura y accesibilidad"
                className="absolute right-0 mt-2 w-[310px] sm:w-[350px] max-w-[calc(100vw-1.5rem)] bg-white border border-[#E6E2D8] rounded-2xl shadow-xl p-5 z-50 space-y-5"
              >
                <div className="flex items-center justify-between border-b border-[#E6E2D8] pb-3">
                  <h2 className="font-serif text-lg font-bold text-[#1D3532]">
                    Opciones de lectura
                  </h2>
                  <button
                    type="button"
                    onClick={() => setReadingMenuOpen(false)}
                    className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 rounded-lg text-[#5A6670] hover:text-[#20282E] hover:bg-[#F7F3EB]"
                    aria-label="Cerrar opciones de lectura"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                {/* 1. Tamaño de texto */}
                <div>
                  <span className="block text-sm font-bold text-[#20282E] mb-2">
                    1. Tamaño de texto
                  </span>
                  <div className="grid grid-cols-3 gap-2" role="group" aria-label="Seleccionar tamaño de texto">
                    {(
                      [
                        { scale: '100', label: 'Normal', pct: '100%' },
                        { scale: '115', label: 'Grande', pct: '115%' },
                        { scale: '130', label: 'Muy grande', pct: '130%' },
                      ] as { scale: TextScale; label: string; pct: string }[]
                    ).map((opt) => {
                      const selected = fontScale === opt.scale;
                      return (
                        <button
                          key={opt.scale}
                          type="button"
                          onClick={() => setFontScale(opt.scale)}
                          aria-pressed={selected}
                          className={`min-h-[44px] px-2 py-2 rounded-lg border text-xs sm:text-sm font-medium flex flex-col items-center justify-center transition-colors ${
                            selected
                              ? 'bg-[#176B50] text-white border-[#176B50] font-bold'
                              : 'bg-[#FFFDF8] text-[#20282E] border-[#E6E2D8] hover:bg-[#F7F3EB]'
                          }`}
                        >
                          <span>{opt.label}</span>
                          <span className="text-[11px] opacity-85">({opt.pct})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Contraste */}
                <div>
                  <span className="block text-sm font-bold text-[#20282E] mb-2">
                    2. Contraste visual
                  </span>
                  <div className="grid grid-cols-1 gap-2" role="group" aria-label="Seleccionar modo de contraste">
                    <button
                      type="button"
                      onClick={() => setHighContrast(false)}
                      aria-pressed={!highContrast}
                      className={`min-h-[44px] px-3 py-2 rounded-lg border text-sm text-left flex items-center justify-between transition-colors ${
                        !highContrast
                          ? 'bg-[#EAF5EF] border-[#176B50] text-[#176B50] font-bold'
                          : 'bg-[#FFFDF8] border-[#E6E2D8] text-[#20282E] hover:bg-[#F7F3EB]'
                      }`}
                    >
                      <span>Diseño cálido predeterminado</span>
                      {!highContrast && <Check className="w-4 h-4 shrink-0" aria-hidden="true" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => setHighContrast(true)}
                      aria-pressed={highContrast}
                      className={`min-h-[44px] px-3 py-2 rounded-lg border text-sm text-left flex items-center justify-between transition-colors ${
                        highContrast
                          ? 'bg-black border-[#FFD700] text-[#FFD700] font-bold'
                          : 'bg-[#FFFDF8] border-[#E6E2D8] text-[#20282E] hover:bg-[#F7F3EB]'
                      }`}
                    >
                      <span>Modo alto contraste</span>
                      {highContrast && <Check className="w-4 h-4 shrink-0" aria-hidden="true" />}
                    </button>
                  </div>
                </div>

                {/* 3. Resumen sencillo */}
                <div className="pt-1 border-t border-[#E6E2D8]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-sm font-bold text-[#20282E]">
                        3. Resumen sencillo
                      </span>
                      <span className="block text-xs text-[#5A6670]">
                        Muestra una explicación cotidiana al inicio de cada página.
                      </span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={easyReading}
                      onClick={toggleEasyReading}
                      className={`min-w-[64px] min-h-[44px] px-3 rounded-lg border text-sm font-bold transition-colors shrink-0 ${
                        easyReading
                          ? 'bg-[#176B50] text-white border-[#176B50]'
                          : 'bg-[#F7F3EB] text-[#20282E] border-[#E6E2D8]'
                      }`}
                    >
                      {easyReading ? 'Activo' : 'Activar'}
                    </button>
                  </div>
                </div>

                {/* 4. Lectura en voz alta */}
                <div className="pt-1 border-t border-[#E6E2D8]">
                  <span className="block text-sm font-bold text-[#20282E] mb-2">
                    4. Lectura en voz alta
                  </span>
                  <button
                    type="button"
                    onClick={isSpeaking ? stopSpeech : speakCurrentPage}
                    className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
                      isSpeaking
                        ? 'bg-[#D96820] text-white border-[#D96820]'
                        : 'bg-[#1D3532] text-white border-[#1D3532] hover:bg-[#176B50]'
                    }`}
                  >
                    {isSpeaking ? (
                      <>
                        <Square className="w-4 h-4 fill-current" aria-hidden="true" />
                        <span>Detener lectura en voz alta</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" aria-hidden="true" />
                        <span>Escuchar el contenido de esta página</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Botón de menú móvil (44x44px mínimo garantizado) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg border border-[#E6E2D8] bg-white text-[#20282E] hover:bg-[#F7F3EB]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Navegación móvil"
          className="md:hidden bg-[#FFFDF8] border-b border-[#E6E2D8] px-4 py-3 space-y-1 shadow-lg"
        >
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            aria-current={activeRoute === '/' ? 'page' : undefined}
            className={`flex items-center min-h-[44px] px-4 py-2 rounded-lg text-base font-medium ${
              activeRoute === '/'
                ? 'bg-[#EAF5EF] text-[#176B50] font-bold'
                : 'text-[#20282E] hover:bg-[#F7F3EB]'
            }`}
          >
            Inicio
          </a>
          {navItems.map((item) => {
            const isActive = activeRoute === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center min-h-[44px] px-4 py-2 rounded-lg text-base font-medium ${
                  isActive
                    ? 'bg-[#EAF5EF] text-[#176B50] font-bold'
                    : 'text-[#20282E] hover:bg-[#F7F3EB]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};
