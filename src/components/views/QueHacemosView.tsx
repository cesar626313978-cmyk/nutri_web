import React from 'react';
import {
  BookOpen,
  MessageSquareHeart,
  GraduationCap,
  Handshake,
  Accessibility,
  Sparkles,
  HeartHandshake,
  Users,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { WHAT_WE_DO_LINES, NATIONAL_ACTION_SCOPES } from '../../data/associationData';

export const QueHacemosView: React.FC = () => {
  const { easyReading, navigateTo } = useAccessibility();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigateTo(path);
  };

  const lineIcons = [
    <BookOpen key="info" className="w-6 h-6 text-[#D96820]" aria-hidden="true" />,
    <MessageSquareHeart key="escucha" className="w-6 h-6 text-[#D96820]" aria-hidden="true" />,
    <GraduationCap key="edu" className="w-6 h-6 text-[#D96820]" aria-hidden="true" />,
    <Handshake key="entidades" className="w-6 h-6 text-[#D96820]" aria-hidden="true" />,
  ];

  const scopeIcons = [
    <Accessibility key="disc" className="w-6 h-6 text-[#1D3532]" aria-hidden="true" />,
    <Sparkles key="tea" className="w-6 h-6 text-[#1D3532]" aria-hidden="true" />,
    <HeartHandshake key="raras" className="w-6 h-6 text-[#1D3532]" aria-hidden="true" />,
    <Users key="familias" className="w-6 h-6 text-[#1D3532]" aria-hidden="true" />,
  ];

  return (
    <div className="w-full bg-white">
      {easyReading && (
        <section
          aria-label="Resumen sencillo de Qué hacemos"
          className="bg-[#EAF5EF] border-b border-[#1D3532]/20 py-5 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto flex items-start gap-3">
            <Info className="w-6 h-6 text-[#1D3532] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-[#20282E]">
              <p className="font-bold text-base text-[#1D3532]">
                Resumen sencillo de esta página:
              </p>
              <p className="text-base leading-relaxed max-w-[65ch]">
                NutriDiversa trabaja en toda España para que la información sobre alimentación y
                nutrición sea fácil de entender y útil para personas con discapacidad intelectual,
                física o sensorial, autismo, enfermedades raras, dependencia y sus familias.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Cabecera de Qué hacemos */}
      <section className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="uppercase tracking-[0.1em] text-xs sm:text-[0.85rem] font-bold text-[#A94F1D]">
            QUÉ HACEMOS · VOCACIÓN ESTATAL E INCLUSIVA
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1D3532] leading-[1.15]">
            Trabajamos para que la información alimentaria sea comprensible y útil
          </h1>
          <p className="text-base sm:text-[1.1rem] text-[#20282E] leading-[1.6] max-w-[65ch]">
            Desde NutriDiversa impulsamos líneas de educación alimentaria accesible y participativa
            en todo el territorio nacional, teniendo en cuenta las distintas necesidades de apoyo de
            las personas y de sus familias.
          </p>
        </div>
      </section>

      {/* Las 4 líneas de actuación */}
      <section className="py-12 sm:py-16 border-b border-[#E6E2D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]">
            Nuestras cuatro líneas de actuación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHAT_WE_DO_LINES.map((line, idx) => (
              <div
                key={line.id}
                className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-6 sm:p-7 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] flex items-center justify-center">
                  {lineIcons[idx]}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1D3532]">{line.title}</h3>
                <p className="text-base text-[#20282E] leading-relaxed">{line.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colectivos a los que se dirige la asociación a nivel estatal */}
      <section className="py-12 sm:py-16 bg-[#F7F3EB] border-b border-[#E6E2D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 max-w-3xl">
            <p className="uppercase tracking-[0.1em] text-xs font-bold text-[#A94F1D]">
              ÁMBITO ESTATAL
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]">
              Colectivos a los que se dirige NutriDiversa
            </h2>
            <p className="text-base text-[#20282E] leading-relaxed">
              Nuestra acción asociativa abarca distintos perfiles de discapacidad y necesidades de
              apoyo en la alimentación cotidiana:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NATIONAL_ACTION_SCOPES.map((scope, idx) => (
              <div
                key={scope.id}
                className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-7 space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAF5EF] flex items-center justify-center">
                  {scopeIcons[idx]}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1D3532]">{scope.title}</h3>
                <p className="text-base text-[#20282E] leading-relaxed">{scope.description}</p>
              </div>
            ))}
          </div>

          {/* Nota de enfoque no clínico */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] border-l-4 border-l-[#1D3532] p-6 flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#1D3532] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-base text-[#20282E] leading-relaxed">
              <strong className="font-bold text-[#1D3532]">Enfoque educativo y comunitario: </strong>
              Todas las actividades de NutriDiversa tienen carácter divulgativo, informativo y de
              educación alimentaria participativa. No sustituyen la atención médica, el diagnóstico
              facultativo ni el tratamiento nutricional clínico.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/proyecto"
              onClick={(e) => handleNav(e, '/proyecto')}
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-[#A94F1D] hover:bg-[#1D3532] text-white font-bold text-base transition-colors"
            >
              Ver el primer proyecto piloto
            </a>
            <a
              href="/recursos"
              onClick={(e) => handleNav(e, '/recursos')}
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl border-2 border-[#1D3532] bg-white text-[#1D3532] font-bold text-base hover:bg-[#F7F3EB] transition-colors"
            >
              Explorar recursos y guías
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
