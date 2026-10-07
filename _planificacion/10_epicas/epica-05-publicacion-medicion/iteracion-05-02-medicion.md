# Iteración 05-02 · Medición: Search Console, Web Analytics y Google Ads

- **Épica:** 05 · Ajustes finales, publicación y medición
- **Estado:** En revisión. Fase A, local: [bitacora-05-02-2026-10-06](../../99_bitacora/bitacora-05-02-2026-10-06.md). Fase B registrada con la evidencia del desarrollador: [bitacora-05-02-fase-b-2026-10-07](../../99_bitacora/bitacora-05-02-fase-b-2026-10-07.md). Las tareas de Perfil de Empresa de Google y de Google Ads pasan a la iteración 05-06. La marca «Terminada» la pone el desarrollador.
- **Rama sugerida:** `iteracion/05-02-medicion`
- **Depende de:** 05-01 (terminada)
- **RDA relacionadas:** RDA-006, RDA-010, RDA-013 (Web Analytics) y RDA-014 (CSP)
- **Hallazgos que cierra:** AUD-09-017 (Report-To y NEL: considerado y aceptado) y AUD-10-001 (origen del «JavaScript heredado»). AUD-01-009 y AUD-01-010 siguen abiertos hasta que el desarrollador entregue el pin validado de la base y el enlace oficial del perfil de Google.

## Objetivo

Medir visitas, búsquedas y llamadas sin degradar la velocidad del sitio, y dejar la campaña de Google Ads lista para activarse a fines de octubre.

Esta iteración es casi toda de la fase B: los paneles los opera el desarrollador. El agente deja las decisiones registradas, la evidencia preparada y la documentación al día. No cambia el sitio.

## Decisiones del desarrollador (2026-10-06)

1. **Web Analytics (RDA-013): se activa, condicionada a la medición.** Cloudflare Web Analytics agrega a cada página un script propio de Cloudflare (`beacon.min.js`). Para Pages se activa en un clic y el script se agrega en el siguiente despliegue. Cuenta visitas y visitantes; no cuenta llamadas ni clics de WhatsApp. La RDA queda «Aceptada, condicionada» y se cierra con la medición de la fase B:
   - **Se mantiene** si, con el script activo, Lighthouse móvil da 95 o más en las cuatro categorías (mediana de tres ejecuciones), LCP de 2,5 s o menos y CLS 0, y el JavaScript propio sigue por debajo de 1 KB (el script de Cloudflare es de terceros y se mide aparte).
   - **Se desactiva** en caso contrario (Web Analytics › Manage site › Disable) y la RDA queda «Descartada».
   - Cifras de comparación (producción, 05-01): móvil, Rendimiento 97, 99 y 99; Accesibilidad, Buenas prácticas y SEO 100; LCP 2,3, 1,8 y 1,8 s; CLS 0; TBT 0 ms. Escritorio: 100 en las cuatro; LCP 0,6 s.
   - Si el script ya estaba activo antes de esta iteración (se comprueba en la fase B), las cifras de 05-01 ya lo incluyen, y es probable que expliquen el «JavaScript heredado» de AUD-10-001.
2. **CSP de Astro (RDA-014): descartada por ahora.** El sitio es estático y sin scripts externos propios. Si se activara con Web Analytics encendido, habría que declarar el script de Cloudflare. Se reabre solo si cambia el panorama.
3. **RDA-010: aceptada la propuesta original.** La medición se hace con el recurso de llamada y las conversiones de llamadas desde anuncios, sin código en el sitio. No se agrega la etiqueta de Google (`gtag.js`). Los clics de WhatsApp en el sitio no se miden.
4. **AUD-09-017.** Cloudflare agrega `Report-To` y `NEL`, no es JavaScript ni un recurso de la página; sin CSP no hay conflicto. Se considera y se acepta, sin acción.
5. **Anuncios.** Campaña de Búsqueda con anuncio adaptable y recurso de llamada (los anuncios «solo de llamada» se retiran en febrero de 2027). Los textos son un borrador que el desarrollador aprueba y pega en el panel; no se guardan en el repositorio.

## Reglas de la iteración

1. El JavaScript propio sigue por debajo de 1 KB (RDA-006). Esta iteración no cambia código del sitio.
2. **Autorizado:** `decisiones.md` (RDA-010, RDA-013 y RDA-014), `auditoria-tecnica.md` (solo la sección de la Auditoría 10) y los archivos de documentación de esta iteración.
3. **Los textos de los anuncios** siguen la lista «No publicar» de `definicion-epica-05.md` y los aprueba el desarrollador. No llevan tiempos de respuesta, tarifas ni recargos, ni nombres propios del dueño.
4. Las credenciales, los identificadores de cuenta de pago y los datos personales no se escriben en el repositorio, que es público. Las capturas no deben mostrar datos personales.
5. No se hacen `commit`, `push` ni cambios de rama. Los hace el desarrollador. El agente no consulta URLs públicas.

## Contenido aprobado de esta iteración

Ninguno en el sitio. Si el desarrollador entrega el pin validado de la base y el enlace oficial del perfil de Google, se agregan `geo` y `hasMap` al JSON-LD con esos datos exactos, en una iteración corta aparte.

## Tareas

1. **Decisiones.** RDA-010 «Aceptada» (propuesta original), RDA-013 «Aceptada, condicionada a la medición» (se cierra en la fase B) y RDA-014 «Descartada», con el índice de `decisiones.md` actualizado.
2. **Auditoría 10.** AUD-09-017 considerado y aceptado; AUD-10-001 con su plan de resolución; AUD-01-009 y AUD-01-010 siguen abiertos.
3. **Evidencia de la fase B** (`evidencia-05-02-fase-b.md`), vacía para el desarrollador: Web Analytics (estado actual, activación y medición), Search Console, nueva inspección de la portada, Perfil de Empresa de Google, Google Ads (campaña sin activar) y PageSpeed.
4. **Documentación.**
   - Bitácora nueva `bitacora-05-02-AAAA-MM-DD.md` en `_planificacion/99_bitacora/`, con la plantilla de `_planificacion/README.md` §5.2, fecha real, fin de línea LF y estado final «En revisión». Nunca «Terminada».
   - `registro-log.md`: fila de 05-02, «Iteración activa», «Próximo hito» y una línea del historial.

## Criterios de aceptación

**Fase A, local:**

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias (hints: hoy 52). JavaScript de cliente sin cambios: 960 B en la portada y 191 B en el 404. **Medido:** `format:check` sin diferencias; `check` con 0 errores, 0 advertencias y 52 hints en 40 archivos; `build` con código 0, 2 páginas y 0 líneas con «warn» o «error»; JavaScript en línea de 960 B (769 + 191) en la portada y 191 B en el 404, igual antes y después, sin archivos `.js` ni `<script src>` en `dist/`.
- [x] `decisiones.md` tiene RDA-010 «Aceptada», RDA-013 «Aceptada, condicionada a la medición» y RDA-014 «Descartada», con el índice al día. **Medido:** 14 filas en el índice y 14 secciones, de RDA-001 a RDA-014, correlativas y con el mismo título y estado en ambos lados.
- [x] La Auditoría 10 registra AUD-09-017 y AUD-10-001 como se describe arriba. **Medido:** apartado «Seguimiento en 05-02» con AUD-09-017 (considerado y aceptado, sin acción), AUD-10-001 (abierto, con plan de resolución para la fase B) y AUD-01-009 y AUD-01-010 (abiertos). AUD-10-001 no se cierra en la fase A.
- [x] `evidencia-05-02-fase-b.md` existe, con todas las secciones y sin respuestas prellenadas. **Medido:** encabezado, secciones 1 a 7, «Otros navegadores» (no aplica), observaciones y veredicto; 0 respuestas con contenido; 0 correos, teléfonos, identificadores de cuenta o textos de anuncios.
- [x] `git status` muestra cambios solo en `_planificacion/` (más los ajenos). Nada en `src/` ni en `public/`. **Medido:** cuatro archivos modificados y dos nuevos, todos en `_planificacion/`; ajeno y sin tocar, `AD src/assets/LogoGruasBurgos.svg`; nada en `public/`.

**Fase B, paneles (evidencia en `evidencia-05-02-fase-b.md`):**

- [x] Search Console muestra la propiedad verificada y `sitemap-index.xml` procesado, con captura sin datos personales. **Evidencia (2026-10-07):** propiedad de dominio `gruasvillarrica.cl`, verificada por registro DNS TXT; sitemap enviado el 2 oct 2026, estado «Correcto», 1 página descubierta, última lectura el 5 oct 2026. Captura del desarrollador: `Google Search Console - Sitemaps.pdf` (no está en el repositorio).
- [ ] Se solicitó la nueva inspección de la portada, después del merge final de 05-01. **Sin marcar:** el desarrollador decidió no solicitarla. La URL figura «en Google», con último rastreo el 2 oct 2026, 15:54:48.
- [x] Web Analytics: se registra si el script ya estaba activo; se activa si no lo estaba; se mide PageSpeed con el script (móvil y escritorio, tres ejecuciones cada uno) y se compara con las cifras de 05-01. Se decide: mantener (RDA-013 «Aceptada») o desactivar (RDA-013 «Descartada»). **Evidencia (2026-10-07):** el script ya estaba activo (el desarrollador lo activó antes de 05-01); `static.cloudflareinsights.com/beacon.min.js` aparece en producción; PageSpeed medido con el script, tres ejecuciones por dispositivo. Decisión: se mantiene; RDA-013 «Aceptada». No hay medición sin el script, así que no hay comparación «antes y después».
- [ ] El sitio está enlazado desde el Perfil de Empresa de Google. **Sin marcar: se traslada a 05-06** (el desarrollador no tiene acceso al perfil).
- [ ] Campaña de Google Ads de Búsqueda con anuncio adaptable, recurso de llamada con el número del negocio y conversión «Llamadas desde anuncios», con la URL final del sitio y los textos aprobados por el desarrollador, **en estado pausado** (sin activar). **Sin marcar: se traslada a 05-06** (el desarrollador no tiene acceso a la cuenta).
- [x] Lighthouse móvil con 95 o más en las cuatro categorías con el estado final de Web Analytics. **Evidencia (2026-10-07):** mediana de tres ejecuciones de PageSpeed: Rendimiento 96 (96, 96 y 94), Accesibilidad 100, Buenas prácticas 100 y SEO 100; CLS 0. **LCP de 2,5 s en las tres: justo en el límite.** La tercera ejecución dio 94 por sí sola; la regla es la mediana.

## Fuera de alcance

- Activar la campaña: la hace el desarrollador cuando lo decida.
- Presupuesto, palabras clave y pujas de la campaña.
- CSP (descartada), etiqueta de Google (`gtag.js`) y medición de clics de WhatsApp.
- `geo` y `hasMap` del JSON-LD, mientras no estén el pin validado y el enlace oficial.
- Un panel de métricas propio o cualquier backend (RDA-001).

## Tareas del desarrollador

1. Ejecutar la fase B en los paneles y completar `evidencia-05-02-fase-b.md`.
2. Aprobar y pegar en Google Ads los textos del borrador, y dejar la campaña pausada.
3. Decidir, con la medición, si Web Analytics se mantiene o se desactiva.
4. Hacer `commit`, `push`, el Pull Request y el merge, y marcar la iteración «Terminada».