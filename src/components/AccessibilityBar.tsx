import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { Volume2, VolumeX, Pause, Play, Eye, Sparkles, Type, RotateCcw } from 'lucide-react';

export const AccessibilityBar: React.FC = () => {
  const {
    easyReading,
    toggleEasyReading,
    highContrast,
    toggleHighContrast,
    fontScale,
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
    announcement,
    activeRoute
  } = useAccessibility();

  const handleGlobalRead = () => {
    if (isSpeaking) {
      if (isPaused) {
        resumeSpeech();
      } else {
        pauseSpeech();
      }
    } else {
      // Speak a comprehensive summary of the current view
      const summaries: Record<string, string> = {
        '/': 'Bienvenido a la Asociación NutriDiversa. Entidad nacional número 632919. Promovemos la nutrición adaptada y la salud para personas con discapacidad, disfagia, autismo y situaciones de dependencia.',
        '/conocenos': 'Conócenos y Transparencia. Asociación inscrita en el Registro Nacional del Ministerio del Interior. Junta directiva presidida por Inmaculada Checa Lorente. Descarga de estatutos y certificado registral.',
        '/servicios': 'Servicio de Información y Orientación Nutricional no clínica. Descarga de guías sobre adaptación de texturas, deglución segura y selectividad alimentaria en TEA.',
        '/colabora': 'Participa y Colabora. Donaciones con deducción fiscal en IRPF e Impuesto de Sociedades, altas de socios, voluntariado y alianzas de responsabilidad social corporativa.',
        '/actualidad': 'Actualidad y Divulgación. Artículos científicos sobre nutrición adaptada, prevención del intrusismo y fomento de la autonomía personal.',
        '/contacto': 'Atención accesible. Contacto oficial por correo electrónico telemático y plataforma web.'
      };
      speakText(summaries[activeRoute] || 'Asociación NutriDiversa.', 'Resumen de la página');
    }
  };

  return (
    <aside
      className="bg-[#121212] text-white border-b-2 border-emerald-900 sticky top-0 z-50 transition-colors"
      aria-label="Herramientas de accesibilidad universal"
      role="region"
    >
      {/* Hidden live region for screen readers */}
      <div
        id="a11y-announcer"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Left: Quick tag & Speech Reader Controls */}
        <div className="flex items-center flex-wrap gap-2">
          <span className="font-semibold tracking-wide text-emerald-400 flex items-center gap-1.5" aria-hidden="true">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            Accesibilidad UNE-EN 301549 / AAA
          </span>

          {/* Screen Reader Voice Controller */}
          <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-md p-0.5 ml-1">
            <button
              onClick={handleGlobalRead}
              className={`min-touch-target px-3 py-1.5 rounded flex items-center gap-1.5 font-medium transition-colors ${
                isSpeaking && !isPaused
                  ? 'bg-amber-600 text-white'
                  : 'text-neutral-200 hover:text-white hover:bg-neutral-800'
              }`}
              aria-label={
                isSpeaking
                  ? isPaused
                    ? 'Reanudar lectura en voz alta'
                    : 'Pausar lectura en voz alta'
                  : 'Escuchar resumen de esta página en voz alta'
              }
              aria-pressed={isSpeaking}
            >
              {isSpeaking ? (
                isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              )}
              <span>{isSpeaking ? (isPaused ? 'Reanudar voz' : 'Pausar voz') : 'Leer en voz alta'}</span>
            </button>

            {isSpeaking && (
              <button
                onClick={stopSpeech}
                className="min-touch-target px-2 py-1.5 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 rounded transition-colors"
                aria-label="Detener lectura en voz alta"
                title="Detener lectura"
              >
                <VolumeX className="w-4 h-4" />
              </button>
            )}
          </div>

          {isSpeaking && (
            <span className="text-amber-300 font-mono text-xs hidden lg:inline animate-pulse">
              [Reproduciendo: {currentSpeechTitle}]
            </span>
          )}
        </div>

        {/* Right: Toggles for Easy Reading, High Contrast, Font Resizing */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Easy Reading Mode Toggle */}
          <button
            onClick={toggleEasyReading}
            className={`min-touch-target px-3 py-1.5 rounded-md flex items-center gap-1.5 font-bold transition-all border ${
              easyReading
                ? 'bg-emerald-600 border-emerald-400 text-white shadow-sm ring-2 ring-emerald-300'
                : 'bg-neutral-900 border-neutral-700 text-neutral-200 hover:bg-neutral-800'
            }`}
            aria-pressed={easyReading}
            aria-label="Alternar modo lectura fácil con pictogramas y resúmenes sencillos"
          >
            <Sparkles className={`w-4 h-4 ${easyReading ? 'text-amber-300' : 'text-neutral-400'}`} />
            <span>Lectura Fácil {easyReading ? '(Activada)' : ''}</span>
          </button>

          {/* High Contrast Mode Toggle */}
          <button
            onClick={toggleHighContrast}
            className={`min-touch-target px-3 py-1.5 rounded-md flex items-center gap-1.5 font-bold transition-all border ${
              highContrast
                ? 'bg-[#FFFF00] border-[#FFFF00] text-black font-extrabold shadow-sm'
                : 'bg-neutral-900 border-neutral-700 text-neutral-200 hover:bg-neutral-800'
            }`}
            aria-pressed={highContrast}
            aria-label="Alternar modo de alto contraste negro y amarillo WCAG AAA"
          >
            <Eye className="w-4 h-4" />
            <span>Alto Contraste {highContrast ? '(Activado)' : ''}</span>
          </button>

          {/* Font Scale Group */}
          <div
            className="flex items-center bg-neutral-900 border border-neutral-700 rounded-md p-0.5"
            role="group"
            aria-label="Controles de tamaño del texto"
          >
            <button
              onClick={decreaseFontScale}
              disabled={fontScale === '100'}
              className="min-touch-target px-2.5 py-1 text-neutral-200 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed font-bold"
              aria-label="Reducir tamaño del texto"
              title="Reducir texto"
            >
              A-
            </button>
            <span className="text-xs px-1 text-emerald-400 font-mono font-bold" aria-hidden="true">
              {fontScale}%
            </span>
            <button
              onClick={increaseFontScale}
              disabled={fontScale === '130'}
              className="min-touch-target px-2.5 py-1 text-neutral-200 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed font-bold"
              aria-label="Aumentar tamaño del texto"
              title="Aumentar texto"
            >
              A+
            </button>
            {fontScale !== '100' && (
              <button
                onClick={resetFontScale}
                className="min-touch-target p-1 text-neutral-400 hover:text-neutral-200 border-l border-neutral-700 ml-1"
                aria-label="Restablecer tamaño de texto estándar"
                title="Restablecer texto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
