# Bitácora 05-02 · Medición: fase B y alta de la iteración 05-06

- **Fecha:** 2026-10-07
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `main`
- **Estado final:** En revisión

## Resumen

Se registró la fase B de 05-02 con la evidencia del desarrollador ([`evidencia-05-02-fase-b.md`](../10_epicas/epica-05-publicacion-medicion/evidencia-05-02-fase-b.md)), tomada en producción con el commit `24660b3`, y se dio de alta la iteración 05-06. No se implementó nada ni se cambió código, `AGENTS.md` ni `public/_headers`.

Web Analytics está activo y se mantiene: RDA-013 queda «Aceptada», con la condición cumplida y el LCP móvil justo en el límite (2,5 s). AUD-10-001 queda cerrado: los 11 KiB de «JavaScript heredado» son del script de Cloudflare. Search Console tiene la propiedad verificada y el sitemap procesado.

Quedan sin marcar tres de las seis casillas de la fase B: la nueva inspección de la portada (el desarrollador decidió no solicitarla) y las de Perfil de Empresa de Google y Google Ads, que no se verificaron por falta de acceso a las cuentas y pasan a la iteración nueva 05-06.

El veredicto del desarrollador no da por completada la medición. No equivale a «Terminada»: 05-02 sigue «En revisión» y la marca él.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/00_producto/decisiones.md` | RDA-013: estado «Aceptada», actualización con las cifras y consecuencias de la decisión; fila del índice. RDA-010: actualización (sigue «Aceptada»; la implementación se confirma en 05-06). |
| `_planificacion/00_producto/auditoria-tecnica.md` | Solo la Auditoría 10: estado de la fila de AUD-10-001 y apartado nuevo «Seguimiento en 05-02 (fase B, 2026-10-07)». |
| `…/epica-05-publicacion-medicion/iteracion-05-02-medicion.md` | Línea «Estado» y las seis casillas de la fase B (tres marcadas, tres con su nota). |
| `…/epica-05-publicacion-medicion/definicion-epica-05.md` | 05-06 en el alcance (punto 6), en la tabla de iteraciones y en la decisión 12. Nada más. |
| `_planificacion/00_producto/registro-log.md` | Fila de 05-02, fila nueva de 05-06, «Iteración activa», «Próximo hito», «Decisiones por tomar», «Última actualización» y una línea del historial. |
| `_planificacion/99_bitacora/bitacora-05-02-fase-b-2026-10-07.md` | Nueva. |

No se tocaron `src/`, `public/`, `AGENTS.md`, `DESIGN.md`, las bitácoras anteriores, `evidencia-05-02-fase-b.md` ni `iteracion-05-06-perfil-y-ads.md` (existe; la dejó el desarrollador).

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos.
- `pnpm build`: OK. Código 0, 2 páginas, 0 líneas con «warn» o «error».
- Revisión móvil 360 px y escritorio: **no repetida.** No cambió el código, así que valen las mediciones de la fase A ([bitacora-05-02-2026-10-06](bitacora-05-02-2026-10-06.md)): 960 B de JavaScript en la portada y 191 B en el 404. No se abrió navegador ni servidor, y no se consultó ninguna URL pública.
- Lighthouse: no lo ejecuté; los datos de PageSpeed son los de la evidencia.
- `git status`: cambios solo en `_planificacion/`, más el ajeno `AD src/assets/LogoGruasBurgos.svg`.
- Identificador de Web Analytics: 0 apariciones de las dos cadenas buscadas (el inicio del identificador y el nombre del atributo que lo lleva) en `_planificacion/`, antes y después de escribir. La evidencia tampoco lo contiene: el desarrollador anotó que la línea no se pega.
- `iteracion-05-06-perfil-y-ads.md`: existe.

### Commit revisado

El commit desplegado en producción es `24660b338f185916cb213f810258eda093fbbca4`, el de la fase A de 05-02, que solo cambia archivos de `_planificacion/`. El código publicado es el mismo de 05-01.

### Evidencia del desarrollador

Todo lo de esta sección consta en la evidencia o lo indicó el desarrollador en el encargo; no lo medí yo.

- **Fecha:** 7 de octubre de 2026 (sin hora).
- **Equipos:** PC con Windows, PowerShell 7.6.6 y Chrome.

#### Web Analytics (RDA-013 y AUD-10-001)

| Punto | Resultado |
| :--- | :--- |
| `curl.exe` sobre la portada, filtrando `cloudflareinsights` | Imprimió una línea (no pegada: trae el identificador del sitio). Script activo |
| Dirección del script | `static.cloudflareinsights.com/beacon.min.js` |
| Panel de Cloudflare | Activado, sin cifras todavía |
| Auditoría «JavaScript heredado» de PageSpeed | 11 KiB; el desarrollador la atribuye al script de Cloudflare |
| Cuándo se activó | Antes de 05-01 (lo indica el desarrollador). La comprobación del estado previo no se hizo antes de activarlo |

- Las cifras de 05-01 ya incluían el script. No existe una medición sin él: no hay comparación «antes y después».
- **AUD-10-001 queda cerrado.**

#### PageSpeed Insights (`https://gruasvillarrica.cl/`, con el script activo)

| Dispositivo | Ejecución | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Móvil | 1 | 96 | 100 | 100 | 100 | 2,5 s | 0 | 0 ms |
| Móvil | 2 | 96 | 100 | 100 | 100 | 2,5 s | 0 | 0 ms |
| Móvil | 3 | 94 | 100 | 100 | 100 | 2,5 s | 0 | 10 ms |
| **Móvil, mediana** | — | **96** | **100** | **100** | **100** | **2,5 s** | **0** | 0 ms |
| Escritorio | 1 | 100 | 100 | 100 | 100 | 0,6 s | 0,004 | 10 ms |
| Escritorio | 2 | 100 | 100 | 100 | 100 | 0,7 s | 0 | 0 ms |
| Escritorio | 3 | 100 | 100 | 100 | 100 | 0,6 s | 0 | 0 ms |

Los enlaces a los informes están en la evidencia.

Comparación con 05-01 (2026-10-06, también con el script activo):

| Medida (móvil) | 05-01 | 05-02 |
| :--- | :--- | :--- |
| Rendimiento | 97, 99 y 99 (mediana 99) | 96, 96 y 94 (mediana 96) |
| LCP | 2,3, 1,8 y 1,8 s | 2,5 s en las tres |
| CLS | 0 | 0 |
| TBT | 0 ms | 0, 0 y 10 ms |

- **Condición de RDA-013** (95 o más en las cuatro categorías con la mediana, LCP de 2,5 s o menos y CLS 0): **cumplida, con el LCP justo en el límite.**
- La ejecución móvil 3 dio 94 por sí sola. La regla es la mediana.
- Advertencia informada: «JavaScript heredado», 11 KiB.
- Elemento del LCP: no se determinó («no visible en los PDFs»).
- **Decisión del desarrollador: Web Analytics se mantiene. RDA-013, «Aceptada».**

#### Search Console

| Punto | Resultado |
| :--- | :--- |
| Tipo de propiedad | De dominio, `gruasvillarrica.cl` |
| Verificada | Sí, por registro DNS TXT (ya lo estaba) |
| Sitemap `sitemap-index.xml` | Ya enviado, el 2 oct 2026 |
| Estado del sitemap | «Correcto» |
| Páginas descubiertas | 1 |
| Última lectura | 5 oct 2026 |
| Captura | `Google Search Console - Sitemaps.pdf` (del desarrollador; no está en el repositorio) |

#### Inspección de la portada

| Punto | Resultado |
| :--- | :--- |
| Resultado | «La URL está en Google» |
| Último rastreo | 2 oct 2026, 15:54:48 |
| Solicitud de indexación | **No solicitada.** El desarrollador responde que la URL ya está en Google y que no hubo cambios en el sitio |

Observación, sin juzgar la decisión: el sitio sí cambió después de ese rastreo (05-03, 05-04, 05-05 y HSTS en 05-01, publicados entre el 5 y el 6 de octubre). Google puede estar mostrando la versión anterior hasta su próximo rastreo.

#### Perfil de Empresa de Google y Google Ads

**No verificados.** El desarrollador no tiene acceso a esas cuentas: las credenciales las tiene el cliente y falta una reunión. Las nueve filas de Google Ads figuran como «No verificado». Pasan a la iteración 05-06.

#### JSON-LD

Sin cambios; los validadores no aplican.

#### Veredicto del desarrollador

- Medición completa: **no**, porque faltan el Perfil de Empresa y Google Ads.
- RDA-013: «Aceptada (LCP igual a 2,5 s)».
- RDA-010: «Pendiente de confirmación».
- Pendiente para una iteración nueva: actualizar el Perfil de Empresa y crear la campaña pausada. Les asigna severidad «Alta».

### Contraste con la fase A y con lo anterior

Nada de la evidencia contradice las mediciones de la fase A ni exige cambiar código. Cuatro puntos que no cuadran del todo y conviene leer con cuidado:

1. **Cuándo se activó el script.** El encargo dice que se activó antes de 05-01. La evidencia, en cambio, dice que el panel no muestra cifras porque «ha pasado muy poco tiempo desde que se activó», y la observación de la sección 9, que «al activar el script» el LCP subió a 2,5 s. Registré lo que indica el desarrollador en el encargo. Si el script ya estaba en 05-01, la observación de la sección 9 no describe un efecto del script.
2. **El 2026-10-02 la portada no contenía `beacon`** (AUD-09-014). Es compatible con una activación entre el 2 y el 6 de octubre; la fecha exacta no consta.
3. **El archivo de «JavaScript heredado».** La evidencia no lo copia del informe: dice «visible indirectamente mediante el ahorro en JS de terceros». El cierre de AUD-10-001 descansa en esa atribución del desarrollador y en que `dist/` no contiene ningún script externo (fase A).
4. **Severidad «Alta» en el veredicto.** Son tareas pendientes, no hallazgos de auditoría: la Auditoría 10 sigue sin hallazgos de severidad Alta abiertos.

### Interpretaciones

- **La diferencia con las cifras de 05-01** (97 a 99 y LCP de 1,8 a 2,3 s, contra 94 a 96 y 2,5 s) se atribuye a la variación entre ejecuciones de PageSpeed, **no** a la activación del script, que ya estaba en 05-01. Es una interpretación, no una medición: no hay datos sin el script, y seis ejecuciones no bastan para descartar otra causa.
- **RDA-010 se mantiene «Aceptada»,** aunque el desarrollador escribió «pendiente de confirmación» en la evidencia. Lo leo así: la decisión del 2026-10-06 sigue en pie y lo pendiente es confirmar que quedó implementada (campaña, recurso de llamada y conversión), lo que pasa a 05-06.
- **Las medianas** las calculé yo a partir de las tres ejecuciones; la de Rendimiento coincide con la que anotó el desarrollador (96).
- **La regla de `AGENTS.md`.** El encargo la llama «regla 3 de la sección de reglas de oro». En `AGENTS.md` esa regla está en la sección 7, «Reglas técnicas», punto 3. La cito como §7.3.

### No verificado

- **Perfil de Empresa de Google:** el campo «Sitio web».
- **Google Ads:** campaña, anuncio, recurso de llamada, conversión, estado «Pausada» y textos.
- **Solicitud de indexación de la portada:** no se hizo.
- **Elemento del LCP.**
- **Fecha en que se activó Web Analytics** y el estado previo a la activación.
- **Nombre del archivo** que señala la auditoría «JavaScript heredado», leído del informe.
- **Hora de las pruebas** y del despliegue.
- **La captura de Search Console:** no la vi; no está en el repositorio.
- **Safari en iPhone** y otros navegadores: no aplican a esta iteración.

## Criterios de aceptación

Fase B, según la evidencia del desarrollador:

- [x] Search Console: propiedad verificada y `sitemap-index.xml` procesado, con captura.
- [ ] Nueva inspección de la portada: no solicitada, por decisión del desarrollador.
- [x] Web Analytics: estado registrado, PageSpeed medido con el script y decisión tomada (se mantiene; RDA-013 «Aceptada»). Sin comparación «antes y después».
- [ ] Sitio enlazado desde el Perfil de Empresa de Google: se traslada a 05-06.
- [ ] Campaña de Google Ads pausada: se traslada a 05-06.
- [x] Lighthouse móvil con 95 o más en las cuatro categorías: 96, 100, 100 y 100 de mediana, con el LCP en el límite (2,5 s).

## Decisiones tomadas

Del desarrollador:

1. **Web Analytics se mantiene** y RDA-013 queda «Aceptada».
2. **05-02 se cierra con lo hecho** (Search Console, Web Analytics, RDA-010, RDA-013, RDA-014 y Auditoría 10) y lo bloqueado pasa a la iteración nueva **05-06**.
3. **No solicitar la indexación** de la portada.

Mías, de registro:

1. **RDA-013 y RDA-010 se actualizan con una «Actualización 2026-10-07»,** sin reescribir el texto anterior. En RDA-013 cambian además la línea de estado y la fila del índice.
2. **AUD-10-001 cambia de estado en su fila** de la Auditoría 10 y en un apartado nuevo de seguimiento de la fase B. La tabla de seguimiento de la fase A no se tocó.
3. **En «Decisiones por tomar» del registro,** la fila de Web Analytics (ya decidida) se reemplaza por la de la excepción de `AGENTS.md`.
4. **En la tabla del registro, 05-06 enlaza a su archivo de iteración** en la columna de la bitácora, porque aún no tiene bitácora.

## Pendientes y riesgos

- **Tareas del desarrollador:** commit y push; marcar 05-02 «Terminada» (archivo de la iteración y fila del registro).
- **Excepción de `AGENTS.md` §7.3.** El script de Web Analytics es un recurso de terceros en tiempo de ejecución y la regla lo prohíbe sin excepciones. Mientras no se decida, el sitio publicado contradice la letra de `AGENTS.md`. Figura en «Decisiones por tomar».
- **LCP en el límite.** 2,5 s en las tres ejecuciones móviles, sin margen. Una ejecución peor, o cualquier peso nuevo en la primera vista, deja el criterio de término de la épica sin cumplir. AUD-09-019 sigue abierto.
- **Indexación.** Google rastreó la portada por última vez el 2 de octubre, antes de 05-03, 05-04 y 05-05.
- **05-06 depende de un tercero:** el acceso al Perfil de Empresa y a Google Ads lo tiene el cliente. La campaña debe estar lista a fines de octubre.
- **`iteracion-05-06-perfil-y-ads.md`** dice «Depende de: 05-02 (terminada)», y 05-02 sigue «En revisión». Además tiene saltos de línea CRLF (Git avisa que los pasará a LF). No la toqué.
- **AUD-01-009 y AUD-01-010:** abiertos, trasladados a 05-06.
- **AUD-08-023** (aprobación del cliente de la Épica 03): sigue abierto.
- **Cambios ajenos en `git status`,** que no toqué: `AD src/assets/LogoGruasBurgos.svg`; y del desarrollador, `evidencia-05-02-fase-b.md` (completada) e `iteracion-05-06-perfil-y-ads.md` (nueva).
- **Servidores y Chrome:** no se abrió ninguno.

## Commit sugerido

`Épica 5 - Iteración 05-02: registra la fase B (Web Analytics se mantiene, RDA-013 aceptada, AUD-10-001 cerrado y Search Console) y da de alta la iteración 05-06`

(160 caracteres, contados con código.)
