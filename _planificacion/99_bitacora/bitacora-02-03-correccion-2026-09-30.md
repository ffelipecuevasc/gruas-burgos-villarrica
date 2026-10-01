# Bitácora 02-03 (corrección) · Header, acciones flotantes y footer

- **Fecha:** 2026-09-30
- **Agente:** Claude Code (modelo: Claude Opus 5.5)
- **Rama:** main
- **Estado final:** En revisión

## Resumen

Corrección documental de la iteración 02-03 tras la Auditoría 06. El código ya estaba corregido en el commit `15c03d2`: `Header`, `Footer` y `AccionesFlotantes` integrados en `LayoutBase`, footer solo con datos respaldados (cobertura y facturación ocultas hasta que el cliente las confirme), tres anclas (`/#inicio`, `/#servicios`, `/#contacto`), barra móvil de 56 px con relleno en `body` y sin JavaScript de cliente. Esta bitácora registra la corrección de estados, criterios y registros de la documentación y reemplaza a la bitácora de 02-03 en lo que la contradiga (las bitácoras no se editan).

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/00_producto/auditoria-tecnica.md` | Estados de AUD-01-008, AUD-01-023, AUD-01-027 y AUD-03-001; razón de contraste de AUD-05-001; nueva Auditoría 06 con 20 hallazgos. |
| `_planificacion/10_epicas/epica-02-sistema-diseno/iteracion-02-03-header-acciones-footer.md` | Reemplazado: tareas reales, quinta tarea de integración y criterios con evidencia. |
| `_planificacion/10_epicas/epica-02-sistema-diseno/iteracion-02-02-componentes-base.md` | Estado «Terminada», rama `main`, hallazgos y cuatro criterios con evidencia. |
| `_planificacion/10_epicas/epica-02-sistema-diseno/definicion-epica-02.md` | Criterio de término con evidencia de la verificación en navegador. |
| `_planificacion/00_producto/registro-log.md` | Dos filas nuevas en el historial. |
| `README.md` | La línea de `public/` indica que aún no existe. |
| Código | Corregido y subido antes, en el commit `15c03d2` (`Header`, `Footer`, `AccionesFlotantes`, `LayoutBase`, `[muestrario]` y `negocio.js`). |

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»)
- `pnpm check`: Result (19 files): 0 errors, 0 warnings, 18 hints
- `pnpm build`: «Copying fonts (6 files)» y «2 page(s) built», sin avisos
- Auditoría 06 en `auditoria-tecnica.md`: 20 filas `| AUD-06-` y 1 encabezado `## Auditoría 06`
- Archivos modificados: 6 con « M» (README.md, auditoria-tecnica.md, registro-log.md, definicion-epica-02.md, iteracion-02-02 e iteracion-02-03)
- Revisión móvil 360 px y escritorio: realizada por el auditor (Claude, asistente de planificación) con Chromium a 360×640, 768×1024 y 1280×800 sobre archivos idénticos por SHA-256 a los subidos: header de 112 px, sin desborde horizontal, barra inferior de 56 px que no tapa el footer, anclas a 112 px, foco de 3 px y sin objetivos táctiles menores de 44 px (el enlace de la marca extiende su área de clic a nombre e indicador).
- Lighthouse: no aplica en esta iteración.

## Criterios de aceptación

- [x] Siempre hay un botón de llamada visible a 360 × 640 px.
- [x] La barra flotante no tapa contenido ni el footer.
- [x] Los anclajes no quedan ocultos bajo el header fijo.
- [x] Todos los enlaces externos llevan `rel="noopener noreferrer"`.

## Decisiones tomadas

- La estructura persistente se integra en `LayoutBase` (faltaba en la primera ejecución).
- El footer solo muestra datos respaldados; cobertura y facturación quedan ocultas hasta que el cliente las confirme (decisión del desarrollador; AUD-01-003 y AUD-01-006 siguen abiertos).
- Tres anclas según RDA-009: Inicio, Servicios y Contacto (decisión del desarrollador).
- La cuenta de TikTok la confirmó el cliente, según informó el desarrollador (AUD-01-008).
- La barra móvil muestra texto visible corto («Llamar» y «WhatsApp») con nombre accesible completo («Llamar ahora» y «Escribir por WhatsApp»).
- Sin JavaScript de cliente: no se implementa el estado activo de la navegación (tarea opcional).

## Pendientes y riesgos

- Verificación manual del desarrollador: pestaña Red con `pnpm preview` (sin peticiones a terceros), ver el sitio en un teléfono real a 360 px y configurar WebStorm con separador LF.
- AUD-04-003 (descarga de fuentes en Cloudflare) sigue abierto hasta 05-01.
- Cobertura, tiempos de respuesta y facturación siguen pendientes del cliente (AUD-01-003 y AUD-01-006).
- `index.astro` y `404.astro` conservan botones con la paleta por defecto de Tailwind; se reemplazan por `BotonLlamada` y `BotonWhatsApp` en la Épica 03.
- `env(safe-area-inset-bottom)` vale 0 mientras el `viewport` no declare `viewport-fit=cover`; evaluar en 04-03.
- Falta un enlace «Saltar al contenido» (WCAG 2.4.1); evaluar en 04-03.

## Commit sugerido

`Épica 2 - Iteración 02-03: registra la Auditoría 06 y la bitácora de corrección; actualiza estados y criterios de 02-02, 02-03 y la épica; Épica 02 terminada tras verificación`
