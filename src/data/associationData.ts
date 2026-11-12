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
  abbreviation: 'NutriDiversa',
  acronym: 'ND',
  nif: 'G22670707',
  motto: 'Una alimentación más comprensible y accesible para cada familia',
  subtitle: 'Promoción de la salud y nutrición inclusiva',
  nature:
    'Asociación sin ánimo de lucro de ámbito estatal, acogida a la Ley Orgánica 1/2002, de 22 de marzo, reguladora del Derecho de Asociación.',
  year: 'Noviembre de 2026',
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
    address: 'C/ Polop, 30, Esc. 1, 4º O, 03015 Alicante (España)',
    street: 'Calle Polop, número 30, Escalera 1, 4º O',
    postalCode: '03015',
    city: 'Alicante',
    province: 'Alicante',
    country: 'España',
    display: 'C/ Polop, 30, Esc. 1, 4º O, 03015 Alicante (España)',
  },
  contact: {
    email: 'info@nutridiversa.org',
    infoEmail: 'info@nutridiversa.org',
    sioEmail: 'info@nutridiversa.org',
    transparenciaEmail: 'info@nutridiversa.org',
    website: 'www.nutridiversa.org',
    websiteUrl: 'https://www.nutridiversa.org',
    phone: '',
    phoneFormatted: '',
    whatsapp: '',
    whatsappFormatted: '',
    bizumOngCode: '',
  },
  mission:
    'Contribuir a mejorar la alimentación, la nutrición y la salud de las personas con discapacidad, las personas autistas, las afectadas por enfermedades raras y las que se encuentran en situación de dependencia, mediante iniciativas basadas en la evidencia científica y orientadas por un enfoque de nutrición inclusiva, teniendo en cuenta también el bienestar de sus familias y personas cuidadoras.',
  vision:
    'Conseguir que la alimentación y la nutrición inclusivas formen parte habitual de la promoción de la salud en el ámbito de la discapacidad, el autismo, las enfermedades raras y las situaciones de dependencia, facilitando el acceso a una alimentación adecuada en condiciones de igualdad y con los apoyos necesarios.',
  natureAndLimits:
    'Actividad de educación alimentaria. No realiza diagnósticos, dietas personalizadas ni tratamientos clínicos, y no sustituye la atención sanitaria.',
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

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: 'Inmaculada Concepción Sánchez-Cañete',
    role: 'Presidencia',
    duty: 'Representación institucional de la asociación, impulso estratégico de la misión estatal y coordinación general de las líneas de actuación.',
    bio: 'Impulsora de NutriDiversa comprometida con la promoción de la salud, la nutrición inclusiva y el apoyo educativo a las personas con discapacidad y a sus familias.',
    easyReadingBio:
      'Ocupa la Presidencia de la Junta Directiva y representa a la asociación.',
  },
  {
    name: 'Iván Carabaño',
    role: 'Secretaría',
    duty: 'Coordinación administrativa, custodia de actas y registro de personas asociadas, y atención directa a las solicitudes recibidas.',
    bio: 'Responsable de la gestión documental y estatutaria de la entidad, así como de la tramitación de solicitudes de información, colaboración e inscripción.',
    easyReadingBio:
      'Ocupa la Secretaría. Coordina la administración y responde a las solicitudes de las familias y personas asociadas.',
  },
  {
    name: 'César',
    role: 'Tesorería',
    duty: 'Gestión económica, presupuestaria y documental, emisión de justificantes de cuotas y aportaciones, y preparación del balance anual.',
    bio: 'Encargado de la administración transparente de los recursos económicos destinados a los materiales educativos y actividades de la asociación.',
    easyReadingBio:
      'Ocupa la Tesorería. Gestiona el presupuesto y los justificantes de las cuotas y aportaciones.',
  },
];

export const NATIONAL_ACTION_SCOPES = [
  {
    id: 'tea',
    title: 'Trastorno del Espectro del Autismo (TEA)',
    description:
      'Apoyo ante la hiper o hiporreactividad sensorial, selectividad alimentaria y estructuración de rutinas en la mesa.',
  },
  {
    id: 'discapacidad-general',
    title: 'Discapacidad intelectual, física y sensorial',
    description:
      'Adaptación de guías nutricionales y entornos de comida para fomentar la autonomía y prevenir problemas asociados.',
  },
  {
    id: 'enfermedades-raras-dependencia',
    title: 'Enfermedades raras y situaciones de dependencia',
    description:
      'Orientación educativa cotidiana para familias y personas cuidadoras que afrontan necesidades alimentarias específicas.',
  },
  {
    id: 'apoyo-respiro-familias',
    title: 'Apoyo y respiro informativo a familias',
    description:
      'Traducción de la evidencia científica a materiales comprensibles, prácticos y libres de tecnicismos.',
  },
];

export const PILOT_STEPS_HOME = [
  {
    number: 1,
    title: 'Escuchamos',
    description:
      'Recogemos experiencias, dificultades cotidianas y prioridades reales de las familias.',
  },
  {
    number: 2,
    title: 'Preparamos',
    description:
      'Creamos materiales claros, prácticos y accesibles ajustados a sus necesidades.',
  },
  {
    number: 3,
    title: 'Compartimos',
    description:
      'Realizamos una primera actividad educativa orientada a las personas cuidadoras.',
  },
  {
    number: 4,
    title: 'Mejoramos',
    description:
      'Evaluamos la utilidad, comprensión y accesibilidad de los recursos generados.',
  },
];

export const PUBLISHED_GUIDES: GuideArticle[] = [
  {
    id: 'selectividad-alimentaria-autismo-cuando-consultar',
    title: 'Qué es la selectividad alimentaria en el autismo y cuándo consultar a un profesional sanitario',
    slug: 'selectividad-alimentaria-autismo-cuando-consultar',
    category: 'Alimentación y Autismo',
    date: 'Noviembre de 2026',
    readTime: '5 min de lectura',
    author: 'Equipo de NutriDiversa',
    excerpt:
      'Diferencia entre preferencia selectiva, hiperreactividad sensorial y señales de alerta médica o nutricional que requieren valoración sanitaria.',
    simpleSummary:
      'Muchas niñas y niños con autismo comen pocos alimentos distintos por cómo sienten las texturas o los olores. En esta guía explicamos qué podemos observar con calma en casa y en qué momentos es importante acudir al pediatra o al nutricionista clínico.',
    sections: [
      {
        heading: '1. ¿Qué entendemos por selectividad alimentaria en el espectro autista?',
        paragraphs: [
          'En la infancia es frecuente atravesar etapas de rechazo a nuevos alimentos (neofobia alimentaria). Sin embargo, en menores en el espectro autista, la selectividad alimentaria suele ser más intensa y persistente, y a menudo está vinculada a la forma en que su sistema nervioso procesa los estímulos sensoriales, la necesidad de predictibilidad o las dificultades motoras orales.',
          'Una preferencia selectiva habitual permite mantener un repertorio suficiente de alimentos dentro de los distintos grupos nutricionales, mientras que una restricción severa reduce drásticamente la variedad de alimentos aceptados por textura, marca, color, temperatura o forma de presentación.',
        ],
      },
      {
        heading: '2. Factores cotidianos que conviene distinguir',
        paragraphs: [
          'Antes de intervenir en la mesa, resulta útil observar si el rechazo responde a hipersensibilidad táctil u olfativa, a cansancio acumulado al final del día, a cambios imprevistos en la vajilla o el entorno, o bien a molestias físicas al masticar o tragar.',
          'Comprender que la negativa a probar un alimento no es una conducta de oposición voluntaria, sino con frecuencia una respuesta de malestar sensorial o ansiedad ante la incertidumbre, ayuda a reducir la presión sobre el menor y sobre la propia familia.',
        ],
      },
      {
        heading: '3. Señales de alerta: ¿cuándo consultar a un profesional sanitario?',
        paragraphs: [
          'La educación alimentaria familiar nunca sustituye la valoración clínica. Se recomienda acudir a pediatría, gastroenterología o a un profesional de la nutrición clínica colegiado cuando se observe cualquiera de estas señales:',
          '• Pérdida de peso, estancamiento en el crecimiento o cansancio inusual. • Exclusión completa de grupos enteros de alimentos (por ejemplo, ninguna fuente de proteínas o ninguna fruta/verdura en ninguna textura) durante periodos prolongados. • Tos frecuente, atragantamientos, arcadas intensas o dolor al tragar. • Estreñimiento crónico severo, diarrea persistente, dolor abdominal recurrente o vómitos.',
        ],
      },
    ],
    sources: [
      'Guías de práctica clínica sobre trastornos del espectro autista en pediatría (Sistema Nacional de Salud).',
      'Revisiones científicas sobre procesamiento sensorial y selectividad alimentaria en la infancia (Journal of Autism and Developmental Disorders).',
    ],
    limitsNote:
      'Texto divulgativo elaborado por el equipo de NutriDiversa. Tiene carácter exclusivamente educativo e informativo y no sustituye el diagnóstico ni la consulta con profesionales sanitarios.',
  },
  {
    id: 'texturas-olores-presentacion-procesamiento-sensorial',
    title: 'Texturas, olores y presentación de los alimentos: cómo influye el procesamiento sensorial en la mesa',
    slug: 'texturas-olores-presentacion-procesamiento-sensorial',
    category: 'Procesamiento Sensorial',
    date: 'Noviembre de 2026',
    readTime: '4 min de lectura',
    author: 'Equipo de NutriDiversa',
    excerpt:
      'Pautas cotidianas para reducir la sobrecarga sensorial en el entorno de la comida y facilitar una relación más predecible con los alimentos.',
    simpleSummary:
      'Comer utiliza todos los sentidos a la vez: la vista, el olfato, el tacto en la boca y hasta el oído al masticar. Aquí compartimos ideas prácticas para que el comedor de casa sea un lugar más tranquilo y predecible.',
    sections: [
      {
        heading: '1. Comer es una experiencia multisensorial compleja',
        paragraphs: [
          'Antes siquiera de llevarse un alimento a la boca, la persona recibe información visual (colores, brillo, mezcla de ingredientes en el plato) y olfativa (vapores de cocción, olores intensos de otros comensales). Al introducir el alimento en la boca intervienen el tacto intraoral, la temperatura, la consistencia y el sonido de la masticación.',
          'Cuando existe hiperreactividad sensorial, estímulos que pasan desapercibidos para otras personas —como los grumos en un puré, la mezcla de salsa con arroz o el olor del pescado cocinado— pueden percibirse como abrumadores o desagradables.',
        ],
      },
      {
        heading: '2. Ajustes ambientales para reducir la sobrecarga sensorial',
        paragraphs: [
          '• Cuidar el ambiente del comedor: ventilar el espacio antes de sentarse a la mesa para atenuar olores intensos, evitar ruidos fuertes de televisión o electrodomésticos y procurar una iluminación suave.',
          '• Cuidar la presentación visual: para muchas niñas y niños resulta más predecible servir los alimentos separados en el plato (o en platos con compartimentos) sin que se toquen entre sí ni lleven salsas añadidas por encima.',
        ],
      },
      {
        heading: '3. Respeto a las texturas preferidas como punto de partida',
        paragraphs: [
          'Identificar si la persona tolera mejor texturas crujientes y secas, o bien texturas homogéneas y suaves, permite ofrecer variaciones pequeñas y seguras sin forzar cambios bruscos que generen rechazo o aversión.',
        ],
      },
    ],
    sources: [
      'Literatura científica sobre integración sensorial y alimentación en el desarrollo infantil.',
      'Manuales de buenas prácticas en apoyo conductual positivo y accesibilidad cognitiva en el hogar.',
    ],
    limitsNote:
      'Texto divulgativo elaborado por el equipo de NutriDiversa. Tiene carácter exclusivamente educativo e informativo y no sustituye la valoración de terapia ocupacional, logopedia o nutrición clínica.',
  },
  {
    id: 'como-observar-comida-en-casa-sin-estres',
    title: 'Cómo observar una comida en casa sin convertirla en una situación de estrés',
    slug: 'como-observar-comida-en-casa-sin-estres',
    category: 'Rutinas y Bienestar Familiar',
    date: 'Noviembre de 2026',
    readTime: '4 min de lectura',
    author: 'Equipo de NutriDiversa',
    excerpt:
      'Estrategias prácticas para rebajar la tensión familiar, anticipar rutinas predecibles y observar con calma qué ocurre durante las comidas.',
    simpleSummary:
      'Cuando hay dificultades para comer, toda la familia puede sentir mucha preocupación y cansancio. En esta ficha proponemos pautas sencillas para anticipar las comidas y reducir el estrés en la mesa.',
    sections: [
      {
        heading: '1. El impacto emocional del momento de la comida en quienes cuidan',
        paragraphs: [
          'Las familias y personas cuidadoras afrontan a diario la preocupación de si su hijo, hija o familiar estará recibiendo una nutrición suficiente. Esa inquietud legítima puede hacer que el momento de sentarse a la mesa se viva con tensión anticipatoria.',
          'Reducir la exigencia inmediata en cada toma y priorizar un clima tranquilo es el primer paso para que la mesa vuelva a ser un espacio seguro de convivencia.',
        ],
      },
      {
        heading: '2. Rutinas predecibles y anticipación visual',
        paragraphs: [
          '• Anticipar qué va a ocurrir: avisar unos minutos antes de pasar al comedor y mostrar de forma visual o con lenguaje claro qué alimentos habrá en la mesa ayuda a reducir la incertidumbre.',
          '• Mantener horarios y tiempos razonables: procurar que la duración de la comida sea predecible (por ejemplo, entre 20 y 30 minutos), evitando prolongar la permanencia en la mesa cuando aparece fatiga o malestar.',
        ],
      },
      {
        heading: '3. Observar sin presionar',
        paragraphs: [
          'Anotar durante unos días en una libreta qué alimentos se aceptan con tranquilidad, en qué momento del día hay mejor disposición y qué factores del entorno facilitan la calma permite a la familia detectar patrones útiles sin necesidad de negociar o insistir en cada bocado.',
        ],
      },
    ],
    sources: [
      'Guías de apoyo familiar y promoción del bienestar de personas cuidadoras en el ámbito de la discapacidad.',
      'Evidencia sobre entorno familiar responsivo en educación alimentaria infantil.',
    ],
    limitsNote:
      'Texto divulgativo elaborado por el equipo de NutriDiversa. Tiene carácter exclusivamente educativo e informativo y no sustituye la consulta con profesionales sanitarios.',
  },
  {
    id: 'diferencia-educacion-alimentaria-y-tratamiento-clinico',
    title: 'Diferencia entre educación alimentaria comunitaria y tratamiento nutricional clínico',
    slug: 'diferencia-educacion-alimentaria-y-tratamiento-clinico',
    category: 'Transparencia y Rigor',
    date: 'Noviembre de 2026',
    readTime: '4 min de lectura',
    author: 'Equipo de NutriDiversa',
    excerpt:
      'Guía clara sobre qué puede aportar una asociación sin ánimo de lucro como NutriDiversa y cuándo acudir a pediatría, gastroenterología o dietistas-nutricionistas clínicos.',
    simpleSummary:
      'Explicamos con total claridad qué hace NutriDiversa (educación alimentaria, talleres y guías comprensibles) y qué corresponde siempre a los médicos y profesionales sanitarios (diagnósticos, tratamientos y dietas personalizadas).',
    sections: [
      {
        heading: '1. ¿Qué es la educación alimentaria comunitaria e inclusiva?',
        paragraphs: [
          'La educación alimentaria comunitaria tiene por finalidad facilitar información comprensible, recursos prácticos, talleres divulgativos y apoyos visuales para que las personas con discapacidad y sus familias comprendan mejor los hábitos saludables y reduzcan barreras cotidianas en su entorno.',
          'Desde una asociación como NutriDiversa escuchamos las necesidades de los colectivos, traducimos el conocimiento científico a formatos claros y promovemos la participación y el apoyo mutuo entre familias y entidades.',
        ],
      },
      {
        heading: '2. ¿Qué es el tratamiento nutricional clínico e individualizado?',
        paragraphs: [
          'El abordaje clínico comprende la valoración antropométrica y bioquímica individual, el diagnóstico médico o nutricional de patologías o déficits, la prescripción de dietas terapéuticas personalizadas, la pauta de suplementos nutricionales y la rehabilitación clínica de la deglución (disfagia).',
          'Estas actuaciones son competencia exclusiva de profesionales sanitarios titulados y colegiados (medicina, pediatría, enfermería, dietistas-nutricionistas clínicos, logopedas y terapeutas ocupacionales en centros sanitarios).',
        ],
      },
      {
        heading: '3. Dos ámbitos que se respetan y complementan',
        paragraphs: [
          'Tener claros estos límites protege a las familias frente a falsas promesas o intervenciones sin respaldo científico. NutriDiversa nunca realiza diagnósticos ni prescribe dietas o suplementos, y orienta siempre hacia los servicios sanitarios cuando una situación requiere valoración clínica individual.',
        ],
      },
    ],
    sources: [
      'Marco normativo español de ordenación de las profesiones sanitarias y promoción de la salud comunitaria.',
      'Estatutos Oficiales y Dossier Institucional de la Asociación NutriDiversa (RNA 632919).',
    ],
    limitsNote:
      'Texto divulgativo elaborado por el equipo de NutriDiversa. Tiene carácter exclusivamente educativo e informativo y no sustituye la consulta con profesionales sanitarios.',
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
      'Presentación general de la entidad, misión, visión, valores, líneas estratégicas y proyecto piloto inicial de alimentación y autismo en la provincia de Alicante (16 páginas).',
    simpleSummary:
      'Documento de 16 páginas con la presentación general de NutriDiversa, nuestra misión y el proyecto piloto de Alicante.',
  },
];

// Legacy exports kept compatible for any shared context imports
export const GUIDES: GuideResource[] = [];
export const ARTICLES: Article[] = [];
