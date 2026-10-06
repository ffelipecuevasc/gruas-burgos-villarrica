# Bitácora 05-04 · Cambios del cliente: tanda de ajustes del 2026-10-06

- **Fecha:** 2026-10-06
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `iteracion/05-04-cambios-cliente`
- **Estado final:** En revisión

## Resumen

Se implementó la «Tanda de ajustes del cliente (2026-10-06)» de la iteración 05-04: menú de seis enlaces desde 768 px con tres anclas nuevas, banderas de Chile y Argentina en el menú, las diez opiniones visibles con el logotipo de Google junto al título, «Medios de pago» destacado con un ícono por medio, y las ocho tarjetas de servicio con la misma estructura.

Los 12 criterios de la fase A de la tanda se midieron en Chrome y los 12 se cumplen. El header sigue en 112 px, el JavaScript de cliente no cambió (960 B) y la carga inicial pasó de 137,4 a 140,9 KB.

Hubo una consulta antes de empezar: la tanda pedía «Disponible 24/7» en las ocho tarjetas y, a la vez, conservar los textos de las tres originales, y «Rescate 4x4» no la tenía. El desarrollador decidió que reemplace a «Servicio en el paso Mamuil Malal».

Dos cosas para mirar en la fase B: la página creció 1.921 px en el teléfono (de 11.146 a 13.067 px a 360 px), y el ícono elegido para el camión pluma es una aproximación, porque el paquete no tiene una grúa pluma.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `src/components/Header.astro` | Seis enlaces (tres con `hidden md:block` en su `li`) y banderas en el extremo derecho del menú. |
| `src/assets/banderas/chile.svg` y `argentina.svg` | Nuevos. Banderas dibujadas para el sitio. |
| `src/assets/marcas/google.svg` | Nuevo. Logotipo de Google, idéntico al bloque de la iteración. |
| `src/components/TituloSeccion.astro` | Slot opcional `junto`, para un elemento al lado del `h2`. |
| `src/components/Resenas.astro` | `id="opiniones"`, las diez opiniones en una grilla, sin acordeón, y el logotipo junto al título. |
| `src/components/QuienesSomos.astro` y `GaleriaTrabajos.astro` | `id="quienes-somos"` e `id="trabajos"`. Comentarios al día. |
| `src/components/CanalDirecto.astro` | Bloque «Medios de pago» destacado, con cuatro íconos y sus nombres. |
| `src/components/TarjetaServicio.astro` | Una sola estructura; se elimina la variante compacta. |
| `src/components/Icono.astro` | Ocho claves nuevas (cuatro de servicios y cuatro de pagos). |
| `src/data/servicios.js` | Ícono y tres características en los cinco servicios nuevos; «Disponible 24/7» en «Rescate 4x4». |
| `src/data/negocio.js` | `pagos.medios` y `pagos.documentos` reemplazan a `pagos.texto`. `pagos.aceptados` (JSON-LD) no cambia. |
| `src/pages/index.astro` | Una sola grilla de ocho tarjetas. Comentario de las seis anclas. |
| `src/pages/[muestrario].astro` | Los ocho íconos nuevos en la lista de la página de desarrollo. |
| `DESIGN.md` | §5: párrafo de las anclas y filas `Header`, `TituloSeccion`, `TarjetaServicio`, `QuienesSomos`, `GaleriaTrabajos`, `Resenas` (nueva) y `CanalDirecto`. §6: ocho íconos y §6.2 «Recursos locales» (nueva). Edición autorizada. |
| `_planificacion/00_producto/decisiones.md` | Solo RDA-007 y RDA-009: una actualización fechada en cada una. Estado y fecha sin cambios. |
| `…/epica-05-publicacion-medicion/definicion-epica-05.md` | Solo la decisión 14, agregada. |
| `…/epica-05-publicacion-medicion/iteracion-05-04-contenido-y-estructura.md` | Estado y las 12 casillas de la fase A de la tanda, con su medición. |
| `…/epica-05-publicacion-medicion/evidencia-05-04-fase-b-ajustes.md` | Nuevo. Plantilla vacía para el desarrollador. |
| `_planificacion/00_producto/registro-log.md` | Fila de 05-04, «Iteración activa», «Próximo hito» y una línea del historial. |
| `_planificacion/99_bitacora/bitacora-05-04-ajustes-2026-10-06.md` | Nueva. |

Ningún archivo eliminado ni renombrado. No se tocaron `AGENTS.md`, `README.md`, `package.json`, `pnpm-workspace.yaml`, `astro.config.mjs`, `tsconfig.json`, `public/_headers`, `auditoria-tecnica.md`, los archivos de evidencia anteriores ni las bitácoras anteriores. Sin dependencias nuevas y sin JavaScript nuevo.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos (antes: 52).
- `pnpm build`: OK. Código 0, 2 páginas, 0 líneas con «warn» o «error». `dist/`: 115 archivos, 3.644.663 B (antes, 112 y 3.622.713 B; los tres nuevos son los SVG de las banderas y del logotipo).
- Revisión móvil 360 px y escritorio: Chrome 154.0.8037.98 sin interfaz (protocolo CDP) sobre `pnpm preview`, con el perfil único reutilizable de 04-04.
- Lighthouse: **no ejecutado** (05-01).

Todo lo de esta sección se midió en el navegador o contando sobre `dist/`, salvo lo que se indica como deducido. «Antes» es la compilación de la rama sin cambios (`7b7f4ab`), medida antes de tocar el código. Bajo 768 px se midió con emulación móvil (sin barra de desplazamiento); desde 768 px, con la barra de 15 px de Chrome.

Salvedad: después de las mediciones quité un atributo `slot="junto"` que había quedado en el `<svg>` del logotipo (13 B de HTML). Sobre la compilación final repetí el header, las opiniones, el peso, la página completa y `dist/`. El teclado, las anclas, los servicios y los medios de pago se midieron en la compilación anterior, que solo difiere en ese atributo.

### Línea base contra las referencias del encargo

| Referencia | Medido antes del cambio | ¿Coincide? |
| :--- | :--- | :--- |
| Header de 112 px | 112 px (64 + 48) a 320, 360, 767, 768, 1024, 1280, 1536 y 1920 px | Sí |
| JavaScript: 960 B y 191 B | 960 B (769 + 191) y 191 B | Sí |
| Primera pantalla: 17 px | 17 px | Sí |
| 52 hints | 52 | Sí |
| Peso de 05-04 (137,4 KB) | 140.713 B (137,4 KB) | Sí |

Los tres enlaces del menú ocupaban 239,2 px (de x = 20 a 259,2 px) en todos los anchos.

### Tarea 1 · Menú, anclas y banderas

| Ancho | Enlaces visibles | Con Tab | En el árbol de accesibilidad | Lista de enlaces | Desborde (página, menú y lista) | Banderas |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 320 px | 3 | 3 | 3 | 20–259,2 px | 0 px | Ocultas |
| 360 px | 3 | 3 | 3 | 20–259,2 px | 0 px | 283,1–340 px; a 23,9 px de «Contacto» |
| 767 px | 3 | 3 | 3 | 20–259,2 px | 0 px | 690,1–747 px |
| 768 px | **6** | 6 | 6 | 20–649,2 px | 0 px | 676,1–733 px; a **26,9 px** de «Contacto» |
| 1024 px | 6 | 6 | 6 | 20–649,2 px | 0 px | 932,1–989 px |
| 1280 px | 6 | 6 | 6 | 20–649,2 px | 0 px | 1.188,1–1.245 px |
| 1536 px | 6 | 6 | 6 | 140,5–769,7 px | 0 px | 1.323,6–1.380,5 px |
| 1920 px | 6 | 6 | 6 | 332,5–961,7 px | 0 px | 1.515,6–1.572,5 px |

- Los seis enlaces ocupan 629,2 px, cada uno en una línea. A 768 px caben con «Trabajos en terreno» completo: no hizo falta «Trabajos».
- Bajo 768 px los tres `li` nuevos están en el HTML con `display: none`: no reciben foco ni aparecen en el árbol de accesibilidad de Chrome (3 enlaces a 320, 360 y 767 px).
- **Header: 112 px** (barra de 64 px y menú de 48 px) en los ocho anchos, en la portada y en el 404. Sin cambio.
- El 404 da los mismos resultados; sus enlaces llevan a `/#…`.
- **Banderas:** 56,9 × 16 px (Chile, 24 × 16 px; Argentina, 24,9 × 16 px), pegadas al borde derecho del contenido. Un `div` con `role="img"` y `aria-label="Banderas de Chile y Argentina"`; Chrome lo expone como una imagen con ese nombre. No son enlaces ni reciben foco. A 320 px se ocultan: entre «Contacto» (259,2 px) y el borde (300 px) quedan 40,8 px.

Anclas, con clic real en el menú y esperando a que termine el desplazamiento suave. En cada ancho se recorren los enlaces de ida y de vuelta:

| Ancho | Clics | Sección (header hasta 112 px) | Título | Resultado |
| :--- | :--- | :--- | :--- | :--- |
| 360 × 640 | 4 | 111,7–112 px | 151,7–184 px (`h1`: 174–342 px) | **4 de 4** visibles |
| 768 × 1024 | 10 | 111,6–112 px | 151,6–196 px | **10 de 10** |
| 1024 × 768 | 10 | 111,8–112 px | 151,8–196 px | **10 de 10** |
| 1280 × 800 | 10 | 112–112,2 px | 152–196,2 px | **10 de 10** |
| 1920 × 1080 | 10 | 112 px | 152–196 px | **10 de 10** |

- **44 de 44** clics con el título completo bajo el header y 100 % en la prueba de impacto. Los tres enlaces nuevos: **12 de 12** a 768 y 1280 px (`#quienes-somos`, `#trabajos` y `#opiniones`, dos veces cada uno por ancho).
- Estructura: 1 `h1`, 0 saltos de nivel, 0 `id` duplicados y 0 secciones sin nombre accesible. `main` tiene seis secciones, cada una con su `id`.

### Tarea 2 · Opiniones

| Ancho | Visibles antes | Visibles después | Filas | Alto antes | Alto después | Logotipo |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 320 px | 6 | **10** | 10 de 1 | 1.968 px | 2.826 px | 73,1 × 24 px, bajo el título |
| 360 px | 6 | **10** | 10 de 1 | 1.882 px | 2.664 px | 73,1 × 24 px, bajo el título |
| 768 px | 6 | **10** | 5 de 2 | 1.153 px | 1.533 px | 97,5 × 32 px, a la derecha |
| 1024 px | 6 | **10** | 3, 3, 2 y 2 | 968 px | 1.326 px | 97,5 × 32 px, a la derecha |
| 1280 px | 6 | **10** | 3, 3, 2 y 2 | 924 px | 1.238 px | 97,5 × 32 px, a la derecha |
| 1920 px | 6 | **10** | 3, 3, 2 y 2 | 924 px | 1.238 px | 97,5 × 32 px, a la derecha |

- `<details>`: de 1 a **0**. `<summary>`: de 1 a **0**. «opiniones más» en `dist/`: **0**. «Ver más opiniones en Google»: 1, sin cambio.
- Textos: autor, comentario, fecha, estrellas, enlace y orden de las diez opiniones, leídos del DOM antes y después: **50 de 50 campos iguales**.
- Grilla sin huecos: la última fila ocupa todo el ancho en los seis anchos.
- **Logotipo:** `<svg role="img" aria-label="Google">`, fuera del `h2` (el nombre del título sigue siendo «Lo que dicen nuestros clientes»). Proporción medida 3,047 (original 512:168 = 3,048). `viewBox`, los seis trazados y sus seis colores, comparados por código con el bloque de la iteración: **idénticos**. El archivo `google.svg` es igual, carácter por carácter, al bloque (2.329 caracteres).
- A 360 px el título ocupa dos líneas y el logotipo queda debajo, a la izquierda (x = 20 px); a 1280 px va en la misma línea, a 24 px del título (x = 592,8 px).
- El comentario del SVG (autoría del paquete de logotipos, con la dirección de su licencia) se publica dentro del HTML tal como venía. Es un comentario: no carga nada (0 recursos externos).

### Tarea 3 · Medios de pago

| Ancho | Caja antes | Caja después | Columnas | Desborde |
| :--- | :--- | :--- | :--- | :--- |
| 320 px | 280 × 138 px | 280 × 332 px | 1 | No |
| 360 px | 320 × 138 px | 320 × 220 px | 2 | No |
| 768 px | 713 × 94 px | 713 × 164 px | 4 | No |
| 1024 px | 380,4 × 138 px | 380,4 × 220 px | 2 | No |
| 1280 px | 487,1 × 116 px | 487,1 × 220 px | 2 | No |
| 1920 px | 493,3 × 116 px | 493,3 × 220 px | 2 | No |

- **4 íconos distintos** (comparado el trazado de cada uno), de 24 px, en cuadros de 40 × 40 px, cada uno junto a su nombre visible: «Efectivo», «Transferencia», «Tarjeta de débito» y «Tarjeta de crédito». Debajo, «Emitimos boletas y facturas.».
- Contraste: título y nombres, `#e5e2e1` sobre `#201f1f`, **12,76:1**; «Emitimos boletas y facturas.», `#c8c6c5`, **9,66:1**; íconos, `#ffb59e` sobre `#353534`, **7,22:1**.
- Destacado: borde `primary-container` (`#ff5715`) de 1 px con barra de 4 px a la izquierda y fondo `surface-container`; los bloques vecinos siguen con borde `#353534` y fondo `surface-container-low`.
- El JSON-LD no cambió: `paymentAccepted` sigue con el mismo texto (deducido: `pagos.aceptados` no se tocó).

### Tarea 4 · Tarjetas de servicio

Las ocho, leídas del DOM a 360 y 1280 px: cuadro de 48 × 48 px con ícono de 24 px, separador de 32 × 2 px, tres características con su ícono de verificación y el botón con su `aria-label`.

| Servicio | Ícono | Características |
| :--- | :--- | :--- |
| Traslado en grúa cama | `rv-hookup-outline` (sin cambio) | Plataforma hidráulica inclinable / Autos, SUV, camionetas, furgones y camiones de tres cuartos / Disponible 24/7 |
| Rescate 4x4 y vehículos atascados | `home-repair-service-outline` (sin cambio) | Winche de tiro / Caminos rurales y de cordillera / **Disponible 24/7** |
| Retiro de vehículos siniestrados | `emergency-outline` (sin cambio) | Retiro desde el lugar del accidente / Traslado a talleres y desarmadurías / Disponible 24/7 |
| Puente de batería | `battery-charging-full-outline` | Asistencia en ruta / Para vehículos que no parten / Disponible 24/7 |
| Cambio de neumático | `tire-repair-outline` | Asistencia en ruta / Atención en el lugar / Disponible 24/7 |
| Rescates complejos con camión pluma | `precision-manufacturing-outline` | Cuando la plataforma no puede operar / Levantamiento con camión pluma / Disponible 24/7 |
| Envío de vehículos a todo Chile y a Argentina | `distance-outline` (ya estaba en §6) | Envíos a todo Chile / Envíos a Argentina / Disponible 24/7 |
| Traslado de maquinaria liviana | `front-loader-outline` | Minirretroexcavadoras y minicargadores / Montacargas / Disponible 24/7 |

- **8 de 8** con la misma estructura y 8 íconos distintos. «Disponible 24/7» aparece 8 veces como característica en `dist/index.html` (una novena es el indicador del header). Los diez textos nuevos aparecen tal cual.
- Los ocho mensajes de WhatsApp y las ocho descripciones no cambiaron (leídos del DOM).
- «Servicio en el paso Mamuil Malal»: 0 apariciones. «Mamuil Malal» sigue 2 veces en la página («Quiénes somos» y la nota de cobertura).

| Ancho | Alto antes | Alto después | Límite | Filas | Última fila | Huecos |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 320 px | 3.335 px | 4.428 px | — | 8 de 1 | 280 de 280 px | 0 |
| 360 px | 3.099 px | **4.156 px** | 4.800 px | 8 de 1 | 320 de 320 px | **0** |
| 768 px | 1.992 px | 2.280 px | — | 4 de 2 | 713 de 713 px | **0** |
| 1024 px | 1.403 px | 1.849 px | — | 3, 3 y 2 | 969 de 969 px | **0** |
| 1280 px | 1.325 px | **1.510 px** | 2.200 px | 4 y 4 | 1.225 de 1.225 px | **0** |
| 1536 px | 1.325 px | 1.492 px | — | 4 y 4 | 1.240 de 1.240 px | 0 |
| 1920 px | 1.325 px | 1.492 px | — | 4 y 4 | 1.240 de 1.240 px | **0** |

Las tarjetas de una misma fila tienen el mismo alto (de 391 a 501 px según el ancho). Ninguna desborda.

### Alto de las secciones y de la página

| Ancho | Servicios | Opiniones | Contacto | Página completa |
| :--- | :--- | :--- | :--- | :--- |
| 360 px | 3.099 → 4.156 px | 1.882 → 2.664 px | 3.165,4 → 3.247,4 px | 11.146 → **13.067 px** |
| 768 px | 1.992 → 2.280 px | 1.153 → 1.533 px | 2.788 → 2.858 px | 8.455 → 9.193 px |
| 1024 px | 1.403 → 1.849 px | 968 → 1.326 px | 1.914 → 1.996 px | 6.178 → 7.064 px |
| 1280 px | 1.325 → 1.510 px | 924 → 1.238 px | 1.858 → 1.962 px | 6.042 → 6.645 px |
| 1920 px | 1.325 → 1.492 px | 924 → 1.238 px | 1.858 → 1.962 px | 6.048 → 6.633 px |

«Quiénes somos» y la galería no cambiaron de alto.

### Teclado y botones flotantes

Tab y Mayús + Tab reales, esperando a que `scrollY` quede quieto 400 ms (espera máxima: 1,3 s).

| Página y tamaño | Paradas con Tab | Con Mayús + Tab | Cubiertas | Anillo cubierto |
| :--- | :--- | :--- | :--- | :--- |
| Portada, 320 × 640 y 360 × 640 | 47 | 47 | **0** | 0 |
| Portada, 768 × 1024, 1280 × 800 y 1536 × 800 | 51 | 53 | **0** | 0 |
| 404, 320 × 640 y 360 × 640 | 17 | 17 | **0** | 0 |
| 404, 768 × 1024, 1280 × 800 y 1536 × 800 | 19 | 19 | **0** | 0 |

- 20 recorridos completos, 0 elementos enfocados cubiertos por elementos fijos, por geometría y por prueba de impacto (impacto mínimo: 100 %). Contorno de 3 px `solid` en todas las paradas.
- Paradas: una menos en móvil (el botón del acordeón) y dos más desde 768 px (tres enlaces nuevos menos ese botón). En el 404, tres más desde 768 px.
- **Desde un cuarto, la mitad, tres cuartos y el final** de la página, con 10 pulsaciones de Tab y 10 de Mayús + Tab, a 320, 360, 768, 1280 y 1536 px: 40 recorridos, **395 paradas, 0 cubiertas** y 0 anillos cubiertos.
- Botones flotantes: con Mayús + Tab desde arriba siguen recibiendo el foco, visibles, desde 768 px. Final de la página a 360, 768, 1024, 1280, 1536 y 1920 px, en la portada y el 404: **0 elementos fijos sobre el pie**.
- Objetivos táctiles por prueba de impacto: **0** bajo 44 × 44 px a 320, 360, 768, 1024 y 1280 px (47, 47, 53, 53 y 53 objetivos en la portada; el menor, 45 × 44 px).
- Desborde horizontal de la página: **ninguno** a 320, 360, 768, 1024, 1280, 1536 y 1920 px, en la portada y el 404.

### JavaScript, peso y primera pantalla

| Medición | Antes | Después | Límite |
| :--- | :--- | :--- | :--- |
| JavaScript de la portada | 960 B (769 + 191) | **960 B** | Igual a la línea base |
| JavaScript del 404 | 191 B | **191 B** | Igual a la línea base |
| Archivos `.js` en `dist/` y scripts con `src` | 0 y 0 | 0 y 0 | — |

Presupuesto a 360 × 640 px, densidad 1 y 4G (`effectiveType` 4g), sin desplazarse y con la caché desactivada:

| Recurso | Antes | Después | Límite |
| :--- | :--- | :--- | :--- |
| HTML (gzip) | 16.363 B | 19.978 B | — |
| CSS (gzip) | 6.370 B | 6.338 B | — |
| **HTML más CSS** | 22.733 B (22,2 KB) | **26.316 B (25,7 KB)** | 50 KB |
| **JavaScript en línea** | 960 B | **960 B** | Menos de 1 KB |
| Fuentes: 5 archivos WOFF2 | 97.628 B | 97.628 B | — |
| **Foto del hero** | 19.549 B | **19.549 B (19,1 KB)** | 150 KB |
| Otras fotos al cargar | 0 B | 0 B | — |
| **Total** | 140.713 B (137,4 KB) | **144.296 B (140,9 KB)** | 400 KB |
| **Página completa**, recorrida hasta el final | 192.719 B (188,2 KB) | **196.302 B (191,7 KB)** | Se informa |

- El aumento es solo HTML: 3,5 KB comprimidos (el archivo pasa de 89.278 a 106.519 B sin comprimir).
- A 1280 × 800 px, densidad 1: carga inicial de 177,7 → 174,7 KB; página completa de 249,0 → 252,5 KB. Con las secciones más altas, Chrome ya no adelanta la foto de «Quiénes somos» al cargar.
- Otras pantallas: 360 × 640 a densidad 2 y 3, 174,7 y 222,3 KB; 1920 × 1080, 228,8 KB. Ninguna supera 400 KB.
- 0 recursos de otros dominios.
- CLS: **0** al cargar y **0** al recorrer la página completa a 360 y 1280 px.

Primera pantalla a 360 × 640 px: etiqueta en 152–170 px, `h1` en 174–342 px, «Llamar ahora» en 462–510 px, «Escribir por WhatsApp» en 518–566 px y barra desde 583 px. **17 px** sobre la barra, igual que antes. A 320 × 568 px sigue en −55 px (riesgo aceptado en 04-04).

### `dist/`

| Búsqueda | Antes | Después |
| :--- | :--- | :--- |
| «Ver 4 opiniones más» y «opiniones más» | 1 | **0** |
| `<details>` | 1 | **0** |
| «Yerko» | 4 en `index.html`, 1 en `404.html` | **Igual:** 2 reseñas y la URL de TikTok (pie y JSON-LD); en el 404, la URL del pie |
| «Rozas», la palabra «RUT», «razón social», «©» | 0 | **0** |
| «15 toneladas» | 1 | 1 |
| `PENDIENTE_CLIENTE`, `priceRange`, «todo tipo», «etc.» | 0 | 0 |
| «Disponible 24/7» como característica | 2 | **8** |

### Capturas

Fuera del repositorio, en una sola carpeta, 43 archivos (header, opiniones, medios de pago, servicios, anclas y primera pantalla; los de la línea base llevan el prefijo `antes-`):

`C:\Users\ffeli\AppData\Local\Temp\claude\D--Trabajo-Proyectos-HTML-Proyectos-Personales-Gr-as-Burgos-gruas-burgos-villarrica\55330cfa-b466-44bb-a0a4-01066a36ba92\scratchpad\capturas-05-04-ajustes`

La carpeta es temporal: conviene copiarla si se quiere conservar.

## Criterios de aceptación

Fase A de la tanda:

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con **0 errores y 0 advertencias** (52 hints, igual que antes).
- [x] Bajo 768 px, **3 enlaces** (visibles, con teclado y en el árbol de accesibilidad); desde 768 px, **6**, con **0 px de desborde** a 768, 1024, 1280, 1536 y 1920 px.
- [x] Header de **112 px** a 320, 360, 768 y 1280 px (y a 767, 1024, 1536 y 1920 px); anclas con el título visible: **44 de 44 clics**.
- [x] Los tres enlaces nuevos llevan a su sección con el título visible a 768 y 1280 px: **12 de 12**.
- [x] Banderas visibles sin desborde desde 360 px (**56,9 × 16 px**; ocultas a 320 px), con el nombre accesible aprobado.
- [x] **10 opiniones visibles**; **0** `<details>` y **0** «Ver 4 opiniones más» en `dist/`; textos sin cambios (**50 de 50 campos**).
- [x] Logotipo de Google junto al título, con nombre accesible «Google», a 360 px (**73,1 × 24 px**) y 1280 px (**97,5 × 32 px**).
- [x] Medios de pago: **4 íconos distintos** con su nombre visible; contraste del texto **9,66:1** como mínimo.
- [x] Servicios: **8 de 8** tarjetas con cuadro, separador y tres características, la última «Disponible 24/7»; **4.156 px** a 360 px y **1.510 px** a 1280 px; **0 huecos**.
- [x] JavaScript **960 B**; peso **140,9 KB**, HTML más CSS **25,7 KB**, foto del hero **19,1 KB**.
- [x] Primera pantalla con **17 px**; **0 elementos cubiertos** con Tab y Mayús + Tab a 320, 360, 768, 1280 y 1536 px.
- [x] `dist/` sin «Yerko» fuera de las reseñas y de la URL de TikTok; «Rozas», «RUT», «razón social» y «© 2026»: **0**.

Fase B de la tanda: sin marcar. Es del desarrollador.

## Decisiones tomadas

Ninguna requiere RDA nueva.

1. **«Rescate 4x4»: «Disponible 24/7» reemplaza a «Servicio en el paso Mamuil Malal».** Decisión del desarrollador, consultada antes de empezar: la tanda pedía tres características con «Disponible 24/7» en las ocho y, a la vez, conservar los textos de las tres originales. Quedó anotada en la decisión 14 de la épica.
2. **Nombres de las anclas:** `#quienes-somos`, `#trabajos` y `#opiniones`. Cortos y sin tildes. El `id` va en la sección, así que la regla de `scroll-margin-top` de las anclas existentes las cubre sin tocar `global.css`.
3. **Los enlaces de solo escritorio se ocultan en su `li`** con `hidden md:block`. Con `display: none` no existen para el teclado ni para un lector de pantalla, sin JavaScript.
4. **Banderas: 16 px de alto, cada una en su proporción oficial** (Chile 2:3, Argentina 9:14), con 8 px entre ellas. Colores: azul `#0039a6`, rojo `#d52b1e`, celeste `#74acdf` y blanco. Los valores exactos los elegí yo entre las referencias habituales de cada bandera; la iteración solo pedía «colores oficiales». Sin borde: el blanco se distingue sobre el fondo oscuro del menú.
5. **Banderas ocultas bajo 360 px.** A 320 px quedan 40,8 px libres y las banderas miden 56,9 px. La iteración lo permite.
6. **Banderas como una sola imagen** (`role="img"` en el contenedor, y los dos SVG con `aria-hidden`), para que un lector anuncie una vez el nombre aprobado.
7. **Banderas y logotipo como archivos de `src/assets/`**, incrustados en línea al compilar, igual que el isotipo. Astro publica además una copia de cada SVG en `dist/_astro/` (también lo hace con el isotipo); la página no la pide.
8. **Logotipo fuera del `h2`**, con un slot nuevo en `TituloSeccion`. Dentro del `h2`, el título se habría anunciado como «Lo que dicen nuestros clientes Google».
9. **Tamaño del logotipo:** 24 px de alto en móvil y 32 px desde `md` (su tamaño original). Va directo sobre el fondo oscuro de la sección, sin recuadro.
10. **Opiniones en una grilla de 6 columnas desde `lg`:** tres, tres, dos y dos. Con tres columnas, la décima tarjeta quedaba sola en una fila.
11. **Servicios en una sola grilla:** 2 columnas desde `md`; tres, tres y dos desde `lg`; cuatro y cuatro desde `xl`. Ocho tarjetas en tres columnas dejaban un hueco. Con cuatro columnas a 1280 px cada tarjeta mide 288 px de ancho (antes, 392 px con tres).
12. **Íconos de los servicios nuevos:** batería cargando para el puente de batería; neumático con herramienta para el cambio de neumático; cargador frontal para la maquinaria liviana; y el ícono de larga distancia, que ya estaba en `DESIGN.md` §6 sin uso, para el envío de vehículos. Son cuatro íconos nuevos y uno existente, no cinco nuevos.
13. **Ícono del camión pluma: `precision-manufacturing-outline`** (un brazo articulado). Material Symbols no tiene una grúa pluma (busqué «crane», «hoist» y «lift»). Es la aproximación más cercana del paquete; queda para que el desarrollador la confirme.
14. **Íconos de pago:** billetes (`payments-outline`), banco (`account-balance-outline`), tarjeta con chip (`payment-card-outline`) para débito y tarjeta con banda (`credit-card-outline`) para crédito. Son genéricos del paquete: no hay marcas de tarjetas.
15. **Bloque de pagos destacado con el color de acento:** borde `primary-container` con barra de 4 px y fondo `surface-container`. Una columna bajo 360 px: en dos, los nombres desbordaban a 320 px (lo medí y lo corregí).
16. **`pagos.texto` se reemplaza por `pagos.medios` y `pagos.documentos`** en `negocio.js`. Las palabras publicadas son las aprobadas; cambia la forma (lista con íconos en vez de una frase).
17. **Se elimina la variante compacta de `TarjetaServicio`**, que quedó sin uso.
18. **`DESIGN.md` §5: toqué también las filas `QuienesSomos` y `GaleriaTrabajos`**, solo para quitar «sin ancla propia», que quedaba falso. Y agregué la fila `Resenas`, que no existía.
19. **Los ocho íconos nuevos entraron a la lista del muestrario** (página de desarrollo, no se publica).

## Diferencias entre lo planificado y lo encontrado

| Tema | Diferencia |
| :--- | :--- |
| «Disponible 24/7» en las ocho | Contradecía «las tres originales conservan sus textos» en «Rescate 4x4». Resuelto por el desarrollador (decisión 1). |
| «Trabajos» en vez de «Trabajos en terreno» | No hizo falta: a 768 px sobran 26,9 px. |
| «Cinco íconos nuevos» | Cuatro nuevos y uno que ya estaba en §6 (decisión 12). |
| Peso | La carga inicial sube 3,5 KB, todo HTML. A 1280 px baja 3,0 KB. |
| Mapa de 05-05 | `src/assets/mapa/mapa-cobertura.webp` ahora está en el commit `7b7f4ab` (antes estaba sin seguimiento). Nada lo usa y no llega a `dist/`. No lo toqué. |

Errores míos durante el trabajo, ya corregidos:

- La primera versión del bloque de pagos desbordaba a 320 px (decisión 15).
- Dejé una función sin tipo en `index.astro` y `pnpm check` dio 1 error; la reemplacé por dos constantes.
- El `<svg>` del logotipo salía con un atributo `slot="junto"` sobrante; lo quité envolviéndolo en un `Fragment` (ver la salvedad de «Verificación»).
- Mi primer conteo de opiniones visibles daba 10 en la línea base, porque Chrome conserva la caja de lo que hay dentro de un `<details>` cerrado; lo corregí con `checkVisibility()` (6 antes, 10 después).

## Pendientes y riesgos

- **Fase B de la tanda (desarrollador):** vista previa en Cloudflare, teléfono real, escritorio, Firefox y Safari. Plantilla en `evidencia-05-04-fase-b-ajustes.md`. Incluye repetir `curl.exe -sI` contra la dirección del despliegue, que quedó sin verificar en la fase B anterior.
- **La página es más larga en el teléfono:** +1.921 px a 360 px (unas tres pantallas). Contacto queda 1.839 px más abajo. Es consecuencia directa de mostrar las diez opiniones y las ocho tarjetas completas.
- **Ícono del camión pluma** (decisión 13) y **distinción entre débito y crédito** (decisión 14): revisar a la vista.
- **Logotipo de Google:** es una marca de un tercero. Se usa sin modificar y solo para indicar el origen de las opiniones; sus condiciones de uso no las revisé (no consulto direcciones públicas). Va sobre fondo oscuro, sin recuadro.
- **Colores de las banderas** (decisión 4): si el desarrollador prefiere otros valores, es un atributo en cada SVG.
- **Menú a 768 px:** 26,9 px de holgura. Un enlace más, o un texto más largo, no cabe.
- **Bajada de Servicios y «Nuestro equipamiento»:** siguen nombrando solo autos, SUV y camionetas (decisión anterior del desarrollador).
- **Mapa esquemático con cuatro localidades** hasta 05-05.
- **Medido solo en Chrome.** Sin lector de pantalla real: el árbol de accesibilidad de Chrome no lo reemplaza.
- **LCP y Lighthouse:** no medidos (05-01). La foto del hero no cambió.
- **Margen de JavaScript:** siguen quedando 64 B (960 B de 1.024 B) para 05-02.
- **Cambios ajenos en `git status`,** que no toqué: `AD src/assets/LogoGruasBurgos.svg`, anterior a la épica.
- **Servidores y Chrome.** `pnpm preview` cerrado (puerto 4321 libre), «No dev server is running.» y ningún Chrome sin interfaz en ejecución. No se crearon perfiles nuevos.

## Commit sugerido

`Épica 5 - Iteración 05-04: aplica los ajustes del cliente: menú de seis enlaces con banderas, diez opiniones visibles con el logotipo de Google, medios de pago con íconos y ocho tarjetas iguales`

(194 caracteres, contados con código.)
