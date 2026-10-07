# Iteración 05-06 · Perfil de Empresa de Google y campaña de Google Ads

- **Épica:** 05 · Ajustes finales, publicación y medición
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/05-06-perfil-y-ads`
- **Depende de:** 05-02 (terminada) y del acceso del desarrollador al Perfil de Empresa de Google y a la cuenta de Google Ads
- **RDA relacionadas:** RDA-010
- **Hallazgos que cierra:** AUD-01-009 (coordenadas de la base) y AUD-01-010 (enlace oficial al perfil), si el desarrollador entrega el pin validado y el enlace.

## Objetivo

Dejar el sitio enlazado desde el Perfil de Empresa de Google y la campaña de Google Ads lista para activarse a fines de octubre, **sin activar**. Esta iteración nace de 05-02: sus tareas de Perfil de Empresa y Google Ads no se pudieron hacer porque dependen del acceso a esas cuentas.

Es casi toda de la fase B: los paneles los opera el desarrollador. El agente prepara la evidencia, la documentación y, solo si hay datos, el cambio del JSON-LD.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**.

## Decisiones vigentes (heredadas de 05-02, 2026-10-06)

1. **RDA-010 aceptada:** la medición de conversiones se hace con el recurso de llamada y las conversiones de llamadas desde anuncios, sin código en el sitio. No se agrega la etiqueta de Google (`gtag.js`). Los clics de WhatsApp en el sitio no se miden.
2. **Formato de la campaña:** campaña de **Búsqueda** con **anuncio de búsqueda adaptable** y **recurso de llamada**. Los anuncios «solo de llamada» se retiran en febrero de 2027.
3. **Textos de los anuncios:** el borrador `borrador-textos-google-ads.md` (fuera del repositorio) los aprueba el desarrollador y los pega en el panel. No se guardan en el repositorio. Siguen la lista «No publicar» de `definicion-epica-05.md`.

## Reglas de la iteración

1. El JavaScript propio sigue por debajo de 1 KB (RDA-006). La etiqueta de Google no se agrega al sitio (RDA-010).
2. **Autorizado, solo si el desarrollador entrega el pin y el enlace:** `src/data/negocio.js` y `src/components/DatosEstructurados.astro`, únicamente para `geo` y `hasMap`, con los valores exactos entregados. Sin ellos no se toca `src/`.
3. Las credenciales, los identificadores de cuenta de pago (por ejemplo, el número de cliente de Google Ads), los correos personales y los textos de los anuncios no se escriben en el repositorio, que es público. Las capturas no deben mostrar datos personales.
4. No se hacen `commit`, `push` ni cambios de rama. Los hace el desarrollador. El agente no consulta URLs públicas.

## Contenido aprobado de esta iteración

Ninguno en el sitio mientras no se entreguen el pin validado de la base y el enlace oficial del perfil de Google. Con ellos, se agregan `geo` y `hasMap` al JSON-LD con esos datos exactos, sin interpretarlos.

## Tareas

1. **Perfil de Empresa de Google.** El campo «Sitio web» del perfil es `https://gruasvillarrica.cl/`.
2. **Google Ads.** Campaña de Búsqueda con anuncio adaptable y los textos aprobados, URL final `https://gruasvillarrica.cl/`, recurso de llamada con el número de `src/data/negocio.js` y conversión «Llamadas desde anuncios». La campaña queda en estado **pausado**.
3. **RDA-010.** Se confirma como implementada con la campaña creada.
4. **`geo` y `hasMap` (condicional).** Si el desarrollador entrega el pin y el enlace oficial, se agregan al JSON-LD y se validan.
5. **Documentación.**
    - Bitácora nueva `bitacora-05-06-AAAA-MM-DD.md` en `_planificacion/99_bitacora/`, con la plantilla de `_planificacion/README.md` §5.2, fecha real, fin de línea LF y estado final «En revisión». Nunca «Terminada».
    - `evidencia-05-06-fase-b.md`, vacío para el desarrollador, con las secciones de Perfil de Empresa y Google Ads de la evidencia de 05-02.
    - `registro-log.md`, y `auditoria-tecnica.md` (Auditoría 10) para AUD-01-009 y AUD-01-010.

## Criterios de aceptación

**Fase A, local (solo si hay `geo` y `hasMap`):**

- [ ] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias (hints: hoy 52). JavaScript de cliente sin cambios: 960 B en la portada y 191 B en el 404.
- [ ] El JSON-LD contiene `geo` y `hasMap` con los valores exactos entregados, es válido y no contiene `PENDIENTE_CLIENTE`.
- [ ] `git status` muestra cambios solo en `src/data/negocio.js`, `src/components/DatosEstructurados.astro` y `_planificacion/`.

**Fase B, paneles (evidencia en `evidencia-05-06-fase-b.md`):**

- [ ] El Perfil de Empresa de Google muestra `https://gruasvillarrica.cl/` como sitio web.
- [ ] Campaña de Google Ads de Búsqueda con anuncio adaptable, recurso de llamada con el número del negocio y conversión «Llamadas desde anuncios», con la URL final del sitio, los textos aprobados por el desarrollador y estado **pausado**.
- [ ] Si se agregaron `geo` y `hasMap`: validador de Schema.org y Prueba de resultados enriquecidos de Google sin errores.
- [ ] Ninguna etiqueta de Google se agregó al sitio (RDA-010).

## Fuera de alcance

- Activar la campaña: la hace el desarrollador cuando lo decida.
- Presupuesto, palabras clave y pujas de la campaña.
- Un panel de métricas propio o cualquier backend (RDA-001).

## Tareas del desarrollador

1. Ejecutar la fase B en los paneles y completar `evidencia-05-06-fase-b.md`.
2. Aprobar y pegar en Google Ads los textos del borrador, y dejar la campaña pausada.
3. Entregar el pin validado de la base y el enlace oficial del perfil, si quiere sumar `geo` y `hasMap`.
4. Hacer `commit`, `push`, el Pull Request y el merge, y marcar la iteración «Terminada».