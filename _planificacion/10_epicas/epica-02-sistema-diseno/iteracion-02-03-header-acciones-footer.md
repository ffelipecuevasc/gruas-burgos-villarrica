# Iteración 02-03 · Header, acciones flotantes y footer

- **Épica:** 02 · Sistema de diseño
- **Estado:** Terminada
- **Rama sugerida:** `main` (temporal, ver `registro-log.md`)
- **Depende de:** 02-02
- **RDA relacionadas:** RDA-008, RDA-009
- **Hallazgos que cierra:** AUD-01-008, AUD-01-023, AUD-01-027 (parcial), AUD-06-001 a AUD-06-020

## Objetivo

Construir los elementos presentes en toda la página y garantizar que el contacto esté siempre a un toque en móvil.

## Tareas

1. `Header.astro`: fijo (`sticky`), de 112 px en total (64 px arriba y 48 px abajo, igual a `scroll-padding-top`). Nivel superior con marca, `IndicadorDisponible` (visible en todos los anchos) y teléfono: desde `md:` el número y `BotonLlamada`; en móvil, botón de ícono con `aria-label="Llamar a Grúas Burgos"`. Nivel inferior con navegación por anclas `Inicio`, `Servicios` y `Contacto` (RDA-009), con enlaces `/#inicio`, `/#servicios` y `/#contacto` para que también funcionen desde la 404. Sin el círculo vacío del prototipo.
2. Estado activo del enlace de navegación: no se implementa (tarea opcional). El sitio no lleva JavaScript de cliente.
3. `AccionesFlotantes.astro`: en móvil, barra inferior fija de ancho completo con «Llamar» y «WhatsApp» (botones de 56 px, nombre accesible «Llamar ahora» y «Escribir por WhatsApp», `safe-area-inset-bottom`) y relleno inferior en `body` para no tapar el contenido. Desde `md:`, botones flotantes abajo a la derecha con «Llamar ahora» y «Escribir por WhatsApp».
4. `Footer.astro`: marca, eslogan provisional, dirección, contacto directo (teléfono y correo), redes con íconos (Instagram, Facebook y TikTok, con `rel="noopener noreferrer"`), año dinámico y crédito enlazado a https://felipecuevas.dev. Todo sale de `negocio.js`. La cobertura y los datos de facturación solo se muestran cuando el cliente los confirme (hoy `PENDIENTE_CLIENTE`).
5. Integrar `Header`, `Footer` y `AccionesFlotantes` en `LayoutBase.astro` (omitido en la primera ejecución; corregido tras la Auditoría 06).

## Criterios de aceptación

- [x] A 360 × 640 px hay siempre un botón de llamada visible sin scroll, en cualquier posición de la página. (verificado el 2026-09-30 con Chromium a 360×640: el botón del header y la barra inferior están visibles arriba y al final de la página)
- [x] La barra flotante no tapa contenido ni el footer. (verificado el 2026-09-30: al final de la página el borde inferior del footer coincide con el borde superior de la barra)
- [x] Los anclajes no quedan ocultos bajo el header fijo. (verificado el 2026-09-30: tras pulsar cada enlace, la sección queda a 112 px, igual al alto del header)
- [x] Todos los enlaces externos abren con rel="noopener noreferrer". (verificado en `dist/`: 12 enlaces `_blank` y 12 con `rel` entre `index.html` y `404.html`)

## Datos requeridos del cliente

Confirmados: redes sociales (Instagram, Facebook y TikTok; la cuenta de TikTok la confirmó el cliente según informó el desarrollador el 2026-09-30) y correo comercial, registrados en `negocio.js`. Pendientes y ocultos en el sitio: cobertura (AUD-01-006) y datos de facturación.
