# Iteración 04-01 · SEO técnico, marca y datos estructurados

- **Épica:** 04 · SEO técnico, rendimiento y accesibilidad
- **Estado:** Terminada (verificada por el desarrollador el 2026-10-02, commit `57de857`)
- **Rama sugerida:** `main` (Cloudflare Pages aún no está conectado)
- **Depende de:** 03-05
- **RDA relacionadas:** RDA-005, RDA-007, RDA-008, RDA-011
- **Hallazgos que cierra:** AUD-01-025

## Objetivo

Que el sitio quede listo para indexación local y para vistas previas en WhatsApp y redes, con la marca (isotipo y nombre) aplicada de forma uniforme, y cerrar los pendientes aprobados de 03-05.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. La forma de lograrlo la decide quien implementa, dentro de las reglas transversales de `definicion-epica-04.md` y de las reglas de esta iteración.

## Reglas de la iteración

1. No se agregan dependencias. `sharp` ya está disponible con Astro.
2. Los archivos de imagen que queden en el repositorio miden como máximo 1920 px por lado (`DESIGN.md` §7) y tienen nombres descriptivos en español y en minúsculas con guiones.
3. Un dato que el desarrollador no haya validado (coordenadas, perfil de Google) no se publica, ni siquiera dentro del JSON-LD.
4. No se hacen `commit`, `push` ni cambios de rama.
5. Detenerse y consultar si cumplir un criterio exige texto no aprobado, contradecir `DESIGN.md` o editar archivos que requieren permiso. Las excepciones autorizadas están en la tarea 2.

## Material de entrada

El desarrollador copia los archivos al repositorio antes de empezar, sin hacer commit:

- `src/assets/marca/LogoGruasBurgos.svg`: isotipo (ícono «auto-towing» de Material Symbols Light, Apache 2.0).
- `src/assets/fotos/1.webp` a `10.webp`: fotos de operaciones (RDA-011). La 6 y la 10 miden 2752 × 1536 px; las demás, 1024 × 1024 px.

## Contenido aprobado de esta iteración (copiar tal cual)

**Metadatos de la portada**

- `title`: «Grúas Burgos | Grúas en Villarrica 24 horas» (el actual; 43 caracteres).
- Meta descripción y `og:description`: «Grúas, traslado y rescate vehicular en Villarrica, disponibles las 24 horas. Llama o escríbenos por WhatsApp.» (la actual; 109 caracteres).
- `og:title`: igual al `title`. `og:locale`: `es_CL`. `og:type`: `website`. `og:site_name`: «Grúas Burgos».
- `theme-color`: `#0e0e0e`.

**Imagen de vista previa (1200 × 630 px)**

- Textos: «Grúas Burgos», «Grúas en Villarrica 24/7» y el teléfono visible de `negocio.js` («+56 9 4619 2286»).
- Fondo: la foto 6 oscurecida con la paleta del sitio, el isotipo en `primary-container` y la tipografía del sitio (Barlow Condensed).
- Texto alternativo (`og:image:alt`): «Grúas Burgos, grúas en Villarrica 24/7».

**Marca**

- El isotipo reemplaza al ícono actual de la marca (`car-crash`) en el header, junto al nombre «Grúas Burgos», con los colores de `DESIGN.md`.
- Favicon: el isotipo en `primary-container` sobre `surface-container-lowest`, legible a 16 y 32 px.

**JSON-LD (un solo nodo del negocio en la portada)**

- `@type`: `["EmergencyService", "AutomotiveBusiness"]`.
- `name`, `url` (`https://gruasvillarrica.cl/`), `telephone` en E.164, `email`, `image` (la foto del hero) y `logo` (el isotipo).
- `address`: `PostalAddress` con la calle, la comuna, la región y `addressCountry: "CL"` de `negocio.js`.
- `openingHoursSpecification`: lunes a domingo, de `00:00` a `23:59`.
- `areaServed`: las cuatro localidades de `negocio.cobertura.localidades`, como `City`. El paso fronterizo Mamuil Malal no se incluye: es una asistencia documentada, no cobertura.
- `sameAs`: Instagram, Facebook y TikTok de `negocio.js`.
- **Sin** `geo` ni `hasMap` mientras el desarrollador no valide las coordenadas y entregue el enlace oficial del perfil (tareas del desarrollador).
- **Sin** `priceRange`, `aggregateRating`, `review`, `foundingDate` ni capacidades de las grúas.

## Tareas

1. **Material de marca y fotos en el repositorio.**
    - El isotipo queda como recurso local (sin nueva dependencia de íconos) y el repositorio registra su origen (Material Symbols Light, «auto-towing») y su licencia (Apache 2.0).
    - Las diez fotos quedan con nombres descriptivos, a 1920 px como máximo por lado, sin perder el encuadre, y listas para 04-02. Las originales de 2752 px no quedan en el repositorio.
2. **Pendientes aprobados de 03-05.**
    - La barra móvil de `AccionesFlotantes` reemplaza la sombra de 1 px por un borde conforme a `DESIGN.md` §4. La primera pantalla a 360 × 640 px sigue cumpliendo la regla transversal 6 (se vuelve a medir).
    - Se registran como aprobados (bitácora y `registro-log.md`): el `aria-label` «Métricas destacadas del servicio», el mensaje genérico del navegador para el teléfono con letras y la etiqueta del hero sin cápsula ni punto.
    - En `iteracion-03-05-correccion-auditoria.md`, la referencia a la «tarea 11» pasa a «tareas 8 y 9».
    - Las iteraciones 03-01 a 03-05 pasan a «Terminada» (verificadas por el desarrollador el 2026-10-01, commit `d6121eb`). Sus casillas sin evidencia se quedan sin marcar con una nota que remite a 04-03. La Épica 03 sigue «En revisión» hasta registrar la aprobación del cliente (AUD-08-023).
    - **Autorizado:** editar `DESIGN.md` para documentar el isotipo en la marca (header y favicon). Solo esa sección.
3. **Metadatos.** `CabeceraSEO` emite, en cada página: `title`, descripción, canonical (salvo en el 404, que mantiene `noindex`), `theme-color`, favicon (SVG y una alternativa para navegadores sin soporte, incluido `/favicon.ico`), `apple-touch-icon` de 180 px, Open Graph completo (con `og:image` absoluto, sus dimensiones y su `alt`) y Twitter Card `summary_large_image`. Todo sale de `negocio.js` o del contenido aprobado.
4. **Imagen de vista previa.** Un archivo de 1200 × 630 px, de menos de 300 KB y con la tipografía real, según «Contenido aprobado». Si no se puede componer con las herramientas disponibles sin agregar dependencias, detenerse y consultar.
5. **Datos estructurados.** Un componente genera el JSON-LD desde `negocio.js` según «Contenido aprobado» y solo en la portada. Ningún valor provisional ni sin validar llega a `dist/`.
6. **Rastreo.** `public/robots.txt` permite el rastreo y apunta a `https://gruasvillarrica.cl/sitemap-index.xml`. Se verifica que el sitemap liste solo `/` (sin 404 ni páginas de desarrollo).

## Tareas del desarrollador (no bloquean al agente)

- Validar las coordenadas de `negocio.js` contra el pin del perfil de Google Maps del negocio y entregar el enlace oficial del perfil. Con eso, una iteración posterior agrega `geo` y `hasMap`.
- Pegar el JSON-LD que el agente deja en la bitácora en el validador de Schema.org y en la Prueba de resultados enriquecidos (modo código), y registrar el resultado.
- Confirmar con Yerko el año de inicio. Mientras no lo confirme, sigue en «No publicar».

## Criterios de aceptación

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias. **Medido: «All matched files use Prettier code style!»; `pnpm check` con 0 errores, 0 advertencias y 48 hints (todos de JSDoc); `pnpm build` con código 0, 2 páginas, sin avisos y 6 fuentes copiadas.**
- [x] `dist/index.html` contiene todas las etiquetas de la tarea 3, con valores iguales al contenido aprobado; el `og:image` es absoluto y responde en `pnpm preview`. **Medido: `title` (43 caracteres), descripción (109), canonical, `theme-color`, tres enlaces de ícono, 11 etiquetas `og:` y 5 `twitter:`, todas iguales al contenido aprobado. `og:image` es `https://gruasvillarrica.cl/_astro/vista-previa-gruas-burgos.DDnk_EC8.jpg`; esa ruta responde 200 `image/jpeg` en `pnpm preview`.**
- [x] La imagen de vista previa mide 1200 × 630 px y menos de 300 KB, y sus textos coinciden con el contenido aprobado (se adjunta una captura en la bitácora). **Medido: JPEG de 1200 × 630 px y 112.393 B (109,8 KB); textos «Grúas Burgos», «Grúas en Villarrica 24/7» y «+56 9 4619 2286», compuestos en Chrome con Barlow Condensed 700 y 800.**
- [x] El favicon se ve en el navegador y `/favicon.ico` responde con código 200 en `pnpm preview`. **Verificado en 04-03, fase B (evidencia del desarrollador del 2026-10-02, sección 6): el favicon se ve correctamente en la pestaña de Chrome móvil (Android), y `https://gruasvillarrica.cl/favicon.ico` responde 200 `image/vnd.microsoft.icon`, 2.009 B. No se revisó en la pestaña de un navegador de escritorio ni el ícono de iOS.** Medición anterior, parcial: `/favicon.ico` responde 200 `image/x-icon` (16, 32 y 48 px), `/favicon.svg` 200 `image/svg+xml` y `/apple-touch-icon.png` 200 `image/png` (180 × 180); Chrome pidió `/favicon.svg` por su cuenta al cargar la portada y los tres archivos se decodifican y se dibujan a 16 y 32 px. No verificado: el ícono en la pestaña, porque Chrome sin interfaz no tiene barra de pestañas. Lo comprueba el desarrollador en un navegador con interfaz.**
- [x] Los campos del JSON-LD coinciden con el contenido aprobado. El bloque se transcribe completo en la bitácora y no contiene `PENDIENTE_CLIENTE`, `geo`, `hasMap`, `aggregateRating`, `review` ni `priceRange`. **Medido en `dist/index.html`: un bloque en la portada y ninguno en el 404; 12 claves, comparadas una a una con `negocio.js`; ninguna de las seis cadenas prohibidas, ni `foundingDate`, ni las coordenadas. La validación en Schema.org y en la Prueba de resultados enriquecidos es tarea del desarrollador.**
- [x] `robots.txt` y el sitemap cumplen la tarea 6. **Medido en `pnpm preview`: `/robots.txt` 200 con `Allow: /` y la línea `Sitemap: https://gruasvillarrica.cl/sitemap-index.xml`; `/sitemap-index.xml` 200 apunta a `sitemap-0.xml`, que lista una sola URL, `https://gruasvillarrica.cl/`.**
- [x] Primera pantalla a 360 × 640 px con el borde de la barra móvil: margen de al menos 8 px (se informan las cifras). **Medido: etiqueta 152–170 px, `h1` 174–342 px (4 líneas), botones 462–510 y 518–566 px; la barra ocupa 583–640 px (57 px: borde de 1 px y botones de 56 px). Margen de 40 px bajo el header y de 17 px sobre la barra (antes, 18 px).**
- [x] Ninguna imagen del repositorio supera 1920 px por lado; el origen y la licencia del isotipo están registrados. **Medido: 12 imágenes de mapa de bits; las mayores miden 1920 × 1072 px (fotos 6 y 10). Origen y licencia del isotipo en el propio SVG, en `DESIGN.md` §6.1 y en la bitácora.**
- [x] `git status` muestra cambios solo en `src/`, `public/`, `_planificacion/` y, si se usó la autorización de la tarea 2, `DESIGN.md`. **Medido: solo aparecen esas tres carpetas y `DESIGN.md` (§6, con confirmación del desarrollador).**

## Fuera de alcance

- Foto del hero, galería y presupuesto de rendimiento (04-02).
- Prueba real de la vista previa en WhatsApp, Lighthouse y cabeceras sobre HTTPS (04-03).
- Alinear `AGENTS.md` §6.4 y `DESIGN.md` §5 con la decisión D3 (AUD-08-032): sigue pendiente de decisión del desarrollador.