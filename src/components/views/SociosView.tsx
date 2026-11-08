import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCMS } from '../../context/CMSContext';
import { useAccessibility } from '../../context/AccessibilityContext';
import { MEMBERSHIP_CATEGORIES, DOSSIER_PDF_URL, INSTITUTIONAL_DATA } from '../../data/associationData';
import {
  Download,
  Unlock,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Tag,
  Video,
  FileCheck,
  UserCheck,
  Sparkles,
  ArrowRight,
  LogIn,
} from 'lucide-react';

export const SociosView: React.FC = () => {
  const {
    currentUser,
    userProfile,
    signInWithGoogle,
    permissions,
    setSimulatedRole,
  } = useAuth();

  const { partnerResources, articles } = useCMS();
  const { navigateTo, announce } = useAccessibility();

  const [solicitudEnviada, setSolicitudEnviada] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    categoria: 'Socios/as de número u ordinarios/as',
    motivo: '',
    aceptaEstatutos: false,
  });

  const isMember = permissions.canAccessPartnerArea;
  const memberArticles = articles.filter((a) => a.visibility === 'members_only');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptaEstatutos) {
      setFormError('Debes aceptar los estatutos y la política de protección de datos.');
      announce('Error: Debes aceptar los estatutos.');
      return;
    }
    setFormError('');
    setSolicitudEnviada(true);
    announce('Solicitud de admisión como persona asociada enviada a la Junta Directiva.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* 1. Header Banner */}
      <section className="bg-emerald-950 text-white rounded-2xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="text-xs font-bold text-amber-300">
            Apartado 6.1 del Dossier Institucional · Asamblea General y Personas Asociadas
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Área de Personas Asociadas
          </h1>

          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Espacio de participación asociativa, consulta del Dossier Institucional, recursos de apoyo visual, seguimiento del Proyecto Piloto en Alicante y documentación de la Asamblea General.
          </p>

          {!isMember && (
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setSimulatedRole('socio')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-neutral-900 font-bold text-sm rounded-xl hover:bg-amber-400 transition-colors"
              >
                <Unlock className="w-4 h-4" />
                <span>Simular Acceso como Persona Asociada</span>
              </button>

              {!currentUser && (
                <button
                  onClick={signInWithGoogle}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Identificarme con Google</span>
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {isMember ? (
        <div className="space-y-10">
          {/* Member Card */}
          <div className="bg-white border-2 border-emerald-800/30 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-extrabold text-2xl">
                ND
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs text-emerald-900 font-bold">
                  <span>Persona Asociada Activa</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-neutral-500 font-mono">Alicante, 2026</span>
                </div>
                <h2 className="text-xl font-extrabold text-neutral-900 mt-1">
                  {currentUser?.displayName || userProfile?.displayName || 'César Hernández Moreno'}
                </h2>
                <p className="text-xs text-neutral-600">
                  {currentUser?.email || INSTITUTIONAL_DATA.contact.email}
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-950 space-y-1 max-w-sm">
              <div className="font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Participación en la Asamblea General</span>
              </div>
              <p className="text-[11px] text-neutral-600">
                Conforme a los estatutos, los socios/as de número participan con voz y voto en la Asamblea General, órgano supremo de gobierno.
              </p>
            </div>
          </div>

          {/* Resources Catalog */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-emerald-700" />
                <span>Documentación Oficial y Recursos de la Asociación</span>
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Materiales institucionales, fichas metodológicas del proyecto piloto y apoyos visuales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerResources.map((res) => {
                const getIcon = () => {
                  switch (res.category) {
                    case 'Descuento o Convenio':
                      return <Tag className="w-5 h-5 text-amber-600" />;
                    case 'Webinar o Grabación':
                      return <Video className="w-5 h-5 text-purple-600" />;
                    case 'Documento Oficial':
                      return <FileCheck className="w-5 h-5 text-blue-600" />;
                    default:
                      return <BookOpen className="w-5 h-5 text-emerald-700" />;
                  }
                };

                const isInternalRoute = res.fileOrLinkUrl.startsWith('/');
                const isPdf = res.fileOrLinkUrl.endsWith('.pdf');

                return (
                  <div
                    key={res.id}
                    className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-emerald-700 transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-neutral-700">
                        <span className="inline-flex items-center gap-1.5">
                          {getIcon()}
                          <span>{res.category}</span>
                        </span>
                        <span className="text-emerald-800">NutriDiversa 2026</span>
                      </div>

                      <h3 className="text-lg font-bold text-neutral-900 leading-snug">
                        {res.title}
                      </h3>

                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {res.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs text-neutral-500 font-mono">
                        Acceso para personas asociadas
                      </span>
                      {isPdf ? (
                        <a
                          href={DOSSIER_PDF_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          download="Dossier_Institucional_NutriDiversa_2026.pdf"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-800 text-white font-bold text-xs rounded-lg hover:bg-emerald-900 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Descargar PDF</span>
                        </a>
                      ) : isInternalRoute ? (
                        <button
                          onClick={() => navigateTo(res.fileOrLinkUrl as any)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-800 text-white font-bold text-xs rounded-lg hover:bg-emerald-900 transition-colors"
                        >
                          <span>Consultar Sección</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <a
                          href={res.fileOrLinkUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-800 text-white font-bold text-xs rounded-lg hover:bg-emerald-900 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Abrir Recurso</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {memberArticles.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-neutral-200">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                  <span>Publicaciones para Personas Asociadas</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {memberArticles.map((art) => (
                  <div
                    key={art.id}
                    className="bg-white border border-amber-200 rounded-2xl p-6 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span className="font-bold text-amber-900">{art.category}</span>
                      <span>Por {art.authorName}</span>
                    </div>
                    <h3 className="text-base font-bold text-neutral-900">{art.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {art.excerpt || art.content.slice(0, 140)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* IF NOT MEMBER: Show the 4 Statutory Classes from Section 6.1 of the Dossier + Application Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-800 block">
                Apartado 6.1 del Dossier Institucional
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                Clases de personas asociadas en NutriDiversa
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Conforme a nuestros estatutos y al Dossier Institucional (pág. 12 y 13), NutriDiversa contempla cuatro clases de personas asociadas:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MEMBERSHIP_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="p-5 bg-white border border-[#D1E7DD] rounded-2xl shadow-2xs space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-emerald-950 text-sm">{cat.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{cat.description}</p>
                  </div>
                  <p className="text-[11px] font-semibold text-emerald-800 pt-2 border-t border-neutral-100">
                    {cat.votingRights}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
              <div className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-700" />
                <span>¿Ya eres miembro de la Junta Directiva o Persona Asociada?</span>
              </div>
              <p className="text-xs text-emerald-800">
                Inicia sesión con tu cuenta de Google o pulsa el botón de vista previa para acceder al portal de personas asociadas.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => setSimulatedRole('socio')}
                  className="px-4 py-2 bg-emerald-800 text-white font-bold text-xs rounded-lg hover:bg-emerald-900 transition-colors"
                >
                  Entrar como Persona Asociada (Vista Previa)
                </button>
                <button
                  onClick={() => navigateTo('/admin')}
                  className="px-4 py-2 bg-white text-emerald-900 font-bold text-xs rounded-lg border border-emerald-300 hover:bg-neutral-50 transition-colors"
                >
                  Ir al Panel CMS
                </button>
              </div>
            </div>
          </div>

          {/* Membership application form */}
          <div className="lg:col-span-5 bg-white border border-[#D1E7DD] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-800 block">
                Solicitud por escrito a la Junta Directiva
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">
                Formulario de Solicitud de Asociación
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Las personas y entidades interesadas en asociarse podrán presentar su solicitud a la Junta Directiva de acuerdo con los requisitos establecidos en los estatutos.
              </p>
            </div>

            {solicitudEnviada ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-emerald-950 text-base">¡Solicitud Enviada a la Junta Directiva!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Muchas gracias por tu interés, {formData.nombre}. La Secretaría de NutriDiversa responderá a tu solicitud desde <strong>{INSTITUTIONAL_DATA.contact.email}</strong>.
                </p>
                <button
                  onClick={() => setSimulatedRole('socio')}
                  className="mt-2 px-4 py-2 bg-emerald-800 text-white font-bold text-xs rounded-lg"
                >
                  Acceder Ahora al Portal de Personas Asociadas
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs" noValidate>
                {formError && (
                  <div className="p-3 bg-rose-50 border border-rose-500 text-rose-900 font-bold rounded">
                    {formError}
                  </div>
                )}

                <div>
                  <label htmlFor="soc-nombre" className="font-bold text-neutral-800 block mb-1">
                    Nombre y apellidos (o entidad): *
                  </label>
                  <input
                    id="soc-nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:border-emerald-700"
                    placeholder="Tu nombre y apellidos"
                  />
                </div>

                <div>
                  <label htmlFor="soc-email" className="font-bold text-neutral-800 block mb-1">
                    Correo electrónico: *
                  </label>
                  <input
                    id="soc-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:border-emerald-700"
                    placeholder="tuemail@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="soc-cat" className="font-bold text-neutral-800 block mb-1">
                    Clase de persona asociada solicitada (Apartado 6.1):
                  </label>
                  <select
                    id="soc-cat"
                    value={formData.categoria}
                    onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg bg-white"
                  >
                    <option value="Socios/as de número u ordinarios/as">
                      Socios/as de número u ordinarios/as (con voz y voto en Asamblea General)
                    </option>
                    <option value="Socios/as colaboradores/as o adheridos/as">
                      Socios/as colaboradores/as o adheridos/as (apoyo económico, profesional o voluntario)
                    </option>
                  </select>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.aceptaEstatutos}
                      onChange={(e) => setFormData({ ...formData, aceptaEstatutos: e.target.checked })}
                      className="mt-0.5 rounded text-emerald-700 focus:ring-emerald-700"
                    />
                    <span className="text-[11px] text-neutral-600 leading-tight">
                      Acepto los Estatutos de la Asociación NutriDiversa y el tratamiento de mis datos conforme al RGPD para gestionar mi solicitud ante la Junta Directiva.
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Presentar Solicitud a la Junta Directiva</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
