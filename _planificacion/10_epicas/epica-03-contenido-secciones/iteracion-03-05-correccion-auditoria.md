# Iteración 03-05 · Corrección de la Épica 03 tras la auditoría

- **Épica:** 03 · Contenido y secciones
- **Estado:** En revisión
- **Rama sugerida:** `main` (temporal, ver `registro-log.md`)
- **Depende de:** 03-04
- **RDA relacionadas:** RDA-006, RDA-007, RDA-008, RDA-009
- **Hallazgos que cierra:** AUD-08-001 a AUD-08-032 (salvo AUD-08-023, que depende de la aprobación del cliente, y AUD-08-030, informativo); AUD-07-001 y AUD-07-002 (antes «AUD-06-001» y «AUD-06-002» de la segunda Auditoría 06); correcciones de estado de AUD-01-005, AUD-01-013, AUD-01-017, AUD-01-019, AUD-01-027 y AUD-03-002

## Objetivo

Dejar la Épica 03 conforme a su propio contrato (`definicion-epica-03.md`, los bloques «Contenido aprobado» de 03-01 a 03-04, `DESIGN.md`, `AGENTS.md` y las RDA) y con una línea base limpia para empezar la Épica 04: `pnpm check` en cero errores y cero advertencias, ninguna afirmación de la lista «No publicar» en `dist/`, y cada criterio de aceptación respaldado por una medición real y no por la lectura del código.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. La forma de lograrlo la decide quien implementa, dentro de las restricciones de la sección «Reglas de la iteración».

## Fuente de los hallazgos

- Informe de Claude Code: `_planificacion/10_epicas/epica-03-contenido-secciones/auditoria-epica.md` (commit auditado `5c31568`). Los hallazgos se nombran `E3-NNN` en el informe y `AUD-08-NNN` en `auditoria-tecnica.md` (mismo número: `E3-005` es `AUD-08-005`).
- Verificación del asistente de planificación sobre el repositorio y en navegador (Chromium a 360 × 640 y 1280 × 800, con las fuentes reales). Ver la sección «Verificación previa del planificador».

## Verificación previa del planificador

Quien implemente **no debe dar nada por cierto**: antes de corregir cada hallazgo, lo comprueba en el código. Si alguno resulta falso, no lo corrige y lo registra en la bitácora con la evidencia. Lo que el planificador ya comprobó:

| Hallazgo | Resultado de la comprobación |
| :--- | :--- |
| E3-001 | Confirmado en el código: `404.astro` repite `Header`, `Footer`, `AccionesFlotantes` y `main`, que `LayoutBase` ya incluye. |
| E3-002 | Confirmado y medido: `space-2xl` y `text-body-xs` no existen en `global.css` ni generan reglas en el CSS compilado; el relleno vertical medido de `#quienes-somos`, `#opiniones`, `#servicios` y `#contacto` es 0 px. |
| E3-004 | Confirmado: el número de WhatsApp está escrito en el `<script>` del formulario. |
| E3-005 | Confirmado en el código: las cinco frases están en `Footer.astro`, `CanalDirecto.astro`, `FormularioCotizacion.astro`, `CintaLlamada.astro` y `404.astro`. |
| E3-008 | Confirmado con `pnpm check`: 7 errores (1 × `ts(7006)` y 6 × `ts(2339)`). Se comprobó además que `.map(String)` sobre un valor sin tipo **no** resuelve el error y que un `@type` de JSDoc **no** se aplica dentro del frontmatter ni del `<script>` de un `.astro`. |
| E3-009 | Confirmado: `BotonWhatsApp` no tiene `<slot />` y descarta el texto que recibe. |
| E3-010 | Confirmado: el hero y la tarjeta de despacho envían «Hola, necesito una grúa en ». |
| E3-015 | Confirmado y medido: con el espaciado de letra del token, el `h1` pasa de 126 a 168 px (4 líneas) y el botón de WhatsApp termina en 624 px, bajo la barra inferior (584 px). Se comprobó que **es posible** cumplir la primera pantalla a 360 × 640 px con el espaciado correcto usando solo tokens y tamaños de `DESIGN.md`, sin cambiar los textos. |
| E3-016 | **Matiz:** el segundo oyente (`astro:page-load`) solo se dispara si el proyecto usa `<ClientRouter />`, y no lo usa. El envío doble es hoy un riesgo latente, no un defecto alcanzable. Se corrige igual. |
| E3-011, E3-014 | Confirmados en el código (`focus-visible:outline-2` en 5 componentes; `rounded-sm`, `shadow-sm` y `shadow-lg` fuera de lo que permite `DESIGN.md` §4). |
| E3-019 | Confirmado: hay dos secciones «Auditoría 06» con los mismos IDs. |
| **Nuevo** | **AUD-08-032 (Baja, Documentación):** `AGENTS.md` §6.4 y `DESIGN.md` §5 (`TarjetaResena`) piden «nombre abreviado del autor», pero D3 y RDA-007 establecen el nombre completo. El informe no lo detectó. Esos dos archivos solo se editan con aprobación del desarrollador: aquí solo se registra (tarea 11). |

## Reglas de la iteración

1. No se agregan tokens ni se edita `DESIGN.md`, `AGENTS.md`, `README.md`, `package.json`, `astro.config.mjs` ni `.claude/`. No se instalan dependencias.
2. Sin sintaxis de TypeScript en el código de la aplicación (`AGENTS.md` §3) y sin supresiones de tipos (`@ts-ignore`, `@ts-nocheck`, `@ts-expect-error`).
3. Solo se publica el contenido de la sección «Contenido aprobado de esta iteración» y el de las iteraciones 03-01 a 03-04. Ningún texto nuevo sin aprobación del desarrollador.
4. El JavaScript de cliente de la página sigue por debajo de 1 KB (RDA-006). Si la corrección del formulario no cabe, detenerse y consultar: no se supera el límite en silencio.
5. Los textos de `Contenido aprobado` no se modifican, incluso para ganar espacio. Si cumplir un criterio exige cambiar un texto aprobado o contradecir `DESIGN.md`, **detenerse y consultar**.
6. No se editan las bitácoras existentes (son inmutables). Las correcciones van en la bitácora nueva de esta iteración.
7. No se hacen `commit`, `push` ni operaciones que reescriban el historial: los hace el desarrollador.
8. Lo que no se pueda hacer o comprobar se declara como tal en la bitácora, con el motivo. Un error de `pnpm check` es un error, no un «aviso», y no se cierra como «deuda aceptada».

## Contenido aprobado de esta iteración (copiar tal cual)

Estos textos **reemplazan o complementan** los de 03-01 a 03-04 solo en lo que se indica; todo lo demás sigue como estaba aprobado.

**Se eliminan (no se reemplazan por nada)**

- Footer, bloque Cobertura: «Zonas de atención rápida:». Bajo el `h2` «Cobertura» queda solo el texto de `localidadesTexto()`.
- Canal directo: «Atención Inmediata».
- Formulario: «Cotización Rápida» y «Completa los datos y te responderemos inmediatamente por WhatsApp con el valor del servicio.».
- Formulario: los cuatro marcadores de posición («Ej. …», incluido el nombre de persona y el teléfono de ejemplo).
- Cinta de llamada: «Asistencia inmediata en Villarrica, Pucón, Licán Ray y Freire las 24 horas.».
- Reseñas: «Ocultar opiniones adicionales». El resumen del acordeón conserva el texto aprobado «Ver 4 opiniones más» (sin texto propio para el estado abierto, hasta que el desarrollador apruebe uno).

**Se corrigen**

- Nota de cobertura: «También hemos prestado servicio en el paso fronterizo Mamuil Malal (Ruta CH-199, Curarrehue). Si estás en otra localidad, consúltanos.» (`paso` con minúscula; el dato de `negocio.js` debe leerse bien dentro de la frase).
- Formulario sin JavaScript: «Si el formulario no funciona, escríbenos directo por WhatsApp.» (con punto final), y el enlace dice «Escribir por WhatsApp».
- Formulario, mensaje que se arma: primera línea «Hola, quiero cotizar un servicio de grúa.» y luego una línea por campo con la forma «{etiqueta}: {valor}», usando las etiquetas aprobadas («Tu nombre», «Tu teléfono», «Tipo de vehículo», «¿Qué le pasó?», «¿Dónde está el vehículo?», «¿Adónde lo llevamos?»). Un campo opcional vacío no genera línea.
- Formulario: se permite indicar qué campo es opcional (deriva de los atributos aprobados) y el texto funcional mínimo de la primera opción de cada lista desplegable. No se agrega ningún otro texto.
- Canal directo: el botón muestra el texto aprobado «Enviar mi ubicación por WhatsApp» con el mensaje «Hola, necesito una grúa. Te envío mi ubicación por aquí. ».
- Hero y tarjeta de despacho: el botón de WhatsApp envía el mensaje de emergencia de `negocio.js` («Hola, necesito una grúa en Villarrica. Mi ubicación es: »).
- Tarjeta de horario: ícono `horario` (`DESIGN.md` §6).
- Títulos y etiquetas en formato oración («Base de operaciones», no «Base de Operaciones»).

**Página 404 (sin contenido aprobado hasta ahora; se aprueba aquí)**

- Etiqueta: «Error 404». `h1`: «Página no encontrada».
- Párrafo: «La dirección a la que intentas acceder no está disponible. Si necesitas una grúa, llámanos o escríbenos por WhatsApp.»
- Meta descripción: «La página que buscas no existe. Si necesitas una grúa en Villarrica y La Araucanía, llámanos o escríbenos por WhatsApp.»
- Acciones: `BotonLlamada`, `BotonWhatsApp` (mensaje de emergencia por defecto) y «Volver al inicio».

## Tareas

Cada tarea dice qué debe quedar logrado. Entre paréntesis, los hallazgos del informe.

1. **Línea base de calidad (E3-008, E3-024).**
    - `pnpm check` termina sin errores ni advertencias. Los hints de JSDoc se mantienen visibles (decisión vigente; no se cambia el script).
    - Los dos errores de tipos (`TarjetaServicio.astro` y el `<script>` de `FormularioCotizacion.astro`) se resuelven de forma real, no con comentarios ni arreglos que no funcionan. Se eliminan los comentarios del código que afirman haber resuelto algo que no resolvieron.
    - Se quita el import sin uso de `index.astro` y el comentario obsoleto «Estructura provisional…».
    - Las notas internas dejan de publicarse en `dist/` (cero comentarios HTML en `dist/index.html` y `dist/404.html`).

2. **Estructura y semántica (E3-001, E3-025, E3-026).**
    - La página 404 contiene un solo header, una sola navegación, un solo `main`, un solo footer y una sola barra de acciones: los de `LayoutBase`. Conserva su contenido propio y su `h1`.
    - La estructura de la portada es coherente con RDA-009: `#inicio` agrupa el hero, la cinta de métricas, Quiénes somos y las opiniones; `#contacto` agrupa su contenido y la cinta de llamada final. Cada bloque y cada sección tiene nombre accesible, sin landmarks redundantes ni saltos de nivel de encabezado. Las anclas `#inicio`, `#servicios` y `#contacto` siguen quedando bajo el header (112 px) al navegar.
    - La fecha relativa de las reseñas no usa un elemento de fecha con un valor que no es una fecha válida.

3. **Espaciado y tipografía conforme a los tokens (E3-002, E3-012, E3-015).**
    - Ninguna clase del código fuente referencia un token que no exista. Las cuatro secciones de contenido (Quiénes somos, Opiniones, Servicios, Contacto) tienen relleno vertical de 40 px, igual que el hero (`space-xl` de `DESIGN.md` §4), y los bloques de Contacto están separados entre sí.
    - Los titulares y etiquetas toman el espaciado de letra definido en sus tokens (`DESIGN.md` §3.1), sin ajustes locales que lo cambien.
    - **La primera pantalla móvil se mantiene:** a 360 × 640 px, con el espaciado de letra correcto, la etiqueta, el `h1` y ambos botones de contacto se ven completos entre el borde inferior del header (112 px) y el borde superior de la barra inferior (584 px), con margen de al menos 8 px. Se logra sin cambiar textos ni salirse de los tamaños y tokens de `DESIGN.md`.
    - Los párrafos de Quiénes somos tienen un ancho de lectura de 75 caracteres como máximo por línea (`DESIGN.md` §3, regla 2) a 1280 px.

4. **Contenido (E3-005, E3-009, E3-010, E3-017, E3-027, E3-028).**
    - `dist/` no contiene ninguna de las cinco frases de rapidez o inmediatez de E3-005 ni los demás textos que la sección «Contenido aprobado» manda eliminar.
    - El botón del canal directo muestra «Enviar mi ubicación por WhatsApp»; `BotonWhatsApp` respeta el texto que se le entrega y conserva «Escribir por WhatsApp» cuando no se le entrega ninguno.
    - Ningún mensaje de WhatsApp queda escrito dentro de un componente: todos viven en `src/data/` (RDA-008). El hero y la tarjeta de despacho usan el mensaje de emergencia.
    - Los datos del negocio (dirección, localidades, referencias, marcador `tiemposRespuesta`) se componen desde `negocio.js`; ningún componente los repite en duro. `tiemposRespuesta` vuelve a usar la constante `PENDIENTE_CLIENTE`.
    - Nombres de acción uniformes (`DESIGN.md` §10 y regla 4 de la épica): los enlaces con el mismo texto visible y destino distinto llevan `aria-label` con contexto que incluya el texto visible (WCAG 2.5.3).

5. **Formulario de cotización (E3-003, E3-004, E3-006, E3-016).**
    - **Validación:** el navegador valida el formulario. Un envío vacío, un envío sin elegir los dos desplegables y un teléfono con letras muestran un error visible y comprensible por campo, que se anuncia con lector de pantalla, y el foco va al primer campo inválido. Los textos de ayuda (si los hay) se asocian a su campo con `aria-describedby`. Nunca falla en silencio.
    - **Envío:** con datos válidos se abre una sola ventana de WhatsApp hacia el número de `negocio.js`, con el mensaje descrito en «Contenido aprobado», bien codificado (`&`, `#`, tildes y saltos de línea intactos). Sin `alert()`.
    - **Datos:** el número de WhatsApp no aparece escrito en ningún archivo de `src/` fuera de `negocio.js`.
    - **Sin JavaScript:** el formulario permanece oculto mediante el atributo `hidden` (no una clase) y se ve el enlace directo a WhatsApp.
    - **Campos:** borde con contraste de al menos 3:1 contra el fondo adyacente (el borde de campo de `DESIGN.md` §2.2), alto mínimo de 44 px, texto de al menos 16 px (evita el zoom automático de iOS), color del marcador del token `placeholder` y no un valor en duro (si queda algún marcador). Radio máximo de 0,25 rem (`DESIGN.md` §4).
    - **Sin oyentes de más:** no queda ningún oyente de `astro:page-load` (no hay `<ClientRouter />`) y el envío no puede registrarse dos veces.

6. **Accesibilidad de interacción (E3-006, E3-007, E3-011).**
    - Todo enlace, botón y campo interactivo mide al menos 44 × 44 px de área táctil a 360 y a 1280 px. Incluye «Ver en Google», «Cómo llegar», el resumen del acordeón de opiniones y los teléfonos grandes del canal directo y de la tarjeta de despacho.
    - Todos los elementos interactivos muestran el foco de 3 px de `DESIGN.md` §5.1 (medido con la tecla Tab), sin reducciones locales a 2 px ni campos con el contorno anulado. Sobre las superficies naranjas (tarjeta de despacho, cinta de llamada) el foco tiene contraste de al menos 3:1 contra el color que lo rodea.

7. **Forma y diseño conforme a `DESIGN.md` (E3-013, E3-014).**
    - Ángulos rectos: ningún borde redondeado salvo los campos del formulario (hasta 0,25 rem) y los puntos indicadores de estado. La etiqueta del hero no es un indicador de estado.
    - Sombras: solo `shadow-xl` o `shadow-2xl` en elementos flotantes (header, acciones flotantes, tarjeta de despacho). Ninguna otra.
    - **Mapa esquemático legible en móvil:** sigue siendo un SVG propio en línea, sin `iframe` ni capturas de terceros, con `role="img"` y el nombre accesible aprobado. A 360 px, todo texto del mapa mide al menos 12 px efectivos, ningún rótulo se superpone con otro, y las rutas tienen contraste de al menos 3:1 contra el fondo. Las localidades y referencias del mapa salen de `negocio.js`.

8. **Documentación de planificación (E3-018, E3-019, E3-020, E3-021, E3-022, E3-023, E3-029, E3-031).**
    - `auditoria-tecnica.md`:
        - La segunda «Auditoría 06» se renumera como **Auditoría 07** (AUD-07-001 y AUD-07-002), con severidad Media, el auditor correcto, la descripción exacta del error y sin la frase «aceptada por el desarrollador» (no consta en el repositorio). Quedan «Resuelto en 03-05» cuando corresponda.
        - Se registra la **Auditoría 08** con los hallazgos AUD-08-001 a AUD-08-032 (los 31 del informe, más AUD-08-032), con severidad, área, hallazgo, acción y estado según el resultado real de esta iteración. En AUD-08-016 se anota el matiz de «riesgo latente». AUD-08-023 queda «Abierto» hasta que el desarrollador registre la aprobación del cliente; AUD-08-030 queda «Informativo»; AUD-08-032 queda «Abierto, requiere aprobación del desarrollador».
        - Se corrigen los textos de cierre inexactos de AUD-01-005, AUD-01-013, AUD-01-017, AUD-01-019 y AUD-01-027, y AUD-03-002 pasa a «Resuelto en 03-02» (informe, sección 8).
    - `iteracion-03-04-contacto-cobertura.md`: se restauran los saltos de línea (tomar el contenido de `d60d924` como referencia) para que las tareas 6 a 8, los criterios y los datos pendientes se lean como Markdown.
    - Archivos de las iteraciones 03-01 a 03-04: pasan a «En revisión» hasta que el desarrollador verifique esta iteración. Las casillas cuya evidencia no se haya medido de verdad (por ejemplo, Lighthouse en 03-01 y los errores anunciados en 03-04) quedan sin marcar con una nota que remita a 03-05; las demás se vuelven a evaluar con las mediciones de esta iteración.
    - `definicion-epica-03.md`: estado «En revisión»; se agrega 03-05 a la tabla de iteraciones; el tercer criterio de término (aprobación del cliente) queda anotado como pendiente de registro.
    - `decisiones.md`: la actualización de RDA-007 se reemplaza por el texto exacto de la tarea 6 de 03-02 (sin la justificación agregada).
    - La nueva bitácora sigue la plantilla completa de `_planificacion/README.md` §5.2 (todas sus secciones, con las mediciones reales en navegador y el estado final «En revisión») y lleva fecha real y LF.

9. **Registro de trabajo (E3-022, E3-023).** En `registro-log.md`:
    - Se agrega la fila de 03-05 («En revisión» al terminar) con el enlace a su bitácora, y se corrige el enlace de la bitácora de 03-03, que apunta a la de 03-02.
    - «Iteración activa» y «Próximo hito» reflejan la situación real (se elimina la «fase de pulido SEO/Performance», que no existe en el plan). Las fechas de las filas de la Épica 03 pasan a 2026-10-01 en lo que se agregue; el historial anterior no se reescribe.
    - La tabla de «Datos pendientes del cliente» refleja lo ya entregado (10 reseñas seleccionadas, cuatro localidades declaradas, coordenadas de referencia cargadas) sin dar por resueltos los datos que siguen pendientes.
    - RDA-006 sale de «Decisiones por tomar» (ya está aceptada). En esa misma tabla se agregan: «Aprobación del cliente de la Épica 03 (hito Prototipo)» y «Alinear `AGENTS.md` §6.4 y `DESIGN.md` §5 con la decisión D3 (nombre completo del autor)», ambas a cargo del desarrollador.
    - Se agrega una fila al historial que registre la renumeración de la segunda «Auditoría 06» a «Auditoría 07», para que los textos históricos que citan «AUD-06-001» y «AUD-06-002» sigan siendo trazables.

## Criterios de aceptación

Cada criterio se comprueba con la medición indicada y se informa con el valor obtenido. Un criterio que solo se verificó leyendo el código no se marca como cumplido.

- [x] `pnpm format:check`: sin diferencias. **Medido: «All matched files use Prettier code style!».**
- [x] `pnpm check`: 0 errores y 0 advertencias (se informa el número de hints). `pnpm build`: 0 errores y 0 advertencias. **Medido: `pnpm check` con 0 errores, 0 advertencias y 48 hints (todos de JSDoc); `pnpm build` con código 0, 2 páginas, sin avisos y 6 fuentes copiadas.**
- [x] En `dist/`: 0 archivos `.js` externos; el JavaScript en línea suma menos de 1 KB (se informa el tamaño); 0 comentarios HTML; 0 apariciones de `PENDIENTE_CLIENTE`. **Medido: 0 archivos `.js`; un script en línea de 769 B (450 B con gzip) en `index.html` y ninguno en `404.html`; 0 comentarios HTML; 0 apariciones de `PENDIENTE_CLIENTE`.**
- [x] Comparando las clases usadas en `dist/*.html` con las reglas del CSS compilado, no hay ninguna clase de utilidad sin regla (comprobación que ya hizo el informe). **Medido: 203 clases en `index.html` y 113 en `404.html`; 0 sin regla.**
- [x] Búsqueda en `dist/` de «Zonas de atención rápida», «Atención Inmediata», «Asistencia inmediata», «responderemos inmediatamente», «valor del servicio», «de inmediato», «Cotización Rápida» y «Ocultar opiniones adicionales»: 0 coincidencias. Ningún ítem de la lista «No publicar» de la definición de la épica aparece en `dist/`. **Medido: 0 coincidencias de las ocho frases. De la lista «No publicar» solo hay coincidencias dentro de las reseñas textuales y en textos aprobados («rapidez» en Quiénes somos y «Curarrehue» en la nota de cobertura).**
- [x] `dist/404.html`: exactamente 1 `header`, 1 `nav`, 1 `main`, 1 `footer`, 1 barra de acciones y 1 `h1`; ningún `main` anidado. **Medido: 1 `header`, 1 `nav`, 1 `main`, 1 `footer`, 1 barra de acciones y 1 `h1`; sin `main` anidado.**
- [x] A 360 × 640 px: etiqueta, `h1` y ambos botones del hero visibles completos entre 112 y 584 px con margen de al menos 8 px, y el espaciado de letra del `h1` igual al de su token (se informa el valor medido). A 320 × 568 px solo se informa la medición, sin exigir el criterio. **Medido a 360 × 640 px: etiqueta 152–170 px, `h1` 174–342 px (4 líneas), botones 462–510 y 518–566 px; margen de 40 px bajo el header y de 18 px sobre la barra. Espaciado de letra del `h1`: 1,52 px, igual a 0,04em de 38 px. A 320 × 568 px (solo informativo): los botones terminan en 510 y 566 px y la barra empieza en 512 px, así que el segundo botón queda bajo la barra.**
- [x] A 360 y 1280 px, el relleno vertical de las cuatro secciones de contenido es 40 px; sin desborde horizontal a 320, 360, 768, 1024 y 1280 px. **Medido a 360 y 1280 px: 40 px arriba y abajo en Quiénes somos, Opiniones y Servicios; en Contacto los 40 px van en su contenedor, para que la cinta final llegue al borde de la sección (40 px sobre el título y 40 px entre el contenido y la cinta). Sin desborde a 320, 360, 768, 1024 y 1280 px (`scrollWidth` igual a `clientWidth`), también en la 404.**
- [x] Ancho de lectura de los párrafos de Quiénes somos: 75 caracteres o menos por línea a 1280 px. **Medido a 1280 px: máximo de 66 caracteres por línea (bloque de 576 px).**
- [x] Todos los enlaces, botones y campos tienen al menos 44 × 44 px a 360 y a 1280 px (se informa la lista de los medidos y el mínimo encontrado). **Medido con el acordeón abierto: 43 elementos a 360 px y 46 a 1280 px; el menor mide 44 × 44 px (redes sociales). La lista completa está en la bitácora.**
- [x] Recorrido con Tab por toda la portada: todos los elementos interactivos muestran un contorno de foco de 3 px; sobre naranja, con contraste de al menos 3:1. **Medido: 39 elementos a 360 px y 42 a 1280 px, todos con contorno `solid` de 3 px y separación de 2 px. Sobre naranja el contorno es `on-accent` (6,09:1); el contraste mínimo del contorno contra lo que lo rodea es 6,09:1.**
- [x] Formulario, probado en navegador: envío vacío, envío sin los dos desplegables y teléfono con letras muestran error visible por campo, con región anunciable y foco en el primer campo inválido; un envío válido con «Taller & Cía #3» abre una sola ventana hacia el número de `negocio.js` con el mensaje esperado; con scripts desactivados se ve solo el enlace directo. **Medido en Chrome 154: el envío vacío, el envío sin los dos desplegables y el teléfono con letras no abren ninguna ventana, muestran el mensaje del navegador junto a cada campo inválido (región `aria-live`, `aria-invalid` y `aria-describedby`) y dejan el foco en el primer campo inválido; el envío válido con «Taller & Cía #3» abre una sola ventana hacia `wa.me` con el número de `negocio.js` y el mensaje esperado (`%26`, `%23` y `%0A`); con scripts desactivados el formulario no se muestra y se ve el enlace directo. No se probó con un lector de pantalla real (fuera de alcance).**
- [x] El número de WhatsApp no aparece en ningún archivo de `src/` fuera de `negocio.js` (búsqueda con resultado informado). **Medido: la búsqueda del número (con y sin espacios) y de `wa.me` en `src/` solo devuelve `src/data/negocio.js`.**
- [x] Bordes de campo con contraste de al menos 3:1; texto de campos de al menos 16 px; alto de campos de al menos 44 px. **Medido: borde `outline` con 5,43:1 contra la tarjeta y 6,10:1 contra el relleno del campo; texto de 18 px; alto de 48 px.**
- [x] Mapa a 360 px: texto mínimo de 12 px efectivos, sin rótulos superpuestos, rutas con contraste de al menos 3:1 (se informa el mínimo medido). **Medido a 360 px: texto mínimo de 14,9 px efectivos, 0 rótulos superpuestos (separación mínima de 8,8 px) y rutas con 6,10:1 contra el fondo.**
- [ ] Sin `rounded-*` fuera de los campos del formulario y los indicadores de estado; sin sombras distintas de `shadow-xl` y `shadow-2xl` en elementos flotantes (búsqueda con resultado informado). **Parcial. Medido en `src/`: `rounded-sm` solo en los campos del formulario y `rounded-full` solo en los dos puntos de `IndicadorDisponible`; `shadow-2xl` en `Header` y `AccionesFlotantes` y `shadow-xl` en `TarjetaDespacho`. Queda una sombra distinta: `shadow-[0_-1px_0_0_…]` en la barra móvil de `AccionesFlotantes` (Épica 02), que dibuja su línea superior de 1 px. No se modificó: reemplazarla por un borde cambia el alto de la barra y la zona útil de la primera pantalla. Requiere decisión del desarrollador.**
- [x] `git status` muestra solo archivos de `src/` y de `_planificacion/`. Ningún cambio en `AGENTS.md`, `DESIGN.md`, `README.md`, configuración, `.claude/` ni bitácoras existentes. **Medido: solo aparecen archivos de `src/` y de `_planificacion/`; ninguna bitácora existente cambió.**
- [x] La Auditoría 07 y la Auditoría 08 están registradas con estados coherentes con el resultado de esta iteración, y la bitácora de 03-05 usa la plantilla completa. **Hecho: Auditoría 07 (2 hallazgos) y Auditoría 08 (32 hallazgos) en `auditoria-tecnica.md`; bitácora `bitacora-03-05-2026-10-01.md` con todas las secciones de la plantilla.**

## Fuera de alcance

- Lighthouse, lector de pantalla real, teléfono real, apertura real de WhatsApp y de Google Maps, y la prueba en Safari de iOS: las hace el desarrollador (informe, sección 12). La bitácora debe listarlas como pendientes.
- Registrar la aprobación del cliente (AUD-08-023) y confirmar si el desarrollador aceptó la deuda técnica (AUD-07-001 y AUD-07-002): los registra el desarrollador.
- Editar `AGENTS.md` y `DESIGN.md` para alinearlos con D3 (AUD-08-032): requiere aprobación; aquí solo se registra.
- Reescribir mensajes de commit (AUD-08-030) y normalizar el fin de línea de las bitácoras existentes (AUD-08-029): no se tocan archivos inmutables; el desarrollador puede renormalizarlos con Git.
- Favicon, Open Graph, JSON-LD, `robots.txt`, `_headers`, imágenes y el cierre real de AUD-01-017: Épica 04.
- Validación de `PENDIENTE_CLIENTE` en compilación, Cloudflare Pages y dominio: Épica 05.
- Corregir la referencia a la «Auditoría 02» en `iteracion-04-03-auditoria-a11y-lighthouse.md`: se hace al planificar 04-03.

## Datos pendientes del cliente

- Aprobación de la Épica 03 por el cliente (hito «Prototipo»).
- Confirmación de que acepta publicar reseñas que mencionan tiempos y precio («alrededor de 30min», «tiempo récord», «precio»), según el informe (sección 12, punto 9).
- Los pendientes ya registrados (fotos, año de inicio, ficha de flota, tiempos por zona, enlace oficial al perfil de Google) siguen igual.