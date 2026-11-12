import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  ChevronDown,
  ChevronUp,
  Info,
  Volume2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { PUBLISHED_GUIDES, UPCOMING_GUIDES } from '../../data/associationData';
import { GuideArticle } from '../../types';

export const GuiasView: React.FC = () => {
  const { easyReading, speakText } = useAccessibility();
  const [expandedId, setExpandedId] = useState<string | null>(PUBLISHED_GUIDES[0]?.id || null);

  const toggleArticle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleReadArticle = (article: GuideArticle) => {
    const bodyText = article.sections
      .map((s) => `${s.heading}. ${s.paragraphs.join(' ')}`)
      .join(' ');
    speakText(`${article.title}. ${article.excerpt}. ${bodyText}`, article.title);
  };

  return (
    <div className="w-full bg-white">
      {/* Resumen sencillo opcional */}
      {easyReading && (
        <section
          aria-label="Resumen sencillo de recursos y guías"
          className="bg-[#EAF5EF] border-b border-[#1D3532]/20 py-5 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto flex items-start gap-3">
            <Info className="w-6 h-6 text-[#1D3532] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-[#20282E]">
              <p className="font-bold text-base text-[#1D3532]">
                Resumen sencillo de esta página:
              </p>
              <p className="text-base leading-relaxed max-w-[65ch]">
                Aquí puedes leer gratis nuestras primeras 4 guías de lectura clara sobre
                alimentación inclusiva: selectividad alimentaria, texturas y olores, cómo observar
                una comida sin presión y la diferencia entre educación alimentaria y tratamiento
                nutricional.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Encabezado y aviso de transparencia */}
      <section className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="uppercase tracking-[0.1em] text-xs sm:text-[0.85rem] font-bold text-[#A94F1D]">
            RECURSOS Y GUÍAS · DIVULGACIÓN DE LECTURA CLARA
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1D3532] leading-[1.15]">
            Recursos y educación alimentaria accesible
          </h1>

          {/* Aviso de transparencia obligatorio */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] border-l-4 border-l-[#1D3532] p-5 sm:p-6 flex items-start gap-3.5 shadow-2xs">
            <ShieldCheck className="w-6 h-6 text-[#1D3532] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-base text-[#20282E] leading-relaxed max-w-[65ch]">
              Materiales divulgativos elaborados por la Asociación NutriDiversa a partir de
              literatura científica de referencia. Estos textos tienen carácter exclusivamente
              educativo e informativo y no sustituyen la consulta médica.
            </p>
          </div>
        </div>
      </section>

      {/* Primeras 4 guías divulgativas de lectura clara */}
      <section
        aria-labelledby="fichas-publicadas-heading"
        className="py-12 sm:py-16 border-b border-[#E6E2D8]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <h2
              id="fichas-publicadas-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]"
            >
              Primeras 4 guías divulgativas sobre alimentación inclusiva
            </h2>
            <p className="text-base text-[#20282E]">
              Selecciona cualquier guía para desplegar su lectura completa, autoría institucional,
              fuentes de referencia y aviso de alcance.
            </p>
          </div>

          <div className="space-y-5">
            {PUBLISHED_GUIDES.map((article, idx) => {
              const isExpanded = expandedId === article.id;
              return (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl border border-[#E6E2D8] overflow-hidden shadow-2xs"
                >
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#20282E]">
                      <span className="inline-flex items-center px-3 py-1 rounded-full font-bold bg-[#EAF5EF] text-[#1D3532]">
                        Guía {idx + 1} · {article.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#1D3532]" aria-hidden="true" />
                        <span>{article.date}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#1D3532]" aria-hidden="true" />
                        <span>{article.readTime}</span>
                      </span>
                      <span className="font-bold text-[#1D3532]">
                        Autoría: {article.author}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3532] leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-base text-[#20282E] leading-relaxed max-w-[65ch]">
                      {article.excerpt}
                    </p>

                    {easyReading && (
                      <div className="bg-[#EAF5EF] rounded-xl p-4 text-sm sm:text-base text-[#1D3532]">
                        <strong>Resumen sencillo: </strong>
                        {article.simpleSummary}
                      </div>
                    )}

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleArticle(article.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`article-content-${article.id}`}
                        className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#1D3532] hover:bg-[#176B50] text-white font-bold text-sm sm:text-base transition-colors"
                      >
                        <BookOpen className="w-4 h-4" aria-hidden="true" />
                        <span>{isExpanded ? 'Ocultar lectura completa' : 'Leer guía completa'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="w-4 h-4" aria-hidden="true" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleReadArticle(article)}
                        className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] hover:bg-[#F7F3EB] text-[#20282E] font-medium text-sm transition-colors"
                      >
                        <Volume2 className="w-4 h-4 text-[#1D3532]" aria-hidden="true" />
                        <span>Escuchar guía</span>
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div
                      id={`article-content-${article.id}`}
                      className="border-t border-[#E6E2D8] bg-[#FFFDF8] p-6 sm:p-8 space-y-6"
                    >
                      {article.sections.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-3 max-w-[65ch]">
                          <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1D3532]">
                            {section.heading}
                          </h4>
                          {section.paragraphs.map((p, pIdx) => (
                            <p
                              key={pIdx}
                              className="text-base text-[#20282E] leading-[1.65]"
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      ))}

                      <div className="pt-4 border-t border-[#E6E2D8] grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h5 className="text-sm font-bold uppercase tracking-wider text-[#1D3532]">
                            Fuentes científicas de referencia
                          </h5>
                          <ul className="list-disc list-inside text-sm text-[#20282E] space-y-1">
                            {article.sources.map((src, i) => (
                              <li key={i}>{src}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-[#F7F3EB] rounded-xl p-4 border border-[#E6E2D8] text-sm text-[#20282E] space-y-1">
                          <p className="font-bold text-[#1D3532]">Aviso de alcance:</p>
                          <p>{article.limitsNote}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Próximos recursos en preparación */}
      <section aria-labelledby="proximos-recursos-heading" className="py-12 sm:py-16 bg-[#F7F3EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <p className="uppercase tracking-[0.1em] text-xs font-bold text-[#A94F1D]">
              COCREACIÓN CON FAMILIAS
            </p>
            <h2
              id="proximos-recursos-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]"
            >
              Próximos recursos en preparación
            </h2>
            <p className="text-base text-[#20282E] max-w-[65ch]">
              Nuevas guías prácticas que se elaborarán y evaluarán a partir de la fase de escucha
              del proyecto piloto:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_GUIDES.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F7F3EB] text-[#A94F1D] border border-[#E6E2D8]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D96820]" aria-hidden="true" />
                    <span>{item.statusTag}</span>
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1D3532] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#20282E] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
