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

export const ProyectoView: React.FC = () => {
  const { easyReading, navigateTo, speakText } = useAccessibility();

  const [nombreFamilia, setNombreFamilia] = useState('');
  const [emailFamilia, setEmailFamilia] = useState('');
  const [municipioFamilia, setMunicipioFamilia] = useState('');
  const [mensajeFamilia, setMensajeFamilia] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false); // SIEMPRE DESMARCADA POR DEFECTO
  const [submitted, setSubmitted] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const visualBoardItems = [
    {
      id: 'me-gusta',
      label: 'Me gusta',
      phrase: 'Este alimento me gusta y me siento cómodo comiéndolo.',
      icon: <Smile className="w-7 h-7 text-[#176B50]" aria-hidden="true" />,
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
      icon: <HandHelping className="w-7 h-7 text-[#176B50]" aria-hidden="true" />,
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
    <div className="w-full bg-[#FFFDF8]">
      {/* Resumen sencillo opcional */}
      {easyReading && (
        <section
          aria-label="Resumen sencillo del proyecto piloto"
          className="bg-[#EAF5EF] border-b border-[#176B50]/25 py-5 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto flex items-start gap-3">
            <Info className="w-6 h-6 text-[#176B50] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-[#20282E]">
              <p className="font-bold text-base text-[#1D3532]">
                Resumen sencillo de esta página:
              </p>
              <p className="text-base leading-relaxed max-w-[65ch]">
                Estamos preparando un proyecto gratuito en la provincia de Alicante para madres,
                padres y personas cuidadoras de niñas y niños autistas de 6 a 12 años. Escucharemos
                vuestras dudas sobre texturas, olores y rutinas en la mesa para crear materiales
                prácticos y realizar un taller educativo. No es una consulta médica ni hacemos
                dietas individuales.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Encabezado de la página */}
      <section className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="uppercase tracking-[0.12em] text-[0.85rem] font-bold text-[#D96820]">
              PROYECTO INICIAL · PROVINCIA DE ALICANTE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EAF5EF] text-[#176B50]">
              En fase de preparación
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1D3532] leading-[1.15]">
            Proyecto piloto de alimentación y autismo en Alicante
          </h1>

          <p className="text-base sm:text-[1.15rem] text-[#5A6670] leading-[1.6] max-w-[65ch]">
            Iniciativa de educación alimentaria participativa dirigida a madres, padres, tutores
            legales y personas cuidadoras de menores autistas de 6 a 12 años en la provincia de
            Alicante.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="#inscripcion-familia"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-[#176B50] text-white font-bold text-base hover:bg-[#1D3532] transition-colors"
            >
              Preinscribirme como familia
            </a>
            <a
              href="/documentos/Dossier-Institucional-NutriDiversa-2026-v1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center min-h-[48px] px-5 py-3 rounded-xl border border-[#1D3532] bg-white text-[#1D3532] font-bold text-base hover:bg-[#F7F3EB] transition-colors"
            >
              <FileText className="w-4 h-4 text-[#176B50]" aria-hidden="true" />
              <span>Consultar Dossier Institucional (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Preguntas clave que se hace una familia */}
      <section className="py-12 sm:py-16 border-b border-[#E6E2D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">
                ¿En qué estado se encuentra?
              </h2>
              <p className="text-base text-[#5A6670] leading-relaxed">
                En fase de preparación y diseño participativo en la provincia de Alicante. No se
                presenta como un servicio clínico ya ejecutado, sino como una primera iniciativa
                transparente a la que las familias pueden sumarse.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">
                ¿Quién puede participar?
              </h2>
              <p className="text-base text-[#5A6670] leading-relaxed">
                Madres, padres, tutores legales y personas cuidadoras de menores en el espectro
                autista de <strong className="text-[#20282E]">6 a 12 años</strong> residentes en la
                provincia de Alicante. En la fase inicial participan las personas adultas
                cuidadoras.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">
                ¿Tiene algún coste?
              </h2>
              <p className="text-base text-[#5A6670] leading-relaxed">
                La participación para las familias es{' '}
                <strong className="text-[#176B50] font-bold">100 % gratuita</strong>. Todas las
                guías y materiales resultantes serán de acceso abierto.
              </p>
            </div>
          </div>

          {/* ¿Qué haremos exactamente? (4 pasos detallados) */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-8 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]">
              ¿Qué haremos exactamente?
            </h2>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#176B50] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1D3532]">
                    Escucha inicial con familias
                  </h3>
                </div>
                <p className="text-base text-[#5A6670] leading-relaxed">
                  Cuestionario inicial y sesiones de escucha con familias para identificar barreras
                  reales (texturas, olores, selectividad, tiempos de comida).
                </p>
              </li>

              <li className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#176B50] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1D3532]">
                    Materiales y apoyos visuales
                  </h3>
                </div>
                <p className="text-base text-[#5A6670] leading-relaxed">
                  Elaboración de fichas y materiales prácticos de educación alimentaria (incluyendo
                  apoyos visuales cotidianos como{' '}
                  <em>&laquo;Durante la comida: Me gusta / Necesito ayuda / Necesito una pausa&raquo;</em>
                  ).
                </p>
              </li>

              <li className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#176B50] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1D3532]">
                    Taller práctico para personas cuidadoras
                  </h3>
                </div>
                <p className="text-base text-[#5A6670] leading-relaxed">
                  Taller práctico presencial/online para compartir los materiales con las familias
                  participantes.
                </p>
              </li>

              <li className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#176B50] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1D3532]">
                    Evaluación y publicación abierta
                  </h3>
                </div>
                <p className="text-base text-[#5A6670] leading-relaxed">
                  Evaluación de resultados para mejorar las guías antes de su publicación abierta.
                </p>
              </li>
            </ol>
          </div>

          {/* Muestra interactiva del apoyo visual cotidiano ("Durante la comida") */}
          <div className="bg-[#F7F3EB] rounded-2xl border border-[#E6E2D8] p-6 sm:p-8 space-y-5">
            <div className="space-y-2">
              <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#D96820]">
                EJEMPLO DE RECURSO PRÁCTICO EN PREPARACIÓN
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#1D3532]">
                Apoyo visual cotidiano: «Durante la comida»
              </h2>
              <p className="text-base text-[#5A6670] max-w-[65ch]">
                Ejemplo de tablero de comunicación sencilla pensado para reducir la frustración en
                la mesa. Puedes pulsar cualquier tarjeta para escuchar su locución en voz alta:
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
                        ? 'bg-[#EAF5EF] border-[#176B50] shadow-xs'
                        : 'bg-white border-[#E6E2D8] hover:border-[#176B50]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      {item.icon}
                      <Volume2 className="w-4 h-4 text-[#5A6670]" aria-hidden="true" />
                    </div>
                    <div className="pt-3">
                      <p className="font-serif text-lg font-bold text-[#1D3532]">{item.label}</p>
                      <p className="text-xs text-[#5A6670] mt-1">{item.phrase}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Límites importantes */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] border-l-4 border-l-[#D96820] p-6 sm:p-7 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-[#D96820] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1.5">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">
                Límites importantes del proyecto
              </h2>
              <p className="text-base text-[#20282E] leading-relaxed max-w-[65ch]">
                NutriDiversa realiza educación alimentaria comunitaria. No emite diagnósticos
                médicos, no prescribe pautas dietéticas individualizadas ni tratamientos clínicos, y
                no recoge datos de salud de menores en esta fase informativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario rápido integrado al final para familias */}
      <section
        id="inscripcion-familia"
        aria-labelledby="form-familia-proyecto-heading"
        className="py-14 sm:py-20 bg-[#F7F3EB]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-10 shadow-xs space-y-6">
            <div className="space-y-2">
              <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#D96820]">
                PREINSCRIPCIÓN INFORMATIVA GRATUITA
              </p>
              <h2
                id="form-familia-proyecto-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]"
              >
                Recibe aviso cuando se abra la participación
              </h2>
              <p className="text-base text-[#5A6670] leading-relaxed">
                Déjanos tus datos básicos de contacto si eres madre, padre, tutor o persona
                cuidadora en la provincia de Alicante.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="bg-[#EAF5EF] border border-[#176B50] rounded-xl p-6 text-[#1D3532] space-y-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#176B50] shrink-0" aria-hidden="true" />
                  <p className="font-bold text-lg">
                    Hemos recibido tu solicitud correctamente. La Secretaría de NutriDiversa te
                    responderá en un máximo de cinco días laborables al correo indicado.
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
                    Nombre y apellidos <span className="text-[#D96820]">*</span>
                  </label>
                  <input
                    id="proy_nombre_familia"
                    name="nombre_familia"
                    type="text"
                    required
                    value={nombreFamilia}
                    onChange={(e) => setNombreFamilia(e.target.value)}
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E] focus:border-[#176B50]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="proy_email_familia"
                      className="block text-sm font-bold text-[#20282E] mb-1.5"
                    >
                      Correo electrónico <span className="text-[#D96820]">*</span>
                    </label>
                    <input
                      id="proy_email_familia"
                      name="email_familia"
                      type="email"
                      required
                      value={emailFamilia}
                      onChange={(e) => setEmailFamilia(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E] focus:border-[#176B50]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="proy_municipio_familia"
                      className="block text-sm font-bold text-[#20282E] mb-1.5"
                    >
                      Municipio (Provincia de Alicante) <span className="text-[#D96820]">*</span>
                    </label>
                    <input
                      id="proy_municipio_familia"
                      name="municipio_familia"
                      type="text"
                      required
                      value={municipioFamilia}
                      onChange={(e) => setMunicipioFamilia(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E] focus:border-[#176B50]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="proy_mensaje_familia"
                    className="block text-sm font-bold text-[#20282E] mb-1.5"
                  >
                    Comentarios o dudas generales (sin incluir datos médicos ni diagnósticos)
                  </label>
                  <textarea
                    id="proy_mensaje_familia"
                    name="mensaje_familia"
                    rows={3}
                    value={mensajeFamilia}
                    onChange={(e) => setMensajeFamilia(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E] focus:border-[#176B50]"
                  />
                </div>

                {/* Caja destacada obligatoria de no recogida de datos de salud */}
                <div className="bg-[#F7F3EB] border border-[#E6E2D8] border-l-4 border-l-[#D96820] rounded-xl p-4 text-sm text-[#20282E] leading-relaxed">
                  <strong>Aviso importante de privacidad:</strong> Por favor,{' '}
                  <strong>no incluyas diagnósticos médicos, informes clínicos ni datos de salud</strong>{' '}
                  tuyos ni de menores en este formulario. NutriDiversa no presta asistencia clínica
                  y este canal es exclusivamente informativo.
                </div>

                {/* Casilla obligatoria SIEMPRE DESMARCADA POR DEFECTO */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="proy_privacidad_familia"
                    name="privacidad_familia"
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-[#E6E2D8] text-[#176B50] focus:ring-[#176B50] shrink-0"
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
                      className="underline font-bold text-[#176B50] hover:text-[#1D3532]"
                    >
                      Política de Privacidad
                    </a>{' '}
                    y consiento el tratamiento de mis datos de contacto para recibir información
                    sobre el proyecto educativo de NutriDiversa.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-[48px] px-7 py-3 rounded-xl bg-[#176B50] hover:bg-[#1D3532] text-white font-bold text-base transition-colors"
                >
                  Quiero que me aviséis cuando se abra la participación
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
