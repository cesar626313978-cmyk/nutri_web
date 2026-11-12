import React from 'react';
import {
  Sparkles,
  Accessibility,
  HeartHandshake,
  BookOpen,
  Users,
  Building2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { NATIONAL_ACTION_SCOPES, PILOT_STEPS_HOME } from '../../data/associationData';

export const HomeView: React.FC = () => {
  const { navigateTo, easyReading } = useAccessibility();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigateTo(path);
  };

  const scrollToCollaborate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('recorridos-participacion');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo('/asociacion');
    }
  };

  const scopeIcons = [
    <Sparkles key="tea" className="w-6 h-6 text-[#176B50]" aria-hidden="true" />,
    <Accessibility key="disc" className="w-6 h-6 text-[#176B50]" aria-hidden="true" />,
    <HeartHandshake key="raras" className="w-6 h-6 text-[#176B50]" aria-hidden="true" />,
    <BookOpen key="respiro" className="w-6 h-6 text-[#176B50]" aria-hidden="true" />,
  ];

  return (
    <div className="w-full">
      {/* Bloque opcional de Resumen sencillo cuando la persona usuaria lo activa en Opciones de lectura */}
      {easyReading && (
        <section
          aria-label="Resumen sencillo de la portada"
          className="bg-[#EAF5EF] border-b border-[#176B50]/25 py-5 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto flex items-start gap-3">
            <Info className="w-6 h-6 text-[#176B50] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-[#20282E]">
              <p className="font-bold text-base text-[#1D3532]">
                Resumen sencillo de esta página:
              </p>
              <p className="text-base leading-relaxed max-w-[65ch]">
                NutriDiversa es una asociación sin ánimo de lucro de toda España con sede en
                Alicante. Ayudamos a familias y personas con discapacidad, autismo, enfermedades
                raras o dependencia mediante guías claras y talleres de educación alimentaria.
                Nuestro primer proyecto gratuito en Alicante está dirigido a familias de niñas y
                niños autistas de 6 a 12 años.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* BLOQUE 1: HERO ASIMÉTRICO A DOS COLUMNAS (Identidad Nacional + Proyecto Piloto en Alicante) */}
      <section
        aria-labelledby="hero-heading"
        className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Columna Izquierda (60% -> 7 cols en lg): Identidad y Misión Nacional */}
            <div className="lg:col-span-7 space-y-6">
              <p className="uppercase tracking-[0.12em] text-[0.85rem] font-bold text-[#D96820]">
                NUTRICIÓN INCLUSIVA · INFORMACIÓN · PARTICIPACIÓN
              </p>

              <h1
                id="hero-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[3rem] font-bold text-[#1D3532] leading-[1.15]"
              >
                Una alimentación más comprensible y accesible para cada familia
              </h1>

              <p className="text-[1.1rem] sm:text-[1.15rem] text-[#5A6670] leading-[1.6] max-w-[65ch]">
                Somos una asociación sin ánimo de lucro de ámbito nacional. Escuchamos a personas
                con discapacidad, enfermedades raras o dependencia y a quienes las cuidan para crear
                actividades y recursos de educación alimentaria aplicables a la vida cotidiana.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/proyecto"
                  onClick={(e) => handleNav(e, '/proyecto')}
                  className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-[#1D3532] text-white font-bold text-base hover:bg-[#176B50] transition-colors shadow-sm"
                >
                  Conocer el proyecto piloto
                </a>

                <a
                  href="#recorridos-participacion"
                  onClick={scrollToCollaborate}
                  className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl border-2 border-[#1D3532] bg-transparent text-[#1D3532] font-bold text-base hover:bg-[#1D3532]/5 transition-colors"
                >
                  Cómo colaborar
                </a>
              </div>
            </div>

            {/* Columna Derecha (40% -> 5 cols en lg): Tarjeta Blanca Destacada del Piloto en Alicante */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-[#E6E2D8] border-t-4 border-t-[#D96820] shadow-sm p-6 sm:p-8 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[0.9rem] font-bold text-[#D96820]">
                    Proyecto inicial · Alicante
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EAF5EF] text-[#176B50]">
                    En fase de preparación
                  </span>
                </div>

                <h2 className="font-serif text-[1.75rem] sm:text-[1.85rem] font-bold text-[#1D3532] leading-[1.15]">
                  Alimentación y autismo
                </h2>

                <p className="text-base text-[#5A6670] leading-relaxed">
                  Para familias de menores autistas de 6 a 12 años en la provincia de Alicante.
                </p>

                <ul className="space-y-2.5 pt-1 text-[#20282E] text-base">
                  <li className="flex items-start gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full bg-[#176B50] mt-2.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>Selectividad y variedad alimentaria</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full bg-[#176B50] mt-2.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>Texturas, olores y presentación</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full bg-[#176B50] mt-2.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>Rutinas durante las comidas</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-[#E6E2D8]">
                  <a
                    href="/contacto?perfil=familia"
                    onClick={(e) => handleNav(e, '/contacto?perfil=familia')}
                    className="inline-flex items-center gap-2 min-h-[44px] py-2 text-[#D96820] hover:text-[#C85A17] font-bold text-base group"
                  >
                    <span>Quiero participar</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: CÓMO FUNCIONARÁ EL PROYECTO PILOTO (4 Pasos Claros) */}
      <section
        aria-labelledby="como-funcionara-heading"
        className="bg-[#FFFDF8] border-b border-[#E6E2D8] py-14 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Columna Izquierda */}
            <div className="lg:col-span-5 space-y-5">
              <p className="uppercase tracking-[0.12em] text-[0.85rem] font-bold text-[#D96820]">
                CÓMO FUNCIONARÁ
              </p>

              <h2
                id="como-funcionara-heading"
                className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#1D3532] leading-[1.15]"
              >
                Un proyecto construido con las familias
              </h2>

              <p className="text-base sm:text-[1.05rem] text-[#5A6670] leading-[1.6] max-w-[65ch]">
                La participación inicial es gratuita y se dirige a madres, padres, tutores y
                personas cuidadoras en Alicante. Nuestro enfoque es participativo y basado en la
                evidencia científica.
              </p>

              {/* Aviso de alcance (Etiqueta informativa clara) */}
              <div className="bg-[#F7F3EB] border border-[#E6E2D8] border-l-4 border-l-[#176B50] rounded-xl p-4 text-sm sm:text-[0.95rem] text-[#20282E] leading-relaxed">
                <strong className="font-bold text-[#1D3532]">Alcance educativo: </strong>
                Actividad de educación alimentaria. No realiza diagnósticos, dietas personalizadas
                ni tratamientos clínicos, y no sustituye la atención sanitaria.
              </div>
            </div>

            {/* Columna Derecha: Grid 2x2 de tarjetas blancas con círculo verde #176B50 numerado del 1 al 4 */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PILOT_STEPS_HOME.map((step) => (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-3 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-9 h-9 rounded-full bg-[#176B50] text-white font-bold text-base flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#1D3532]">
                      {step.number}. {step.title}
                    </h3>
                  </div>
                  <p className="text-base text-[#5A6670] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: NUESTRO COMPROMISO Y ÁMBITOS DE ACTUACIÓN NACIONAL */}
      <section
        aria-labelledby="ambitos-heading"
        className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-14 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="uppercase tracking-[0.12em] text-[0.85rem] font-bold text-[#D96820]">
              VISIÓN NACIONAL Y COMPROMISO
            </p>
            <h2
              id="ambitos-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#1D3532] leading-[1.15]"
            >
              Más allá de un proyecto: nuestros ámbitos de actuación
            </h2>
            <p className="text-base sm:text-[1.05rem] text-[#5A6670] leading-[1.6] max-w-[65ch]">
              Aunque nuestra primera iniciativa nace en Alicante centrada en el autismo,
              NutriDiversa tiene vocación estatal para impulsar proyectos de educación alimentaria
              en distintos colectivos:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NATIONAL_ACTION_SCOPES.map((scope, index) => (
              <div
                key={scope.id}
                className="bg-white rounded-2xl border border-[#E6E2D8] p-6 flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] flex items-center justify-center">
                    {scopeIcons[index]}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1D3532] leading-snug">
                    {scope.title}
                  </h3>
                  <p className="text-base text-[#5A6670] leading-relaxed">{scope.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 4: RECORRIDOS POR PERFIL (Tarjetas de Segmentación) */}
      <section
        id="recorridos-participacion"
        aria-labelledby="recorridos-heading"
        className="bg-[#FFFDF8] py-14 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 id="recorridos-heading" className="sr-only">
            Recorridos de participación según tu perfil
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Tarjeta 1 (Icono de familia) */}
            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] flex items-center justify-center text-[#176B50]">
                  <Users className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D3532]">Soy familiar</h3>
                <p className="text-base text-[#5A6670] leading-relaxed max-w-[60ch]">
                  Quiero conocer el proyecto de alimentación y autismo en Alicante y recibir
                  información cuando se abra la participación.
                </p>
              </div>
              <div>
                <a
                  href="/contacto?perfil=familia"
                  onClick={(e) => handleNav(e, '/contacto?perfil=familia')}
                  className="inline-flex items-center gap-2 min-h-[44px] py-2 text-[#176B50] hover:text-[#1D3532] font-bold text-base group"
                >
                  <span>Avisadme cuando empiece</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* Tarjeta 2 (Icono de entidad/edificio) */}
            <div className="bg-white rounded-2xl border border-[#E6E2D8] p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] flex items-center justify-center text-[#176B50]">
                  <Building2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D3532]">
                  Soy una entidad o profesional
                </h3>
                <p className="text-base text-[#5A6670] leading-relaxed max-w-[60ch]">
                  Puedo facilitar el contacto con familias, ceder un espacio, revisar la
                  accesibilidad o aportar conocimiento científico y profesional.
                </p>
              </div>
              <div>
                <a
                  href="/contacto?perfil=entidad"
                  onClick={(e) => handleNav(e, '/contacto?perfil=entidad')}
                  className="inline-flex items-center gap-2 min-h-[44px] py-2 text-[#176B50] hover:text-[#1D3532] font-bold text-base group"
                >
                  <span>Proponer una colaboración</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 5: BLOQUE OSCURO DE PARTICIPACIÓN DIRECTA («Cuéntanos qué necesitas») */}
      <section
        aria-labelledby="participacion-directa-heading"
        className="bg-[#FFFDF8] pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto bg-[#1D3532] text-white rounded-3xl p-7 sm:p-10 lg:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Columna Izquierda */}
            <div className="lg:col-span-6 space-y-3">
              <p className="uppercase tracking-[0.12em] text-[0.85rem] font-bold text-[#D96820]">
                PARTICIPACIÓN
              </p>
              <h2
                id="participacion-directa-heading"
                className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-white leading-[1.15]"
              >
                Cuéntanos qué necesitas
              </h2>
              <p className="text-base sm:text-[1.05rem] text-white/85 leading-relaxed max-w-[55ch]">
                Elige el camino que mejor encaja contigo. Responderemos en un máximo de cinco días
                laborables.
              </p>
            </div>

            {/* Columna Derecha: 3 botones amplios con borde claro y hover suave */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href="/contacto?perfil=familia"
                onClick={(e) => handleNav(e, '/contacto?perfil=familia')}
                className="inline-flex items-center justify-center text-center min-h-[52px] px-5 py-3.5 rounded-xl border border-white/35 bg-white/5 hover:bg-white/15 text-white font-bold text-base transition-colors"
              >
                Soy familiar
              </a>

              <a
                href="/contacto?perfil=entidad"
                onClick={(e) => handleNav(e, '/contacto?perfil=entidad')}
                className="inline-flex items-center justify-center text-center min-h-[52px] px-5 py-3.5 rounded-xl border border-white/35 bg-white/5 hover:bg-white/15 text-white font-bold text-base transition-colors"
              >
                Soy profesional o entidad
              </a>

              <a
                href="/contacto?perfil=socio"
                onClick={(e) => handleNav(e, '/contacto?perfil=socio')}
                className="sm:col-span-2 inline-flex items-center justify-center text-center min-h-[52px] px-5 py-3.5 rounded-xl border border-white/35 bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-colors"
              >
                Quiero asociarme o escribir un correo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
