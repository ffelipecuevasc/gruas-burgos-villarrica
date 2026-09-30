# Iteración 02-02 · Componentes base de interfaz

- **Épica:** 02 · Sistema de diseño
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/02-02-componentes-base`
- **Depende de:** 02-01
- **RDA relacionadas:** RDA-008
- **Hallazgos que cierra:** AUD-01-018, AUD-01-020

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

- [ ] El texto sobre fondo naranja usa `text-on-accent` en todos los componentes.
- [ ] Los botones tienen foco visible y alto mínimo de 48 px.
- [ ] Props documentadas con JSDoc en cada componente.
- [ ] Muestrario actualizado con todas las variantes.

## Fuera de alcance

- Header y footer (02-03).
