# Bitácora 04 (cierre) · Cierre de la Épica 04: SEO técnico, rendimiento y accesibilidad

- **Fecha:** 2026-10-02
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `iteracion/04-03-auditoria`
- **Estado final:** En revisión

## Resumen

Cierre documental de la Épica 04, después de la fase B de 04-03 (commit `e9bf139`). Se registran las decisiones 10, 11 y 12 del desarrollador y los datos que confirmó. Con ellas, los 10 criterios de 04-03 quedan marcados, el criterio de LCP de 03-01 se alinea a 2,5 s o menos, y los cuatro puntos del criterio de término de la épica se cumplen.

La épica y las iteraciones 04-01 a 04-04 quedan «En revisión»: el paso a «Terminada» lo hace el desarrollador. Es una tarea solo de documentación: no se tocó `src/`, `public/`, `DESIGN.md`, `AGENTS.md`, `README.md` ni la configuración.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/99_bitacora/bitacora-04-cierre-2026-10-02.md` | Nueva. |
| `…/epica-04-seo-rendimiento-a11y/definicion-epica-04.md` | Estado «En revisión», con el motivo. Decisiones 10, 11 y 12 agregadas a la lista de decisiones del desarrollador. |
| `…/epica-04-seo-rendimiento-a11y/iteracion-04-03-auditoria-a11y-lighthouse.md` | Estado «En revisión», con las tres bitácoras. Los 10 criterios marcados, cada uno con su respaldo de la fase B; el de WhatsApp, como «cumplido por testimonio del desarrollador, sin captura». |
| `…/epica-04-seo-rendimiento-a11y/iteracion-04-01-seo-datos-estructurados.md` | Casilla del favicon marcada: se ve en la pestaña de Chrome móvil (sección 6 de la evidencia) y `/favicon.ico` responde 200 en producción. Se conserva la medición parcial anterior. |
| `…/epica-03-contenido-secciones/iteracion-03-01-inicio-hero.md` | Criterio de LCP alineado a «2,5 s o menos» (decisión 11) y marcado como cumplido con 2,3 s en producción. Se conservan el texto original y las notas anteriores. |
| `_planificacion/00_producto/decisiones.md` | RDA-012: en lugar de «hay que confirmar en 04-03», consta la confirmación en Cloudflare (`sharp` 0.35.5 con su binario nativo, 96 optimizaciones, Node v24.13.1 y pnpm 12.8.1). |
| `_planificacion/00_producto/auditoria-tecnica.md` | AUD-09-021: «Resuelto» (decisión 11). AUD-09-016 y AUD-09-018: «Trasladado a 05-01» (decisión 12). AUD-09-023 nuevo (Baja, informativo). Resumen de la Auditoría 09 con una tabla de estados tras el cierre. Nota en AUD-01-025 sobre la decisión 10. |
| `…/epica-05-publicacion-medicion/iteracion-05-01-publicacion.md` | Tareas pendientes 5 (caché de `robots.txt` y `favicon.ico`) y 6 (HSTS, con su riesgo y un plan gradual), agregadas después de la tarea 4 sin cambiar el resto. |
| `_planificacion/00_producto/registro-log.md` | Iteración activa, próximo hito (Épica 05), enlace a esta bitácora en la fila de 04-03, «Decisiones por tomar» (sale el LCP de 03-01; la caché y HSTS remiten a 05-01) y una línea del historial. |

Ningún archivo renombrado ni eliminado. No se editaron las bitácoras existentes.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos (igual que en la fase B).
- `pnpm build`: no se ejecutó. Esta tarea pide `format:check` y `check`, y no cambia nada que se compile. La última compilación, de la fase B, terminó sin errores ni avisos.
- Revisión móvil 360 px y escritorio: no aplica (solo documentación).
- Lighthouse (PageSpeed, por el desarrollador, fase B): móvil, mediana 97 / 100 / 100 / 100; escritorio, 100 / 100 / 100 / 100.

### Decisiones del desarrollador registradas (2026-10-02)

Registradas tal como las entregó el desarrollador, en `definicion-epica-04.md`:

| N.º | Decisión | Efecto en los documentos |
| :--- | :--- | :--- |
| 10 | La vista previa del enlace en WhatsApp se da por verificada por el testimonio escrito del desarrollador (Android, Chrome móvil y WhatsApp), sin captura. El criterio queda como «cumplido por testimonio del desarrollador, sin captura». | Casilla marcada en 04-03 con esa leyenda; AUD-09-023 (Baja, informativo); nota en AUD-01-025 |
| 11 | El criterio de LCP de 03-01 se alinea a «2,5 s o menos», igual que la decisión 9 de la definición de la épica. Con el LCP de 2,3 s medido en producción, ese criterio queda cumplido. | Casilla de 03-01 marcada; AUD-09-021 resuelto; sale de «Decisiones por tomar» |
| 12 | AUD-09-016 (caché de `robots.txt` y `favicon.ico` no definida en `_headers`) y AUD-09-018 (sin HSTS) se trasladan a la iteración 05-01. | Ambos hallazgos «Trasladado a 05-01»; tareas 5 y 6 de 05-01 |

### Datos confirmados por el desarrollador

Registrados tal cual:

| Dato | Respuesta del desarrollador |
| :--- | :--- |
| Modelo y versión de Android del teléfono de las pruebas | Samsung Galaxy A52+ con Android 16 actualizado este 2026. |
| Mensaje 1 de WhatsApp (emergencia) probado desde | desde 768 px desde el hero. |
| Carpetas `cdp-gruas-*` de `%TEMP%` borradas | Sí. |

Observaciones sobre esos datos, sin cambiarlos:

1. **Teléfono.** En la fase B señalé que no conozco un modelo llamado «A52+» y que, hasta donde sé, la familia Galaxy A52 recibió actualizaciones oficiales hasta Android 14. El desarrollador confirmó el dato y queda así; mi observación era de conocimiento general, no de la evidencia.
2. **Mensaje 1.** La evidencia decía que se probó en «Hero, tarjeta de despacho y barra inferior». La respuesta («desde 768 px desde el hero») confirma el hero a 768 px o más, pero no aclara los otros dos puntos: la tarjeta de despacho solo se muestra desde 768 px y la barra inferior solo bajo 768 px, así que no pueden verse a la vez. No consta si la tarjeta y la barra se probaron por separado. El mensaje es el mismo en los tres puntos (fase A: 62 de 62 enlaces con el mensaje esperado, sin abrirlos).
3. **Limpieza.** Solo se confirmó el borrado de las carpetas `cdp-gruas-*`. El de `node_modules/.cache/prueba-csp` (tarea 10 de 04-03) no consta.

### Criterio de término de la Épica 04

| Punto | Resultado | Respaldo |
| :--- | :--- | :--- |
| Lighthouse móvil ≥ 95 en las cuatro categorías en `https://gruasvillarrica.cl` | Cumplido | Mediana 97, 100, 100 y 100 |
| JSON-LD sin errores en Schema.org y sin críticos en la Prueba de resultados enriquecidos | Cumplido | 0 errores y 0 advertencias; 0 críticos |
| Vista previa del enlace en WhatsApp con imagen, título y descripción | Cumplido por testimonio del desarrollador, sin captura | Decisión 10; AUD-09-023 |
| Sin hallazgos de severidad Alta abiertos en la Auditoría 09 | Cumplido | AUD-09-001 resuelto en 04-04 |

### Criterio de LCP de 03-01

Queda cumplido por la decisión 11, con tres salvedades que constan en la casilla:

- La medición es de producción (PageSpeed sobre `https://gruasvillarrica.cl`), no de `pnpm preview` como decía el texto original. La decisión 11 la acepta.
- La evidencia de PageSpeed no indica cuál fue el elemento LCP. En Chrome, en local, fue la foto del hero en todas las cargas medidas (04-02 y fase A de 04-03); no es una medición de Lighthouse.
- Con 2,3 s cumple el nuevo umbral. La mejora bajo 2,0 s sigue como optimización opcional (AUD-09-019).

### Hallazgos de la Auditoría 09 que siguen abiertos

| ID | Severidad | Tema | Estado |
| :--- | :--- | :--- | :--- |
| AUD-09-005 | Media | FA-05: con zoom al 400 % quedan 87 px de alto útil | Abierto, diferido (cambia `DESIGN.md` §5) |
| AUD-09-009 | Baja | FA-09: tamaños de letra en px | Abierto, diferido (cambia `DESIGN.md` §3.1 y §9) |
| AUD-09-016 | Baja | Caché de 4 h en `robots.txt` y `favicon.ico`, no definida en `_headers` | Trasladado a 05-01 (tarea 5) |
| AUD-09-018 | Baja | Sin HSTS | Trasladado a 05-01 (tarea 6) |
| AUD-09-019 | Baja | Optimización opcional del LCP bajo 2,0 s | Abierto, no bloqueante |

Sin acción pendiente, pero vigentes:

- **Riesgos aceptados o aceptados:** AUD-09-012 (320 × 568 px), AUD-09-013 (dominio indexable antes de la aprobación del cliente) y AUD-09-020 (avisos opcionales del JSON-LD).
- **Informativos:** AUD-09-015, AUD-09-017, AUD-09-022 y AUD-09-023.

Fuera de la Auditoría 09 siguen abiertos, entre otros:

- **AUD-08-023:** falta la aprobación del cliente de la Épica 03.
- **AUD-04-003:** las fuentes en el registro de compilación, sin evidencia.
- **AUD-08-032:** la alineación de `AGENTS.md` §6.4 y `DESIGN.md` §5 con D3.

## Criterios de aceptación

Tareas del cierre:

- [x] 1. Bitácora con la plantilla completa, decisiones 10 a 12, datos confirmados, cambios por archivo y hallazgos abiertos.
- [x] 2. `definicion-epica-04.md`: estado «En revisión» y decisiones 10, 11 y 12.
- [x] 3. `iteracion-04-03-auditoria-a11y-lighthouse.md`: estado «En revisión» y los 10 criterios marcados con su respaldo; WhatsApp, «cumplida por testimonio del desarrollador, sin captura».
- [x] 4. `iteracion-04-01-seo-datos-estructurados.md`: favicon verificado en Chrome móvil.
- [x] 5. `iteracion-03-01-inicio-hero.md`: LCP alineado a 2,5 s o menos y marcado con 2,3 s.
- [x] 6. `decisiones.md`: RDA-012 con `sharp` confirmado en Cloudflare.
- [x] 7. `auditoria-tecnica.md`: AUD-09-021 resuelto, AUD-09-016 y AUD-09-018 trasladados, AUD-09-023 agregado y resumen actualizado.
- [x] 8. `iteracion-05-01-publicacion.md`: tareas de caché y HSTS agregadas.
- [x] 9. `registro-log.md`: cierre reflejado; 04-01 a 04-04 siguen «En revisión».
- [x] `pnpm format:check` y `pnpm check` sin errores ni advertencias.
- [x] Ningún estado marcado como «Terminada»; sin cambios en `src/`, `public/`, `DESIGN.md`, `AGENTS.md`, `README.md` ni la configuración.

## Decisiones tomadas

Ninguna es estructural; son decisiones de redacción.

1. **Textos conservados.** En 03-01 y 04-01 se mantienen el texto original del criterio y las notas anteriores, para que se vea qué cambió y por qué. La nota de la fase B de 03-01 («sigue sin marcar») pasa a «antes de la decisión 11: quedó sin marcar», para no contradecir la casilla marcada.
2. **Nota en AUD-01-025.** Su estado decía que la vista previa en WhatsApp no tenía captura; se agregó que se da por verificada por la decisión 10. No estaba en la lista de la tarea 7, pero es el mismo archivo autorizado y evita dos estados contradictorios.
3. **Tareas nuevas de 05-01 al final.** Se agregaron como 5 y 6, después de la bitácora (tarea 4), para no renumerar lo existente.
4. **Plan de HSTS.** Escalones de `max-age` de 300 s, 1 día, 1 semana y 1 año, sin `includeSubDomains` ni `preload` al principio. Es una propuesta para 05-01: la decisión es del desarrollador.
5. **«Decisiones por tomar».** Sale el LCP de 03-01 (decidido). La caché y HSTS se mantienen, pero remiten a las tareas 5 y 6 de 05-01: siguen siendo decisiones pendientes.

## Pendientes y riesgos

- **El desarrollador** pasa 04-01, 04-02, 04-03, 04-04 y la Épica 04 a «Terminada».
- **Sin captura de la vista previa en WhatsApp** (AUD-09-023). Si se quiere un registro visual, basta una captura al próximo cambio de metadatos.
- **Mensaje 1 de WhatsApp:** no consta la prueba real desde la tarjeta de despacho ni desde la barra inferior (observación 2).
- **Sitio indexable sin aprobación del cliente** (AUD-09-013, AUD-08-023).
- **05-01:**
  - La prueba de la falla de la validación en Cloudflare.
  - Anclas, 404 y primera pantalla con la barra de direcciones en el teléfono.
  - iPhone, si hay uno disponible.
  - Las fuentes en el registro de compilación.
  - La caché (tarea 5) y HSTS (tarea 6).
- **Medido solo en Chrome y Android.**
- **Estado previo.** `git status` sigue mostrando `AD src/assets/LogoGruasBurgos.svg`, anterior a 04-01. Los archivos editados de `_planificacion/` tienen CRLF en la copia de trabajo; Git los normaliza a LF al confirmar. Esta bitácora se escribió con LF.

## Commit sugerido

`Épica 4 - Iteración 04-03: cierra la Épica 04 en revisión con las decisiones 10 a 12, criterios de 04-03 marcados, LCP de 03-01 a 2,5 s, sharp confirmado en RDA-012, y caché y HSTS a 05-01 (cierre)`

(197 caracteres, contados con código.)
