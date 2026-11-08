import React, { useState } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { useAuth } from '../context/AuthContext';
import { RoutePath } from '../types';
import { NutriDiversaLogo } from './NutriDiversaLogo';
import { Menu, X, HeartHandshake, PhoneCall, Shield, BookOpen, Crown } from 'lucide-react';

interface NavItem {
  path: RoutePath;
  label: string;
  easyLabel: string;
}

const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Inicio', easyLabel: '🏠 Inicio' },
  { path: '/conocenos', label: 'Conócenos', easyLabel: '👥 Quiénes somos' },
  { path: '/servicios', label: 'Proyectos y Colectivos', easyLabel: '📋 Colectivos y Talleres' },
  { path: '/actualidad', label: 'Actualidad', easyLabel: '📰 Noticias' },
  { path: '/socios', label: 'Área Socios', easyLabel: '⭐ Área Socios' },
  { path: '/colabora', label: 'Colabora', easyLabel: '🤝 Donar y Apoyar' },
  { path: '/contacto', label: 'Contacto', easyLabel: '📞 Escríbenos' }
];

export const Header: React.FC = () => {
  const { activeRoute, navigateTo, easyReading } = useAccessibility();
  const { effectiveRole } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path: RoutePath) => {
    navigateTo(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-emerald-950 text-white border-b-2 border-emerald-700/80 sticky top-[49px] z-40 shadow-md transition-colors">
      {/* Skip to main content link for keyboard & screen reader accessibility */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal (Presiona Enter)
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Zone 1: Official Brand Logo with Symbol and Typography */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('/')}
            className="text-left group focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md p-0.5"
            aria-label="Asociación NutriDiversa, ir a la página de inicio"
          >
            <NutriDiversaLogo variant="horizontal" size="sm" showSubtitle={false} lightText={true} />
          </button>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden lg:flex items-center gap-1.5 xl:gap-2.5"
          aria-label="Navegación principal de la web"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeRoute === item.path;
            const isSocios = item.path === '/socios';
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-[15px] xl:text-base font-semibold whitespace-nowrap px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-amber-300 bg-amber-400/15 border-amber-400/50 shadow-xs font-bold'
                    : isSocios
                    ? 'text-amber-300 hover:text-amber-200 bg-amber-400/10 hover:bg-amber-400/20 border-amber-400/30 font-semibold'
                    : 'text-emerald-100 hover:text-white bg-emerald-900/30 hover:bg-emerald-800/60 border-emerald-800/40 hover:border-emerald-700/60'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {easyReading ? item.easyLabel : item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Admin / CMS Quick Entry Button */}
          <button
            onClick={() => handleNavClick('/admin')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
              activeRoute === '/admin'
                ? 'bg-purple-600 text-white border-purple-400 shadow-xs'
                : 'bg-purple-950/80 hover:bg-purple-900 text-purple-200 border-purple-700/80'
            }`}
            title="Panel de Administración y CMS"
          >
            <Shield className="w-3.5 h-3.5 text-purple-300" />
            <span className="hidden sm:inline">Panel CMS</span>
            <span className="text-[10px] font-extrabold px-1.5 py-0.2 bg-purple-900 text-purple-200 rounded border border-purple-700">
              {effectiveRole === 'admin' ? 'Superadmin' : effectiveRole}
            </span>
          </button>

          <button
            onClick={() => handleNavClick('/socios')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-emerald-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-xs whitespace-nowrap min-touch-target"
            aria-label="Área de socios"
          >
            <Crown className="w-3.5 h-3.5 text-emerald-950" aria-hidden="true" />
            <span>Área Socios</span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-touch-target p-2 text-emerald-100 hover:text-white hover:bg-emerald-900 rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-emerald-950 border-t border-emerald-800 px-4 pt-3 pb-6 shadow-xl"
        >
          <nav className="flex flex-col gap-2" aria-label="Menú móvil">
            {/* Admin entry in mobile menu */}
            <button
              onClick={() => handleNavClick('/admin')}
              className={`min-touch-target text-left px-3 py-2.5 rounded-md text-base font-bold transition-colors flex items-center justify-between ${
                activeRoute === '/admin'
                  ? 'bg-purple-900 text-purple-100 border-l-4 border-purple-400'
                  : 'bg-purple-950/90 text-purple-200 border border-purple-800'
              }`}
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-300" />
                <span>⚙️ Panel de Administración CMS</span>
              </span>
              <span className="text-xs bg-purple-900 px-2 py-0.5 rounded font-bold uppercase text-purple-200 border border-purple-700">
                {effectiveRole}
              </span>
            </button>

            {NAV_ITEMS.map((item) => {
              const isActive = activeRoute === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`min-touch-target text-left px-3 py-2.5 rounded-md text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-900 text-amber-400 border-l-4 border-amber-400'
                      : 'text-emerald-100 hover:bg-emerald-900 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{easyReading ? item.easyLabel : item.label}</span>
                  {isActive && <span className="text-xs text-amber-400 font-bold">Activo</span>}
                </button>
              );
            })}

            <div className="pt-3 border-t border-emerald-800 flex flex-col gap-2.5 mt-2">
              <button
                onClick={() => handleNavClick('/socios')}
                className="w-full min-touch-target py-2.5 px-4 text-center text-sm font-bold text-emerald-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-colors flex items-center justify-center gap-2"
              >
                <Crown className="w-4 h-4" />
                <span>Acceder al Área Privada de Socios</span>
              </button>
              <button
                onClick={() => handleNavClick('/servicios')}
                className="w-full min-touch-target py-2.5 px-4 text-center text-sm font-bold text-white bg-emerald-700 rounded-md hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 border border-emerald-500/30"
              >
                <HeartHandshake className="w-4 h-4 text-emerald-200" />
                <span>Colaboración con Colectivos y Entidades</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
