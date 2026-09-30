# Iteración 04-01 · SEO técnico y datos estructurados

- **Épica:** 04 · SEO técnico, rendimiento y accesibilidad
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/04-01-seo`
- **Depende de:** 03-04
- **RDA relacionadas:** RDA-007, RDA-008
- **Hallazgos que cierra:** AUD-01-025

## Objetivo

Dejar el sitio listo para indexación local y para vistas previas atractivas en WhatsApp y redes.

## Tareas

1. Completar `CabeceraSEO.astro`: `title` (≤ 60 caracteres, por ejemplo "Grúas en Villarrica 24 horas | Grúas Burgos"), meta descripción (≤ 155 caracteres), canonical, `theme-color` `#0e0e0e`, favicon SVG y PNG, `apple-touch-icon`.
2. Open Graph (`og:type`, `og:locale` `es_CL`, `og:title`, `og:description`, `og:url`, `og:image` de 1200 × 630 px con marca, número y "24/7") y Twitter Card `summary_large_image`.
3. `src/components/DatosEstructurados.astro` que genera JSON-LD desde `negocio.js`: `@type` `["EmergencyService", "AutomotiveBusiness"]`, `name`, `url`, `telephone` en E.164, `address` (`PostalAddress` con `addressCountry: "CL"`), `geo`, `openingHoursSpecification` (lunes a domingo, `00:00`–`23:59`), `areaServed` (lista de `City`), `sameAs` (redes sociales y perfil de Google Maps), `image`, `logo`, `priceRange` solo si el cliente lo aprueba. Sin `aggregateRating`.
4. `public/robots.txt` con referencia a `https://gruasvillarrica.cl/sitemap-index.xml`.
5. Verificar que `@astrojs/sitemap` excluya `404` y páginas con prefijo `_`.

## Criterios de aceptación

- [ ] La vista previa del enlace en WhatsApp muestra imagen, título y descripción.
- [ ] JSON-LD sin errores en la Prueba de resultados enriquecidos.
- [ ] Ningún valor `PENDIENTE_CLIENTE` dentro del JSON-LD de producción.

## Datos requeridos del cliente

- Coordenadas de la base, perfil de Google Maps y logo si existe.
