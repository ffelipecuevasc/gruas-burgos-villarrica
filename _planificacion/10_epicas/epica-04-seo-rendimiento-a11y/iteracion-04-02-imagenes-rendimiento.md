# Iteración 04-02 · Fotos, galería, rendimiento y cabeceras

- **Épica:** 04 · SEO técnico, rendimiento y accesibilidad
- **Estado:** En revisión
- **Rama sugerida:** `main` (Cloudflare Pages aún no está conectado)
- **Depende de:** 04-01
- **RDA relacionadas:** RDA-001, RDA-004, RDA-006, RDA-008, RDA-009, RDA-011, RDA-012
- **Hallazgos que cierra:** AUD-01-017

## Objetivo

Publicar las fotos reales del negocio (una fija en el hero y una galería breve de trabajos en Inicio) sin perder la primera pantalla ni el rendimiento, y dejar el sitio listo para conectar la vista previa de Cloudflare Pages al iniciar 04-03: cabeceras, presupuesto medido y una compilación de producción que no publique datos provisionales.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. La forma de lograrlo la decide quien implementa.

## Reglas de la iteración

1. Se autoriza **una sola dependencia nueva: `sharp`**, instalada con `pnpm add sharp`. Con pnpm, Astro no la encuentra de otra forma y la compilación falla con `MissingSharp` apenas se usa `<Image />`, `<Picture />` o `getImage` (reproducido el 2026-10-01; la documentación de Astro lo confirma). No se agrega ninguna otra. Si se quiere medir con Lighthouse en local, se pide permiso para usar una herramienta temporal (`pnpm dlx`); la medición formal es de 04-03.
2. Sin JavaScript nuevo en el cliente: la galería no abre visores ni tiene interacción (RDA-006: menos de 1 KB en total).
3. Sin carrusel, transiciones ni efectos de scroll (`DESIGN.md` §8).
4. **Autorizado:** editar `DESIGN.md` §5 (componentes: `Hero` con foto y el nuevo bloque de galería) y §7 (imágenes), solo para documentar lo que define esta iteración, y modificar `package.json` y `pnpm-lock.yaml` únicamente mediante `pnpm add sharp`. Editar `astro.config.mjs` requiere consulta.
5. No se hacen `commit`, `push` ni cambios de rama.

## Contenido aprobado de esta iteración (copiar tal cual)

**Hero:** foto 6, fija, con la opacidad y el velo de `DESIGN.md` §7. Texto alternativo: «Grúa con un auto accidentado sobre la plataforma, de noche, en un camino a las afueras de Villarrica.»

**Galería** (bloque dentro de `#inicio`, entre Quiénes somos y las opiniones). Título: «Trabajos en terreno». Sin párrafo ni leyendas. Orden y textos alternativos:

1. Foto 10: «Grúa trabajando junto a Bomberos en un rescate nocturno a las afueras de Villarrica.»
2. Foto 1: «Grúa trasladando un auto accidentado por un camino de Villarrica.»
3. Foto 7: «Grúa rescatando con cable una camioneta que se salió del camino entre Villarrica y Pucón.»
4. Foto 2: «Dos grúas trabajando juntas en la carretera, a las afueras de Villarrica.»
5. Foto 5: «Grúa de noche en Villarrica con un auto chocado sobre la plataforma.»
6. Foto 3: «Grúa llegando al centro de Villarrica con un jeep sobre la plataforma.»
7. Foto 8: «Grúa llegando a rescatar un auto pequeño a la orilla de un camino de tierra, a las afueras de Villarrica.»
8. Foto 4: «Grúa en Pucón trasladando un vehículo que quedó en pana.»
9. Foto 9: «Grúa llegando al atardecer a un camino a los pies del volcán Villarrica.»

## Tareas

0. **Procesamiento de imágenes en la compilación.** `sharp` queda declarada como dependencia directa y `pnpm build` genera las variantes de imagen sin `MissingSharp`. El peso añadido a `dist/` es 0 (solo se usa al compilar).
1. **Foto del hero (AUD-01-017).**
    - La foto 6 se sirve en formatos modernos, con tamaños para móvil y escritorio, dimensiones explícitas, carga prioritaria y el encuadre que mantiene la grúa visible a 360 px y a 1280 px.
    - La primera pantalla a 360 × 640 px sigue cumpliendo la regla transversal 6, y el contraste del texto del hero sobre la foto sigue en AA.
    - El campo `image` del JSON-LD de la portada (hoy apunta al archivo original de 2,1 MB) pasa a una versión optimizada del hero, de al menos 1200 px de ancho, que responde con código 200.
    - Las imágenes se sirven solo en formatos modernos y, si hace falta una reserva, en un formato ligero: la reserva por defecto de `<Picture />` generó PNG pesados en la prueba y no debe llegar a `dist/`.
2. **Galería de trabajos.**
    - Nueve fotos en el orden aprobado, en formatos modernos, con tamaños acordes a la cuadrícula, dimensiones explícitas y carga diferida.
    - Sin desplazamiento de diseño al cargar, legible a 360 px, ángulos rectos y sin sombras (`DESIGN.md` §4).
    - El bloque tiene nombre accesible (su título) y encaja en la jerarquía de encabezados de `#inicio`.
3. **Decisiones documentadas.**
    - `decisiones.md` registra **RDA-011** («Fotos del negocio publicadas tal como están en sus redes»): origen, fecha de la decisión (2026-10-01) y riesgos aceptados por el desarrollador (rótulos regenerados con teléfonos y nombre incorrectos, patentes de terceros, personas y emblema de Bomberos de Pucón). Alternativa: reemplazarlas por los originales sin procesar cuando Yerko los entregue.
    - **RDA-012** («`sharp` como dependencia directa»): contexto (el error `MissingSharp` con pnpm), la alternativa descartada (`publicHoistPattern`, que depende de la configuración del instalador) y la que no se usa (`passthroughImageService`, que publica las fotos sin optimizar); justificación de peso según `AGENTS.md` §5 (0 B en `dist/`).
    - RDA-009 se actualiza para incluir la galería dentro de Inicio.
    - `DESIGN.md` §5 y §7 se actualizan según la regla 4.
4. **Cabeceras de Cloudflare Pages.** Un archivo `_headers` que logre:
    - Caché inmutable de un año para los recursos con huella (`/_astro/*`) y revalidación para el HTML.
    - Cabeceras de seguridad: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` y protección contra el enmarcado (`frame-ancestors` o `X-Frame-Options`).
    - `noindex` para los dominios `*.pages.dev` (producción y vistas previas), según la documentación de Cloudflare Pages, de modo que solo `gruasvillarrica.cl` sea indexable.
    - Dentro de los límites de Cloudflare (100 reglas, 2000 caracteres por línea).
5. **Política de seguridad de contenido (CSP).** Se evalúa la CSP de Astro (`security.csp`, estable desde Astro 6). Se tiene en cuenta que se entrega como `<meta>` y que `frame-ancestors` no funciona así, por lo que el enmarcado se protege en `_headers`. La evaluación termina en una recomendación escrita en la bitácora; activarla requiere consulta (edita `astro.config.mjs`) y una RDA.
6. **Datos provisionales en producción** (adelantado desde 05-01). La compilación de la rama de producción (`CF_PAGES_BRANCH` igual a `main`) falla si algún archivo de `dist/` contiene `PENDIENTE_CLIENTE`. Los datos provisionales que no se publican no bloquean. Fuera de Cloudflare la compilación no cambia. `iteracion-05-01-publicacion.md` se actualiza para reflejar que la tarea ya se hizo.
7. **Limpieza menor.** El comentario «Provisional» de `negocio.eslogan` se elimina: el texto es el `h1` aprobado en 03-01 y el pie de página ya lo publica.
8. **CSS sin utilidades de los documentos.** El CSS compilado no incluye utilidades que solo aparecen en `_planificacion/` u otros documentos (hoy trae `.tracking-tight` por esa causa).
9. **Presupuesto medido** en `pnpm preview` a 360 × 640 px, para la primera vista (lo que se descarga sin desplazarse) y comprimiendo con gzip el HTML, el CSS y el JavaScript (las fuentes WOFF2 y las imágenes se cuentan tal cual):
    - Total transferido de 400 KB o menos.
    - HTML más CSS: 50 KB o menos (comprimidos).
    - JavaScript: menos de 1 KB.
    - Foto del hero servida a 360 px: 150 KB o menos.
    - Ninguna foto de la galería se descarga antes de acercarse a la vista.

## Criterios de aceptación

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias, y sin `MissingSharp` en la salida. **Medido: «All matched files use Prettier code style!»; `pnpm check` con 0 errores, 0 advertencias y 50 hints (todos de JSDoc); `pnpm build` con código 0, 2 páginas, 96 variantes de imagen, sin avisos y sin `MissingSharp`.**
- [x] La única diferencia en `package.json` es la línea de `sharp`; `pnpm-lock.yaml` refleja solo ese cambio. **Medido con `git diff`: una línea nueva en `package.json` (`"sharp": "^0.35.5"`); en `pnpm-lock.yaml`, 4 líneas nuevas y 3 quitadas: la entrada de `sharp` en el proyecto y la marca `optional` que pierden `sharp` y `@img/colour`.**
- [x] Primera pantalla a 360 × 640 px con la foto del hero: margen de al menos 8 px y contraste AA del texto del hero (se informan las cifras). **Medido: etiqueta 152–170 px, `h1` 174–342 px, botones 462–510 y 518–566 px, barra en 583 px: 17 px de margen, igual que antes de la foto. Contraste contra el píxel más claro bajo cada texto: etiqueta 8,76:1, `h1` 6,99:1 y párrafo 10,18:1. En doce anchos de 320 a 1920 px el mínimo es 5,38:1.**
- [x] Hero y galería en formatos modernos, con `alt` igual al aprobado, dimensiones explícitas y carga prioritaria (hero) o diferida (galería), verificado en `dist/` y en el navegador. **Medido: 10 `<picture>` con fuente AVIF y reserva WebP; los 10 `alt` y el orden (6, 10, 1, 7, 2, 5, 3, 8, 4, 9) coinciden con lo aprobado; todos con `width` y `height`; el hero con `loading="eager"` y `fetchpriority="high"`, las nueve de la galería con `loading="lazy"`. Chrome descargó AVIF en todos los casos.**
- [x] Sin desplazamiento de diseño al cargar la galería y sin desborde horizontal a 320, 360, 768, 1024 y 1280 px. **Medido recorriendo la página completa a 360, 768 y 1280 px: CLS 0, sin entradas de desplazamiento y alto de la galería constante. `scrollWidth` igual a `clientWidth` en los cinco anchos, en la portada y en el 404.**
- [ ] Presupuesto de la tarea 9 cumplido, con una tabla de cifras en la bitácora. **Parcial. Cumplen los cuatro límites: total 166,3 KB (de 400), HTML más CSS 21,0 KB comprimidos (de 50), JavaScript 0 B externo y 769 B en línea (de 1 KB) y foto del hero a 360 px de 19,1 KB (de 150). No cumple al pie de la letra el quinto punto: sin desplazarse, Chrome descarga 3 de las 9 fotos de la galería (30,9 KB, ya contados en el total), porque adelanta las imágenes diferidas que están a menos de 1250 px de la pantalla y la galería empieza 920 px más abajo. El desarrollador aceptó ese comportamiento el 2026-10-02.**
- [x] `dist/_headers` existe, cumple la tarea 4 y respeta los límites de Cloudflare. **Medido: 986 B, 5 reglas (de 100) y línea más larga de 92 caracteres (de 2000). No verificado: que Cloudflare aplique las cabeceras; `pnpm preview` no las lee y la comprobación sobre HTTPS es de 04-03.**
- [x] Compilación simulada con `CF_PAGES_BRANCH=main`: pasa con el contenido actual y falla si se fuerza un `PENDIENTE_CLIENTE` publicado (se informan ambas salidas). **Medido: con el contenido actual termina con código 0 y la línea «Sin PENDIENTE_CLIENTE en 114 archivos publicados»; con `direccion.texto` forzado termina con error y nombra `404.html` e `index.html`. El mismo dato forzado no detiene la compilación sin la variable ni con otra rama. Las salidas están en la bitácora.**
- [x] El CSS compilado no contiene `.tracking-tight` ni otras utilidades sin uso en `src/`. **Medido: 0 apariciones de `.tracking-tight`; las 243 clases del CSS aparecen en algún archivo de `src/`; el CSS bajó de 32.339 a 29.920 B.**
- [x] `dist/` no contiene fotos en PNG ni otros formatos de reserva pesados; el `image` del JSON-LD responde con código 200 y no es el original. **Medido: 48 AVIF y 48 WebP; la mayor pesa 191.066 B; ninguna foto en PNG ni en JPEG y ningún original. `image` es la variante WebP de 1280 × 715 px del hero (93.744 B) y responde 200 `image/webp`.**
- [x] RDA-011 y RDA-012 registradas, RDA-009 y `DESIGN.md` §5 y §7 actualizadas, y recomendación de CSP en la bitácora. **Hecho.**
- [x] `git status` muestra cambios solo en `src/`, `public/`, `_planificacion/`, `DESIGN.md`, `package.json`, `pnpm-lock.yaml` y, si se usó, el archivo que la tarea 6 requiera (informarlo). **Medido: esas rutas y `astro.config.mjs`, que la tarea 6 requirió (2 líneas, con autorización del desarrollador).**

## Fuera de alcance

- Conectar Cloudflare Pages y medir con Lighthouse sobre HTTPS (04-03).
- Reemplazar las fotos por originales sin procesar (cuando Yerko los entregue; RDA-011).