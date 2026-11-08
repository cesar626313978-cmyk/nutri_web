import { BoardMember, OfficialDocument, GuideResource, Article } from '../types';

export const DOSSIER_PDF_URL =
  '/assets/aistudio/Dossier_NutriDiversa__borrador_final_actualizado_dfe3321f.pdf';

export const DOSSIER_IMAGES = {
  coverMeal: '/src/assets/images/dossier_mesa_inclusiva_1793908196707.jpg',
  workshopFamilies: '/src/assets/images/dossier_taller_familias_1793908198282.jpg',
  kitchenAutonomy: '/src/assets/images/dossier_cocina_autonomia_1793908198321.jpg',
};

export const INSTITUTIONAL_DATA = {
  name: 'Asociación NutriDiversa',
  abbreviation: 'NutriDiversa',
  acronym: 'ND',
  motto: 'La salud también se construye desde la diversidad',
  subtitle: 'Promoción de la salud y nutrición inclusiva',
  nature: 'Asociación sin ánimo de lucro de ámbito estatal',
  year: '2026',
  nationalRegistry: {
    number: '632919',
    section: 'Sección 1ª',
    group: 'Grupo 1',
    entity: 'Registro Nacional de Asociaciones (Ministerio del Interior)',
    activityCode: '426 - Promoción de la Salud',
    territorialScope: 'Estatal / Nacional (España)',
    cifCode: 'G-10928374',
  },
  headquarters: {
    address: 'Alicante',
    city: 'Alicante',
    province: 'Alicante',
    country: 'España',
    display: 'Alicante · Ámbito estatal',
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
    'La misión de NutriDiversa es contribuir a mejorar la alimentación, la nutrición y la salud de las personas con discapacidad, las personas autistas, las afectadas por enfermedades raras y las que se encuentran en situación de dependencia, mediante iniciativas basadas en la evidencia científica y orientadas por un enfoque de nutrición inclusiva, teniendo en cuenta también el bienestar de sus familias y personas cuidadoras.',
  vision:
    'Conseguir que la alimentación y la nutrición inclusivas formen parte habitual de la promoción de la salud en el ámbito de la discapacidad, el autismo, las enfermedades raras y las situaciones de dependencia. Aspiramos a que las personas a las que se dirige NutriDiversa puedan acceder a una alimentación adecuada en condiciones de igualdad, con los apoyos necesarios para participar en las decisiones relacionadas con ella, y a que sus necesidades alimentarias y nutricionales sean tenidas en cuenta en los ámbitos social, educativo y sanitario.',
  inclusiveNutritionDefinition:
    'En NutriDiversa entendemos la nutrición inclusiva como un enfoque de promoción de la salud que busca reducir las barreras que dificultan una alimentación adecuada y el acceso a información, recursos y actividades de educación alimentaria y nutricional. Este enfoque promueve contenidos comprensibles, materiales y actividades accesibles y la participación de las personas en las decisiones relacionadas con su alimentación. Respeta sus gustos, preferencias y capacidades y tiene en cuenta sus necesidades de apoyo, desde la igualdad de oportunidades y el respeto a su dignidad.',
  targetAudience:
    'NutriDiversa se dirige a personas con discapacidad en todas sus tipologías —física, sensorial, intelectual, cognitiva, psicosocial o múltiple—, personas autistas, personas afectadas por enfermedades raras y personas en situación de dependencia, así como a sus familias y personas cuidadoras.',
  natureAndLimits:
    'En esta fase inicial, NutriDiversa plantea desarrollar iniciativas de carácter educativo, informativo, divulgativo y comunitario, centradas en la alimentación y la nutrición inclusivas. Estas iniciativas no sustituyen la valoración, el diagnóstico, el tratamiento ni el seguimiento sanitario que pueda necesitar una persona. Cuando las necesidades planteadas excedan su alcance, se orientará hacia los servicios o profesionales correspondientes.',
  statutes: {
    art5_6:
      'Promoción de la salud desde un enfoque de nutrición inclusiva para personas con discapacidad (física, sensorial, intelectual, cognitiva, psicosocial o múltiple), personas autistas, afectadas por enfermedades raras y en situación de dependencia, así como sus familias y personas cuidadoras.',
    art8:
      'Iniciativas de carácter educativo, preventivo, informativo, divulgativo y comunitario basadas en la evidencia científica. No sustituyen la valoración, el diagnóstico, el tratamiento ni el seguimiento sanitario individualizado.',
    art40:
      'Transparencia activa: comunicar con claridad los objetivos, las actividades, las colaboraciones, la financiación y los límites de actuación de la asociación, sin generar expectativas que no podamos cumplir.',
    art41:
      'Participación abierta de personas voluntarias, profesionales, entidades sociales, universidades, centros de investigación e instituciones sanitarias.',
    art42:
      'Protección reforzada de datos personales y revisión de la accesibilidad en todas las herramientas de participación conforme al RGPD y LOPDGDD.',
  },
};

export interface DossierValue {
  id: string;
  title: string;
  description: string;
  easyReading: string;
}

export const DOSSIER_VALUES: DossierValue[] = [
  {
    id: 'inclusion',
    title: 'Inclusión',
    description:
      'Promover la igualdad de oportunidades y la participación, procurando que las necesidades de apoyo no sean motivo de exclusión de las iniciativas de la asociación.',
    easyReading:
      'Todas las personas pueden participar. Nadie se queda fuera por necesitar más apoyo.',
  },
  {
    id: 'respeto-dignidad',
    title: 'Respeto y dignidad',
    description:
      'Respetar los gustos, las preferencias, las decisiones y los ritmos de las personas, teniendo en cuenta sus capacidades, circunstancias y necesidades de apoyo.',
    easyReading:
      'Respetamos lo que te gusta comer, tus decisiones y tu propio ritmo.',
  },
  {
    id: 'accesibilidad',
    title: 'Accesibilidad',
    description:
      'Procurar que la información, los recursos y las actividades sean comprensibles y puedan adaptarse a distintas necesidades físicas, sensoriales, cognitivas y comunicativas.',
    easyReading:
      'Hacemos guías y actividades fáciles de entender y adaptadas a cada persona.',
  },
  {
    id: 'rigor-responsabilidad',
    title: 'Rigor y responsabilidad',
    description:
      'Ofrecer información basada en la evidencia científica, diferenciando con claridad entre lo que está respaldado, lo que es incierto y lo que requiere valoración profesional especializada.',
    easyReading:
      'Solo damos consejos comprobados por la ciencia y avisamos cuando hace falta ir al médico.',
  },
  {
    id: 'escucha-participacion',
    title: 'Escucha y participación',
    description:
      'Escuchar a las personas con discapacidad, a sus familias y a quienes las cuidan, y tener en cuenta sus necesidades y propuestas al preparar las actividades de la asociación.',
    easyReading:
      'Escuchamos a las personas con discapacidad y a sus familias antes de preparar nuestras actividades.',
  },
  {
    id: 'colaboracion',
    title: 'Colaboración',
    description:
      'Buscar la colaboración con entidades, profesionales e instituciones, respetando sus competencias y teniendo en cuenta los conocimientos y recursos existentes.',
    easyReading:
      'Trabajamos en equipo con otras asociaciones, colegios, universidades y profesionales.',
  },
  {
    id: 'transparencia',
    title: 'Transparencia',
    description:
      'Comunicar con claridad los objetivos, las actividades, las colaboraciones, la financiación y los límites de actuación de la asociación, sin generar expectativas que no podamos cumplir.',
    easyReading:
      'Explicamos con claridad qué hacemos, con quién colaboramos y hasta dónde llega nuestra ayuda.',
  },
];

export const DOSSIER_OBJECTIVES: string[] = [
  'Facilitar el acceso a información y educación alimentaria y nutricional comprensibles y adaptadas, contribuyendo a reducir las barreras que dificultan su utilización.',
  'Promover hábitos de alimentación y estilos de vida saludables que contribuyan a la salud, el bienestar y la calidad de vida.',
  'Favorecer la autonomía y la participación en las decisiones relacionadas con la alimentación, con los apoyos necesarios.',
  'Apoyar a las familias y personas cuidadoras mediante información, orientación y recursos prácticos relacionados con la alimentación y la nutrición.',
  'Sensibilizar sobre las necesidades alimentarias y nutricionales de los colectivos a los que se dirige NutriDiversa y sobre las barreras que pueden encontrar.',
  'Impulsar la colaboración con entidades, profesionales e instituciones para compartir conocimientos y recursos y desarrollar actuaciones conjuntas.',
  'Fomentar la generación y difusión de conocimiento, la investigación y la innovación en nutrición adaptada, así como la participación en proyectos piloto.',
  'Promover los derechos y la igualdad de oportunidades en relación con la alimentación y el acceso a información, educación y recursos adaptados.',
];

export interface ActionLineItem {
  number: string;
  id: string;
  title: string;
  description: string;
  extraDetail?: string;
  easyReading: string;
}

export const ACTION_LINES: ActionLineItem[] = [
  {
    number: '4.1',
    id: 'educacion-alimentaria',
    title: 'Educación alimentaria y nutricional inclusiva',
    description:
      'Desarrollo de talleres, charlas y actividades educativas adaptadas a las necesidades de los distintos colectivos, con un enfoque práctico, accesible y aplicable a la vida cotidiana.',
    easyReading:
      'Talleres y charlas prácticas para aprender a comer mejor en el día a día.',
  },
  {
    number: '4.2',
    id: 'escucha-activa',
    title: 'Escucha activa y detección de necesidades',
    description:
      'Recogida de experiencias, necesidades y propuestas mediante encuestas, espacios de participación y otras herramientas, contando con las personas a las que se dirige la asociación, sus familias y quienes las cuidan. Sus aportaciones servirán para orientar el diseño y la revisión de las actuaciones.',
    easyReading:
      'Preguntamos a las personas y a sus familias qué necesitan mediante encuestas y reuniones.',
  },
  {
    number: '4.3',
    id: 'informacion-recursos',
    title: 'Información y recursos accesibles',
    description:
      'Elaboración progresiva de materiales sobre alimentación y nutrición, como guías breves, fichas informativas y explicaciones con apoyos visuales, a partir de las necesidades identificadas. Se utilizará lenguaje claro y se revisará su comprensión y utilidad con personas de los colectivos a los que se dirijan.',
    extraDetail:
      'Cuando se necesiten materiales en lectura fácil, se buscará colaboración especializada para su elaboración y validación con personas con dificultades de comprensión lectora.',
    easyReading:
      'Creamos guías cortas, fichas con dibujos y materiales en lenguaje claro y lectura fácil.',
  },
  {
    number: '4.4',
    id: 'sensibilizacion-divulgacion',
    title: 'Sensibilización y divulgación',
    description:
      'Desarrollo de acciones destinadas a dar visibilidad a la relación entre alimentación, nutrición, salud y discapacidad, promoviendo una mayor conciencia social sobre estas necesidades.',
    easyReading:
      'Damos a conocer a toda la sociedad la importancia de la alimentación en la discapacidad.',
  },
  {
    number: '4.5',
    id: 'proyectos-piloto',
    title: 'Proyectos piloto y evaluación',
    description:
      'Puesta en marcha de iniciativas dirigidas inicialmente a colectivos concretos, para valorar su utilidad, accesibilidad y viabilidad antes de plantear su continuidad o ampliación. Los resultados servirán para identificar mejoras y orientar futuras actuaciones.',
    extraDetail:
      'Se buscará también colaborar en proyectos de investigación y evaluación relacionados con la alimentación y la nutrición adaptada, de acuerdo con los recursos y apoyos disponibles.',
    easyReading:
      'Empezamos con proyectos concretos para comprobar que funcionan bien y mejorarlos paso a paso.',
  },
  {
    number: '4.6',
    id: 'trabajo-en-red',
    title: 'Trabajo en red',
    description:
      'Búsqueda de colaboración con asociaciones, profesionales, instituciones y otros agentes sociales para compartir conocimientos y recursos, así como desarrollar iniciativas conjuntas.',
    easyReading:
      'Colaboramos con asociaciones, universidades, centros sanitarios y profesionales.',
  },
];

export const AUTISM_PILOT_PROJECT = {
  title: 'Proyecto piloto inicial: alimentación y autismo',
  subtitle:
    'Identificación participativa de necesidades y desarrollo de una primera actividad educativa en la provincia de Alicante.',
  territory: 'Provincia de Alicante',
  targetGroup:
    'Madres, padres, tutores y personas cuidadoras de menores de entre 6 y 12 años, ambos incluidos, con autismo o en proceso de valoración por posible autismo.',
  contextParagraphs: [
    'NutriDiversa quiere iniciar su actividad con un proyecto piloto sobre alimentación y autismo, previsto inicialmente en la provincia de Alicante. Se dirige a madres, padres, tutores y personas cuidadoras de menores de entre 6 y 12 años, ambos incluidos, con autismo o en proceso de valoración por posible autismo.',
    'Las dificultades alimentarias en el autismo pueden estar relacionadas con factores sensoriales, dificultades ante los cambios, ansiedad, comunicación, aprendizaje, habilidades orales, experiencias previas o problemas de salud. No todas las personas autistas presentan las mismas dificultades ni estas responden siempre a las mismas causas.',
    'El proyecto partirá de la recogida de experiencias y prioridades de las familias para orientar la elaboración de materiales y una primera actividad de educación alimentaria y nutricional. En esta fase, la participación se centrará en las personas adultas que acompañan o cuidan a los menores.',
  ],
  generalObjective:
    'Identificar las necesidades y prioridades expresadas por las familias participantes en relación con la alimentación de menores de entre 6 y 12 años con autismo o en proceso de valoración por posible autismo, para orientar la elaboración de recursos y una primera actividad de educación alimentaria y nutricional.',
  familyConcerns: [
    'La selectividad y la variedad alimentaria.',
    'La sensibilidad a texturas, olores, sabores o presentaciones.',
    'Las rutinas y el momento de las comidas.',
    'La suficiencia nutricional de la alimentación.',
    'Los síntomas digestivos y las dudas sobre cuándo consultar a profesionales sanitarios.',
  ],
  specificObjectives: [
    'Conocer las experiencias, dificultades y preocupaciones de las familias en relación con la selectividad alimentaria, la sensibilidad sensorial, las rutinas, la suficiencia nutricional y los síntomas digestivos.',
    'Identificar las barreras para acceder a información, recursos o apoyo adecuado.',
    'Recoger las necesidades y propuestas de las propias familias y personas cuidadoras.',
    'Elaborar materiales y desarrollar una primera actividad educativa a partir de las prioridades identificadas y de la evidencia científica.',
    'Valorar la comprensión, la accesibilidad y la utilidad percibida de los materiales y de la actividad educativa.',
  ],
  phases: [
    {
      step: 1,
      title: 'Preparación',
      shortDesc:
        'Definir la participación, preparar las herramientas y revisar la accesibilidad y la protección de datos.',
      fullDesc:
        'Definición de la participación y de las herramientas de recogida de información, revisión de su accesibilidad y de la protección de los datos, y búsqueda de posibles colaboraciones.',
    },
    {
      step: 2,
      title: 'Identificación de necesidades',
      shortDesc:
        'Recoger y analizar las experiencias, necesidades y propuestas de las familias participantes.',
      fullDesc:
        'Recogida y análisis de las experiencias, preocupaciones y propuestas de las familias participantes para establecer las prioridades educativas del piloto.',
    },
    {
      step: 3,
      title: 'Elaboración y revisión de materiales',
      shortDesc:
        'Preparar contenidos basados en la evidencia científica y revisar su claridad y accesibilidad.',
      fullDesc:
        'Preparación de contenidos basados en la evidencia científica y en guías oficiales, atendiendo a las prioridades identificadas y revisando su claridad y accesibilidad.',
    },
    {
      step: 4,
      title: 'Desarrollo de la actividad educativa',
      shortDesc:
        'Realizar una primera actividad con contenidos generales y aplicables a la vida cotidiana.',
      fullDesc:
        'Realización de una primera actividad con contenidos generales, comprensibles y aplicables a la vida cotidiana.',
    },
    {
      step: 5,
      title: 'Evaluación y revisión',
      shortDesc:
        'Valorar la comprensión, accesibilidad y utilidad percibida, e identificar mejoras y recursos necesarios para su continuidad.',
      fullDesc:
        'Recogida de las valoraciones de las personas participantes e identificación de los ajustes necesarios antes de plantear la continuidad o ampliación del proyecto.',
    },
  ],
  evaluation:
    'La evaluación se centrará en la comprensión de los contenidos, la accesibilidad de los materiales y de la actividad, su utilidad percibida y su correspondencia con las prioridades expresadas por las familias. Se recogerán esas valoraciones mediante un breve cuestionario al finalizar la actividad y un espacio para comentarios y propuestas de mejora. También se revisarán las dificultades de organización y los recursos necesarios para valorar la viabilidad de futuras actuaciones. Esta primera evaluación no permitirá atribuir al proyecto mejoras en el estado nutricional o en la salud de los menores.',
  expectedResults:
    'Se espera obtener una identificación inicial de las prioridades de las familias participantes, materiales educativos ajustados a las necesidades detectadas y una primera valoración de la actividad desarrollada. Los resultados podrán orientar futuros proyectos y el desarrollo de recursos adaptados relacionados con alimentación, accesibilidad e inclusión.',
  natureAndLimits:
    'El proyecto tendrá carácter educativo, preventivo e informativo. No realizará diagnósticos, tratamientos ni prescripción de dietas, suplementos o pruebas, y no sustituirá la atención individualizada de los profesionales sanitarios. Cuando una situación requiera valoración clínica, se orientará hacia los servicios y profesionales correspondientes.',
};

export interface MembershipCategoryItem {
  id: string;
  title: string;
  description: string;
  votingRights: string;
}

export const MEMBERSHIP_CATEGORIES: MembershipCategoryItem[] = [
  {
    id: 'promotores',
    title: 'Socios/as promotores/as o fundadores/as',
    description:
      'Personas que participaron en el acto de constitución de la asociación.',
    votingRights: 'Plena participación en la Asamblea General y órganos de gobierno.',
  },
  {
    id: 'numero',
    title: 'Socios/as de número u ordinarios/as',
    description:
      'Personas que ingresan después de la constitución y participan plenamente en la vida asociativa, con voz y voto en la Asamblea General y posibilidad de ser elegidas para los órganos de gobierno y representación, conforme a los requisitos estatutarios.',
    votingRights: 'Con voz y voto en la Asamblea General y elegibles para la Junta Directiva.',
  },
  {
    id: 'colaboradores',
    title: 'Socios/as colaboradores/as o adheridos/as',
    description:
      'Personas que contribuyen mediante apoyos económicos, profesionales o voluntarios. Tienen voz, pero no voto en la Asamblea General y no pueden formar parte de la Junta Directiva, conforme a los estatutos.',
    votingRights: 'Con voz en la Asamblea General (sin voto ni pertenencia a Junta Directiva).',
  },
  {
    id: 'honor',
    title: 'Socios/as de honor',
    description:
      'Personas que reciben esta distinción por su prestigio o por haber contribuido de modo relevante a la dignificación y desarrollo de la asociación. Su nombramiento corresponde a la Junta Directiva y debe ser ratificado por la primera Asamblea General que se celebre.',
    votingRights: 'Distinción honorífica otorgada por la Junta Directiva y ratificada en Asamblea.',
  },
];

export const COLLABORATION_WAYS = [
  {
    number: '6.2',
    id: 'voluntariado',
    title: 'Voluntariado',
    description:
      'NutriDiversa podrá contar con personas voluntarias que quieran colaborar en actividades, proyectos, sensibilización, organización o apoyo a la entidad, de acuerdo con las necesidades de cada iniciativa y la normativa aplicable.',
  },
  {
    number: '6.3',
    id: 'colaboracion-profesional',
    title: 'Colaboración profesional',
    description:
      'Queremos establecer colaboraciones con profesionales de los ámbitos de la nutrición, la salud, la educación, la discapacidad y el ámbito social que puedan aportar conocimiento y experiencia a los proyectos de la asociación.',
  },
  {
    number: '6.4',
    id: 'entidades-instituciones',
    title: 'Entidades e instituciones',
    description:
      'Buscamos establecer colaboraciones con asociaciones y otras entidades sociales, universidades, centros de investigación, instituciones sanitarias, administraciones públicas y otras organizaciones para compartir conocimientos y recursos, así como desarrollar iniciativas conjuntas. Para preparar el primer proyecto piloto, buscamos colaboración para contactar con familias interesadas, revisar los contenidos y su accesibilidad y facilitar espacios para la actividad educativa.',
  },
  {
    number: '6.5',
    id: 'empresas-apoyo',
    title: 'Empresas y otras formas de apoyo',
    description:
      'Las empresas y otras organizaciones podrán colaborar mediante apoyo económico, material, técnico, cesión de espacios u otras fórmulas compatibles con los fines, la independencia y los valores de NutriDiversa.',
  },
];

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: 'Inmaculada Checa Lorente',
    role: 'Presidencia',
    duty: 'Representación legal e institucional de la asociación, dirección de la Junta Directiva y coordinación general.',
    bio: 'Impulsora de NutriDiversa comprometida con los derechos de las personas con discapacidad, la escucha a las familias y la promoción de la salud desde un enfoque de nutrición inclusiva.',
    easyReadingBio:
      'Inmaculada ocupa la Presidencia de la Junta Directiva y representa a la asociación.',
  },
  {
    name: 'Silvia Andrea Costa Méndez',
    role: 'Secretaría',
    duty: 'Custodia documental, actas de la Asamblea General y de la Junta Directiva, registro de personas asociadas y gobernanza.',
    bio: 'Encargada de la gestión documental y estatutaria de la entidad, velando por la transparencia, la participación asociativa y la protección de datos.',
    easyReadingBio:
      'Silvia ocupa la Secretaría. Se encarga de las actas, las solicitudes de socios y los documentos oficiales.',
  },
  {
    name: 'César Hernández Moreno',
    role: 'Tesorería',
    duty: 'Gestión económica, control de recursos disponibles, transparencia en la financiación y cumplimiento contable.',
    bio: 'Responsable de la sostenibilidad y administración transparente de los recursos destinados a los proyectos educativos y comunitarios de la asociación.',
    easyReadingBio:
      'César ocupa la Tesorería. Cuida los recursos de la asociación con total transparencia.',
  },
  {
    name: 'Almudena Gómez de Cadiñanos Sastre',
    role: 'Vocalía 1',
    duty: 'Impulso de líneas de actuación, escucha activa a familias y trabajo en red con entidades y colectivos.',
    bio: 'Colabora en la detección de necesidades de los colectivos, el contacto con familias y asociaciones y el diseño participativo de iniciativas.',
    easyReadingBio:
      'Almudena es la Vocalía 1 y colabora en el contacto con familias, asociaciones y proyectos.',
  },
  {
    name: 'Victoria Muñoz Bañón',
    role: 'Vocalía 2',
    duty: 'Desarrollo de contenidos de educación alimentaria y nutricional inclusiva, revisión de claridad y accesibilidad.',
    bio: 'Participa en la preparación de materiales informativos y recursos prácticos basados en la evidencia científica, comprensibles y aplicables a la vida cotidiana.',
    easyReadingBio:
      'Victoria es la Vocalía 2 y ayuda a preparar materiales claros y actividades educativas.',
  },
];

export const OFFICIAL_DOCUMENTS: OfficialDocument[] = [
  {
    id: 'dossier-institucional-2026',
    title: 'Dossier de Presentación Institucional de la Asociación NutriDiversa (Alicante, 2026)',
    category: 'Certificados',
    date: 'Alicante, 2026',
    csvCode: 'Documento Oficial · 16 páginas (PDF)',
    fileSize: 'PDF Oficial Descargable',
    summary:
      'Dossier institucional completo: Quiénes somos, Misión, visión y valores, Objetivos, Líneas de actuación, Proyecto piloto inicial (alimentación y autismo en Alicante), Cómo participar o colaborar, Organización y Naturaleza de las actividades.',
    easyReadingSummary:
      'El documento de presentación de NutriDiversa que explica quiénes somos, nuestros valores y el proyecto piloto sobre alimentación y autismo en Alicante.',
    legalBasis: 'Aprobado por la Junta Directiva de la Asociación NutriDiversa.',
  },
  {
    id: 'cert-interior-632919',
    title: 'Resolución de Inscripción en el Registro Nacional de Asociaciones',
    category: 'Certificados',
    date: 'Registro Estatal Vigente',
    csvCode: 'RNA Nº Nacional 632919 · Sección 1ª · Grupo 1',
    fileSize: 'Certificado Oficial',
    summary:
      'Acreditación oficial de inscripción en el Registro Nacional de Asociaciones (Ministerio del Interior) como asociación sin ánimo de lucro de ámbito estatal (Clasificación 426: Promoción de la Salud).',
    easyReadingSummary:
      'Documento oficial del Ministerio del Interior que acredita que NutriDiversa es una asociación registrada de ámbito estatal.',
    legalBasis: 'Ley Orgánica 1/2002 reguladora del Derecho de Asociación.',
  },
  {
    id: 'estatutos-oficiales',
    title: 'Estatutos Oficiales de la Asociación NutriDiversa',
    category: 'Estatutos',
    date: 'Acto de Constitución',
    csvCode: 'Estatutos Vigentes · Ámbito Estatal',
    fileSize: 'Texto Estatutario',
    summary:
      'Normativa interna que regula los fines de la asociación, las clases de personas asociadas (promotoras, de número, colaboradoras y de honor), los órganos de gobierno (Asamblea General y Junta Directiva) y el régimen de transparencia.',
    easyReadingSummary:
      'Las normas de funcionamiento de NutriDiversa: cómo nos organizamos y cómo participar como persona asociada.',
    legalBasis: 'Estatutos inscritos en el Registro Nacional de Asociaciones.',
  },
  {
    id: 'marco-derechos-edad2020',
    title: 'Marco de Derechos: Art. 28 Convención ONU y Encuesta EDAD 2020 (INE)',
    category: 'Memorias',
    date: 'Referencias Oficiales del Dosier',
    csvCode: 'BOE 21/04/2008 · INE EDAD 2020',
    fileSize: 'Fuentes Institucionales',
    summary:
      'Fundamentación social recogida en el dosier: el artículo 28 de la Convención sobre los Derechos de las Personas con Discapacidad reconoce el derecho a una alimentación adecuada, y la encuesta EDAD 2020 del INE refleja 4,32 millones de personas con discapacidad en España.',
    easyReadingSummary:
      'Datos oficiales sobre los derechos de las personas con discapacidad a una alimentación adecuada en España.',
    legalBasis: 'Convención ONU (BOE 21/04/2008) y Estrategia Española sobre Discapacidad 2022–2030.',
  },
];

export const GUIDES: GuideResource[] = [
  {
    id: 'recurso-apoyo-visual-comida',
    title: 'Lámina de Apoyo Visual: "Durante la comida"',
    subtitle: 'Ejemplo ilustrativo de lenguaje claro y apoyos visuales del Dossier Institucional',
    pages: 1,
    format: 'Lenguaje Claro y Apoyos Visuales',
    topics: ['Me gusta', 'No me gusta', 'Necesito ayuda', 'Necesito una pausa'],
    description:
      'Tablero comunicativo diseñado con lenguaje claro y apoyos visuales para facilitar que la persona pueda expresar o señalar sus preferencias y necesidades durante el momento de la comida ("Me gusta", "No me gusta", "Necesito ayuda", "Necesito una pausa").',
    easyReadingDescription:
      'Una lámina con 4 dibujos claros para señalar durante la comida si algo te gusta, no te gusta, necesitas ayuda o necesitas una pausa.',
    keyPoints: [
      'Facilita la participación de las personas en las decisiones relacionadas con su alimentación.',
      'Permite comunicar preferencias ("Me gusta" / "No me gusta") de forma oral o señalando.',
      'Ofrece opciones de autorregulación y apoyo ("Necesito ayuda" / "Necesito una pausa").',
      'Se revisará su comprensión y utilidad con personas de los colectivos a los que se dirija.',
    ],
    pictograms: ['🙂 Me gusta', '😐 No me gusta', '💬 Necesito ayuda', '⏸️ Necesito una pausa'],
  },
  {
    id: 'materiales-piloto-autismo',
    title: 'Materiales del Proyecto Piloto: Alimentación y Autismo (6–12 años)',
    subtitle: 'Recursos prácticos basados en las prioridades de las familias en Alicante',
    pages: 16,
    format: 'Guías Breves y Fichas Informativas',
    topics: [
      'Selectividad y variedad alimentaria',
      'Sensibilidad a texturas, olores y sabores',
      'Rutinas en las comidas',
      'Suficiencia nutricional y cuándo consultar',
    ],
    description:
      'Materiales informativos y educativos en elaboración a partir de la recogida participativa de experiencias de madres, padres, tutores y personas cuidadoras de menores de 6 a 12 años con autismo o en valoración en la provincia de Alicante.',
    easyReadingDescription:
      'Guías prácticas pensadas junto a las familias de niñas y niños con autismo de 6 a 12 años para ayudar con los olores, las texturas y las rutinas en la mesa.',
    keyPoints: [
      'Orientación sobre selectividad alimentaria y sensibilidad sensorial (texturas, olores, sabores o presentaciones).',
      'Pautas prácticas para las rutinas cotidianas y el momento de las comidas en familia.',
      'Información comprensible sobre suficiencia nutricional y síntomas digestivos.',
      'Criterios claros sobre cuándo consultar a profesionales sanitarios.',
    ],
    pictograms: ['📋 Escucha a familias', '🍽️ Rutinas en la mesa', '🧩 Apoyo sensorial', '🩺 Orientación sanitaria'],
  },
  {
    id: 'guias-nutricion-inclusiva',
    title: 'Guías Breves de Educación Alimentaria y Nutricional Inclusiva',
    subtitle: 'Recursos comprensibles y aplicables a la vida cotidiana para personas con discapacidad y cuidadoras',
    pages: 24,
    format: 'Lenguaje Claro y Lectura Fácil (en colaboración especializada)',
    topics: [
      'Autonomía en la cocina cotidiana',
      'Adaptación a dificultades funcionales o sensoriales',
      'Bienestar de familias y personas cuidadoras',
      'Evidencia científica accesible',
    ],
    description:
      'Elaboración progresiva de guías breves, fichas informativas y explicaciones con apoyos visuales orientadas a reducir las barreras que dificultan una alimentación adecuada, teniendo en cuenta también el descanso y bienestar de quienes cuidan.',
    easyReadingDescription:
      'Fichas sencillas con consejos prácticos para cocinar y comer con más autonomía en casa, cuidando también a las familias.',
    keyPoints: [
      'Contenidos basados en la evidencia científica y en guías oficiales.',
      'Respeto a los gustos, preferencias, capacidades y ritmos de cada persona.',
      'Atención a las exigencias del cuidado en situaciones de dependencia.',
      'Validación con personas de los colectivos destinatarios y entidades especializadas en lectura fácil.',
    ],
    pictograms: ['🌱 Nutrición inclusiva', '🤝 Apoyo al cuidador', '📖 Lenguaje claro', '🔬 Evidencia científica'],
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'proyecto-piloto-autismo-alicante-2026',
    title: 'Proyecto piloto inicial: alimentación y autismo en la provincia de Alicante (6 a 12 años)',
    slug: 'proyecto-piloto-alimentacion-autismo-alicante',
    category: 'Proyectos y Pilotos',
    date: 'Marzo de 2026',
    readTime: '4 minutos',
    author: 'Asociación NutriDiversa · Alicante',
    standardContent: [
      'NutriDiversa inicia su actividad con un proyecto piloto sobre alimentación y autismo en la provincia de Alicante, dirigido a madres, padres, tutores y personas cuidadoras de menores de entre 6 y 12 años, ambos incluidos, con autismo o en proceso de valoración por posible autismo.',
      'Las dificultades alimentarias en el autismo pueden estar relacionadas con factores sensoriales, dificultades ante los cambios, ansiedad, comunicación, aprendizaje, habilidades orales, experiencias previas o problemas de salud. Por ello, el proyecto parte de una encuesta y espacios de escucha a las familias para conocer sus prioridades reales.',
      'El proyecto se estructura en cinco fases: Preparación, Identificación de necesidades, Elaboración y revisión de materiales, Desarrollo de la primera actividad educativa y Evaluación y revisión. Tiene carácter estrictamente educativo, preventivo e informativo, sin sustituir la atención individualizada de los profesionales sanitarios.',
    ],
    easyReadingContent: [
      'NutriDiversa pone en marcha su primer proyecto piloto en la provincia de Alicante.',
      'Está dirigido a familias y personas que cuidan a niñas y niños de 6 a 12 años con autismo.',
      'Primero escucharemos sus dudas sobre texturas, sabores y rutinas para crear materiales útiles y un taller educativo.',
    ],
    audioText:
      'Proyecto piloto inicial sobre alimentación y autismo en la provincia de Alicante. Dirigido a familias y personas cuidadoras de menores de entre 6 y 12 años con autismo o en proceso de valoración.',
  },
  {
    id: 'que-entendemos-por-nutricion-inclusiva',
    title: '¿Qué entendemos por nutrición inclusiva y qué realidad social queremos atender?',
    slug: 'que-entendemos-por-nutricion-inclusiva',
    category: 'Nutrición Inclusiva y Derechos',
    date: 'Febrero de 2026',
    readTime: '4 minutos',
    author: 'Junta Directiva de NutriDiversa',
    standardContent: [
      'La Convención sobre los Derechos de las Personas con Discapacidad reconoce, en su artículo 28, el derecho de las personas con discapacidad y sus familias a un nivel de vida adecuado, que incluye una alimentación adecuada. Asimismo, la Estrategia Española sobre Discapacidad 2022–2030 ofrece un marco para avanzar en la efectividad de estos derechos.',
      'Según la Encuesta de Discapacidad, Autonomía Personal y Situaciones de Dependencia (EDAD 2020) del Instituto Nacional de Estadística, 4,32 millones de personas de seis o más años residentes en hogares en España declararon tener alguna discapacidad.',
      'En NutriDiversa entendemos la nutrición inclusiva como un enfoque de promoción de la salud que busca reducir las barreras que dificultan una alimentación adecuada y el acceso a información, recursos y actividades educativas, respetando los gustos, preferencias, capacidades y dignidad de cada persona y apoyando también a sus familias y personas cuidadoras.',
    ],
    easyReadingContent: [
      'En España hay más de 4 millones de personas con discapacidad.',
      'Tener una alimentación adecuada es un derecho reconocido por las leyes internacionales.',
      'La nutrición inclusiva busca eliminar barreras para que todas las personas puedan comer bien y participar en las decisiones sobre su comida.',
    ],
    audioText:
      'Artículo sobre qué entendemos por nutrición inclusiva. Basado en el artículo 28 de la Convención sobre los Derechos de las Personas con Discapacidad y los datos de la encuesta EDAD 2020 del INE.',
  },
  {
    id: 'rigor-evidencia-y-limites-actuacion',
    title: 'Rigor científico, transparencia y naturaleza educativa de nuestras actividades',
    slug: 'rigor-cientifico-transparencia-limites',
    category: 'Evidencia Científica',
    date: 'Enero de 2026',
    readTime: '3 minutos',
    author: 'Equipo de NutriDiversa',
    standardContent: [
      'Como asociación de reciente creación impulsada por personas graduadas en Nutrición Humana y Dietética, personas con discapacidad y colaboradores del ámbito educativo, uno de nuestros valores fundamentales es el rigor y la responsabilidad.',
      'Ofrecemos información basada en la evidencia científica, diferenciando con claridad entre lo que está respaldado, lo que es incierto y lo que requiere valoración profesional especializada.',
      'En esta fase inicial, nuestras iniciativas son de carácter educativo, informativo, divulgativo y comunitario. No sustituyen la valoración, el diagnóstico, el tratamiento ni el seguimiento sanitario que pueda necesitar una persona; cuando una situación exceda nuestro alcance, orientaremos siempre hacia los servicios o profesionales correspondientes.',
    ],
    easyReadingContent: [
      'En NutriDiversa ofrecemos información segura basada en la ciencia.',
      'Nuestras actividades son educativas e informativas.',
      'No hacemos diagnósticos médicos ni ponemos dietas personales: cuando hace falta atención médica, orientamos hacia los profesionales sanitarios.',
    ],
    audioText:
      'Rigor científico, transparencia y naturaleza de las actividades de NutriDiversa. Nuestras iniciativas son educativas, informativas y comunitarias basadas en la evidencia científica.',
  },
];

export const BUDGET_BREAKDOWN_2024 = [
  {
    concept: 'Educación alimentaria y nutricional inclusiva y Proyecto Piloto (Alicante)',
    percentage: 45,
    amount: 'Prioridad 1',
    detail: 'Identificación de necesidades, materiales adaptados y primera actividad educativa en autismo (6-12 años)',
  },
  {
    concept: 'Información y recursos accesibles (Lenguaje claro y apoyos visuales)',
    percentage: 25,
    amount: 'Prioridad 2',
    detail: 'Elaboración progresiva de guías breves, fichas informativas y validación en lectura fácil',
  },
  {
    concept: 'Escucha activa, sensibilización y trabajo en red',
    percentage: 20,
    amount: 'Prioridad 3',
    detail: 'Encuestas a familias, espacios de participación y alianzas con asociaciones, universidades e instituciones',
  },
  {
    concept: 'Gestión asociativa, protección de datos y transparencia',
    percentage: 10,
    amount: 'Base operativa',
    detail: 'Cumplimiento normativo, accesibilidad universal y comunicación clara de objetivos y límites',
  },
];
