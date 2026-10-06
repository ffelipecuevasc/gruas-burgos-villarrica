# Bitácora 05-04 · Cambios del cliente: fase B de la tanda de ajustes y tercera pasada

- **Fecha:** 2026-10-06
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `iteracion/05-04-cambios-cliente`
- **Estado final:** En revisión

## Resumen

Se hicieron dos cosas. Primero, se registró la fase B de la tanda de ajustes con la evidencia del desarrollador ([`evidencia-05-04-fase-b-ajustes.md`](../10_epicas/epica-05-publicacion-medicion/evidencia-05-04-fase-b-ajustes.md)) sobre la vista previa del commit `c1b0eea`: todo conforme, con el `noindex` ya verificado, y con un único cambio pedido.

Segundo, se implementó ese cambio, la tercera pasada: las banderas de Chile y Argentina pasan de esquinas redondeadas a esquinas rectas. Solo cambió la geometría de las esquinas en los dos SVG; la estrella, el Sol de Mayo, los colores, la proporción y el `viewBox` son los mismos, y no se tocó ningún componente.

De los 13 criterios de la tercera pasada, 12 se cumplen y uno queda parcial. V1 pedía 0 píxeles distintos fuera de las zonas de esquina y quedan 20 en la bandera de Chile y 40 en la de Argentina (medidos a 16×): son la cola del brillo original, que bajaba por el costado una unidad más allá de la zona, y que en una bandera de esquinas rectas no tiene lugar.

El veredicto del desarrollador en la evidencia es «Sí», condicionado a este cambio. No equivale a «Terminada»: la iteración sigue «En revisión» y la marca él. Las banderas con esquinas rectas no se han visto todavía en la vista previa.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/assets/banderas/chile.svg` | El atributo `d` de 5 de sus 6 trazados (franjas, cantón, contorno y brillo). La estrella no cambia. |
| `src/assets/banderas/argentina.svg` | El atributo `d` de 4 de sus 6 trazados (las dos franjas celestes, contorno y brillo). La franja blanca y el Sol de Mayo no cambian. |
| `DESIGN.md` | Solo la fila de las banderas de §6.2. §5 no menciona la forma de las esquinas y no se tocó. |
| `…/epica-05-publicacion-medicion/definicion-epica-05.md` | Solo el punto «Banderas» de la decisión 14: decía «sin modificar». |
| `…/epica-05-publicacion-medicion/iteracion-05-04-contenido-y-estructura.md` | Estado; casillas de la fase B de la tanda; sección nueva «Tercera pasada de la tanda», con V1 a V13. |
| `_planificacion/00_producto/registro-log.md` | Fila de 05-04, «Iteración activa», «Próximo hito» y una línea del historial. |
| `_planificacion/99_bitacora/bitacora-05-04-ajustes-fase-b-2026-10-06.md` | Nueva. |

Ningún archivo eliminado ni renombrado. No se tocaron `Header.astro`, `TarjetaServicio.astro` ni ningún otro archivo de `src/`, `google.svg`, el archivo de evidencia, `decisiones.md`, `auditoria-tecnica.md`, las bitácoras anteriores ni los archivos protegidos. Sin dependencias nuevas y sin JavaScript nuevo.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos (antes: 52).
- `pnpm build`: OK. Código 0, 2 páginas, 0 líneas con «warn» o «error». `dist/`: 115 archivos, 3.679.037 B (antes, 3.681.729 B).
- Revisión móvil 360 px y escritorio: Chrome 154.0.8037.98 sin interfaz (protocolo CDP) sobre `pnpm preview`, con el perfil único reutilizable de 04-04.
- Lighthouse: **no ejecutado** (05-01).

### Commit de partida

El encargo esperaba `c1b0eea` como último commit. La rama está en `58b78e6`, que es `c1b0eea` más el archivo de evidencia completado por el desarrollador (`git diff --stat c1b0eea HEAD`: un solo archivo, la evidencia). Consulté antes de seguir y el desarrollador confirmó trabajar sobre `58b78e6`. `src/` es idéntico al del commit desplegado.

### Fase B de la tanda: evidencia del desarrollador

Todo lo de esta tabla consta en la evidencia; no lo medí yo. La última columna lo contrasta con mis mediciones locales de la segunda pasada.

| § | Punto | Resultado (evidencia) | Contraste |
| :--- | :--- | :--- | :--- |
| — | Fecha, commit y equipos | 2026-10-06; commit `c1b0eeacdd002ba8855adaa45e16b4be853dd3b5`; PC con Windows 10 Pro y teléfono Android, con Google Chrome | El commit es el de la segunda pasada |
| 1 | Vista previa en Cloudflare | Estado **Success**, mismo commit. Compilación correcta, 2 páginas. Dirección usada: la del despliegue | Coherente: 2 páginas en local |
| 1 | Cabeceras con `curl.exe -sI`, contra la dirección del despliegue | **`200 OK`**, con **`x-robots-tag: noindex`**, `cache-control: public, max-age=0, must-revalidate`, `content-security-policy: frame-ancestors 'none'`, `x-frame-options: DENY`, `x-content-type-options: nosniff`, `referrer-policy` y `permissions-policy` | **Verificado.** Cierra lo que quedó sin verificar en la fase B anterior (allí la respuesta era un 404 de otra dirección) |
| 1 | Aviso de la compilación | `npm warn EBADENGINE` de `corepack@0.36.0`, que pide otra versión de Node que la instalada (v24.13.1). No impidió la instalación, la compilación ni el despliegue | El proyecto no usa Corepack; el aviso es del entorno de Cloudflare |
| 2 | Menú en el teléfono | Tres enlaces; los tres llevan a su sección con el título visible; el header mide lo mismo | Coherente: 3 enlaces bajo 768 px y header de 112 px |
| 3 | Menú en escritorio | Los seis enlaces llevan a su sección, a 768 px y con la ventana completa (12 de 12 respuestas «Sí»). Caben en una línea a 768 px; a 767 px quedan tres; el foco pasa por los seis con el contorno completo | Coherente: 44 de 44 clics y 0 px de desborde |
| 4 | Banderas del menú | Visibles en el teléfono (24 px) sin tapar ni empujar los enlaces; se reconocen y se distingue el Sol de Mayo; en escritorio, más grandes (32 px); a 768 px, bien espaciadas; el header no cambia | Coherente: 24 × 24 y 32 × 32 px; 16 px a 768 px |
| 5 | Opiniones | Las diez visibles en teléfono y escritorio; sin «Ver 4 opiniones más»; sigue «Ver más opiniones en Google»; logotipo debajo del título en el teléfono y en el extremo derecho en escritorio (768 px y ventana completa); se ve bien sobre el fondo oscuro | Coherente: 10 visibles; 0 px del borde derecho |
| 6 | Medios de pago | Bloque distinguible; cuatro medios con ícono y nombre; «Emitimos boletas y facturas.»; se distinguen débito y crédito; nada se corta en el teléfono | Coherente |
| 7 | Ocho tarjetas | Misma estructura; «Disponible 24/7» en las ocho; «Rescate 4x4» con sus tres características; íconos entendibles; cuatro y cuatro en escritorio; una bajo otra en el teléfono; WhatsApp abre con el mensaje | Coherente: 8 de 8 |
| 7.1 | Banderas en la tarjeta de envío | Visibles arriba a la derecha en teléfono y escritorio; la tarjeta mide lo mismo que su fila; ninguna otra las lleva | Coherente: mismos altos; 0 tarjetas más |
| 7.2 | Ícono del camión pluma | Se mantiene el actual | — |
| 8 | Primera pantalla del teléfono | Etiqueta, título y dos botones completos sobre la barra; las banderas no le quitan espacio ni atención | Coherente: 17 px |
| 9 | Firefox en el PC | «Sí, verificado» | Ver la nota sobre Firefox |
| 9 | Safari en iPhone | **No verificado** | — |
| 10 | Observaciones | Sin problemas adicionales. Compilación y despliegue correctos | — |
| 11 | Veredicto | **«Sí»**, para Pull Request y merge, **después** de la modificación de los SVG de las banderas | No equivale a «Terminada» |

De la salida del `curl` copié solo las cabeceras útiles; omití `Report-To`, `Nel` y `CF-RAY`.

**Firefox: verificado, con una inconsistencia en la evidencia.** La §9 dice «Sí, verificado» sobre el menú, las banderas, las opiniones, los medios de pago y las tarjetas en Firefox. La §10 dice que «no se realizó una prueba independiente en Firefox». Lo registro como **verificado según la §9**, por indicación del desarrollador; es una interpretación, no un dato sin ambigüedad. Si la §10 es la correcta, Firefox queda sin verificar para esta tanda.

### Decisiones del desarrollador en la fase B

1. **Banderas del menú:** se dejan en el tamaño y la posición actuales.
2. **Tarjeta de envío:** la ubicación de las banderas es correcta y se deja así.
3. **Logotipo de Google entre unos 520 y 767 px:** queda al lado del título. Aceptado.
4. **Página más larga en el teléfono** (unos 1.900 px, unas tres pantallas): aceptada.
5. **Ícono del camión pluma:** se mantiene el actual (`precision-manufacturing-outline`). Las alternativas `weight-outline` y `construction` quedan descartadas.
6. **Única modificación pedida:** que las banderas no tengan los bordes redondeados, sino cuadrados. Es la tercera pasada.

### No verificado en la fase B

- **Safari en iPhone:** no hay equipo.
- **Las banderas con esquinas rectas en la vista previa:** el cambio es posterior al despliegue revisado. Se verán en el próximo.
- **Firefox**, si vale la §10 de la evidencia y no la §9 (ver la nota).
- **Lector de pantalla:** la evidencia no lo cubre.
- **Origen y licencia de las banderas:** siguen sin constar en el repositorio. Los completa el desarrollador.

### Tercera pasada: qué cambió en los SVG

Rectángulo de la bandera, verificado en los trazados originales: de x = 1 a 31 y de y = 4 a 28 del lienzo de 32 × 32, con esquinas de radio 4 por fuera y de radio 3 en el borde interior del contorno. Se conserva.

| Archivo | Trazado | Antes | Después |
| :--- | :--- | :--- | :--- |
| `chile.svg` | Franja roja | Rectángulo con las dos esquinas de abajo redondeadas | `M1,15H31V28H1V15Z` |
| `chile.svg` | Franja blanca | Rectángulo con las dos esquinas de arriba redondeadas | `M1,4H31V16H1V4Z` |
| `chile.svg` | Cantón azul | Rectángulo con la esquina de arriba a la izquierda redondeada | `M1,4H13V16H1V4Z` |
| `chile.svg` | Estrella | — | **Sin cambio** |
| `argentina.svg` | Franja blanca | Ya era un rectángulo recto | **Sin cambio** |
| `argentina.svg` | Franja celeste superior | Esquinas de arriba redondeadas | `M1,4H31V12H1V4Z` |
| `argentina.svg` | Franja celeste inferior | Esquinas redondeadas (con su `transform`) | `M1,20H31V28H1V20Z` (mismo `transform`) |
| `argentina.svg` | Sol de Mayo | — | **Sin cambio** |
| Ambos | Contorno translúcido (`opacity=".15"`) | Marco de 1 unidad con esquinas redondeadas | `M1,4H31V28H1V4Zm1,1V27H30V5H2Z` (marco de 1 unidad, recto) |
| Ambos | Brillo superior (`opacity=".2"`) | Franja de 1 unidad que seguía la curva de las esquinas | `M2,5H30V6H2V5Z` (franja recta de 1 unidad) |

- Solo cambió el atributo `d` de esos trazados: 5 líneas en `chile.svg` y 4 en `argentina.svg`. El resto de cada archivo (etiqueta `<svg>`, orden de los trazados, atributos, sangría) es idéntico.
- En los trazados nuevos no queda ningún comando de curva.

Hashes y bytes. SHA-256 del contenido sin espacios al inicio ni al final:

| Archivo | Antes | Después |
| :--- | :--- | :--- |
| `chile.svg` | 964 B · `eb94d65ccc52dae6df2390198184deb3bc8790e1e87c174a0410463270014003` | **617 B** · `96cba5b1d633b5c6e385537de92934a4a16a9e7dff11bcedff45685efecf89dd` |
| `argentina.svg` | 8.444 B · `603dd3ccc643567dc5ba28f3a8927b8a1e5599daad90b0a0de030eee34aa6924` | **8.118 B** · `347358df673caa4e1f24b88170cc63012f2a47bc2bcb3bc07796bb0ff502cfb4` |
| `google.svg` | 2.330 B · `08e706bbc99beccdde6d9ccb3df35adf019a0acc573ec60a39a31afdb7329117` | **Sin cambio:** 2.330 B, mismo hash |

Los tres hashes de «antes» coinciden con los del encargo. Los originales de las banderas quedaron copiados fuera del repositorio antes de tocar nada.

### Tercera pasada: mediciones V1 a V13

Todo se midió en Chrome sobre la compilación final: no hubo cambios en `src/` después de medir.

| N.º | Criterio | Referencia | Medido | Resultado |
| :--- | :--- | :--- | :--- | :--- |
| V1 | Píxeles distintos fuera de las zonas de esquina, a 8× o más | 0 | A 16×: **20** (Chile) y **40** (Argentina). A 32×: 80 y 160. A 8×: 2.409 y 2.635 | **Parcial** (ver abajo) |
| V2 | Vértices opacos y del color de la bandera; 0 píxeles transparentes dentro del rectángulo | 4 de 4; 0 | **4 de 4** en cada una; **0** | Cumple |
| V3 | Estrella y Sol de Mayo idénticos | Carácter por carácter | **Iguales:** 132 y 7.601 caracteres | Cumple |
| V4 | Mismos `fill` y `opacity` | Conjuntos iguales | **Iguales** en ambas | Cumple |
| V5 | `width`, `height` y `viewBox` | Idénticos | Etiqueta `<svg>` **igual** | Cumple |
| V6 | Banderas del menú | 24 × 24 px a 360, 390 y 767 px; 32 × 32 px desde 768 px; 12 px o más a 360, 768 y 1024 px; ocultas a 320 px; 0 px de desborde | **24 × 24** y **32 × 32 px**; **28,8, 16 y 271,8 px**; ocultas a 320 px; **0 px** | Cumple |
| V7 | Header | 112 px | **112 px** a 320, 360, 390, 767, 768, 1024, 1280, 1536 y 1920 px, portada y 404 | Cumple |
| V8 | Tarjeta de envío | 2 banderas de 32 × 32 px; 417, 417, 395, 501 y 501 px; 0 huecos; ninguna otra | **2 de 32 × 32 px**; **417, 417, 395, 501 y 501 px**; **0 huecos**; **0** | Cumple |
| V9 | JavaScript | 960 B y 191 B | **960 B** (769 + 191) y **191 B** | Cumple |
| V10 | Presupuestos a 360 × 640 px y 4G | 400 KB; 50 KB; 150 KB; 8 px o más | **147,8 KB**; **32,6 KB**; **19,1 KB**; **17 px** | Cumple |
| V11 | `format:check`, `check` y `build` | 0 errores, 0 advertencias, 52 hints | **0, 0 y 52**; build con código 0 y sin avisos | Cumple |
| V12 | Hashes | Calculados; `google.svg` igual | Tabla de arriba; `google.svg` **igual** | Cumple |
| V13 | Capturas de las esquinas | Menú y tarjeta de envío, a 360 y 1280 px | **4 capturas ampliadas** a 8× | Cumple |

**V1, en detalle.** Cada SVG, el original y el nuevo, se incrustó en línea en una página de fondo transparente y se capturó a 8×, 16× y 32× (256, 512 y 1.024 px de lado). Se compararon los cuatro canales de cada píxel.

| Escala | Bandera | Distintos fuera de las zonas | Dónde | Distintos dentro de las zonas |
| :--- | :--- | :--- | :--- | :--- |
| 16× | Chile | **20** de 262.144 | x de 2 a 2,19; y de 8 a 8,69. Solo a la izquierda | 6.181 |
| 16× | Argentina | **40** de 262.144 | x de 2 a 2,19 y de 29,81 a 30; y de 8 a 8,69 | 6.554 |
| 32× | Chile | 80 de 1.048.576 | x de 2 a 2,19; y de 8 a 9 | 24.026 |
| 32× | Argentina | 160 de 1.048.576 | Los mismos dos costados; y de 8 a 9 | 25.480 |
| 8× | Chile | 2.409 de 65.536 | 18 en ese mismo lugar; el resto, a 1 px de los bordes rectos | 1.729 |
| 8× | Argentina | 2.635 de 65.536 | 20 en ese mismo lugar; el resto, a 1 px de los bordes rectos | 1.830 |

- **La cola del brillo (medido).** El brillo original era una franja que seguía la curva de la esquina y terminaba en el costado, en y = 9: una unidad más abajo que la zona de 4 × 4, que llega a y = 8. Esa cola mide como máximo 0,19 unidades de ancho. En la bandera nueva el brillo es una franja recta de y = 5 a 6 y esa cola no existe. Diferencia de canal máxima: 47 niveles sobre el azul de Chile y 25 sobre el celeste de Argentina. En la de Chile el costado derecho no cuenta porque ahí el brillo cae sobre blanco y no se nota.
- **No lo corregí, a propósito.** Conservar esos píxeles exigía dejar un fragmento curvo del brillo redondeado flotando en el costado, separado de la franja recta: justo lo que la tarea pide quitar («ninguna esquina redondeada… en el brillo superior»). Es la única forma en que V1 daría 0, y contradice el resultado pedido. A 32 px de pantalla, la cola mide 0,19 px de ancho.
- **Los bordes a 8× (medido el lugar; la causa es deducida).** A 8× hay además diferencias de hasta 19 y 22 niveles en una franja de 1 px a cada lado de los bordes rectos del rectángulo, del borde interior del contorno y del borde inferior del brillo. Clasifiqué cada píxel distinto y todos caen en esas líneas o en la cola. El original muestra ahí 631 píxeles con algo de color **fuera** del rectángulo; el nuevo, 0. A 16× y 32× esas diferencias desaparecen por completo. Lo atribuyo a que Chrome suaviza distinto los trazados con curvas que los rectángulos a esa escala; no lo comprobé de otra forma.
- **Un primer método no sirvió** y lo descarté: dibujar cada SVG como imagen en un lienzo (`<img>` y `canvas`). Chrome remuestrea la imagen y los bordes salen difuminados. Los números de arriba son del segundo método, con el SVG en línea.

**V2, en detalle** (a 16×; iguales a 8× y 32×). Color RGBA del píxel de cada vértice:

| Bandera | Arriba a la izquierda | Arriba a la derecha | Abajo a la izquierda | Abajo a la derecha | No opacos dentro del rectángulo | Con color fuera del rectángulo |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Chile, nueva | 17, 45, 137, 255 (azul) | 217, 217, 217, 255 (blanco) | 169, 49, 35, 255 (rojo) | 169, 49, 35, 255 (rojo) | **0** | **0** |
| Argentina, nueva | 110, 146, 187, 255 (celeste) | Igual | Igual | Igual | **0** | **0** |
| Ambas, original | 0, 0, 0, 0 (transparente) | Transparente | Transparente | Transparente | 3.712 y 3.720 | 0 |

Los colores de los vértices son los de la bandera oscurecidos por el contorno translúcido, que pasa por encima: es lo esperado.

**V6 a V8, en detalle.** Los valores son los de la línea base, uno por uno:

| Ancho | Banderas del menú | Separación con «Contacto» | Header | Tarjeta de envío y su fila |
| :--- | :--- | :--- | :--- | :--- |
| 320 px | Ocultas | — | 112 px | 439 px (sola en su fila) |
| 360 px | 24 × 24 px | **28,8 px** | 112 px | **417 px** |
| 390 px | 24 × 24 px | 58,8 px | 112 px | 417 px |
| 767 px | 24 × 24 px | 435,8 px | 112 px | — |
| 768 px | 32 × 32 px | **16 px** | 112 px | **417 px** (fila: 417 y 417) |
| 1024 px | 32 × 32 px | **271,8 px** | 112 px | **395 px** (fila: 395 y 395) |
| 1280 px | 32 × 32 px | 527,8 px | 112 px | **501 px** (las cuatro de la fila) |
| 1536 px | 32 × 32 px | 542,8 px | 112 px | 501 px |
| 1920 px | 32 × 32 px | 542,8 px | 112 px | **501 px** |

- 0 px de desborde de la página, del menú y de su contenedor en todos los anchos. El 404 da los mismos valores.
- Grilla de Servicios sin huecos: la última fila ocupa 320 de 320, 713 de 713, 969 de 969, 1.225 de 1.225 y 1.240 de 1.240 px. La sección mide lo mismo que antes (4.156 px a 360 px y 1.510 px a 1280 px).
- Lo que Chrome tiene en el DOM, en el menú y en la tarjeta, es igual a los archivos nuevos: 6 trazados en cada copia, con los mismos `d`, `fill`, `transform` y `opacity`.

**V9 y V10, en detalle:**

| Medición | Antes | Después | Límite |
| :--- | :--- | :--- | :--- |
| JavaScript de la portada y del 404 | 960 B y 191 B | **960 B y 191 B** | Igual a la línea base |
| HTML (gzip) | 27.152 B | 26.927 B | — |
| CSS (gzip) | 6.420 B | 6.420 B | — |
| **HTML más CSS** | 33.572 B (32,8 KB) | **33.347 B (32,6 KB)** | 50 KB |
| **Foto del hero** | 19.549 B | **19.549 B (19,1 KB)** | 150 KB |
| **Total** a 360 × 640 px, densidad 1 y 4G | 151.552 B (148,0 KB) | **151.327 B (147,8 KB)** | 400 KB |
| Página completa | 203.558 B (198,8 KB) | 203.333 B (198,6 KB) | Se informa |
| Primera pantalla | 17 px | **17 px** | 8 px o más |

- El HTML baja 225 B comprimidos: los trazados rectos son más cortos. `index.html` pasa de 125.445 a 124.099 B sin comprimir y `404.html`, de 33.859 a 33.186 B.
- `dist/`: «Rozas», la palabra «RUT», «razón social» y «©», 0; «Yerko», solo en 2 reseñas y en la URL de TikTok. Sin cambio.

**No repetí** en esta pasada el recorrido con Tab, las anclas, las opiniones ni los medios de pago: el encargo no los pedía y el cambio no toca maquetación ni elementos enfocables (medí que el header, el menú, la tarjeta de envío y la grilla quedaron en los mismos valores). Sus últimas mediciones son las de la segunda pasada.

### Capturas

Fuera del repositorio, en una sola carpeta, 16 archivos: las cuatro de las esquinas a 8× (`esquinas-menu-360`, `esquinas-menu-1280`, `esquinas-tarjeta-envio-360` y `esquinas-tarjeta-envio-1280`), el menú y la tarjeta de envío completos a 360 y 1280 px antes y después, y cada bandera original y nueva a 16×:

`C:\Users\ffeli\AppData\Local\Temp\claude\D--Trabajo-Proyectos-HTML-Proyectos-Personales-Gr-as-Burgos-gruas-burgos-villarrica\55330cfa-b466-44bb-a0a4-01066a36ba92\scratchpad\capturas-05-04-ajustes-3`

Los dos SVG originales están en la carpeta `p3-originales`, junto a la anterior. Ambas son temporales: conviene copiarlas si se quieren conservar.

## Criterios de aceptación

Fase B de la tanda, según la evidencia del desarrollador:

- [x] Vista previa: **Success**, commit `c1b0eea`, **`200 OK`** y **`x-robots-tag: noindex`**.
- [x] Menú de **tres** enlaces en el teléfono y de **seis** en escritorio, con sus anclas.
- [x] Banderas del menú: tamaño y posición **aprobados**.
- [x] Diez opiniones con el logotipo de Google; medios de pago; ocho tarjetas; tarjeta de envío; primera pantalla: **conformes**.
- [x] Firefox: **verificado según la §9** de la evidencia, con la inconsistencia de la §10 anotada.
- [ ] Banderas con esquinas rectas en la vista previa. **No verificado.**
- [ ] Safari en iPhone. **No verificado.**

Tercera pasada, fase A:

- [ ] V1. **Parcial:** 20 y 40 px distintos fuera de las zonas de esquina a 16×, todos en la cola del brillo original.
- [x] V2 a V13: **cumplen** (tabla de arriba).

## Decisiones tomadas

Ninguna requiere RDA.

1. **Trabajar sobre `58b78e6`**, con la confirmación del desarrollador: solo agrega la evidencia a `c1b0eea`.
2. **Cambiar solo el atributo `d`** de los trazados del rectángulo, el contorno y el brillo, y dejar idéntico todo lo demás del archivo. Así la comparación con el original es directa.
3. **El contorno sigue siendo un marco de 1 unidad** (de 1 a 2 en cada lado) y **el brillo, una franja de 1 unidad** (de y = 5 a 6, entre x = 2 y 30): las mismas medidas que tenían en los tramos rectos del original.
4. **No conservar la cola del brillo**, aunque deja V1 en parcial (motivo en el detalle de V1).
5. **La franja celeste inferior de Argentina conserva su `transform`**, aunque un rectángulo recto ya no lo necesita, para no cambiar nada que no fuera la geometría de las esquinas.
6. **Comparar píxeles a 8×, 16× y 32×**, y no solo a 8×: a 8× el suavizado de Chrome en los bordes del original tapa el resultado.
7. **`DESIGN.md` §5 no se tocó:** ninguna de sus filas habla de la forma de las esquinas. En `definicion-epica-05.md` cambié solo el paréntesis que decía «sin modificar».
8. **Firefox registrado como verificado**, según la §9 y por indicación del desarrollador, dejando escrita la inconsistencia.
9. **La fase B de la tanda pasó de una línea a una lista de casillas** en el archivo de la iteración, para poder marcar lo cubierto y dejar sin marcar lo no verificado.

## Diferencias entre lo planificado y lo encontrado

| Tema | Diferencia |
| :--- | :--- |
| Commit de partida | `58b78e6` en vez de `c1b0eea` (decisión 1). |
| V1 | No da 0: quedan 20 y 40 px a 16×. La zona de 4 × 4 unidades contiene las esquinas del relleno y del contorno, pero el brillo original se extendía una unidad más abajo. |
| V1 a 8× | A la escala mínima pedida hay además diferencias de suavizado en los bordes. Por eso medí también a 16× y 32×. |
| Peso | Baja 0,2 KB en vez de mantenerse. |
| Método de comparación | El primero (imagen en un lienzo) difuminaba los bordes; usé el SVG en línea. |

Error mío, ya corregido: ese primer método de comparación, que descarté al ver color fuera del rectángulo en el original.

## Pendientes y riesgos

- **Tareas del desarrollador:** commit y push de la tercera pasada; opcionalmente, ver las banderas con esquinas rectas en la nueva vista previa; anotar el origen y la licencia de las banderas en `DESIGN.md` §6.2; marcar la iteración «Terminada» (archivo de la iteración y fila del registro); Pull Request y merge.
- **V1 parcial:** si el desarrollador prefiere que el brillo no cambie en absoluto fuera de las esquinas, habría que decidir cómo termina en una bandera recta. Hoy es una franja recta.
- **No verificado:** las banderas con esquinas rectas en la vista previa, Safari en iPhone y lector de pantalla. Firefox, sujeto a la inconsistencia de la evidencia.
- **Origen y licencia de las banderas:** siguen sin constar. Además, ahora son una versión modificada de las entregadas: conviene confirmar que su licencia permite modificarlas.
- **AUD-08-023** (aprobación del cliente): sigue abierto; se registra en 05-01.
- **Bajada de Servicios y «Nuestro equipamiento»:** siguen nombrando solo autos, SUV y camionetas (decisión anterior del desarrollador).
- **Mapa esquemático con cuatro localidades** hasta 05-05.
- **LCP y Lighthouse:** no medidos (05-01).
- **Margen de JavaScript:** siguen quedando 64 B (960 B de 1.024 B) para 05-02.
- **Cambios ajenos en `git status`,** que no toqué: `AD src/assets/LogoGruasBurgos.svg`, anterior a la épica.
- **Servidores y Chrome.** `pnpm preview` cerrado (puerto 4321 libre) y ningún Chrome sin interfaz en ejecución. No se crearon perfiles nuevos.

## Commit sugerido

`Épica 5 - Iteración 05-04: deja las banderas de Chile y Argentina con esquinas rectas y registra la fase B de la tanda de ajustes con la evidencia del desarrollador`

(164 caracteres, contados con código.)
