import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { INSTITUTIONAL_DATA } from '../data/associationData';
import { NutriDiversaLogo } from './NutriDiversaLogo';
import { Shield, FileCheck, Mail, MapPin, Heart, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, openModal } = useAccessibility();

  return (
    <footer className="bg-emerald-950 text-white border-t-4 border-emerald-700 transition-colors" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity & Official Registry */}
          <div className="space-y-4">
            <button
              onClick={() => navigateTo('/')}
              className="text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
              aria-label="Ir a la página de inicio de NutriDiversa"
            >
              <NutriDiversaLogo variant="horizontal" size="md" showSubtitle={true} />
            </button>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Asociación sin ánimo de lucro de ámbito estatal dedicada a la promoción de la salud y la nutrición inclusiva. <em>“La salud también se construye desde la diversidad.”</em>
            </p>
            <div className="bg-emerald-900/60 p-3 rounded border border-emerald-700/60 text-[11px] text-emerald-200 space-y-1">
              <p className="font-bold text-white flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                Registro Nacional Oficial:
              </p>
              <p>Nº Nacional: <strong>{INSTITUTIONAL_DATA.nationalRegistry.number}</strong> ({INSTITUTIONAL_DATA.nationalRegistry.section}, {INSTITUTIONAL_DATA.nationalRegistry.group})</p>
              <p>Sede: Alicante · Ámbito estatal</p>
              <p className="pt-1">
                <a
                  href="/assets/aistudio/Dossier_NutriDiversa__borrador_final_actualizado_dfe3321f.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Dossier_Institucional_NutriDiversa_2026.pdf"
                  className="text-amber-300 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Descargar Dossier Institucional 2026 (PDF)</span>
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-4 pb-1 border-b border-emerald-800">
              Mapa del Sitio
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('/')}
                  className="hover:text-emerald-300 text-left transition-colors min-touch-target flex items-center"
                >
                  Inicio y Misión
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/conocenos')}
                  className="hover:text-emerald-300 text-left transition-colors min-touch-target flex items-center"
                >
                  Conócenos y Órganos de Gobierno
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/servicios')}
                  className="hover:text-emerald-300 text-left transition-colors min-touch-target flex items-center"
                >
                  Proyectos para Colectivos y Guías
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/colabora')}
                  className="hover:text-emerald-300 text-left transition-colors min-touch-target flex items-center"
                >
                  Hazte Socio y Empresas RSC
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/actualidad')}
                  className="hover:text-emerald-300 text-left transition-colors min-touch-target flex items-center"
                >
                  Divulgación y Evidencia Científica
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/contacto')}
                  className="hover:text-emerald-300 text-left transition-colors min-touch-target flex items-center"
                >
                  Canales de Contacto Accesibles
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Statutory Compliance */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-4 pb-1 border-b border-emerald-800">
              Marco Jurídico y Estatutos
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => openModal('aviso-legal')}
                  className="hover:text-emerald-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Aviso Legal y Prevención Intrusismo (Art. 8)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('privacidad')}
                  className="hover:text-emerald-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Protección Datos de Salud (Art. 42 RGPD)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('accesibilidad')}
                  className="hover:text-emerald-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Declaración Accesibilidad WCAG 2.2 AAA</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('cookies')}
                  className="hover:text-emerald-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Política de Cookies Éticas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal('certificado-oficial')}
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1.5 pt-1"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Ver Certificado Ministerial Oficial</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Sede Social & Contacto Inclusivo */}
          <div className="space-y-3 text-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 pb-1 border-b border-emerald-800">
              Sede Social y Atención
            </h3>
            <div className="flex items-start gap-2 text-neutral-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Alicante (España)<br />
                Ámbito de actuación estatal
              </span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="https://www.nutridiversa.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 font-semibold">
                www.nutridiversa.org
              </a>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`mailto:${INSTITUTIONAL_DATA.contact.email}`} className="hover:text-emerald-300 font-semibold">
                {INSTITUTIONAL_DATA.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="pt-8 border-t border-emerald-800/80 text-center text-xs text-neutral-400 space-y-2">
          <p className="font-semibold text-neutral-200">
            {INSTITUTIONAL_DATA.name} | Web Oficial: <a href="https://www.nutridiversa.org" className="text-emerald-300 hover:underline">www.nutridiversa.org</a> | Contacto: <a href="mailto:info@nutridiversa.org" className="text-emerald-300 hover:underline">info@nutridiversa.org</a> | Registro Nacional: {INSTITUTIONAL_DATA.nationalRegistry.number} | Sede: Alicante / Alacant (España).
          </p>
          <p className="text-[11px] text-neutral-400 flex items-center justify-center gap-1">
            <span>Diseñada con rigor institucional y accesibilidad universal certificable</span>
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>para todas las personas.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
