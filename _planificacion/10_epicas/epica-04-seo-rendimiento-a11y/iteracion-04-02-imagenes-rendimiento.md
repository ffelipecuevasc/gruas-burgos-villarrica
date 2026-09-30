# Iteración 04-02 · Imágenes y presupuesto de rendimiento

- **Épica:** 04 · SEO técnico, rendimiento y accesibilidad
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/04-02-rendimiento`
- **Depende de:** 03-04
- **RDA relacionadas:** RDA-001, RDA-004, RDA-005
- **Hallazgos que cierra:** AUD-01-017

## Objetivo

Asegurar la carga más rápida posible con señal móvil débil.

## Tareas

1. Revisar que todas las imágenes usen `<Image />` o `<Picture />` con `widths`/`sizes` adecuados, `alt` y dimensiones.
2. `public/_headers` para Cloudflare Pages: caché inmutable de un año para `/_astro/*`; caché corta con revalidación para HTML; cabeceras de seguridad (`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options` o `frame-ancestors`).
3. Evaluar la API de CSP de Astro (estable desde Astro 6) para emitir una política de seguridad de contenido; documentar la decisión en una RDA si se activa.
4. Presupuesto: HTML + CSS crítico < 50 KB comprimido; JavaScript total < 5 KB; peso total de la primera carga < 400 KB.
5. Medir con `pnpm build` + `pnpm preview` y Lighthouse en modo móvil.

## Criterios de aceptación

- [ ] Presupuesto cumplido y documentado en la bitácora con cifras.
- [ ] CLS < 0,05 y LCP < 2,0 s en Lighthouse móvil.
- [ ] Cabeceras verificadas en la vista previa de Cloudflare Pages.
