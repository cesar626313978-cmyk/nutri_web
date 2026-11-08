import React, { useState } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import {
  GUIDES,
  ACTION_LINES,
  AUTISM_PILOT_PROJECT,
  DOSSIER_IMAGES,
  DOSSIER_PDF_URL,
  INSTITUTIONAL_DATA,
} from '../../data/associationData';
import { GuideResource } from '../../types';
import {
  CheckCircle2,
  Download,
  BookOpen,
  Volume2,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Smile,
  Meh,
  MessageSquare,
  Pause,
  MapPin,
  FileDown,
  ArrowDown,
  Sparkles,
} from 'lucide-react';

export const ServiciosView: React.FC = () => {
  const { easyReading, speakText, announce } = useAccessibility();
  const [kitchenImgError, setKitchenImgError] = useState(false);

  // Interactive "Durante la comida" Visual Support Board state (Page 8 of Dossier)
  const [selectedMealCard, setSelectedMealCard] = useState<string | null>(null);

  // Selected phase in the 5-phase Autism Pilot diagram (Page 11 of Dossier)
  const [activePhase, setActivePhase] = useState<number>(1);

  // Participatory Needs & Collaboration Form State
  const [step, setStep] = useState<number>(1);
  const [beneficiary, setBeneficiary] = useState<string>('');
  const [primaryNeed, setPrimaryNeed] = useState<string>('');
  const [contactValue, setContactValue] = useState<string>('');
  const [extraNotes, setExtraNotes] = useState<string>('');
  const [consentArt42, setConsentArt42] = useState<boolean>(true);
  const [consultationSubmitted, setConsultationSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  // Guide preview modal/drawer
  const [selectedGuide, setSelectedGuide] = useState<GuideResource | null>(null);

  const mealOptions = [
    {
      id: 'me-gusto',
      label: 'Me gusta',
      speech: 'Me gusta esta comida.',
      icon: 'smile',
    },
    {
      id: 'no-me-gusta',
      label: 'No me gusta',
      speech: 'No me gusta esta comida.',
      icon: 'neutral',
    },
    {
      id: 'necesito-ayuda',
      label: 'Necesito ayuda',
      speech: 'Necesito ayuda durante la comida.',
      icon: 'help',
    },
    {
      id: 'necesito-pausa',
      label: 'Necesito una pausa',
      speech: 'Necesito hacer una pausa.',
      icon: 'pause',
    },
  ];

  const handleMealOptionClick = (opt: typeof mealOptions[0]) => {
    setSelectedMealCard(opt.id);
    speakText(opt.speech, opt.label);
    announce(`Opción señalada: ${opt.label}`);
  };

  const handleNextStep1 = (who: string) => {
    setBeneficiary(who);
    setStep(2);
    announce(`Paso 1 completado: ${who}. Paso 2: Selecciona la prioridad o línea de colaboración.`);
  };

  const handleNextStep2 = (need: string) => {
    setPrimaryNeed(need);
    setStep(3);
    announce(`Paso 2 completado: ${need}. Paso 3: Introduce tu correo electrónico de contacto.`);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactValue.trim()) {
      setFormError('Por favor, introduce un correo electrónico de contacto.');
      announce('Error: Falta introducir el correo electrónico.');
      return;
    }
    if (!consentArt42) {
      setFormError('Es necesario marcar la casilla de protección de datos.');
      announce('Error: Debe autorizar el tratamiento de datos.');
      return;
    }

    setFormError('');
    setConsultationSubmitted(true);
    announce('Tu aportación o propuesta ha sido enviada con éxito a NutriDiversa.');
  };

  const resetForm = () => {
    setStep(1);
    setBeneficiary('');
    setPrimaryNeed('');
    setContactValue('');
    setExtraNotes('');
    setConsultationSubmitted(false);
    setFormError('');
  };

  return (
    <div className="space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. CABECERA: SECCIONES 4 Y 5 DEL DOSSIER */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <div className="text-xs font-bold text-emerald-800">
          Secciones 4 y 5 del Dossier Institucional · Alicante, 2026
        </div>
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight"
          style={{ textWrap: 'balance' }}
        >
          Líneas de actuación y Proyecto piloto inicial: alimentación y autismo
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-3xl mx-auto">
          {easyReading
            ? 'Aquí puedes conocer nuestras 6 líneas de trabajo, probar el tablero visual para las comidas y participar en el proyecto piloto sobre alimentación y autismo en la provincia de Alicante.'
            : 'Para avanzar hacia nuestros objetivos, NutriDiversa desarrolla de forma progresiva seis líneas de actuación y pone en marcha su primer proyecto piloto sobre alimentación y autismo en la provincia de Alicante.'}
        </p>
        <div className="pt-1 flex flex-wrap justify-center gap-3">
          <a
            href="#proyecto-piloto-autismo"
            className="min-touch-target px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <span>Ir al Proyecto Piloto: Alimentación y Autismo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={DOSSIER_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            download="Dossier_Institucional_NutriDiversa_2026.pdf"
            className="min-touch-target px-5 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-950 font-bold text-xs sm:text-sm rounded-lg border border-amber-400 transition-colors inline-flex items-center gap-2"
          >
            <FileDown className="w-4 h-4 text-[#E65100]" />
            <span>Descargar Dossier Oficial (PDF)</span>
          </a>
        </div>
      </section>

      {/* 2. SECCIÓN 4 DEL DOSSIER: LAS 6 LÍNEAS DE ACTUACIÓN + FOTOGRAFÍA AUTONOMÍA EN COCINA */}
      <section aria-labelledby="lines-heading" className="space-y-8">
        <div className="border-b border-neutral-200 pb-3">
          <span className="text-xs font-bold text-emerald-800 block">
            Sección 4 del Dossier Institucional
          </span>
          <h2 id="lines-heading" className="text-2xl sm:text-3xl font-bold text-[#121212] mt-0.5">
            4. Líneas de actuación
          </h2>
        </div>

        {/* Destacado 4.1 con Fotografía Ilustrativa de Página 7 del Dossier */}
        <div className="bg-white border border-[#D1E7DD] rounded-2xl p-6 sm:p-8 card-surface grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-emerald-800">
              LÍNEA 4.1 · AUTONOMÍA Y VIDA COTIDIANA
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              4.1. Educación alimentaria y nutricional inclusiva
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Desarrollo de talleres, charlas y actividades educativas adaptadas a las necesidades de los distintos colectivos, con un enfoque práctico, accesible y aplicable a la vida cotidiana.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Promovemos hábitos de alimentación saludables y favorecemos la autonomía y la participación en las decisiones relacionadas con la comida en el hogar y en el entorno comunitario, con los apoyos necesarios.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-2">
            <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-xs bg-stone-100">
              {!kitchenImgError ? (
                <img
                  src={DOSSIER_IMAGES.kitchenAutonomy}
                  alt="Persona joven cocinando de forma autónoma utilizando una freidora de aire en una cocina accesible y luminosa con frutas frescas en la encimera"
                  referrerPolicy="no-referrer"
                  onError={() => setKitchenImgError(true)}
                  className="w-full h-64 sm:h-72 object-cover"
                />
              ) : (
                <div className="h-64 bg-emerald-50 flex items-center justify-center p-6 text-center text-xs text-emerald-900 font-semibold">
                  Educación alimentaria práctica y autonomía en la cocina cotidiana
                </div>
              )}
            </div>
            <p className="text-[11px] text-neutral-500 italic text-center">
              Actividades educativas con enfoque práctico, accesible y aplicable a la vida cotidiana.
            </p>
          </div>
        </div>

        {/* Grid completo de las 6 Líneas de Actuación (4.1 a 4.6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTION_LINES.map((line) => (
            <div
              key={line.id}
              className="bg-white rounded-xl border border-[#D1E7DD] p-6 card-surface flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-extrabold text-emerald-800 tabular-nums">
                    {line.number}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-medium">Línea de actuación</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{line.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {easyReading ? line.easyReading : line.description}
                </p>
                {!easyReading && line.extraDetail && (
                  <p className="text-xs text-neutral-600 leading-relaxed pt-1 border-t border-neutral-100">
                    {line.extraDetail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. RECREACIÓN INTERACTIVA DE LA LÁMINA DE LA PÁGINA 8 DEL DOSSIER: "DURANTE LA COMIDA" */}
      <section aria-labelledby="visual-board-heading" className="bg-white border-2 border-[#D1E7DD] rounded-2xl p-6 sm:p-10 card-surface">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-emerald-800 block">
              4.3. Información y recursos accesibles · Lámina Interactiva del Dossier (Pág. 8)
            </span>
            <p className="text-xs font-semibold text-neutral-500 pt-2">NutriDiversa</p>
            <h2 id="visual-board-heading" className="text-2xl sm:text-3xl font-extrabold text-[#121212]">
              Durante la comida
            </h2>
            <p className="text-sm sm:text-base text-neutral-700">
              Puedes decirlo o señalar una opción. <span className="text-xs text-emerald-800 font-semibold">(Pulsa cualquier tarjeta para escucharla en voz alta)</span>
            </p>
          </div>

          {/* Cuadrícula 2x2 fiel al diseño de la página 8 del Dossier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {mealOptions.map((opt) => {
              const isSelected = selectedMealCard === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleMealOptionClick(opt)}
                  aria-pressed={isSelected}
                  className={`min-touch-target p-6 sm:p-8 rounded-2xl border-2 transition-all flex flex-col items-center justify-center text-center gap-3 ${
                    isSelected
                      ? 'bg-emerald-50 border-[#165B2E] shadow-sm scale-[1.01]'
                      : 'bg-[#F3F4F2] border-neutral-300 hover:border-[#165B2E] hover:bg-neutral-100'
                  }`}
                >
                  {/* Icono fiel al estilo del dosier */}
                  <div className="w-16 h-16 flex items-center justify-center text-[#165B2E]">
                    {opt.icon === 'smile' && <Smile className="w-14 h-14 stroke-[1.75]" />}
                    {opt.icon === 'neutral' && <Meh className="w-14 h-14 stroke-[1.75]" />}
                    {opt.icon === 'help' && <MessageSquare className="w-14 h-14 stroke-[1.75]" />}
                    {opt.icon === 'pause' && <Pause className="w-14 h-14 stroke-[2.25] fill-[#165B2E]" />}
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>

          {selectedMealCard && (
            <div
              className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-xl text-center text-xs sm:text-sm text-emerald-950 font-semibold flex items-center justify-center gap-2 max-w-md mx-auto"
              role="status"
              aria-live="polite"
            >
              <Volume2 className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>
                Opción seleccionada: <strong>{mealOptions.find((m) => m.id === selectedMealCard)?.label}</strong>
              </span>
            </div>
          )}

          <p className="text-xs text-neutral-500 text-center italic">
            Ejemplo ilustrativo de lenguaje claro y apoyos visuales. Pendiente de revisión con las personas a las que se dirija.
          </p>
        </div>
      </section>

      {/* 4. SECCIÓN 5 DEL DOSSIER: PROYECTO PILOTO INICIAL: ALIMENTACIÓN Y AUTISMO */}
      <section
        id="proyecto-piloto-autismo"
        aria-labelledby="pilot-heading"
        className="bg-white border-2 border-[#165B2E]/30 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs card-surface space-y-10"
      >
        {/* Cabecera del Proyecto Piloto */}
        <div className="border-b border-neutral-200 pb-5 space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-emerald-800">
            <MapPin className="w-4 h-4 text-[#E65100]" />
            <span>Sección 5 del Dossier · Provincia de Alicante · Menores de 6 a 12 años</span>
          </div>
          <h2 id="pilot-heading" className="text-2xl sm:text-3xl font-extrabold text-[#121212]">
            5. {AUTISM_PILOT_PROJECT.title}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-neutral-800">
            {AUTISM_PILOT_PROJECT.subtitle}
          </p>
        </div>

        {/* 5.1 Contextualización y alcance + 5.2 Objetivos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">
              5.1. Contextualización y alcance
            </h3>
            {AUTISM_PILOT_PROJECT.contextParagraphs.map((p, idx) => (
              <p key={idx} className="text-sm text-neutral-700 leading-relaxed">
                {p}
              </p>
            ))}

            <div className="p-5 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2 mt-4">
              <h4 className="text-sm font-bold text-emerald-950">
                5.2. Objetivo general
              </h4>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                {AUTISM_PILOT_PROJECT.generalObjective}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">
              Objetivos específicos del piloto
            </h3>
            <div className="p-5 bg-[#FAFBF9] rounded-xl border border-neutral-200 space-y-3">
              <p className="text-xs sm:text-sm font-semibold text-neutral-900">
                • Conocer las experiencias, dificultades y preocupaciones de las familias en relación con:
              </p>
              <ul className="space-y-1.5 pl-4 text-xs sm:text-sm text-neutral-700">
                {AUTISM_PILOT_PROJECT.familyConcerns.map((concern, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-800 font-bold">—</span>
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 pt-2 border-t border-neutral-200 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>Identificar las barreras para acceder a información, recursos o apoyo adecuado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>Recoger las necesidades y propuestas de las propias familias y personas cuidadoras.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>Elaborar materiales y desarrollar una primera actividad educativa a partir de las prioridades identificadas y de la evidencia científica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>Valorar la comprensión, la accesibilidad y la utilidad percibida de los materiales y de la actividad educativa.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5.3 METODOLOGÍA Y RECREACIÓN FIEL DEL DIAGRAMA DE LAS 5 FASES (PÁGINA 11 DEL DOSSIER) */}
        <div className="space-y-6 pt-4 border-t border-neutral-200">
          <div className="max-w-3xl">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
              5.3. Metodología y fases del proyecto piloto
            </h3>
            <p className="text-sm text-neutral-700 mt-1 leading-relaxed">
              El proyecto piloto combinará la recogida de información mediante una encuesta y espacios de escucha a las familias con el diseño, desarrollo y evaluación de una primera actividad educativa. Pulsa sobre cualquier fase del diagrama para ver su descripción completa:
            </p>
          </div>

          {/* Diagrama Visual Vertical idéntico a la página 11 del Dossier */}
          <div className="max-w-2xl mx-auto bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-2">
            <div className="text-center pb-4">
              <span className="text-xs font-bold text-[#165B2E] block">NutriDiversa</span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                Fases del proyecto piloto
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600">
                Alimentación y autismo · Provincia de Alicante
              </p>
            </div>

            {AUTISM_PILOT_PROJECT.phases.map((phase, idx) => {
              const isSelected = activePhase === phase.step;
              return (
                <React.Fragment key={phase.step}>
                  <button
                    type="button"
                    onClick={() => setActivePhase(phase.step)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-4 ${
                      isSelected
                        ? 'bg-emerald-50/90 border-[#165B2E] shadow-2xs'
                        : 'bg-[#F3F4F2] border-neutral-300 hover:border-emerald-700'
                    }`}
                  >
                    <span className="w-8 h-8 rounded-full bg-[#165B2E] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                      {phase.step}
                    </span>
                    <div className="space-y-1 flex-1">
                      <span className="text-base font-bold text-neutral-900 block">
                        {phase.title}
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-700 block leading-relaxed">
                        {isSelected ? phase.fullDesc : phase.shortDesc}
                      </span>
                    </div>
                  </button>

                  {idx < AUTISM_PILOT_PROJECT.phases.length - 1 && (
                    <div className="flex justify-center py-0.5" aria-hidden="true">
                      <ArrowDown className="w-4 h-4 text-[#165B2E]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}

            <p className="text-xs text-neutral-500 text-center pt-3 italic">
              Proceso previsto, sujeto a los recursos y apoyos disponibles.
            </p>
          </div>
        </div>

        {/* 5.4 Evaluación, 5.5 Resultados esperados y 5.6 Naturaleza y límites */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-200">
          <div className="p-5 bg-[#FAFBF9] rounded-xl border border-neutral-200 space-y-2">
            <h3 className="text-base font-bold text-neutral-900">5.4. Evaluación</h3>
            <p className="text-xs text-neutral-700 leading-relaxed">
              {AUTISM_PILOT_PROJECT.evaluation}
            </p>
          </div>

          <div className="p-5 bg-[#FAFBF9] rounded-xl border border-neutral-200 space-y-2">
            <h3 className="text-base font-bold text-neutral-900">5.5. Resultados esperados y finalidad</h3>
            <p className="text-xs text-neutral-700 leading-relaxed">
              {AUTISM_PILOT_PROJECT.expectedResults}
            </p>
          </div>

          <div className="p-5 bg-amber-50/80 rounded-xl border border-amber-300 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-950 font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0" />
              <h3>5.6. Naturaleza y límites</h3>
            </div>
            <p className="text-xs text-amber-950 leading-relaxed">
              {AUTISM_PILOT_PROJECT.natureAndLimits}
            </p>
          </div>
        </div>
      </section>

      {/* 5. FORMULARIO INTERACTIVO DE ESCUCHA ACTIVA (PILOTO AUTISMO Y ENTIDADES) */}
      <section
        id="formulario-sio"
        aria-labelledby="form-heading"
        className="bg-white border-2 border-[#D1E7DD] rounded-2xl p-6 sm:p-10 shadow-sm card-surface"
      >
        <div className="border-b border-neutral-200 pb-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800">
              4.2. Escucha Activa y Participación (Paso {step} de 3)
            </span>
            <span className="text-xs font-semibold text-neutral-500">
              Familias (Piloto Alicante) · Entidades · Profesionales
            </span>
          </div>
          <h2 id="form-heading" className="text-2xl font-bold text-[#121212] mt-1">
            Participa en el Proyecto Piloto o propón una colaboración
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Tanto si eres madre, padre, tutor o persona cuidadora de un menor de 6 a 12 años con autismo en la provincia de Alicante, como si representas a una asociación, colegio, universidad o entidad colaboradora.
          </p>
        </div>

        {consultationSubmitted ? (
          <div
            className="p-8 bg-emerald-50 border border-emerald-600 rounded-xl text-emerald-950 space-y-4 text-center"
            role="status"
            aria-live="polite"
          >
            <div className="w-14 h-14 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900">
              ¡Muchas gracias por participar!
            </h3>
            <p className="text-base max-w-lg mx-auto text-emerald-950">
              Hemos registrado tus prioridades y datos de contacto (<strong>{contactValue}</strong>). El equipo de la Asociación NutriDiversa te responderá desde <strong>{INSTITUTIONAL_DATA.contact.email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={resetForm}
                className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg text-sm transition-colors"
              >
                Enviar otra aportación
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-3 gap-2 mb-8" aria-label="Progreso del formulario">
              <div className={`h-2 rounded-full ${step >= 1 ? 'bg-emerald-700' : 'bg-neutral-200'}`}></div>
              <div className={`h-2 rounded-full ${step >= 2 ? 'bg-emerald-700' : 'bg-neutral-200'}`}></div>
              <div className={`h-2 rounded-full ${step >= 3 ? 'bg-emerald-700' : 'bg-neutral-200'}`}></div>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <fieldset>
                  <legend className="text-lg font-bold text-neutral-900 mb-4 block">
                    1. ¿Cómo te gustaría participar o colaborar con NutriDiversa?:
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => handleNextStep1('Familia / Persona cuidadora (Proyecto Piloto Autismo 6-12 años en Alicante)')}
                      className="min-touch-target p-5 rounded-xl border-2 border-neutral-300 hover:border-emerald-700 hover:bg-emerald-50 text-left font-bold text-base text-neutral-900 flex flex-col justify-between transition-all"
                    >
                      <span className="text-xs font-bold text-emerald-800 mb-1">Provincia de Alicante</span>
                      <span>Familia o Persona Cuidadora (Piloto Autismo 6–12 años)</span>
                      <span className="text-xs font-normal text-neutral-600 mt-2">
                        Madres, padres, tutores y cuidadores de menores de 6 a 12 años con autismo o en valoración.
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNextStep1('Asociación, Entidad Social, Centro Educativo o Institución')}
                      className="min-touch-target p-5 rounded-xl border-2 border-neutral-300 hover:border-emerald-700 hover:bg-emerald-50 text-left font-bold text-base text-neutral-900 flex flex-col justify-between transition-all"
                    >
                      <span className="text-xs font-bold text-emerald-800 mb-1">Trabajo en red (Punto 6.4)</span>
                      <span>Asociación, Universidad o Entidad</span>
                      <span className="text-xs font-normal text-neutral-600 mt-2">
                        Contacto con familias, revisión de accesibilidad, cesión de espacios o iniciativas conjuntas.
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNextStep1('Colaboración Profesional (Nutrición, Salud, Educación, Social)')}
                      className="min-touch-target p-5 rounded-xl border-2 border-neutral-300 hover:border-emerald-700 hover:bg-emerald-50 text-left font-bold text-base text-neutral-900 flex flex-col justify-between transition-all"
                    >
                      <span className="text-xs font-bold text-emerald-800 mb-1">Red Profesional (Punto 6.3)</span>
                      <span>Profesional o Investigador/a</span>
                      <span className="text-xs font-normal text-neutral-600 mt-2">
                        Aportar conocimiento y experiencia en nutrición, salud, educación, discapacidad o ámbito social.
                      </span>
                    </button>
                  </div>
                </fieldset>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <fieldset>
                  <legend className="text-lg font-bold text-neutral-900 mb-4 block">
                    2. ¿Cuál es la prioridad o línea principal de interés?:
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleNextStep2('Selectividad alimentaria y sensibilidad a texturas, olores o sabores')}
                      className="min-touch-target p-5 rounded-xl border-2 border-neutral-300 hover:border-emerald-700 hover:bg-emerald-50 text-left font-bold text-base text-neutral-900 flex flex-col justify-between transition-all"
                    >
                      <span>Selectividad y Sensibilidad Sensorial</span>
                      <span className="text-xs font-normal text-neutral-600 mt-1">
                        Dificultades con texturas, olores, sabores, presentaciones y variedad alimentaria.
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNextStep2('Rutinas en las comidas, suficiencia nutricional y dudas digestivas')}
                      className="min-touch-target p-5 rounded-xl border-2 border-neutral-300 hover:border-emerald-700 hover:bg-emerald-50 text-left font-bold text-base text-neutral-900 flex flex-col justify-between transition-all"
                    >
                      <span>Rutinas, Suficiencia Nutricional y Cuándo Consultar</span>
                      <span className="text-xs font-normal text-neutral-600 mt-1">
                        El momento de las comidas, bienestar familiar y dudas sobre cuándo acudir a profesionales sanitarios.
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNextStep2('Educación alimentaria inclusiva y materiales en lenguaje claro / lectura fácil')}
                      className="min-touch-target p-5 rounded-xl border-2 border-neutral-300 hover:border-emerald-700 hover:bg-emerald-50 text-left font-bold text-base text-neutral-900 flex flex-col justify-between transition-all"
                    >
                      <span>Talleres Educativos y Materiales Accesibles</span>
                      <span className="text-xs font-normal text-neutral-600 mt-1">
                        Elaboración y validación de guías breves, fichas con apoyos visuales y actividades educativas.
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNextStep2('Colaboración en el Proyecto Piloto (espacios, difusión a familias o revisión)')}
                      className="min-touch-target p-5 rounded-xl border-2 border-neutral-300 hover:border-emerald-700 hover:bg-emerald-50 text-left font-bold text-base text-neutral-900 flex flex-col justify-between transition-all"
                    >
                      <span>Apoyo al Proyecto Piloto en Alicante y Trabajo en Red</span>
                      <span className="text-xs font-normal text-neutral-600 mt-1">
                        Facilitar espacios para la actividad educativa, contactar con familias interesadas o revisar contenidos.
                      </span>
                    </button>
                  </div>
                </fieldset>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-neutral-600 hover:text-neutral-900 underline"
                  >
                    ← Volver al paso 1
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleConsultationSubmit} className="space-y-6" noValidate>
                <div aria-live="polite">
                  {formError && (
                    <div className="p-3 bg-rose-50 border border-rose-500 text-rose-900 text-sm font-semibold rounded">
                      {formError}
                    </div>
                  )}
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg text-xs space-y-1 text-emerald-950 font-medium border border-emerald-200">
                  <p><strong>Perfil:</strong> {beneficiary}</p>
                  <p><strong>Prioridad / Interés:</strong> {primaryNeed}</p>
                </div>

                <div>
                  <label htmlFor="contact-input" className="block text-sm font-bold text-neutral-900 mb-1">
                    Correo electrónico de contacto: *
                  </label>
                  <input
                    id="contact-input"
                    type="email"
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                    required
                    placeholder="tucorreo@ejemplo.org"
                    className="w-full sm:w-96 px-4 py-2.5 border-2 border-neutral-300 rounded-md text-base min-touch-target focus:border-emerald-700"
                  />
                </div>

                <div>
                  <label htmlFor="extra-notes" className="block text-xs font-bold text-neutral-700 mb-1">
                    Cuéntanos tu experiencia, necesidad o propuesta de colaboración (Opcional):
                  </label>
                  <textarea
                    id="extra-notes"
                    rows={3}
                    value={extraNotes}
                    onChange={(e) => setExtraNotes(e.target.value)}
                    placeholder="Escribe aquí tus prioridades, dudas o propuesta..."
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    id="sio-consent"
                    type="checkbox"
                    checked={consentArt42}
                    onChange={(e) => setConsentArt42(e.target.checked)}
                    className="w-5 h-5 mt-0.5 text-emerald-800 rounded"
                  />
                  <label htmlFor="sio-consent" className="text-xs text-neutral-700">
                    Autorizo el tratamiento de estos datos exclusivamente para gestionar mi participación o propuesta conforme al RGPD y la LOPDGDD.
                  </label>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base rounded-lg shadow-sm transition-colors flex items-center gap-2 min-touch-target"
                  >
                    <span>Enviar a NutriDiversa</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-bold text-neutral-600 underline"
                  >
                    ← Modificar paso anterior
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </section>

      {/* 6. RECURSOS Y MATERIALES EN ELABORACIÓN (PUNTO 4.3 DEL DOSSIER) */}
      <section id="guias-biblioteca" aria-labelledby="guides-heading" className="space-y-6">
        <div className="border-b border-neutral-200 pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-800 block">
              Línea 4.3 · Información y recursos accesibles
            </span>
            <h2 id="guides-heading" className="text-2xl font-bold text-[#121212] mt-0.5">
              Materiales Informativos, Guías Breves y Apoyos Visuales
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Elaboración progresiva de materiales en lenguaje claro y lectura fácil a partir de las necesidades identificadas con los colectivos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDES.map((guide) => {
            const isExpanded = selectedGuide?.id === guide.id;
            return (
              <div
                key={guide.id}
                className="bg-white rounded-xl border border-[#D1E7DD] p-6 card-surface flex flex-col justify-between space-y-4 hover:border-emerald-700 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-emerald-800 font-bold">
                    <span>{guide.pages} {guide.pages === 1 ? 'lámina' : 'páginas'}</span>
                    <span className="text-[11px] font-mono text-neutral-600">
                      {guide.format}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-neutral-500 font-medium">
                    {guide.subtitle}
                  </p>

                  <p className="text-sm text-neutral-700 leading-relaxed pt-1">
                    {easyReading ? guide.easyReadingDescription : guide.description}
                  </p>

                  <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                    <span className="text-xs font-bold text-neutral-700 block">Elementos clave:</span>
                    <div className="flex flex-wrap gap-2 text-xs text-neutral-800 font-medium">
                      {guide.pictograms.map((pic, idx) => (
                        <span key={idx} className="bg-white px-2 py-1 rounded border border-neutral-200">
                          {pic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-300 text-xs space-y-2 mt-3">
                      <h4 className="font-bold text-emerald-950 text-sm">Contenido del recurso:</h4>
                      <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                        {guide.keyPoints.map((kp, idx) => (
                          <li key={idx}>{kp}</li>
                        ))}
                      </ul>
                      <div className="pt-2">
                        <button
                          onClick={() => speakText(guide.keyPoints.join('. '), guide.title)}
                          className="text-xs font-bold text-emerald-900 flex items-center gap-1.5 underline"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Escuchar puntos clave</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedGuide(isExpanded ? null : guide)}
                    className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1 min-touch-target"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Ocultar detalle' : 'Ver detalle'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <a
                    href={DOSSIER_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Dossier_Institucional_NutriDiversa_2026.pdf"
                    className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 min-touch-target"
                  >
                    <Download className="w-4 h-4 text-emerald-300" />
                    <span>Ver en Dossier PDF</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
