import React, { useState } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { useCMS } from '../../context/CMSContext';
import {
  INSTITUTIONAL_DATA,
  DOSSIER_PDF_URL,
  DOSSIER_IMAGES,
  ACTION_LINES,
  AUTISM_PILOT_PROJECT,
} from '../../data/associationData';
import {
  Users,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Volume2,
  UtensilsCrossed,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Mail,
  Globe,
  FileDown,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { navigateTo, easyReading, speakText, openModal, announce } = useAccessibility();
  const { siteConfig } = useCMS();
  const [heroImgError, setHeroImgError] = useState(false);
  const [workshopImgError, setWorkshopImgError] = useState(false);

  const handleReadHero = () => {
    speakText(
      `Dossier de presentación institucional de la Asociación NutriDiversa. Asociación sin ánimo de lucro de ámbito estatal con sede en Alicante. Promoción de la salud y nutrición inclusiva. Lema: La salud también se construye desde la diversidad.`,
      'Presentación Institucional de NutriDiversa'
    );
  };

  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* 1. PORTADA INSTITUCIONAL FIEL AL DOSSIER (ALICANTE, 2026) */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6"
        aria-labelledby="hero-heading"
      >
        <div className="bg-white border-2 border-[#165B2E]/30 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-sm card-surface relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6 flex flex-col items-center text-center">
            {/* Subtítulo institucional sin cápsulas decorativas */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600">
              <span>{INSTITUTIONAL_DATA.nature}</span>
              <span aria-hidden="true">·</span>
              <span>Alicante, {INSTITUTIONAL_DATA.year}</span>
              <span aria-hidden="true">·</span>
              <span>RNA Nº {INSTITUTIONAL_DATA.nationalRegistry.number}</span>
            </div>

            {/* Logo Transparente NutriDiversa (420px - 20% más grande) */}
            <div className="flex items-center justify-center my-2">
              <img
                src="/assets/aistudio/logo_horiz_tran_sin_c690c1cd.png"
                alt="Logotipo Oficial Asociación NutriDiversa"
                referrerPolicy="no-referrer"
                className="w-[420px] max-w-full h-auto object-contain"
              />
            </div>

            {/* Título Principal del Dossier */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-bold text-emerald-900 tracking-wide">
                Dossier de presentación institucional · Asociación NutriDiversa
              </p>
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight text-center"
                style={{ textWrap: 'balance', fontFamily: siteConfig.headingFont }}
              >
                {siteConfig.heroTitle}
              </h1>
            </div>

            {easyReading ? (
              <div className="easy-reading-box p-5 rounded-xl space-y-2 text-base text-emerald-950 font-medium text-left max-w-2xl mx-auto border border-emerald-300 bg-emerald-50/70">
                <p className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-800 shrink-0" />
                  <span>
                    <strong>NutriDiversa</strong> es una asociación sin ánimo de lucro de toda España con sede en Alicante.
                  </span>
                </p>
                <p>• Queremos que las personas con discapacidad, autismo, enfermedades raras o dependencia puedan comer bien y sin barreras.</p>
                <p>• También apoyamos a sus familias y a las personas que las cuidan.</p>
                <p>• Empezamos con un proyecto piloto sobre alimentación y autismo en la provincia de Alicante.</p>
              </div>
            ) : (
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto text-center">
                {siteConfig.heroSubtitle}
              </p>
            )}

            {/* Fotografía de Portada del Dossier (Mesa inclusiva con cubiertos adaptados) */}
            <div className="w-full max-w-3xl mx-auto pt-2">
              <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-xs bg-stone-100">
                {!heroImgError ? (
                  <img
                    src={DOSSIER_IMAGES.coverMeal}
                    alt="Mesa de comida familiar mediterránea con platos de arroz, ensalada y en primer plano un mantel individual azul antideslizante con cubiertos adaptados de mango grueso rojo y azul"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                    className="w-full max-h-[420px] object-cover"
                  />
                ) : (
                  <div className="p-10 bg-emerald-50 text-emerald-900 flex flex-col items-center justify-center gap-2">
                    <UtensilsCrossed className="w-10 h-10 text-emerald-700" />
                    <span className="font-bold text-sm">Alimentación y nutrición inclusivas en la mesa cotidiana</span>
                  </div>
                )}
              </div>
              <p
                className="text-base sm:text-lg italic text-neutral-800 font-medium mt-3"
                style={{ fontFamily: siteConfig.headingFont }}
              >
                “{INSTITUTIONAL_DATA.motto}”
              </p>
            </div>

            {/* CTAs Principales + Descarga directa del Dossier PDF */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => navigateTo('/servicios')}
                className="min-touch-target px-6 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                aria-label="Ver Proyecto Piloto de Alimentación y Autismo y las 6 Líneas de Actuación"
              >
                <UtensilsCrossed className="w-5 h-5 text-emerald-300" aria-hidden="true" />
                <span>Proyecto Piloto y Líneas de Actuación</span>
              </button>

              <a
                href={DOSSIER_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Dossier_Institucional_NutriDiversa_2026.pdf"
                onClick={() => announce('Abriendo el Dossier de Presentación Institucional en PDF.')}
                className="min-touch-target px-6 py-3.5 bg-amber-50 hover:bg-amber-100 text-amber-950 font-bold rounded-lg border-2 border-amber-400 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                aria-label="Ver o descargar el Dossier de presentación institucional en PDF"
              >
                <FileDown className="w-5 h-5 text-[#E65100]" aria-hidden="true" />
                <span>Descargar Dossier Oficial (PDF)</span>
              </a>

              <button
                onClick={() => navigateTo('/colabora')}
                className="min-touch-target px-6 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold rounded-lg border border-neutral-300 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                aria-label="Cómo participar o colaborar con NutriDiversa"
              >
                <HeartHandshake className="w-5 h-5 text-[#E65100]" aria-hidden="true" />
                <span>Cómo Participar o Colaborar</span>
              </button>

              <button
                onClick={handleReadHero}
                className="min-touch-target p-3 text-neutral-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors border border-transparent hover:border-emerald-200"
                aria-label="Escuchar presentación institucional en voz alta"
                title="Escuchar presentación"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Enlace de verificación registral */}
            <div className="pt-2 text-xs text-neutral-500 flex flex-wrap items-center justify-center gap-2">
              <span>Inscrita en el Registro Nacional de Asociaciones (Ministerio del Interior)</span>
              <span aria-hidden="true">·</span>
              <button
                onClick={() => openModal('certificado-oficial')}
                className="text-emerald-800 font-semibold hover:underline flex items-center gap-1"
              >
                <span>Verificar Certificado Oficial</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ¿QUÉ ENTENDEMOS POR NUTRICIÓN INCLUSIVA? Y REALIDAD SOCIAL (PUNTOS 1.2 A 1.5 DEL DOSSIER) */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6"
        aria-labelledby="inclusive-nutrition-heading"
      >
        <div className="bg-white border border-[#D1E7DD] rounded-2xl p-6 sm:p-10 card-surface grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold text-emerald-800">
              1. Quiénes somos · Enfoque de Derechos y Diversidad
            </div>
            <h2
              id="inclusive-nutrition-heading"
              className="text-2xl sm:text-3xl font-bold text-[#121212]"
              style={{ textWrap: 'balance' }}
            >
              ¿Qué entendemos por nutrición inclusiva y a quién nos dirigimos?
            </h2>

            {easyReading ? (
              <div className="space-y-3 text-base text-neutral-800 leading-relaxed">
                <p>
                  <strong>Nutrición inclusiva</strong> significa reducir las barreras que hacen difícil comer bien o entender la información sobre los alimentos.
                </p>
                <p>
                  Respetamos los gustos, las preferencias y las capacidades de cada persona para que pueda participar en las decisiones sobre su comida.
                </p>
                <p>
                  <strong>¿A quién nos dirigimos?</strong> A personas con cualquier tipo de discapacidad (física, sensorial, intelectual, cognitiva, psicosocial o múltiple), personas autistas, personas con enfermedades raras, personas en situación de dependencia y a sus familias y cuidadoras.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>{INSTITUTIONAL_DATA.inclusiveNutritionDefinition}</p>
                <p className="font-medium text-neutral-900">{INSTITUTIONAL_DATA.targetAudience}</p>
              </div>
            )}

            {/* Datos oficiales del Dossier: Art. 28 Convención ONU y EDAD 2020 INE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 bg-[#FAFBF9] rounded-xl border border-neutral-200 space-y-1">
                <span className="text-xs font-bold text-emerald-900 block">
                  Art. 28 Convención ONU y Estrategia 2022–2030
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Reconoce el derecho de las personas con discapacidad y sus familias a un nivel de vida adecuado, que incluye una alimentación adecuada (BOE, 21 de abril de 2008).
                </p>
              </div>

              <div className="p-4 bg-[#FAFBF9] rounded-xl border border-neutral-200 space-y-1">
                <span className="text-xs font-bold text-emerald-900 block font-mono tabular-nums">
                  4,32 millones de personas (EDAD 2020 · INE)
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Personas de 6 o más años residentes en hogares en España que declararon tener alguna discapacidad y pueden encontrar barreras físicas, sensoriales o cognitivas en su alimentación cotidiana.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('/conocenos')}
                className="text-sm font-bold text-emerald-800 hover:underline inline-flex items-center gap-1.5"
              >
                <span>Conocer nuestra Misión, Visión, 7 Valores y 8 Objetivos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-2">
            <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-xs bg-stone-100">
              {!workshopImgError ? (
                <img
                  src={DOSSIER_IMAGES.workshopFamilies}
                  alt="Sesión de educación alimentaria inclusiva alrededor de una mesa con una lámina visual de alimentos saludables y frutas frescas junto a familiares y personas cuidadoras"
                  referrerPolicy="no-referrer"
                  onError={() => setWorkshopImgError(true)}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              ) : (
                <div className="h-72 bg-emerald-50 flex items-center justify-center p-6 text-center text-xs text-emerald-900 font-semibold">
                  Educación alimentaria y nutricional adaptada junto a familias y personas cuidadoras
                </div>
              )}
            </div>
            <p className="text-xs text-neutral-500 italic text-center">
              Escucha activa y orientación accesible para personas con discapacidad, familias y personas cuidadoras.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DESTACADO ESPECIAL: PROYECTO PILOTO INICIAL ALIMENTACIÓN Y AUTISMO (PUNTO 5 DEL DOSSIER) */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6"
        aria-labelledby="pilot-spotlight-heading"
      >
        <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-300 font-semibold">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Provincia de Alicante · Menores de 6 a 12 años</span>
                <span aria-hidden="true">·</span>
                <span>Sección 5 del Dossier</span>
              </div>

              <h2
                id="pilot-spotlight-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                {AUTISM_PILOT_PROJECT.title}
              </h2>

              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                {easyReading
                  ? 'Empezamos nuestra actividad en la provincia de Alicante con un proyecto para madres, padres y personas cuidadoras de niñas y niños de 6 a 12 años con autismo o en valoración.'
                  : AUTISM_PILOT_PROJECT.contextParagraphs[0]}
              </p>

              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-amber-300">
                  Prioridades que abordamos junto a las familias:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-100">
                  {AUTISM_PILOT_PROJECT.familyConcerns.map((concern, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => navigateTo('/servicios')}
                  className="min-touch-target px-5 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Ver las 5 Fases y Participar en el Piloto</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigateTo('/colabora')}
                  className="min-touch-target px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-lg border border-white/25 transition-colors whitespace-nowrap shrink-0"
                >
                  Colaborar como Entidad o Profesional
                </button>
              </div>
            </div>

            {/* Resumen de las 5 Fases del Proyecto Piloto */}
            <div className="lg:col-span-5 bg-white text-neutral-900 rounded-xl p-5 sm:p-6 space-y-3 border border-emerald-200">
              <div className="text-center border-b border-neutral-200 pb-3">
                <span className="text-[11px] font-bold text-emerald-800 block">NutriDiversa</span>
                <h3 className="text-base font-extrabold text-neutral-900">
                  Fases del proyecto piloto
                </h3>
                <p className="text-xs text-neutral-500">
                  Alimentación y autismo · Provincia de Alicante
                </p>
              </div>

              <ol className="space-y-2.5 text-xs">
                {AUTISM_PILOT_PROJECT.phases.map((phase) => (
                  <li
                    key={phase.step}
                    className="p-2.5 rounded-lg bg-[#F3F4F2] border border-neutral-200 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center shrink-0 text-xs tabular-nums">
                      {phase.step}
                    </span>
                    <div>
                      <span className="font-bold text-neutral-900 block">{phase.title}</span>
                      <span className="text-neutral-600 text-[11px] leading-snug block">
                        {phase.shortDesc}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="text-[11px] text-neutral-500 text-center pt-1">
                Proceso previsto, sujeto a los recursos y apoyos disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LAS 6 LÍNEAS DE ACTUACIÓN DEL DOSSIER (PUNTO 4) */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6"
        aria-labelledby="action-lines-heading"
      >
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-800 block">
              Sección 4 del Dossier Institucional
            </span>
            <h2 id="action-lines-heading" className="text-2xl sm:text-3xl font-bold text-[#121212]">
              Nuestras 6 Líneas de Actuación
            </h2>
            <p className="text-neutral-600 text-sm mt-1">
              Actuaciones progresivas fundamentadas en la evidencia científica, la escucha activa y el lenguaje claro.
            </p>
          </div>
          <button
            onClick={() => navigateTo('/servicios')}
            className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1"
          >
            <span>Explorar líneas y tablero visual</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTION_LINES.map((line) => (
            <div
              key={line.id}
              className="p-6 bg-white rounded-xl border border-[#D1E7DD] hover:border-emerald-700 transition-colors card-surface flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-800 tabular-nums">
                  {line.number}
                </span>
                <h3 className="text-lg font-bold text-neutral-900">
                  {line.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {easyReading ? line.easyReading : line.description}
                </p>
              </div>
              <button
                onClick={() => navigateTo('/servicios')}
                className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1 pt-2 border-t border-neutral-100 w-fit"
              >
                <span>Ver detalle en Proyectos</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NATURALEZA Y ALCANCE DE LAS ACTIVIDADES (PUNTO 9 DEL DOSSIER) Y CONTACTO OFICIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8" aria-labelledby="nature-scope-heading">
        <div className="p-6 sm:p-8 bg-[#FAFBF9] border border-neutral-300 rounded-2xl card-surface space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0" />
            <h2 id="nature-scope-heading" className="text-lg font-bold text-neutral-900">
              9. Naturaleza y alcance de las actividades (Transparencia y Rigor)
            </h2>
          </div>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {easyReading
              ? 'En esta fase inicial, NutriDiversa realiza actividades educativas, informativas y comunitarias sobre alimentación inclusiva. No sustituimos al médico ni ponemos dietas o tratamientos individuales.'
              : INSTITUTIONAL_DATA.natureAndLimits}
          </p>
        </div>

        {/* Canales de Contacto Oficial (www.nutridiversa.org e info@nutridiversa.org) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href={`mailto:${INSTITUTIONAL_DATA.contact.email}`}
            className="p-6 bg-emerald-50 hover:bg-emerald-100 rounded-2xl border border-emerald-300 transition-all flex items-center gap-4 group min-touch-target"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-900 block">Correo Electrónico Oficial</span>
              <span className="text-base font-extrabold text-neutral-900 break-all">{INSTITUTIONAL_DATA.contact.email}</span>
              <span className="text-xs text-emerald-800 block mt-0.5">Para solicitar información sobre cómo participar o colaborar</span>
            </div>
          </a>

          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-300 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-900 block">Dominio Oficial y Sede</span>
              <span className="text-base font-extrabold text-neutral-900 block">{INSTITUTIONAL_DATA.contact.website}</span>
              <span className="text-xs text-emerald-800 font-semibold block mt-0.5">Alicante · Ámbito estatal (RNA nº 632919)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
