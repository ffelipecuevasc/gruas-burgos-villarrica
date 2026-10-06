# Bitácora 05-05 · Mapa de cobertura con imagen real: fase B

- **Fecha:** 2026-10-06
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `iteracion/05-05-mapa-cobertura`
- **Estado final:** En revisión

## Resumen

Se registró la fase B con la evidencia del desarrollador ([`evidencia-05-05-fase-b.md`](../10_epicas/epica-05-publicacion-medicion/evidencia-05-05-fase-b.md)) sobre la vista previa del commit `59d9753`. No se implementó nada ni se cambió código.

Todo lo revisado está conforme: el mapa nuevo se ve completo en el teléfono y en escritorio, la atribución es visible, la vista previa responde `200 OK` con `x-robots-tag: noindex`, y el desarrollador confirma por escrito el origen y la licencia del mapa base. Las tres casillas de la fase B quedan marcadas.

El veredicto del desarrollador es «Sí», para el Pull Request y el merge. No equivale a «Terminada»: la iteración sigue «En revisión» y la marca él.

Nada de la evidencia contradice las mediciones de la fase A ni exige cambiar código.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `…/epica-05-publicacion-medicion/iteracion-05-05-mapa-cobertura.md` | Línea «Estado» y las tres casillas de la fase B, con su resultado. |
| `_planificacion/00_producto/registro-log.md` | Fila de 05-05, «Iteración activa», «Próximo hito» y una línea del historial. |
| `_planificacion/99_bitacora/bitacora-05-05-fase-b-2026-10-06.md` | Nueva. |

No se tocaron `src/`, `DESIGN.md`, `decisiones.md`, `auditoria-tecnica.md`, `definicion-epica-05.md`, las bitácoras anteriores, el archivo de evidencia ni los archivos protegidos.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos.
- `pnpm build`: OK. Código 0, 2 páginas, 0 líneas con «warn» o «error».
- Revisión móvil 360 px y escritorio: **no repetida.** No cambió el código, así que valen las mediciones de la fase A ([bitacora-05-05-2026-10-06](bitacora-05-05-2026-10-06.md)). No se abrió navegador ni servidor.
- Lighthouse: **no ejecutado** (05-01).

### Commit revisado

El commit desplegado en la vista previa es `59d9753896e9b11084e3ec2d6eee79a94593a829`. El último de la rama es `0053270`, que solo agrega el archivo de evidencia completado: `git diff --stat 59d9753 HEAD` muestra ese único archivo. El código revisado por el desarrollador es el de la rama.

### Evidencia del desarrollador

Todo lo de esta tabla consta en la evidencia; no lo medí yo. La última columna lo contrasta con las mediciones locales de la fase A.

| § | Punto | Resultado (evidencia) | Contraste |
| :--- | :--- | :--- | :--- |
| — | Fecha, commit y equipos | 2026-10-06, cerca de las 17:00; commit `59d9753896e9b11084e3ec2d6eee79a94593a829`; teléfono y PC de escritorio, con Chrome | El commit es el de la fase A |
| 1 | Vista previa en Cloudflare | Estado **Success**, mismo commit. Compilación correcta. Dirección usada: la del despliegue | Coherente |
| 1 | Variantes del mapa | **12**: 6 en AVIF y 6 en WebP | Coherente: 12 en local |
| 1 | Aviso de la compilación | `npm warn EBADENGINE` de `corepack` con Node.js `24.13.1`. No impidió la instalación ni la compilación | El mismo aviso de la fase B de 05-04; es del entorno de Cloudflare |
| 1 | Cabeceras con `curl.exe -sI`, contra la dirección del despliegue | **`200 OK`**, con **`x-robots-tag: noindex`**, `cache-control: public, max-age=0, must-revalidate`, `content-security-policy: frame-ancestors 'none'`, `x-frame-options: DENY`, `x-content-type-options: nosniff`, `referrer-policy` y `permissions-policy` | **Verificado** |
| 2 | Mapa en el teléfono (Chrome) | Aparece el mapa nuevo; completo, sin cortes y sin deformarse; el círculo queda centrado en Villarrica, a juicio del desarrollador; nada salta al cargar; sin desplazamiento lateral; la lista sigue con las cinco localidades; en horizontal se ve bien | Coherente: relación 1,0000, 0 de CLS y 0 px de desborde |
| 2 | Nombres del mapa en el teléfono | «Sí, se visualiza correctamente» | Ver la nota sobre los rótulos |
| 3 | Mapa en escritorio (Chrome, ventana completa) | A la derecha de la lista; completo, sin cortes y sin deformarse; centrado en Villarrica, a juicio del desarrollador; nítido | Coherente |
| 3 | Tamaño de 576 px, centrado en su marco | **«Se deja así»** | Decisión del desarrollador |
| 3 | Mapa y atribución bajo el menú | Caben completos, sin desplazarse | Coherente: 612 px (el tamaño de la ventana no consta) |
| 3 | A 768 px de ancho | Bajo la lista, centrado y completo | Coherente: 576 × 576 px |
| 4 | Atribución | «© colaboradores de OpenStreetMap» se lee bajo el mapa en el teléfono y en escritorio, con comodidad; ni la barra inferior ni los botones flotantes la tapan | Coherente: 13 px, 11,34:1 y 0 % cubierto |
| 5 | Origen del mapa base | Datos y teselas de OpenStreetMap. **Sin Google Maps** (ni captura, ni fondo, ni calco) | No lo puedo contrastar |
| 5 | Licencia | ODbL para los datos y CC BY-SA para las teselas estándar, «según corresponda a la fuente utilizada» | No lo puedo contrastar |
| 5 | ¿La atribución cumple la licencia? | «Sí, como atribución visible de los colaboradores de OpenStreetMap». Aclara que la comprobación jurídica exhaustiva no forma parte de las pruebas visuales de esta fase | — |
| 5 | Atribución sin enlace | **Aceptada** para esta iteración. Agregar el enlace sería un cambio nuevo, fuera de alcance | Decisión del desarrollador |
| 6 | Firefox en el PC | «Sí, verificado» | Ver la nota sobre Firefox |
| 6 | Safari en iPhone | **No verificado** (no hay equipo) | — |
| 7 | Observaciones | Sin problemas visuales ni funcionales en teléfono y PC con Chrome. Despliegue correcto | — |
| 8 | Veredicto | **«Sí»**, para Pull Request y merge | No equivale a «Terminada» |

De la salida del `curl` copié solo las cabeceras útiles; omití `Report-To`, `Nel` y `CF-RAY`.

**Firefox: verificado, con una inconsistencia en la evidencia.** La §6 dice «Sí, verificado». La §7 dice «No se realizaron pruebas en Firefox ni Safari/iPhone», y la §8 deja «como no verificadas las pruebas en otros navegadores». Lo registro como **verificado según la §6**, por indicación del desarrollador; es una interpretación, no un dato sin ambigüedad. Si valen la §7 y la §8, Firefox queda sin verificar.

**Rótulos del mapa en el teléfono.** La evidencia dice que los nombres se visualizan correctamente. En la fase A estimé el rótulo «Villarrica» en negrita en unos 6,8 px de alto a 360 px, y los del mapa base en unos 4 px, y lo anoté como riesgo de legibilidad. No se contradicen: lo mío es un tamaño deducido y lo del desarrollador, su juicio en un teléfono real, que es el que vale. La evidencia no indica el modelo ni el ancho de pantalla del teléfono.

**Centro del círculo.** En la fase A medí que el centro del círculo queda algo al noreste de la ciudad. El desarrollador lo considera centrado en Villarrica, en el teléfono y en escritorio. La imagen ya estaba aprobada tal como está.

### Decisiones del desarrollador en la fase B

1. **Tamaño del mapa en escritorio:** se deja en 576 px, centrado dentro de su marco.
2. **Atribución sin enlace** a la página de copyright de OpenStreetMap: aceptada para esta iteración.

### No verificado

- **Safari en iPhone:** no hay equipo.
- **Fecha en que se obtuvo el mapa base:** «no verificada en esta evidencia».
- **Herramienta con que se dibujaron el círculo rojo y los rótulos en negrita:** «no verificada en esta evidencia». Tampoco consta quién los dibujó.
- **Enlace de atribución:** no existe; aceptado así. La comprobación jurídica de la licencia queda fuera de esta fase, según la propia evidencia.
- **Firefox**, si valen la §7 y la §8 de la evidencia y no la §6 (ver la nota).
- **Lector de pantalla:** la evidencia no lo cubre.
- **Lighthouse y LCP:** 05-01.

## Criterios de aceptación

Fase B, según la evidencia del desarrollador:

- [x] Mapa revisado en el teléfono real y en escritorio: completo, centrado en Villarrica a juicio del desarrollador y con la atribución visible.
- [x] Confirmación escrita de la fuente y la licencia del mapa base: OpenStreetMap, sin Google Maps; ODbL y CC BY-SA; atribución considerada suficiente. La fecha de obtención y la herramienta del círculo quedaron **no verificadas**.
- [x] `curl.exe -sI`: **`200 OK`** y **`x-robots-tag: noindex`**.
- [ ] Safari en iPhone. **No verificado.**

## Decisiones tomadas

Ninguna requiere RDA.

1. **Firefox registrado como verificado**, según la §6 y por indicación del desarrollador, dejando escrita la inconsistencia con la §7 y la §8.
2. **La casilla de la licencia se marca con su salvedad** (fecha y herramienta no verificadas), en vez de dejarla sin marcar: la confirmación escrita que pedía el criterio existe.
3. **No repetí las mediciones de la fase A:** el código no cambió desde `59d9753`.

## Pendientes y riesgos

- **Tareas del desarrollador:** commit y push de este registro; marcar la iteración «Terminada» (archivo de la iteración y fila del registro); Pull Request y merge.
- **Licencia del mapa base:** quedan sin constar la fecha de obtención y la herramienta de edición, y la atribución no lleva enlace. Riesgo aceptado por el desarrollador para esta iteración.
- **No verificado:** Safari en iPhone y lector de pantalla. Firefox, sujeto a la inconsistencia de la evidencia.
- **AUD-08-023** (aprobación del cliente): sigue abierto; se registra en 05-01.
- **LCP y Lighthouse:** no medidos (05-01).
- **Margen de JavaScript:** siguen quedando 64 B (960 B de 1.024 B) para 05-02.
- **Cambios ajenos en `git status`,** que no toqué: `AD src/assets/LogoGruasBurgos.svg`, anterior a la épica.
- **Servidores y Chrome.** No se abrió ninguno.

## Commit sugerido

`Épica 5 - Iteración 05-05: registra la fase B del mapa de cobertura con la evidencia del desarrollador sobre la vista previa`

(124 caracteres, contados con código.)
