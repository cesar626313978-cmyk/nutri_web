import React, { useState, useRef, useEffect } from 'react';
import {
  SlidersHorizontal,
  Volume2,
  Square,
  Menu,
  X,
  Check,
} from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { RoutePath, TextScale } from '../types';
import { INSTITUTIONAL_DATA } from '../data/associationData';

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
    { label: 'Inicio', path: '/' },
    { label: 'Qué hacemos', path: '/que-hacemos' },
    { label: 'Proyecto piloto', path: '/proyecto' },
    { label: 'Recursos', path: '/recursos' },
    { label: 'Conócenos', path: '/conocenos' },
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
      className="sticky top-0 z-40 w-full bg-white border-b border-[#E6E2D8] transition-colors"
      role="banner"
    >
      {/* Región viva para lectores de pantalla */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      {/* Enlace de salto al contenido principal (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#1D3532] focus:text-white focus:px-4 focus:py-2.5 focus:rounded-lg focus:font-bold focus:shadow-md"
      >
        Saltar al contenido principal
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[68px] py-2 flex items-center justify-between gap-3">
        {/* Izquierda: Logotipo Oficial Horizontal ND + Subtítulo oficial */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="inline-flex flex-col justify-center min-h-[44px] py-1 focus:outline-none rounded-lg shrink-0"
          aria-label="Logotipo de la Asociación NutriDiversa - Ir a Inicio"
        >
          <img
            src={INSTITUTIONAL_DATA.logoUrl}
            alt="Logotipo de la Asociación NutriDiversa"
            className="h-9 sm:h-11 w-auto object-contain select-none"
          />
          <span className="hidden lg:block text-[11px] font-bold tracking-wide text-[#1D3532] leading-tight mt-0.5 pl-1">
            — Asociación de Nutrición en la Discapacidad —
          </span>
        </a>

        {/* Centro: Menú de navegación con enlaces reales */}
        <nav
          aria-label="Navegación principal"
          className="hidden xl:flex items-center gap-1"
        >
          {navItems.map((item) => {
            const isActive =
              activeRoute === item.path ||
              (item.path === '/recursos' && activeRoute === '/guias') ||
              (item.path === '/conocenos' && activeRoute === '/asociacion');
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex items-center justify-center min-h-[44px] px-3.5 py-2 rounded-lg text-[0.98rem] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#EAF5EF] text-[#1D3532] font-bold'
                    : 'text-[#1D3532] hover:bg-[#F7F3EB]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Derecha: Botón destacado Colaborar + Opciones de lectura + Menú móvil */}
        <div className="flex items-center gap-2 shrink-0" ref={dropdownRef}>
          <a
            href="/conocenos#colaborar"
            onClick={(e) => handleLinkClick(e, '/conocenos#colaborar')}
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-xl bg-[#A94F1D] hover:bg-[#1D3532] text-white font-bold text-sm sm:text-[0.95rem] transition-colors shadow-2xs"
          >
            Colaborar
          </a>

          <div className="relative">
            <button
              type="button"
              onClick={() => setReadingMenuOpen((prev) => !prev)}
              aria-expanded={readingMenuOpen}
              aria-haspopup="dialog"
              aria-controls="reading-options-panel"
              className={`inline-flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-xl border text-sm font-medium transition-colors ${
                readingMenuOpen || easyReading || highContrast || fontScale !== '100' || isSpeaking
                  ? 'bg-[#EAF5EF] border-[#1D3532] text-[#1D3532] font-bold'
                  : 'bg-white border-[#E6E2D8] text-[#20282E] hover:bg-[#F7F3EB]'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4 text-[#1D3532] shrink-0" aria-hidden="true" />
              <span className="hidden md:inline">Opciones de lectura</span>
              <span className="md:hidden">Lectura</span>
            </button>

            {/* Panel flotante limpio de Opciones de lectura */}
            {readingMenuOpen && (
              <div
                id="reading-options-panel"
                role="dialog"
                aria-label="Opciones de lectura y accesibilidad"
                className="absolute right-0 mt-2 w-[300px] sm:w-[350px] max-w-[calc(100vw-1.5rem)] bg-white border border-[#E6E2D8] rounded-2xl shadow-xl p-5 z-50 space-y-5"
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
                  <div
                    className="grid grid-cols-3 gap-2"
                    role="group"
                    aria-label="Seleccionar tamaño de texto"
                  >
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
                              ? 'bg-[#1D3532] text-white border-[#1D3532] font-bold'
                              : 'bg-white text-[#20282E] border-[#E6E2D8] hover:bg-[#F7F3EB]'
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
                  <div
                    className="grid grid-cols-1 gap-2"
                    role="group"
                    aria-label="Seleccionar modo de contraste"
                  >
                    <button
                      type="button"
                      onClick={() => setHighContrast(false)}
                      aria-pressed={!highContrast}
                      className={`min-h-[44px] px-3 py-2 rounded-lg border text-sm text-left flex items-center justify-between transition-colors ${
                        !highContrast
                          ? 'bg-[#EAF5EF] border-[#1D3532] text-[#1D3532] font-bold'
                          : 'bg-white border-[#E6E2D8] text-[#20282E] hover:bg-[#F7F3EB]'
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
                          : 'bg-white border-[#E6E2D8] text-[#20282E] hover:bg-[#F7F3EB]'
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
                          ? 'bg-[#1D3532] text-white border-[#1D3532]'
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
                        ? 'bg-[#A94F1D] text-white border-[#A94F1D]'
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

          {/* Botón de menú móvil / tablet (44x44px mínimo garantizado) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className="xl:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl border border-[#E6E2D8] bg-white text-[#1D3532] hover:bg-[#F7F3EB]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil / tablet */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Navegación móvil"
          className="xl:hidden bg-white border-b border-[#E6E2D8] px-4 py-4 space-y-1.5 shadow-lg"
        >
          {navItems.map((item) => {
            const isActive =
              activeRoute === item.path ||
              (item.path === '/recursos' && activeRoute === '/guias') ||
              (item.path === '/conocenos' && activeRoute === '/asociacion');
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center min-h-[44px] px-4 py-2.5 rounded-xl text-base font-medium ${
                  isActive
                    ? 'bg-[#EAF5EF] text-[#1D3532] font-bold'
                    : 'text-[#1D3532] hover:bg-[#F7F3EB]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="/conocenos#colaborar"
              onClick={(e) => handleLinkClick(e, '/conocenos#colaborar')}
              className="flex items-center justify-center w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#A94F1D] text-white font-bold text-base"
            >
              Colaborar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
