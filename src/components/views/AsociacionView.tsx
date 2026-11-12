import React from 'react';
import {
  Info,
  Users,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
  Landmark,
  FileText,
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import {
  INSTITUTIONAL_DATA,
  BOARD_MEMBERS,
  NATIONAL_ACTION_SCOPES,
} from '../../data/associationData';

export const AsociacionView: React.FC = () => {
  const { easyReading, navigateTo } = useAccessibility();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <div className="w-full bg-[#FFFDF8]">
      {/* Resumen sencillo opcional */}
      {easyReading && (
        <section
          aria-label="Resumen sencillo sobre la asociación"
          className="bg-[#EAF5EF] border-b border-[#176B50]/25 py-5 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto flex items-start gap-3">
            <Info className="w-6 h-6 text-[#176B50] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-[#20282E]">
              <p className="font-bold text-base text-[#1D3532]">
                Resumen sencillo de esta página:
              </p>
              <p className="text-base leading-relaxed max-w-[65ch]">
                NutriDiversa es una asociación legalmente inscrita en España (RNA 632919 y NIF
                G22670707) con sede en Alicante. Su Junta Directiva trabaja gratis sin cobrar
                sueldo. Puedes asociarte por 10 euros al año durante 2026 (30 euros al año a partir
                de 2027) o colaborar como persona voluntaria.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Encabezado: Historia, Misión y Valores */}
      <section className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="uppercase tracking-[0.12em] text-[0.85rem] font-bold text-[#D96820]">
            IDENTIDAD INSTITUCIONAL · ÁMBITO ESTATAL
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1D3532] leading-[1.15]">
            La asociación: misión, junta directiva y cómo formar parte
          </h1>

          <p className="text-base sm:text-[1.1rem] text-[#20282E] leading-[1.65] max-w-[65ch]">
            La <strong>{INSTITUTIONAL_DATA.name}</strong> es una asociación sin ánimo de lucro de
            ámbito estatal constituida al amparo de la Ley Orgánica 1/2002, de 22 de marzo,
            reguladora del Derecho de Asociación, inscrita en el{' '}
            <strong>
              Registro Nacional de Asociaciones (Grupo 1, Sección 1, Número Nacional 632919)
            </strong>
            , con <strong>NIF G22670707</strong> y sede social en Alicante ({INSTITUTIONAL_DATA.headquarters.address}).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">Nuestra misión</h2>
              <p className="text-base text-[#5A6670] leading-relaxed">
                {INSTITUTIONAL_DATA.mission}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1D3532]">Nuestra visión</h2>
              <p className="text-base text-[#5A6670] leading-relaxed">
                {INSTITUTIONAL_DATA.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ámbitos de actuación estatal */}
      <section className="py-12 sm:py-16 border-b border-[#E6E2D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#D96820]">
              VOCACIÓN ESTATAL E INCLUSIVA
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]">
              Ámbitos de actuación de NutriDiversa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {NATIONAL_ACTION_SCOPES.map((scope) => (
              <div
                key={scope.id}
                className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-2.5"
              >
                <h3 className="font-serif text-xl font-bold text-[#1D3532]">{scope.title}</h3>
                <p className="text-base text-[#5A6670] leading-relaxed">{scope.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo y Junta Directiva (Funciones reales y verificables) */}
      <section
        aria-labelledby="junta-directiva-heading"
        className="py-12 sm:py-16 bg-[#F7F3EB] border-b border-[#E6E2D8]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#D96820]">
              ÓRGANO DE REPRESENTACIÓN
            </p>
            <h2
              id="junta-directiva-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]"
            >
              Equipo y Junta Directiva
            </h2>
            <p className="text-base text-[#20282E] bg-white border border-[#E6E2D8] rounded-xl px-4 py-3 inline-block font-medium">
              Los cargos de la Junta Directiva son gratuitos y carecen de remuneración.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BOARD_MEMBERS.map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EAF5EF] text-[#176B50]">
                    {member.role}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1D3532]">{member.name}</h3>
                  <p className="text-sm sm:text-base text-[#20282E] font-medium leading-relaxed">
                    {member.duty}
                  </p>
                  <p className="text-sm text-[#5A6670] leading-relaxed">
                    {easyReading && member.easyReadingBio ? member.easyReadingBio : member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección «Hazte Persona Asociada o Colabora» (Cuotas claras y sin ambigüedad fiscal) */}
      <section
        id="colaborar"
        aria-labelledby="hazte-socio-heading"
        className="py-14 sm:py-20 bg-[#FFFDF8]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 max-w-3xl">
            <p className="uppercase tracking-[0.12em] text-xs font-bold text-[#D96820]">
              PARTICIPACIÓN ASOCIATIVA Y COLABORACIÓN
            </p>
            <h2
              id="hazte-socio-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#1D3532]"
            >
              Hazte Persona Asociada o Colabora
            </h2>
            <p className="text-base text-[#5A6670] leading-relaxed">
              Formar parte de NutriDiversa permite sostener la elaboración de guías abiertas y
              actividades gratuitas de educación alimentaria para las familias.
            </p>
          </div>

          {/* 3 Tarjetas de cuotas y aportaciones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border-2 border-[#176B50] p-6 sm:p-7 space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EAF5EF] text-[#176B50]">
                  Promoción fundacional 2026
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1D3532]">
                  Cuota promocional fundacional
                </h3>
                <p className="font-serif text-3xl font-bold text-[#176B50]">10 € / año</p>
                <p className="text-sm sm:text-base text-[#5A6670] leading-relaxed">
                  Aplicable a las altas formalizadas hasta el{' '}
                  <strong className="text-[#20282E]">31 de diciembre de 2026</strong>.
                </p>
              </div>
              <a
                href="/contacto?perfil=socio"
                onClick={(e) => handleNav(e, '/contacto?perfil=socio')}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#176B50] text-white font-bold text-sm hover:bg-[#1D3532] transition-colors"
              >
                <span>Solicitar alta asociativa</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-7 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#F7F3EB] text-[#5A6670]">
                  A partir del 01/01/2027
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1D3532]">
                  Cuota anual ordinaria
                </h3>
                <p className="font-serif text-3xl font-bold text-[#1D3532]">30 € / año</p>
                <p className="text-sm sm:text-base text-[#5A6670] leading-relaxed">
                  Cuota ordinaria anual vigente a partir del{' '}
                  <strong className="text-[#20282E]">1 de enero de 2027</strong>.
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
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#F7F3EB] text-[#D96820]">
                  Apoyo puntual o voluntariado
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1D3532]">
                  Aportaciones voluntarias puntuales
                </h3>
                <p className="font-serif text-2xl font-bold text-[#1D3532]">Importe libre</p>
                <p className="text-sm sm:text-base text-[#5A6670] leading-relaxed">
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
          <div className="bg-[#F7F3EB] rounded-2xl border border-[#E6E2D8] border-l-4 border-l-[#176B50] p-6 sm:p-7 flex items-start gap-4">
            <Landmark className="w-6 h-6 text-[#176B50] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm sm:text-base text-[#20282E] leading-relaxed max-w-[70ch]">
              <strong className="font-bold text-[#1D3532]">Información fiscal transparente: </strong>
              NutriDiversa es una asociación sin ánimo de lucro inscrita en el Registro Nacional de
              Asociaciones. Actualmente se encuentra en su fase inicial de actividad y no cuenta
              todavía con la declaración de utilidad pública prevista en la Ley 49/2002, por lo que
              las cuotas y aportaciones no generan derecho a deducción fiscal en el IRPF o Impuesto
              de Sociedades. Emitimos el correspondiente justificante oficial de pago o aportación.
            </p>
          </div>

          {/* Enlace directo a Transparencia */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-2xl border border-[#E6E2D8] p-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#176B50] shrink-0" aria-hidden="true" />
              <span className="text-base font-medium text-[#20282E]">
                ¿Deseas consultar nuestros Estatutos Oficiales, datos registrales o el Dossier
                Institucional?
              </span>
            </div>
            <a
              href="/transparencia"
              onClick={(e) => handleNav(e, '/transparencia')}
              className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl bg-[#EAF5EF] text-[#176B50] font-bold text-sm hover:bg-[#176B50] hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>Ir a Transparencia</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
