import {
  BoardMember,
  OfficialDocument,
  GuideArticle,
  UpcomingGuide,
  GuideResource,
  Article,
} from '../types';

export const INSTITUTIONAL_DATA = {
  name: 'Asociación de Nutrición en la Discapacidad (NutriDiversa)',
  shortName: 'NutriDiversa',
  fullBrandTitle: 'NutriDiversa — Asociación de Nutrición en la Discapacidad',
  subtitle: '— Asociación de Nutrición en la Discapacidad —',
  abbreviation: 'NutriDiversa',
  acronym: 'ND',
  nif: 'G22670707',
  motto: 'Alimentación y nutrición accesibles para personas con discapacidad y sus familias',
  secondaryMotto: 'Una alimentación más comprensible y accesible para cada familia',
  nature:
    'Asociación sin ánimo de lucro de ámbito estatal, acogida a la Ley Orgánica 1/2002, de 22 de marzo, reguladora del Derecho de Asociación.',
  year: 'Noviembre de 2026',
  logoUrl: '/assets/aistudio/logo_horiz_tran_sin_c690c1cd.png',
  nationalRegistry: {
    number: '632919',
    section: 'Sección 1',
    group: 'Grupo 1',
    entity: 'Registro Nacional de Asociaciones del Ministerio del Interior',
    activityCode: 'Promoción de la Salud y Nutrición Inclusiva',
    territorialScope: 'Estatal',
    cifCode: 'G22670707',
  },
  headquarters: {
    address: 'C/ Polop, 30, Esc. 1, 4.º O, 03015 Alicante (España)',
    street: 'Calle Polop, número 30, Escalera 1, 4.º O',
    postalCode: '03015',
    city: 'Alicante',
    province: 'Alicante',
    country: 'España',
    display: 'C/ Polop, 30, Esc. 1, 4.º O, 03015 Alicante',
  },
  contact: {
    email: 'info@nutridiversa.org',
    infoEmail: 'info@nutridiversa.org',
    sioEmail: 'info@nutridiversa.org',
    transparenciaEmail: 'info@nutridiversa.org',
    website: 'www.nutridiversa.org',
    websiteUrl: 'https://www.nutridiversa.org',
  },
  mission:
    'Contribuir a mejorar la alimentación, la nutrición y la salud de las personas con discapacidad, las personas autistas, las afectadas por enfermedades raras y las que se encuentran en situación de dependencia, mediante iniciativas basadas en la evidencia científica y orientadas por un enfoque de nutrición inclusiva, teniendo en cuenta también el bienestar de sus familias y personas cuidadoras.',
  vision:
    'Conseguir que la alimentación y la nutrición inclusivas formen parte habitual de la promoción de la salud en el ámbito de la discapacidad, el autismo, las enfermedades raras y las situaciones de dependencia, facilitando el acceso a una alimentación adecuada en condiciones de igualdad y con los apoyos necesarios.',
  natureAndLimits:
    'Proyecto exclusivamente educativo y comunitario en fase de preparación. No ofrece diagnósticos médicos, dietas personalizadas ni tratamientos clínicos.',
  fiscalNote:
    'Información fiscal transparente: NutriDiversa es una asociación sin ánimo de lucro inscrita en el Registro Nacional de Asociaciones. Actualmente se encuentra en su fase inicial de actividad y no cuenta todavía con la declaración de utilidad pública prevista en la Ley 49/2002, por lo que las cuotas y aportaciones no generan derecho a deducción fiscal en el IRPF o Impuesto de Sociedades. Emitimos el correspondiente justificante oficial de pago o aportación.',
  statutes: {
    art5_6:
      'Educación alimentaria accesible e iniciativas comunitarias para personas con discapacidad, autismo, enfermedades raras y situaciones de dependencia.',
    art8:
      'Carácter exclusivamente educativo, informativo y divulgativo. Exclusión expresa de diagnóstico médico, consejo facultativo o tratamiento clínico.',
    art40:
      'Transparencia institucional, gratuidad de los cargos de la Junta Directiva y rendición anual de cuentas ante la Asamblea General.',
    art41:
      'Participación de voluntariado conforme a la Ley 45/2015 de Voluntariado.',
    art42:
      'Cumplimiento de los artículos 6, 9 y 13 del RGPD y de la Ley Orgánica 3/2018 (LOPDGDD), aplicando el principio de minimización y no recogida de datos de salud en formularios públicos.',
  },
};

/**
 * 2.1. Corrección Urgente 1: Composición Literal de la Junta Directiva (PROHIBIDO ALTERAR)
 */
export const BOARD_MEMBERS: BoardMember[] = [
  {
    role: 'Presidencia',
    name: 'Inmaculada Checa Lorente',
    duty: 'Representación institucional de la asociación, dirección de la Asamblea General y de la Junta Directiva, e impulso de los fines estatutarios a nivel estatal.',
    bio: 'Desempeña la Presidencia de la Asociación de Nutrición en la Discapacidad (NutriDiversa) de forma gratuita y sin remuneración.',
    easyReadingBio: 'Ocupa la Presidencia de NutriDiversa y representa a la asociación.',
  },
  {
    role: 'Secretaría',
    name: 'Silvia Andrea Costa Méndez',
    duty: 'Coordinación administrativa, custodia de libros oficiales, actas y registro de personas asociadas, y tramitación de comunicaciones y solicitudes.',
    bio: 'Desempeña la Secretaría de la Junta Directiva de forma gratuita y sin remuneración.',
    easyReadingBio: 'Ocupa la Secretaría. Coordina la documentación y atiende las solicitudes recibidas.',
  },
  {
    role: 'Tesorería',
    name: 'César Hernández Moreno',
    duty: 'Gestión económica, contable y presupuestaria, administración de cuotas y aportaciones, emisión de justificantes de pago y formulación de cuentas anuales.',
    bio: 'Desempeña la Tesorería de la Junta Directiva de forma gratuita y sin remuneración.',
    easyReadingBio: 'Ocupa la Tesorería. Gestiona el presupuesto y emite los justificantes de pago.',
  },
  {
    role: 'Vocalía 1',
    name: 'Almudena Gómez de Cadiñanos Sastre',
    duty: 'Apoyo al desarrollo de los programas educativos, proyectos de nutrición inclusiva y comisiones de trabajo de la Junta Directiva.',
    bio: 'Desempeña la Vocalía 1 de la Junta Directiva de forma gratuita y sin remuneración.',
    easyReadingBio: 'Ocupa la Vocalía 1 y colabora en el desarrollo de los proyectos educativos.',
  },
  {
    role: 'Vocalía 2',
    name: 'Victoria Muñoz Bañón',
    duty: 'Impulso de la participación social, relación con familias y entidades colaboradoras y apoyo a las actividades comunitarias de la asociación.',
    bio: 'Desempeña la Vocalía 2 de la Junta Directiva de forma gratuita y sin remuneración.',
    easyReadingBio: 'Ocupa la Vocalía 2 y apoya las actividades con familias y entidades.',
  },
];

/**
 * FRANJA 3: BANDA DE CONFIANZA (DATOS VERIFICADOS)
 */
export const TRUST_BAND_ITEMS = [
  {
    label: 'Naturaleza',
    value: 'Asociación sin ánimo de lucro (Registro Nacional de Asociaciones nº 632919)',
  },
  {
    label: 'Alcance',
    value: 'Ámbito estatal',
  },
  {
    label: 'Sede',
    value: 'Alicante',
  },
  {
    label: 'Enfoque',
    value: 'Educación alimentaria accesible y participativa (no asistencial ni clínica)',
  },
];

/**
 * FRANJA 4: QUÉ HACEMOS (#que-hacemos)
 */
export const WHAT_WE_DO_LINES = [
  {
    id: 'informacion-accesible',
    title: 'Información accesible',
    description:
      'Adaptamos conocimientos sobre alimentación y nutrición a un lenguaje claro, cotidiano y libre de tecnicismos innecesarios.',
  },
  {
    id: 'escucha-participacion',
    title: 'Escucha y participación',
    description:
      'Partimos de las experiencias reales de las personas con discapacidad, sus familias y personas cuidadoras antes de diseñar cualquier recurso.',
  },
  {
    id: 'educacion-alimentaria',
    title: 'Educación alimentaria',
    description:
      'Impulsamos talleres, guías prácticas y actividades comunitarias que respetan los distintos perfiles sensoriales, motores o cognitivos.',
  },
  {
    id: 'trabajo-entidades',
    title: 'Trabajo con entidades',
    description:
      'Colaboramos con asociaciones, centros educativos, universidades y profesionales para sumar conocimiento y llegar a más familias.',
  },
];

export const NATIONAL_ACTION_SCOPES = [
  {
    id: 'discapacidad-general',
    title: 'Discapacidad intelectual, física y sensorial',
    description:
      'Adaptación de guías nutricionales, apoyos cotidianos y entornos de comida para fomentar la autonomía y prevenir dificultades asociadas.',
  },
  {
    id: 'tea',
    title: 'Trastorno del Espectro del Autismo (TEA)',
    description:
      'Orientación ante la hiper o hiporreactividad sensorial, selectividad alimentaria y estructuración de rutinas predecibles en la mesa.',
  },
  {
    id: 'enfermedades-raras-dependencia',
    title: 'Enfermedades raras y situaciones de dependencia',
    description:
      'Educación alimentaria cotidiana para personas y familias que afrontan necesidades de apoyo específicas en su alimentación diaria.',
  },
  {
    id: 'apoyo-respiro-familias',
    title: 'Apoyo a familias y personas cuidadoras',
    description:
      'Traducción de la evidencia científica a materiales comprensibles, prácticos y pensados para acompañar a quienes cuidan cada día.',
  },
];

/**
 * FRANJA 5: 4 pasos del proyecto piloto
 */
export const PILOT_STEPS_HOME = [
  {
    number: 1,
    title: 'Escuchamos',
    description:
      'Recogemos experiencias, dificultades cotidianas y prioridades de madres, padres, tutores y personas cuidadoras.',
  },
  {
    number: 2,
    title: 'Preparamos',
    description:
      'Creamos materiales claros, prácticos y accesibles a partir de sus necesidades reales.',
  },
  {
    number: 3,
    title: 'Compartimos',
    description:
      'Realizamos una primera actividad educativa gratuita orientada a las familias participantes.',
  },
  {
    number: 4,
    title: 'Mejoramos',
    description:
      'Evaluamos la utilidad, comprensión y accesibilidad de los recursos para seguir mejorándolos.',
  },
];

export const PUBLISHED_GUIDES: GuideArticle[] = [
  {
    id: 'selectividad-alimentaria-cuando-pedir-valoracion',
    title: 'Qué es la selectividad alimentaria y cuándo pedir valoración profesional',
    slug: 'selectividad-alimentaria-cuando-pedir-valoracion',
    category: 'Alimentación Inclusiva',
    date: 'Noviembre de 2026',
    readTime: '5 min de lectura',
    author: 'Asociación NutriDiversa',
    excerpt:
      'Diferencia entre preferencia selectiva, hiperreactividad sensorial y señales de alerta médica o nutricional que requieren valoración sanitaria.',
    simpleSummary:
      'Muchas personas con discapacidad o autismo aceptan pocos alimentos distintos por cómo sienten las texturas o los olores. En esta guía explicamos qué podemos observar con calma en casa y cuándo acudir al médico o nutricionista clínico.',
    sections: [
      {
        heading: '1. ¿Qué entendemos por selectividad alimentaria?',
        paragraphs: [
          'En muchas etapas del desarrollo es habitual mostrar cautela ante alimentos nuevos. Sin embargo, en personas con discapacidad o en el espectro autista, la selectividad alimentaria puede ser más intensa y persistente, y suele relacionarse con el procesamiento sensorial, la necesidad de rutinas predecibles o dificultades motoras orales.',
          'Una preferencia selectiva moderada permite mantener alimentos de los principales grupos nutricionales, mientras que una restricción acusada limita de forma severa el repertorio aceptado según textura, temperatura, color o presentación.',
        ],
      },
      {
        heading: '2. Factores cotidianos que conviene distinguir',
        paragraphs: [
          'Antes de intervenir en la mesa, ayuda observar si el rechazo se relaciona con hipersensibilidad táctil u olfativa, cansancio acumulado, cambios imprevistos en el entorno o molestias físicas al masticar o tragar.',
          'Comprender que el rechazo a un alimento suele responder a malestar sensorial o incertidumbre —y no a una conducta voluntaria de desafío— contribuye a rebajar la tensión familiar.',
        ],
      },
      {
        heading: '3. Señales de alerta: ¿cuándo pedir valoración profesional?',
        paragraphs: [
          'La educación alimentaria comunitaria nunca sustituye la consulta clínica. Conviene solicitar valoración en pediatría, medicina de familia, gastroenterología o nutrición clínica colegiada ante cualquiera de estas señales:',
          '• Pérdida de peso, estancamiento ponderal o fatiga inusual. • Exclusión completa de grupos enteros de alimentos durante periodos prolongados. • Tos frecuente, atragantamientos, arcadas intensas o dolor al tragar. • Estreñimiento severo, diarrea persistente, dolor abdominal recurrente o vómitos.',
        ],
      },
    ],
    sources: [
      'Guías de práctica clínica del Sistema Nacional de Salud sobre alimentación y neurodesarrollo.',
      'Revisiones científicas sobre procesamiento sensorial y selectividad alimentaria.',
    ],
    limitsNote:
      'Recurso divulgativo elaborado por la Asociación NutriDiversa (Noviembre 2026). Tiene carácter exclusivamente educativo e informativo y no sustituye la consulta médica ni el tratamiento nutricional.',
  },
  {
    id: 'texturas-olores-presentacion-alimentos',
    title: 'Texturas, olores y presentación de los alimentos',
    slug: 'texturas-olores-presentacion-alimentos',
    category: 'Entorno y Sentidos',
    date: 'Noviembre de 2026',
    readTime: '4 min de lectura',
    author: 'Asociación NutriDiversa',
    excerpt:
      'Cómo influye el procesamiento sensorial en la mesa y qué ajustes cotidianos ayudan a reducir la sobrecarga sensorial durante las comidas.',
    simpleSummary:
      'Comer utiliza todos los sentidos a la vez: la vista, el olfato, el tacto en la boca y el oído. Aquí compartimos ideas prácticas para que el comedor de casa sea un lugar más tranquilo y predecible.',
    sections: [
      {
        heading: '1. Comer es una experiencia multisensorial',
        paragraphs: [
          'Antes de probar un alimento, la persona recibe estímulos visuales (colores, brillo, mezcla de ingredientes) y olfativos (vapores de cocción, olores del comedor). Al comer intervienen además el tacto intraoral, la temperatura, la consistencia y el sonido al masticar.',
          'Cuando existe hiperreactividad sensorial, detalles cotidianos como la presencia de grumos, la mezcla de salsas o los olores intensos pueden percibirse como desagradables o abrumadores.',
        ],
      },
      {
        heading: '2. Ajustes sencillos en el entorno y en el plato',
        paragraphs: [
          '• Cuidar el ambiente del comedor: ventilar antes de comer para atenuar olores fuertes, reducir ruidos de fondo y mantener una iluminación agradable.',
          '• Presentación clara y predecible: a muchas personas les aporta seguridad ver los alimentos separados en el plato, sin mezclar texturas líquidas y sólidas de forma imprevista.',
        ],
      },
      {
        heading: '3. Partir de las texturas bien toleradas',
        paragraphs: [
          'Conocer si la persona acepta mejor texturas crujientes y secas o texturas suaves y homogéneas permite proponer pequeños acercamientos progresivos sin forzar situaciones de angustia.',
        ],
      },
    ],
    sources: [
      'Literatura científica sobre integración sensorial y alimentación cotidiana.',
      'Manuales de buenas prácticas en accesibilidad cognitiva y apoyo familiar.',
    ],
    limitsNote:
      'Recurso divulgativo elaborado por la Asociación NutriDiversa (Noviembre 2026). Tiene carácter exclusivamente educativo e informativo y no sustituye la consulta médica.',
  },
  {
    id: 'como-observar-comida-sin-convertirla-en-prueba',
    title: 'Cómo observar una comida sin convertirla en una prueba',
    slug: 'como-observar-comida-sin-convertirla-en-prueba',
    category: 'Bienestar Familiar',
    date: 'Noviembre de 2026',
    readTime: '4 min de lectura',
    author: 'Asociación NutriDiversa',
    excerpt:
      'Pautas prácticas para acompañar las comidas en casa reduciendo la presión, anticipando rutinas y observando con serenidad qué facilita la calma.',
    simpleSummary:
      'Cuando comer cuesta, toda la familia puede sentir mucha tensión. En esta guía compartimos ideas para que la hora de la comida no se viva como un examen y sea un momento más tranquilo.',
    sections: [
      {
        heading: '1. Aliviar la sensación de examen en la mesa',
        paragraphs: [
          'La preocupación constante por si un familiar come suficiente puede convertir cada comida en una situación de evaluación continua. Cuando la persona percibe esa vigilancia o insistencia en cada bocado, es frecuente que aumente su bloqueo o rechazo.',
          'Priorizar un ambiente sereno y predecible ayuda a que el comedor recupere su función de espacio cotidiano de convivencia.',
        ],
      },
      {
        heading: '2. Anticipación y tiempos razonables',
        paragraphs: [
          '• Avisar con antelación antes de sentarse a la mesa y explicar de forma sencilla qué comida habrá ese día reduce la incertidumbre.',
          '• Acordar duraciones razonables para la comida evita prolongar innecesariamente la permanencia en la mesa cuando ya ha aparecido cansancio.',
        ],
      },
      {
        heading: '3. Registrar observaciones fuera del momento de la comida',
        paragraphs: [
          'Anotar en otro momento del día qué alimentos resultan más cómodos, qué horarios funcionan mejor y qué apoyos facilitan la tranquilidad permite compartir información muy valiosa sin añadir presión durante la comida.',
        ],
      },
    ],
    sources: [
      'Guías de promoción del bienestar familiar y apoyo a personas cuidadoras.',
      'Evidencia sobre entornos alimentarios responsivos y libres de presión.',
    ],
    limitsNote:
      'Recurso divulgativo elaborado por la Asociación NutriDiversa (Noviembre 2026). Tiene carácter exclusivamente educativo e informativo y no sustituye la consulta médica.',
  },
  {
    id: 'diferencia-educacion-alimentaria-y-tratamiento-nutricional',
    title: 'Diferencia entre educación alimentaria y tratamiento nutricional',
    slug: 'diferencia-educacion-alimentaria-y-tratamiento-nutricional',
    category: 'Transparencia y Rigor',
    date: 'Noviembre de 2026',
    readTime: '4 min de lectura',
    author: 'Asociación NutriDiversa',
    excerpt:
      'Explicación clara sobre el papel educativo y comunitario de una asociación como NutriDiversa frente al diagnóstico médico y el tratamiento nutricional clínico.',
    simpleSummary:
      'Explicamos con claridad qué hace NutriDiversa (información accesible, talleres y guías educativas) y qué corresponde siempre a los profesionales sanitarios (diagnósticos, tratamientos y dietas clínicas personalizadas).',
    sections: [
      {
        heading: '1. ¿Qué aporta la educación alimentaria comunitaria?',
        paragraphs: [
          'La educación alimentaria comunitaria acerca conocimientos comprensibles, herramientas de observación cotidiana, talleres participativos y apoyos visuales para que las personas con discapacidad y sus familias dispongan de recursos útiles en su día a día.',
          'Desde NutriDiversa escuchamos las necesidades reales de las familias, traducimos la evidencia científica a un lenguaje claro y colaboramos con entidades sociales y educativas.',
        ],
      },
      {
        heading: '2. ¿Qué comprende el tratamiento nutricional clínico?',
        paragraphs: [
          'El tratamiento nutricional clínico incluye la valoración diagnóstica individual, el estudio antropométrico y analítico, la prescripción de pautas dietéticas terapéuticas personalizadas, la indicación de suplementos y la rehabilitación de trastornos de la deglución.',
          'Estas actuaciones corresponden exclusivamente a profesionales sanitarios titulados y colegiados en el ámbito asistencial.',
        ],
      },
      {
        heading: '3. Información clara para proteger a las familias',
        paragraphs: [
          'Distinguir ambos planos garantiza la seguridad de las personas y evita confusiones. NutriDiversa no realiza diagnósticos ni tratamientos clínicos y recomienda acudir siempre a los servicios sanitarios ante cualquier duda de salud.',
        ],
      },
    ],
    sources: [
      'Normativa española de ordenación de las profesiones sanitarias y promoción de la salud.',
      'Estatutos Oficiales y Dossier Institucional de la Asociación NutriDiversa (RNA 632919).',
    ],
    limitsNote:
      'Recurso divulgativo elaborado por la Asociación NutriDiversa (Noviembre 2026). Tiene carácter exclusivamente educativo e informativo y no sustituye la consulta médica.',
  },
];

export const UPCOMING_GUIDES: UpcomingGuide[] = [
  {
    id: 'cambios-pequenos-progresivos-rutinas',
    title: 'Cómo preparar cambios pequeños y progresivos en las rutinas alimentarias.',
    statusTag: 'En preparación - Piloto 2026/2027',
    description:
      'Recurso práctico en elaboración a partir de las prioridades que se recojan junto a las familias participantes en el proyecto piloto de Alicante.',
  },
  {
    id: 'senales-digestivas-frecuentes-consultar',
    title: 'Señales digestivas frecuentes que conviene consultar con profesionales sanitarios.',
    statusTag: 'En preparación - Piloto 2026/2027',
    description:
      'Ficha orientativa para ayudar a las familias a identificar molestias digestivas habituales y preparar la consulta con pediatría o digestivo.',
  },
  {
    id: 'adaptar-comunicacion-apoyos-visuales',
    title: 'Cómo adaptar la comunicación durante las comidas mediante apoyos visuales sencillos.',
    statusTag: 'En preparación - Piloto 2026/2027',
    description:
      'Guía de uso de tableros de elección y expresión ("Me gusta", "No me gusta", "Necesito ayuda", "Necesito una pausa") revisada con familias.',
  },
  {
    id: 'guia-asociaciones-organizar-taller',
    title: 'Guía práctica para asociaciones que quieran organizar un taller de alimentación accesible.',
    statusTag: 'En preparación - Piloto 2026/2027',
    description:
      'Lista de comprobación de accesibilidad espacial, sensorial y comunicativa para entidades del tercer sector y centros educativos.',
  },
];

export const OFFICIAL_DOCUMENTS: OfficialDocument[] = [
  {
    id: 'doc-estatutos-oficiales',
    title: 'Estatutos Oficiales de la Asociación NutriDiversa',
    version: 'Versión vigente inscrita · Noviembre 2026',
    date: 'Noviembre de 2026',
    pages: 'Texto estatutario íntegro',
    fileName: 'Estatutos-Oficiales-NutriDiversa-RNA632919.pdf',
    downloadUrl: '/transparencia#estatutos-resumen',
    summary:
      'Texto íntegro de los Estatutos vigentes inscritos en el Registro Nacional de Asociaciones (Grupo 1, Sección 1, Número Nacional 632919), acogidos a la Ley Orgánica 1/2002.',
    simpleSummary:
      'Las normas oficiales de funcionamiento de NutriDiversa inscritas en el Registro Nacional de Asociaciones.',
  },
  {
    id: 'doc-resolucion-inscripcion',
    title: 'Resolución de Inscripción en el Registro Nacional de Asociaciones',
    version: 'Copia informativa RGPD · Noviembre 2026',
    date: 'Noviembre de 2026',
    pages: 'Resolución registral (RNA 632919)',
    fileName: 'Resolucion-Inscripcion-RNA632919-NutriDiversa.pdf',
    downloadUrl: '/transparencia#resolucion-resumen',
    summary:
      'Copia informativa de la resolución administrativa de inscripción en el Registro Nacional de Asociaciones del Ministerio del Interior (Grupo 1, Sección 1, Número Nacional 632919) con datos personales sensibles disociados conforme al RGPD.',
    simpleSummary:
      'Resolución administrativa de inscripción de NutriDiversa en el Registro Nacional de Asociaciones con el número 632919.',
  },
  {
    id: 'doc-dossier-institucional-v1',
    title: 'Dossier Institucional NutriDiversa (Versión 1.0 - Noviembre 2026)',
    version: 'Versión 1.0 · Noviembre 2026',
    date: 'Noviembre de 2026',
    pages: '16 páginas',
    fileName: 'Dossier-Institucional-NutriDiversa-2026-v1.pdf',
    downloadUrl: '/documentos/Dossier-Institucional-NutriDiversa-2026-v1.pdf',
    summary:
      'Presentación general de la entidad, misión, visión, valores, líneas estratégicas y primer proyecto piloto de alimentación y autismo en la provincia de Alicante (16 páginas).',
    simpleSummary:
      'Documento de 16 páginas con la presentación general de NutriDiversa, nuestra misión y el primer proyecto piloto.',
  },
];

export const GUIDES: GuideResource[] = [];
export const ARTICLES: Article[] = [];
