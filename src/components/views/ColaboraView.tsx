import React, { useState } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import {
  INSTITUTIONAL_DATA,
  MEMBERSHIP_CATEGORIES,
  COLLABORATION_WAYS,
  DOSSIER_PDF_URL,
} from '../../data/associationData';
import { NutriDiversaLogo } from '../NutriDiversaLogo';
import {
  Heart,
  Award,
  CheckCircle2,
  Send,
  Users,
  ShieldCheck,
  Sparkles,
  FileDown,
  Mail,
} from 'lucide-react';

export const ColaboraView: React.FC = () => {
  const { easyReading, speakText, announce } = useAccessibility();

  // Contribution / Membership Form State
  const [frequency, setFrequency] = useState<'anual' | 'puntual'>('anual');
  const [memberClass, setMemberClass] = useState<string>('Socios/as de número u ordinarios/as');
  const [amount, setAmount] = useState<number>(10);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorFirstName, setDonorFirstName] = useState<string>('');
  const [donorLastName, setDonorLastName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [donationSuccess, setDonationSuccess] = useState<boolean>(false);
  const [donationError, setDonationError] = useState<string>('');

  // Corporate / Institutional Form State
  const [companyName, setCompanyName] = useState<string>('');
  const [contactPerson, setContactPerson] = useState<string>('');
  const [companyEmail, setCompanyEmail] = useState<string>('');
  const [companySubmitted, setCompanySubmitted] = useState<boolean>(false);

  // Volunteer & Professional Form State
  const [volName, setVolName] = useState<string>('');
  const [volEmail, setVolEmail] = useState<string>('');
  const [volArea, setVolArea] = useState<string>('voluntariado');
  const [volSubmitted, setVolSubmitted] = useState<boolean>(false);

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
    }
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorFirstName.trim() || !donorLastName.trim() || !donorEmail.trim()) {
      setDonationError('Por favor, completa todos los campos requeridos (nombre, apellidos y correo electrónico).');
      announce('Error: Faltan campos requeridos en el formulario.');
      return;
    }
    setDonationError('');
    setDonationSuccess(true);
    announce(`Solicitud recibida para ${frequency === 'anual' ? 'Asociarse' : 'Apoyo económico'} por ${amount} euros.`);
    speakText(`Muchas gracias por querer participar o colaborar con la Asociación NutriDiversa. Hemos recibido tu solicitud.`);
  };

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompanySubmitted(true);
    announce('Solicitud de colaboración de entidad o empresa recibida.');
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolSubmitted(true);
    announce('Solicitud de voluntariado o colaboración profesional registrada.');
  };

  return (
    <div className="space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. CABECERA: SECCIÓN 6 DEL DOSSIER */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <div className="flex justify-center mb-2">
          <NutriDiversaLogo variant="stacked" size="md" showSubtitle={true} />
        </div>
        <div className="text-xs font-bold text-emerald-800">
          Sección 6 del Dossier Institucional · Alicante, 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight" style={{ textWrap: 'balance' }}>
          6. Cómo participar o colaborar
        </h1>
        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
          {easyReading
            ? 'NutriDiversa está abierta a personas, familias, profesionales, asociaciones y empresas que quieran ayudar a conseguir una alimentación más inclusiva.'
            : 'NutriDiversa quiere ser una asociación abierta a la participación de personas, familias, profesionales, entidades e instituciones que compartan sus fines y quieran contribuir a su desarrollo.'}
        </p>
        <div className="pt-1 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${INSTITUTIONAL_DATA.contact.email}`}
            className="min-touch-target px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-emerald-300" />
            <span>Escribir a {INSTITUTIONAL_DATA.contact.email}</span>
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

      {/* 2. APARTADO 6.1 DEL DOSSIER: FORMAR PARTE DE LA ASOCIACIÓN (LAS 4 CLASES DE PERSONAS ASOCIADAS) */}
      <section aria-labelledby="membership-classes-heading" className="space-y-6">
        <div className="border-b border-neutral-200 pb-3">
          <span className="text-xs font-bold text-emerald-800 block">
            Apartado 6.1 del Dossier Institucional
          </span>
          <h2 id="membership-classes-heading" className="text-2xl sm:text-3xl font-bold text-[#121212]">
            6.1. Formar parte de la asociación
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            NutriDiversa contempla las siguientes clases de personas asociadas conforme a sus estatutos. Las personas y entidades interesadas en asociarse podrán presentar su solicitud por escrito a la Junta Directiva:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MEMBERSHIP_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-white rounded-xl border border-[#D1E7DD] card-surface flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-emerald-950">
                  — {cat.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-100 text-xs font-semibold text-emerald-800">
                {cat.votingRights}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FORMULARIO DE SOLICITUD DE ASOCIACIÓN O APOYO ECONÓMICO */}
      <section aria-labelledby="donation-heading" className="max-w-4xl mx-auto">
        <div className="bg-white border-2 border-[#D1E7DD] rounded-2xl p-6 sm:p-10 shadow-sm card-surface space-y-8">
          <div className="text-center space-y-2 border-b border-neutral-200 pb-6">
            <span className="text-xs font-bold text-emerald-800 block">
              Solicitud a la Junta Directiva · Fase Inicial de Desarrollo
            </span>
            <h2 id="donation-heading" className="text-2xl sm:text-3xl font-extrabold text-[#121212]">
              Solicitud para Asociarse o Realizar una Aportación
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Puedes presentar tu solicitud de alta como persona asociada (de número o colaboradora) o tu ofrecimiento de apoyo económico a la Junta Directiva a través de este formulario o escribiendo a <strong>{INSTITUTIONAL_DATA.contact.email}</strong>.
            </p>
          </div>

          {donationSuccess ? (
            <div
              className="p-8 bg-emerald-50 border border-emerald-600 rounded-2xl text-center space-y-4"
              role="status"
              aria-live="polite"
            >
              <div className="w-14 h-14 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">
                ¡Muchas gracias por tu interés, {donorFirstName}!
              </h3>
              <p className="text-sm text-emerald-900 max-w-lg mx-auto leading-relaxed">
                Hemos recibido tu solicitud para <strong>{frequency === 'anual' ? `Asociarte (${memberClass})` : 'realizar una Aportación de Apoyo'}</strong> por un importe orientativo de <strong>{amount} €</strong>.
              </p>
              <div className="p-4 bg-white rounded-xl border border-emerald-300 text-xs text-neutral-700 max-w-md mx-auto space-y-1 text-left">
                <p><strong>Solicitante:</strong> {donorFirstName} {donorLastName}</p>
                <p><strong>Correo de contacto:</strong> {donorEmail}</p>
                <p className="pt-1 text-[11px] text-emerald-800 font-medium">
                  ✓ La Junta Directiva responderá desde {INSTITUTIONAL_DATA.contact.email} conforme al procedimiento estatutario.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setDonationSuccess(false);
                    setDonorFirstName('');
                    setDonorLastName('');
                    setDonorEmail('');
                  }}
                  className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDonationSubmit} className="space-y-6" noValidate>
              {donationError && (
                <div className="p-3 bg-rose-50 border border-rose-500 text-rose-900 text-xs font-bold rounded">
                  {donationError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setFrequency('anual');
                    setAmount(10);
                    setCustomAmount('');
                  }}
                  className={`p-4 rounded-xl border-2 font-bold text-left flex items-center justify-between transition-all min-touch-target ${
                    frequency === 'anual'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-950'
                      : 'border-neutral-300 bg-white text-neutral-800 hover:border-emerald-600'
                  }`}
                  aria-pressed={frequency === 'anual'}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${frequency === 'anual' ? 'bg-emerald-700 text-white' : 'bg-neutral-100 text-neutral-700'}`}>
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold">Formar parte como Persona Asociada</span>
                      <span className="text-[11px] font-normal text-neutral-600 block">Solicitud de ingreso a la Junta Directiva</span>
                    </div>
                  </div>
                  {frequency === 'anual' && <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFrequency('puntual');
                    setAmount(20);
                    setCustomAmount('');
                  }}
                  className={`p-4 rounded-xl border-2 font-bold text-left flex items-center justify-between transition-all min-touch-target ${
                    frequency === 'puntual'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-950'
                      : 'border-neutral-300 bg-white text-neutral-800 hover:border-emerald-600'
                  }`}
                  aria-pressed={frequency === 'puntual'}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${frequency === 'puntual' ? 'bg-emerald-700 text-white' : 'bg-neutral-100 text-neutral-700'}`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold">Aportación Económica Puntual</span>
                      <span className="text-[11px] font-normal text-neutral-600 block">Apoyo a los proyectos y materiales accesibles</span>
                    </div>
                  </div>
                  {frequency === 'puntual' && <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />}
                </button>
              </div>

              {frequency === 'anual' && (
                <div className="space-y-3">
                  <div>
                    <label htmlFor="member-class-select" className="block text-sm font-bold text-neutral-900 mb-1.5">
                      Clase de persona asociada que solicitas (Apartado 6.1):
                    </label>
                    <select
                      id="member-class-select"
                      value={memberClass}
                      onChange={(e) => setMemberClass(e.target.value)}
                      className="w-full px-4 py-2.5 border-2 border-neutral-300 rounded-xl text-sm bg-white focus:border-emerald-700 font-semibold min-touch-target"
                    >
                      <option value="Socios/as de número u ordinarios/as">
                        Socios/as de número u ordinarios/as (plena participación, con voz y voto en la Asamblea General)
                      </option>
                      <option value="Socios/as colaboradores/as o adheridos/as">
                        Socios/as colaboradores/as o adheridos/as (apoyo económico, profesional o voluntario; con voz en Asamblea)
                      </option>
                    </select>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-950 space-y-1">
                    <div className="font-bold text-amber-900 flex items-center gap-1.5 text-sm">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Cuota Anual de Lanzamiento</span>
                    </div>
                    <p className="leading-relaxed">
                      Como promoción fundacional hasta el año <strong>2027</strong>, la cuota anual es de <strong>10 € / año</strong> (30 € / año a partir de 2027).
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label htmlFor="amount-select" className="block text-sm font-bold text-neutral-900 mb-1.5">
                    Importe ({frequency === 'anual' ? 'cuota anual' : 'aportación'}): *
                  </label>
                  <select
                    id="amount-select"
                    value={customAmount ? 'otra' : amount.toString()}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === 'otra') {
                        setCustomAmount('100');
                        setAmount(100);
                      } else {
                        setCustomAmount('');
                        setAmount(parseInt(val, 10));
                      }
                    }}
                    className="w-full px-4 py-2.5 border-2 border-neutral-300 rounded-xl text-base bg-white focus:border-emerald-700 font-semibold min-touch-target"
                  >
                    {frequency === 'anual' ? (
                      <>
                        <option value="10">10 € / año (Cuota de lanzamiento hasta 2027)</option>
                        <option value="20">20 € / año (Socio/a Colaborador/a)</option>
                        <option value="30">30 € / año (Cuota estándar a partir de 2027)</option>
                        <option value="50">50 € / año (Apoyo Ampliado)</option>
                        <option value="otra">Otra cantidad personalizada</option>
                      </>
                    ) : (
                      <>
                        <option value="10">10 €</option>
                        <option value="20">20 €</option>
                        <option value="30">30 €</option>
                        <option value="50">50 €</option>
                        <option value="otra">Otra cantidad personalizada</option>
                      </>
                    )}
                  </select>
                </div>

                {customAmount !== '' && (
                  <div>
                    <label htmlFor="custom-amount-input" className="block text-sm font-bold text-neutral-900 mb-1.5">
                      Indica la cantidad (€): *
                    </label>
                    <input
                      id="custom-amount-input"
                      type="number"
                      min="1"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Ej: 75"
                      className="w-full px-4 py-2.5 border-2 border-neutral-300 rounded-xl text-base focus:border-emerald-700 font-bold min-touch-target"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <h3 className="text-sm font-bold text-emerald-900">
                  Datos de la persona solicitante:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="donor-fname" className="block text-xs font-bold text-neutral-800 mb-1">
                      Nombre: *
                    </label>
                    <input
                      id="donor-fname"
                      type="text"
                      required
                      value={donorFirstName}
                      onChange={(e) => setDonorFirstName(e.target.value)}
                      placeholder="Ej: María Carmen"
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg text-sm focus:border-emerald-700 min-touch-target"
                    />
                  </div>

                  <div>
                    <label htmlFor="donor-lname" className="block text-xs font-bold text-neutral-800 mb-1">
                      Apellidos: *
                    </label>
                    <input
                      id="donor-lname"
                      type="text"
                      required
                      value={donorLastName}
                      onChange={(e) => setDonorLastName(e.target.value)}
                      placeholder="Ej: García López"
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg text-sm focus:border-emerald-700 min-touch-target"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="donor-email-input" className="block text-xs font-bold text-neutral-800 mb-1">
                    Correo electrónico de contacto: *
                  </label>
                  <input
                    id="donor-email-input"
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg text-sm focus:border-emerald-700 min-touch-target"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-base rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 min-touch-target"
                >
                  <Send className="w-5 h-5 text-emerald-300" />
                  <span>
                    Presentar Solicitud a la Junta Directiva ({amount} €{frequency === 'anual' ? ' / año' : ''})
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 4. APARTADOS 6.2 A 6.5 DEL DOSSIER: VOLUNTARIADO, COLABORACIÓN PROFESIONAL, ENTIDADES Y EMPRESAS */}
      <section aria-labelledby="other-ways-heading" className="space-y-8">
        <div className="border-b border-neutral-200 pb-3">
          <span className="text-xs font-bold text-emerald-800 block">
            Apartados 6.2 a 6.5 del Dossier Institucional
          </span>
          <h2 id="other-ways-heading" className="text-2xl sm:text-3xl font-bold text-[#121212]">
            Otras formas de participar y colaborar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COLLABORATION_WAYS.map((way) => (
            <div
              key={way.id}
              className="p-6 bg-white rounded-xl border border-[#D1E7DD] card-surface space-y-2"
            >
              <span className="text-xs font-mono font-bold text-emerald-800 tabular-nums">
                {way.number}
              </span>
              <h3 className="text-lg font-bold text-neutral-900">{way.title}</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {way.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nota oficial de la página 14 del Dossier */}
        <div className="p-5 bg-[#FAFBF9] border border-neutral-300 rounded-xl text-xs sm:text-sm text-neutral-700 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
          <p>
            <strong>Nota estatutaria (Dossier, pág. 14):</strong> La participación como voluntario, profesional o entidad colaboradora no implica por sí misma adquirir la condición de persona asociada. Para solicitar información sobre cómo participar o colaborar, puedes escribir a <a href={`mailto:${INSTITUTIONAL_DATA.contact.email}`} className="text-emerald-800 font-bold hover:underline">{INSTITUTIONAL_DATA.contact.email}</a>.
          </p>
        </div>
      </section>

      {/* 5. FORMULARIO PARA ENTIDADES, INSTITUCIONES Y EMPRESAS (6.4 y 6.5) */}
      <section className="bg-white border border-[#D1E7DD] rounded-2xl p-6 sm:p-8 card-surface space-y-4">
        <div>
          <h3 className="text-lg font-bold text-neutral-900">
            6.4 y 6.5. Propuesta de colaboración para Entidades, Instituciones y Empresas
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Para preparar el primer proyecto piloto en Alicante o desarrollar iniciativas conjuntas (contacto con familias, revisión de accesibilidad, cesión de espacios o apoyo material/técnico/económico):
          </p>
        </div>

        {companySubmitted ? (
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-400 text-xs sm:text-sm text-emerald-950 font-bold" role="status">
            ¡Gracias! Hemos recibido la propuesta de vuestra entidad/empresa y os responderemos desde {INSTITUTIONAL_DATA.contact.email}.
          </div>
        ) : (
          <form onSubmit={handleCompanySubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-sm">
            <input
              type="text"
              required
              placeholder="Entidad / Institución / Empresa"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="px-3 py-2.5 bg-white border border-neutral-300 rounded-lg min-touch-target"
            />
            <input
              type="text"
              required
              placeholder="Persona de contacto"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              className="px-3 py-2.5 bg-white border border-neutral-300 rounded-lg min-touch-target"
            />
            <input
              type="email"
              required
              placeholder="Correo electrónico"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              className="px-3 py-2.5 bg-white border border-neutral-300 rounded-lg min-touch-target"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg min-touch-target flex items-center justify-center gap-1.5"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Propuesta</span>
            </button>
          </form>
        )}
      </section>

      {/* 6. FORMULARIO PARA VOLUNTARIADO Y COLABORACIÓN PROFESIONAL (6.2 y 6.3) */}
      <section aria-labelledby="volunteer-heading" className="bg-[#FAFBF9] border border-neutral-300 rounded-2xl p-6 sm:p-8 card-surface space-y-4">
        <div className="flex items-center gap-3 text-neutral-900">
          <Users className="w-6 h-6 text-emerald-800" />
          <h2 id="volunteer-heading" className="text-lg sm:text-xl font-bold">
            6.2 y 6.3. Inscripción de Voluntariado y Colaboración Profesional
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-3xl">
          Si eres una persona voluntaria o un/a profesional de los ámbitos de la nutrición, la salud, la educación, la discapacidad o el ámbito social y quieres aportar conocimiento y experiencia a los proyectos de NutriDiversa:
        </p>

        {volSubmitted ? (
          <div className="p-4 bg-emerald-100 border border-emerald-400 rounded-lg text-emerald-950 font-bold text-sm" role="status">
            ¡Solicitud recibida! Nos pondremos en contacto contigo desde {INSTITUTIONAL_DATA.contact.email}.
          </div>
        ) : (
          <form onSubmit={handleVolunteerSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-sm">
            <input
              type="text"
              required
              placeholder="Tu nombre y apellidos"
              value={volName}
              onChange={(e) => setVolName(e.target.value)}
              className="px-3 py-2.5 bg-white border border-neutral-300 rounded-lg min-touch-target"
            />
            <input
              type="email"
              required
              placeholder="Tu correo electrónico"
              value={volEmail}
              onChange={(e) => setVolEmail(e.target.value)}
              className="px-3 py-2.5 bg-white border border-neutral-300 rounded-lg min-touch-target"
            />
            <select
              value={volArea}
              onChange={(e) => setVolArea(e.target.value)}
              className="px-3 py-2.5 bg-white border border-neutral-300 rounded-lg min-touch-target"
            >
              <option value="voluntariado">6.2. Voluntariado en actividades y apoyo</option>
              <option value="profesional-nutricion">6.3. Profesional de Nutrición / Salud</option>
              <option value="profesional-educacion">6.3. Profesional de Educación / Accesibilidad</option>
              <option value="profesional-social">6.3. Profesional de Discapacidad / Ámbito Social</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg min-touch-target flex items-center justify-center gap-1.5"
            >
              <Users className="w-4 h-4" />
              <span>Ofrecer Colaboración</span>
            </button>
          </form>
        )}
      </section>
    </div>
  );
};
