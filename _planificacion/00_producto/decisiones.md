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
| RDA-010 | Medición de conversiones de Google Ads                   | Propuesta  |
| RDA-011 | Fotos del negocio publicadas tal como están en sus redes | Aceptada   |
| RDA-012 | `sharp` como dependencia directa                         | Aceptada   |

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

## RDA-008 · Fuente única de datos del negocio en `src/data/negocio.js`

- **Fecha:** 2026-09-29
- **Estado:** Aceptada

**Contexto:** El teléfono aparece al menos ocho veces en el prototipo. Un cambio de número obligaría a editar muchos archivos y arriesga inconsistencias.
**Decisión:** Un módulo `src/data/negocio.js` exporta nombre, teléfono (formato visible y E.164), WhatsApp, mensajes predeterminados, correo, dirección, coordenadas, horario, cobertura, redes sociales y datos de facturación. Componentes, JSON-LD y metadatos lo consumen. Los datos no confirmados llevan el valor `PENDIENTE_CLIENTE`.
**Alternativas consideradas:** Colección de contenido de Astro (excesivo para un solo registro); variables de entorno (no aptas para datos públicos de contenido).
**Consecuencias:** Un solo punto de cambio. La compilación debe fallar si queda algún `PENDIENTE_CLIENTE` al preparar producción (validación en la iteración 05-01).

## RDA-009 · Una página con tres secciones ancladas

- **Fecha:** 2026-09-29
- **Estado:** Aceptada

**Contexto:** La propuesta contrata tres secciones (Inicio, Servicios, Contacto). Las instrucciones del proyecto piden además cobertura, testimonios y quiénes somos.
**Decisión:** El sitio es una sola página (`/`) con tres secciones ancladas (`#inicio`, `#servicios`, `#contacto`). Quiénes somos y reseñas son bloques dentro de Inicio; cobertura y equipamiento son bloques dentro de Contacto y Servicios. Existe además una página `404`.
**Alternativas consideradas:** Páginas separadas por sección (más navegación en una emergencia y fuera de lo contratado).
**Consecuencias:** Cumple el alcance sin cotizaciones adicionales. Los anclajes permiten enlazar anuncios a secciones específicas.

**Actualización 2026-10-02:** Inicio incluye además la galería «Trabajos en terreno» (iteración 04-02), entre Quiénes somos y las opiniones. Siguen siendo tres secciones y tres anclas: la galería es un bloque de Inicio y no tiene ancla propia.

## RDA-010 · Medición de conversiones de Google Ads

- **Fecha:** 2026-09-29
- **Estado:** Propuesta (se decide en la iteración 05-02)

**Contexto:** La campaña de Google Ads necesita medir llamadas y clics de WhatsApp. La etiqueta de Google (gtag.js) agrega unos 100 KB de JavaScript y requiere evaluar consentimiento.
**Decisión propuesta:** Priorizar extensiones de llamada y conversiones de llamadas desde anuncios, que no requieren código en el sitio. Si se necesita medir clics en el sitio, cargar gtag.js de forma diferida después de la interacción o de `load`, y medir el impacto en Lighthouse antes de aceptarlo.
**Alternativas consideradas:** Sin medición en el sitio (se pierde información de conversión); Google Tag Manager (más peso y complejidad).
**Consecuencias:** Posible impacto de rendimiento que debe cuantificarse. Requiere decisión conjunta con el desarrollador.

## RDA-011 · Fotos del negocio publicadas tal como están en sus redes

- **Fecha:** 2026-10-01 (decisión del desarrollador; registrada el 2026-10-02 en la iteración 04-02)
- **Estado:** Aceptada

**Contexto:** El sitio necesita fotos reales (AUD-01-011) y el cliente no ha entregado originales. El desarrollador entregó el 2026-10-01 diez fotos de operaciones tomadas de las redes sociales del negocio. Pasaron por un proceso de mejora que regeneró parte de su contenido: en varias, los rótulos de la grúa muestran teléfonos y un nombre incorrectos. También se ven patentes de terceros, personas y el emblema de Bomberos de Pucón.
**Decisión:** Publicar las diez fotos tal como están: la 6 fija en el hero y las otras nueve en la galería «Trabajos en terreno». Los riesgos anteriores los acepta el desarrollador. Ningún texto alternativo transcribe los rótulos (teléfonos, nombres, patentes) ni nombra la marca o el modelo de las grúas, y el teléfono válido es siempre el de `src/data/negocio.js`.
**Alternativas consideradas:** Esperar los originales sin procesar (deja el hero y la galería sin fotos reales por un plazo indefinido); retocar o recortar los rótulos, las patentes y las personas (más manipulación sobre imágenes ya alteradas, y fuera de alcance).
**Consecuencias:** El sitio muestra trabajos reales del negocio desde la primera versión. Un visitante puede leer en una foto un teléfono que no es el del negocio: en el hero la foto va al 35 % bajo el velo, pero en la galería los rótulos se leen. Cuando Yerko entregue los originales sin procesar, se reemplazan los archivos de `src/assets/fotos/` conservando los nombres, y se revisan los textos alternativos.

## RDA-012 · `sharp` como dependencia directa

- **Fecha:** 2026-10-01 (decisión del desarrollador; registrada el 2026-10-02 en la iteración 04-02)
- **Estado:** Aceptada

**Contexto:** Astro optimiza las imágenes con `sharp`, que trae como dependencia opcional. Con PNPM, que no expone en la raíz del proyecto las dependencias de otros paquetes, la compilación no lo encuentra: `pnpm build` falla con `MissingSharp` apenas se usa `<Image />`, `<Picture />` o `getImage` (reproducido en 04-01; la documentación de Astro indica instalarlo a mano con gestores estrictos).
**Decisión:** Declarar `sharp` en `dependencies` de `package.json` (`pnpm add sharp`, versión 0.35.5, la misma que ya resolvía Astro). Es la única dependencia nueva de la iteración 04-02.
**Alternativas consideradas:** `publicHoistPattern` en `pnpm-workspace.yaml` (descartada: depende de la configuración del instalador y es fácil de perder en Cloudflare Pages u otra máquina); `passthroughImageService` de Astro (no se usa: publica las fotos sin optimizar, de 0,9 a 2,3 MB cada una).
**Consecuencias:** Peso en `dist/`: 0 B, porque `sharp` solo se ejecuta al compilar (`AGENTS.md` §5). No descarga nada nuevo: el paquete ya estaba en `node_modules` como dependencia opcional de Astro, y `pnpm-lock.yaml` solo deja de marcarlo como opcional. La compilación en frío genera 96 variantes de imagen (unos 25 s en la máquina del desarrollador); las siguientes las toman de la caché. Hay que confirmar en 04-03 que Cloudflare Pages lo instala y compila.
