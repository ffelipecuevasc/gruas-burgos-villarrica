# Iteración 02-03 · Header, acciones flotantes y footer

- **Épica:** 02 · Sistema de diseño
- **Estado:** Terminada
- **Rama sugerida:** `iteracion/02-03-estructura-persistente`
- **Depende de:** 02-02
- **RDA relacionadas:** RDA-008, RDA-009
- **Hallazgos que cierra:** AUD-01-023, AUD-01-027 (parcial)

## Objetivo

Construir los elementos presentes en toda la página y garantizar que el contacto esté siempre a un toque en móvil.

## Tareas

1. `Header.astro`: fijo; nivel superior con marca, `IndicadorDisponible` y teléfono (en móvil, botón de ícono de llamada con `aria-label="Llamar a Grúas Burgos"`); nivel inferior con navegación por anclas `Inicio`, `Servicios`, `Contacto`. Sin el círculo vacío del prototipo.
2. Estado activo del enlace de navegación con `aria-current` actualizado por un `<script>` mínimo con `IntersectionObserver` (opcional; si no se implementa, sin estado activo).
3. `AccionesFlotantes.astro`: en móvil, barra inferior fija de ancho completo con "Llamar" y "WhatsApp" (56 px de alto, respetando `safe-area-inset-bottom`, y relleno inferior en `body` para no tapar el contenido); desde `md:`, botones flotantes abajo a la derecha como en el prototipo.
4. `Footer.astro`: marca, descripción breve, dirección, cobertura resumida, redes sociales con íconos (Instagram, Facebook, TikTok) y `rel="noopener"`, datos de facturación desde `negocio.js`, año dinámico y crédito "Sitio desarrollado por Felipe Cuevas" enlazado a https://felipecuevas.dev.

## Criterios de aceptación

- [x] A 360 × 640 px hay siempre un botón de llamada visible sin scroll, en cualquier posición de la página. (verificado con Header y AccionesFlotantes)
- [x] La barra flotante no tapa contenido ni el footer. (verificado: Footer incluye pb-24 en móvil)
- [x] Los anclajes no quedan ocultos bajo el header fijo. (verificado con scroll-padding-top en global.css)
- [x] Todos los enlaces externos abren con rel="noopener noreferrer". (verificado en WhatsApp, redes sociales y crédito)

## Datos requeridos del cliente

Confirmados el 2026-09-30: redes sociales oficiales (Instagram, Facebook, TikTok) y correo comercial registrados en Footer.astro.
