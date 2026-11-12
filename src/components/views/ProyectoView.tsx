import React, { useState } from 'react';
import {
  Info,
  CheckCircle2,
  ShieldAlert,
  Volume2,
  Smile,
  HandHelping,
  PauseCircle,
  Frown,
  FileText,
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { PILOT_STEPS_HOME } from '../../data/associationData';

export const ProyectoView: React.FC = () => {
  const { easyReading, navigateTo, speakText } = useAccessibility();

  const [nombreFamilia, setNombreFamilia] = useState('');
  const [emailFamilia, setEmailFamilia] = useState('');
  const [municipioFamilia, setMunicipioFamilia] = useState('');
  const [mensajeFamilia, setMensajeFamilia] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false); // SIEMPRE DESMARCADA POR DEFECTO
  const [futureUpdates, setFutureUpdates] = useState(false); // CASILLA ADICIONAL OPCIONAL DESMARCADA
  const [submitted, setSubmitted] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const visualBoardItems = [
    {
      id: 'me-gusta',
      label: 'Me gusta',
      phrase: 'Este alimento me gusta y me siento cómodo comiéndolo.',
      icon: <Smile className="w-7 h-7 text-[#1D3532]" aria-hidden="true" />,
    },
    {
      id: 'no-me-gusta',
      label: 'No me gusta',
      phrase: 'Prefiero no comer este alimento ahora.',
      icon: <Frown className="w-7 h-7 text-[#D96820]" aria-hidden="true" />,
    },
    {
      id: 'necesito-ayuda',
      label: 'Necesito ayuda',
      phrase: 'Necesito ayuda con el plato, los cubiertos o la comida.',
      icon: <HandHelping className="w-7 h-7 text-[#1D3532]" aria-hidden="true" />,
    },
    {
      id: 'necesito-pausa',
      label: 'Necesito una pausa',
      phrase: 'Necesito descansar un momento durante la comida.',
      icon: <PauseCircle className="w-7 h-7 text-[#1D3532]" aria-hidden="true" />,
    },
  ];

  const handleQuickFamilySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      {/* Resumen sencillo opcional */}
      {easyReading && (
        <section
          aria-label="Resumen sencillo del proyecto piloto"
          className="bg-[#EAF5EF] border-b border-[#1D3532]/20 py-5 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto flex items-start gap-3">
            <Info className="w-6 h-6 text-[#1D3532] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-[#20282E]">
              <p className="font-bold text-base text-[#1D3532]">
                Resumen sencillo de esta página:
              </p>
              <p className="text-base leading-relaxed max-w-[65ch]">
                Estamos preparando en Alicante nuestro primer proyecto piloto gratuito para
                familias con menores autistas de 6 a 12 años. Conoceremos vuestras experiencias con
                la variedad de alimentos, las texturas y las rutinas durante las comidas para crear
                recursos prácticos y realizar una actividad educativa.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Encabezado de la página con etiqueta "Primer proyecto piloto" y pregunta "¿Quieres conocerlo?" */}
      <section className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="space-y-1">
            <p className="uppercase tracking-[0.1em] text-xs sm:text-[0.85rem] font-bold text-[#A94F1D]">
              PRIMER PROYECTO PILOTO
            </p>
            <p className="text-base sm:text-lg font-medium text-[#1D3532]">
              ¿Quieres conocerlo?
            </p>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1D3532] leading-[1.15]">
            Alimentación y autismo en familias con menores de 6 a 12 años
          </h1>

          <p className="text-base sm:text-[1.15rem] text-[#20282E] leading-[1.6] max-w-[65ch]">
            Estamos preparando en Alicante un proyecto educativo para conocer las experiencias de
            las familias con la variedad de alimentos, las texturas y las rutinas durante las
            comidas.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="#inscripcion-familia"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-[#A94F1D] text-white font-bold text-base hover:bg-[#1D3532] transition-colors"
            >
              Solicitar información para familias
            </a>
            <a
              href="/documentos/Dossier-Institucional-NutriDiversa-2026-v1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center min-h-[48px] px-5 py-3 rounded-xl border-2 border-[#1D3532] bg-white text-[#1D3532] font-bold text-base hover:bg-[#F7F3EB] transition-colors"
            >
              <FileText className="w-4 h-4 text-[#1D3532]" aria-hidden="true" />
              <span>Consultar Dossier Institucional (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes de las familias */}
      <section className="py-12 sm:py-16 border-b border-[#E6E2D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">
                ¿En qué estado se encuentra?
              </h2>
              <p className="text-base text-[#20282E] leading-relaxed">
                En fase de preparación y diseño participativo en la provincia de Alicante. Es una
                primera iniciativa educativa abierta a escuchar a las familias antes de su
                ejecución.
              </p>
            </div>

            <div className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">
                ¿Quién puede participar?
              </h2>
              <p className="text-base text-[#20282E] leading-relaxed">
                Madres, padres, tutores legales y personas cuidadoras de menores autistas de{' '}
                <strong>6 a 12 años</strong> en la provincia de Alicante. En esta fase inicial
                participan las personas adultas cuidadoras.
              </p>
            </div>

            <div className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">
                ¿Tiene algún coste?
              </h2>
              <p className="text-base text-[#20282E] leading-relaxed">
                La participación para las familias es{' '}
                <strong className="text-[#1D3532] font-bold">100 % gratuita</strong>. Todos los
                recursos elaborados serán de acceso abierto.
              </p>
            </div>
          </div>

          {/* Desarrollo claro en 4 pasos */}
          <div className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-6 sm:p-8 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]">
              Cómo funcionará el proyecto piloto (4 fases)
            </h2>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PILOT_STEPS_HOME.map((step) => (
                <li
                  key={step.number}
                  className="bg-white rounded-xl border border-[#E6E2D8] p-5 space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1D3532] text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1D3532]">
                      {step.number}. {step.title}
                    </h3>
                  </div>
                  <p className="text-base text-[#20282E] leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Muestra interactiva del apoyo visual cotidiano ("Durante la comida") */}
          <div className="bg-[#F7F3EB] rounded-2xl border border-[#E6E2D8] p-6 sm:p-8 space-y-5">
            <div className="space-y-2">
              <p className="uppercase tracking-[0.1em] text-xs font-bold text-[#A94F1D]">
                EJEMPLO DE RECURSO PRÁCTICO EN PREPARACIÓN
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#1D3532]">
                Apoyo visual cotidiano: «Durante la comida»
              </h2>
              <p className="text-base text-[#20282E] max-w-[65ch]">
                Ejemplo de tablero de comunicación sencilla pensado para acompañar las comidas.
                Puedes pulsar cualquier tarjeta para escuchar su locución en voz alta:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {visualBoardItems.map((item) => {
                const isSelected = selectedCard === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedCard(item.id);
                      speakText(`${item.label}. ${item.phrase}`, item.label);
                    }}
                    className={`min-h-[110px] p-5 rounded-2xl border text-left flex flex-col justify-between transition-colors ${
                      isSelected
                        ? 'bg-[#EAF5EF] border-[#1D3532] shadow-xs'
                        : 'bg-white border-[#E6E2D8] hover:border-[#1D3532]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      {item.icon}
                      <Volume2 className="w-4 h-4 text-[#5A6670]" aria-hidden="true" />
                    </div>
                    <div className="pt-3">
                      <p className="font-serif text-lg font-bold text-[#1D3532]">{item.label}</p>
                      <p className="text-xs text-[#20282E] mt-1">{item.phrase}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Nota de alcance sanitario */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] border-l-4 border-l-[#D96820] p-6 sm:p-7 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-[#D96820] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1.5">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">
                Alcance exclusivamente educativo y no clínico
              </h2>
              <p className="text-base text-[#20282E] leading-relaxed max-w-[65ch]">
                Proyecto exclusivamente educativo y comunitario en fase de preparación. No ofrece
                diagnósticos médicos, dietas personalizadas ni tratamientos clínicos, y no recoge
                datos de salud en esta fase informativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario específico para familias con todas las reglas RGPD (Sección 6.1) */}
      <section
        id="inscripcion-familia"
        aria-labelledby="form-familia-proyecto-heading"
        className="py-14 sm:py-20 bg-[#F7F3EB]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-10 shadow-xs space-y-6">
            <div className="space-y-2">
              <p className="uppercase tracking-[0.1em] text-xs font-bold text-[#A94F1D]">
                SOLICITUD DE INFORMACIÓN PARA FAMILIAS
              </p>
              <h2
                id="form-familia-proyecto-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]"
              >
                Recibe aviso cuando se abra la participación
              </h2>
              <p className="text-base text-[#20282E] leading-relaxed">
                Si eres madre, padre, tutor legal o persona cuidadora en la provincia de Alicante,
                déjanos tus datos de contacto.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="bg-[#EAF5EF] border border-[#1D3532] rounded-xl p-6 text-[#1D3532] space-y-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1D3532] shrink-0" aria-hidden="true" />
                  <p className="font-bold text-lg">
                    Hemos recibido tu solicitud. La Secretaría de NutriDiversa te responderá en un
                    máximo de cinco días laborables.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleQuickFamilySubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="proy_nombre_familia"
                    className="block text-sm font-bold text-[#20282E] mb-1.5"
                  >
                    Nombre y apellidos <span className="text-[#A94F1D]">*</span>
                  </label>
                  <input
                    id="proy_nombre_familia"
                    name="nombre_familia"
                    type="text"
                    required
                    value={nombreFamilia}
                    onChange={(e) => setNombreFamilia(e.target.value)}
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="proy_email_familia"
                      className="block text-sm font-bold text-[#20282E] mb-1.5"
                    >
                      Correo electrónico <span className="text-[#A94F1D]">*</span>
                    </label>
                    <input
                      id="proy_email_familia"
                      name="email_familia"
                      type="email"
                      required
                      value={emailFamilia}
                      onChange={(e) => setEmailFamilia(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="proy_municipio_familia"
                      className="block text-sm font-bold text-[#20282E] mb-1.5"
                    >
                      Municipio (Provincia de Alicante) <span className="text-[#A94F1D]">*</span>
                    </label>
                    <input
                      id="proy_municipio_familia"
                      name="municipio_familia"
                      type="text"
                      required
                      value={municipioFamilia}
                      onChange={(e) => setMunicipioFamilia(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="proy_mensaje_familia"
                    className="block text-sm font-bold text-[#20282E] mb-1.5"
                  >
                    Comentarios o dudas generales (opcional)
                  </label>
                  <textarea
                    id="proy_mensaje_familia"
                    name="mensaje_familia"
                    rows={3}
                    value={mensajeFamilia}
                    onChange={(e) => setMensajeFamilia(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                  />
                </div>

                {/* Aviso visible obligatorio en todos los formularios (Sección 6.1) */}
                <div className="bg-[#F7F3EB] border border-[#E6E2D8] border-l-4 border-l-[#D96820] rounded-xl p-4 text-sm text-[#20282E] leading-relaxed">
                  <strong>
                    Por favor, no incluyas diagnósticos médicos, informes clínicos ni datos de salud
                    en este formulario.
                  </strong>
                </div>

                {/* Casilla obligatoria siempre desmarcada por defecto */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="proy_privacidad_familia"
                    name="privacidad_familia"
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-[#E6E2D8] text-[#1D3532] shrink-0"
                  />
                  <label
                    htmlFor="proy_privacidad_familia"
                    className="text-sm text-[#20282E] leading-relaxed cursor-pointer"
                  >
                    He leído y acepto la{' '}
                    <a
                      href="/privacidad"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo('/privacidad');
                      }}
                      className="underline font-bold text-[#1D3532]"
                    >
                      Política de Privacidad
                    </a>{' '}
                    y consiento el tratamiento de mis datos para atender mi solicitud.{' '}
                    <span className="text-[#A94F1D] font-bold">*</span>
                  </label>
                </div>

                {/* Casilla adicional separada y opcional (nunca premarcada) */}
                <div className="flex items-start gap-3">
                  <input
                    id="proy_comunicaciones_futuras"
                    name="comunicaciones_futuras"
                    type="checkbox"
                    checked={futureUpdates}
                    onChange={(e) => setFutureUpdates(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-[#E6E2D8] text-[#1D3532] shrink-0"
                  />
                  <label
                    htmlFor="proy_comunicaciones_futuras"
                    className="text-sm text-[#20282E] leading-relaxed cursor-pointer"
                  >
                    Deseo recibir comunicaciones informativas sobre futuras actividades y recursos
                    de NutriDiversa.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-[48px] px-7 py-3 rounded-xl bg-[#A94F1D] hover:bg-[#1D3532] text-white font-bold text-base transition-colors"
                >
                  Solicitar información para familias
                </button>
              </form>
            )}

            {/* Primera capa informativa de privacidad junto al formulario */}
            <div className="pt-4 border-t border-[#E6E2D8] text-xs sm:text-sm text-[#20282E] space-y-1.5 leading-relaxed">
              <p className="font-bold text-[#1D3532]">
                Información básica sobre protección de datos (Art. 13 RGPD):
              </p>
              <p>
                <strong>Responsable:</strong> Asociación de Nutrición en la Discapacidad -
                NutriDiversa (NIF G22670707). <strong>Finalidad:</strong> Atender tu solicitud de
                información sobre el proyecto piloto y, si marcas la casilla opcional, enviarte
                comunicaciones sobre actividades. <strong>Base jurídica:</strong> Consentimiento
                (art. 6.1.a RGPD). <strong>Destinatarios:</strong> Sin cesión a terceros salvo
                obligación legal; encargados técnicos de alojamiento y correo.{' '}
                <strong>Conservación:</strong> Mientras se mantenga la finalidad o hasta que retires
                tu consentimiento. <strong>Derechos:</strong> Acceso, rectificación, supresión,
                oposición, portabilidad, limitación y retirada del consentimiento en{' '}
                <a href="mailto:info@nutridiversa.org" className="underline font-bold">
                  info@nutridiversa.org
                </a>
                , más reclamación ante la AEPD. Más información en{' '}
                <a
                  href="/privacidad"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/privacidad');
                  }}
                  className="underline font-bold text-[#1D3532]"
                >
                  Política de Privacidad
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
