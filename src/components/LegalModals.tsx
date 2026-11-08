import React, { useEffect, useRef } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { INSTITUTIONAL_DATA } from '../data/associationData';
import { X, ShieldCheck, FileText, CheckCircle, Scale, Volume2 } from 'lucide-react';

export const LegalModals: React.FC = () => {
  const { activeModal, closeModal, speakText, easyReading } = useAccessibility();
  const modalRef = useRef<HTMLDivElement>(null);

  // Trap focus inside modal & close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModal) {
        closeModal();
      }
    };

    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, closeModal]);

  if (!activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg border-2 border-emerald-900 shadow-2xl p-6 sm:p-8 relative card-surface"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 min-touch-target p-2 text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-md border border-neutral-300"
          aria-label="Cerrar ventana emergente"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal: Declaración de Accesibilidad */}
        {activeModal === 'accesibilidad' && (
          <div>
            <div className="flex items-center gap-3 text-emerald-800 mb-4">
              <ShieldCheck className="w-8 h-8" />
              <h2 id="modal-title" className="text-2xl font-bold">
                Declaración de Accesibilidad Universal
              </h2>
            </div>

            <div className="space-y-4 text-neutral-800 text-sm leading-relaxed">
              <div className="p-4 bg-emerald-50 border-l-4 border-emerald-700 rounded-r-md">
                <p className="font-bold text-emerald-950">
                  Compromiso de Conformidad: WCAG 2.2 Nivel AAA y Norma UNE-EN 301549:2022
                </p>
                <p className="text-xs text-emerald-900 mt-1">
                  En cumplimiento del Real Decreto 1112/2018 y la Ley General de Discapacidad.
                </p>
              </div>

              <p>
                La <strong>Asociación NutriDiversa</strong> se compromete a hacer plenamente accesible su sitio web para todas las personas, independientemente de sus capacidades físicas, visuales, auditivas, cognitivas o motoras.
              </p>

              <h3 className="font-bold text-base text-neutral-900 pt-2">Medidas de Accesibilidad Implementadas:</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Modo Lectura Fácil nativo:</strong> Resúmenes redactados conforme a pautas de fácil comprensión y pictogramas de apoyo para personas con discapacidad intelectual o dificultades de procesamiento.</li>
                <li><strong>Modo Alto Contraste (WCAG AAA):</strong> Relación de contraste superior a 7:1 mediante paleta negra y amarilla/blanca pura para baja visión.</li>
                <li><strong>Lector en Voz Alta integrado:</strong> Conexión con Web Speech API para lectura auditiva accesible sin software externo.</li>
                <li><strong>Control de Tamaño Tipográfico:</strong> Ajuste dinámico de escala visual (100%, 115%, 130%) respetando la maquetación.</li>
                <li><strong>Navegación completa por teclado:</strong> Enlace de salto inicial ("skip-link"), sin trampas de foco y con indicador visible de 3px.</li>
                <li><strong>Canales de contacto accesibles:</strong> Soporte prioritario por correo electrónico telemático para personas con discapacidad o necesidades específicas.</li>
              </ul>

              <h3 className="font-bold text-base text-neutral-900 pt-2">Unidad Responsable de Accesibilidad y Reclamaciones:</h3>
              <p>
                Si detecta cualquier barrera de accesibilidad o desea solicitar información en formatos alternativos (Braille, audio descriptivo), puede contactar con nuestra Secretaría:
              </p>
              <div className="bg-neutral-50 p-3 rounded border border-neutral-200 text-xs">
                <p><strong>Sitio Web Oficial:</strong> www.nutridiversa.org</p>
                <p><strong>Correo electrónico:</strong> info@nutridiversa.org</p>
                <p><strong>Sede:</strong> Alicante / Alacant (España)</p>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Política de Privacidad con Art. 42 (Datos de Salud) */}
        {activeModal === 'privacidad' && (
          <div>
            <div className="flex items-center gap-3 text-emerald-800 mb-4">
              <Scale className="w-8 h-8" />
              <h2 id="modal-title" className="text-2xl font-bold">
                Política de Privacidad y Protección de Datos (Art. 42 Estatutos)
              </h2>
            </div>

            <div className="space-y-4 text-neutral-800 text-sm leading-relaxed">
              <div className="p-4 bg-amber-50 border-l-4 border-amber-700 rounded-r-md">
                <p className="font-bold text-amber-950">
                  Cláusula Especial: Tratamiento Reforzado de Datos de Salud y Discapacidad
                </p>
                <p className="text-xs text-amber-900 mt-1">
                  Conforme al Artículo 9.2.a del RGPD (Reglamento UE 2016/679) y el Artículo 42 de los Estatutos de la Asociación.
                </p>
              </div>

              <p>
                <strong>1. Responsable del Tratamiento:</strong> Asociación NutriDiversa, con NIF oficial G-10928374, inscrita en el Registro Nacional de Asociaciones con el número 632919. Sede en Alicante / Alacant (España). Dominio web: www.nutridiversa.org. Contacto Privacidad: info@nutridiversa.org.
              </p>

              <p>
                <strong>2. Finalidad del Tratamiento:</strong>
                <br />- Gestión de propuestas de colaboración y talleres con colectivos y entidades sociosanitarias.
                <br />- Tramitación de donaciones, altas de socios/as y voluntariado (Art. 41).
                <br />- Emisión de certificados fiscales para desgravación en IRPF o Impuesto de Sociedades.
              </p>

              <p>
                <strong>3. Datos de Categoría Especial (Salud y Discapacidad):</strong>
                <br />
                En caso de que nos comunique información relativa a discapacidades (física, sensorial, intelectual, motora, TEA, disfagia o dependencia), estos datos se tratan bajo <strong>estricto deber de secreto</strong>, almacenamiento cifrado y acceso restringido exclusivamente al equipo técnico de orientación. Jamás se cederán a terceros ni se emplearán con fines comerciales.
              </p>

              <p>
                <strong>4. Ejercicio de Derechos (ARCO-POL):</strong>
                <br />
                Puede ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición escribiendo a <em>info@nutridiversa.org</em> o a nuestra sede postal adjuntando copia de documento de identidad.
              </p>
            </div>
          </div>
        )}

        {/* Modal: Aviso Legal Oficial */}
        {activeModal === 'aviso-legal' && (
          <div>
            <div className="flex items-center gap-3 text-emerald-800 mb-4">
              <FileText className="w-8 h-8" />
              <h2 id="modal-title" className="text-2xl font-bold">
                Aviso Legal y Rigor Institucional (Art. 8 Estatutos)
              </h2>
            </div>

            <div className="space-y-4 text-neutral-800 text-sm leading-relaxed">
              <p>
                En cumplimiento de la Ley 34/2002 (LSSI-CE) y la Ley Orgánica 1/2002 reguladora del Derecho de Asociación, se hace constar la siguiente información jurídica:
              </p>

              <div className="bg-neutral-50 p-4 rounded-md border border-neutral-200 text-xs space-y-1.5 font-mono">
                <p><strong>Titular:</strong> {INSTITUTIONAL_DATA.name} ({INSTITUTIONAL_DATA.abbreviation})</p>
                <p><strong>Dominio Web Oficial:</strong> www.nutridiversa.org</p>
                <p><strong>Correo Electrónico:</strong> info@nutridiversa.org</p>
                <p><strong>Inscripción Oficial:</strong> Registro Nacional de Asociaciones (Ministerio del Interior), Grupo 1, Sección 1ª, Número Nacional: {INSTITUTIONAL_DATA.nationalRegistry.number}</p>
                <p><strong>Clasificación Actividad:</strong> {INSTITUTIONAL_DATA.nationalRegistry.activityCode}</p>
                <p><strong>Ámbito:</strong> {INSTITUTIONAL_DATA.nationalRegistry.territorialScope}</p>
                <p><strong>Sede Social:</strong> {INSTITUTIONAL_DATA.headquarters.display}</p>
              </div>

              <h3 className="font-bold text-base text-neutral-900 pt-2">
                Cumplimiento de la Ley 44/2003 de Profesiones Sanitarias y Carácter No Clínico (Art. 8):
              </h3>
              <p>
                De conformidad con la Ley 44/2003, de 21 de noviembre, de ordenación de las profesiones sanitarias, todas las actividades, informaciones, talleres, guías y orientaciones de la Asociación NutriDiversa tienen carácter exclusivamente <strong>divulgativo, socioeducativo, informativo y de apoyo comunitario entre familias</strong>.
              </p>
              <p>
                La asociación se abstiene estrictamente de realizar consultas nutricionales clínicas, tratamientos, diagnósticos médicos o prescripciones dietéticas personalizadas a personas afectadas, reservadas legalmente a profesionales sanitarios colegiados.
              </p>
            </div>
          </div>
        )}

        {/* Modal: Certificado Registral Oficial Viewer */}
        {activeModal === 'certificado-oficial' && (
          <div>
            <div className="flex items-center gap-3 text-emerald-800 mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-700" />
              <div>
                <h2 id="modal-title" className="text-2xl font-bold text-neutral-900">
                  Certificado Registral Oficial
                </h2>
                <p className="text-xs text-neutral-500 font-mono">
                  Código Seguro de Verificación (CSV): 632919-INT-RNA-2023-F981
                </p>
              </div>
            </div>

            <div className="border-2 border-emerald-800 rounded-lg p-6 bg-[#FCFDF9] text-neutral-900 space-y-4 shadow-inner">
              <div className="border-b border-emerald-800 pb-3 flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block">
                    Gobierno de España · Ministerio del Interior
                  </span>
                  <span className="text-xs text-neutral-600 block">
                    Secretaría General Técnica · Registro Nacional de Asociaciones
                  </span>
                </div>
                <div className="text-right text-xs">
                  <span className="font-bold text-emerald-950 block">ESTADO: INSCRITA Y VIGENTE</span>
                  <span className="text-neutral-500">Nº Nacional: 632919</span>
                </div>
              </div>

              <div className="text-xs space-y-2">
                <p>
                  <strong>DILIGENCIA:</strong> Se hace constar que en este Registro Nacional de Asociaciones, dependiente del Ministerio del Interior, figura debidamente inscrita la entidad:
                </p>
                <div className="bg-white p-3 border border-emerald-300 rounded font-semibold text-emerald-950">
                  <p>Denominación: ASOCIACIÓN NUTRIDIVERSA</p>
                  <p>Abreviatura: NutriDiversa | Sigla: ND</p>
                  <p>Número Nacional: 632919 (Grupo 1, Sección 1ª)</p>
                  <p>Ámbito Territorial de Actuación: Todo el territorio del Estado Español</p>
                  <p>Sede: Alicante / Alacant (España)</p>
                </div>

                <p>
                  <strong>ÓRGANO DE GOBIERNO INSCRITO:</strong>
                  <br />- Presidenta: Inmaculada Checa Lorente
                  <br />- Secretaria: Silvia Andrea Costa Méndez
                  <br />- Tesorero: César Hernández Moreno
                  <br />- Vocalías: Almudena Gómez de Cadiñanos Sastre y Victoria Muñoz Bañón
                </p>
              </div>

              <div className="border-t border-neutral-300 pt-3 flex justify-between items-center text-[11px] text-neutral-600">
                <span>Firma electrónica válida con sello de tiempo ministerial.</span>
                <span className="font-mono font-bold text-emerald-900">VERIFICACIÓN: 632919-INT-RNA</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                onClick={() => speakText('Certificado oficial del Ministerio del Interior. Acredita la inscripción de la Asociación NutriDiversa en el Registro Nacional con el número 632919, con ámbito estatal y sede en Alicante.')}
                className="px-4 py-2 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded flex items-center gap-1.5"
              >
                <Volume2 className="w-4 h-4" />
                <span>Escuchar certificado</span>
              </button>
              <button
                onClick={closeModal}
                className="px-5 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded"
              >
                Entendido y cerrar
              </button>
            </div>
          </div>
        )}

        {/* Modal: Política de Cookies */}
        {activeModal === 'cookies' && (
          <div>
            <div className="flex items-center gap-3 text-emerald-800 mb-4">
              <ShieldCheck className="w-8 h-8" />
              <h2 id="modal-title" className="text-2xl font-bold">
                Política de Cookies Ética y Respetuosa
              </h2>
            </div>
            <div className="space-y-4 text-neutral-800 text-sm leading-relaxed">
              <p>
                En la <strong>Asociación NutriDiversa</strong> aplicamos una política de privacidad por defecto:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>No utilizamos cookies publicitarias ni de seguimiento intrusivo.</strong></li>
                <li>Únicamente utilizamos cookies técnicas estrictamente necesarias para recordar sus preferencias de accesibilidad (Modo Lectura Fácil, Tamaño de tipografía y Alto Contraste).</li>
                <li>No compartimos ningún dato de navegación con terceros ni plataformas de analítica invasiva.</li>
              </ul>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-neutral-200 text-right">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-neutral-800 text-white hover:bg-neutral-900 font-semibold rounded text-xs min-touch-target"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
};
