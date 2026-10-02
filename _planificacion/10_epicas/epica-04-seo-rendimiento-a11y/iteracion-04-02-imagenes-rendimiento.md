# Iteración 04-02 · Fotos, galería, rendimiento y cabeceras

- **Épica:** 04 · SEO técnico, rendimiento y accesibilidad
- **Estado:** Pendiente
- **Rama sugerida:** `main` (Cloudflare Pages aún no está conectado)
- **Depende de:** 04-01
- **RDA relacionadas:** RDA-001, RDA-004, RDA-006, RDA-008, RDA-009, RDA-011
- **Hallazgos que cierra:** AUD-01-017

## Objetivo

Publicar las fotos reales del negocio (una fija en el hero y una galería breve de trabajos en Inicio) sin perder la primera pantalla ni el rendimiento, y dejar el sitio listo para conectar la vista previa de Cloudflare Pages al iniciar 04-03: cabeceras, presupuesto medido y una compilación de producción que no publique datos provisionales.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. La forma de lograrlo la decide quien implementa.

## Reglas de la iteración

1. No se agregan dependencias. Si se quiere medir con Lighthouse en local, se pide permiso para usar una herramienta temporal (`pnpm dlx`); la medición formal es de 04-03.
2. Sin JavaScript nuevo en el cliente: la galería no abre visores ni tiene interacción (RDA-006: menos de 1 KB en total).
3. Sin carrusel, transiciones ni efectos de scroll (`DESIGN.md` §8).
4. **Autorizado:** editar `DESIGN.md` §5 (componentes: `Hero` con foto y el nuevo bloque de galería) y §7 (imágenes), solo para documentar lo que define esta iteración. Editar `astro.config.mjs` requiere consulta.
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

1. **Foto del hero (AUD-01-017).**
    - La foto 6 se sirve en formatos modernos, con tamaños para móvil y escritorio, dimensiones explícitas, carga prioritaria y el encuadre que mantiene la grúa visible a 360 px y a 1280 px.
    - La primera pantalla a 360 × 640 px sigue cumpliendo la regla transversal 6, y el contraste del texto del hero sobre la foto sigue en AA.
2. **Galería de trabajos.**
    - Nueve fotos en el orden aprobado, en formatos modernos, con tamaños acordes a la cuadrícula, dimensiones explícitas y carga diferida.
    - Sin desplazamiento de diseño al cargar, legible a 360 px, ángulos rectos y sin sombras (`DESIGN.md` §4).
    - El bloque tiene nombre accesible (su título) y encaja en la jerarquía de encabezados de `#inicio`.
3. **Decisiones documentadas.**
    - `decisiones.md` registra **RDA-011** («Fotos del negocio publicadas tal como están en sus redes»): origen, fecha de la decisión (2026-10-01) y riesgos aceptados por el desarrollador (rótulos regenerados con teléfonos y nombre incorrectos, patentes de terceros, personas y emblema de Bomberos de Pucón). Alternativa: reemplazarlas por los originales sin procesar cuando Yerko los entregue.
    - RDA-009 se actualiza para incluir la galería dentro de Inicio.
    - `DESIGN.md` §5 y §7 se actualizan según la regla 4.
4. **Cabeceras de Cloudflare Pages.** Un archivo `_headers` que logre:
    - Caché inmutable de un año para los recursos con huella (`/_astro/*`) y revalidación para el HTML.
    - Cabeceras de seguridad: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` y protección contra el enmarcado (`frame-ancestors` o `X-Frame-Options`).
    - `noindex` para los dominios `*.pages.dev` (producción y vistas previas), según la documentación de Cloudflare Pages, de modo que solo `gruasvillarrica.cl` sea indexable.
    - Dentro de los límites de Cloudflare (100 reglas, 2000 caracteres por línea).
5. **Política de seguridad de contenido (CSP).** Se evalúa la CSP de Astro (`security.csp`, estable desde Astro 6). Se tiene en cuenta que se entrega como `<meta>` y que `frame-ancestors` no funciona así, por lo que el enmarcado se protege en `_headers`. La evaluación termina en una recomendación escrita en la bitácora; activarla requiere consulta (edita `astro.config.mjs`) y una RDA.
6. **Datos provisionales en producción** (adelantado desde 05-01). La compilación de la rama de producción (`CF_PAGES_BRANCH` igual a `main`) falla si algún archivo de `dist/` contiene `PENDIENTE_CLIENTE`. Los datos provisionales que no se publican no bloquean. Fuera de Cloudflare la compilación no cambia. `iteracion-05-01-publicacion.md` se actualiza para reflejar que la tarea ya se hizo.
7. **CSS sin utilidades de los documentos.** El CSS compilado no incluye utilidades que solo aparecen en `_planificacion/` u otros documentos (hoy trae `.tracking-tight` por esa causa).
8. **Presupuesto medido** en `pnpm preview` a 360 × 640 px, para la primera vista (lo que se descarga sin desplazarse) y comprimiendo con gzip el HTML, el CSS y el JavaScript (las fuentes WOFF2 y las imágenes se cuentan tal cual):
    - Total transferido de 400 KB o menos.
    - HTML más CSS: 50 KB o menos (comprimidos).
    - JavaScript: menos de 1 KB.
    - Foto del hero servida a 360 px: 150 KB o menos.
    - Ninguna foto de la galería se descarga antes de acercarse a la vista.

## Criterios de aceptación

- [ ] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias.
- [ ] Primera pantalla a 360 × 640 px con la foto del hero: margen de al menos 8 px y contraste AA del texto del hero (se informan las cifras).
- [ ] Hero y galería en formatos modernos, con `alt` igual al aprobado, dimensiones explícitas y carga prioritaria (hero) o diferida (galería), verificado en `dist/` y en el navegador.
- [ ] Sin desplazamiento de diseño al cargar la galería y sin desborde horizontal a 320, 360, 768, 1024 y 1280 px.
- [ ] Presupuesto de la tarea 8 cumplido, con una tabla de cifras en la bitácora.
- [ ] `dist/_headers` existe, cumple la tarea 4 y respeta los límites de Cloudflare.
- [ ] Compilación simulada con `CF_PAGES_BRANCH=main`: pasa con el contenido actual y falla si se fuerza un `PENDIENTE_CLIENTE` publicado (se informan ambas salidas).
- [ ] El CSS compilado no contiene `.tracking-tight` ni otras utilidades sin uso en `src/`.
- [ ] RDA-011 registrada, RDA-009 y `DESIGN.md` §5 y §7 actualizadas, y recomendación de CSP en la bitácora.
- [ ] `git status` muestra cambios solo en `src/`, `public/`, `_planificacion/`, `DESIGN.md` y, si se usó, el archivo que la tarea 6 requiera (informarlo).

## Fuera de alcance

- Conectar Cloudflare Pages y medir con Lighthouse sobre HTTPS (04-03).
- Reemplazar las fotos por originales sin procesar (cuando Yerko los entregue; RDA-011).