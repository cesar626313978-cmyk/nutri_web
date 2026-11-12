import React, { useState } from 'react';
import {
  Users,
  Building2,
  UserPlus,
  CheckCircle2,
  Info,
  Mail,
  MapPin,
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { ContactProfileTab } from '../../types';

export const ContactoView: React.FC = () => {
  const { contactProfile, setContactProfile, navigateTo, easyReading } = useAccessibility();

  // Estados independientes para Formulario 1: Familias
  const [nombreFamilia, setNombreFamilia] = useState('');
  const [emailFamilia, setEmailFamilia] = useState('');
  const [municipioFamilia, setMunicipioFamilia] = useState('');
  const [mensajeFamilia, setMensajeFamilia] = useState('');
  const [checkFamilia, setCheckFamilia] = useState(false); // SIEMPRE DESMARCADA POR DEFECTO
  const [sentFamilia, setSentFamilia] = useState(false);

  // Estados independientes para Formulario 2: Entidades y Profesionales
  const [entidadNombre, setEntidadNombre] = useState('');
  const [personaContacto, setPersonaContacto] = useState('');
  const [emailEntidad, setEmailEntidad] = useState('');
  const [modalidadColaboracion, setModalidadColaboracion] = useState(
    'Facilitar contacto y difusión entre familias'
  );
  const [mensajeEntidad, setMensajeEntidad] = useState('');
  const [checkEntidad, setCheckEntidad] = useState(false); // SIEMPRE DESMARCADA POR DEFECTO
  const [sentEntidad, setSentEntidad] = useState(false);

  // Estados independientes para Formulario 3: Solicitud de Alta como Persona Asociada o Voluntariado
  const [nombreSocio, setNombreSocio] = useState('');
  const [dniSocio, setDniSocio] = useState('');
  const [emailSocio, setEmailSocio] = useState('');
  const [telefonoSocio, setTelefonoSocio] = useState('');
  const [tipoSolicitud, setTipoSolicitud] = useState(
    'Alta como Persona Asociada (Cuota promocional fundacional 2026: 10 €/año; a partir del 01/01/2027: 30 €/año)'
  );
  const [checkSocio, setCheckSocio] = useState(false); // SIEMPRE DESMARCADA POR DEFECTO
  const [sentSocio, setSentSocio] = useState(false);

  const handleTabSelect = (tab: ContactProfileTab) => {
    setContactProfile(tab);
    try {
      window.history.replaceState({}, '', `/contacto?perfil=${tab}`);
    } catch {}
  };

  const handlePrivacyLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo('/privacidad');
  };

  return (
    <div className="w-full bg-[#FFFDF8]">
      {/* Resumen sencillo opcional */}
      {easyReading && (
        <section
          aria-label="Resumen sencillo de contacto"
          className="bg-[#EAF5EF] border-b border-[#176B50]/25 py-5 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto flex items-start gap-3">
            <Info className="w-6 h-6 text-[#176B50] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-[#20282E]">
              <p className="font-bold text-base text-[#1D3532]">
                Resumen sencillo de esta página:
              </p>
              <p className="text-base leading-relaxed max-w-[65ch]">
                Aquí tienes 3 formularios separados según lo que necesites: uno para familias de
                Alicante, otro para asociaciones o profesionales que quieran colaborar, y otro para
                hacerte persona asociada o voluntaria. Por favor, nunca escribas datos médicos ni
                informes de salud.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Cabecera de Contacto */}
      <section className="bg-[#F7F3EB] border-b border-[#E6E2D8] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="uppercase tracking-[0.12em] text-[0.85rem] font-bold text-[#D96820]">
            ATENCIÓN DIFERENCIADA POR PERFIL
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1D3532] leading-[1.15]">
            Contacto para familias, entidades y personas asociadas
          </h1>
          <p className="text-base sm:text-[1.1rem] text-[#5A6670] leading-[1.6] max-w-[65ch]">
            Selecciona el formulario que corresponde a tu perfil. La Secretaría de NutriDiversa
            responderá a tu mensaje en un máximo de cinco días laborables.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm sm:text-base text-[#20282E]">
            <span className="inline-flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#176B50]" aria-hidden="true" />
              <a
                href="mailto:info@nutridiversa.org"
                className="font-bold underline text-[#176B50] hover:text-[#1D3532]"
              >
                info@nutridiversa.org
              </a>
            </span>
            <span className="inline-flex items-center gap-2 text-[#5A6670]">
              <MapPin className="w-4 h-4 text-[#176B50]" aria-hidden="true" />
              <span>C/ Polop, 30, Esc. 1, 4º O, 03015 Alicante</span>
            </span>
          </div>
        </div>
      </section>

      {/* Selector de 3 pestañas independientes + Formularios */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Pestañas */}
          <div
            role="tablist"
            aria-label="Seleccionar tipo de formulario de contacto"
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            <button
              type="button"
              role="tab"
              id="tab-familia"
              aria-selected={contactProfile === 'familia'}
              aria-controls="panel-familia"
              onClick={() => handleTabSelect('familia')}
              className={`min-h-[56px] p-4 rounded-2xl border text-left flex items-center gap-3.5 transition-colors ${
                contactProfile === 'familia'
                  ? 'bg-[#1D3532] text-white border-[#1D3532] font-bold shadow-xs'
                  : 'bg-white text-[#20282E] border-[#E6E2D8] hover:bg-[#F7F3EB]'
              }`}
            >
              <Users
                className={`w-5 h-5 shrink-0 ${
                  contactProfile === 'familia' ? 'text-[#EAF5EF]' : 'text-[#176B50]'
                }`}
                aria-hidden="true"
              />
              <div>
                <span className="block text-base font-bold">1. Soy familiar</span>
                <span
                  className={`block text-xs ${
                    contactProfile === 'familia' ? 'text-white/80' : 'text-[#5A6670]'
                  }`}
                >
                  Proyecto piloto en Alicante
                </span>
              </div>
            </button>

            <button
              type="button"
              role="tab"
              id="tab-entidad"
              aria-selected={contactProfile === 'entidad'}
              aria-controls="panel-entidad"
              onClick={() => handleTabSelect('entidad')}
              className={`min-h-[56px] p-4 rounded-2xl border text-left flex items-center gap-3.5 transition-colors ${
                contactProfile === 'entidad'
                  ? 'bg-[#1D3532] text-white border-[#1D3532] font-bold shadow-xs'
                  : 'bg-white text-[#20282E] border-[#E6E2D8] hover:bg-[#F7F3EB]'
              }`}
            >
              <Building2
                className={`w-5 h-5 shrink-0 ${
                  contactProfile === 'entidad' ? 'text-[#EAF5EF]' : 'text-[#176B50]'
                }`}
                aria-hidden="true"
              />
              <div>
                <span className="block text-base font-bold">2. Entidad o profesional</span>
                <span
                  className={`block text-xs ${
                    contactProfile === 'entidad' ? 'text-white/80' : 'text-[#5A6670]'
                  }`}
                >
                  Propuestas de colaboración
                </span>
              </div>
            </button>

            <button
              type="button"
              role="tab"
              id="tab-socio"
              aria-selected={contactProfile === 'socio'}
              aria-controls="panel-socio"
              onClick={() => handleTabSelect('socio')}
              className={`min-h-[56px] p-4 rounded-2xl border text-left flex items-center gap-3.5 transition-colors ${
                contactProfile === 'socio'
                  ? 'bg-[#1D3532] text-white border-[#1D3532] font-bold shadow-xs'
                  : 'bg-white text-[#20282E] border-[#E6E2D8] hover:bg-[#F7F3EB]'
              }`}
            >
              <UserPlus
                className={`w-5 h-5 shrink-0 ${
                  contactProfile === 'socio' ? 'text-[#EAF5EF]' : 'text-[#176B50]'
                }`}
                aria-hidden="true"
              />
              <div>
                <span className="block text-base font-bold">3. Asociarme o voluntariado</span>
                <span
                  className={`block text-xs ${
                    contactProfile === 'socio' ? 'text-white/80' : 'text-[#5A6670]'
                  }`}
                >
                  Solicitud de alta o voluntariado
                </span>
              </div>
            </button>
          </div>

          {/* FORMULARIO 1: FAMILIAS (Interesadas en el proyecto piloto de Alicante) */}
          {contactProfile === 'familia' && (
            <div
              id="panel-familia"
              role="tabpanel"
              aria-labelledby="tab-familia"
              className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-10 shadow-2xs space-y-6"
            >
              <div className="space-y-2 border-b border-[#E6E2D8] pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D96820]">
                  FORMULARIO 1 · FAMILIAS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]">
                  Familias interesadas en el proyecto piloto de Alicante
                </h2>
                <p className="text-base text-[#5A6670]">
                  Para madres, padres, tutores legales y personas cuidadoras de menores autistas de
                  6 a 12 años en la provincia de Alicante.
                </p>
              </div>

              {sentFamilia ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-[#EAF5EF] border border-[#176B50] rounded-xl p-6 text-[#1D3532] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#176B50] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="font-bold text-base sm:text-lg leading-relaxed">
                    Hemos recibido tu solicitud correctamente. La Secretaría de NutriDiversa te
                    responderá en un máximo de cinco días laborables al correo indicado.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!checkFamilia) return;
                    setSentFamilia(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="id_nombre_familia"
                      className="block text-sm font-bold text-[#20282E] mb-1.5"
                    >
                      Nombre y apellidos <span className="text-[#D96820]">*</span>
                    </label>
                    <input
                      id="id_nombre_familia"
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
                        htmlFor="id_email_familia"
                        className="block text-sm font-bold text-[#20282E] mb-1.5"
                      >
                        Correo electrónico <span className="text-[#D96820]">*</span>
                      </label>
                      <input
                        id="id_email_familia"
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
                        htmlFor="id_municipio_familia"
                        className="block text-sm font-bold text-[#20282E] mb-1.5"
                      >
                        Municipio (Provincia de Alicante) <span className="text-[#D96820]">*</span>
                      </label>
                      <input
                        id="id_municipio_familia"
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
                      htmlFor="id_mensaje_familia"
                      className="block text-sm font-bold text-[#20282E] mb-1.5"
                    >
                      Comentarios o dudas generales (sin incluir datos médicos ni diagnósticos)
                    </label>
                    <textarea
                      id="id_mensaje_familia"
                      name="mensaje_familia"
                      rows={4}
                      value={mensajeFamilia}
                      onChange={(e) => setMensajeFamilia(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                    />
                  </div>

                  {/* Aviso importante de privacidad antes del botón de envío */}
                  <div className="bg-[#F7F3EB] border border-[#E6E2D8] border-l-4 border-l-[#D96820] rounded-xl p-4 text-sm text-[#20282E] leading-relaxed">
                    <strong>Aviso importante de privacidad:</strong> Por favor,{' '}
                    <strong>
                      no incluyas diagnósticos médicos, informes clínicos ni datos de salud
                    </strong>{' '}
                    tuyos ni de menores en este formulario. NutriDiversa no presta asistencia
                    clínica y este canal es exclusivamente informativo.
                  </div>

                  {/* Casilla obligatoria SIEMPRE DESMARCADA POR DEFECTO */}
                  <div className="flex items-start gap-3">
                    <input
                      id="id_check_familia"
                      name="acepta_privacidad_familia"
                      type="checkbox"
                      required
                      checked={checkFamilia}
                      onChange={(e) => setCheckFamilia(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-[#E6E2D8] text-[#176B50] shrink-0"
                    />
                    <label
                      htmlFor="id_check_familia"
                      className="text-sm text-[#20282E] leading-relaxed cursor-pointer"
                    >
                      He leído y acepto la{' '}
                      <a
                        href="/privacidad"
                        onClick={handlePrivacyLink}
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
          )}

          {/* FORMULARIO 2: ENTIDADES Y PROFESIONALES (Propuestas de colaboración) */}
          {contactProfile === 'entidad' && (
            <div
              id="panel-entidad"
              role="tabpanel"
              aria-labelledby="tab-entidad"
              className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-10 shadow-2xs space-y-6"
            >
              <div className="space-y-2 border-b border-[#E6E2D8] pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D96820]">
                  FORMULARIO 2 · ENTIDADES Y PROFESIONALES
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]">
                  Propuestas de colaboración institucional o técnica
                </h2>
                <p className="text-base text-[#5A6670]">
                  Para asociaciones, centros educativos, entidades públicas o privadas y
                  profesionales que deseen colaborar con NutriDiversa.
                </p>
              </div>

              {sentEntidad ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-[#EAF5EF] border border-[#176B50] rounded-xl p-6 text-[#1D3532] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#176B50] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="font-bold text-base sm:text-lg leading-relaxed">
                    Hemos recibido tu solicitud correctamente. La Secretaría de NutriDiversa te
                    responderá en un máximo de cinco días laborables al correo indicado.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!checkEntidad) return;
                    setSentEntidad(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="id_entidad_nombre"
                        className="block text-sm font-bold text-[#20282E] mb-1.5"
                      >
                        Nombre de la entidad o profesional <span className="text-[#D96820]">*</span>
                      </label>
                      <input
                        id="id_entidad_nombre"
                        name="entidad_nombre"
                        type="text"
                        required
                        value={entidadNombre}
                        onChange={(e) => setEntidadNombre(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="id_persona_contacto"
                        className="block text-sm font-bold text-[#20282E] mb-1.5"
                      >
                        Persona de contacto <span className="text-[#D96820]">*</span>
                      </label>
                      <input
                        id="id_persona_contacto"
                        name="persona_contacto"
                        type="text"
                        required
                        value={personaContacto}
                        onChange={(e) => setPersonaContacto(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="id_email_entidad"
                        className="block text-sm font-bold text-[#20282E] mb-1.5"
                      >
                        Correo electrónico <span className="text-[#D96820]">*</span>
                      </label>
                      <input
                        id="id_email_entidad"
                        name="email_entidad"
                        type="email"
                        required
                        value={emailEntidad}
                        onChange={(e) => setEmailEntidad(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="id_modalidad_colaboracion"
                        className="block text-sm font-bold text-[#20282E] mb-1.5"
                      >
                        Modalidad de colaboración propuesta{' '}
                        <span className="text-[#D96820]">*</span>
                      </label>
                      <select
                        id="id_modalidad_colaboracion"
                        name="modalidad_colaboracion"
                        required
                        value={modalidadColaboracion}
                        onChange={(e) => setModalidadColaboracion(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                      >
                        <option value="Facilitar contacto y difusión entre familias">
                          Facilitar contacto y difusión entre familias
                        </option>
                        <option value="Ceder un espacio para actividades educativas">
                          Ceder un espacio para actividades educativas
                        </option>
                        <option value="Revisar accesibilidad cognitiva o documental">
                          Revisar accesibilidad cognitiva o documental
                        </option>
                        <option value="Aportar conocimiento profesional o científico (voluntariado técnico)">
                          Aportar conocimiento profesional o científico (voluntariado técnico)
                        </option>
                        <option value="Patrocinio o colaboración de Responsabilidad Social (RSC)">
                          Patrocinio o colaboración de Responsabilidad Social (RSC)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="id_mensaje_entidad"
                      className="block text-sm font-bold text-[#20282E] mb-1.5"
                    >
                      Breve descripción de la propuesta <span className="text-[#D96820]">*</span>
                    </label>
                    <textarea
                      id="id_mensaje_entidad"
                      name="mensaje_entidad"
                      rows={4}
                      required
                      value={mensajeEntidad}
                      onChange={(e) => setMensajeEntidad(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                    />
                  </div>

                  {/* Aviso importante de privacidad antes del botón de envío */}
                  <div className="bg-[#F7F3EB] border border-[#E6E2D8] border-l-4 border-l-[#D96820] rounded-xl p-4 text-sm text-[#20282E] leading-relaxed">
                    <strong>Aviso importante de privacidad:</strong> Por favor,{' '}
                    <strong>
                      no incluyas diagnósticos médicos, informes clínicos ni datos de salud
                    </strong>{' '}
                    tuyos ni de menores en este formulario. NutriDiversa no presta asistencia
                    clínica y este canal es exclusivamente informativo.
                  </div>

                  {/* Casilla obligatoria SIEMPRE DESMARCADA POR DEFECTO */}
                  <div className="flex items-start gap-3">
                    <input
                      id="id_check_entidad"
                      name="acepta_privacidad_entidad"
                      type="checkbox"
                      required
                      checked={checkEntidad}
                      onChange={(e) => setCheckEntidad(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-[#E6E2D8] text-[#176B50] shrink-0"
                    />
                    <label
                      htmlFor="id_check_entidad"
                      className="text-sm text-[#20282E] leading-relaxed cursor-pointer"
                    >
                      He leído y acepto la{' '}
                      <a
                        href="/privacidad"
                        onClick={handlePrivacyLink}
                        className="underline font-bold text-[#176B50] hover:text-[#1D3532]"
                      >
                        Política de Privacidad
                      </a>{' '}
                      y consiento el tratamiento de mis datos para gestionar esta propuesta de
                      colaboración.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[48px] px-7 py-3 rounded-xl bg-[#176B50] hover:bg-[#1D3532] text-white font-bold text-base transition-colors"
                  >
                    Proponer una colaboración
                  </button>
                </form>
              )}
            </div>
          )}

          {/* FORMULARIO 3: SOLICITUD DE ALTA COMO PERSONA ASOCIADA O VOLUNTARIADO */}
          {contactProfile === 'socio' && (
            <div
              id="panel-socio"
              role="tabpanel"
              aria-labelledby="tab-socio"
              className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-10 shadow-2xs space-y-6"
            >
              <div className="space-y-2 border-b border-[#E6E2D8] pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D96820]">
                  FORMULARIO 3 · ALTA ASOCIATIVA O VOLUNTARIADO
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D3532]">
                  Solicitud de alta como Persona Asociada o Voluntariado
                </h2>
                <p className="text-base text-[#5A6670]">
                  Inicia el trámite estatutario de admisión como persona asociada o de incorporación
                  al voluntariado conforme a la Ley 45/2015.
                </p>
              </div>

              {sentSocio ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-[#EAF5EF] border border-[#176B50] rounded-xl p-6 text-[#1D3532] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#176B50] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="font-bold text-base sm:text-lg leading-relaxed">
                    Hemos recibido tu solicitud correctamente. La Secretaría de NutriDiversa te
                    responderá en un máximo de cinco días laborables al correo indicado.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!checkSocio) return;
                    setSentSocio(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="id_nombre_socio"
                        className="block text-sm font-bold text-[#20282E] mb-1.5"
                      >
                        Nombre y apellidos <span className="text-[#D96820]">*</span>
                      </label>
                      <input
                        id="id_nombre_socio"
                        name="nombre_socio"
                        type="text"
                        required
                        value={nombreSocio}
                        onChange={(e) => setNombreSocio(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="id_dni_socio"
                        className="block text-sm font-bold text-[#20282E] mb-1.5"
                      >
                        DNI / NIE <span className="text-[#D96820]">*</span>
                      </label>
                      <input
                        id="id_dni_socio"
                        name="dni_socio"
                        type="text"
                        required
                        value={dniSocio}
                        onChange={(e) => setDniSocio(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="id_email_socio"
                        className="block text-sm font-bold text-[#20282E] mb-1.5"
                      >
                        Correo electrónico <span className="text-[#D96820]">*</span>
                      </label>
                      <input
                        id="id_email_socio"
                        name="email_socio"
                        type="email"
                        required
                        value={emailSocio}
                        onChange={(e) => setEmailSocio(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="id_telefono_socio"
                        className="block text-sm font-bold text-[#20282E] mb-1.5"
                      >
                        Teléfono de contacto (opcional)
                      </label>
                      <input
                        id="id_telefono_socio"
                        name="telefono_socio"
                        type="tel"
                        value={telefonoSocio}
                        onChange={(e) => setTelefonoSocio(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="id_tipo_solicitud"
                      className="block text-sm font-bold text-[#20282E] mb-1.5"
                    >
                      Tipo de solicitud <span className="text-[#D96820]">*</span>
                    </label>
                    <select
                      id="id_tipo_solicitud"
                      name="tipo_solicitud"
                      required
                      value={tipoSolicitud}
                      onChange={(e) => setTipoSolicitud(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FFFDF8] text-[#20282E]"
                    >
                      <option value="Alta como Persona Asociada (Cuota promocional fundacional 2026: 10 €/año; a partir del 01/01/2027: 30 €/año)">
                        Alta como Persona Asociada (Cuota promocional fundacional 2026: 10 €/año; a
                        partir del 01/01/2027: 30 €/año)
                      </option>
                      <option value="Inscripción como Persona Voluntaria (sujeta a firma de acuerdo de incorporación según Ley 45/2015)">
                        Inscripción como Persona Voluntaria (sujeta a firma de acuerdo de
                        incorporación según Ley 45/2015)
                      </option>
                    </select>
                  </div>

                  {/* Aviso importante de privacidad antes del botón de envío */}
                  <div className="bg-[#F7F3EB] border border-[#E6E2D8] border-l-4 border-l-[#D96820] rounded-xl p-4 text-sm text-[#20282E] leading-relaxed">
                    <strong>Aviso importante de privacidad:</strong> Por favor,{' '}
                    <strong>
                      no incluyas diagnósticos médicos, informes clínicos ni datos de salud
                    </strong>{' '}
                    tuyos ni de menores en este formulario. NutriDiversa no presta asistencia
                    clínica y este canal es exclusivamente informativo.
                  </div>

                  {/* Casilla obligatoria SIEMPRE DESMARCADA POR DEFECTO */}
                  <div className="flex items-start gap-3">
                    <input
                      id="id_check_socio"
                      name="acepta_privacidad_socio"
                      type="checkbox"
                      required
                      checked={checkSocio}
                      onChange={(e) => setCheckSocio(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-[#E6E2D8] text-[#176B50] shrink-0"
                    />
                    <label
                      htmlFor="id_check_socio"
                      className="text-sm text-[#20282E] leading-relaxed cursor-pointer"
                    >
                      He leído y acepto la{' '}
                      <a
                        href="/privacidad"
                        onClick={handlePrivacyLink}
                        className="underline font-bold text-[#176B50] hover:text-[#1D3532]"
                      >
                        Política de Privacidad
                      </a>{' '}
                      y solicito iniciar el trámite de admisión conforme a los Estatutos de
                      NutriDiversa.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[48px] px-7 py-3 rounded-xl bg-[#176B50] hover:bg-[#1D3532] text-white font-bold text-base transition-colors"
                  >
                    Enviar solicitud de inscripción
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Primera Capa Informativa de Protección de Datos (Visible justo debajo de los 3 formularios) */}
          <div className="bg-white rounded-2xl border border-[#E6E2D8] overflow-hidden shadow-2xs">
            <div className="bg-[#F7F3EB] px-6 py-4 border-b border-[#E6E2D8]">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1D3532]">
                Información Básica sobre Protección de Datos (Art. 13 RGPD)
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead className="sr-only">
                  <tr>
                    <th scope="col">Epígrafe</th>
                    <th scope="col">Información Básica sobre Protección de Datos (Art. 13 RGPD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E2D8]">
                  <tr>
                    <th
                      scope="row"
                      className="py-4 px-6 font-bold text-[#1D3532] bg-[#FFFDF8] w-full sm:w-48 align-top block sm:table-cell"
                    >
                      Responsable
                    </th>
                    <td className="py-4 px-6 text-[#20282E] block sm:table-cell">
                      Asociación de Nutrición en la Discapacidad (NutriDiversa) · NIF: G22670707 ·{' '}
                      <a
                        href="mailto:info@nutridiversa.org"
                        className="underline font-bold text-[#176B50]"
                      >
                        info@nutridiversa.org
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="py-4 px-6 font-bold text-[#1D3532] bg-[#FFFDF8] align-top block sm:table-cell"
                    >
                      Finalidad
                    </th>
                    <td className="py-4 px-6 text-[#20282E] block sm:table-cell">
                      Atender tu solicitud de información sobre el proyecto piloto, gestionar
                      propuestas de colaboración institucional o tramitar tu solicitud de admisión
                      como persona asociada o voluntaria.{' '}
                      <strong>No se recogen ni tratan datos de salud.</strong>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="py-4 px-6 font-bold text-[#1D3532] bg-[#FFFDF8] align-top block sm:table-cell"
                    >
                      Legitimación
                    </th>
                    <td className="py-4 px-6 text-[#20282E] block sm:table-cell">
                      Consentimiento de la persona interesada (art. 6.1.a RGPD) al marcar la casilla
                      correspondiente y, en el caso de solicitud de alta asociativa o voluntariado,
                      aplicación de medidas precontractuales/estatutarias (art. 6.1.b RGPD).
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="py-4 px-6 font-bold text-[#1D3532] bg-[#FFFDF8] align-top block sm:table-cell"
                    >
                      Conservación
                    </th>
                    <td className="py-4 px-6 text-[#20282E] block sm:table-cell">
                      Mientras se mantenga la relación informativa o asociativa y hasta que
                      solicites la supresión o revoques tu consentimiento, más los plazos legales de
                      prescripción aplicables.
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="py-4 px-6 font-bold text-[#1D3532] bg-[#FFFDF8] align-top block sm:table-cell"
                    >
                      Destinatarios
                    </th>
                    <td className="py-4 px-6 text-[#20282E] block sm:table-cell">
                      No se cederán datos a terceros, salvo obligación legal. Se utilizan
                      proveedores tecnológicos de alojamiento web y correo electrónico que actúan
                      como encargados del tratamiento bajo contrato conforme al art. 28 RGPD.
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="py-4 px-6 font-bold text-[#1D3532] bg-[#FFFDF8] align-top block sm:table-cell"
                    >
                      Derechos
                    </th>
                    <td className="py-4 px-6 text-[#20282E] block sm:table-cell">
                      Puedes retirar tu consentimiento en cualquier momento y ejercer tus derechos
                      de acceso, rectificación, supresión, oposición, limitación y portabilidad
                      escribiendo a{' '}
                      <a
                        href="mailto:info@nutridiversa.org"
                        className="underline font-bold text-[#176B50]"
                      >
                        info@nutridiversa.org
                      </a>
                      , así como presentar una reclamación ante la Agencia Española de Protección de
                      Datos (
                      <a
                        href="https://www.aepd.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-[#176B50]"
                      >
                        www.aepd.es
                      </a>
                      ). Puedes consultar la información completa en nuestra{' '}
                      <a
                        href="/privacidad"
                        onClick={handlePrivacyLink}
                        className="underline font-bold text-[#176B50]"
                      >
                        Política de Privacidad
                      </a>
                      .
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
