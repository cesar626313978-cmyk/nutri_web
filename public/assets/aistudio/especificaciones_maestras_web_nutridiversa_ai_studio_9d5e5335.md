# ESPECIFICACIONES MAESTRAS Y PROMPT DE CONSTRUCCIÓN WEB: NUTRIDIVERSA (www.nutridiversa.org)

## 1. ROL E INSTRUCCIÓN DIRECTA PARA LA IA DESARROLLADORA

Actúa como un Arquitecto de Software Frontend Senior, Diseñador UI/UX especialista en Accesibilidad Cognitiva y Web (WCAG 2.2 AA), y Especialista en Cumplimiento Legal Digital (RGPD, LOPDGDD, LSSI-CE y Ley Orgánica 1/2002 de Asociaciones).

Tu objetivo es reconstruir de forma íntegra la aplicación web de la **Asociación de Nutrición en la Discapacidad - NutriDiversa (`www.nutridiversa.org`)**. La web debe superar al 100 % la auditoría jurídica, técnica, de accesibilidad y de marketing, integrando la visión estratégica de la Presidencia (identidad nacional e inclusiva en primer plano seguida inmediatamente por el proyecto piloto de Alicante) y reproduciendo fielmente la estética limpia, cálida y editorial de los bocetos aprobados.

## 2. REGLAS CRÍTICAS DE CUMPLIMIENTO Y PROHIBICIONES ESTRICTAS (BLOQUEANTES)

Bajo ningún concepto debes incluir los siguientes elementos detectados en la versión anterior:

1. **PROHIBIDO recrear certificados oficiales:** Elimina cualquier modal o botón llamado «Ver Certificado Ministerial Oficial», supuestos códigos CSV inventados, membretes del Gobierno de España o afirmaciones de «Firma electrónica válida con sello de tiempo ministerial».

2. **PROHIBIDO exponer herramientas de administración o pruebas:** Elimina de la interfaz pública cualquier botón «usuario», «Panel CMS», «Ir al Panel CMS», «Simular Acceso como Persona Asociada» o «Vista Previa».

3. **PROHIBIDO afirmar «WCAG 2.2 AAA», «UNE-EN 301549 / AAA» o «Real Decreto 1112/2018»:** No declares conformidad AAA ni cites el RD 1112/2018 (aplicable al sector público). Sustitúyelo por un compromiso voluntario de accesibilidad y el botón desplegable «Opciones de lectura».

4. **PROHIBIDO usar «Lectura Fácil» sin validación:** Sustituye esa etiqueta por **«Resumen sencillo»** dentro del menú de opciones de lectura.

5. **PROHIBIDO citar el «Art. 42 RGPD» para datos de salud:** Los datos se regulan en los artículos 6, 9 y 13 del RGPD y en la LOPDGDD.

6. **PROHIBIDO recoger datos de salud en formularios generales ni premarcar casillas:** Ningún checkbox de privacidad puede estar marcado por defecto (`checked=false` obligatorio). Queda prohibido pedir o invitar a enviar diagnósticos o informes clínicos en la web pública.

7. **PROHIBIDO prometer desgravaciones fiscales (Ley 49/2002):** No menciones certificados de deducción en IRPF o Impuesto de Sociedades. Indica únicamente que se emitirá un «justificante de aportación o pago de cuota».

8. **PROHIBIDO atribuir contenidos a un «Comité Técnico Asesor» no identificado** ni dejar secciones vacías sin indicar qué está en preparación ni enlazar archivos PDF con nombres como `borrador_final`.

## 3. SISTEMA DE DISEÑO, PALETA DE COLORES Y TIPOGRAFÍA (ESTÉTICA DE LOS BOCETOS)

### 3.1. Paleta de Colores Oficial (Tranquila, Cálida y Accesible)

Elimina las barras negras técnicas, el verde neón, el amarillo chillón y el morado. Utiliza exclusivamente estas variables CSS:

* **Fondo general cálido (Crema suave):** `#FFFDF8` (y `#F7F3EB` para contraste suave en cabeceras/secciones).

* **Fondo de tarjetas y bloques limpios:** `#FFFFFF` con borde sutil `#E6E2D8`.

* **Verde principal institucional (Confianza y salud):** `#176B50` (botones principales, iconos numerados, enlaces activos).

* **Verde profundo pizarra (Bloques destacados y Footer):** `#1D3532` / `#13382C` (fondo del bloque «Cuéntanos qué necesitas» y pie de página).

* **Verde suave de apoyo (Píldoras y fondos secundarios):** `#EAF5EF`.

* **Naranja terracota (Acentos, etiquetas superiores y borde superior de tarjeta destacada):** `#D96820` / `#C85A17` (contraste AA garantizado).

* **Texto principal (Carbón oscuro, nunca negro puro):** `#20282E`.

* **Texto secundario (Gris pizarra):** `#5A6670`.

*(Nota: El negro `#000000` y el amarillo `#FFD700` se reservan única y exclusivamente para cuando la persona usuaria active el modo «Alto contraste» desde el desplegable de Opciones de lectura).*

### 3.2. Tipografía y Legibilidad

* **Titulares principales (H1, H2 de sección):** Tipografía **Serif editorial elegante** (`Source Serif 4`, `Merriweather` o `Playfair Display`), peso 600/700, interlineado `1.15`, color `#1D3532`.

* **Cuerpo de texto, navegación, etiquetas, botones y formularios:** Tipografía **Sans-serif de alta legibilidad** (`Atkinson Hyperlegible` importada de Google Fonts, con fallback a `Inter` o `system-ui`), tamaño base `16px` a `18px`, interlineado `1.6`, ancho máximo de línea de `65ch`.

### 3.3. Reglas de Responsividad y Accesibilidad Técnica (WCAG 2.2 AA)

* **Reflujo (WCAG 1.4.10):** A `320px` y `375px` de ancho móvil no puede existir ningún desplazamiento horizontal (`overflow-x: hidden` y contenedores flexibles con `max-width: 100%`).

* **Tamaño de objetivo táctil (WCAG 2.5.8):** Todos los botones, enlaces del menú y enlaces legales del pie deben medir como mínimo `44px × 44px` en móvil (o un mínimo absoluto de `24px × 24px` con espaciado amplio).

* **Primera pantalla móvil (Above the fold):** La cabecera en móvil no debe superar los `72px` de alto para que el titular principal y los botones de acción aparezcan inmediatamente sin hacer scroll.

## 4. ARQUITECTURA DE NAVEGACIÓN, RUTAS Y SEO TÉCNICO

Aunque la aplicación funcione en un entorno SPA/React, debe implementar enrutamiento real con `History API` (o rutas limpias diferenciadas) que actualicen dinámicamente el `document.title`, la `<meta name="description">` y la URL visible al navegar, permitiendo usar el botón «Atrás» del navegador y compartir enlaces directos:

 1. `/` — **Inicio**

    * *Title:* `NutriDiversa | Alimentación y nutrición inclusiva para personas con discapacidad y familias`

    * *Meta Description:* `Asociación sin ánimo de lucro de ámbito nacional con sede en Alicante. Educación alimentaria accesible e iniciativas para familias, discapacidad y autismo.`

 2. `/proyecto` — **El proyecto (Piloto Alicante)**

    * *Title:* `Proyecto piloto de alimentación y autismo en Alicante | NutriDiversa`

    * *Meta Description:* `Iniciativa educativa en preparación para familias de menores autistas de 6 a 12 años en Alicante. Abordamos selectividad, texturas y rutinas.`

 3. `/guias` — **Guías y recursos**

    * *Title:* `Guías y educación alimentaria accesible | NutriDiversa`

    * *Meta Description:* `Recursos prácticos y artículos divulgativos sobre selectividad alimentaria, texturas, comunicación en las comidas y nutrición inclusiva.`

 4. `/asociacion` — **La asociación (Quiénes somos y Colabora)**

    * *Title:* `La asociación: misión, ámbitos de actuación y cómo asociarse | NutriDiversa`

    * *Meta Description:* `Conoce la misión de NutriDiversa, nuestros ámbitos de actuación en discapacidad, enfermedades raras y dependencia, y cómo formar parte.`

 5. `/contacto` — **Contacto segmentado**

    * *Title:* `Contacto para familias, entidades y profesionales | NutriDiversa`

    * *Meta Description:* `Canales de contacto diferenciados para familias interesadas en el proyecto piloto, entidades colaboradoras, voluntariado y personas asociadas.`

 6. `/transparencia` — **Transparencia y documentación oficial**

    * *Title:* `Transparencia, Estatutos y datos registrales | NutriDiversa`

 7. `/privacidad` — **Política de privacidad**

 8. `/aviso-legal` — **Aviso legal**

 9. `/cookies` — **Política de cookies**

10. `/accesibilidad` — **Declaración de accesibilidad**

## 5. ESTRUCTURA GLOBAL: CABECERA (HEADER) Y PIE DE PÁGINA (FOOTER)

### 5.1. Cabecera (Header) de una sola línea (Fiel al boceto `23.26.57`)

* **Izquierda:** Logotipo limpio con icono de brote/planta en verde `#176B50` + texto **Nutri** (en `#1D3532`) **Diversa** (en `#D96820`). Sin números registrales ni textos largos debajo.

* **Centro (Enlaces de navegación semánticos `<a href="...">`):**

  * `El proyecto` (`/proyecto`)

  * `Guías` (`/guias`)

  * `La asociación` (`/asociacion`)

  * `Contacto` (`/contacto`)

* **Derecha:**

  * Botón redondeado con borde sutil: **`Opciones de lectura`** (con icono de accesibilidad). Al hacer clic, despliega un panel flotante limpio (accesible por teclado con `aria-expanded`) que incluye:

    1. **Tamaño de texto:** Normal (`100%`) / Grande (`115%`) / Muy grande (`130%`).

    2. **Contraste:** Diseño cálido predeterminado / Modo alto contraste (fondo negro, texto blanco/amarillo).

    3. **Resumen sencillo:** Interruptor que muestra un bloque de explicación cotidiana al inicio de cada página (sin prometer pictogramas inexistentes).

    4. **Lectura en voz alta:** Botón para leer el contenido principal de la sección activa mediante `window.speechSynthesis`.

### 5.2. Pie de Página (Footer) minimalista (Fiel a los bocetos `23.25.31` y `23.28.32`)

* **Bloque único limpio y tranquilo:**

  * **Izquierda:** `NutriDiversa · Asociación de ámbito estatal · Sede en Alicante · RNA 632919` y enlace directo `info@nutridiversa.org`.

  * **Derecha (Enlaces con área táctil mínima de 44px de alto):**

    * `Transparencia` (`/transparencia`)

    * `Privacidad` (`/privacidad`)

    * `Aviso legal` (`/aviso-legal`)

    * `Cookies` (`/cookies`)

    * `Accesibilidad` (`/accesibilidad`)

## 6. CONTENIDO Y MAQUETACIÓN DETALLADA DE LA PORTADA (`/`)

La portada combina la **visión institucional nacional de la Presidenta** con la **conversión inmediata del proyecto piloto de Alicante**, ordenada exactamente en estos 6 bloques:

### BLOQUE 1: HERO ASIMÉTRICO A DOS COLUMNAS (Identidad Nacional + Proyecto Piloto en Alicante)

*(Reproduce exactamente la composición visual del boceto `23.26.57`)*

* **Fondo de sección:** Crema cálido `#F7F3EB`.

* **Columna Izquierda (60% del ancho - Identidad y Misión Nacional):**

  * **Antetítulo en mayúsculas (`#D96820`, espaciado amplio, tamaño `0.85rem`, negrita):**
    `NUTRICIÓN INCLUSIVA · INFORMACIÓN · PARTICIPACIÓN`

  * **Titular H1 (Serif, grande `3rem`, color `#1D3532`):**
    `Una alimentación más comprensible y accesible para cada familia`

  * **Subtítulo (Sans-serif, `1.15rem`, color `#5A6670`):**
    `Somos una asociación sin ánimo de lucro de ámbito nacional. Escuchamos a personas con discapacidad, enfermedades raras o dependencia y a quienes las cuidan para crear actividades y recursos de educación alimentaria aplicables a la vida cotidiana.`

  * **Dos botones de acción:**

    * Botón primario sólido (`#1D3532`, texto blanco): `Conocer el proyecto piloto` (lleva a `/proyecto` o hace scroll suave al detalle del piloto).

    * Botón secundario con borde (`#1D3532`, fondo transparente): `Cómo colaborar` (lleva a las tarjetas de participación).

* **Columna Derecha (40% del ancho - Tarjeta Blanca Destacada del Piloto en Alicante):**

  * **Estilo de tarjeta:** Fondo blanco `#FFFFFF`, sombra suave, borde superior grueso (`4px solid #D96820`).

  * **Etiqueta superior (`#D96820`, `0.9rem`):** `Proyecto inicial · Alicante` (con píldora de estado: `En fase de preparación`).

  * **Título de tarjeta H2 (Serif, `1.85rem`, `#1D3532`):** `Alimentación y autismo`

  * **Descripción breve:** `Para familias de menores autistas de 6 a 12 años en la provincia de Alicante.`

  * **Lista de 3 situaciones cotidianas reconocibles (con viñetas claras):**

    * `Selectividad y variedad alimentaria`

    * `Texturas, olores y presentación`

    * `Rutinas durante las comidas`

  * **Enlace de llamada a la acción (`#D96820`, negrita, con flecha):** `Quiero participar →` (abre directamente el formulario breve de familias).

### BLOQUE 2: CÓMO FUNCIONARÁ EL PROYECTO PILOTO (4 Pasos Claros)

*(Reproduce exactamente el diseño del boceto `23.25.31`)*

* **Estructura a dos columnas (Título a la izquierda + Cuadrícula 2x2 de tarjetas blancas a la derecha):**

* **Columna Izquierda:**

  * **Antetítulo (`#D96820`):** `CÓMO FUNCIONARÁ`

  * **Título H2 (Serif, `#1D3532`):** `Un proyecto construido con las familias`

  * **Texto:** `La participación inicial es gratuita y se dirige a madres, padres, tutores y personas cuidadoras en Alicante. Nuestro enfoque es participativo y basado en la evidencia científica.`

  * **Aviso de alcance (Etiqueta informativa clara):** `Actividad de educación alimentaria. No realiza diagnósticos, dietas personalizadas ni tratamientos clínicos, y no sustituye la atención sanitaria.`

* **Columna Derecha (Grid 2x2 de tarjetas blancas con círculo verde `#176B50` numerado del 1 al 4):**

  * **1. Escuchamos:** `Recogemos experiencias, dificultades cotidianas y prioridades reales de las familias.`

  * **2. Preparamos:** `Creamos materiales claros, prácticos y accesibles ajustados a sus necesidades.`

  * **3. Compartimos:** `Realizamos una primera actividad educativa orientada a las personas cuidadoras.`

  * **4. Mejoramos:** `Evaluamos la utilidad, comprensión y accesibilidad de los recursos generados.`

### BLOQUE 3: NUESTRO COMPROMISO Y ÁMBITOS DE ACTUACIÓN NACIONAL

*(Integra el punto 2 y 4 de la propuesta de la Presidenta para consolidar la visión estatal a medio y largo plazo)*

* **Antetítulo (`#D96820`):** `VISIÓN NACIONAL Y COMPROMISO`

* **Título H2 (Serif, `#1D3532`):** `Más allá de un proyecto: nuestros ámbitos de actuación`

* **Introducción breve:** `Aunque nuestra primera iniciativa nace en Alicante centrada en el autismo, NutriDiversa tiene vocación estatal para impulsar proyectos de educación alimentaria en distintos colectivos:`

* **Grid de 4 tarjetas limpias (icono lineal + título + frase breve):**

  1. **Trastorno del Espectro del Autismo (TEA):** `Apoyo ante la hiper o hiporreactividad sensorial, selectividad alimentaria y estructuración de rutinas en la mesa.`

  2. **Discapacidad intelectual, física y sensorial:** `Adaptación de guías nutricionales y entornos de comida para fomentar la autonomía y prevenir problemas asociados.`

  3. **Enfermedades raras y situaciones de dependencia:** `Orientación educativa cotidiana para familias y personas cuidadoras que afrontan necesidades alimentarias específicas.`

  4. **Apoyo y respiro informativo a familias:** `Traducción de la evidencia científica a materiales comprensibles, prácticos y libres de tecnicismos.`

### BLOQUE 4: RECORRIDOS POR PERFIL (Tarjetas de Segmentación)

*(Reproduce exactamente las dos tarjetas inferiores del boceto `23.25.31`)*

* **Grid de 2 tarjetas grandes con borde suave y fondo blanco:**

  * **Tarjeta 1 (Icono de familia):**

    * **Título:** `Soy familiar`

    * **Texto:** `Quiero conocer el proyecto de alimentación y autismo en Alicante y recibir información cuando se abra la participación.`

    * **Enlace/Botón (`#176B50`, negrita):** `Avisadme cuando empiece →` (abre el formulario de Familias en `/contacto?perfil=familia`).

  * **Tarjeta 2 (Icono de entidad/edificio):**

    * **Título:** `Soy una entidad o profesional`

    * **Texto:** `Puedo facilitar el contacto con familias, ceder un espacio, revisar la accesibilidad o aportar conocimiento científico y profesional.`

    * **Enlace/Botón (`#176B50`, negrita):** `Proponer una colaboración →` (abre el formulario de Entidades/Profesionales en `/contacto?perfil=entidad`).

### BLOQUE 5: BLOQUE OSCURO DE PARTICIPACIÓN DIRECTA («Cuéntanos qué necesitas»)

*(Reproduce exactamente el bloque oscuro del boceto `23.28.32`)*

* **Contenedor con fondo verde pizarra oscuro `#1D3532` y texto claro:**

* **Columna Izquierda:**

  * **Antetítulo (`#D96820`):** `PARTICIPACIÓN`

  * **Título H2 (Serif, blanco):** `Cuéntanos qué necesitas`

  * **Texto:** `Elige el camino que mejor encaja contigo. Responderemos en un máximo de cinco días laborables.`

* **Columna Derecha (3 botones amplios con borde claro y hover suave):**

  * Botón 1 (50% ancho superior): `Soy familiar`

  * Botón 2 (50% ancho superior): `Soy profesional o entidad`

  * Botón 3 (100% ancho inferior): `Quiero asociarme o escribir un correo`

## 7. CONTENIDO DE LAS PÁGINAS INTERNAS

### 7.1. Página `/proyecto` (Detalle del Proyecto Piloto en Alicante)

* Explica de forma cercana y estructurada todas las preguntas que se hace una familia (según la auditoría):

  * **¿En qué estado se encuentra?** En fase de preparación y diseño participativo en la provincia de Alicante. No se presenta como un servicio clínico ya ejecutado, sino como una primera iniciativa transparente a la que las familias pueden sumarse.

  * **¿Quién puede participar?** Madres, padres, tutores legales y personas cuidadoras de menores en el espectro autista de **6 a 12 años** residentes en la provincia de Alicante. En la fase inicial participan las personas adultas cuidadoras.

  * **¿Tiene algún coste?** La participación para las familias es **100 % gratuita**.

  * **¿Qué haremos exactamente?**

    1. Cuestionario inicial y sesiones de escucha con familias para identificar barreras reales (texturas, olores, selectividad, tiempos de comida).

    2. Elaboración de fichas y materiales prácticos de educación alimentaria (incluyendo apoyos visuales cotidianos como los mostrados en el boceto `23.23.51`: *"Durante la comida: Me gusta / Necesito ayuda / Necesito una pausa"*).

    3. Taller práctico presencial/online para compartir los materiales con las familias participantes.

    4. Evaluación de resultados para mejorar las guías antes de su publicación abierta.

  * **Límites importantes:** NutriDiversa realiza educación alimentaria comunitaria. No emite diagnósticos médicos, no prescribe pautas dietéticas individualizadas ni tratamientos clínicos, y no recoge datos de salud de menores en esta fase informativa.

  * **Formulario rápido integrado al final:** El mismo formulario de preinscripción de familias (Nombre, Correo, Municipio y casilla desmarcada de privacidad).

### 7.2. Página `/guias` (Recursos y Divulgación Basada en la Evidencia)

* Sustituye la antigua sección vacía «Actualidad y Evidencia Científica».

* **Encabezado claro:** `Guías y educación alimentaria accesible`.

* **Aviso de transparencia:** Elimina cualquier mención a un «Comité Técnico Asesor» fantasma. Indica: `Materiales divulgativos elaborados por el equipo de NutriDiversa a partir de literatura científica actualizada. Estos textos tienen carácter exclusivamente educativo e informativo y no sustituyen la consulta con profesionales sanitarios.`

* **Publica las primeras 4 fichas/artículos reales y legibles (expandibles en modal o vista de lectura completa) con autoría institucional, fecha de publicación (Noviembre 2026), fuentes de referencia y límites del contenido:**

  1. **Qué es la selectividad alimentaria en el autismo y cuándo consultar a un profesional sanitario** *(Diferencia entre preferencia selectiva, hiperreactividad sensorial y señales de alerta médica o nutricional).*

  2. **Texturas, olores y presentación de los alimentos: cómo influye el procesamiento sensorial en la mesa** *(Pautas cotidianas para reducir la sobrecarga sensorial en el entorno de la comida).*

  3. **Cómo observar una comida en casa sin convertirla en una situación de estrés** *(Estrategias para rebajar la tensión familiar y anticipar rutinas predecibles).*

  4. **Diferencia entre educación alimentaria comunitaria y tratamiento nutricional clínico** *(Guía clara sobre qué puede aportar una asociación como NutriDiversa y cuándo acudir a pediatría, gastroenterología o dietistas-nutricionistas clínicos).*

* **Próximos recursos en preparación (4 tarjetas marcadas con etiqueta «En preparación - Piloto 2026/2027»):**

  * *Cómo preparar cambios pequeños y progresivos en las rutinas alimentarias.*

  * *Señales digestivas frecuentes que conviene consultar con profesionales sanitarios.*

  * *Cómo adaptar la comunicación durante las comidas mediante apoyos visuales sencillos.*

  * *Guía práctica para asociaciones que quieran organizar un taller de alimentación accesible.*

### 7.3. Página `/asociacion` (Quiénes somos, Junta Directiva y Cómo Asociarse / Colaborar)

* **Historia, Misión y Valores:** Explica el propósito nacional de NutriDiversa como asociación sin ánimo de lucro constituida al amparo de la Ley Orgánica 1/2002, inscrita en el Registro Nacional de Asociaciones (Grupo 1, Sección 1, Número Nacional **632919**), con NIF **G22670707** y sede en Alicante.

* **Equipo y Junta Directiva (Funciones reales y verificables):**

  * **Presidencia:** Inmaculada Concepción Sánchez-Cañete.

  * **Secretaría:** Iván Carabaño (Coordinación administrativa y atención a solicitudes).

  * **Tesorería:** César (Gestión económica, presupuestaria y documental).

  * *(Indicar expresamente que los cargos de la Junta Directiva son gratuitos y carecen de remuneración).*

* **Sección «Hazte Persona Asociada o Colabora» (Cuotas claras y sin ambigüedad fiscal):**

  * **Explicación transparente de cuotas (Corrigiendo el hallazgo de la auditoría):**

    * **Cuota promocional fundacional (altas formalizadas hasta el 31 de diciembre de 2026):** `10 € / año`.

    * **Cuota anual ordinaria (vigente a partir del 1 de enero de 2027):** `30 € / año`.

    * **Aportaciones voluntarias puntuales:** Importe libre destinado íntegramente a financiar los materiales educativos y talleres de la asociación.

  * **Nota fiscal obligatoria (Ley 49/2002):**
    `Información fiscal transparente: NutriDiversa es una asociación sin ánimo de lucro inscrita en el Registro Nacional de Asociaciones. Actualmente se encuentra en su fase inicial de actividad y no cuenta todavía con la declaración de utilidad pública prevista en la Ley 49/2002, por lo que las cuotas y aportaciones no generan derecho a deducción fiscal en el IRPF o Impuesto de Sociedades. Emitimos el correspondiente justificante oficial de pago o aportación.`

## 8. FORMULARIOS ACCESIBLES, INDEPENDIENTES Y CUMPLIMIENTO RGPD (`/contacto`)

En la página `/contacto` (y al pulsar los botones de la portada), implementa un selector por pestañas claras para mostrar **3 formularios independientes**, evitando mezclar públicos:

### Reglas Técnicas Obligatorias para TODOS los Formularios:

1. Cada campo `<input>`, `<select>` o `<textarea>` **DEBE** tener su etiqueta `<label for="id_unico">` permanentemente visible encima del campo (nunca depender solo del `placeholder`) y su atributo `name="..."` correctamente definido.

2. Ningún formulario permite recoger datos de salud. Incluye siempre una caja destacada antes del botón de envío:

   > **Aviso importante de privacidad:** Por favor, **no incluyas diagnósticos médicos, informes clínicos ni datos de salud** tuyos ni de menores en este formulario. NutriDiversa no presta asistencia clínica y este canal es exclusivamente informativo.

3. La casilla de aceptación (`<input type="checkbox" required>`) debe aparecer **SIEMPRE DESMARCADA POR DEFECTO**, ser obligatoria para enviar el formulario y contener enlace directo a `/privacidad`.

4. Al enviar cualquiera de los formularios, muestra en pantalla un mensaje de confirmación real y accesible (`role="status"`):

   > **«Hemos recibido tu solicitud correctamente. La Secretaría de NutriDiversa te responderá en un máximo de cinco días laborables al correo indicado.»**

### FORMULARIO 1: FAMILIAS (Interesadas en el proyecto piloto de Alicante)

* **Campos:**

  1. `Nombre y apellidos` (`name="nombre_familia"`, `type="text"`, obligatorio)

  2. `Correo electrónico` (`name="email_familia"`, `type="email"`, obligatorio)

  3. `Municipio (Provincia de Alicante)` (`name="municipio_familia"`, `type="text"`, obligatorio)

  4. `Comentarios o dudas generales (sin incluir datos médicos ni diagnósticos)` (`name="mensaje_familia"`, `textarea`, opcional)

* **Casilla obligatoria (desmarcada):**
  `[ ] He leído y acepto la Política de Privacidad y consiento el tratamiento de mis datos de contacto para recibir información sobre el proyecto educativo de NutriDiversa.`

* **Botón de envío:** `Quiero que me aviséis cuando se abra la participación`

### FORMULARIO 2: ENTIDADES Y PROFESIONALES (Propuestas de colaboración)

* **Campos:**

  1. `Nombre de la entidad o profesional` (`name="entidad_nombre"`, `type="text"`, obligatorio)

  2. `Persona de contacto` (`name="persona_contacto"`, `type="text"`, obligatorio)

  3. `Correo electrónico` (`name="email_entidad"`, `type="email"`, obligatorio)

  4. `Modalidad de colaboración propuesta` (`name="modalidad_colaboracion"`, `<select>` con `<label>` visible, obligatorio):

     * `Facilitar contacto y difusión entre familias`

     * `Ceder un espacio para actividades educativas`

     * `Revisar accesibilidad cognitiva o documental`

     * `Aportar conocimiento profesional o científico (voluntariado técnico)`

     * `Patrocinio o colaboración de Responsabilidad Social (RSC)`

  5. `Breve descripción de la propuesta` (`name="mensaje_entidad"`, `textarea`, obligatorio)

* **Casilla obligatoria (desmarcada):**
  `[ ] He leído y acepto la Política de Privacidad y consiento el tratamiento de mis datos para gestionar esta propuesta de colaboración.`

* **Botón de envío:** `Proponer una colaboración`

### FORMULARIO 3: SOLICITUD DE ALTA COMO PERSONA ASOCIADA O VOLUNTARIADO

* **Campos:**

  1. `Nombre y apellidos` (`name="nombre_socio"`, `type="text"`, obligatorio)

  2. `DNI / NIE` (`name="dni_socio"`, `type="text"`, obligatorio)

  3. `Correo electrónico` (`name="email_socio"`, `type="email"`, obligatorio)

  4. `Teléfono de contacto` (`name="telefono_socio"`, `type="tel"`, opcional)

  5. `Tipo de solicitud` (`name="tipo_solicitud"`, `<select>` con `<label>` visible, obligatorio):

     * `Alta como Persona Asociada (Cuota promocional fundacional 2026: 10 €/año; a partir del 01/01/2027: 30 €/año)`

     * `Inscripción como Persona Voluntaria (sujeta a firma de acuerdo de incorporación según Ley 45/2015)`

* **Casilla obligatoria (desmarcada):**
  `[ ] He leído y acepto la Política de Privacidad y solicito iniciar el trámite de admisión conforme a los Estatutos de NutriDiversa.`

* **Botón de envío:** `Enviar solicitud de inscripción`

### Primera Capa Informativa de Protección de Datos (Visible justo debajo de los 3 formularios):

| Epígrafe | Información Básica sobre Protección de Datos (Art. 13 RGPD) | 
| ----- | ----- | 
| **Responsable** | Asociación de Nutrición en la Discapacidad (NutriDiversa) · NIF: G22670707 · `info@nutridiversa.org` | 
| **Finalidad** | Atender tu solicitud de información sobre el proyecto piloto, gestionar propuestas de colaboración institucional o tramitar tu solicitud de admisión como persona asociada o voluntaria. **No se recogen ni tratan datos de salud.** | 
| **Legitimación** | Consentimiento de la persona interesada (art. 6.1.a RGPD) al marcar la casilla correspondiente y, en el caso de solicitud de alta asociativa o voluntariado, aplicación de medidas precontractuales/estatutarias (art. 6.1.b RGPD). | 
| **Conservación** | Mientras se mantenga la relación informativa o asociativa y hasta que solicites la supresión o revoques tu consentimiento, más los plazos legales de prescripción aplicables. | 
| **Destinatarios** | No se cederán datos a terceros, salvo obligación legal. Se utilizan proveedores tecnológicos de alojamiento web y correo electrónico que actúan como encargados del tratamiento bajo contrato conforme al art. 28 RGPD. | 
| **Derechos** | Puedes retirar tu consentimiento en cualquier momento y ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a `info@nutridiversa.org`, así como presentar una reclamación ante la Agencia Española de Protección de Datos (`www.aepd.es`). Puedes consultar la información completa en nuestra [Política de Privacidad](/privacidad). | 

## 9. PÁGINA DE TRANSPARENCIA (`/transparencia`)

Sustituye los antiguos botones repetitivos y el supuesto «Certificado Ministerial» por una página ordenada, veraz y fechada (**Última actualización: Noviembre de 2026**):

1. **Datos Identificativos y Registrales Oficiales:**

   * **Denominación oficial:** Asociación de Nutrición en la Discapacidad (NutriDiversa).

   * **Naturaleza:** Asociación sin ánimo de lucro de ámbito estatal, acogida a la Ley Orgánica 1/2002, de 22 de marzo, reguladora del Derecho de Asociación.

   * **NIF:** G22670707.

   * **Inscripción Registral:** Inscrita en el Registro Nacional de Asociaciones del Ministerio del Interior — **Grupo 1, Sección 1, Número Nacional 632919**.

   * **Domicilio Social:** C/ Polop, 30, Esc. 1, 4º O, 03015 Alicante (España).

2. **Documentación Institucional Separada y con Control de Versiones:**
   *(Cada tarjeta indica claramente el documento, su versión, fecha y número real de páginas, sin usar jamás nombres de archivo con la palabra `borrador`)*:

   * **Documento 1:** `Estatutos Oficiales de la Asociación NutriDiversa` — Texto íntegro de los Estatutos vigentes inscritos en el Registro Nacional de Asociaciones. *(Archivo: `Estatutos-Oficiales-NutriDiversa-RNA632919.pdf`)*.

   * **Documento 2:** `Resolución de Inscripción en el Registro Nacional de Asociaciones` — Copia informativa de la resolución administrativa de inscripción con datos personales sensibles disociados conforme al RGPD. *(Archivo: `Resolucion-Inscripcion-RNA632919-NutriDiversa.pdf`)*.

   * **Documento 3:** `Dossier Institucional NutriDiversa (Versión 1.0 - Noviembre 2026)` — Presentación general de la entidad, misión y líneas estratégicas (16 páginas). *(Archivo: `Dossier-Institucional-NutriDiversa-2026-v1.pdf`)*.

3. **Información Económica, Subvenciones y Gobernanza:**

   * **Retribución de órganos de gobierno:** Los miembros de la Junta Directiva desempeñan sus cargos de forma totalmente gratuita, sin percibir remuneración alguna.

   * **Presupuesto, cuentas anuales y subvenciones (Ley 19/2013 de Transparencia):** NutriDiversa se encuentra en su primer ejercicio de puesta en marcha (2026). Actualmente no percibe ayudas ni subvenciones públicas que alcancen los umbrales del artículo 3 de la Ley 19/2013. Al cierre del ejercicio anual y tras su aprobación por la Asamblea General, se publicarán en esta sección la memoria de actividades, el balance de cuentas y el origen de los ingresos.

## 10. TEXTOS LEGALES COMPLETOS Y DEFINITIVOS (PÁGINAS DEDICADAS)

### 10.1. AVISO LEGAL (`/aviso-legal`)

```
AVISO LEGAL Y CONDICIONES DE USO

1. DATOS IDENTIFICATIVOS DEL TITULAR (ARTÍCULO 10 DE LA LEY 34/2002, LSSI-CE)
En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se hacen constar de forma permanente, fácil, directa y gratuita los datos identificativos de la entidad titular de este sitio web (www.nutridiversa.org):

- Denominación social: Asociación de Nutrición en la Discapacidad (NutriDiversa)
- NIF: G22670707
- Domicilio social: Calle Polop, número 30, Escalera 1, 4º O, Código Postal 03015, Alicante (España)
- Datos registrales: Inscrita en el Registro Nacional de Asociaciones del Ministerio del Interior, Grupo 1, Sección 1, con el Número Nacional 632919.
- Ámbito territorial de actuación: Estatal.
- Correo electrónico de contacto directo: info@nutridiversa.org
- Dominio web oficial: https://www.nutridiversa.org

2. OBJETO Y CARÁCTER EXCLUSIVAMENTE EDUCATIVO Y DIVULGATIVO (EXCLUSIÓN DE ASISTENCIA SANITARIA)
El presente sitio web tiene por objeto dar a conocer la misión, proyectos, guías educativas y vías de participación de la Asociación NutriDiversa.
Todos los contenidos, guías, materiales y actividades promovidos por NutriDiversa tienen una finalidad estrictamente informativa, divulgativa y de educación alimentaria comunitaria. En ningún caso constituyen ni sustituyen un diagnóstico médico, consejo facultativo, prescripción dietética individualizada ni tratamiento clínico o sanitario. Ante cualquier duda sobre la salud o el estado nutricional de una persona menor o adulta, debe acudirse siempre a los profesionales sanitarios competentes.

3. PROPIEDAD INTELECTUAL E INDUSTRIAL
Los textos, diseños, logotipos, estructura y materiales propios de este sitio web son titularidad de NutriDiversa o se utilizan bajo licencia legítima. Queda prohibida su reproducción, transformación o distribución con fines comerciales sin autorización expresa de la asociación.

4. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
Las presentes condiciones se rigen por la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, las partes se someten a los Juzgados y Tribunales de la ciudad de Alicante, salvo que la normativa de protección de consumidores y usuarios establezca otro fuero imperativo.

Fecha de última actualización: Noviembre de 2026.

```

### 10.2. POLÍTICA DE PRIVACIDAD (`/privacidad`)

```
POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS PERSONALES

En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), especialmente en sus artículos 6, 9 y 13, así como de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), informamos a las personas usuarias de este sitio web sobre las condiciones del tratamiento de sus datos personales.

1. RESPONSABLE DEL TRATAMIENTO
- Entidad: Asociación de Nutrición en la Discapacidad (NutriDiversa)
- NIF: G22670707
- Registro Nacional de Asociaciones: Grupo 1, Sección 1, Número Nacional 632919
- Domicilio social: Calle Polop, 30, Esc. 1, 4º O, 03015 Alicante (España)
- Correo electrónico de contacto para privacidad: info@nutridiversa.org

2. PRINCIPIO DE MINIMIZACIÓN Y NO RECOGIDA DE DATOS DE SALUD EN LA WEB PÚBLICA
NutriDiversa aplica un criterio estricto de minimización de datos. A través de los formularios públicos de esta página web NO se solicitan ni deben enviarse diagnósticos médicos, informes clínicos ni datos relativos a la salud (artículo 9 del RGPD) ni datos personales de menores de edad.
En caso de que, durante la ejecución efectiva de un proyecto o taller específico, resultase estrictamente necesario conocer alguna adaptación alimentaria o información sensible de las personas participantes, dicha recogida se realizará fuera del formulario general mediante un procedimiento independiente que contará con análisis previo de riesgos, información específica y consentimiento explícito, libre y separado de los representantes legales.

3. FINALIDADES DEL TRATAMIENTO Y BASES JURÍDICAS LEGITIMADORAS
Tratamos los datos personales recabados en este sitio web únicamente para las siguientes finalidades diferenciadas:

a) Solicitudes de información de familias sobre el proyecto piloto:
- Finalidad: Atender consultas y avisar de la apertura de plazos y actividades del proyecto educativo de alimentación y autismo en Alicante.
- Datos tratados: Nombre y apellidos, correo electrónico, municipio y mensaje de consulta.
- Base jurídica: Consentimiento expreso de la persona interesada (art. 6.1.a RGPD), otorgado mediante la marcación activa de la casilla correspondiente.

b) Propuestas de colaboración de entidades, empresas y profesionales:
- Finalidad: Gestionar alianzas institucionales, cesión de espacios, revisión técnica o patrocinios.
- Datos tratados: Nombre de la entidad, persona de contacto, correo electrónico y propuesta.
- Base jurídica: Consentimiento de la persona interesada (art. 6.1.a RGPD) e interés legítimo en el mantenimiento de relaciones de colaboración institucional (art. 6.1.f RGPD).

c) Gestión de personas asociadas, voluntariado y aportaciones económicas:
- Finalidad: Tramitar el alta asociativa conforme a los Estatutos, gestionar el cobro de cuotas o aportaciones, emitir justificantes de pago y formalizar el acuerdo de incorporación de voluntariado conforme a la Ley 45/2015.
- Datos tratados: Nombre y apellidos, DNI/NIE, correo electrónico, teléfono y, en su caso, datos bancarios para el abono de cuotas.
- Base jurídica: Ejecución de la relación asociativa o acuerdo de voluntariado (art. 6.1.b RGPD) y cumplimiento de obligaciones legales aplicables a las asociaciones (art. 6.1.c RGPD).

4. CARÁCTER OBLIGATORIO O FACULTATIVO DE LOS DATOS
Los campos marcados como obligatorios en cada formulario son imprescindibles para atender la solicitud correspondiente. La negativa a suministrarlos o a marcar la casilla de aceptación impedirá tramitar la consulta, colaboración o inscripción solicitada.

5. PLAZOS Y CRITERIOS DE CONSERVACIÓN
- Datos de consultas e interés en el proyecto piloto: Se conservarán mientras el proyecto se encuentre en preparación y ejecución o hasta que la persona interesada retire su consentimiento o solicite su supresión.
- Datos de personas asociadas, donantes y voluntariado: Se conservarán mientras se mantenga vigente su condición en la asociación y, tras causar baja, permanecerán debidamente bloqueados durante los plazos legales de prescripción de responsabilidades jurídicas, contables o fiscales (generalmente entre 4 y 5 años).

6. DESTINATARIOS, ENCARGADOS DEL TRATAMIENTO Y TRANSFERENCIAS INTERNACIONALES
NutriDiversa no vende ni cede datos personales a terceros, salvo en los casos en que exista una obligación legal (Administraciones Públicas competentes, Registro Nacional de Asociaciones o entidades bancarias para la gestión de cuotas).
Para el funcionamiento técnico de la web y del correo electrónico, NutriDiversa cuenta con proveedores de servicios tecnológicos (alojamiento web e infraestructura de correo) que actúan en calidad de Encargados del Tratamiento conforme al artículo 28 del RGPD. No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo salvo a proveedores que ofrezcan garantías adecuadas reconocidas por la Comisión Europea (como el Marco de Privacidad de Datos UE-EE. UU. o Cláusulas Contractuales Tipo).

7. INEXISTENCIA DE DECISIONES AUTOMATIZADAS
NutriDiversa no elabora perfiles comerciales ni adopta decisiones automatizadas sobre las personas usuarias.

8. DERECHOS DE LAS PERSONAS INTERESADAS Y RECLAMACIÓN ANTE LA AEPD
Cualquier persona tiene derecho a obtener confirmación sobre si en NutriDiversa estamos tratando datos personales que le conciernan y a ejercer en cualquier momento y de forma gratuita los siguientes derechos:
- Derecho de acceso a sus datos personales.
- Derecho de rectificación de los datos inexactos o incompletos.
- Derecho de supresión («derecho al olvido») cuando los datos ya no sean necesarios.
- Derecho a la limitación del tratamiento en los supuestos previstos en el RGPD.
- Derecho de oposición al tratamiento y derecho a la portabilidad de sus datos.
- Derecho a retirar el consentimiento prestado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.

Para ejercer estos derechos, basta con enviar una comunicación escrita a info@nutridiversa.org o al domicilio social en Calle Polop, 30, Esc. 1, 4º O, 03015 Alicante, indicando el derecho que desea ejercer. Únicamente se solicitará información adicional para acreditar la identidad cuando existan dudas razonables sobre la identidad de la persona solicitante.

Asimismo, le informamos de su derecho a presentar una reclamación ante la autoridad de control competente, la Agencia Española de Protección de Datos (AEPD), a través de su sede electrónica en www.aepd.es.

Fecha de última actualización: Noviembre de 2026.

```

### 10.3. POLÍTICA DE COOKIES (`/cookies`)

```
POLÍTICA DE COOKIES Y ALMACENAMIENTO LOCAL

1. ¿QUÉ SON LAS COOKIES Y EL ALMACENAMIENTO LOCAL?
Las cookies y el almacenamiento local del navegador (localStorage) son pequeños archivos o registros técnicos que se guardan en el dispositivo de la persona usuaria al navegar por un sitio web para recordar determinadas preferencias de visualización.

2. USO EXCLUSIVO DE PREFERENCIAS TÉCNICAS EXENTAS EN NUTRIDIVERSA
Actualmente, el sitio web www.nutridiversa.org NO utiliza cookies publicitarias, de seguimiento comercial ni cookies analíticas de terceros que requieran banner de consentimiento conforme a la Guía sobre el uso de las cookies de la AEPD y el artículo 22.2 de la LSSI-CE.

Únicamente empleamos almacenamiento local técnico estrictamente necesario para recordar, a petición de la propia persona usuaria, sus preferencias en la herramienta «Opciones de lectura»:
- Nombre técnico: nutridiversa_font_size | Titular: NutriDiversa (Propia) | Finalidad: Recordar el tamaño de letra seleccionado | Duración: Persistente en sesión local hasta su borrado manual.
- Nombre técnico: nutridiversa_contrast | Titular: NutriDiversa (Propia) | Finalidad: Recordar si se ha activado el modo de alto contraste | Duración: Persistente en sesión local.
- Nombre técnico: nutridiversa_simple_summary | Titular: NutriDiversa (Propia) | Finalidad: Recordar la visualización del resumen sencillo | Duración: Persistente en sesión local.

En caso de que en el futuro se incorporen herramientas de medición estadística no exentas, se actualizará previamente esta política y se habilitará el correspondiente panel configurador de consentimiento.

Fecha de última actualización: Noviembre de 2026.

```

### 10.4. DECLARACIÓN DE ACCESIBILIDAD (`/accesibilidad`)

```
DECLARACIÓN Y COMPROMISO DE ACCESIBILIDAD

1. COMPROMISO VOLUNTARIO DE ACCESIBILIDAD
La Asociación de Nutrición en la Discapacidad (NutriDiversa) mantiene un firme compromiso voluntario para que su sitio web www.nutridiversa.org sea comprensible, navegable y utilizable por el mayor número posible de personas, con especial atención a las familias, personas con discapacidad y personas con dificultades de comprensión lectora.

Aunque NutriDiversa es una asociación privada sin ánimo de lucro y no se encuentra sujeta de forma imperativa al ámbito subjetivo del Real Decreto 1112/2018 (aplicable al sector público), hemos diseñado esta nueva versión tomando como referencia técnica las Pautas de Accesibilidad para el Contenido Web (WCAG 2.2) del W3C en su nivel AA.

2. MEDIDAS IMPLEMENTADAS EN ESTE SITIO WEB
- Tipografía de alta legibilidad (Atkinson Hyperlegible) en cuerpos de texto, controles y formularios.
- Paleta de colores con contraste verificado y modo específico de Alto Contraste seleccionable desde el botón «Opciones de lectura».
- Diseño adaptable con reflujo completo (WCAG 1.4.10) que permite ampliar el zoom hasta el 200 % y navegar en pantallas móviles de 320 píxeles sin desplazamiento horizontal.
- Etiquetado programático visible (<label>) en todos los controles de formulario y áreas táctiles amplias.
- Opción de «Resumen sencillo» y lectura en voz alta integrada en la cabecera.
- Redacción con frases claras, estructura predecible y explicación de los términos técnicos.

3. ESTADO DE EVALUACIÓN Y MEJORA CONTINUA
Este sitio web ha sido objeto de una revisión interna de usabilidad y accesibilidad en noviembre de 2026. Actualmente nos encontramos trabajando con entidades especializadas para validar en el futuro versiones en metodología oficial de Lectura Fácil.

4. CANAL DE COMUNICACIÓN DE BARRERAS DE ACCESIBILIDAD
Si encuentras cualquier barrera de acceso, algún elemento que no funcione correctamente con tu lector de pantalla o teclado, o necesitas recibir la información de nuestro proyecto piloto o documentos institucionales en un formato alternativo adaptado, escríbenos a info@nutridiversa.org e intentaremos darte respuesta en un plazo máximo de cinco días laborables.

Fecha de última actualización: Noviembre de 2026.

```