# Registro de Decisiones Arquitectónicas (RDA)

Consolidado de las decisiones técnicas del proyecto. Formato y reglas en `_planificacion/README.md`.

| RDA     | Título                                                   | Estado     |
| :------ | :------------------------------------------------------- | :--------- |
| RDA-001 | Astro 7 en modo estático (SSG) sin adaptador             | Aceptada   |
| RDA-002 | Tailwind CSS 4 con tokens en CSS (`@theme`)              | Aceptada   |
| RDA-003 | Sin React en la primera versión                          | Aceptada   |
| RDA-004 | Fuentes autoalojadas con la Fonts API de Astro           | Aceptada   |
| RDA-005 | Íconos como SVG en línea en tiempo de compilación        | Aceptada   |
| RDA-006 | Formulario de cotización que compone un mensaje de WhatsApp | Aceptada |
| RDA-007 | Reseñas de Google renderizadas en estático               | Aceptada   |
| RDA-008 | Fuente única de datos del negocio en `src/data/negocio.js` | Aceptada |
| RDA-009 | Una página con tres secciones ancladas                   | Aceptada   |
| RDA-010 | Medición de conversiones de Google Ads                   | Aceptada   |
| RDA-011 | Fotos del negocio publicadas tal como están en sus redes | Aceptada   |
| RDA-012 | `sharp` como dependencia directa                         | Aceptada   |
| RDA-013 | Cloudflare Web Analytics                                 | Aceptada   |
| RDA-014 | Política de seguridad de contenido (`security.csp`) de Astro | Descartada |

---

## RDA-001 · Astro 7 en modo estático (SSG) sin adaptador

- **Fecha:** 2026-09-29
- **Estado:** Aceptada

**Contexto:** El sitio es presentacional, sin datos dinámicos, y debe cargar lo más rápido posible en celulares con mala señal.
**Decisión:** Astro 7 con salida estática (`output` por defecto). Publicación del directorio `dist/` en Cloudflare Pages, sin `@astrojs/cloudflare`.
**Alternativas consideradas:** SSR en Cloudflare Workers (innecesario, agrega complejidad y superficie de fallo); HTML plano (sin componentes ni optimización de imágenes).
**Consecuencias:** HTML precompilado servido desde el borde de Cloudflare. Cualquier necesidad de servidor futura (por ejemplo un endpoint de formulario) requiere una nueva RDA.

## RDA-002 · Tailwind CSS 4 con tokens en CSS (`@theme`)

- **Fecha:** 2026-09-29
- **Estado:** Aceptada

**Contexto:** El prototipo usa el CDN de Tailwind con configuración en JavaScript, lo que no es apto para producción.
**Decisión:** Tailwind 4 mediante `@tailwindcss/vite`. Los tokens de `DESIGN.md` se declaran en `src/styles/global.css` dentro de `@theme`. No se crea `tailwind.config.js`.
**Alternativas consideradas:** Tailwind 3 con `@astrojs/tailwind` (integración obsoleta); CSS propio (más lento de mantener).
**Consecuencias:** CSS generado solo con las clases usadas. Los nombres de clases del prototipo se conservan en lo posible para facilitar la migración.

## RDA-003 · Sin React en la primera versión

- **Fecha:** 2026-09-29
- **Estado:** Aceptada

**Contexto:** El stack contempla React para islas interactivas, pero ninguna función del alcance contratado lo requiere.
**Decisión:** No se instala `@astrojs/react`. La interactividad mínima (menú, formulario) se resuelve con HTML nativo y `<script>` de Astro.
**Alternativas consideradas:** Instalar React "por si acaso" (agrega unos 45 KB comprimidos por isla y costo de hidratación).
**Consecuencias:** Cero JavaScript de framework en el cliente. Si una función futura lo justifica, se instala con una RDA que la reemplace parcialmente.

## RDA-004 · Fuentes autoalojadas con la Fonts API de Astro

- **Fecha:** 2026-09-29
- **Estado:** Aceptada

**Contexto:** El prototipo carga Barlow Condensed, Chivo y Material Symbols desde Google Fonts, con peticiones a terceros que bloquean el renderizado.
**Decisión:** Usar la Fonts API integrada de Astro (estable desde Astro 6) para descargar y servir Barlow Condensed (600, 700, 800) y Chivo (400, 600, 700) desde el propio dominio, con subconjunto latino, `font-display: swap` y precarga solo de los dos pesos críticos.
**Alternativas consideradas:** Paquetes `@fontsource` (válido, pero más configuración manual); Google Fonts remoto (descartado).
**Consecuencias:** Sin dependencias de terceros en la carga. Verificar la sintaxis vigente en la documentación de Astro al implementar.
**Actualización 2026-09-30:** la Fonts API es estable (clave `fonts` de `astro.config.mjs`, sin `experimental`) desde Astro 6. Proveedor elegido: `fontProviders.fontsource()`; las fuentes se descargan al compilar y se sirven desde el propio dominio. Si el proveedor no responde, `pnpm build` solo emite avisos (ver AUD-04-003).

## RDA-005 · Íconos como SVG en línea en tiempo de compilación

- **Fecha:** 2026-09-29
- **Estado:** Aceptada

**Contexto:** La fuente Material Symbols pesa cientos de KB y produce texto visible ("call", "schedule") mientras carga.
**Decisión:** Renderizar los íconos como SVG en línea durante la compilación con `astro-icon` y los sets `@iconify-json/material-symbols` y `@iconify-json/simple-icons` (WhatsApp, Instagram, Facebook, TikTok).
**Alternativas consideradas:** Copiar SVG a mano en componentes (válido si se prefiere cero dependencias; más tedioso); fuente de íconos (descartada).
**Consecuencias:** Solo se incluyen los íconos usados, sin JavaScript. Si `astro-icon` no es compatible con Astro 7 al momento de implementar, se usa la alternativa manual.
**Actualización 2026-09-30:** `astro-icon` 1.2.0 verificado con Astro 7 junto con `@iconify-json/material-symbols` y `@iconify-json/simple-icons`. Los nombres de ícono viven en un único mapa en `src/components/Icono.astro`, que además marca los íconos con `aria-hidden="true"`.

## RDA-006 · Formulario de cotización que compone un mensaje de WhatsApp

- **Fecha:** 2026-09-29
- **Estado:** Aceptada (aprobada por el desarrollador el 2026-09-30 e implementada en 03-04)

**Contexto:** El prototipo tiene un formulario que solo muestra un `alert()`. El alcance no incluye backend ni envío de correos, y el canal real del negocio es WhatsApp.
**Decisión:** Mantener el formulario con validación HTML nativa y, al enviarlo, construir con un `<script>` de Astro (menos de 1 KB) un mensaje de WhatsApp con tipo de vehículo, estado, origen y destino, y abrir `wa.me`. Sin JavaScript, el formulario degrada a un enlace de WhatsApp genérico.
**Alternativas consideradas:** Cloudflare Pages Functions con envío de correo (fuera de alcance, requiere servidor y proveedor de correo); eliminar el formulario (pierde un canal de cotización estructurada).
**Consecuencias:** No se almacenan datos personales en ningún servidor. El mensaje llega al mismo WhatsApp que usa el cliente.

## RDA-007 · Reseñas de Google renderizadas en estático

- **Fecha:** 2026-09-29
- **Estado:** Aceptada

**Contexto:** Se requiere prueba social con opiniones de Google Maps. Los widgets y la API de Places agregan JavaScript, costo y dependencia externa.
**Decisión:** Seleccionar de 3 a 6 reseñas reales del perfil de Google Maps, guardarlas en `src/data/resenas.js` (texto breve, nombre abreviado, fecha, calificación) y mostrarlas en estático con enlace al perfil. No se incluye `AggregateRating` ni `Review` en el JSON-LD, porque Google no muestra fragmentos de reseñas autopublicadas para negocios locales.
**Alternativas consideradas:** Widget de terceros (JavaScript y rastreo); API de Places en compilación (requiere clave y facturación).
**Consecuencias:** Las reseñas se actualizan manualmente. El cliente debe aprobar la selección.

**Actualización 2026-09-30:** el desarrollador entregó 10 reseñas seleccionadas (no de 3 a 6), que se publican textuales y con el nombre completo del autor tal como aparece en Google. Se mantiene la prohibición de `AggregateRating` y `Review` en el marcado.

**Actualización 2026-10-06 (iteración 05-04, ajustes del cliente):** las diez reseñas se muestran visibles, sin acordeón ni botón «Ver 4 opiniones más»; hasta ahora se veían seis y las otras cuatro quedaban en un acordeón nativo. Los textos, los nombres y los enlaces no cambian, y se mantiene «Ver más opiniones en Google». Junto al título de la sección va el logotipo de Google, como recurso local y sin modificar (`DESIGN.md` §6.2): es una marca de un tercero y solo indica el origen de las opiniones. Sigue sin haber widgets, JavaScript ni `AggregateRating` o `Review` en el marcado.

## RDA-008 · Fuente única de datos del negocio en `src/data/negocio.js`

- **Fecha:** 2026-09-29
- **Estado:** Aceptada

**Contexto:** El teléfono aparece al menos ocho veces en el prototipo. Un cambio de número obligaría a editar muchos archivos y arriesga inconsistencias.
**Decisión:** Un módulo `src/data/negocio.js` exporta nombre, teléfono (formato visible y E.164), WhatsApp, mensajes predeterminados, correo, dirección, coordenadas, horario, cobertura y redes sociales. La razón social y el RUT no se publican (decisión del cliente, reunión del 2026-10-04) y se retiraron de `negocio.js` en la iteración 05-03. Componentes, JSON-LD y metadatos lo consumen. Los datos no confirmados llevan el valor `PENDIENTE_CLIENTE`.
**Alternativas consideradas:** Colección de contenido de Astro (excesivo para un solo registro); variables de entorno (no aptas para datos públicos de contenido).
**Consecuencias:** Un solo punto de cambio. La compilación debe fallar si queda algún `PENDIENTE_CLIENTE` al preparar producción (la validación se adelantó a la iteración 04-02; la iteración 05-01 la reevalúa).

## RDA-009 · Una página con tres secciones ancladas

- **Fecha:** 2026-09-29
- **Estado:** Aceptada

**Contexto:** La propuesta contrata tres secciones (Inicio, Servicios, Contacto). Las instrucciones del proyecto piden además cobertura, testimonios y quiénes somos.
**Decisión:** El sitio es una sola página (`/`) con tres secciones ancladas (`#inicio`, `#servicios`, `#contacto`). Quiénes somos y reseñas son bloques dentro de Inicio; cobertura y equipamiento son bloques dentro de Contacto y Servicios. Existe además una página `404`.
**Alternativas consideradas:** Páginas separadas por sección (más navegación en una emergencia y fuera de lo contratado).
**Consecuencias:** Cumple el alcance sin cotizaciones adicionales. Los anclajes permiten enlazar anuncios a secciones específicas.

**Actualización 2026-10-02:** Inicio incluye además la galería «Trabajos en terreno» (iteración 04-02), entre Quiénes somos y las opiniones. Siguen siendo tres secciones y tres anclas: la galería es un bloque de Inicio y no tiene ancla propia.

**Actualización 2026-10-06 (iteración 05-04, pedido del cliente en la reunión del 2026-10-04):** el orden de la página pasa a ser hero, cinta de métricas, Servicios, Quiénes somos, galería «Trabajos en terreno», opiniones de Google y Contacto. Siguen las tres anclas: `#inicio` contiene el hero y la cinta de métricas; `#servicios`, los ocho servicios y el equipamiento; `#contacto`, los canales, los medios de pago, el formulario y la cobertura. Quiénes somos, la galería y las opiniones dejan de ser bloques de Inicio: son secciones entre `#servicios` y `#contacto`, cada una con su `h2`, sin ancla propia y sin entrada en el menú. Esto reemplaza lo que la decisión y la actualización del 2026-10-02 dicen sobre la ubicación de esos tres bloques. Sigue siendo una sola página, con la `404` aparte.

**Actualización 2026-10-06 (iteración 05-04, ajustes del cliente tras la vista previa):** la página pasa de tres a seis anclas, en este orden: `#inicio`, `#servicios`, `#quienes-somos`, `#trabajos`, `#opiniones` y `#contacto`. El menú muestra los seis enlaces desde 768 px («Inicio», «Servicios», «Quiénes somos», «Trabajos en terreno», «Opiniones» y «Contacto») y, bajo 768 px, solo «Inicio», «Servicios» y «Contacto», como antes. Esto reemplaza lo que el título de esta RDA, la decisión y las actualizaciones anteriores dicen sobre «tres secciones ancladas» y sobre que Quiénes somos, la galería y las opiniones no tienen ancla ni entrada en el menú. Sigue siendo una sola página, con la `404` aparte, y el alcance contratado no cambia: no se agregan secciones, solo enlaces a las que ya existían.

## RDA-010 · Medición de conversiones de Google Ads

- **Fecha:** 2026-09-29
- **Estado:** Aceptada (decisión del desarrollador del 2026-10-06, iteración 05-02)

**Contexto:** La campaña de Google Ads necesita medir llamadas y clics de WhatsApp. La etiqueta de Google (gtag.js) agrega unos 100 KB de JavaScript y requiere evaluar consentimiento.
**Decisión propuesta:** Priorizar extensiones de llamada y conversiones de llamadas desde anuncios, que no requieren código en el sitio. Si se necesita medir clics en el sitio, cargar gtag.js de forma diferida después de la interacción o de `load`, y medir el impacto en Lighthouse antes de aceptarlo.
**Alternativas consideradas:** Sin medición en el sitio (se pierde información de conversión); Google Tag Manager (más peso y complejidad).
**Consecuencias:** Posible impacto de rendimiento que debe cuantificarse. Requiere decisión conjunta con el desarrollador.

**Decisión (2026-10-06, iteración 05-02):** el desarrollador adopta la propuesta original, solo en su primera parte. Las llamadas se miden con el recurso de llamada del anuncio (lo que la propuesta llama «extensiones de llamada») y con la conversión «Llamadas desde anuncios» de Google Ads, sin código en el sitio. No se agrega la etiqueta de Google (`gtag.js`) ni Google Tag Manager, tampoco de forma diferida. Los clics de WhatsApp en el sitio no se miden.
**Consecuencias de la decisión:** el sitio no carga JavaScript de Google y el límite de RDA-006 no se toca por este motivo; no hay impacto de rendimiento que cuantificar ni consentimiento que evaluar. Se pierde la información de conversión dentro del sitio: no se sabrá cuántas visitas terminan en un clic de «Llamar» o de WhatsApp, solo cuántas llamadas nacen del anuncio. Las visitas se cuentan aparte (RDA-013). Si más adelante se quiere medir clics en el sitio, hace falta una RDA nueva y medir antes el impacto en Lighthouse.

**Actualización 2026-10-07 (fase B de 05-02):** la decisión sigue «Aceptada», pero aún no está implementada: la campaña de Google Ads, el recurso de llamada y la conversión «Llamadas desde anuncios» no se crearon, porque el desarrollador no tiene acceso a la cuenta. La confirmación de que quedó implementada pasa a la iteración 05-06. En el sitio no hay ninguna etiqueta de Google.

## RDA-011 · Fotos del negocio publicadas tal como están en sus redes

- **Fecha:** 2026-10-01 (decisión del desarrollador; registrada el 2026-10-02 en la iteración 04-02)
- **Estado:** Aceptada

**Contexto:** El sitio necesita fotos reales (AUD-01-011) y el cliente no ha entregado originales. El desarrollador entregó el 2026-10-01 diez fotos de operaciones tomadas de las redes sociales del negocio. Pasaron por un proceso de mejora que regeneró parte de su contenido: en varias, los rótulos de la grúa muestran teléfonos y un nombre incorrectos. También se ven patentes de terceros, personas y el emblema de Bomberos de Pucón.
**Decisión:** Publicar las diez fotos tal como están: la 6 fija en el hero y las otras nueve en la galería «Trabajos en terreno». Los riesgos anteriores los acepta el desarrollador. Ningún texto alternativo transcribe los rótulos (teléfonos, nombres, patentes) ni nombra la marca o el modelo de las grúas, y el teléfono válido es siempre el de `src/data/negocio.js`.
**Alternativas consideradas:** Esperar los originales sin procesar (deja el hero y la galería sin fotos reales por un plazo indefinido); retocar o recortar los rótulos, las patentes y las personas (más manipulación sobre imágenes ya alteradas, y fuera de alcance).
**Consecuencias:** El sitio muestra trabajos reales del negocio desde la primera versión. Un visitante puede leer en una foto un teléfono que no es el del negocio: en el hero la foto va al 35 % bajo el velo, pero en la galería los rótulos se leen. Cuando Yerko entregue los originales sin procesar, se reemplazan los archivos de `src/assets/fotos/` conservando los nombres, y se revisan los textos alternativos.

**Actualización 2026-10-06 (iteración 05-04):** la foto 7 sale de la galería y pasa a la franja «Quiénes somos», con el mismo texto alternativo. El reparto queda así: la 6 en el hero, la 7 en «Quiénes somos» y las otras ocho en la galería (la 10 destacada y siete más); ninguna se repite en la página. La 7 se publica recortada a 16:9 y la 2, a 2:1; los recortes se hacen al compilar y los archivos de `src/assets/fotos/` no cambian. La regla de los textos alternativos sigue igual.

## RDA-012 · `sharp` como dependencia directa

- **Fecha:** 2026-10-01 (decisión del desarrollador; registrada el 2026-10-02 en la iteración 04-02)
- **Estado:** Aceptada

**Contexto:** Astro optimiza las imágenes con `sharp`, que trae como dependencia opcional. Con PNPM, que no expone en la raíz del proyecto las dependencias de otros paquetes, la compilación no lo encuentra: `pnpm build` falla con `MissingSharp` apenas se usa `<Image />`, `<Picture />` o `getImage` (reproducido en 04-01; la documentación de Astro indica instalarlo a mano con gestores estrictos).
**Decisión:** Declarar `sharp` en `dependencies` de `package.json` (`pnpm add sharp`, versión 0.35.5, la misma que ya resolvía Astro). Es la única dependencia nueva de la iteración 04-02.
**Alternativas consideradas:** `publicHoistPattern` en `pnpm-workspace.yaml` (descartada: depende de la configuración del instalador y es fácil de perder en Cloudflare Pages u otra máquina); `passthroughImageService` de Astro (no se usa: publica las fotos sin optimizar, de 0,9 a 2,3 MB cada una).
**Consecuencias:** Peso en `dist/`: 0 B, porque `sharp` solo se ejecuta al compilar (`AGENTS.md` §5). No descarga nada nuevo: el paquete ya estaba en `node_modules` como dependencia opcional de Astro, y `pnpm-lock.yaml` solo deja de marcarlo como opcional. La compilación en frío genera 96 variantes de imagen (unos 25 s en la máquina del desarrollador); las siguientes las toman de la caché. Confirmado en Cloudflare Pages el 2026-10-02 (fase B de 04-03, registro de compilación de `main` entregado por el desarrollador): `sharp` 0.35.5 instalado con su binario nativo (`@img/sharp-libvips-linux-x64@1.3.4`) y 96 optimizaciones de imágenes a AVIF y WebP, con Node v24.13.1 y pnpm 12.8.1.

## RDA-013 · Cloudflare Web Analytics

- **Fecha:** 2026-10-06 (decisión del desarrollador; registrada en la iteración 05-02)
- **Estado:** Aceptada (decisión del desarrollador del 2026-10-07, con la medición de la fase B de 05-02; hasta entonces, «Aceptada, condicionada a la medición»)

**Contexto:** El sitio no tiene ninguna medición de visitas. Cloudflare Web Analytics agrega a cada página un script propio de Cloudflare (`beacon.min.js`, servido desde `static.cloudflareinsights.com`). En Cloudflare Pages se activa con un clic en el panel y el script se agrega en el siguiente despliegue, sin tocar el código del repositorio. Cuenta visitas y visitantes; no cuenta llamadas ni clics de WhatsApp. Es JavaScript de terceros en tiempo de ejecución, y choca con el límite de JavaScript de RDA-006 (menos de 1 KB; hoy 960 B en la portada) y con la regla «sin recursos de terceros» de `AGENTS.md` §7.3 si se activa sin medir su efecto.
**Decisión:** Se activa y se mide el impacto. La decisión se cierra con la medición de la fase B de 05-02 (`evidencia-05-02-fase-b.md`).
**Condición:** con el script activo, Lighthouse móvil da 95 o más en las cuatro categorías (mediana de tres ejecuciones), LCP de 2,5 s o menos y CLS 0, y el JavaScript propio del sitio sigue por debajo de 1 KB (el script de Cloudflare es de terceros y se mide aparte). Si no se cumple, se desactiva (Web Analytics › Manage site › Disable) y esta RDA pasa a «Descartada».
**Alternativas consideradas:** No usarlo y medir solo con Search Console (búsquedas y clics desde Google) y Google Ads (llamadas desde anuncios): cero JavaScript de terceros, pero sin cifras de visitas totales. Instalación manual del script en `LayoutBase` (descartada: obliga a editar `src/` y a escribir el identificador del sitio en un repositorio público, sin ninguna ventaja sobre la activación desde el panel).
**Consecuencias:** La página carga un script de terceros que el repositorio no contiene: `dist/` y lo publicado dejan de ser idénticos, como ya ocurrió con la ofuscación de correos de Cloudflare (AUD-09-014, desactivada el 2026-10-02). La referencia de rendimiento es la de producción en 05-01: móvil, Rendimiento 97, 99 y 99, las otras tres categorías en 100, LCP 2,3, 1,8 y 1,8 s, CLS 0 y TBT 0 ms; escritorio, 100 en las cuatro y LCP 0,6 s. Si el script ya estaba activo cuando se tomaron esas cifras (se comprueba en la fase B), ya lo incluyen, y es el origen probable de los 11 KiB de «JavaScript heredado» de AUD-10-001. La regla de RDA-006 se lee desde ahora sobre el JavaScript propio; el de terceros se informa por separado. Mientras no haya política de seguridad de contenido (RDA-014), el script no necesita declararse.

**Actualización 2026-10-07 (fase B de 05-02, evidencia del desarrollador):** la condición se cumple y Web Analytics **se mantiene**; la RDA queda «Aceptada». PageSpeed móvil en producción con el script activo, tres ejecuciones: Rendimiento 96, 96 y 94 (mediana 96); Accesibilidad, Buenas prácticas y SEO, 100 en las tres; LCP 2,5 s en las tres; CLS 0; TBT 0, 0 y 10 ms. Escritorio: 100 en las cuatro categorías; LCP 0,6, 0,7 y 0,6 s. El LCP queda **justo en el límite** de 2,5 s, sin margen, y la tercera ejecución móvil dio 94 por sí sola (la regla es la mediana). JavaScript propio: 960 B, sin cambios. El script ya estaba activo cuando se midió 05-01: el desarrollador lo había activado antes, así que aquellas cifras (97, 99 y 99; LCP de 1,8 a 2,3 s) ya lo incluían y no existe una medición sin él. La diferencia entre ambas tandas se atribuye a la variación entre ejecuciones de PageSpeed y no a la activación del script; es una interpretación, no una medición. PageSpeed atribuye al script los 11 KiB de «JavaScript heredado» (AUD-10-001, cerrado).
**Consecuencias de la decisión:** el sitio carga en cada página un recurso de terceros en tiempo de ejecución (`static.cloudflareinsights.com/beacon.min.js`), que el repositorio no contiene. Eso contradice la regla 3 de las reglas técnicas de `AGENTS.md` (§7.3, «Sin recursos de terceros en tiempo de ejecución»). La excepción no está escrita en `AGENTS.md`: es una decisión pendiente del desarrollador (`registro-log.md`, «Decisiones por tomar»). Con el LCP en el límite, cualquier cambio que agregue peso a la primera vista debe medirse de nuevo. Para revertir: Web Analytics › Manage site › Disable, y esta RDA pasa a «Descartada».

## RDA-014 · Política de seguridad de contenido (`security.csp`) de Astro

- **Fecha:** 2026-10-06 (decisión del desarrollador; registrada en la iteración 05-02)
- **Estado:** Descartada

**Contexto:** Astro puede generar una política de seguridad de contenido con `security.csp` en `astro.config.mjs`. La bitácora 04-02 la probó en una compilación aparte (`security.csp: true`, sin tocar la configuración) y recomendó decidirla junto con la medición. Resultados de esa prueba: 0 infracciones en Chrome a 360 y 1280 px y en el 404, con el formulario, las fuentes, los estilos y las fotos funcionando; la compilación emite un aviso (el resaltado de código de Markdown, Shiki, no es compatible con la CSP), que rompería la regla de cero advertencias aunque el sitio no usa Markdown; la política por defecto es incompleta (no incluye `default-src`, `img-src`, `object-src` ni `base-uri`); y `frame-ancestors`, que no funciona en una etiqueta `<meta>`, ya está en `public/_headers`. Su comportamiento en Cloudflare Pages no se verificó.
**Decisión:** Descartada por ahora. El sitio es estático y sin scripts externos propios, y con Web Analytics activo (RDA-013) habría que declarar el script de Cloudflare en la política. `astro.config.mjs` no se toca. Se reabre, con una RDA nueva, solo si cambia el panorama: por ejemplo, si el sitio pasa a cargar scripts propios de otros dominios o a recibir contenido de terceros.
**Alternativas consideradas:** Activarla con la política por defecto (deja el aviso de Shiki y una política incompleta); activarla completa con `security.csp.directives` y declarando el script de Cloudflare (más configuración que mantener, para un riesgo bajo en un sitio sin contenido de terceros ni datos de usuarios).
**Consecuencias:** El sitio sigue sin una política de scripts y estilos; la protección contra el enmarcado se mantiene con `X-Frame-Options: DENY` y `Content-Security-Policy: frame-ancestors 'none'` en `_headers`. Las cabeceras `Report-To` y `NEL` que agrega Cloudflare (AUD-09-017) no entran en conflicto con nada.
