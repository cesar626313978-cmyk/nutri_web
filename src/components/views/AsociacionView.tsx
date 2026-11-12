import React from 'react';
import {
  Info,
  ArrowRight,
  Landmark,
  FileText,
  ExternalLink,
  Mail,
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import {
  INSTITUTIONAL_DATA,
  BOARD_MEMBERS,
  OFFICIAL_DOCUMENTS,
} from '../../data/associationData';

export const AsociacionView: React.FC = () => {
  const { easyReading, navigateTo } = useAccessibility();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <div className="w-full bg-white">
      {/* Resumen sencillo opcional */}
      {easyReading && (
        <section
          aria-label="Resumen sencillo de Conócenos"
          className="bg-[#EAF5EF] border-b border-[#1D3532]/20 py-5 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto flex items-start gap-3">
            <Info className="w-6 h-6 text-[#1D3532] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-[#20282E]">
              <p className="font-bold text-base text-[#1D3532]">
                Resumen sencillo de esta página:
              </p>
              <p className="text-base leading-relaxed max-w-[65ch]">
                NutriDiversa es una asociación legalmente inscrita en España (RNA 632919 y NIF
                G22670707) con sede en Alicante. Su Junta Directiva está formada por 5 personas que
                desempeñan sus cargos gratis. Puedes asociarte por 10 euros al año en 2026 (30 euros
                al año desde 2027) o consultar aquí nuestros documentos oficiales.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Encabezado: Historia, Misión y Valores */}
      <section className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="uppercase tracking-[0.1em] text-xs sm:text-[0.85rem] font-bold text-[#A94F1D]">
            CONÓCENOS · IDENTIDAD ESTATAL Y TRANSPARENCIA
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1D3532] leading-[1.15]">
            Conócenos: misión, Junta Directiva y cómo asociarse
          </h1>

          <p className="text-base sm:text-[1.1rem] text-[#20282E] leading-[1.65] max-w-[65ch]">
            La <strong>{INSTITUTIONAL_DATA.name}</strong> es una asociación sin ánimo de lucro de
            ámbito estatal constituida al amparo de la Ley Orgánica 1/2002, de 22 de marzo,
            reguladora del Derecho de Asociación, inscrita en el{' '}
            <strong>
              Registro Nacional de Asociaciones (Grupo 1, Sección 1, Número Nacional 632919)
            </strong>
            , con <strong>NIF G22670707</strong> y domicilio social en{' '}
            {INSTITUTIONAL_DATA.headquarters.address}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">Nuestra misión</h2>
              <p className="text-base text-[#20282E] leading-relaxed">
                {INSTITUTIONAL_DATA.mission}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">Nuestra visión</h2>
              <p className="text-base text-[#20282E] leading-relaxed">
                {INSTITUTIONAL_DATA.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.1. Composición Literal de la Junta Directiva (Tabla Oficial + Tarjetas) */}
      <section
        aria-labelledby="junta-directiva-heading"
        className="py-12 sm:py-16 bg-white border-b border-[#E6E2D8]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <p className="uppercase tracking-[0.1em] text-xs font-bold text-[#A94F1D]">
              ÓRGANO DE GOBIERNO Y REPRESENTACIÓN
            </p>
            <h2
              id="junta-directiva-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]"
            >
              Composición oficial de la Junta Directiva
            </h2>
            <p className="text-base text-[#20282E] bg-[#EAF5EF] border border-[#1D3532]/20 rounded-xl px-4 py-3 inline-block font-medium">
              Todos los cargos de la Junta Directiva son gratuitos y carecen de remuneración.
            </p>
          </div>

          {/* Tabla Oficial Íntegra de los 5 miembros de la Junta Directiva */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] overflow-hidden shadow-2xs">
            <table className="w-full text-left border-collapse text-base">
              <thead className="bg-[#F7F3EB] text-[#1D3532] border-b border-[#E6E2D8]">
                <tr>
                  <th scope="col" className="py-4 px-6 font-serif font-bold w-1/3">
                    Cargo
                  </th>
                  <th scope="col" className="py-4 px-6 font-serif font-bold">
                    Nombre y Apellidos
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E2D8]">
                {BOARD_MEMBERS.map((member) => (
                  <tr key={member.role} className="hover:bg-[#FFFDF8]">
                    <th scope="row" className="py-4 px-6 font-bold text-[#1D3532]">
                      {member.role}
                    </th>
                    <td className="py-4 px-6 font-bold text-[#20282E]">{member.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Funciones estatutarias de cada cargo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BOARD_MEMBERS.map((member) => (
              <div
                key={member.role}
                className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-6 space-y-2.5"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EAF5EF] text-[#1D3532]">
                  {member.role}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1D3532]">{member.name}</h3>
                <p className="text-sm text-[#20282E] leading-relaxed">
                  {easyReading && member.easyReadingBio ? member.easyReadingBio : member.duty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección «Hazte Persona Asociada o Colabora» (Cuotas claras y sin ambigüedad fiscal) */}
      <section
        id="colaborar"
        aria-labelledby="hazte-socio-heading"
        className="py-14 sm:py-20 bg-[#F7F3EB] border-b border-[#E6E2D8]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 max-w-3xl">
            <p className="uppercase tracking-[0.1em] text-xs font-bold text-[#A94F1D]">
              PARTICIPACIÓN ASOCIATIVA Y COLABORACIÓN
            </p>
            <h2
              id="hazte-socio-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#1D3532]"
            >
              Hazte Persona Asociada o Colabora
            </h2>
            <p className="text-base text-[#20282E] leading-relaxed">
              Formar parte de NutriDiversa permite sostener la elaboración de guías abiertas y
              actividades gratuitas de educación alimentaria para las familias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border-2 border-[#1D3532] p-6 sm:p-7 space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EAF5EF] text-[#1D3532]">
                  Promoción fundacional 2026
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1D3532]">
                  Cuota promocional fundacional
                </h3>
                <p className="font-serif text-3xl font-bold text-[#1D3532]">10 € / año</p>
                <p className="text-sm sm:text-base text-[#20282E] leading-relaxed">
                  Aplicable a las altas formalizadas hasta el{' '}
                  <strong>31 de diciembre de 2026</strong>.
                </p>
              </div>
              <a
                href="/contacto?perfil=socio"
                onClick={(e) => handleNav(e, '/contacto?perfil=socio')}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#A94F1D] text-white font-bold text-sm hover:bg-[#1D3532] transition-colors"
              >
                <span>Solicitar alta asociativa</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-7 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#F7F3EB] text-[#1D3532]">
                  A partir del 01/01/2027
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1D3532]">
                  Cuota anual ordinaria
                </h3>
                <p className="font-serif text-3xl font-bold text-[#1D3532]">30 € / año</p>
                <p className="text-sm sm:text-base text-[#20282E] leading-relaxed">
                  Cuota ordinaria anual vigente a partir del <strong>1 de enero de 2027</strong>.
                </p>
              </div>
              <a
                href="/contacto?perfil=socio"
                onClick={(e) => handleNav(e, '/contacto?perfil=socio')}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-[#1D3532] text-[#1D3532] font-bold text-sm hover:bg-[#F7F3EB] transition-colors"
              >
                <span>Más información de inscripción</span>
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-7 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#F7F3EB] text-[#A94F1D]">
                  Apoyo puntual o voluntariado
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1D3532]">
                  Aportaciones voluntarias puntuales
                </h3>
                <p className="font-serif text-2xl font-bold text-[#1D3532]">Importe libre</p>
                <p className="text-sm sm:text-base text-[#20282E] leading-relaxed">
                  Destinado íntegramente a financiar los materiales educativos y talleres de la
                  asociación, o inscripción como voluntariado según la Ley 45/2015.
                </p>
              </div>
              <a
                href="/contacto?perfil=socio"
                onClick={(e) => handleNav(e, '/contacto?perfil=socio')}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-[#1D3532] text-[#1D3532] font-bold text-sm hover:bg-[#F7F3EB] transition-colors"
              >
                <span>Colaborar o hacer voluntariado</span>
              </a>
            </div>
          </div>

          {/* Nota fiscal obligatoria (Ley 49/2002) */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] border-l-4 border-l-[#1D3532] p-6 sm:p-7 flex items-start gap-4">
            <Landmark className="w-6 h-6 text-[#1D3532] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm sm:text-base text-[#20282E] leading-relaxed max-w-[70ch]">
              <strong className="font-bold text-[#1D3532]">Información fiscal transparente: </strong>
              {INSTITUTIONAL_DATA.fiscalNote}
            </p>
          </div>
        </div>
      </section>

      {/* Acceso directo a los documentos oficiales */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <p className="uppercase tracking-[0.1em] text-xs font-bold text-[#A94F1D]">
              DOCUMENTACIÓN OFICIAL Y TRANSPARENCIA
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]">
              Documentos institucionales de NutriDiversa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICIAL_DOCUMENTS.map((doc) => {
              const isDossier = doc.fileName === 'Dossier-Institucional-NutriDiversa-2026-v1.pdf';
              return (
                <div
                  key={doc.id}
                  className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#EAF5EF] text-[#1D3532]">
                      {doc.version}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1D3532]">{doc.title}</h3>
                    <p className="text-sm text-[#20282E] leading-relaxed">{doc.summary}</p>
                  </div>
                  {isDossier ? (
                    <a
                      href={doc.downloadUrl}
                      download={doc.fileName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#1D3532] text-white font-bold text-sm hover:bg-[#176B50] transition-colors"
                    >
                      <FileText className="w-4 h-4" aria-hidden="true" />
                      <span>Descargar PDF (16 págs.)</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <a
                      href="/transparencia"
                      onClick={(e) => handleNav(e, '/transparencia')}
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-[#1D3532] text-[#1D3532] font-bold text-sm hover:bg-[#F7F3EB] transition-colors"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Ver en Transparencia</span>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
