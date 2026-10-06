# Iteración 05-02 · Medición: Search Console, Web Analytics y Google Ads

- **Épica:** 05 · Ajustes finales, publicación y medición
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/05-02-medicion`
- **Depende de:** 05-01
- **RDA relacionadas:** RDA-006, RDA-010; se crea la de Web Analytics (la numeración la asigna quien la registra)
- **Hallazgos que cierra:** AUD-09-017 (Report-To y NEL, solo se considera al decidir), AUD-01-009 (coordenadas de la base) y AUD-01-010 (enlace oficial al perfil), si el desarrollador entrega los datos.

## Objetivo

Medir visitas, búsquedas y conversiones sin degradar la velocidad del sitio, y dejar la campaña de Google Ads lista para activarse a fines de octubre.

Esta iteración es casi toda de la fase B: los paneles los opera el desarrollador. El agente prepara las listas de verificación, la plantilla de evidencia y los cambios mínimos del sitio, si los hay.

## Reglas de la iteración

1. El JavaScript propio sigue por debajo de 1 KB (RDA-006). Un script de terceros (analítica, etiquetas de Google) **no se agrega sin una RDA aceptada** que lo apruebe y mida su impacto.
2. **Web Analytics.** Cloudflare Web Analytics, activado con inyección automática, agrega un script a la página. Eso choca con RDA-006 y con el criterio con que se desactivó la ofuscación de correos de la zona (AUD-09-014). Por eso se decide en una RDA antes de activarlo. Las alternativas son: no usarlo y medir con Search Console y Google Ads, o aceptarlo con medición del impacto.
3. La política de seguridad de contenido de Astro (`security.csp`, recomendación de la bitácora 04-02) se decide junto con la medición, porque cualquier script de terceros la afecta. Requiere una RDA.
4. **Los textos de los anuncios** (títulos, descripciones y extensiones) siguen la lista «No publicar» de `definicion-epica-05.md` y el desarrollador los aprueba. No llevan tiempos de respuesta, tarifas ni recargos, ni nombres propios del dueño.
5. Las credenciales, los identificadores de cuenta de pago y los datos personales no se escriben en el repositorio, que es público.
6. No se hacen `commit`, `push` ni cambios de rama. Los hace el desarrollador. El agente no consulta URLs públicas.

## Contenido aprobado de esta iteración

Ninguno en el sitio. Si el desarrollador entrega el pin validado de la base y el enlace oficial del perfil de Google, se agregan `geo` y `hasMap` al JSON-LD con esos datos exactos.

## Tareas

1. **Search Console.**
   - Propiedad de dominio verificada (registro DNS TXT en Cloudflare) y `sitemap-index.xml` enviado y procesado. El desarrollador ya ingresó el sitio a Google «a mano» antes de la reunión del 2026-10-04: esta tarea deja constancia con evidencia, sin rehacerlo.
   - Tras el merge final de 05-01, se solicita una nueva inspección de la portada, porque el contenido cambió.
2. **Web Analytics y CSP (RDA).** Decidir y registrar una RDA: se activa (con el impacto medido en Lighthouse antes y después) o se descarta. Decidir si `security.csp` se activa o se descarta.
3. **Perfil de Empresa de Google.** Enlazar el sitio desde la ficha de Maps. Con el pin validado y el enlace oficial al perfil, `geo` y `hasMap` se agregan al JSON-LD y se validan.
4. **RDA-010.** Cerrarla como Aceptada o Descartada. Si se decide medir clics en el sitio, la etiqueta se carga de forma diferida y se mide Lighthouse antes y después. Conversiones de llamadas desde anuncios y extensiones de llamada no requieren código en el sitio.
5. **Google Ads.** La URL final de los anuncios es el sitio (o un ancla), con extensión de llamada configurada. La campaña queda lista, **sin activar**.
6. **Documentación.**
   - Bitácora nueva `bitacora-05-02-AAAA-MM-DD.md` en `_planificacion/99_bitacora/`, con la plantilla de `_planificacion/README.md` §5.2, fecha real, fin de línea LF y estado final «En revisión». Nunca «Terminada». Incluye las URLs de los paneles, sin credenciales, y las cifras base de rendimiento de 05-01.
   - `decisiones.md`: RDA-010 y la nueva RDA, con su estado final. `registro-log.md`: fila de 05-02, «Iteración activa» y «Próximo hito».

## Criterios de aceptación

**Fase A, local (solo si hay cambios en el sitio):**

- [ ] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias.
- [ ] JavaScript propio de menos de 1 KB. Si se agregó una etiqueta de terceros, se mide aparte y consta la RDA.
- [ ] Si se agregaron `geo` y `hasMap`: JSON-LD sin errores y sin valores `PENDIENTE_CLIENTE`.

**Fase B, paneles (evidencia en `evidencia-05-02-fase-b.md`):**

- [ ] Search Console muestra la propiedad verificada y el sitemap procesado, con captura sin datos personales.
- [ ] Se solicitó la nueva inspección de la portada tras el merge final de 05-01.
- [ ] RDA-010 en estado Aceptada o Descartada. La RDA de Web Analytics, aceptada o descartada.
- [ ] Lighthouse móvil de 95 o más en las cuatro categorías después de cualquier etiqueta agregada, con la cifra anterior y la posterior.
- [ ] Campaña de Google Ads con la URL final del sitio y la extensión de llamada configuradas, sin activar, con los textos aprobados por el desarrollador.

## Fuera de alcance

- Activar la campaña: la hace el desarrollador cuando lo decida.
- Presupuesto, palabras clave y pujas de la campaña.
- Un panel de métricas propio o cualquier backend (RDA-001).

## Tareas del desarrollador

1. Verificar la propiedad y enviar el sitemap en Search Console (o dejar constancia de lo que ya hizo).
2. Decidir la RDA de Web Analytics, la CSP y RDA-010.
3. Entregar el pin validado de la base y el enlace oficial del perfil de Google, si quiere sumar `geo` y `hasMap`.
4. Configurar la campaña y la extensión de llamada; aprobar los textos de los anuncios.
5. Completar `evidencia-05-02-fase-b.md` con la plantilla de `evidencia-04-03-fase-b.md` y marcar la iteración «Terminada».