import React from 'react';
import {
  BookOpen,
  MessageSquareHeart,
  GraduationCap,
  Handshake,
  Users,
  Building2,
  Info,
  ShieldCheck,
  MapPin,
  Globe,
  HeartHandshake,
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import {
  TRUST_BAND_ITEMS,
  WHAT_WE_DO_LINES,
  PILOT_STEPS_HOME,
} from '../../data/associationData';

interface HomeViewProps {
  showPilotInHero?: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({ showPilotInHero = true }) => {
  const { navigateTo, easyReading } = useAccessibility();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigateTo(path);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, fallbackPath: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo(fallbackPath);
    }
  };

  const lineIcons = [
    <BookOpen key="info" className="w-6 h-6 text-[#D96820]" aria-hidden="true" />,
    <MessageSquareHeart key="escucha" className="w-6 h-6 text-[#D96820]" aria-hidden="true" />,
    <GraduationCap key="edu" className="w-6 h-6 text-[#D96820]" aria-hidden="true" />,
    <Handshake key="entidades" className="w-6 h-6 text-[#D96820]" aria-hidden="true" />,
  ];

  const trustIcons = [
    <ShieldCheck key="nat" className="w-5 h-5 text-[#1D3532] shrink-0" aria-hidden="true" />,
    <Globe key="alc" className="w-5 h-5 text-[#1D3532] shrink-0" aria-hidden="true" />,
    <MapPin key="sede" className="w-5 h-5 text-[#1D3532] shrink-0" aria-hidden="true" />,
    <HeartHandshake key="enf" className="w-5 h-5 text-[#1D3532] shrink-0" aria-hidden="true" />,
  ];

  // Tarjeta secundaria del lanzamiento del piloto (preparada con showPilotInHero = true)
  const renderSecondaryPilotCard = () => (
    <aside
      aria-label="Lanzamiento del primer proyecto piloto"
      className="bg-white rounded-2xl border border-[#E6E2D8] border-t-4 border-t-[#D96820] shadow-xs p-5 sm:p-6 space-y-3"
    >
      {/* Etiqueta obligatoria y pregunta obligatoria juntas y visibles antes del título */}
      <div className="space-y-1">
        <p className="uppercase tracking-[0.08em] text-xs font-bold text-[#A94F1D]">
          PRIMER PROYECTO PILOTO
        </p>
        <p className="text-sm sm:text-base font-medium text-[#1D3532]">
          ¿Quieres conocerlo?
        </p>
      </div>

      {/* Título de la tarjeta (H2 secundario, claramente menor que el H1 general) */}
      <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1D3532] leading-snug">
        Alimentación y autismo en familias con menores de 6 a 12 años
      </h2>

      {/* Resumen breve de contexto */}
      <p className="text-sm sm:text-[0.95rem] text-[#20282E] leading-relaxed">
        En preparación en la provincia de Alicante · Variedad de alimentos, texturas y rutinas.
      </p>

      {/* Botón de la tarjeta */}
      <div className="pt-2">
        <a
          href="#proyecto-piloto"
          onClick={(e) => scrollToSection(e, 'proyecto-piloto', '/proyecto')}
          className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-[#A94F1D] hover:bg-[#1D3532] text-white font-bold text-sm transition-colors"
        >
          Conocer el proyecto
        </a>
      </div>
    </aside>
  );

  return (
    <div className="w-full bg-white">
      {/* Bloque opcional de Resumen sencillo cuando se activa en Opciones de lectura */}
      {easyReading && (
        <section
          aria-label="Resumen sencillo de la portada"
          className="bg-[#EAF5EF] border-b border-[#1D3532]/20 py-5 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto flex items-start gap-3">
            <Info className="w-6 h-6 text-[#1D3532] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-[#20282E]">
              <p className="font-bold text-base text-[#1D3532]">
                Resumen sencillo de esta página:
              </p>
              <p className="text-base leading-relaxed max-w-[65ch]">
                NutriDiversa es una asociación estatal sin ánimo de lucro para personas con
                discapacidad, enfermedades raras, dependencia y sus familias. Creamos información y
                proyectos educativos sobre alimentación accesible. Además, estamos preparando en
                Alicante nuestro primer proyecto piloto gratuito para familias con menores autistas
                de 6 a 12 años.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FRANJA 2: PRIMERA PANTALLA (HERO ASIMÉTRICO: IDENTIDAD DOMINANTE + TARJETA SECUNDARIA DEL PILOTO) */}
      <section
        aria-labelledby="hero-heading"
        className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-10 sm:py-14 lg:py-18"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Columna Izquierda Dominante (62%-65% -> 8 de 12 columnas) */}
            <div className={showPilotInHero ? 'lg:col-span-8 space-y-5' : 'lg:col-span-12 space-y-5'}>
              <p className="uppercase tracking-[0.1em] text-xs sm:text-[0.85rem] font-bold text-[#A94F1D]">
                ASOCIACIÓN DE NUTRICIÓN INCLUSIVA Y DISCAPACIDAD
              </p>

              {/* Titular Principal H1 (el texto más grande de toda la portada) */}
              <h1
                id="hero-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[3.1rem] font-bold text-[#1D3532] leading-[1.12]"
              >
                Alimentación y nutrición accesibles para personas con discapacidad y sus familias
              </h1>

              <p className="font-serif text-lg sm:text-xl font-medium text-[#1D3532]/90">
                Una alimentación más comprensible y accesible para cada familia
              </p>

              <p className="text-base sm:text-[1.1rem] text-[#20282E] leading-[1.6] max-w-[65ch]">
                Somos una asociación estatal sin ánimo de lucro para personas con discapacidad,
                enfermedades raras, dependencia y sus familias. Creamos información, recursos y
                proyectos educativos que tienen en cuenta distintas necesidades de apoyo. Escuchamos
                a las personas, a sus familias y a quienes las acompañan.
              </p>

              {/* Botones principales (alineados horizontalmente en escritorio, ancho completo en móvil) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#que-hacemos"
                  onClick={(e) => scrollToSection(e, 'que-hacemos', '/que-hacemos')}
                  className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-[#1D3532] hover:bg-[#176B50] text-white font-bold text-base transition-colors shadow-xs"
                >
                  Conocer NutriDiversa
                </a>

                <a
                  href="#participa"
                  onClick={(e) => scrollToSection(e, 'participa', '/contacto')}
                  className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl border-2 border-[#1D3532] bg-transparent text-[#1D3532] font-bold text-base hover:bg-[#1D3532]/5 transition-colors"
                >
                  Cómo colaborar
                </a>
              </div>
            </div>

            {/* Columna Derecha Secundaria (35%-38% -> 4 de 12 columnas) */}
            {showPilotInHero && (
              <div className="lg:col-span-4">
                {renderSecondaryPilotCard()}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FRANJA 3: BANDA DE CONFIANZA (DATOS VERIFICADOS) */}
      <section
        aria-label="Datos verificados de la asociación"
        className="bg-[#EAF5EF] border-b border-[#E6E2D8] py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TRUST_BAND_ITEMS.map((item, idx) => (
              <div
                key={item.label}
                className="bg-white/80 rounded-xl border border-[#E6E2D8] p-4 flex items-start gap-3"
              >
                <div className="mt-0.5">{trustIcons[idx]}</div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#A94F1D]">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-[#20282E] leading-snug">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRANJA 4: QUÉ HACEMOS (#que-hacemos) */}
      <section
        id="que-hacemos"
        aria-labelledby="que-hacemos-heading"
        className="bg-white border-b border-[#E6E2D8] py-14 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="uppercase tracking-[0.1em] text-xs sm:text-[0.85rem] font-bold text-[#A94F1D]">
              QUÉ HACEMOS · LÍNEAS DE ACTUACIÓN ESTATAL
            </p>
            <h2
              id="que-hacemos-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-[#1D3532] leading-[1.15]"
            >
              Trabajamos para que la información alimentaria sea comprensible y útil
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_WE_DO_LINES.map((line, index) => (
              <div
                key={line.id}
                className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] flex items-center justify-center">
                    {lineIcons[index]}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1D3532] leading-snug">
                    {line.title}
                  </h3>
                  <p className="text-base text-[#20282E] leading-relaxed">{line.description}</p>
                </div>
              </div>
            ))}
          </div>

          {!showPilotInHero && (
            <div className="pt-4 max-w-xl">
              {renderSecondaryPilotCard()}
            </div>
          )}
        </div>
      </section>

      {/* FRANJA 5: SECCIÓN COMPLETA DEL PRIMER PROYECTO PILOTO (#proyecto-piloto) */}
      <section
        id="proyecto-piloto"
        aria-labelledby="piloto-completo-heading"
        className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-14 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#E6E2D8] border-t-4 border-t-[#D96820] p-6 sm:p-10 lg:p-12 shadow-xs space-y-8">
            <div className="max-w-3xl space-y-3">
              {/* Etiqueta superior obligatoria y pregunta obligatoria previa al título */}
              <div className="space-y-1">
                <p className="uppercase tracking-[0.1em] text-xs sm:text-[0.85rem] font-bold text-[#A94F1D]">
                  PRIMER PROYECTO PILOTO
                </p>
                <p className="text-base sm:text-lg font-medium text-[#1D3532]">
                  ¿Quieres conocerlo?
                </p>
              </div>

              <h2
                id="piloto-completo-heading"
                className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#1D3532] leading-[1.15]"
              >
                Alimentación y autismo en familias con menores de 6 a 12 años
              </h2>

              <p className="text-base sm:text-[1.1rem] text-[#20282E] leading-[1.6] max-w-[65ch]">
                Estamos preparando en Alicante un proyecto educativo para conocer las experiencias
                de las familias con la variedad de alimentos, las texturas y las rutinas durante las
                comidas.
              </p>
            </div>

            {/* Desarrollo claro en 4 pasos (Cómo funcionará) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PILOT_STEPS_HOME.map((step) => (
                <div
                  key={step.number}
                  className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-5 space-y-2.5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-full bg-[#1D3532] text-white font-bold text-sm flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1D3532]">
                      {step.number}. {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#20282E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Nota de alcance sanitario */}
            <div className="bg-[#EAF5EF] border border-[#1D3532]/20 border-l-4 border-l-[#1D3532] rounded-xl p-4 text-sm sm:text-base text-[#20282E] leading-relaxed">
              <strong className="font-bold text-[#1D3532]">Alcance educativo: </strong>
              Proyecto exclusivamente educativo y comunitario en fase de preparación. No ofrece
              diagnósticos médicos, dietas personalizadas ni tratamientos clínicos.
            </div>

            {/* Dos botones de acción claros (con texto autoexplicativo) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="/proyecto"
                onClick={(e) => handleNav(e, '/proyecto')}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-[#A94F1D] hover:bg-[#1D3532] text-white font-bold text-base transition-colors"
              >
                Quiero conocer el proyecto
              </a>

              <a
                href="/contacto?perfil=entidad"
                onClick={(e) => handleNav(e, '/contacto?perfil=entidad')}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl border-2 border-[#1D3532] bg-white text-[#1D3532] font-bold text-base hover:bg-[#F7F3EB] transition-colors"
              >
                Quiero colaborar como entidad
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FRANJA 6: PARTICIPA Y CONTACTO SEGMENTADO (#participa) */}
      <section
        id="participa"
        aria-labelledby="participa-heading"
        className="bg-white py-14 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="uppercase tracking-[0.1em] text-xs sm:text-[0.85rem] font-bold text-[#A94F1D]">
              PARTICIPA CON NUTRIDIVERSA
            </p>
            <h2
              id="participa-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#1D3532] leading-[1.15]"
            >
              Dos vías directas para participar o colaborar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Ruta 1 — Soy familiar */}
            <div className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-7 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] flex items-center justify-center text-[#1D3532]">
                  <Users className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D3532]">Soy familiar</h3>
                <p className="text-base text-[#20282E] leading-relaxed max-w-[60ch]">
                  Quiero recibir aviso e información cuando se abra la participación del proyecto
                  piloto en Alicante.
                </p>
              </div>
              <div>
                <a
                  href="/contacto?perfil=familia"
                  onClick={(e) => handleNav(e, '/contacto?perfil=familia')}
                  className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-[#1D3532] hover:bg-[#176B50] text-white font-bold text-base transition-colors"
                >
                  Solicitar información para familias
                </a>
              </div>
            </div>

            {/* Ruta 2 — Represento a una entidad o soy profesional */}
            <div className="bg-[#FFFDF8] rounded-2xl border border-[#E6E2D8] p-7 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] flex items-center justify-center text-[#1D3532]">
                  <Building2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D3532]">
                  Represento a una entidad o soy profesional
                </h3>
                <p className="text-base text-[#20282E] leading-relaxed max-w-[60ch]">
                  Puedo facilitar contacto con familias, ceder un espacio, revisar la accesibilidad
                  o aportar conocimiento técnico.
                </p>
              </div>
              <div>
                <a
                  href="/contacto?perfil=entidad"
                  onClick={(e) => handleNav(e, '/contacto?perfil=entidad')}
                  className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl border-2 border-[#1D3532] bg-white text-[#1D3532] font-bold text-base hover:bg-[#F7F3EB] transition-colors"
                >
                  Proponer colaboración institucional
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
