# Iteración 02-01 · Tokens de diseño, fuentes e íconos

- **Épica:** 02 · Sistema de diseño
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/02-01-tokens-diseno`
- **Depende de:** 01-02
- **RDA relacionadas:** RDA-002, RDA-004, RDA-005
- **Hallazgos que cierra:** AUD-01-016, AUD-01-021, AUD-01-024

## Objetivo

Dejar disponibles en Tailwind todos los tokens de `DESIGN.md`, con fuentes e íconos servidos desde el propio sitio.

## Tareas

1. Declarar en `src/styles/global.css` los bloques `@theme` y `@theme inline` de `DESIGN.md` sección 9, completando toda la escala tipográfica (sección 3.1) con sus variantes de interlínea, tracking y peso.
2. Agregar la capa `base`: `color-scheme: dark`, `scroll-padding-top`, foco visible y `prefers-reduced-motion`.
3. Configurar la Fonts API de Astro para Barlow Condensed (600, 700, 800) y Chivo (400, 600, 700), subconjunto latino, y usar el componente `<Font />` en `CabeceraSEO` o `LayoutBase` con precarga solo de los pesos críticos. Verificar la sintaxis en https://docs.astro.build antes de implementar.
4. Proponer al desarrollador la instalación de `astro-icon`, `@iconify-json/material-symbols` y `@iconify-json/simple-icons` (requiere aprobación). Verificar compatibilidad con Astro 7; si no la hay, crear `src/components/Icono.astro` con SVG copiados a mano.
5. Crear una página temporal `src/pages/_muestrario.astro` (no se publica por el prefijo `_`) o una sección oculta de desarrollo para revisar colores, tipografías e íconos.

## Criterios de aceptación

- [ ] Clases como `bg-primary-container`, `text-on-accent`, `font-display`, `text-headline-xl` y `p-space-lg` funcionan.
- [ ] En la pestaña Red del navegador no hay peticiones a `fonts.googleapis.com`, `fonts.gstatic.com` ni `cdn.tailwindcss.com`.
- [ ] No existe `tailwind.config.js`.
- [ ] Los íconos se renderizan como `<svg>` con `aria-hidden="true"`.

## Fuera de alcance

- Componentes de sección.
