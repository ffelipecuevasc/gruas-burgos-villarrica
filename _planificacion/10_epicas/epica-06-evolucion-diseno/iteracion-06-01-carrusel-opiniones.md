# Iteración 06-01 · Carrusel en la sección de opiniones

- **Épica:** 06 · Evolución y mejoras de diseño
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/06-01-carrusel-opiniones`
- **Depende de:** 05-01 (terminada) y RDA-015 y RDA-016 (registradas en esta iteración)
- **RDA relacionadas:** RDA-015 (nueva; reemplaza parcialmente a RDA-003 y a RDA-006), RDA-016 (nueva; reemplaza parcialmente a RDA-007), RDA-008 y RDA-011. `DESIGN.md` §5 y §8.
- **Hallazgos que cierra:** ninguno.

## Objetivo

Mostrar las diez opiniones de Google de la sección `#opiniones` en un carrusel con el diseño del ejemplo «Slides Per View» de Embla Carousel, como isla de React, en todos los anchos, sin perder el contenido textual de las reseñas, la accesibilidad ni los resultados de PageSpeed.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**.

## Decisiones vigentes (del desarrollador, 2026-10-07)

1. **Técnica:** isla de React con `embla-carousel-react` y `@astrojs/react`, hidratada con `client:visible` (RDA-015). Se descartan Embla sin React y el carrusel solo con CSS.
2. **Versión:** `embla-carousel` y `embla-carousel-react` en la versión exacta `8.6.0` (estable), fijadas sin `^` ni `~`. React y React DOM en la versión exacta que instale `pnpm add` de la serie 19.
3. **Anchos:** carrusel en todos los anchos: una opinión por vista bajo 768 px, dos desde 768 px y tres desde 1280 px. La grilla actual se retira (RDA-016).
4. **RDA-007:** las diez opiniones siguen en el HTML compilado, completas y accesibles para el lector de pantalla y el teclado; en pantalla se ven de una a tres a la vez (RDA-016).
5. **Licencia MIT:** el aviso de copyright y licencia de Embla y del ejemplo **no** se incluye en el repositorio, igual que en las banderas. Riesgo aceptado por el desarrollador.
6. **JavaScript:** el límite de 1 KB de RDA-006 sigue para el JavaScript propio fuera de la isla (portada 960 B, 404 191 B, sin cambios). La isla tiene su propio presupuesto (regla 4).

## Reglas de la iteración

1. Textos, autores, fechas, calificaciones y enlaces de las diez reseñas sin cambios, desde `src/data/resenas.js` (RDA-007, RDA-008).
2. Sin movimiento automático (sin plugin de autoplay), sin bucle infinito y, con `prefers-reduced-motion: reduce`, sin desplazamiento animado.
3. Se conservan el ancla `#opiniones`, el título, la bajada, el logotipo de Google y «Ver más opiniones en Google». El carrusel usa los tokens de `src/styles/global.css` (colores, tipografías, espacios); no se portan `base.css` ni `sandbox.css`, ni la fuente Inter, ni `font-size: 62.5%`.
4. **Presupuesto de la isla:** JavaScript de la isla (React, React DOM, Embla y el componente, más el script de hidratación de Astro) de **75 KB gzip o menos**, descargado solo cuando la sección se acerca a la vista. En la primera pantalla a 360 × 640 px no se descarga nada de la isla y el presupuesto de 400 KB se mantiene.
5. Sin JavaScript, las diez reseñas se leen completas en el HTML renderizado en el servidor, con desplazamiento horizontal nativo y sin contenido inaccesible.
6. **Archivos protegidos:** `AGENTS.md`, `README.md`, `pnpm-workspace.yaml`, `tsconfig.json`, `.gitignore`, `.nvmrc`, `.prettierrc.json`, `.claude/` y `public/_headers`.
7. **Ediciones autorizadas de archivos protegidos:** `package.json` y `pnpm-lock.yaml` solo mediante `pnpm add` de `@astrojs/react`, `react`, `react-dom`, `embla-carousel` y `embla-carousel-react`; `astro.config.mjs` solo para registrar la integración de React; `DESIGN.md` solo con los textos exactos de «Contenido aprobado».

## Contenido aprobado de esta iteración

**Nombres accesibles (no visibles):**

- Región del carrusel: `aria-roledescription` «carrusel» y nombre «Opiniones de clientes».
- Cada diapositiva: `aria-roledescription` «opinión» y nombre «Opinión N de 10».
- Botones: «Opinión anterior» y «Opinión siguiente».
- Puntos: «Ir al grupo N de M» (N y M según los grupos visibles en cada ancho).

**`DESIGN.md`:**

- §5, fila de `Resenas`: reemplazar «las diez opiniones visibles, sin acordeón ni botón para ver más (RDA-007)» por «las diez opiniones en un carrusel, sin acordeón ni botón para ver más (RDA-007 y RDA-016)», y reemplazar «Grilla sin huecos: 1 columna, 2 desde `md` y, desde `lg`, 6 columnas (tres, tres, dos y dos tarjetas).» por «Carrusel como isla de React con Embla Carousel (RDA-015): una opinión por vista bajo `md`, dos desde `md` y tres desde `xl`, con botones de anterior y siguiente y puntos de navegación de 44 × 44 px o más, sin movimiento automático. Sin JavaScript se leen completas con desplazamiento horizontal.».
- §8, después de «No se usan animaciones de entrada por sección ni efectos de scroll.»: agregar «El carrusel de opiniones (RDA-016) no es un efecto de scroll: solo se mueve por acción del usuario y, con `prefers-reduced-motion: reduce`, sin animación.».

## Tareas

1. Registrar RDA-015 y RDA-016 en `decisiones.md` con los textos del prompt, y las líneas de remisión en RDA-003, RDA-006 y RDA-007.
2. Instalar las dependencias y registrar la integración de React (ediciones autorizadas).
3. Reemplazar la grilla de opiniones por el carrusel, con el diseño del ejemplo adaptado a los tokens y con las tarjetas de reseña con el mismo contenido y estructura semántica que hoy (`article`, `blockquote`, `cite`, enlace «Ver en Google»).
4. Actualizar `DESIGN.md` con los textos aprobados.
5. Documentación: bitácora nueva, `evidencia-06-01-fase-b.md` vacío, `registro-log.md` y `auditoria-tecnica.md` (Auditoría 11).

## Criterios de aceptación

**Fase A, local (`pnpm build` + `pnpm preview`):**

- [ ] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias (hints: hoy 52; se informa la cifra nueva).
- [ ] `dist/index.html` contiene las diez reseñas con comentario, autor, fecha, calificación y enlace idénticos a `src/data/resenas.js` (comparación por programa, no a ojo), y sin `AggregateRating` ni `Review`.
- [ ] JavaScript propio fuera de la isla sin cambios: 960 B en la portada y 191 B en el 404. El 404 no carga nada de la isla.
- [ ] JavaScript de la isla de 75 KB gzip o menos (suma de los archivos que pide la página al ver la sección).
- [ ] A 360 × 640 px, al cargar sin desplazarse, ninguna petición de la isla; total transferido de 400 KB o menos; HTML más CSS de 50 KB o menos; primera pantalla del hero con 8 px de margen o más.
- [ ] Una opinión por vista a 360 y 767 px, dos a 768 y 1024 px y tres a 1280 y 1920 px; sin desborde horizontal de la página a 320, 360, 767, 768, 1024, 1280 y 1920 px.
- [ ] Botones y puntos con los nombres aprobados, objetivo de 44 × 44 px o más, foco visible y contraste AA; el botón en el extremo queda deshabilitado; el punto activo con `aria-current="true"`.
- [ ] Con teclado: Tab llega a los botones, a los puntos y a los enlaces «Ver en Google»; un enlace enfocado en una diapositiva fuera de la vista la trae a la vista; nada enfocado queda cubierto por elementos fijos (Tab y Mayús + Tab).
- [ ] Sin JavaScript (desactivado en Chrome): las diez reseñas se leen y se recorren con desplazamiento horizontal.
- [ ] Con `prefers-reduced-motion: reduce` emulado: sin animación al cambiar de diapositiva. Sin movimiento automático en 10 s de espera.
- [ ] Lighthouse móvil local, mediana de tres, antes y después: Rendimiento, Accesibilidad, Buenas prácticas y SEO informados, CLS 0.

**Fase B, vista previa y producción (evidencia en `evidencia-06-01-fase-b.md`):**

- [ ] Vista previa en «Success» con el commit de la rama; carrusel deslizable con el dedo en el teléfono Android y con flechas en Chrome y Firefox del PC.
- [ ] TalkBack anuncia la región, «Opinión N de 10» y los botones con su nombre.
- [ ] PageSpeed móvil en producción tras el merge, mediana de tres: 95 o más en las cuatro categorías, LCP de 2,5 s o menos y CLS 0; escritorio informado.

## Fuera de alcance

- Cambiar la selección, el orden o los textos de las reseñas.
- Autoplay, bucle infinito y carruseles en otras secciones (hero, galería, servicios).
- `AggregateRating` o `Review` en el JSON-LD (RDA-007).
- El aviso de licencia MIT de Embla (decisión 5).

## Tareas del desarrollador

1. Ejecutar la fase B y completar `evidencia-06-01-fase-b.md`.
2. Hacer `commit`, `push`, el Pull Request y el merge, y marcar la iteración «Terminada».