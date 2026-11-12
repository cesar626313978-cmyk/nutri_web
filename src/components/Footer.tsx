import React, { useState } from 'react';
import { Settings, X, CheckCircle2 } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { RoutePath } from '../types';

export const Footer: React.FC = () => {
  const { activeRoute, navigateTo, announce } = useAccessibility();
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [showDetailedConfig, setShowDetailedConfig] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false); // SIEMPRE DESMARCADA POR DEFECTO
  const [cookieStatusMsg, setCookieStatusMsg] = useState<string | null>(null);

  const legalLinks: { label: string; path: RoutePath }[] = [
    { label: 'Transparencia', path: '/transparencia' },
    { label: 'Aviso legal', path: '/aviso-legal' },
    { label: 'Política de privacidad', path: '/privacidad' },
    { label: 'Política de cookies', path: '/cookies' },
    { label: 'Accesibilidad', path: '/accesibilidad' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    navigateTo(path);
  };

  const handleAcceptCookies = () => {
    setAnalyticsConsent(true);
    setCookieStatusMsg(
      'Preferencias guardadas: has aceptado las cookies opcionales. Actualmente NutriDiversa solo emplea almacenamiento técnico local.'
    );
    announce('Preferencias de cookies guardadas.');
  };

  const handleRejectCookies = () => {
    setAnalyticsConsent(false);
    setCookieStatusMsg(
      'Preferencias guardadas: se han rechazado todas las cookies no necesarias. Solo se mantienen las preferencias técnicas esenciales.'
    );
    announce('Se han rechazado las cookies no necesarias.');
  };

  const handleSaveCustomConfig = () => {
    setCookieStatusMsg(
      analyticsConsent
        ? 'Configuración personalizada guardada con cookies analíticas activadas.'
        : 'Configuración personalizada guardada: solo almacenamiento técnico esencial activo.'
    );
    announce('Configuración personalizada de cookies guardada.');
  };

  return (
    <footer
      role="contentinfo"
      className="bg-[#1D3532] text-white border-t border-[#13382C] mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Columna de identidad oficial */}
        <div className="space-y-2 text-sm sm:text-base leading-relaxed">
          <p className="font-serif font-bold text-lg text-white">
            NutriDiversa — Asociación de Nutrición en la Discapacidad
          </p>
          <p className="text-white/90">
            Asociación sin ánimo de lucro de ámbito estatal · NIF: G22670707 · RNA: 632919
          </p>
          <p className="text-white/85 text-sm">
            C/ Polop, 30, Esc. 1, 4.º O, 03015 Alicante ·{' '}
            <a
              href="mailto:info@nutridiversa.org"
              className="underline font-bold text-white hover:text-[#EAF5EF] inline-flex items-center min-h-[24px] py-1"
            >
              info@nutridiversa.org
            </a>
          </p>
        </div>

        {/* Enlaces legales, de transparencia y Configuración de Cookies (altura táctil mínima 44px) */}
        <div className="flex flex-col items-start lg:items-end gap-2">
          <nav
            aria-label="Enlaces legales y de transparencia"
            className="flex flex-wrap items-center gap-x-2 gap-y-1.5"
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

            <button
              type="button"
              onClick={() => {
                setCookieModalOpen(true);
                setCookieStatusMsg(null);
              }}
              className="inline-flex items-center gap-1.5 justify-center min-h-[44px] px-3.5 py-2 rounded-lg text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <Settings className="w-4 h-4" aria-hidden="true" />
              <span>Configurar cookies</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Modal de Configuración de Cookies conforme a la Guía de la AEPD (Aceptar, Rechazar y Configurar al mismo nivel visual y tamaño) */}
      {cookieModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-config-title"
        >
          <div className="bg-white text-[#20282E] rounded-2xl border border-[#E6E2D8] max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-[#E6E2D8] pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#A94F1D]">
                  CUMPLIMIENTO GUÍA AEPD · ART. 22.2 LSSI-CE
                </p>
                <h2
                  id="cookie-config-title"
                  className="font-serif text-xl sm:text-2xl font-bold text-[#1D3532]"
                >
                  Configuración de Cookies y Almacenamiento Local
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setCookieModalOpen(false)}
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg text-[#5A6670] hover:text-[#20282E] hover:bg-[#F7F3EB]"
                aria-label="Cerrar panel de configuración de cookies"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-[#20282E] leading-relaxed">
              <p>
                Actualmente, <strong>www.nutridiversa.org</strong> utiliza únicamente almacenamiento
                local técnico estrictamente necesario para guardar tus preferencias de accesibilidad
                (tamaño de texto, modo de contraste y resumen sencillo) cuando las activas en{' '}
                <em>«Opciones de lectura»</em>.
              </p>
              <p>
                Conforme a la Guía de la Agencia Española de Protección de Datos (AEPD), dispones de
                los botones <strong>Aceptar</strong>, <strong>Rechazar</strong> y{' '}
                <strong>Configurar</strong> exactamente al mismo nivel visual y tamaño, sin casillas
                premarcadas:
              </p>
            </div>

            {showDetailedConfig && (
              <div className="bg-[#F7F3EB] rounded-xl border border-[#E6E2D8] p-4 space-y-4">
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#E6E2D8]">
                  <div>
                    <p className="font-bold text-sm text-[#1D3532]">
                      1. Almacenamiento técnico de accesibilidad (Estrictamente necesario)
                    </p>
                    <p className="text-xs text-[#5A6670]">
                      Guarda el tamaño de letra (<code>nutridiversa_font_size</code>), contraste (
                      <code>nutridiversa_contrast</code>) y resumen sencillo (
                      <code>nutridiversa_simple_summary</code>).
                    </p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#EAF5EF] text-[#1D3532] shrink-0">
                    Siempre activo
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <label
                      htmlFor="cookie_analytics_toggle"
                      className="font-bold text-sm text-[#1D3532] block cursor-pointer"
                    >
                      2. Cookies analíticas o estadísticas opcionales (Actualmente no instaladas)
                    </label>
                    <p className="text-xs text-[#5A6670]">
                      Desmarcadas por defecto. Si en el futuro se habilitan estadísticas agregadas,
                      solo se activarán con tu consentimiento explícito.
                    </p>
                  </div>
                  <input
                    id="cookie_analytics_toggle"
                    name="cookie_analytics_toggle"
                    type="checkbox"
                    checked={analyticsConsent}
                    onChange={(e) => setAnalyticsConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-[#E6E2D8] text-[#1D3532] shrink-0"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSaveCustomConfig}
                    className="min-h-[44px] px-4 py-2 rounded-lg bg-[#1D3532] text-white text-sm font-bold hover:bg-[#176B50]"
                  >
                    Guardar mi selección personalizada
                  </button>
                </div>
              </div>
            )}

            {cookieStatusMsg && (
              <div
                role="status"
                aria-live="polite"
                className="bg-[#EAF5EF] border border-[#1D3532]/30 rounded-xl p-4 text-sm font-bold text-[#1D3532] flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#176B50] shrink-0" aria-hidden="true" />
                <span>{cookieStatusMsg}</span>
              </div>
            )}

            {/* Tres botones exactamente al mismo nivel visual y tamaño (Guía AEPD) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button
                type="button"
                onClick={handleAcceptCookies}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border-2 border-[#1D3532] bg-[#1D3532] text-white font-bold text-base hover:bg-[#176B50] transition-colors"
              >
                Aceptar
              </button>

              <button
                type="button"
                onClick={handleRejectCookies}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border-2 border-[#1D3532] bg-[#1D3532] text-white font-bold text-base hover:bg-[#176B50] transition-colors"
              >
                Rechazar
              </button>

              <button
                type="button"
                onClick={() => setShowDetailedConfig((prev) => !prev)}
                aria-expanded={showDetailedConfig}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border-2 border-[#1D3532] bg-[#1D3532] text-white font-bold text-base hover:bg-[#176B50] transition-colors"
              >
                Configurar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
