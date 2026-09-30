# Iteración 05-01 · Publicación en producción

- **Épica:** 05 · Publicación y medición
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/05-01-produccion`
- **Depende de:** 04-03
- **RDA relacionadas:** RDA-001, RDA-008

## Objetivo

Pasar de la vista previa a producción sin datos provisionales.

## Tareas

1. Agregar una validación en compilación que falle si `src/data/negocio.js` contiene `PENDIENTE_CLIENTE` cuando `CF_PAGES_BRANCH` es `main` (variable que Cloudflare Pages expone durante la compilación).
2. Preparar la lista de verificación para el desarrollador:
   1. Proyecto de Cloudflare Pages conectado a GitHub, rama de producción `main`, comando `pnpm build`, salida `dist`.
   2. Versión de Node tomada de `.nvmrc`; si PNPM no se resuelve, definir la variable `PNPM_VERSION`.
   3. Dominio personalizado `gruasvillarrica.cl` y `www.gruasvillarrica.cl` con redirección 301 al dominio raíz.
   4. HTTPS forzado y certificado activo.
3. Prueba de humo en producción: llamadas desde celular, WhatsApp, anclajes, 404, cabeceras.

## Criterios de aceptación

- [ ] Compilación de `main` falla ante datos provisionales y pasa sin ellos.
- [ ] Prueba de humo documentada en la bitácora.
