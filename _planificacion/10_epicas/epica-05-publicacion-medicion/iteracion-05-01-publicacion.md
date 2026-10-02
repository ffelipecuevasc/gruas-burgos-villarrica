# Iteración 05-01 · Publicación en producción

- **Épica:** 05 · Publicación y medición
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/05-01-produccion`
- **Depende de:** 04-03
- **RDA relacionadas:** RDA-001, RDA-008

## Objetivo

Pasar de la vista previa a producción sin datos provisionales.

## Tareas

1. Validación de datos provisionales: **hecha en 04-02** (adelantada). La integración `src/integraciones/validar-datos-provisionales.js`, registrada en `astro.config.mjs`, detiene la compilación cuando `CF_PAGES_BRANCH` es `main` y algún archivo de `dist/` contiene `PENDIENTE_CLIENTE`; los datos provisionales que no se publican no bloquean. Aquí solo queda comprobar, en el registro de compilación de Cloudflare Pages, que se ejecuta: debe aparecer la línea «Sin PENDIENTE_CLIENTE en N archivos publicados».
2. Preparar la lista de verificación para el desarrollador:
   1. Proyecto de Cloudflare Pages conectado a GitHub, rama de producción `main`, comando `pnpm build`, salida `dist`.
   2. Versión de Node tomada de `.nvmrc`; definir siempre `PNPM_VERSION` = `12.8.1` en las variables de compilación; confirmar en el log que Node sea 24.x (si Pages no resuelve "24" desde `.nvmrc`, fijar `NODE_VERSION` completo) y PNPM 12.8.1.
   3. Dominio personalizado `gruasvillarrica.cl` y `www.gruasvillarrica.cl` con redirección 301 al dominio raíz.
   4. HTTPS forzado y certificado activo.
3. Prueba de humo en producción: llamadas desde celular, WhatsApp, anclajes, 404, cabeceras.

## Criterios de aceptación

- [ ] Compilación de `main` falla ante datos provisionales y pasa sin ellos. (Simulado en local en 04-02 con `CF_PAGES_BRANCH=main`: pasa con el contenido actual y falla con un dato forzado. Falta confirmarlo en Cloudflare Pages.)
- [ ] Prueba de humo documentada en la bitácora.
