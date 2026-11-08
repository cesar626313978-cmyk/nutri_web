import React, { useState } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { INSTITUTIONAL_DATA } from '../../data/associationData';
import { 
  Mail, 
  MapPin, 
  Globe,
  Send, 
  CheckCircle2, 
  Building2, 
  FileCheck,
  AlertCircle
} from 'lucide-react';

export const ContactoView: React.FC = () => {
  const { easyReading, announce } = useAccessibility();

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('informacion-general');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam honeypot
  const [consentArt42, setConsentArt42] = useState(true);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (honeypot) {
      // Silently discard spam bot submissions
      setFormSent(true);
      return;
    }

    if (!name.trim() || !message.trim()) {
      setFormError('Por favor, complete su nombre y el mensaje de la consulta.');
      announce('Error: Debe rellenar el nombre y el mensaje.');
      return;
    }

    if (!email.trim()) {
      setFormError('Indique su correo electrónico de contacto.');
      announce('Error: Falta el correo electrónico.');
      return;
    }

    setFormError('');
    setFormSent(true);
    announce('Mensaje enviado correctamente. Le responderemos por correo electrónico en menos de 48 horas.');
  };

  return (
    <div className="space-y-16 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-bold">
          <span>Atención Multicanal y Canales Accesibles</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
          Estamos aquí para escucharte y colaborar
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed">
          {easyReading
            ? 'Puedes enviarnos un mensaje o escribirnos un correo electrónico. Te responderemos con amabilidad y rigor.'
            : 'Atención accesible adaptada a entidades, asociaciones, centros educativos y colectivos del tercer sector.'}
        </p>
      </section>

      {/* 2. Tarjetas de Contacto Oficial */}
      <section aria-labelledby="direct-contact-heading" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <h2 id="direct-contact-heading" className="sr-only">Canales de contacto oficial</h2>

        {/* Correo Electrónico Oficial */}
        <div className="bg-white rounded-2xl border-2 border-[#D1E7DD] p-6 card-surface flex flex-col justify-between space-y-4 shadow-2xs">
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
              <Mail className="w-6 h-6 text-emerald-700" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Correo Electrónico Oficial</span>
            <h3 className="text-lg font-bold text-neutral-900 break-all">{INSTITUTIONAL_DATA.contact.email}</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Canal oficial para colectivos, entidades, consultas de familias, propuestas de proyectos y voluntariado.
            </p>
          </div>
          <div>
            <a
              href={`mailto:${INSTITUTIONAL_DATA.contact.email}`}
              className="w-full min-touch-target py-3 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-300" />
              <span>Escribir a {INSTITUTIONAL_DATA.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Sede Social y Web en Alicante */}
        <div className="bg-white rounded-2xl border-2 border-[#D1E7DD] p-6 card-surface flex flex-col justify-between space-y-4 shadow-2xs">
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
              <Globe className="w-6 h-6 text-emerald-700" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Sitio Web y Sede Registrada</span>
            <h3 className="text-lg font-bold text-neutral-900">Alicante · Ámbito Estatal</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Plataforma web oficial:{' '}
              <a href="https://www.nutridiversa.org" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-bold hover:underline">
                www.nutridiversa.org
              </a>
            </p>
          </div>
          <div>
            <span className="inline-block text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
              Registro Nacional de Asociaciones: Nº 632919
            </span>
          </div>
        </div>
      </section>

      {/* 3. Formulario Accesible (Sin Captcha Inaccesible, con Honeypot y Validación en Vivo) */}
      <section aria-labelledby="form-contact-heading" className="bg-white border-2 border-[#D1E7DD] rounded-2xl p-6 sm:p-10 shadow-sm card-surface">
        <div className="max-w-2xl mx-auto">
          <div className="border-b border-neutral-200 pb-4 mb-6">
            <h2 id="form-contact-heading" className="text-2xl font-bold text-[#121212]">
              Formulario de Contacto Accesible
            </h2>
            <p className="text-xs text-neutral-600 mt-1">
              Sin captchas visuales que impidan el acceso a personas con ceguera o baja visión.
            </p>
          </div>

          {formSent ? (
            <div className="p-8 bg-emerald-50 border-2 border-emerald-600 rounded-xl text-center space-y-3" role="status" aria-live="polite">
              <div className="w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">¡Mensaje Enviado con Éxito!</h3>
              <p className="text-sm text-emerald-900">
                Hemos recibido tu consulta y nos pondremos en contacto contigo a través de tu canal preferido en menos de 48 horas laborables.
              </p>
              <button
                onClick={() => {
                  setFormSent(false);
                  setMessage('');
                }}
                className="mt-3 px-5 py-2 bg-emerald-800 text-white text-xs font-bold rounded-md"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div aria-live="polite" aria-atomic="true">
                {formError && (
                  <div className="p-3 bg-rose-50 border-l-4 border-rose-600 text-rose-900 text-xs font-bold rounded-r flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}
              </div>

              {/* Honeypot field (hidden from screen readers and visual users) */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="website-trap">No rellenar este campo si eres humano</label>
                <input
                  id="website-trap"
                  type="text"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="c-name" className="block text-sm font-bold text-neutral-900 mb-1">
                  Tu nombre y apellidos: *
                </label>
                <input
                  id="c-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Daniel Rubio Navarro"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm min-touch-target focus:border-emerald-700"
                />
              </div>

              <div>
                <label htmlFor="c-email" className="block text-sm font-bold text-neutral-900 mb-1">
                  Correo electrónico de contacto: *
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu-correo@ejemplo.com"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm min-touch-target focus:border-emerald-700"
                />
              </div>

              <div>
                <label htmlFor="c-subject" className="block text-sm font-bold text-neutral-900 mb-1">
                  Motivo de la consulta:
                </label>
                <select
                  id="c-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm bg-white min-touch-target focus:border-emerald-700"
                >
                  <option value="informacion-general">Información general sobre NutriDiversa</option>
                  <option value="orientacion-sio">Propuesta de colaboración o talleres para colectivos</option>
                  <option value="socios-donaciones">Alta de socios/as y donaciones</option>
                  <option value="alianza-empresa">Alianza de Responsabilidad Social Corporativa (RSC)</option>
                  <option value="voluntariado">Unirme a la Red de Voluntariado</option>
                </select>
              </div>

              <div>
                <label htmlFor="c-msg" className="block text-sm font-bold text-neutral-900 mb-1">
                  Tu mensaje o consulta: *
                </label>
                <textarea
                  id="c-msg"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:border-emerald-700"
                ></textarea>
              </div>

              <div className="flex items-start gap-2.5">
                <input
                  id="c-art42"
                  type="checkbox"
                  checked={consentArt42}
                  onChange={(e) => setConsentArt42(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-emerald-800 rounded"
                />
                <label htmlFor="c-art42" className="text-xs text-neutral-700">
                  He leído y acepto la <strong>Política de Privacidad</strong> y consiento el tratamiento de mis datos de contacto y salud de acuerdo con el <strong>Artículo 42 de los Estatutos</strong>.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg text-sm shadow-sm transition-colors flex items-center justify-center gap-2 min-touch-target"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
