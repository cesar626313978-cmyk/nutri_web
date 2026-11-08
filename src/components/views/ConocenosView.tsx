import React, { useState } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import {
  BOARD_MEMBERS,
  OFFICIAL_DOCUMENTS,
  BUDGET_BREAKDOWN_2024,
  INSTITUTIONAL_DATA,
  DOSSIER_VALUES,
  DOSSIER_OBJECTIVES,
  DOSSIER_PDF_URL,
  DOSSIER_IMAGES,
} from '../../data/associationData';
import { NutriDiversaLogo } from '../NutriDiversaLogo';
import {
  Download,
  ExternalLink,
  CheckCircle2,
  Scale,
  Send,
  AlertCircle,
  FileDown,
  ShieldCheck,
  Target,
  HeartHandshake,
  Users,
  Volume2,
} from 'lucide-react';

export const ConocenosView: React.FC = () => {
  const { easyReading, openModal, speakText, announce } = useAccessibility();
  const [imgError, setImgError] = useState(false);

  // Canal Ético Form state
  const [reportType, setReportType] = useState<'anonimo' | 'identificado'>('anonimo');
  const [reporterName, setReporterName] = useState('');
  const [reporterEmail, setReporterEmail] = useState('');
  const [incidentCategory, setIncidentCategory] = useState('normativo');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleEthicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!incidentDescription.trim()) {
      setFormError('Por favor, describa los hechos o la consulta para que la Junta Directiva pueda revisarla.');
      announce('Error en el formulario: falta la descripción.');
      return;
    }
    if (!acceptedPolicy) {
      setFormError('Debe aceptar la política de confidencialidad y protección de datos.');
      announce('Error: Debe aceptar la política de confidencialidad.');
      return;
    }

    setFormError('');
    setFormSubmitted(true);
    announce('Comunicación registrada correctamente.');
  };

  return (
    <div className="space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. CABECERA INSTITUCIONAL Y QUIÉNES SOMOS (PUNTO 1 DEL DOSSIER) */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <div className="flex justify-center mb-2">
          <NutriDiversaLogo variant="stacked" size="lg" showSubtitle={true} />
        </div>
        <div className="text-xs font-bold text-emerald-800">
          Dossier de Presentación Institucional · Alicante, 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight" style={{ textWrap: 'balance' }}>
          1. Quiénes somos
        </h1>
        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
          <strong>NutriDiversa</strong> es una asociación sin ánimo de lucro y de ámbito estatal, con sede en <strong>Alicante</strong> (inscrita en el Registro Nacional de Asociaciones con el número <strong>632919</strong>). Somos una entidad joven impulsada por personas comprometidas con la nutrición, la inclusión, la accesibilidad y los derechos de las personas con discapacidad.
        </p>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          La asociación reúne actualmente a personas graduadas en <strong>Nutrición Humana y Dietética</strong>, personas con discapacidad, colaboradores del ámbito educativo y personas interesadas en promover una sociedad más inclusiva.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={DOSSIER_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            download="Dossier_Institucional_NutriDiversa_2026.pdf"
            className="min-touch-target px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <FileDown className="w-4 h-4 text-emerald-300" />
            <span>Descargar Dossier Institucional Completo (PDF)</span>
          </a>
          <button
            onClick={() =>
              speakText(
                `${INSTITUTIONAL_DATA.mission} ${INSTITUTIONAL_DATA.vision}`,
                'Misión y Visión de NutriDiversa'
              )
            }
            className="min-touch-target px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs sm:text-sm rounded-lg border border-neutral-300 inline-flex items-center gap-2"
          >
            <Volume2 className="w-4 h-4 text-emerald-800" />
            <span>Escuchar resumen institucional</span>
          </button>
        </div>
      </section>

      {/* SUBAPARTADOS 1.1 A 1.5 DEL DOSSIER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" aria-labelledby="dossier-sec1-heading">
        <h2 id="dossier-sec1-heading" className="sr-only">Detalle de Quiénes somos (Apartados 1.1 a 1.5)</h2>

        <div className="lg:col-span-7 space-y-6">
          {/* 1.1 ¿Por qué nace NutriDiversa? */}
          <div className="p-6 bg-white rounded-xl border border-[#D1E7DD] card-surface space-y-2">
            <h3 className="text-lg font-bold text-neutral-900">
              1.1. ¿Por qué nace NutriDiversa?
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              NutriDiversa nace para contribuir a que las personas con discapacidad y sus familias puedan acceder a información y educación alimentaria y nutricional adaptadas a sus necesidades y capacidades, teniendo en cuenta las dificultades que experimentan en su vida diaria.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Para algunas personas con discapacidad, mantener una alimentación adecuada puede resultar especialmente complejo debido a sus características individuales, sus dificultades funcionales o sensoriales y las barreras que encuentran en su entorno. Esta realidad también afecta a las familias y personas cuidadoras, especialmente cuando existen situaciones de dependencia, donde las exigencias del cuidado pueden dificultar la atención a su propia alimentación, descanso y bienestar.
            </p>
          </div>

          {/* 1.2 ¿Qué realidad social queremos atender? */}
          <div className="p-6 bg-white rounded-xl border border-[#D1E7DD] card-surface space-y-2">
            <h3 className="text-lg font-bold text-neutral-900">
              1.2. ¿Qué realidad social queremos atender?
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              La <strong>Convención sobre los Derechos de las Personas con Discapacidad</strong> reconoce, en su <strong>artículo 28</strong>, el derecho de las personas con discapacidad y sus familias a un nivel de vida adecuado, que incluye una alimentación adecuada. La <strong>Estrategia Española sobre Discapacidad 2022–2030</strong> ofrece un marco para avanzar en la efectividad de estos derechos.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Según la <strong>Encuesta de Discapacidad, Autonomía Personal y Situaciones de Dependencia (EDAD 2020)</strong> del Instituto Nacional de Estadística (INE), <strong className="font-mono tabular-nums">4,32 millones</strong> de personas de seis o más años residentes en hogares en España declararon tener alguna discapacidad en 2020.
            </p>
          </div>

          {/* 1.3 ¿Qué aportamos como asociación? */}
          <div className="p-6 bg-white rounded-xl border border-[#D1E7DD] card-surface space-y-2">
            <h3 className="text-lg font-bold text-neutral-900">
              1.3. ¿Qué aportamos como asociación?
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Nuestra aportación se centra en conectar la promoción de la salud y la educación alimentaria y nutricional con la accesibilidad y el respeto a la diversidad. Nos proponemos desarrollar progresivamente materiales informativos y recursos prácticos basados en la evidencia científica, comprensibles y aplicables a la vida cotidiana, escuchando a las personas con discapacidad, a sus familias y a quienes las cuidan, y colaborando con asociaciones, universidades, centros de investigación, instituciones sanitarias y administraciones públicas.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          {/* 1.4 ¿Qué entendemos por nutrición inclusiva? */}
          <div className="p-6 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
            <h3 className="text-lg font-bold text-emerald-950">
              1.4. ¿Qué entendemos por nutrición inclusiva?
            </h3>
            <p className="text-sm text-emerald-900 leading-relaxed">
              {INSTITUTIONAL_DATA.inclusiveNutritionDefinition}
            </p>
          </div>

          {/* 1.5 ¿A quién nos dirigimos? + Fotografía Página 5 del Dossier */}
          <div className="p-6 bg-white rounded-xl border border-[#D1E7DD] card-surface space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">
              1.5. ¿A quién nos dirigimos?
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {INSTITUTIONAL_DATA.targetAudience}
            </p>
            <div className="rounded-lg overflow-hidden border border-neutral-200 bg-stone-100">
              {!imgError ? (
                <img
                  src={DOSSIER_IMAGES.workshopFamilies}
                  alt="Imagen ilustrativa de una sesión participativa de orientación alimentaria con familias y personas cuidadoras"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="h-48 bg-emerald-50 flex items-center justify-center p-4 text-xs text-emerald-900 font-semibold text-center">
                  Espacios de escucha y educación alimentaria adaptada
                </div>
              )}
            </div>
            <p className="text-[11px] text-neutral-500 italic text-center">
              Acompañamiento a personas con discapacidad, familias y personas cuidadoras.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISIÓN, VISIÓN Y LOS 7 VALORES OFICIALES (PUNTO 2 DEL DOSSIER) */}
      <section aria-labelledby="mission-vision-values-heading" className="space-y-8">
        <div className="border-b border-neutral-200 pb-3">
          <span className="text-xs font-bold text-emerald-800 block">
            Sección 2 del Dossier Institucional
          </span>
          <h2 id="mission-vision-values-heading" className="text-2xl sm:text-3xl font-bold text-[#121212]">
            2. Misión, visión y valores
          </h2>
        </div>

        {/* 2.1 Misión y 2.2 Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 bg-white rounded-xl border-2 border-[#D1E7DD] card-surface space-y-3">
            <div className="text-xs font-mono font-bold text-emerald-800">2.1. MISIÓN</div>
            <h3 className="text-xl font-bold text-neutral-900">Nuestra Misión</h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {INSTITUTIONAL_DATA.mission}
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-xl border-2 border-[#D1E7DD] card-surface space-y-3">
            <div className="text-xs font-mono font-bold text-emerald-800">2.2. VISIÓN</div>
            <h3 className="text-xl font-bold text-neutral-900">Nuestra Visión</h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {INSTITUTIONAL_DATA.vision}
            </p>
          </div>
        </div>

        {/* 2.3 Los 7 Valores Oficiales */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              2.3. Valores de NutriDiversa
            </h3>
            <p className="text-sm text-neutral-600">
              Como asociación de reciente creación, estos son los siete principios que nos comprometemos a seguir en el desarrollo de nuestras iniciativas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DOSSIER_VALUES.map((val, idx) => (
              <div
                key={val.id}
                className="p-5 bg-white rounded-xl border border-[#D1E7DD] card-surface space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-emerald-900">{val.title}</span>
                  <span className="text-xs font-mono text-neutral-400 tabular-nums">0{idx + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {easyReading ? val.easyReading : val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LOS 8 OBJETIVOS DE LA ASOCIACIÓN (PUNTO 3 DEL DOSSIER) */}
      <section aria-labelledby="objectives-heading" className="bg-white border border-[#D1E7DD] rounded-2xl p-6 sm:p-10 card-surface space-y-6">
        <div className="border-b border-neutral-200 pb-3">
          <span className="text-xs font-bold text-emerald-800 block">
            Sección 3 del Dossier Institucional
          </span>
          <h2 id="objectives-heading" className="text-2xl font-bold text-[#121212]">
            3. Objetivos de NutriDiversa
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            NutriDiversa se propone avanzar en los siguientes objetivos mediante proyectos que se desarrollarán progresivamente, de acuerdo con las necesidades identificadas y los recursos disponibles. Las actuaciones se fundamentarán en la evidencia científica:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DOSSIER_OBJECTIVES.map((obj, index) => (
            <div
              key={index}
              className="p-4 bg-[#FAFBF9] rounded-xl border border-neutral-200 flex items-start gap-3"
            >
              <Target className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-800 leading-relaxed">{obj}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CÓMO NOS ORGANIZAMOS: ORGANIGRAMA OFICIAL DEL DOSSIER (PÁGINA 14) + JUNTA DIRECTIVA */}
      <section aria-labelledby="board-heading" className="space-y-8">
        <div className="border-b border-neutral-200 pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-800 block">
              Sección 7 del Dossier Institucional
            </span>
            <h2 id="board-heading" className="text-2xl sm:text-3xl font-bold text-[#121212]">
              7. Cómo nos organizamos
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              NutriDiversa se organiza a través de la <strong>Asamblea General</strong>, órgano supremo de gobierno, y de la <strong>Junta Directiva</strong>, encargada de la gestión y representación de la asociación.
            </p>
          </div>
          <button
            onClick={() =>
              speakText(
                'Cómo nos organizamos. Asamblea General integrada por las personas asociadas, y Junta Directiva compuesta por: Presidencia Inmaculada Checa Lorente, Secretaría Silvia Andrea Costa Méndez, Tesorería César Hernández Moreno, Vocalía 1 Almudena Gómez de Cadiñanos Sastre y Vocalía 2 Victoria Muñoz Bañón.'
              )
            }
            className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1"
          >
            <Volume2 className="w-4 h-4" />
            <span>Escuchar organigrama</span>
          </button>
        </div>

        {/* RECREACIÓN FIEL DEL DIAGRAMA DE LA PÁGINA 14 DEL DOSSIER */}
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          {/* Caja Superior: Asamblea General */}
          <div className="w-full sm:w-96 bg-[#F3F4F2] border-2 border-[#165B2E] rounded-lg py-4 px-6 text-center shadow-2xs">
            <div className="text-base sm:text-lg font-extrabold tracking-wide text-neutral-900 uppercase">
              ASAMBLEA GENERAL
            </div>
            <div className="text-xs sm:text-sm text-neutral-600 mt-0.5">
              Personas asociadas
            </div>
          </div>

          {/* Línea conectora vertical */}
          <div className="w-0.5 h-7 bg-[#165B2E]" aria-hidden="true"></div>

          {/* Caja Inferior: Junta Directiva */}
          <div className="w-full bg-white border-2 border-[#165B2E] rounded-xl p-5 sm:p-7 shadow-xs space-y-4">
            <h3 className="text-center text-base sm:text-lg font-extrabold tracking-wide text-neutral-900 uppercase pb-2">
              JUNTA DIRECTIVA
            </h3>

            <div className="space-y-2.5">
              {[
                { role: 'Presidencia', name: 'Inmaculada Checa Lorente' },
                { role: 'Secretaría', name: 'Silvia Andrea Costa Méndez' },
                { role: 'Tesorería', name: 'César Hernández Moreno' },
                { role: 'Vocalía 1', name: 'Almudena Gómez de Cadiñanos Sastre' },
                { role: 'Vocalía 2', name: 'Victoria Muñoz Bañón' },
              ].map((item) => (
                <div
                  key={item.role}
                  className="bg-[#F3F4F2] rounded-md px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
                >
                  <span className="text-sm font-bold text-[#165B2E] sm:w-36 shrink-0">
                    {item.role}
                  </span>
                  <span className="text-sm text-neutral-900 font-medium flex-1">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tarjetas con funciones de cada miembro de la Junta Directiva */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {BOARD_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl border border-[#D1E7DD] p-6 card-surface flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-800 block">
                  {member.role}
                </span>
                <h3 className="text-lg font-bold text-neutral-900">{member.name}</h3>
                <p className="text-xs text-emerald-900 font-semibold">{member.duty}</p>
                <p className="text-xs text-neutral-600 leading-relaxed pt-2 border-t border-neutral-100">
                  {easyReading ? member.easyReadingBio : member.bio}
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Órgano de representación</span>
                <span className="font-mono font-bold text-emerald-900">Junta Directiva</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. COMPROMISO CON LOS DERECHOS Y 9. NATURALEZA Y ALCANCE DE LAS ACTIVIDADES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-label="Compromiso con los derechos y naturaleza de las actividades">
        <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#D1E7DD] card-surface space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
            <Users className="w-5 h-5 shrink-0" />
            <span>Sección 8 del Dossier</span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900">
            8. Compromiso con los derechos, la participación y la accesibilidad
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            NutriDiversa se compromete a orientar sus iniciativas desde el respeto a los derechos de las personas con discapacidad, su autonomía y la igualdad de oportunidades.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Para trasladar este compromiso a los proyectos, queremos contar con su participación en la identificación de necesidades, la elaboración de propuestas y la valoración de los recursos y actividades, facilitando los apoyos necesarios para que puedan expresar sus opiniones y preferencias. La accesibilidad se tendrá en cuenta desde la preparación de cada iniciativa, tanto en la información y los materiales como en las formas de participación.
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#D1E7DD] card-surface space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <span>Sección 9 del Dossier</span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900">
            9. Naturaleza y alcance de las actividades
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            En esta fase inicial, NutriDiversa plantea desarrollar iniciativas de carácter <strong>educativo, informativo, divulgativo y comunitario</strong>, centradas en la alimentación y la nutrición inclusivas.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Estas iniciativas <strong>no sustituyen la valoración, el diagnóstico, el tratamiento ni el seguimiento sanitario</strong> que pueda necesitar una persona. Cuando las necesidades planteadas excedan su alcance, se orientará hacia los servicios o profesionales correspondientes. Cada proyecto definirá sus objetivos, actividades previstas y límites, respetando las competencias profesionales.
          </p>
        </div>
      </section>

      {/* DOCUMENTACIÓN OFICIAL Y PORTAL DE TRANSPARENCIA */}
      <section aria-labelledby="transparency-heading" className="space-y-6">
        <div className="border-b border-neutral-200 pb-4">
          <span className="text-xs font-bold text-emerald-800 block">
            Transparencia Documental
          </span>
          <h2 id="transparency-heading" className="text-2xl font-bold text-[#121212] mt-0.5">
            Documentación Institucional y Registro Oficial
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Consulta y descarga el Dossier de Presentación Institucional (Alicante, 2026) y las referencias oficiales de inscripción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OFFICIAL_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl border border-[#D1E7DD] p-6 card-surface flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-semibold text-emerald-800">{doc.category}</span>
                  <span>{doc.date}</span>
                </div>
                <h3 className="text-base font-bold text-neutral-900">{doc.title}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {easyReading ? doc.easyReadingSummary : doc.summary}
                </p>
                {doc.csvCode && (
                  <p className="text-xs font-mono text-neutral-600 bg-neutral-100 p-1.5 rounded">
                    {doc.csvCode}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">{doc.fileSize}</span>
                {doc.id === 'dossier-institucional-2026' ? (
                  <a
                    href={DOSSIER_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Dossier_Institucional_NutriDiversa_2026.pdf"
                    className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded text-xs font-bold flex items-center gap-1.5 min-touch-target"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar Dossier PDF</span>
                  </a>
                ) : doc.id === 'cert-interior-632919' ? (
                  <button
                    onClick={() => openModal('certificado-oficial')}
                    className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded text-xs font-bold flex items-center gap-1.5 min-touch-target"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Ver Certificado Oficial</span>
                  </button>
                ) : (
                  <a
                    href={DOSSIER_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded text-xs font-bold flex items-center gap-1.5 border border-neutral-300 min-touch-target"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-800" />
                    <span>Consultar en Dossier</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Distribución de Prioridades en Fase Inicial */}
        <div className="bg-white rounded-xl border border-[#D1E7DD] p-6 card-surface space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-3">
            <div>
              <h3 className="text-lg font-bold text-neutral-900">
                Prioridades de Actuación en Fase Inicial (Alicante, 2026)
              </h3>
              <p className="text-xs text-neutral-600">
                Distribución orientativa de esfuerzos y recursos disponibles conforme a las líneas del Dossier Institucional.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <caption className="sr-only">Prioridades operativas de la Asociación NutriDiversa</caption>
              <thead>
                <tr className="border-b-2 border-neutral-300 text-neutral-800 font-bold text-xs">
                  <th scope="col" className="py-2.5 px-3">Línea / Programa</th>
                  <th scope="col" className="py-2.5 px-3">Detalle de Actuación</th>
                  <th scope="col" className="py-2.5 px-3 text-right">Peso</th>
                  <th scope="col" className="py-2.5 px-3 text-right">Prioridad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                {BUDGET_BREAKDOWN_2024.map((row) => (
                  <tr key={row.concept} className="hover:bg-neutral-50">
                    <td className="py-3 px-3 font-semibold text-neutral-900">{row.concept}</td>
                    <td className="py-3 px-3 text-xs text-neutral-600">{row.detail}</td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-emerald-900 tabular-nums">{row.percentage}%</td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-neutral-900">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CANAL ÉTICO Y DE TRANSPARENCIA */}
      <section aria-labelledby="ethics-heading" className="bg-[#FAFBF9] border border-neutral-300 rounded-xl p-6 sm:p-8 card-surface">
        <div className="flex items-center gap-3 text-neutral-900 mb-2">
          <Scale className="w-7 h-7 text-emerald-800" />
          <h2 id="ethics-heading" className="text-2xl font-bold">
            Canal de Transparencia, Escucha y Cumplimiento
          </h2>
        </div>
        <p className="text-sm text-neutral-700 mb-6 max-w-3xl">
          En coherencia con nuestro valor de <strong>Transparencia</strong>, disponemos de este canal confidencial y accesible para remitir consultas sobre el alcance de nuestras actividades, cumplimiento normativo o sugerencias de mejora. También puedes escribir directamente a <strong>{INSTITUTIONAL_DATA.contact.email}</strong>.
        </p>

        {formSubmitted ? (
          <div
            className="p-6 bg-emerald-50 border border-emerald-600 rounded-lg text-emerald-950 space-y-3"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg">
              <CheckCircle2 className="w-6 h-6" />
              <span>Comunicación Registrada con Éxito</span>
            </div>
            <p className="text-sm">
              Su comunicación ha sido remitida a la Junta Directiva de la Asociación NutriDiversa.
            </p>
            <div>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setIncidentDescription('');
                }}
                className="mt-2 text-xs font-bold text-emerald-900 underline"
              >
                Enviar otra comunicación
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleEthicSubmit} className="space-y-5" noValidate>
            <div aria-live="polite" aria-atomic="true">
              {formError && (
                <div className="p-3 bg-rose-50 border border-rose-500 text-rose-900 text-sm font-medium flex items-center gap-2 rounded mb-4">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  <span>{formError}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-neutral-900 mb-2">
                Modalidad de la comunicación:
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-sm text-neutral-800 cursor-pointer min-touch-target">
                  <input
                    type="radio"
                    name="reportType"
                    checked={reportType === 'anonimo'}
                    onChange={() => setReportType('anonimo')}
                    className="w-5 h-5 text-emerald-700"
                  />
                  <span>Comunicación Anónima</span>
                </label>
                <label className="flex items-center gap-2 text-sm text-neutral-800 cursor-pointer min-touch-target">
                  <input
                    type="radio"
                    name="reportType"
                    checked={reportType === 'identificado'}
                    onChange={() => setReportType('identificado')}
                    className="w-5 h-5 text-emerald-700"
                  />
                  <span>Comunicación con datos de contacto</span>
                </label>
              </div>
            </div>

            {reportType === 'identificado' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label htmlFor="reporter-name" className="block text-xs font-bold text-neutral-800 mb-1">
                    Nombre completo:
                  </label>
                  <input
                    id="reporter-name"
                    type="text"
                    value={reporterName}
                    onChange={(e) => setReporterName(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:border-emerald-700 min-touch-target text-sm"
                    placeholder="Ej: Laura Gómez"
                  />
                </div>
                <div>
                  <label htmlFor="reporter-email" className="block text-xs font-bold text-neutral-800 mb-1">
                    Correo electrónico de contacto:
                  </label>
                  <input
                    id="reporter-email"
                    type="email"
                    value={reporterEmail}
                    onChange={(e) => setReporterEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:border-emerald-700 min-touch-target text-sm"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="incident-category" className="block text-sm font-bold text-neutral-900 mb-1">
                Asunto:
              </label>
              <select
                id="incident-category"
                value={incidentCategory}
                onChange={(e) => setIncidentCategory(e.target.value)}
                className="w-full sm:w-80 px-3 py-2 border border-neutral-300 rounded-md bg-white text-sm focus:border-emerald-700 min-touch-target"
              >
                <option value="normativo">Consulta sobre estatutos o transparencia</option>
                <option value="intrusismo">Límites de actuación y rigor científico</option>
                <option value="proteccion-datos">Protección de datos y accesibilidad</option>
                <option value="otro">Otras propuestas o comunicaciones</option>
              </select>
            </div>

            <div>
              <label htmlFor="incident-desc" className="block text-sm font-bold text-neutral-900 mb-1">
                Mensaje o descripción: *
              </label>
              <textarea
                id="incident-desc"
                rows={4}
                value={incidentDescription}
                onChange={(e) => setIncidentDescription(e.target.value)}
                required
                className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm focus:border-emerald-700"
                placeholder="Escriba su consulta o propuesta con claridad..."
              ></textarea>
            </div>

            <div className="flex items-start gap-2.5">
              <input
                id="ethics-privacy"
                type="checkbox"
                checked={acceptedPolicy}
                onChange={(e) => setAcceptedPolicy(e.target.checked)}
                className="w-5 h-5 mt-0.5 text-emerald-800 rounded"
              />
              <label htmlFor="ethics-privacy" className="text-xs text-neutral-700">
                Acepto el tratamiento confidencial de esta comunicación conforme a la <strong>Política de Privacidad</strong> de la Asociación NutriDiversa.
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-md shadow-sm transition-colors flex items-center gap-2 min-touch-target"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Comunicación</span>
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
