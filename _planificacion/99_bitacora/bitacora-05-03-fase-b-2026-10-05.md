# Bitácora 05-03 · Pie de página y hero menos oscuro (fase B)

- **Fecha:** 2026-10-05
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `iteracion/05-03-pie-y-hero`
- **Estado final:** En revisión

## Resumen

Se registra la fase B de 05-03 con la evidencia del desarrollador ([`evidencia-05-03-fase-b.md`](../10_epicas/epica-05-publicacion-medicion/evidencia-05-03-fase-b.md)) sobre la vista previa de Cloudflare del commit `d276229`. No se cambió código.

La evidencia es coherente con el código de la rama y con las mediciones de la fase A, y cubre los tres criterios de la fase B, que quedan marcados: nivel 2 del hero confirmado, pie conforme en Chrome de escritorio a cinco anchos y teléfono conforme. Quedan sin verificar Safari en iPhone y el lector de pantalla.

Sin hallazgos nuevos. Se dejan dos observaciones y un aviso sobre la carpeta de trabajo local: el borrador del mapa ya no está en el commit, pero sigue en el disco sin seguimiento de Git.

La iteración sigue «En revisión»: la marca «Terminada» el desarrollador.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `…/epica-05-publicacion-medicion/iteracion-05-03-pie-y-hero.md` | Estado con enlace a esta bitácora. Las tres casillas de la fase B marcadas con su resultado. Nota de lo no verificado. |
| `_planificacion/00_producto/registro-log.md` | Fila de 05-03, «Iteración activa», «Próximo hito» y una línea del historial. |
| `_planificacion/99_bitacora/bitacora-05-03-fase-b-2026-10-05.md` | Nueva. |

Ningún archivo eliminado ni renombrado. No se tocaron `src/`, `DESIGN.md`, `decisiones.md`, `auditoria-tecnica.md`, el archivo de evidencia, las bitácoras anteriores ni los archivos protegidos. `evidencia-05-03-fase-b.md` aparece como archivo nuevo en `git status`: lo escribió el desarrollador.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos.
- `pnpm build`: OK. Código 0, 2 páginas, sin avisos.
- Revisión móvil 360 px y escritorio: **no la hice en esta fase**. Es la del desarrollador, en la vista previa (tabla de abajo). No usé el navegador ni consulté direcciones públicas.
- Lighthouse: **no ejecutado** (05-01).
- Servidores: ninguno abierto (puerto 4321 libre, «No dev server is running.»).

### Commit probado y coherencia con el código

Todo lo de esta tabla lo comprobé yo, con Git y leyendo el repositorio.

| Comprobación | Resultado |
| :--- | :--- |
| Rama actual | `iteracion/05-03-pie-y-hero` |
| `git rev-parse --short HEAD` | `d276229`, el mismo que declara la evidencia |
| `git diff --stat f540020 HEAD` | Un solo archivo: `src/assets/mapa/mapa-cobertura.webp`, eliminado (792.922 B → 0) |
| Uso del borrador en `src/` | Ninguno (0 coincidencias de «mapa-cobertura»); tampoco aparece en `dist/` |
| `src/assets/mapa/` en el disco | **Sigue conteniendo `mapa-cobertura.webp`, sin seguimiento de Git** (`?? src/assets/mapa/`). No está en el commit ni en la vista previa. Ver «Pendientes y riesgos». |
| Fecha de la máquina | 2026-10-05 |

### Evidencia del desarrollador, punto por punto

La columna «Resultado» es lo que consta en la evidencia. La última columna la contrasta con lo que medí en la fase A o leí en el código.

| § | Punto | Resultado (evidencia) | Contraste |
| :--- | :--- | :--- | :--- |
| 1 | Vista previa en Cloudflare | Desplegada, commit `d276229`, sin errores. Dirección usada: la del despliegue (`225cc9a1…pages.dev`) | Coincide con `HEAD` |
| 1 | Cabeceras de la vista previa | `200 OK`, con `x-robots-tag: noindex` y las cabeceras de `_headers` | La hora de la respuesta (01:58 GMT del 6 de octubre) corresponde a las 22:58 del 2026-10-05 en Chile, acorde con la hora declarada (22:55) |
| 2 | Crédito centrado y sin vacío, a 768, 1024, 1280, 1536 y 1920 px | Sí, en los cinco | Coherente: 0 px de diferencia de centro y 15,8 a 16,4 px bajo el crédito |
| 2 | Botones flotantes ocultos al llegar al pie | Sí, en los cinco | Coherente: 0 px² en 35 casos |
| 2 | Reaparecen al subir | Sí, en los cinco | Coherente: reaparecen a 352 px del final |
| 2 | Algo del pie tapado | No, nada | Coherente |
| 2 | «© 2026 Grúas Burgos», razón social o RUT | No aparecen. «Todavía aparece el nombre de Yerko Burgos» | Coherente: 0 apariciones en `dist/`. Sobre el nombre, ver la observación 1 |
| 2 | Sin JavaScript, a 1280 px, al final | Crédito y redes sin tapar | Coherente: 0 px² con la página al final. Probado en un ancho; el criterio de la fase B no pide más |
| 3 | Tab desde arriba hasta el pie | Ningún elemento enfocado tapado | Coherente: 0 cubiertos en 28 recorridos |
| 3 | Mayús + Tab una vez | El foco llega a un botón flotante, visible y con contorno claro | Coherente con el recorrido de la fase A |
| 3 | Foco en el botón flotante y página al final | «Las redes sociales quedan visibles de buena forma» | No contradice: medí un solape parcial (248 px² a 1280 px; 1.961 px² a 768 px; 0 a 1920 px), ya aceptado. La evidencia no indica el ancho |
| 4 | Foto más clara que en producción | Sí, se nota | Coherente: +32,4 % y +34,3 % de luminancia |
| 4 | Lectura del texto del hero | Se lee perfectamente | Coherente: mínimo 4,86:1 |
| 4 | Nivel del hero | **Confirma el nivel 2** | Es el aplicado |
| 5 | Teléfono | Samsung Galaxy A52+. No indica sistema ni navegador | En el cierre de la Épica 04 constaba Android 16 |
| 5 | Primera pantalla con la barra de direcciones a la vista | Etiqueta, título y dos botones completos | Coherente con los 17 px medidos a 360 × 640 px |
| 5 | Barra inferior | Se ve y funciona igual que antes | Coherente: no se modificó |
| 5 | Crédito al final | Completo, sobre la barra y sin nada encima | Coherente: 16,6 a 17,5 px sobre la barra |
| 5 | Botón flotante extra | Ninguno | Coherente: bajo 768 px el bloque no se muestra |
| 5 | Teléfono en horizontal, al final | Botones ocultos y pie completo | Coherente con el diseño desde 768 px |
| 6 | Firefox en el PC | Pie bien al final, sin botones encima; reaparecen al subir | Dato nuevo: en la fase A no medí Firefox |
| 6 | Safari en iPhone | **No verificado** | — |
| 7 | Narrador de Windows (opcional) | **No verificado** | En la fase A, el árbol de accesibilidad de Chrome mostró los botones ocultos como ignorados; no reemplaza la prueba con un lector |
| 8 | Observaciones adicionales | Ninguna | — |
| 9 | Veredicto del desarrollador | Aprueba la iteración para el Pull Request y el merge | — |

Todas las secciones están respondidas. Ninguna respuesta contradice las mediciones de la fase A.

### No verificado

- Safari en iPhone.
- Lector de pantalla (Narrador de Windows; tampoco TalkBack ni VoiceOver).
- La evidencia no indica el sistema ni el navegador del teléfono, ni a qué ancho se hizo la prueba del foco en el botón flotante.

### Observaciones

No son defectos de esta iteración.

1. **El nombre «Yerko Burgos» sigue publicado.** Es lo esperado. Está en `TarjetaDespacho.astro` («Te atiende Yerko Burgos, a cualquier hora.») y en `QuienesSomos.astro` («Lo dirige Yerko Burgos…»), y 05-03 no cambia esos textos. Los retira 05-04: su «Contenido aprobado» reemplaza la frase de la tarjeta por «Atendido por sus propios dueños, a cualquier hora.» y quita la mención de «Quiénes somos». Las reseñas se mantienen textuales (RDA-007), aunque una nombra a «Yerko». Comprobado leyendo el código y `iteracion-05-04-contenido-y-estructura.md`.
2. **Corrección a la bitácora de cierre sobre el hero a 768 px.** La [bitácora de cierre](bitacora-05-03-cierre-2026-10-05.md) dice que a 768 px el aumento relativo de luminancia del nivel 2 es mayor que a 360 y 1280 px (+39,58 %). Eso vale solo para la ventana de 768 × 1024 px, que fue la única que medí. La luminancia a ese ancho depende del alto de la ventana: según la medición del auditor, el aclarado es de **+39 %** a 768 × 1024 px y de **+16 %** a 768 × 800 px. La cifra de +16 % es del auditor; yo no la medí. Mi error fue generalizar a «768 px» un resultado de un solo alto. No cambia el nivel elegido.

## Criterios de aceptación

Fase B, según la evidencia del desarrollador:

- [x] El desarrollador elige el nivel del hero: **nivel 2 confirmado**, en escritorio y en el teléfono (evidencia §4).
- [x] Chrome real de escritorio: **cumple** a 768, 1024, 1280, 1536 y 1920 px; sin JavaScript a 1280 px, sin tapar al final; teclado sin elementos cubiertos; con foco en el botón flotante, las redes quedan visibles (evidencia §2 y §3). Además, Firefox sin problemas (§6).
- [x] Teléfono (Samsung Galaxy A52+): **cumple**: barra inferior sin cambios, hero con la barra de direcciones a la vista, crédito completo al final, ningún botón flotante extra y, en horizontal, botones ocultos y pie completo (evidencia §5).

De esta tanda:

- [x] El commit de la evidencia coincide con la punta de la rama, y desde `f540020` solo cambió la eliminación del borrador del mapa.
- [x] `pnpm format:check`, `pnpm check` y `pnpm build` limpios.
- [ ] `git status` sin nada en `src/`. **Parcial:** no hay cambios míos en `src/`, pero `git status` muestra `?? src/assets/mapa/` (el borrador, sin seguimiento) y `AD src/assets/LogoGruasBurgos.svg`, anterior a la iteración.

## Decisiones tomadas

Ninguna requiere RDA.

1. **El borrador del mapa en el disco no se trató como motivo para detenerse.** El encargo pedía comprobar que la carpeta ya no lo contuviera. El commit probado no lo tiene y nada lo usa, así que la evidencia sigue correspondiendo al código. Se informa y no se toca.
2. **La casilla del teléfono se marca aunque la evidencia no nombra el navegador.** El criterio dice «Android, Chrome»; la evidencia dice que las pruebas se hicieron con Google Chrome y nombra el equipo.
3. **Sin mediciones propias en esta fase.** El encargo era contrastar y registrar. La cifra de 768 × 800 px queda atribuida al auditor.

## Pendientes y riesgos

- **Borrador del mapa en la carpeta local.** `src/assets/mapa/mapa-cobertura.webp` salió del commit, pero el archivo sigue en el disco sin seguimiento. No afecta la compilación ni la vista previa. Riesgo: que entre por accidente en un commit posterior (`git add .`). Lo resuelve el desarrollador: moverlo fuera del repositorio o dejarlo hasta 05-05.
- **No verificado:** Safari en iPhone y lector de pantalla.
- **Hero en anchos intermedios.** El aclarado es menor a 600 px (+18,0 %) y, según el auditor, a 768 × 800 px (+16 %). Es una observación; el contraste a esos anchos está medido y cumple.
- **Margen de JavaScript:** siguen quedando 64 B (960 B de 1.024 B) para 05-02.
- **Estado previo.** `git status` sigue mostrando `AD src/assets/LogoGruasBurgos.svg`.
- **Tareas del desarrollador:** commit, push, Pull Request, merge y marcar la iteración «Terminada».

## Commit sugerido

`Épica 5 - Iteración 05-03: registra la fase B con la evidencia del desarrollador sobre la vista previa (pie, teclado, Firefox, teléfono y nivel 2 del hero confirmado); sigue en revisión`

(185 caracteres, contados con código.)
