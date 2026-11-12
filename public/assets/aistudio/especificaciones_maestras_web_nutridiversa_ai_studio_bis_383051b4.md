# ESPECIFICACIONES MAESTRAS Y PROMPT DE CONSTRUCCIÓN WEB: NUTRIDIVERSA (www.nutridiversa.org)

## 1. ROL E INSTRUCCIÓN DIRECTA PARA LA IA DESARROLLADORA (AI STUDIO)

Actúa como un Arquitecto de Software Frontend Senior, Diseñador UI/UX especialista en Accesibilidad Cognitiva y Web (WCAG 2.2 AA), y Especialista en Cumplimiento Legal Digital (RGPD, LOPDGDD, LSSI-CE y Ley Orgánica 1/2002 de Asociaciones).

Tu objetivo es actualizar y consolidar la aplicación web de la **Asociación de Nutrición en la Discapacidad - NutriDiversa (`www.nutridiversa.org` / `https://nutridiversa.ai.studio`)** aplicando de forma estricta las **Instrucciones Acumulativas de Portada, Identidad, Junta Directiva, Accesibilidad y Control Legal del 12 de noviembre de 2026**.

La portada debe presentar a NutriDiversa como asociación estatal de nutrición inclusiva (elemento dominante) y, a la vez, dar visibilidad al lanzamiento del primer proyecto piloto en una tarjeta secundaria dentro de la primera pantalla («Primer proyecto piloto · ¿Quieres conocerlo?») sin sugerir jamás que la asociación trabaja únicamente con autismo ni que esa tarjeta compita visualmente con el titular principal.

---

## 2. CORRECCIONES URGENTES Y REGLAS INQUEBRANTABLES (BLOQUEANTES)

### 2.1. Corrección Urgente 1: Composición Literal de la Junta Directiva (PROHIBIDO ALTERAR)
La versión previa de `nutridiversa.ai.studio` alteró nombres y omitió las vocalías. Es **obligatorio copiar literalmente** estos 5 cargos y nombres completos en «Conócenos» y «Transparencia», sin abreviar, modificar ni omitir a ningún integrante:

| Cargo | Nombre y Apellidos (Transcripción Literal Obligatoria) |
| :--- | :--- |
| **Presidencia** | **Inmaculada Checa Lorente** |
| **Secretaría** | **Silvia Andrea Costa Méndez** |
| **Tesorería** | **César Hernández Moreno** |
| **Vocalía 1** | **Almudena Gómez de Cadiñanos Sastre** |
| **Vocalía 2** | **Victoria Muñoz Bañón** |

### 2.2. Corrección Urgente 2: Logotipo Oficial ND (PROHIBIDO USAR EL BROTE SIMPLIFICADO)
* **Elimina inmediatamente el icono simplificado del brote/planta** que se generó en la versión anterior.
* **Implementa el Logotipo Oficial de NutriDiversa**: combina el monograma **ND** (con la figura humana central, la hoja superior y la mano inferior en degradado verde y naranja) junto al nombre **NutriDiversa** y el subtítulo **«— Asociación de Nutrición en la Discapacidad —»**.
* **Reglas de uso del logotipo:**
  * Usa el **formato horizontal oficial** en la cabecera de escritorio (conserva el nombre completo con menos altura).
  * En tamaños móviles pequeños puede omitirse únicamente el subtítulo «Asociación de Nutrición en la Discapacidad», manteniendo siempre el monograma ND y el nombre NutriDiversa intactos (mediante el archivo específico o SVG fiel al original, sin recortes improvisados que corten el símbolo o el nombre).
  * **Prohibido** redibujar el símbolo, sustituirlo por un brote, cambiar sus colores originales, recolorearlo con los colores planos de la web o deformarlo.
  * Añade siempre el atributo `alt="Logotipo de la Asociación NutriDiversa"` en el enlace de inicio.

### 2.3. Prohibiciones Legales y Técnicas (Auditoría Jurídica)
1. **PROHIBIDO recrear certificados oficiales:** Elimina cualquier ventana «Ver Certificado Ministerial Oficial», códigos CSV inventados o membretes gubernamentales.
2. **PROHIBIDO exponer herramientas internas:** Elimina «usuario», «Panel CMS», «Simular Acceso» o «Vista Previa».
3. **PROHIBIDO afirmar «WCAG 2.2 AAA», «UNE-EN 301549 / AAA» o «Real Decreto 1112/2018»:** Expresa únicamente un compromiso voluntario con la accesibilidad y las pautas WCAG.
4. **PROHIBIDO usar «Lectura Fácil» sin validación:** Usa «Resumen sencillo» u «Opciones de lectura».
5. **PROHIBIDO recoger datos de salud en formularios generales ni premarcar casillas:** Todos los checkboxes de privacidad deben estar desmarcados por defecto (`checked={false}`) y acompañados de primera capa informativa.
6. **PROHIBIDO prometer desgravaciones fiscales (Ley 49/2002):** Indica únicamente que se emite un justificante de pago o aportación.

---

## 3. PALETA DE COLORES EXACTA Y TIPOGRAFÍA OFICIAL

### 3.1. Paleta de Colores Exacta (12 de noviembre de 2026)

| Nombre del Color | Código HEX | Uso Exacto y Restricciones de Accesibilidad |
| :--- | :--- | :--- |
| **Verde web** | `#1D3532` | Titulares, menú de navegación y botón principal. *(No usar para recolorear el archivo del logotipo)*. |
| **Naranja web** | `#D96820` | Iconos, bordes superiores de destaque y detalles de interfaz. *(PROHIBIDO usar para texto blanco pequeño ni para recolorear el logotipo)*. |
| **Naranja de acción** | `#A94F1D` | **Botón naranja con texto blanco** (garantiza ratio de contraste aproximado `5,5:1` WCAG AA) y etiquetas de texto naranja sobre fondo claro. |
| **Crema** | `#F7F3EB` | Fondo cálido de la primera pantalla (Hero). |
| **Verde pálido** | `#EAF5EF` | Fondos de apoyo, píldoras informativas y bloques secundarios. |
| **Blanco puro** | `#FFFFFF` | Fondo de tarjetas limpias y secciones alternas. |
| **Texto** | `#20282E` | Párrafos y cuerpo de texto sobre fondos claros (alto contraste y lectura descansada). |

### 3.2. Tipografía y Legibilidad
* **Tipografía global y de cuerpo:** Mantener **`Atkinson Hyperlegible`** (Google Fonts) en toda la web con tamaño base cómodo (`16px`–`18px`), párrafos cortos, interlineado amplio (`1.6`) y sin bloquear jamás la ampliación o zoom del navegador.
* **Titulares (H1, H2):** `Source Serif 4` o `Atkinson Hyperlegible Bold` en color `#1D3532`, asegurando que el titular general de NutriDiversa sea siempre el texto más grande de toda la portada.
* **Prohibición visual:** Nunca colocar texto importante sobre fotografías.

---

## 4. ORDEN OBLIGATORIO Y TEXTOS EXACTOS DE LA PORTADA (`/`)

El orden de estas **6 franjas** debe mantenerse idéntico tanto en ordenador como en teléfono móvil. Si se modifica algún matiz de diseño, debe conservarse intacta la jerarquía: **el titular general de NutriDiversa es el elemento dominante y la tarjeta del proyecto piloto tiene menor peso visual**.

### FRANJA 1: CABECERA (HEADER)
* **Izquierda:** Logotipo oficial horizontal de NutriDiversa (`alt="Logotipo de la Asociación NutriDiversa"`).
* **Centro (Menú de navegación con enlaces reales):**
  `Inicio` · `Qué hacemos` · `Proyecto piloto` · `Recursos` · `Conócenos` · `Contacto`
* **Derecha:** Botón destacado `Colaborar` (junto al control desplegable compacto de `Opciones de lectura`).

### FRANJA 2: PRIMERA PANTALLA (HERO ASIMÉTRICO: IDENTIDAD DOMINANTE + TARJETA SECUNDARIA DEL PILOTO)
* **Fondo:** Crema `#F7F3EB`.
* **Regla de Jerarquía Visual:** La columna izquierda (presentación general de NutriDiversa) ocupa el espacio principal (62%–65% del ancho) con el titular más grande de la página. La tarjeta derecha (lanzamiento del piloto) ocupa el espacio secundario (35%–38%), con tamaño de fuente menor para que se vea al entrar pero **nunca compita ni supere en tamaño o contraste al titular general**.
* *(Nota de arquitectura: Mientras exista captación activa, esta tarjeta permanece en la primera pantalla; prepara el componente en código con una prop `showPilotInHero = true` para poder trasladarla debajo de «Qué hacemos» cuando termine la fase de captación).*

#### Columna Izquierda (Elemento Dominante - Presentación General de NutriDiversa):
* **Etiqueta superior (en mayúsculas, color `#A94F1D`):**
  `ASOCIACIÓN DE NUTRICIÓN INCLUSIVA Y DISCAPACIDAD` *(o `NUTRICIÓN INCLUSIVA · INFORMACIÓN · PARTICIPACIÓN`)*
* **Titular Principal H1 (el texto más grande de la portada, color `#1D3532`):**
  `Alimentación y nutrición accesibles para personas con discapacidad y sus familias`
  *(Subtítulo alternativo integrado según boceto: «Una alimentación más comprensible y accesible para cada familia»)*
* **Texto descriptivo (`#20282E`):**
  `Somos una asociación estatal sin ánimo de lucro para personas con discapacidad, enfermedades raras, dependencia y sus familias. Creamos información, recursos y proyectos educativos que tienen en cuenta distintas necesidades de apoyo. Escuchamos a las personas, a sus familias y a quienes las acompañan.`
* **Botones principales (alineados horizontalmente en escritorio, ancho completo en móvil):**
  1. Botón primario sólido (`#1D3532`, texto blanco): `Conocer NutriDiversa` (lleva a `#que-hacemos` / `/conocenos`)
  2. Botón secundario con borde (`#1D3532`, fondo transparente): `Cómo colaborar` (lleva a `#participa` / `/contacto`)

#### Columna Derecha (Tarjeta Secundaria del Lanzamiento):
* **Diseño:** Tarjeta blanca (`#FFFFFF`), borde suave, detalle superior en naranja `#D96820`, tipografía claramente más contenida que el H1 principal.
* **Etiqueta obligatoria (visible en naranja accesible `#A94F1D`, negrita):**
  `PRIMER PROYECTO PILOTO`
* **Pregunta obligatoria justo antes del título (color `#1D3532`, peso medio):**
  `¿Quieres conocerlo?`
* **Título de la tarjeta (H2/H3 secundario, menor que el H1 general):**
  `Alimentación y autismo en familias con menores de 6 a 12 años`
* **Resumen breve opcional de contexto:**
  `En preparación en la provincia de Alicante · Variedad de alimentos, texturas y rutinas.`
* **Botón de la tarjeta (color `#A94F1D` con texto blanco o contorno `#1D3532`):**
  `Conocer el proyecto` (lleva a la Franja 5 completa del proyecto piloto).

*(Nota sobre imagen en la primera pantalla: La imagen es opcional. Es preferible mantener la composición tipográfica limpia de dos columnas para no desplazar el titular ni los botones. Si se incluye apoyo visual en la sección inferior, nunca debe sugerir que NutriDiversa trata un único diagnóstico o una sola edad).*

### FRANJA 3: BANDA DE CONFIANZA (DATOS VERIFICADOS)
* Franja horizontal tranquila (fondo `#EAF5EF` o blanco con borde sutil) con 3 o 4 indicadores breves y verificados:
  * **Naturaleza:** `Asociación sin ánimo de lucro (Registro Nacional de Asociaciones nº 632919)`
  * **Alcance:** `Ámbito estatal`
  * **Sede:** `Alicante`
  * **Enfoque:** `Educación alimentaria accesible y participativa (no asistencial ni clínica)`

### FRANJA 4: QUÉ HACEMOS (`#que-hacemos`)
* **Título de sección (H2, `#1D3532`):**
  `Trabajamos para que la información alimentaria sea comprensible y útil`
* **Cuatro líneas de actuación (en cuadrícula limpia de 4 tarjetas con espacio amplio, sin carruseles):**
  1. **Información accesible:** `Adaptamos conocimientos sobre alimentación y nutrición a un lenguaje claro, cotidiano y libre de tecnicismos innecesarios.`
  2. **Escucha y participación:** `Partimos de las experiencias reales de las personas con discapacidad, sus familias y personas cuidadoras antes de diseñar cualquier recurso.`
  3. **Educación alimentaria:** `Impulsamos talleres, guías prácticas y actividades comunitarias que respetan los distintos perfiles sensoriales, motores o cognitivos.`
  4. **Trabajo con entidades:** `Colaboramos con asociaciones, centros educativos, universidades y profesionales para sumar conocimiento y llegar a más familias.`

### FRANJA 5: SECCIÓN COMPLETA DEL PRIMER PROYECTO PILOTO (`#proyecto-piloto`)
* **Diseño:** Bloque amplio y diferenciado sobre fondo suave `#F7F3EB` con tarjeta interior blanca y acentos en `#D96820` / `#A94F1D`.
* **Etiqueta superior obligatoria:** `PRIMER PROYECTO PILOTO`
* **Pregunta obligatoria previa al título:** `¿Quieres conocerlo?`
* **Título completo del proyecto (H2):**
  `Alimentación y autismo en familias con menores de 6 a 12 años`
* **Texto exacto de explicación:**
  `Estamos preparando en Alicante un proyecto educativo para conocer las experiencias de las familias con la variedad de alimentos, las texturas y las rutinas durante las comidas.`
* **Desarrollo claro en 4 pasos (Cómo funcionará):**
  1. **Escuchamos:** `Recogemos experiencias, dificultades cotidianas y prioridades de madres, padres, tutores y personas cuidadoras.`
  2. **Preparamos:** `Creamos materiales claros, prácticos y accesibles a partir de sus necesidades reales.`
  3. **Compartimos:** `Realizamos una primera actividad educativa gratuita orientada a las familias participantes.`
  4. **Mejoramos:** `Evaluamos la utilidad, comprensión y accesibilidad de los recursos para seguir mejorándolos.`
* **Nota de alcance sanitario:**
  `Proyecto exclusivamente educativo y comunitario en fase de preparación. No ofrece diagnósticos médicos, dietas personalizadas ni tratamientos clínicos.`
* **Dos botones de acción claros (con texto autoexplicativo):**
  * Botón 1 (`#A94F1D` texto blanco, contraste 5.5:1): `Quiero conocer el proyecto` (abre el detalle/inscripción para familias).
  * Botón 2 (borde `#1D3532` texto oscuro): `Quiero colaborar como entidad` (abre la vía de colaboración para asociaciones, centros y profesionales).

### FRANJA 6: PARTICIPA, CONTACTO SEGMENTADO Y PIE DE PÁGINA (`#participa`)
* **Dos rutas claras de participación antes del pie:**
  * **Ruta 1 — Soy familiar:** `Quiero recibir aviso e información cuando se abra la participación del proyecto piloto en Alicante.` → Botón: `Solicitar información para familias`.
  * **Ruta 2 — Represento a una entidad o soy profesional:** `Puedo facilitar contacto con familias, ceder un espacio, revisar la accesibilidad o aportar conocimiento técnico.` → Botón: `Proponer colaboración institucional`.
* **Pie de página (Footer) sobre fondo `#1D3532` con texto claro:**
  * **Columna de identidad:** Logotipo/Nombre `NutriDiversa — Asociación de Nutrición en la Discapacidad` · `Asociación sin ánimo de lucro de ámbito estatal` · `NIF: G22670707` · `RNA: 632919` · `C/ Polop, 30, Esc. 1, 4.º O, 03015 Alicante` · `info@nutridiversa.org`.
  * **Enlaces legales y de transparencia (con altura táctil mínima de 44px):**
    `Transparencia` (`/transparencia`) · `Aviso legal` (`/aviso-legal`) · `Política de privacidad` (`/privacidad`) · `Política de cookies` (`/cookies`) · `Accesibilidad` (`/accesibilidad`).

---

## 5. ESTRUCTURA DE LAS PÁGINAS INTERNAS Y RUTAS REALES

Configura el enrutador de la aplicación para que cada sección del menú principal y del pie tenga su propia vista/ruta navegable, actualizando el título del navegador:

1. **`/que-hacemos` (Qué hacemos):**
   * Explica en detalle las 4 líneas de actuación de NutriDiversa (`Información accesible`, `Escucha y participación`, `Educación alimentaria`, `Trabajo con entidades`) y los colectivos a los que se dirige la asociación a nivel estatal: discapacidad intelectual, física y sensorial, trastorno del espectro del autismo (TEA), enfermedades raras, situaciones de dependencia y apoyo a familias y personas cuidadoras.
2. **`/proyecto` (Proyecto piloto):**
   * Muestra la ficha completa del **Primer proyecto piloto: Alimentación y autismo en familias con menores de 6 a 12 años en Alicante**, preguntas frecuentes de las familias (gratuidad, quién participa, fases, ausencia de recogida de datos clínicos en la preinscripción) y el formulario específico para familias.
3. **`/recursos` (Recursos y Guías):**
   * Presenta las primeras 4 guías divulgativas de lectura clara sobre alimentación inclusiva (1. *Qué es la selectividad alimentaria y cuándo pedir valoración profesional*; 2. *Texturas, olores y presentación de los alimentos*; 3. *Cómo observar una comida sin convertirla en una prueba*; 4. *Diferencia entre educación alimentaria y tratamiento nutricional*). Cada recurso indica fecha (Noviembre 2026), autoría institucional de NutriDiversa, fuentes científicas de referencia y aviso de que no sustituye la consulta médica.
4. **`/conocenos` (Conócenos y Transparencia):**
   * Presenta la misión, valores, historia, **la tabla oficial íntegra de los 5 miembros de la Junta Directiva** (Inmaculada Checa Lorente, Silvia Andrea Costa Méndez, César Hernández Moreno, Almudena Gómez de Cadiñanos Sastre y Victoria Muñoz Bañón), información transparente de cuotas para hacerse persona asociada (cuota promocional fundacional de 10 €/año hasta el 31/12/2026; cuota ordinaria de 30 €/año desde el 01/01/2027; indicando expresamente que las aportaciones no conllevan desgravación fiscal de la Ley 49/2002) y acceso a los documentos oficiales (`Estatutos Oficiales`, `Resolución de Inscripción RNA 632919` y `Dossier-Institucional-NutriDiversa-2026-v1.pdf`).
5. **`/contacto` (Contacto segmentado):**
   * Selector con 3 formularios independientes y breves (**Familias**, **Entidades/Profesionales**, **Asociarse/Voluntariado**).

---

## 6. REQUISITOS OBLIGATORIOS EN FORMULARIOS, COOKIES Y TEXTOS LEGALES

### 6.1. Reglas de los Formularios (`/contacto` y `/proyecto`)
* Todos los `<input>`, `<select>` y `<textarea>` tienen `<label for="...">` visible y atributo `name`.
* Aviso visible en todos los formularios: **«Por favor, no incluyas diagnósticos médicos, informes clínicos ni datos de salud en este formulario.»**
* Casilla de consentimiento **siempre desmarcada por defecto (`checked={false}`)** y obligatoria:
  `[ ] He leído y acepto la Política de Privacidad y consiento el tratamiento de mis datos para atender mi solicitud.`
* Casilla adicional separada y opcional (nunca premarcada) si la persona desea recibir avisos futuros:
  `[ ] Deseo recibir comunicaciones informativas sobre futuras actividades y recursos de NutriDiversa.`
* **Primera capa informativa de privacidad** visible junto a cada formulario con: Responsable (*Asociación de Nutrición en la Discapacidad - NutriDiversa, NIF G22670707*), Finalidad, Base jurídica (*Consentimiento art. 6.1.a RGPD*), Destinatarios (*Sin cesión a terceros salvo obligación legal; encargados técnicos de alojamiento y correo*), Plazo de conservación, Derechos (*Acceso, rectificación, supresión, oposición, portabilidad, limitación y retirada del consentimiento en `info@nutridiversa.org`, más reclamación ante la AEPD*) y enlace a `/privacidad`.
* Mensaje de confirmación en pantalla tras enviar: *«Hemos recibido tu solicitud. La Secretaría de NutriDiversa te responderá en un máximo de cinco días laborables.»*

### 6.2. Gestión de Cookies y Almacenamiento Local (`/cookies`)
* Si la web utiliza únicamente almacenamiento local técnico para guardar el tamaño de fuente o el modo de contraste, documéntalo con exactitud en `/cookies` sin instalar scripts de terceros no declarados.
* Incluye además un componente de **Configuración de Cookies** accesible desde el pie de página que cumpla la Guía de la AEPD: si en cualquier momento se activa analítica o cookies no necesarias, el banner debe mostrar los botones **`Aceptar`**, **`Rechazar`** y **`Configurar`** exactamente al mismo nivel visual y tamaño, sin muros de cookies ni casillas premarcadas.

### 6.3. Datos Oficiales en Aviso Legal (`/aviso-legal`), Privacidad (`/privacidad`) y Transparencia (`/transparencia`)
* **Denominación:** Asociación de Nutrición en la Discapacidad (NutriDiversa).
* **NIF:** G22670707.
* **Registro Nacional de Asociaciones:** Grupo 1, Sección 1, Número Nacional **632919**.
* **Ámbito:** Estatal.
* **Domicilio social:** C/ Polop, 30, Esc. 1, 4.º O, 03015 Alicante (España).
* **Correo electrónico de contacto:** `info@nutridiversa.org`.
* **Órgano de Gobierno (Junta Directiva):**
  * Presidencia: Inmaculada Checa Lorente
  * Secretaría: Silvia Andrea Costa Méndez
  * Tesorería: César Hernández Moreno
  * Vocalía 1: Almudena Gómez de Cadiñanos Sastre
  * Vocalía 2: Victoria Muñoz Bañón

---

## 7. LISTA DE COMPROBACIÓN FINAL ANTES DE RENDERIZAR

Verifica que el código generado cumple todos los puntos de control de la Presidencia:
1. [x] Se muestra el **Logotipo Oficial ND** (monograma ND con figura humana, hoja y mano + NutriDiversa) y se ha eliminado el símbolo del brote simplificado.
2. [x] La primera pantalla define a NutriDiversa de forma general (titular más grande de toda la portada) y no usa «Autismo» como definición global de la asociación.
3. [x] El lanzamiento del piloto aparece en la primera pantalla como **tarjeta secundaria** de menor tamaño y peso visual que el mensaje general.
4. [x] La etiqueta **«Primer proyecto piloto»** y la pregunta **«¿Quieres conocerlo?»** aparecen juntas y visibles justo antes del título del proyecto, tanto en la tarjeta secundaria como en la sección completa.
5. [x] La Junta Directiva incluye exactamente los **5 nombres oficiales completos** (Inmaculada Checa Lorente, Silvia Andrea Costa Méndez, César Hernández Moreno, Almudena Gómez de Cadiñanos Sastre y Victoria Muñoz Bañón).
6. [x] En versión móvil se mantiene el mismo orden de los 6 bloques, con botones anchos fáciles de pulsar, sin desplazamiento lateral y soportando ampliación de texto.