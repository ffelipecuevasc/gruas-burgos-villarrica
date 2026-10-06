# Bitácora 05-04 · Cambios del cliente: contenido y estructura de la página (fase B)

- **Fecha:** 2026-10-06
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `iteracion/05-04-cambios-cliente`
- **Estado final:** En revisión

## Resumen

Se registra la fase B de 05-04 con la evidencia del desarrollador ([`evidencia-05-04-fase-b.md`](../10_epicas/epica-05-publicacion-medicion/evidencia-05-04-fase-b.md)) sobre la vista previa de Cloudflare del commit `2200f9f`. No se cambió código.

La evidencia corresponde al código de la rama y no contradice las mediciones de la fase A. Cubre la revisión del desarrollador y los validadores del JSON-LD, que quedan marcados. El cliente **aprueba** y pide cuatro ajustes; el desarrollador pide uno más y **no aprueba el merge** hasta que se apliquen. Por eso la casilla del cliente queda sin marcar: los ajustes están registrados, pero no aplicados.

Ningún ajuste se implementó: los cinco necesitan textos, íconos o decisiones que no están aprobados, y dos chocan con RDA-009 y con `DESIGN.md`. Quedan como «Ajustes pendientes».

Quedan sin verificar: la cabecera `x-robots-tag: noindex` con `curl.exe` (la respuesta pegada es un 404 de otra dirección), las dos líneas de alcance de «Dónde atendemos» (respuesta en blanco) y Safari en iPhone.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `…/epica-05-publicacion-medicion/iteracion-05-04-contenido-y-estructura.md` | Estado con enlace a esta bitácora. Dos de las tres casillas de la fase B marcadas con su resultado; la del cliente, sin marcar, con su nota. Lista de lo no verificado. |
| `_planificacion/00_producto/registro-log.md` | Fila de 05-04, «Iteración activa», «Próximo hito» y una línea del historial. |
| `_planificacion/99_bitacora/bitacora-05-04-fase-b-2026-10-06.md` | Nueva. |

Ningún archivo eliminado ni renombrado. No se tocaron `src/`, `DESIGN.md`, `decisiones.md`, `auditoria-tecnica.md`, el archivo de evidencia, las bitácoras anteriores ni los archivos protegidos. `evidencia-05-04-fase-b.md` aparece como modificado en `git status`: lo completó el desarrollador.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos.
- `pnpm build`: OK. Código 0, 2 páginas, 0 líneas con «warn» o «error».
- Revisión móvil 360 px y escritorio: **no la hice en esta fase**. Es la del desarrollador, en la vista previa (tabla de abajo). No usé el navegador ni consulté direcciones públicas.
- Lighthouse: **no ejecutado** (05-01).
- Servidores: ninguno abierto («No dev server is running.»).

### Commit probado y coherencia con el código

Todo lo de esta tabla lo comprobé yo, con Git y leyendo el repositorio.

| Comprobación | Resultado |
| :--- | :--- |
| Rama actual | `iteracion/05-04-cambios-cliente` |
| `git rev-parse --short HEAD` | `2200f9f`, el mismo que declara la evidencia (`2200f9f2…`) |
| `git diff --stat 2200f9f HEAD` | Vacío: no hay commits después de la fase A |
| Cambios sin confirmar en `src/` | Ninguno mío. Sigue `AD src/assets/LogoGruasBurgos.svg`, anterior a la épica |
| `src/assets/mapa/` | Sin archivos rastreados por Git (`git ls-files` vacío). Contiene `mapa-cobertura.webp` sin seguimiento: es el mapa de 05-05, esperado; no lo toqué |
| Uso del mapa en `src/` y en `dist/` | Ninguno (0 coincidencias de «mapa-cobertura») |
| Fecha de la máquina | 2026-10-06 |

### Evidencia del desarrollador, punto por punto

La columna «Resultado» es lo que consta en la evidencia. La última columna la contrasta con lo que medí en la fase A o leí en el código.

| § | Punto | Resultado (evidencia) | Contraste |
| :--- | :--- | :--- | :--- |
| — | Equipos | Laptop con Google Chrome; en §6, Samsung Galaxy A52+ con Android 16 y Chrome | El encabezado nombra solo el laptop; el teléfono consta en §6 |
| 1 | Vista previa en Cloudflare | «Success», commit `2200f9f`. Dirección usada: la del despliegue (`3e43c006…pages.dev`) | Coincide con `HEAD` |
| 1 | Compilación en Cloudflare | Correcta, 2 páginas. Un aviso `npm warn EBADENGINE` de `corepack` con Node.js 24.13.1, que no impidió nada | Coherente: 2 páginas en local. El aviso es del entorno de Cloudflare, no de la compilación de Astro; en local no aparece. Ver la observación 5 |
| 1 | Cabeceras con `curl.exe` | **404 Not Found**, sin `x-robots-tag`. La consulta se hizo a la dirección de la rama (`iteracion-05-04-cambios-cliente…pages.dev`), no a la del despliegue | **No verificado.** La respuesta no es de la vista previa probada. El `noindex` consta solo de forma indirecta (§7: Google lo informa sobre la dirección del despliegue). Ver la observación 4 |
| 2 | Orden de las secciones, teléfono y escritorio | Sí, en ambos | Coherente con el orden medido en el DOM |
| 2 | Tres anclas (Inicio, Servicios y Contacto), teléfono y escritorio | Sí, las seis; nada falló | Coherente: 15 de 15 clics con el título visible |
| 3 | Ocho botones de WhatsApp en el teléfono | Sí en los ocho, sin observaciones | Los ocho mensajes esperados de la evidencia son iguales a los de `servicios.js` (comparados uno a uno; la evidencia no muestra el espacio final). Dato nuevo: en la fase A probé el enlace, no la apertura de WhatsApp |
| 3 | Característica de «Traslado en grúa cama» | Dice «Autos, SUV, camionetas, furgones y camiones de tres cuartos», como segunda característica | Coherente con el código, donde es la segunda. La iteración y la bitácora de la fase A la llaman «tercera»: es un error de redacción de esos documentos, no del sitio |
| 3 | Bloque «¿Necesitas un traslado a otra ciudad?» | No aparece | Coherente: 0 apariciones en `dist/` |
| 3 | Tarjetas nuevas ordenadas, sin espacios vacíos | Sí, en teléfono y escritorio | Coherente: 0 huecos |
| 3 | Títulos o descripciones cortados | Ninguno | Coherente: sin desborde |
| 3 | Observación del desarrollador | Las ocho tarjetas deben tener el mismo diseño que las tres primeras: ícono en un cuadro, línea separadora y tres características, con «Disponible 24/7» en todas | No es un defecto respecto de lo especificado (la iteración pedía tarjetas compactas). Es un ajuste nuevo: ver «Ajustes pendientes», punto 5 |
| 4 | Franja en el teléfono | Título, dos párrafos y la foto debajo | Coherente: apilada, 320 × 180 px a 360 px |
| 4 | Franja en escritorio | Foto a la derecha, pequeña; poco alto | Coherente: 324 px desde 1024 px |
| 4 | Nombres propios en la franja o en la tarjeta del hero | No aparecen | Coherente: «Yerko Burgos», 0 apariciones |
| 4 | Foto 07 en el teléfono | **Se deja apilada**: «se ve bien» | Decisión tomada; coincide con lo implementado |
| 4 | Galería: ocho fotos sin celdas vacías | Sí, en teléfono y escritorio | Coherente: 0 celdas vacías |
| 4 | Recorte de la última foto (foto 02) | Se ve bien | Encuadre aceptado |
| 4 | Foto 07 solo en «Quiénes somos» | Sí | Coherente: 0 fotos repetidas |
| 5 | Bloque «Medios de pago» visible | Sí | Coherente |
| 5 | Dos líneas de alcance en «Dónde atendemos» | **Sin respuesta** | **No verificado** en la vista previa. En local sí están: 1 aparición de cada una en `dist/index.html` (comprobado en esta tanda) |
| 5 | Lista con las cinco localidades en orden | Sí | Coherente |
| 5 | Fila de Coñaripe, solo el nombre y alineada | Sí | Coherente: 53 px y x = 37 px |
| 5 | Hero y pie nombran a Coñaripe | Sí | Coherente |
| 5 | Mapa esquemático con cuatro localidades hasta 05-05 | Aceptado para esta vista previa | Ver la observación 1 |
| 6 | Primera pantalla del teléfono, con la barra de direcciones | Etiqueta, título y dos botones completos | Coherente con los 17 px medidos a 360 × 640 px |
| 6 | Párrafo del hero con cinco localidades | Se lee completo | Coherente: cuatro líneas, sin crecer |
| 7 | Validador de Schema.org | **0 errores y 0 advertencias**. `areaServed` con las cinco localidades y La Araucanía; `paymentAccepted` con los cuatro medios; sin `priceRange`, `legalName` ni RUT | Coherente con el JSON-LD de `dist/`. La evidencia nombra el tipo como `EmergencyService` / `AutomotiveBusiness`; no lo contrasté en esta tanda |
| 7 | Prueba de resultados enriquecidos de Google | 1 elemento válido de «Empresas locales» y 1 de «Organización». Avisos no críticos: falta `priceRange` y `postalCode`, ambos opcionales. Informa además que la dirección no es indexable por `X-Robots-Tag: noindex` | **Sin errores críticos.** `priceRange` no se publica por decisión (iteración, «JSON-LD»). El aviso de `noindex` es lo esperado en una vista previa |
| 8 | Firefox en el PC | Servicios, franja, galería y Contacto se ven igual que en Chrome | Dato nuevo: en la fase A no medí Firefox |
| 8 | Safari en iPhone | **No verificado** | — |
| 9 | Cliente | Vista previa enviada y respondida el 2026-10-06. **Aprueba.** Pide cuatro ajustes. Confirmó el texto de los servicios nuevos, los medios de pago y la cobertura | Ver «Respuesta del cliente» |
| 10 | Observaciones adicionales | Ninguna más | — |
| 11 | Veredicto del desarrollador | **No aprueba** todavía el Pull Request ni el merge: primero hay que modificar lo observado | Ver «Ajustes pendientes» |

Ninguna respuesta contradice el código ni las mediciones de la fase A.

### No verificado

- **`x-robots-tag: noindex` con `curl.exe`.** La salida pegada es un 404 de la dirección de la rama y no trae esa cabecera. El `noindex` de la dirección del despliegue consta solo por el aviso de Google.
- **Las dos líneas de alcance** («Grúas en toda La Araucanía.» y «Traslado de vehículos a todo Chile.») en la vista previa: la respuesta quedó en blanco.
- **Safari en iPhone.**
- **Lector de pantalla:** la plantilla no lo pedía y nadie lo probó.
- La evidencia no indica en qué equipo se probó cada punto de escritorio, ni el ancho de la ventana.

### Respuesta del cliente

- **Fecha de envío y de respuesta:** 2026-10-06.
- **Resultado:** aprueba. Confirmó el texto de los servicios nuevos, los medios de pago y la cobertura.
- **Ajustes pedidos:** cuatro (puntos 1 a 4 de la lista siguiente).
- **AUD-08-023 no se cierra aquí.** Esta respuesta queda como evidencia para 05-01, donde se registra.

La evidencia anota el resultado como «Aprueba» y, a la vez, lista ajustes. Lo registro así: aprobación del contenido, con ajustes pedidos que el desarrollador exige aplicar antes del merge.

### Ajustes pendientes

No se implementó ninguno. Los puntos 1 a 4 los pidió el cliente; el 5, el desarrollador. La columna «Qué falta» es mi lectura del código y de los documentos, no una medición.

| N.º | Ajuste | Qué falta para poder hacerlo |
| :--- | :--- | :--- |
| 1 | Banderas de Chile y de Argentina, como SVG, en el extremo de la barra de navegación opuesto a los enlaces | Íconos nuevos (`DESIGN.md` §6) y cambio del header (§5). Texto alternativo por aprobar. Medir el ancho del header a 320 y 360 px |
| 2 | Enlaces en el menú a «Quiénes somos», «Trabajos en terreno» y «Lo que dicen nuestros clientes» | **Choca con RDA-009** (tres secciones ancladas) y con la regla 7 de la iteración (esos bloques van sin ancla propia). Requiere actualizar la RDA y `DESIGN.md` §5. Con seis enlaces hay que medir el menú en móvil y los objetivos táctiles |
| 3 | Opiniones: mostrar todas, sin el botón «Ver 4 opiniones más», y agregar el logotipo de Google como SVG | Cambia el acordeón de `DESIGN.md` §5 y RDA-007. La página crece en el teléfono (sin medir). El logotipo de Google es una marca de un tercero: conviene revisar sus condiciones de uso antes de publicarlo. Iría como SVG local (sin recursos de terceros) |
| 4 | Tarjeta «Medios de pago» más llamativa, con un ícono SVG por medio de pago | Cuatro íconos nuevos (`DESIGN.md` §6) y diseño de la tarjeta (§5). Si los íconos son marcas de tarjetas, misma revisión que en el punto 3 |
| 5 | Las ocho tarjetas de servicios con el mismo diseño: ícono en un cuadro, línea separadora y tres características, con «Disponible 24/7» en todas | Cinco íconos nuevos (`DESIGN.md` §6). **Textos sin aprobar:** dos o tres características por cada servicio nuevo (entre 10 y 15), y la confirmación del cliente de «Disponible 24/7» para cada servicio (hoy «Rescate 4x4» no la lleva, y habría que confirmarla para el envío a todo Chile y a Argentina). Cambia los límites de alto de la tarea 2: con ocho tarjetas completas la sección superaría los 3.600 px a 360 px (estimación con los altos medidos en la fase A, unos 4.200 px; sin medir) |

Los cinco necesitan decisiones del desarrollador antes de empezar: textos aprobados, autorización para editar `DESIGN.md` §5 y §6, la actualización de RDA-009 y, quizá, de RDA-007, y definir si los puntos 1 a 4 entran en el alcance contratado o se cotizan aparte. El JavaScript de cliente tiene 64 B de margen; ninguno de los cinco debería necesitarlo (deducido).

### Observaciones

No son defectos de esta iteración.

1. **Mapa con cuatro localidades y lista con cinco.** Hasta 05-05, el mapa esquemático dibuja Villarrica, Pucón, Licán Ray y Freire, y la lista de texto incluye además a Coñaripe. Es transitorio; el texto alternativo del mapa nombra solo lo que dibuja. El desarrollador lo aceptó para esta vista previa (evidencia §5).
2. **Bajada de Servicios y «Nuestro equipamiento».** Siguen nombrando solo «autos, SUV y camionetas». Se dejan como están, por decisión del desarrollador.
3. **Tarjetas nuevas sin ícono.** Era una limitación de `DESIGN.md` §6, anotada como ajuste visual opcional. Dejó de ser opcional: el desarrollador lo pide (ajuste 5).
4. **Dirección de la rama con 404.** La dirección sugerida en la plantilla (`iteracion-05-04-cambios-cliente…pages.dev`) respondió 404; la del despliegue funcionó. Puede que Cloudflare use otro nombre para esa rama (no lo verifiqué: no consulto direcciones públicas). Conviene repetir `curl.exe -sI` contra la dirección del despliegue o la que muestre el panel.
5. **Aviso `EBADENGINE` de `corepack` en Cloudflare.** No impidió la compilación. El proyecto no usa Corepack (`AGENTS.md` §3); el aviso viene del entorno de compilación. Se anota por si conviene revisarlo en 05-01.
6. **Observaciones visuales del desarrollador,** tal como constan: la foto 07 apilada en el teléfono «se ve bien» y se deja así; el recorte de la última foto de la galería (foto 02) «se ve bien»; en escritorio la foto de la franja queda a la derecha y pequeña.
7. **«Segunda» o «tercera» característica.** La iteración y la bitácora de la fase A dicen que cambió la «tercera» característica de «Traslado en grúa cama»; en el código y en la página es la segunda. El texto publicado es el aprobado. Error mío de redacción en la fase A; la bitácora anterior no se edita.

## Criterios de aceptación

Fase B, según la evidencia del desarrollador:

- [x] El desarrollador revisa en el teléfono real y en escritorio el orden, los servicios, la franja y los medios de pago: **revisado y conforme** en el orden, las anclas, los ocho botones de WhatsApp, la franja, la galería y los medios de pago (evidencia §2 a §6), con **una observación** (ajuste 5) y un punto en blanco (las dos líneas de alcance).
- [ ] El cliente revisa la vista previa y aprueba los cambios (AUD-08-023). Si pide ajustes, se registran y se aplican en una tanda corta. **Parcial: aprueba** (2026-10-06) y los cuatro ajustes están registrados, pero **no aplicados**.
- [x] JSON-LD sin errores en el validador de Schema.org y sin errores críticos en la Prueba de resultados enriquecidos: **0 errores y 0 advertencias** en Schema.org; **2 elementos válidos** y solo avisos de campos opcionales en Google (evidencia §7).

De esta tanda:

- [x] El commit de la evidencia coincide con la punta de la rama y no hay cambios en `src/` después de la fase A.
- [x] `pnpm format:check`, `pnpm check` y `pnpm build` limpios.
- [x] Mis cambios, solo en `_planificacion/`. `git status` muestra además cambios ajenos (ver «Pendientes y riesgos»).

## Decisiones tomadas

Ninguna requiere RDA.

1. **La casilla del cliente queda sin marcar.** El criterio incluye aplicar los ajustes, y no están aplicados. La aprobación consta en el texto de la casilla.
2. **La casilla del desarrollador se marca aunque su veredicto sea «no».** El criterio pide la revisión, y está hecha. Su veredicto y su observación quedan registrados y bloquean el merge, no la casilla.
3. **El 404 de `curl.exe` no se trató como contradicción con el código.** Es de otra dirección; el despliegue probado tiene el hash correcto. Se registra como no verificado.
4. **«Iteración activa» y «Próximo hito» no siguen el texto del encargo.** El encargo proponía «a la espera de que el desarrollador la marque Terminada» y «05-05, después del merge». Como el desarrollador no aprueba el merge, el registro dice que falta la tanda de ajustes.
5. **Sin mediciones propias en el navegador.** El encargo era contrastar y registrar. Solo comprobé en `dist/` las dos líneas de alcance, porque la evidencia las dejó en blanco.

## Pendientes y riesgos

- **Tanda de ajustes de 05-04** (cinco puntos). No puede empezar sin textos aprobados y sin las autorizaciones de la tabla. Los ajustes 2 y 3 cambian decisiones aceptadas (RDA-009 y RDA-007).
- **Alcance.** Los ajustes 1 a 4 no estaban en el pedido del 2026-10-04. El desarrollador decide si entran en lo contratado.
- **No verificado:** `noindex` con `curl.exe`, las dos líneas de alcance en la vista previa, Safari en iPhone y lector de pantalla.
- **AUD-08-023:** sigue abierto; esta evidencia sirve para 05-01.
- **05-05 depende de 05-04.** El mapa ya está en la carpeta local (`src/assets/mapa/mapa-cobertura.webp`, sin seguimiento). La iteración 05-05 lo nombra en otra ruta (`src/assets/mapa-cobertura.webp`): hay que aclararlo al empezarla.
- **Cambios ajenos en `git status`,** que no toqué: `iteracion-05-01-publicacion.md` e `iteracion-05-02-medicion.md` modificados; `src/assets/mapa/` sin seguimiento; `AD src/assets/LogoGruasBurgos.svg`, anterior a la épica.
- **Margen de JavaScript:** siguen quedando 64 B (960 B de 1.024 B) para 05-02.
- **Tareas del desarrollador:** definir los ajustes y sus textos; después, commit, push, Pull Request, merge y marcar la iteración «Terminada».

## Commit sugerido

`Épica 5 - Iteración 05-04: registra la fase B con la evidencia del desarrollador (vista previa, teléfono y JSON-LD válido); el cliente aprueba y quedan cinco ajustes pendientes; sigue en revisión`

(195 caracteres, contados con código.)
