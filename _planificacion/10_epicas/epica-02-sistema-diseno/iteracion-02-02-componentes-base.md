# Iteración 02-02 · Componentes base de interfaz

- **Épica:** 02 · Sistema de diseño
- **Estado:** Terminada
- **Rama sugerida:** `main` (temporal, ver `registro-log.md`)
- **Depende de:** 02-01
- **RDA relacionadas:** RDA-008
- **Hallazgos que cierra:** AUD-01-018, AUD-01-020, AUD-05-001, AUD-05-002, AUD-05-003

## Objetivo

Crear los componentes atómicos que usan todas las secciones.

## Tareas

1. `Contenedor.astro`: `max-w-7xl mx-auto px-gutter`.
2. `Boton.astro`: variantes `principal`, `secundario` y `contorno`; renderiza `<a>` o `<button>` según props; alto mínimo 48 px; ícono opcional; texto en formato oración con `uppercase`.
3. `BotonLlamada.astro` y `BotonWhatsApp.astro`: envoltorios de `Boton` que leen `negocio.js`; `BotonWhatsApp` acepta un mensaje predeterminado y abre en pestaña nueva con `rel="noopener"`.
4. `TituloSeccion.astro`: etiqueta superior opcional, `h2` con `id` para `aria-labelledby`, barra de acento y bajada.
5. `IndicadorDisponible.astro`: punto animado con texto "Disponible 24/7" y soporte de movimiento reducido.
6. `Chip.astro`: etiqueta de especificación técnica.

## Criterios de aceptación

- [x] El texto sobre fondo naranja usa `text-on-accent` en todos los componentes. (verificado con búsqueda en `src/components/`: el único texto sobre fondo naranja usa `text-on-accent`)
- [x] Los botones tienen foco visible y alto mínimo de 48 px. (verificado el 2026-09-30 con Chromium: 8 botones de `/muestrario` de 48 px y anillo de foco de 3 px con el teclado)
- [x] Props documentadas con JSDoc en cada componente. (`IndicadorDisponible` no recibe props)
- [x] Muestrario actualizado con todas las variantes. (verificado en `/muestrario`: 3 variantes de `Boton`, `BotonLlamada`, `BotonWhatsApp`, `IndicadorDisponible`, `Chip`, `TituloSeccion` y `Contenedor`)

## Fuera de alcance

- Header y footer (02-03).
