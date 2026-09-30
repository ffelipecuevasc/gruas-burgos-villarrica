# Iteración 02-01 · Tokens de diseño, fuentes e íconos

- **Épica:** 02 · Sistema de diseño
- **Estado:** Terminada
- **Rama sugerida:** `main` (temporal, ver `registro-log.md`)
- **Depende de:** 01-02
- **RDA relacionadas:** RDA-002, RDA-004, RDA-005
- **Hallazgos que cierra:** AUD-01-016, AUD-01-021, AUD-01-024, AUD-04-001, AUD-04-002, AUD-04-004

## Objetivo

Dejar disponibles en Tailwind todos los tokens de `DESIGN.md`, con fuentes e íconos servidos desde el propio sitio.

## Tareas

1. Declarar en `src/styles/global.css` los bloques `@theme` y `@theme inline` de `DESIGN.md` sección 9, completando toda la escala tipográfica (sección 3.1) con sus variantes de interlínea, tracking y peso.
2. Agregar la capa `base`: `color-scheme: dark`, `scroll-padding-top`, foco visible y `prefers-reduced-motion`.
3. Configurar la Fonts API de Astro (proveedor `fontProviders.fontsource()`, clave `fonts` de `astro.config.mjs`, estable desde Astro 6) para Barlow Condensed (600, 700, 800) y Chivo (400, 600, 700), subconjunto latino, y usar el componente `<Font />` en `LayoutBase` con precarga solo de Barlow Condensed 800 y Chivo 400.
4. Instalar `astro-icon`, `@iconify-json/material-symbols` y `@iconify-json/simple-icons` (aprobado por el desarrollador; `astro-icon` 1.2.0 verificado con Astro 7). Crear `src/icons/.gitkeep` (sin esa carpeta, `pnpm build` emite una advertencia) y `src/components/Icono.astro`, que concentra los nombres de `DESIGN.md` §6 y marca todos los íconos con `aria-hidden="true"`.
5. Crear `src/pages/[muestrario].astro`, una página de desarrollo con `noindex` que solo existe con `pnpm dev`: `getStaticPaths` devuelve una lista vacía fuera de desarrollo, por lo que `pnpm build` no la genera. Un archivo con prefijo `_` no sirve: Astro no lo enruta ni en desarrollo.

## Criterios de aceptación

- [x] Clases como `bg-primary-container`, `text-on-accent`, `font-display`, `text-headline-xl` y `p-space-lg` funcionan. (verificado por el desarrollador el 2026-09-30 en `/muestrario`)
- [x] En la pestaña Red del navegador no hay peticiones a `fonts.googleapis.com`, `fonts.gstatic.com` ni `cdn.tailwindcss.com`. (sin referencias a esos dominios en `dist/` ni `src/`; confirmación visual en la pestaña Red pendiente del desarrollador)
- [x] No existe `tailwind.config.js`. (verificado el 2026-09-30)
- [x] Los íconos se renderizan como `<svg>` con `aria-hidden="true"`. (verificado el 2026-09-30)

## Fuera de alcance

- Componentes de sección.
