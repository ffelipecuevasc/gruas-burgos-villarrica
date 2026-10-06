# Bitácora 05-04 · Cambios del cliente: segunda pasada de la tanda de ajustes

- **Fecha:** 2026-10-06
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `iteracion/05-04-cambios-cliente`
- **Estado final:** En revisión

## Resumen

Se implementó la «Segunda pasada de la tanda (2026-10-06)» de la iteración 05-04: las banderas del menú se reemplazaron por las que entregó el desarrollador y se agregaron a la tarjeta de envío; el logotipo de Google pasó al extremo derecho de la fila del título desde 768 px; y se capturaron dos alternativas del ícono del camión pluma, sin cambiar el que está publicado.

Los 8 criterios de la segunda pasada se cumplen, y toda la tanda (primera y segunda pasada) se midió de nuevo en Chrome sobre la compilación final. El header sigue en 112 px y el JavaScript de cliente, en 960 B.

La carga inicial sube de 140,9 a 148,0 KB: la bandera de Argentina, con el Sol de Mayo, pesa 8,4 KB y va incrustada dos veces en el HTML (menú y tarjeta).

Hubo una consulta antes de empezar: la pasada dejaba desactualizadas cuatro filas de `DESIGN.md` §5 y el encargo solo autorizaba §6. El desarrollador autorizó actualizarlas.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/assets/banderas/chile.svg` y `argentina.svg` | Reemplazados por los SVG del encargo, tal cual. |
| `src/components/Header.astro` | Banderas de 24 px bajo `md` y de 32 px desde `md`, con 4 px entre ellas. |
| `src/components/TarjetaServicio.astro` | Banderas arriba a la derecha cuando el servicio lo pide. |
| `src/data/servicios.js` | `banderas: true` en el envío de vehículos; propiedad documentada. |
| `src/components/TituloSeccion.astro` | Desde `md`, el elemento del slot `junto` va al extremo derecho de la fila. |
| `src/components/Resenas.astro` | Solo el comentario sobre la posición del logotipo. |
| `DESIGN.md` | §6.2: fila de las banderas. §5: lo que la pasada volvía falso en las filas `Header`, `TituloSeccion`, `TarjetaServicio` y `Resenas` (autorizado por el desarrollador durante el trabajo). |
| `…/epica-05-publicacion-medicion/definicion-epica-05.md` | Solo el punto «Banderas» de la decisión 14. |
| `…/epica-05-publicacion-medicion/iteracion-05-04-contenido-y-estructura.md` | Estado y las 8 casillas de la segunda pasada, con su medición. |
| `…/epica-05-publicacion-medicion/evidencia-05-04-fase-b-ajustes.md` | Puntos nuevos: banderas del menú, banderas de la tarjeta de envío, posición del logotipo e ícono del camión pluma. Sigue vacío. |
| `_planificacion/00_producto/registro-log.md` | Fila de 05-04, «Iteración activa», «Próximo hito» y una línea del historial. |
| `_planificacion/99_bitacora/bitacora-05-04-ajustes-2-2026-10-06.md` | Nueva. |

Ningún archivo eliminado ni renombrado. No se tocaron `AGENTS.md`, `README.md`, `package.json`, `pnpm-workspace.yaml`, `astro.config.mjs`, `tsconfig.json`, `public/_headers`, `decisiones.md`, `auditoria-tecnica.md`, `src/assets/marcas/google.svg`, `Icono.astro` ni las bitácoras anteriores. Sin dependencias nuevas y sin JavaScript nuevo.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos (antes: 52).
- `pnpm build`: OK. Código 0, 2 páginas, 0 líneas con «warn» o «error». `dist/`: 115 archivos, 3.681.729 B (antes, 115 y 3.644.663 B).
- Revisión móvil 360 px y escritorio: Chrome 154.0.8037.98 sin interfaz (protocolo CDP) sobre `pnpm preview`, con el perfil único reutilizable de 04-04.
- Lighthouse: **no ejecutado** (05-01).

Todo lo de esta sección se midió en el navegador o contando sobre `dist/`, salvo lo que se indica como deducido. «Antes» es la compilación de la rama sin cambios (`73a93aa`, la primera pasada), medida antes de tocar el código. «Después» es la compilación final: no hubo cambios en `src/` después de medirla. Bajo 768 px se midió con emulación móvil (sin barra de desplazamiento); desde 768 px, con la barra de 15 px de Chrome.

Fuentes: el menú se midió con la fuente real. La familia calculada de los enlaces es Barlow Condensed, servida desde `dist/` (10 fuentes cargadas en la portada y 4 en el 404; 0 recursos de otros dominios).

### Línea base contra las referencias del encargo

| Referencia | Medido antes del cambio | ¿Coincide? |
| :--- | :--- | :--- |
| Header de 112 px | 112 px a 320, 360, 390, 767, 768, 1024, 1280, 1536 y 1920 px | Sí |
| JavaScript: 960 B y 191 B | 960 B (769 + 191) y 191 B | Sí |
| 52 hints | 52 | Sí |
| Peso de la primera pasada (140,9 KB) | 144.296 B (140,9 KB) | Sí |

Antes del cambio, las banderas medían 24 × 16 y 24,9 × 16 px, a 23,9 px de «Contacto» a 360 px y a 26,9 px a 768 px. El logotipo de Google quedaba a 24 px del título, con su borde derecho a 42,7, 298,7, 554,7 y 569,7 px del borde del contenedor a 768, 1024, 1280 y 1920 px. La tarjeta de envío medía 417, 417, 395, 501 y 501 px a 360, 768, 1024, 1280 y 1920 px, igual que las de su fila.

### Tarea 1 · Banderas del menú

Archivos:

| Archivo | Tamaño | Trazados | Rellenos | Otros |
| :--- | :--- | :--- | :--- | :--- |
| `chile.svg` | 964 B | 6 | `#c73a29`, `#fff`, `#1435a1`, sin relleno, `#fff` y `#fff` | 2 con `opacity`; `viewBox` 0 0 32 32 |
| `argentina.svg` | 8.444 B | 6 | `#fff`, `#81acdc`, `#81acdc`, sin relleno, `#edb840` y `#fff` | 1 con `transform`, 2 con `opacity`; `viewBox` 0 0 32 32 |

- Los escribí tal cual desde el encargo, con sus saltos de línea y su sangría, sin comentarios añadidos.
- Comparación por código entre cada archivo y lo que Chrome tiene en el DOM (dos copias de cada bandera: menú y tarjeta): los atributos `d`, `fill`, `transform` y `opacity` de los **6 trazados son iguales** en los cuatro casos. Los `<svg>` conservan `width="32"`, `height="32"` y su `viewBox`; solo se agrega la clase de tamaño.
- El de Argentina lleva el Sol de Mayo: 1 trazado `#edb840`, con un atributo `d` de 7.601 caracteres. Aparece 2 veces en `dist/index.html`.
- **Salvedad:** la única copia de los SVG entregados es el propio encargo. No hay una segunda fuente contra la cual comparar mi transcripción. El tamaño de `argentina.svg` (8.444 B) coincide con los «8,4 KB» que anota la iteración, lo que es un indicio independiente de que está completo. Para una comprobación total, sus primeros 16 dígitos de SHA-256 son `0ee88f5bfb07225a` (Chile) y `204b7821c115a0ce` (Argentina), con fin de línea LF.

Menú:

| Ancho | Enlaces (visibles y con Tab) | Banderas antes | Banderas después | Separación con «Contacto» | Desborde | Header |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 320 px | 3 | Ocultas | Ocultas | — | 0 px | 112 px |
| 360 px | 3 | 24 × 16 y 24,9 × 16 px | **24 × 24 px** cada una, x = 288–340 px | 23,9 → **28,8 px** | 0 px | 112 px |
| 390 px | 3 | Igual | 24 × 24 px, x = 318–370 px | 53,9 → 58,8 px | 0 px | 112 px |
| 767 px | 3 | Igual | 24 × 24 px, x = 695–747 px | 430,9 → 435,8 px | 0 px | 112 px |
| 768 px | 6 | Igual | **32 × 32 px** cada una, x = 665,2–733,2 px | 26,9 → **16 px** | 0 px | 112 px |
| 1024 px | 6 | Igual | 32 × 32 px, x = 921–989 px | 282,9 → **271,8 px** | 0 px | 112 px |
| 1280 px | 6 | Igual | 32 × 32 px, x = 1.177–1.245 px | 538,9 → 527,8 px | 0 px | 112 px |
| 1536 px | 6 | Igual | 32 × 32 px | 553,9 → 542,8 px | 0 px | 112 px |
| 1920 px | 6 | Igual | 32 × 32 px | 553,9 → 542,8 px | 0 px | 112 px |

- Las banderas caben dentro del menú, que va de y = 64 a 112 px: las de 24 px ocupan y = 75,5–99,5 px y las de 32 px, y = 71,5–103,5 px.
- A 768 px el borde derecho de las banderas queda en 733,2 px y el del contenido en 733 px: 0,2 px, sin desborde (la lista de enlaces mide 629,2 px).
- Nombre accesible sin cambio: una imagen, «Banderas de Chile y Argentina». No son enlaces.
- El 404 da los mismos valores.
- A 320 px siguen ocultas: quedan 40,8 px libres y las dos banderas, con 12 px de separación, necesitan 64 px.

### Tarea 2 · Banderas en la tarjeta de envío

**Ubicación:** arriba a la derecha de la tarjeta, en la misma fila del cuadro del ícono y en el extremo opuesto. Las dos juntas, primero Chile y después Argentina, de 32 × 32 px, con 4 px entre ellas, centradas con el cuadro de 48 px (el cuadro empieza en y = 25 px y las banderas, en y = 33 px). La bandera de Argentina queda a 25 px del borde derecho, el mismo relleno de la tarjeta.

| Ancho | Banderas | Alto de la tarjeta (antes → después) | Altos de su fila | Última fila de la grilla | Otras tarjetas con banderas |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 320 px | 2, de 32 × 32 px | 439 → 439 px | Sola en su fila | 280 de 280 px | 0 |
| 360 px | 2, de 32 × 32 px | 417 → **417 px** | Sola en su fila | 320 de 320 px | **0** |
| 390 px | 2, de 32 × 32 px | 417 px | Sola en su fila | 350 de 350 px | 0 |
| 768 px | 2, de 32 × 32 px | 417 → **417 px** | 417 y 417 px | 713 de 713 px | **0** |
| 1024 px | 2, de 32 × 32 px | 395 → **395 px** | 395 y 395 px | 969 de 969 px | **0** |
| 1280 px | 2, de 32 × 32 px | 501 → **501 px** | 501, 501, 501 y 501 px | 1.225 de 1.225 px | **0** |
| 1536 px | 2, de 32 × 32 px | 501 px | Las cuatro, 501 px | 1.240 de 1.240 px | 0 |
| 1920 px | 2, de 32 × 32 px | 501 → **501 px** | Las cuatro, 501 px | 1.240 de 1.240 px | **0** |

- Cuadradas en todos los anchos (32 × 32 px): sin deformar. Visibles y dentro de la tarjeta.
- Decoración: su contenedor lleva `aria-hidden="true"`, sin rol ni nombre. El título de la tarjeta ya dice «Chile» y «Argentina».
- La sección Servicios mide lo mismo que antes: 4.156 px a 360 px y 1.510 px a 1280 px.

### Tarea 3 · Logotipo de Google

| Ancho | Posición antes | Posición después | Borde derecho al del contenedor | Diferencia de centro con el título | Bajada |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 320, 360 y 390 px | Debajo del título | **Debajo del título**, x = 20 px, 73,1 × 24 px | — | — | 35 px más abajo |
| 767 px | Al lado del título, a 24 px | Igual: al lado, a 24 px | 254,1 px | 0 px | 39 px más abajo |
| 768 px | Al lado, a 24 px | **Extremo derecho**, x = 635,5–733 px | 42,7 → **0 px** | **0 px** | 41 px más abajo, sin tocarse |
| 1024 px | Al lado, a 24 px | **Extremo derecho**, x = 891,5–989 px | 298,7 → **0 px** | **0 px** | 41 px, sin tocarse |
| 1280 px | Al lado, a 24 px | **Extremo derecho**, x = 1.147,5–1.245 px | 554,7 → **0 px** | **0 px** | 41 px, sin tocarse |
| 1536 px | Al lado, a 24 px | Extremo derecho | **0 px** | 0 px | 41 px, sin tocarse |
| 1920 px | Al lado, a 24 px | **Extremo derecho**, x = 1.475–1.572,5 px | 569,7 → **0 px** | **0 px** | 41 px, sin tocarse |

- Desde 768 px mide 97,5 × 32 px, en la misma fila del título. A 768 px queda a 66,7 px del final del título; a 1280 px, a 578,7 px.
- Proporción 3,047 (original, 3,048). Los seis trazados, iguales a los de la primera pasada (comparados por código). Sigue fuera del `h2`, con rol de imagen y nombre «Google».
- **Bajo 768 px no cambié nada**, y eso incluye un caso que conviene conocer: cuando el título cabe en una línea junto al logotipo (desde unos 520 px; lo medí a 767 px), el logotipo queda al lado del título, a 24 px, y no debajo. Ya era así en la primera pasada. En los teléfonos en vertical (320 a 390 px) queda debajo.

### Tarea 4 · Alternativas del ícono del camión pluma

El código no cambió: `Icono.astro` sigue con `pluma: 'material-symbols:precision-manufacturing-outline'`. Las alternativas se dibujaron inyectando su trazado en la página ya compilada, solo para la captura; no quedó código de comparación en el repositorio.

| Opción | Ícono de `@iconify-json/material-symbols` | Qué muestra |
| :--- | :--- | :--- |
| Actual | `precision-manufacturing-outline` | Un brazo articulado |
| Alternativa 1 | `weight-outline` | Una pesa con argolla: carga pesada que se levanta |
| Alternativa 2 | `construction` | Un martillo y una llave cruzados: trabajo pesado |

- El paquete no tiene una grúa pluma ni un gancho: busqué «crane», «hoist», «lift», «hook», «winch» y «pulley». `forklift-outline` existe, pero lo descarté porque «Montacargas» ya es una característica de otra tarjeta.
- `construction` no tiene variante «outline» en el paquete: es un ícono relleno, algo más pesado a la vista que los demás de las tarjetas.
- Capturas, nueve archivos: la tarjeta completa a 360 y 1280 px con cada opción, y un detalle ampliado del cuadro del ícono. Se llaman `pluma-actual-…`, `pluma-alternativa-1-weight-outline-…` y `pluma-alternativa-2-construction-…`, con los sufijos `-360.png`, `-1280.png` y `-detalle.png`. Están en la carpeta de «Capturas».

### Toda la tanda sobre la compilación final

| Medición | Primera pasada | Compilación final |
| :--- | :--- | :--- |
| Enlaces del menú | 3 bajo 768 px; 6 desde 768 px | **Igual**, con 0 px de desborde |
| Header | 112 px | **112 px**, en los nueve anchos y en el 404 |
| Anclas | 44 de 44 clics con el título visible | **44 de 44** (360, 768, 1024, 1280 y 1920 px) |
| Estructura | 1 `h1`, 0 saltos, 0 `id` duplicados | **Igual** |
| Opiniones visibles | 10; 0 `<details>` | **10; 0 `<details>`**; textos iguales (50 de 50 campos) |
| Alto de Opiniones | 2.664 px a 360 px; 1.238 px a 1280 px | **Igual** |
| Medios de pago | 4 íconos distintos; 12,76:1 y 9,66:1 | **Igual** |
| Servicios | 8 de 8 iguales; 4.156 y 1.510 px; 0 huecos | **Igual**; 8 íconos distintos; «Disponible 24/7» en las 8 |
| Alto de la página a 360 px | 13.067 px | **13.067 px** |
| Objetivos táctiles bajo 44 × 44 px | 0 | **0** (47, 47, 53, 53 y 53 objetivos) |
| Desborde horizontal de la página | Ninguno | **Ninguno**, de 320 a 1920 px, portada y 404 |
| Final de la página | 0 elementos fijos sobre el pie | **0**, en 12 casos |

Teclado, con Tab y Mayús + Tab reales y esperando a que `scrollY` quede quieto 400 ms:

| Página y tamaño | Paradas con Tab | Con Mayús + Tab | Cubiertas | Anillo cubierto |
| :--- | :--- | :--- | :--- | :--- |
| Portada, 320 × 640 y 360 × 640 | 47 | 47 | **0** | 0 |
| Portada, 768 × 1024, 1280 × 800 y 1536 × 800 | 51 | 53 | **0** | 0 |
| 404, 320 × 640 y 360 × 640 | 17 | 17 | **0** | 0 |
| 404, 768 × 1024, 1280 × 800 y 1536 × 800 | 19 | 19 | **0** | 0 |

- 20 recorridos completos, 0 elementos enfocados cubiertos por elementos fijos (impacto mínimo: 100 %). Las mismas paradas que en la primera pasada: las banderas no reciben foco.
- Desde un cuarto, la mitad, tres cuartos y el final de la página, a 320, 360, 768, 1280 y 1536 px: 40 recorridos, **395 paradas, 0 cubiertas** y 0 anillos cubiertos.
- Los botones flotantes siguen recibiendo el foco con Mayús + Tab desde arriba, visibles, y se ocultan al llegar al pie.

### JavaScript, peso y primera pantalla

| Medición | Antes | Después | Límite |
| :--- | :--- | :--- | :--- |
| JavaScript de la portada | 960 B (769 + 191) | **960 B** | Igual a la línea base |
| JavaScript del 404 | 191 B | **191 B** | Igual a la línea base |
| Archivos `.js` en `dist/` y scripts con `src` | 0 y 0 | 0 y 0 | — |

Presupuesto a 360 × 640 px, densidad 1 y 4G (`effectiveType` 4g), sin desplazarse y con la caché desactivada:

| Recurso | Antes | Después | Límite |
| :--- | :--- | :--- | :--- |
| HTML (gzip) | 19.978 B | 27.152 B | — |
| CSS (gzip) | 6.338 B | 6.420 B | — |
| **HTML más CSS** | 26.316 B (25,7 KB) | **33.572 B (32,8 KB)** | 50 KB |
| **JavaScript en línea** | 960 B | **960 B** | Menos de 1 KB |
| Fuentes: 5 archivos WOFF2 | 97.628 B | 97.628 B | — |
| **Foto del hero** | 19.549 B | **19.549 B (19,1 KB)** | 150 KB |
| Otras fotos al cargar | 0 B | 0 B | — |
| **Total** | 144.296 B (140,9 KB) | **151.552 B (148,0 KB)** | 400 KB |
| **Página completa**, recorrida hasta el final | 196.302 B (191,7 KB) | **203.558 B (198,8 KB)** | Se informa |

- El aumento es HTML: 7,2 KB comprimidos. `index.html` pasa de 106.519 a 125.445 B sin comprimir y `404.html`, de 24.936 a 33.859 B. La bandera de Argentina va dos veces en la portada y una en el 404; la compresión no aprovecha la repetición porque las dos copias quedan lejos una de otra.
- Otras pantallas: 360 × 640 a densidad 2 y 3, 181,8 y 229,4 KB; 1280 × 800, 181,8 KB (página completa, 259,6 KB); 1920 × 1080, 235,9 KB. Ninguna supera 400 KB.
- CLS: **0** al cargar y **0** al recorrer la página completa a 360 y 1280 px.
- Primera pantalla a 360 × 640 px: **17 px** sobre la barra, sin cambio. A 320 × 568 px sigue en −55 px (riesgo aceptado en 04-04).

### `dist/`

| Búsqueda | Resultado |
| :--- | :--- |
| «Ver 4 opiniones más» y «opiniones más» | **0** |
| `<details>` | **0** |
| «Yerko» | 4 en `index.html` (2 reseñas y la URL de TikTok en el pie y en el JSON-LD) y 1 en `404.html` (URL de TikTok) |
| «Rozas», la palabra «RUT», «razón social», «©» | **0** |
| «15 toneladas» | 1 |
| `PENDIENTE_CLIENTE`, `priceRange`, «todo tipo», «etc.» | 0 |
| «Disponible 24/7» como característica | 8 |

Las banderas nuevas no traen comentarios: desaparecen los dos comentarios de autoría que llevaban las dibujadas para el sitio.

### Capturas

Fuera del repositorio, en una sola carpeta, 69 archivos (menú, tarjeta de envío, logotipo, las nueve del camión pluma y las de toda la tanda; los de la línea base llevan el prefijo `antes-`):

`C:\Users\ffeli\AppData\Local\Temp\claude\D--Trabajo-Proyectos-HTML-Proyectos-Personales-Gr-as-Burgos-gruas-burgos-villarrica\55330cfa-b466-44bb-a0a4-01066a36ba92\scratchpad\capturas-05-04-ajustes-2`

La carpeta es temporal: conviene copiarla si se quiere conservar.

## Criterios de aceptación

Segunda pasada, fase A:

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con **0 errores y 0 advertencias** (52 hints, igual que antes).
- [x] Banderas: archivos escritos tal cual desde el encargo; **6 trazados** cada uno, iguales en el DOM; el de Argentina lleva el Sol de Mayo. Con la salvedad de que no hay una segunda fuente para comparar.
- [x] Menú: banderas visibles sin desborde desde 360 px; separación de **28,8**, **16** y **271,8 px** a 360, 768 y 1024 px; header de **112 px**.
- [x] Tarjeta de envío: **2 banderas** visibles en los cinco anchos; **0 huecos**; mismo alto que su fila; **0** tarjetas más con banderas.
- [x] Logotipo a 768, 1024, 1280 y 1920 px: **0 px** del borde derecho y **0 px** de diferencia de centro; sin tocar la bajada. A 320, 360 y 390 px, debajo del título.
- [x] Dos alternativas del ícono del camión pluma (**`weight-outline`** y **`construction`**) capturadas a 360 y 1280 px; el código conserva el ícono actual.
- [x] Toda la tanda medida sobre la compilación final (tabla de arriba); JavaScript **960 B**.
- [x] Peso: **148,0 KB** en total, **32,8 KB** de HTML más CSS y **19,1 KB** de foto del hero.

Fase B de la tanda: sin marcar. Es del desarrollador.

## Decisiones tomadas

Ninguna requiere RDA.

1. **`DESIGN.md` §5.** Consulté antes de empezar y el desarrollador autorizó corregir lo que la pasada volvía falso en cuatro filas (`Header`, `TituloSeccion`, `TarjetaServicio` y `Resenas`). No toqué nada más de §5.
2. **Tamaño de las banderas del menú:** 24 px bajo `md` y 32 px desde `md`, el máximo permitido. El SVG es un cuadrado de 32 × 32 y la bandera ocupa 30 × 24 de él, así que a 24 px la bandera visible mide unos 22,5 × 18 px.
3. **Separación entre las dos banderas: 4 px** (antes, 8). Con 8 px, a 768 px quedaban 11,8 px hasta «Contacto», bajo los 12 exigidos; con 4 px quedan 16. Cada ícono trae 1 px de margen propio, así que no se ven pegadas.
4. **Banderas ocultas a 320 px**, como en la primera pasada: no caben con 12 px de separación.
5. **Ubicación en la tarjeta de envío:** arriba a la derecha, frente al cuadro del ícono. No ocupa una línea nueva, así que la tarjeta conserva su alto, y no compite con el título ni con el botón.
6. **Banderas de la tarjeta ocultas para un lector de pantalla** (`aria-hidden`): la iteración las define como decoración.
7. **Las banderas de la tarjeta salen de un dato** (`banderas: true` en `servicios.js`) y no de una comparación con el `id` del servicio dentro del componente.
8. **El logotipo va al extremo derecho con una regla del `TituloSeccion`** (`md:flex-nowrap md:justify-between`), no con una posición absoluta: sigue en la fila del título y centrado con él a cualquier ancho desde 768 px.
9. **Alternativas del camión pluma:** `weight-outline` y `construction` (motivos en la tabla de la tarea 4).
10. **Origen de las banderas en `DESIGN.md` §6.2:** anoté que las entregó el desarrollador el 2026-10-06 y que el conjunto de íconos del que provienen y su licencia no constan en el repositorio. No inventé un origen.

## Diferencias entre lo planificado y lo encontrado

| Tema | Diferencia |
| :--- | :--- |
| `DESIGN.md` | El encargo autorizaba solo §6; la pasada contradecía cuatro filas de §5. Resuelto con la autorización del desarrollador (decisión 1). |
| Separación de las banderas | Con los 8 px de la primera pasada, a 768 px no se cumplían los 12 px (decisión 3). |
| «Bajo 768 px, debajo del título» | Vale para teléfonos en vertical. Entre unos 520 y 767 px el logotipo queda al lado del título, igual que antes. |
| Comparación con los SVG del encargo | Solo pude comparar los archivos con el DOM y con el peso anotado en la iteración; no hay una segunda copia de los originales. |
| Peso | El HTML sube 7,2 KB comprimidos, más que los 8,4 KB de un solo archivo sugieren, porque la bandera de Argentina va dos veces. |

Sin errores que corregir en esta pasada: `pnpm check` y `pnpm build` pasaron a la primera, y la compilación medida es la final.

## Pendientes y riesgos

- **Fase B de la tanda (desarrollador):** vista previa en Cloudflare, teléfono real, escritorio, Firefox y Safari, con `evidencia-05-04-fase-b-ajustes.md`. Incluye repetir `curl.exe -sI` contra la dirección del despliegue, y elegir el ícono del camión pluma.
- **Origen y licencia de las banderas:** no constan. Conviene que el desarrollador los anote en `DESIGN.md` §6.2, como se hizo con el logotipo de Google.
- **Peso del HTML:** 27,2 KB comprimidos, de los cuales unos 7 KB son la bandera de Argentina repetida. Si hiciera falta bajarlo, la bandera podría definirse una vez y referenciarse dos (`<use>`); no lo hice porque cambia cómo se incrusta el SVG entregado.
- **Menú a 768 px:** 16 px entre «Contacto» y las banderas. Un enlace más, o un texto más largo, no cabe.
- **Logotipo entre 520 y 767 px:** queda al lado del título. Está como pregunta en la evidencia.
- **Reconocimiento de las banderas a 24 px:** el Sol de Mayo mide unos 4 px en el teléfono. Se ve en las capturas, pero conviene mirarlo en el teléfono real.
- **Logotipo de Google:** sigue siendo una marca de un tercero, usada sin modificar; sus condiciones de uso no las revisé.
- **Bajada de Servicios y «Nuestro equipamiento»:** siguen nombrando solo autos, SUV y camionetas (decisión anterior del desarrollador).
- **Mapa esquemático con cuatro localidades** hasta 05-05.
- **Medido solo en Chrome.** Sin lector de pantalla real.
- **LCP y Lighthouse:** no medidos (05-01).
- **Margen de JavaScript:** siguen quedando 64 B (960 B de 1.024 B) para 05-02.
- **Cambios ajenos en `git status`,** que no toqué: `AD src/assets/LogoGruasBurgos.svg`, anterior a la épica.
- **Servidores y Chrome.** `pnpm preview` cerrado (puerto 4321 libre) y ningún Chrome sin interfaz en ejecución. No se crearon perfiles nuevos.

## Commit sugerido

`Épica 5 - Iteración 05-04: usa las banderas entregadas en el menú y en la tarjeta de envío, lleva el logotipo de Google al extremo derecho del título y deja dos alternativas del ícono del camión pluma`

(200 caracteres, contados con código.)
