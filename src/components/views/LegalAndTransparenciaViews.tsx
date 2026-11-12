import React, { useState } from 'react';
import {
  FileText,
  Info,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import {
  OFFICIAL_DOCUMENTS,
  INSTITUTIONAL_DATA,
  BOARD_MEMBERS,
} from '../../data/associationData';

export const TransparenciaView: React.FC = () => {
  const { easyReading } = useAccessibility();
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  return (
    <div className="w-full bg-white">
      {easyReading && (
        <section
          aria-label="Resumen sencillo de transparencia"
          className="bg-[#EAF5EF] border-b border-[#1D3532]/20 py-5 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto flex items-start gap-3">
            <Info className="w-6 h-6 text-[#1D3532] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-[#20282E]">
              <p className="font-bold text-base text-[#1D3532]">
                Resumen sencillo de esta página:
              </p>
              <p className="text-base leading-relaxed max-w-[65ch]">
                Aquí mostramos todos los datos legales oficiales de NutriDiversa (NIF G22670707 y
                número nacional 632919), los 5 miembros de su Junta Directiva y nuestros documentos
                institucionales oficiales.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Cabecera */}
      <section className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="uppercase tracking-[0.1em] text-xs sm:text-[0.85rem] font-bold text-[#A94F1D]">
            PORTAL DE TRANSPARENCIA · ÚLTIMA ACTUALIZACIÓN: NOVIEMBRE DE 2026
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1D3532] leading-[1.15]">
            Transparencia, Junta Directiva, Estatutos y datos registrales
          </h1>
          <p className="text-base sm:text-[1.1rem] text-[#20282E] max-w-[65ch]">
            Información institucional, registral, órgano de gobierno, documental y económica de la
            Asociación de Nutrición en la Discapacidad (NutriDiversa).
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 1. Datos Identificativos y Registrales Oficiales */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-8 space-y-6 shadow-2xs">
            <h2 className="font-serif text-2xl font-bold text-[#1D3532]">
              1. Datos Identificativos y Registrales Oficiales
            </h2>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
              <div className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-4 space-y-1">
                <dt className="text-xs font-bold uppercase tracking-wider text-[#A94F1D]">
                  Denominación oficial
                </dt>
                <dd className="font-bold text-[#1D3532]">
                  Asociación de Nutrición en la Discapacidad (NutriDiversa).
                </dd>
              </div>

              <div className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-4 space-y-1">
                <dt className="text-xs font-bold uppercase tracking-wider text-[#A94F1D]">
                  NIF
                </dt>
                <dd className="font-bold text-[#1D3532]">G22670707.</dd>
              </div>

              <div className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-4 space-y-1 md:col-span-2">
                <dt className="text-xs font-bold uppercase tracking-wider text-[#A94F1D]">
                  Naturaleza y Ámbito
                </dt>
                <dd className="text-[#20282E]">
                  Asociación sin ánimo de lucro de ámbito estatal, acogida a la Ley Orgánica 1/2002,
                  de 22 de marzo, reguladora del Derecho de Asociación.
                </dd>
              </div>

              <div className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-4 space-y-1">
                <dt className="text-xs font-bold uppercase tracking-wider text-[#A94F1D]">
                  Inscripción Registral
                </dt>
                <dd className="text-[#20282E]">
                  Inscrita en el Registro Nacional de Asociaciones del Ministerio del Interior —{' '}
                  <strong className="text-[#1D3532]">
                    Grupo 1, Sección 1, Número Nacional 632919
                  </strong>
                  .
                </dd>
              </div>

              <div className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-4 space-y-1">
                <dt className="text-xs font-bold uppercase tracking-wider text-[#A94F1D]">
                  Domicilio Social y Contacto
                </dt>
                <dd className="text-[#20282E]">
                  C/ Polop, 30, Esc. 1, 4.º O, 03015 Alicante (España) ·{' '}
                  <a
                    href="mailto:info@nutridiversa.org"
                    className="underline font-bold text-[#1D3532]"
                  >
                    info@nutridiversa.org
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* 2. Órgano de Gobierno (Junta Directiva — Transcripción Literal Obligatoria de los 5 cargos) */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-8 space-y-6 shadow-2xs">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-bold text-[#1D3532]">
                2. Órgano de Gobierno (Junta Directiva)
              </h2>
              <p className="text-base text-[#20282E]">
                Composición vigente de la Junta Directiva de NutriDiversa. Todos los miembros
                desempeñan sus cargos de forma gratuita y sin remuneración:
              </p>
            </div>

            <div className="border border-[#E6E2D8] rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse text-base">
                <thead className="bg-[#F7F3EB] text-[#1D3532] border-b border-[#E6E2D8]">
                  <tr>
                    <th scope="col" className="py-3.5 px-5 font-serif font-bold w-1/3">
                      Cargo
                    </th>
                    <th scope="col" className="py-3.5 px-5 font-serif font-bold">
                      Nombre y Apellidos
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E2D8]">
                  {BOARD_MEMBERS.map((member) => (
                    <tr key={member.role} className="hover:bg-[#FFFDF8]">
                      <th scope="row" className="py-3.5 px-5 font-bold text-[#1D3532]">
                        {member.role}
                      </th>
                      <td className="py-3.5 px-5 font-bold text-[#20282E]">{member.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Documentación Institucional Separada y con Control de Versiones */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-bold text-[#1D3532]">
                3. Documentación Institucional Separada y con Control de Versiones
              </h2>
              <p className="text-base text-[#20282E]">
                Cada documento identifica su versión, fecha y extensión.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {OFFICIAL_DOCUMENTS.map((doc, idx) => {
                const isDossierPdf = doc.fileName === 'Dossier-Institucional-NutriDiversa-2026-v1.pdf';
                const isExpanded = expandedDoc === doc.id;
                return (
                  <div
                    key={doc.id}
                    className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-7 space-y-4 shadow-2xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                      <span className="inline-flex items-center px-3 py-1 rounded-full font-bold bg-[#EAF5EF] text-[#1D3532]">
                        Documento {idx + 1} · {doc.version}
                      </span>
                      <span className="font-medium text-[#5A6670]">
                        Extensión: {doc.pages} · Archivo: <code>{doc.fileName}</code>
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3532]">
                      {doc.title}
                    </h3>

                    <p className="text-base text-[#20282E] leading-relaxed max-w-[65ch]">
                      {easyReading ? doc.simpleSummary : doc.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {isDossierPdf ? (
                        <a
                          href={doc.downloadUrl}
                          download={doc.fileName}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#A94F1D] hover:bg-[#1D3532] text-white font-bold text-sm sm:text-base transition-colors"
                        >
                          <FileText className="w-4 h-4" aria-hidden="true" />
                          <span>Abrir / Descargar {doc.fileName} (16 páginas)</span>
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedDoc((prev) => (prev === doc.id ? null : doc.id))
                            }
                            aria-expanded={isExpanded}
                            className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#1D3532] hover:bg-[#176B50] text-white font-bold text-sm sm:text-base transition-colors"
                          >
                            <FileText className="w-4 h-4" aria-hidden="true" />
                            <span>
                              {isExpanded
                                ? 'Ocultar ficha informativa del documento'
                                : 'Consultar extracto informativo verificable'}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" aria-hidden="true" />
                            ) : (
                              <ChevronDown className="w-4 h-4" aria-hidden="true" />
                            )}
                          </button>
                          <a
                            href={`mailto:info@nutridiversa.org?subject=Solicitud%20de%20copia%20documental%20-%20${encodeURIComponent(
                              doc.fileName
                            )}`}
                            className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] hover:bg-[#F7F3EB] text-[#20282E] font-medium text-sm transition-colors"
                          >
                            <Mail className="w-4 h-4 text-[#1D3532]" aria-hidden="true" />
                            <span>Solicitar copia en PDF por correo</span>
                          </a>
                        </>
                      )}
                    </div>

                    {isExpanded && doc.id === 'doc-estatutos-oficiales' && (
                      <div className="mt-4 pt-4 border-t border-[#E6E2D8] bg-[#FFFDF8] rounded-xl p-5 space-y-3 text-sm sm:text-base text-[#20282E]">
                        <h4 className="font-serif font-bold text-lg text-[#1D3532]">
                          Síntesis de disposiciones estatutarias vigentes (RNA 632919)
                        </h4>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed">
                          <li>
                            <strong>Fines y actividades (Arts. 5 y 6):</strong>{' '}
                            {INSTITUTIONAL_DATA.statutes.art5_6}
                          </li>
                          <li>
                            <strong>Carácter no clínico (Art. 8):</strong>{' '}
                            {INSTITUTIONAL_DATA.statutes.art8}
                          </li>
                          <li>
                            <strong>Régimen económico y gratuidad (Art. 40):</strong>{' '}
                            {INSTITUTIONAL_DATA.statutes.art40}
                          </li>
                          <li>
                            <strong>Voluntariado (Art. 41):</strong>{' '}
                            {INSTITUTIONAL_DATA.statutes.art41}
                          </li>
                          <li>
                            <strong>Protección de datos (Art. 42 estatutario):</strong>{' '}
                            {INSTITUTIONAL_DATA.statutes.art42}
                          </li>
                        </ul>
                      </div>
                    )}

                    {isExpanded && doc.id === 'doc-resolucion-inscripcion' && (
                      <div className="mt-4 pt-4 border-t border-[#E6E2D8] bg-[#FFFDF8] rounded-xl p-5 space-y-3 text-sm sm:text-base text-[#20282E]">
                        <h4 className="font-serif font-bold text-lg text-[#1D3532]">
                          Datos públicos de inscripción registral
                        </h4>
                        <p className="leading-relaxed">
                          La Asociación de Nutrición en la Discapacidad (NutriDiversa), con NIF{' '}
                          <strong>G22670707</strong>, figura inscrita en el{' '}
                          <strong>
                            Registro Nacional de Asociaciones del Ministerio del Interior, Grupo 1,
                            Sección 1, Número Nacional 632919
                          </strong>
                          , con domicilio social en C/ Polop, 30, Esc. 1, 4.º O, 03015 Alicante. En
                          cumplimiento del principio de minimización de datos del RGPD, la copia
                          informativa disocia los datos personales sensibles de las personas físicas
                          comparecientes.
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Información Económica, Subvenciones y Gobernanza */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-8 space-y-5 shadow-2xs">
            <h2 className="font-serif text-2xl font-bold text-[#1D3532]">
              4. Información Económica, Subvenciones y Gobernanza
            </h2>

            <div className="space-y-4 text-base text-[#20282E] leading-relaxed">
              <div className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-5 space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-[#1D3532]">
                  Retribución de órganos de gobierno
                </h3>
                <p>
                  Los miembros de la Junta Directiva desempeñan sus cargos de forma totalmente
                  gratuita, sin percibir remuneración alguna.
                </p>
              </div>

              <div className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-5 space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-[#1D3532]">
                  Presupuesto, cuentas anuales y subvenciones (Ley 19/2013 de Transparencia)
                </h3>
                <p>
                  NutriDiversa se encuentra en su primer ejercicio de puesta en marcha (2026).
                  Actualmente no percibe ayudas ni subvenciones públicas que alcancen los umbrales
                  del artículo 3 de la Ley 19/2013. Al cierre del ejercicio anual y tras su
                  aprobación por la Asamblea General, se publicarán en esta sección la memoria de
                  actividades, el balance de cuentas y el origen de los ingresos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const AvisoLegalView: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFDF8] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-10 space-y-8 shadow-2xs">
          <header className="border-b border-[#E6E2D8] pb-6 space-y-2">
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#A94F1D]">
              INFORMACIÓN LEGAL · LSSI-CE
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D3532]">
              AVISO LEGAL Y CONDICIONES DE USO
            </h1>
          </header>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              1. DATOS IDENTIFICATIVOS DEL TITULAR (ARTÍCULO 10 DE LA LEY 34/2002, LSSI-CE)
            </h2>
            <p>
              En cumplimiento del deber de información establecido en el artículo 10 de la Ley
              34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio
              Electrónico (LSSI-CE), se hacen constar de forma permanente, fácil, directa y gratuita
              los datos identificativos de la entidad titular de este sitio web
              (www.nutridiversa.org):
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong>Denominación:</strong> Asociación de Nutrición en la Discapacidad
                (NutriDiversa)
              </li>
              <li>
                <strong>NIF:</strong> G22670707
              </li>
              <li>
                <strong>Domicilio social:</strong> C/ Polop, 30, Esc. 1, 4.º O, 03015 Alicante
                (España)
              </li>
              <li>
                <strong>Registro Nacional de Asociaciones:</strong> Grupo 1, Sección 1, Número
                Nacional 632919.
              </li>
              <li>
                <strong>Ámbito:</strong> Estatal.
              </li>
              <li>
                <strong>Correo electrónico de contacto:</strong>{' '}
                <a
                  href="mailto:info@nutridiversa.org"
                  className="underline font-bold text-[#1D3532]"
                >
                  info@nutridiversa.org
                </a>
              </li>
              <li>
                <strong>Órgano de Gobierno (Junta Directiva):</strong>
                <ul className="list-disc list-inside pl-6 mt-1 space-y-1">
                  <li>Presidencia: Inmaculada Checa Lorente</li>
                  <li>Secretaría: Silvia Andrea Costa Méndez</li>
                  <li>Tesorería: César Hernández Moreno</li>
                  <li>Vocalía 1: Almudena Gómez de Cadiñanos Sastre</li>
                  <li>Vocalía 2: Victoria Muñoz Bañón</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              2. OBJETO Y CARÁCTER EXCLUSIVAMENTE EDUCATIVO Y DIVULGATIVO (EXCLUSIÓN DE ASISTENCIA
              SANITARIA)
            </h2>
            <p>
              El presente sitio web tiene por objeto dar a conocer la misión, proyectos, guías
              educativas y vías de participación de la Asociación NutriDiversa.
            </p>
            <p>
              Todos los contenidos, guías, materiales y actividades promovidos por NutriDiversa
              tienen una finalidad estrictamente informativa, divulgativa y de educación alimentaria
              comunitaria. En ningún caso constituyen ni sustituyen un diagnóstico médico, consejo
              facultativo, prescripción dietética individualizada ni tratamiento clínico o
              sanitario. Ante cualquier duda sobre la salud o el estado nutricional de una persona
              menor o adulta, debe acudirse siempre a los profesionales sanitarios competentes.
            </p>
          </section>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              3. PROPIEDAD INTELECTUAL E INDUSTRIAL
            </h2>
            <p>
              Los textos, diseños, logotipos, estructura y materiales propios de este sitio web son
              titularidad de NutriDiversa o se utilizan bajo licencia legítima. Queda prohibida su
              reproducción, transformación o distribución con fines comerciales sin autorización
              expresa de la asociación.
            </p>
          </section>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              4. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
            </h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para cualquier
              controversia que pudiera derivarse del acceso o uso de este sitio web, las partes se
              someten a los Juzgados y Tribunales de la ciudad de Alicante, salvo que la normativa
              de protección de consumidores y usuarios establezca otro fuero imperativo.
            </p>
          </section>

          <footer className="pt-4 border-t border-[#E6E2D8] text-sm font-medium text-[#5A6670]">
            Fecha de última actualización: Noviembre de 2026.
          </footer>
        </article>
      </div>
    </div>
  );
};

export const PrivacidadView: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFDF8] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-10 space-y-8 shadow-2xs">
          <header className="border-b border-[#E6E2D8] pb-6 space-y-3">
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#A94F1D]">
              RGPD (ARTS. 6, 9 Y 13) Y LOPDGDD
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D3532]">
              POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS PERSONALES
            </h1>
            <p className="text-base text-[#20282E] leading-relaxed">
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de
              27 de abril de 2016 (RGPD), especialmente en sus artículos 6, 9 y 13, así como de la
              Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía
              de los derechos digitales (LOPDGDD), informamos a las personas usuarias de este sitio
              web sobre las condiciones del tratamiento de sus datos personales.
            </p>
          </header>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              1. RESPONSABLE DEL TRATAMIENTO
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong>Denominación:</strong> Asociación de Nutrición en la Discapacidad
                (NutriDiversa)
              </li>
              <li>
                <strong>NIF:</strong> G22670707
              </li>
              <li>
                <strong>Registro Nacional de Asociaciones:</strong> Grupo 1, Sección 1, Número
                Nacional 632919
              </li>
              <li>
                <strong>Ámbito:</strong> Estatal
              </li>
              <li>
                <strong>Domicilio social:</strong> C/ Polop, 30, Esc. 1, 4.º O, 03015 Alicante
                (España)
              </li>
              <li>
                <strong>Correo electrónico de contacto:</strong>{' '}
                <a
                  href="mailto:info@nutridiversa.org"
                  className="underline font-bold text-[#1D3532]"
                >
                  info@nutridiversa.org
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              2. PRINCIPIO DE MINIMIZACIÓN Y NO RECOGIDA DE DATOS DE SALUD EN LA WEB PÚBLICA
            </h2>
            <p>
              NutriDiversa aplica un criterio estricto de minimización de datos. A través de los
              formularios públicos de esta página web NO se solicitan ni deben enviarse diagnósticos
              médicos, informes clínicos ni datos relativos a la salud (artículo 9 del RGPD) ni
              datos personales de menores de edad.
            </p>
            <p>
              En caso de que, durante la ejecución efectiva de un proyecto o taller específico,
              resultase estrictamente necesario conocer alguna adaptación alimentaria o información
              sensible de las personas participantes, dicha recogida se realizará fuera del
              formulario general mediante un procedimiento independiente que contará con análisis
              previo de riesgos, información específica y consentimiento explícito, libre y separado
              de los representantes legales.
            </p>
          </section>

          <section className="space-y-4 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              3. FINALIDADES DEL TRATAMIENTO Y BASES JURÍDICAS LEGITIMADORAS
            </h2>
            <p>
              Tratamos los datos personales recabados en este sitio web únicamente para las
              siguientes finalidades diferenciadas:
            </p>

            <div className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-4 space-y-1">
              <h3 className="font-bold text-[#1D3532]">
                a) Solicitudes de información de familias sobre el proyecto piloto:
              </h3>
              <p>
                <strong>Finalidad:</strong> Atender consultas y avisar de la apertura de plazos y
                actividades del proyecto educativo de alimentación y autismo en Alicante.
              </p>
              <p>
                <strong>Datos tratados:</strong> Nombre y apellidos, correo electrónico, municipio y
                mensaje de consulta.
              </p>
              <p>
                <strong>Base jurídica:</strong> Consentimiento expreso de la persona interesada
                (art. 6.1.a RGPD), otorgado mediante la marcación activa de la casilla
                correspondiente.
              </p>
            </div>

            <div className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-4 space-y-1">
              <h3 className="font-bold text-[#1D3532]">
                b) Propuestas de colaboración de entidades, empresas y profesionales:
              </h3>
              <p>
                <strong>Finalidad:</strong> Gestionar alianzas institucionales, cesión de espacios,
                revisión técnica o patrocinios.
              </p>
              <p>
                <strong>Datos tratados:</strong> Nombre de la entidad, persona de contacto, correo
                electrónico y propuesta.
              </p>
              <p>
                <strong>Base jurídica:</strong> Consentimiento de la persona interesada (art. 6.1.a
                RGPD) e interés legítimo en el mantenimiento de relaciones de colaboración
                institucional (art. 6.1.f RGPD).
              </p>
            </div>

            <div className="bg-[#FFFDF8] rounded-xl border border-[#E6E2D8] p-4 space-y-1">
              <h3 className="font-bold text-[#1D3532]">
                c) Gestión de personas asociadas, voluntariado y aportaciones económicas:
              </h3>
              <p>
                <strong>Finalidad:</strong> Tramitar el alta asociativa conforme a los Estatutos,
                gestionar el cobro de cuotas o aportaciones, emitir justificantes de pago y
                formalizar el acuerdo de incorporación de voluntariado conforme a la Ley 45/2015.
              </p>
              <p>
                <strong>Datos tratados:</strong> Nombre y apellidos, DNI/NIE, correo electrónico,
                teléfono y, en su caso, datos bancarios para el abono de cuotas.
              </p>
              <p>
                <strong>Base jurídica:</strong> Ejecución de la relación asociativa o acuerdo de
                voluntariado (art. 6.1.b RGPD) y cumplimiento de obligaciones legales aplicables a
                las asociaciones (art. 6.1.c RGPD).
              </p>
            </div>
          </section>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              4. PLAZOS DE CONSERVACIÓN Y DESTINATARIOS
            </h2>
            <p>
              Los datos se conservarán mientras se mantenga la relación informativa o asociativa y
              hasta que la persona interesada solicite su supresión o retire su consentimiento, más
              los plazos legales de prescripción aplicables.
            </p>
            <p>
              NutriDiversa no vende ni cede datos personales a terceros salvo obligación legal. Para
              el funcionamiento técnico de la web y del correo electrónico se emplean encargados de
              tratamiento conforme al artículo 28 del RGPD.
            </p>
          </section>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              5. DERECHOS DE LAS PERSONAS INTERESADAS Y RECLAMACIÓN ANTE LA AEPD
            </h2>
            <p>
              Puedes ejercer en cualquier momento y de forma gratuita tus derechos de acceso,
              rectificación, supresión, oposición, limitación, portabilidad y retirada del
              consentimiento escribiendo a{' '}
              <a
                href="mailto:info@nutridiversa.org"
                className="underline font-bold text-[#1D3532]"
              >
                info@nutridiversa.org
              </a>{' '}
              o al domicilio social en C/ Polop, 30, Esc. 1, 4.º O, 03015 Alicante, así como
              presentar una reclamación ante la Agencia Española de Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-[#1D3532]"
              >
                www.aepd.es
              </a>
              ).
            </p>
          </section>

          <footer className="pt-4 border-t border-[#E6E2D8] text-sm font-medium text-[#5A6670]">
            Fecha de última actualización: Noviembre de 2026.
          </footer>
        </article>
      </div>
    </div>
  );
};

export const CookiesView: React.FC = () => {
  const [showCustomPanel, setShowCustomPanel] = useState(false);
  const [optionalAnalytics, setOptionalAnalytics] = useState(false); // SIEMPRE DESMARCADA POR DEFECTO
  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#FFFDF8] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-10 space-y-8 shadow-2xs">
          <header className="border-b border-[#E6E2D8] pb-6 space-y-2">
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#A94F1D]">
              LSSI-CE ART. 22.2 · GUÍA AEPD
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D3532]">
              POLÍTICA DE COOKIES Y ALMACENAMIENTO LOCAL
            </h1>
          </header>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              1. ¿QUÉ SON LAS COOKIES Y EL ALMACENAMIENTO LOCAL?
            </h2>
            <p>
              Las cookies y el almacenamiento local del navegador (localStorage) son pequeños
              archivos o registros técnicos que se guardan en el dispositivo de la persona usuaria
              al navegar por un sitio web para recordar determinadas preferencias de visualización.
            </p>
          </section>

          <section className="space-y-4 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              2. USO EXCLUSIVO DE PREFERENCIAS TÉCNICAS EN NUTRIDIVERSA
            </h2>
            <p>
              Actualmente, el sitio web www.nutridiversa.org NO instala scripts publicitarios ni
              analíticos de terceros no declarados. Únicamente empleamos almacenamiento local
              técnico estrictamente necesario para recordar, a petición de la propia persona
              usuaria, sus preferencias en la herramienta «Opciones de lectura»:
            </p>

            <div className="overflow-x-auto border border-[#E6E2D8] rounded-xl">
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-[#F7F3EB] text-[#1D3532]">
                  <tr>
                    <th className="p-3.5 font-bold border-b border-[#E6E2D8]">Nombre técnico</th>
                    <th className="p-3.5 font-bold border-b border-[#E6E2D8]">Titular</th>
                    <th className="p-3.5 font-bold border-b border-[#E6E2D8]">Finalidad</th>
                    <th className="p-3.5 font-bold border-b border-[#E6E2D8]">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E2D8]">
                  <tr>
                    <td className="p-3.5 font-mono font-bold text-[#1D3532]">
                      nutridiversa_font_size
                    </td>
                    <td className="p-3.5">NutriDiversa (Propia)</td>
                    <td className="p-3.5">Recordar el tamaño de letra seleccionado</td>
                    <td className="p-3.5">Persistente en sesión local hasta su borrado manual</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-bold text-[#1D3532]">
                      nutridiversa_contrast
                    </td>
                    <td className="p-3.5">NutriDiversa (Propia)</td>
                    <td className="p-3.5">Recordar si se ha activado el modo de alto contraste</td>
                    <td className="p-3.5">Persistente en sesión local</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-bold text-[#1D3532]">
                      nutridiversa_simple_summary
                    </td>
                    <td className="p-3.5">NutriDiversa (Propia)</td>
                    <td className="p-3.5">Recordar la visualización del resumen sencillo</td>
                    <td className="p-3.5">Persistente en sesión local</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Panel de Configuración de Cookies conforme a la Guía de la AEPD (Sección 6.2) */}
          <section className="bg-[#F7F3EB] rounded-2xl border border-[#E6E2D8] p-6 space-y-5">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              3. PANEL DE CONFIGURACIÓN DE COOKIES (GUÍA AEPD)
            </h2>
            <p className="text-sm sm:text-base text-[#20282E]">
              Conforme a la Guía de la AEPD, los botones <strong>Aceptar</strong>,{' '}
              <strong>Rechazar</strong> y <strong>Configurar</strong> se muestran al mismo nivel
              visual y tamaño, sin casillas premarcadas:
            </p>

            {showCustomPanel && (
              <div className="bg-white rounded-xl border border-[#E6E2D8] p-4 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <label
                    htmlFor="page_cookie_analytics"
                    className="text-sm font-bold text-[#1D3532] cursor-pointer"
                  >
                    Permitir cookies analíticas o estadísticas futuras (desmarcada por defecto)
                  </label>
                  <input
                    id="page_cookie_analytics"
                    name="page_cookie_analytics"
                    type="checkbox"
                    checked={optionalAnalytics}
                    onChange={(e) => setOptionalAnalytics(e.target.checked)}
                    className="w-5 h-5 rounded border-[#E6E2D8] text-[#1D3532] shrink-0"
                  />
                </div>
              </div>
            )}

            {savedNotice && (
              <div
                role="status"
                aria-live="polite"
                className="bg-[#EAF5EF] border border-[#1D3532]/30 rounded-xl p-4 text-sm font-bold text-[#1D3532] flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>{savedNotice}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => {
                  setOptionalAnalytics(true);
                  setSavedNotice('Has aceptado las preferencias de cookies.');
                }}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border-2 border-[#1D3532] bg-[#1D3532] text-white font-bold text-base hover:bg-[#176B50] transition-colors"
              >
                Aceptar
              </button>

              <button
                type="button"
                onClick={() => {
                  setOptionalAnalytics(false);
                  setSavedNotice(
                    'Has rechazado todas las cookies no necesarias. Solo se mantiene el almacenamiento técnico esencial.'
                  );
                }}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border-2 border-[#1D3532] bg-[#1D3532] text-white font-bold text-base hover:bg-[#176B50] transition-colors"
              >
                Rechazar
              </button>

              <button
                type="button"
                onClick={() => setShowCustomPanel((prev) => !prev)}
                aria-expanded={showCustomPanel}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border-2 border-[#1D3532] bg-[#1D3532] text-white font-bold text-base hover:bg-[#176B50] transition-colors"
              >
                Configurar
              </button>
            </div>
          </section>

          <footer className="pt-4 border-t border-[#E6E2D8] text-sm font-medium text-[#5A6670]">
            Fecha de última actualización: Noviembre de 2026.
          </footer>
        </article>
      </div>
    </div>
  );
};

export const AccesibilidadView: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFDF8] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-10 space-y-8 shadow-2xs">
          <header className="border-b border-[#E6E2D8] pb-6 space-y-2">
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#A94F1D]">
              COMPROMISO VOLUNTARIO CON LAS PAUTAS WCAG
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D3532]">
              DECLARACIÓN Y COMPROMISO DE ACCESIBILIDAD
            </h1>
          </header>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              1. COMPROMISO VOLUNTARIO DE ACCESIBILIDAD
            </h2>
            <p>
              La Asociación de Nutrición en la Discapacidad (NutriDiversa) mantiene un firme
              compromiso voluntario para que su sitio web www.nutridiversa.org sea comprensible,
              navegable y utilizable por el mayor número posible de personas, con especial atención
              a las personas con discapacidad, familias y personas con dificultades de comprensión
              lectora.
            </p>
            <p>
              Como entidad asociativa privada sin ánimo de lucro, hemos diseñado esta aplicación web
              aplicando de forma voluntaria las Pautas de Accesibilidad para el Contenido Web (WCAG
              2.2 nivel AA) del W3C.
            </p>
          </section>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              2. MEDIDAS IMPLEMENTADAS EN ESTE SITIO WEB
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Tipografía de alta legibilidad (Atkinson Hyperlegible) en toda la web, párrafos
                cortos e interlineado amplio sin bloquear el zoom del navegador.
              </li>
              <li>
                Paleta de colores con contraste verificado (incluyendo naranja de acción{' '}
                <code>#A94F1D</code> y verde institucional <code>#1D3532</code>) y modo específico
                de Alto Contraste seleccionable desde el botón «Opciones de lectura».
              </li>
              <li>
                Diseño adaptable sin desplazamiento lateral en pantallas móviles y botones amplios
                fáciles de pulsar (mínimo 44px × 44px).
              </li>
              <li>
                Etiquetado visible (<code>&lt;label&gt;</code>) en todos los controles de formulario
                y ausencia de texto importante superpuesto sobre fotografías.
              </li>
              <li>Opción de «Resumen sencillo» y lectura en voz alta integrada en la cabecera.</li>
            </ul>
          </section>

          <section className="space-y-3 text-base text-[#20282E] leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-[#1D3532]">
              3. CANAL DE COMUNICACIÓN DE BARRERAS DE ACCESIBILIDAD
            </h2>
            <p>
              Si encuentras cualquier barrera de acceso, algún elemento que no funcione
              correctamente con tu lector de pantalla o teclado, o necesitas recibir la información
              de nuestros proyectos o documentos institucionales en un formato alternativo adaptado,
              escríbenos a{' '}
              <a
                href="mailto:info@nutridiversa.org"
                className="underline font-bold text-[#1D3532]"
              >
                info@nutridiversa.org
              </a>{' '}
              e intentaremos darte respuesta en un plazo máximo de cinco días laborables.
            </p>
          </section>

          <footer className="pt-4 border-t border-[#E6E2D8] text-sm font-medium text-[#5A6670]">
            Fecha de última actualización: Noviembre de 2026.
          </footer>
        </article>
      </div>
    </div>
  );
};
