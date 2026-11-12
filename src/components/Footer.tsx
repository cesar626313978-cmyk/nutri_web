import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { RoutePath } from '../types';

export const Footer: React.FC = () => {
  const { activeRoute, navigateTo } = useAccessibility();

  const legalLinks: { label: string; path: RoutePath }[] = [
    { label: 'Transparencia', path: '/transparencia' },
    { label: 'Privacidad', path: '/privacidad' },
    { label: 'Aviso legal', path: '/aviso-legal' },
    { label: 'Cookies', path: '/cookies' },
    { label: 'Accesibilidad', path: '/accesibilidad' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <footer
      role="contentinfo"
      className="bg-[#13382C] text-white border-t border-[#1D3532] mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Izquierda: Identidad registral en una línea limpia + correo directo */}
        <div className="space-y-1.5 text-sm sm:text-base leading-relaxed">
          <p className="text-white/95 font-medium">
            NutriDiversa · Asociación de ámbito estatal · Sede en Alicante · RNA 632919
          </p>
          <p className="text-white/80 text-sm">
            NIF: G22670707 · C/ Polop, 30, Esc. 1, 4º O, 03015 Alicante ·{' '}
            <a
              href="mailto:info@nutridiversa.org"
              className="underline font-bold text-white hover:text-[#EAF5EF] inline-flex items-center min-h-[24px] py-1"
            >
              info@nutridiversa.org
            </a>
          </p>
        </div>

        {/* Derecha: Enlaces con área táctil mínima de 44px de alto */}
        <nav
          aria-label="Enlaces legales y de transparencia"
          className="flex flex-wrap items-center gap-x-2 gap-y-1"
        >
          {legalLinks.map((link) => {
            const isActive = activeRoute === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex items-center justify-center min-h-[44px] px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/15 text-white font-bold underline'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};
