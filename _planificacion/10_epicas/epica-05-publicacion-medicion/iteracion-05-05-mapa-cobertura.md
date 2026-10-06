# Iteración 05-05 · Mapa de cobertura con imagen real

- **Épica:** 05 · Ajustes finales, publicación y medición
- **Estado:** En revisión (fase A medida el 2026-10-06, [bitacora-05-05-2026-10-06](../../99_bitacora/bitacora-05-05-2026-10-06.md); falta la fase B del desarrollador)
- **Rama sugerida:** `iteracion/05-05-mapa-cobertura`
- **Depende de:** 05-04 (terminada) y el mapa aprobado por el desarrollador, que ya está en el repositorio
- **RDA relacionadas:** RDA-006, RDA-009, RDA-011
- **Hallazgos que cierra:** ajuste A de la Épica 05 (mapa de cobertura).

## Objetivo

Reemplazar el mapa esquemático (`MapaEsquematico.astro`, un SVG propio) por la imagen real aprobada por el desarrollador, con su texto alternativo y su atribución, sin romper el presupuesto de peso ni el diseño.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. La imagen no se edita ni se vuelve a codificar: se integra tal como está.

## Imagen aprobada

El desarrollador aprobó la imagen tal como está. Ya figura en el repositorio (entró con la rama de 05-04) y no se usa todavía.

| Característica | Valor |
| :--- | :--- |
| Archivo | `src/assets/mapa/mapa-cobertura.webp` |
| Dimensiones | 1400 × 1400 px (proporción 1:1) |
| Formato y peso | WebP, RGB, 794.410 bytes |
| SHA-256 | `cf323536c60881b08323e46101af04020b0445388d8c0ab6dff9dd367ac2b2ff` |
| Contenido | Mapa base de OpenStreetMap con un círculo rojo semitransparente centrado en Villarrica, que abarca de Freire a Pucón |
| Atribución | «© colaboradores de OpenStreetMap», visible junto al mapa (confirmada por el desarrollador) |

El peso del archivo fuente no cuenta contra el presupuesto de la página: Astro entrega variantes optimizadas y la imagen se carga solo al acercarse a ella. Los nombres que trae el mapa base dentro de la imagen no son texto de la página y no cambian la lista de cobertura, que sigue en texto.

## Reglas de la iteración

1. Solo se publica lo de «Contenido aprobado». **Si la imagen del repositorio no tiene el SHA-256 de arriba, o no coincide con la descripción del texto alternativo aprobado, detenerse y consultar** (en el segundo caso, proponer el texto).
2. La imagen está aprobada tal como está: no se evalúan los nombres del mapa base contra la lista «No publicar» ni se detiene la iteración por ellos.
3. Sin dependencias nuevas. No se tocan `package.json`, `astro.config.mjs` ni `public/_headers`. Sin JavaScript nuevo.
4. **Autorizado:** editar `DESIGN.md` §7 (mapa de cobertura) y §5 solo si alguna fila menciona el mapa; la decisión 7 de `definicion-epica-05.md`; eliminar `src/components/MapaEsquematico.astro`; y los archivos de documentación de esta iteración.
5. No se hacen `commit`, `push` ni cambios de rama. Los hace el desarrollador.
6. Las fuentes remotas pueden no descargar al medir: no es un criterio de esta iteración.

## Contenido aprobado de esta iteración

- Texto alternativo del mapa: «Mapa de la zona de atención: un círculo rojo centrado en Villarrica, entre Freire y Pucón.»
- Atribución: «© colaboradores de OpenStreetMap».
- La lista de localidades en texto se mantiene tal como queda en 05-04 (Villarrica, Pucón, Licán Ray, Coñaripe y Freire).

## Tareas

1. **Integrar la imagen.** El mapa del bloque «Dónde atendemos» es la imagen, con su texto alternativo aprobado, su proporción real (1:1) declarada para que no haya desplazamiento de diseño, y carga diferida. Astro genera las variantes optimizadas.
2. **Atribución.** El texto «© colaboradores de OpenStreetMap» queda visible junto al mapa, legible y sin cubrirse con elementos fijos.
3. **Retirar lo anterior.** `MapaEsquematico.astro` se elimina. No quedan referencias al mapa esquemático en `src/` ni en la documentación vigente (las bitácoras y las líneas de historial son inmutables y quedan como están).
4. **Presupuesto.** La página no rompe el presupuesto de peso; la imagen no se descarga al abrir la página en móvil porque queda bajo la primera pantalla.
5. **Documentación.**
   - Bitácora nueva `bitacora-05-05-AAAA-MM-DD.md` en `_planificacion/99_bitacora/`, con la plantilla de `_planificacion/README.md` §5.2, fecha real, fin de línea LF y estado final «En revisión». Nunca «Terminada».
   - `DESIGN.md` §7 (mapa como imagen estática local con atribución) y §5 si corresponde.
   - `definicion-epica-05.md`, decisión 7: «**Mapa.** Imagen local aprobada por el desarrollador: mapa base de OpenStreetMap con un círculo rojo centrado en Villarrica. Las cinco localidades y la región se dicen en texto, no en la imagen (05-05).»
   - `registro-log.md`: fila de 05-05, «Iteración activa», «Próximo hito» y una línea del historial.
   - Archivo vacío `evidencia-05-05-fase-b.md` para el desarrollador, con la estructura de `evidencia-05-04-fase-b-ajustes.md`, adaptada a los criterios de la fase B.

## Criterios de aceptación

**Fase A, local (`pnpm preview`):**

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias (se informan los hints; hoy 52). **Medido:** sin diferencias; 0 errores, 0 advertencias y 52 hints en 40 archivos; build con código 0, 2 páginas y 0 líneas con «warn» o «error».
- [x] El archivo `src/assets/mapa/mapa-cobertura.webp` sigue idéntico: 1400 × 1400 px, 794.410 bytes y el SHA-256 de arriba, antes y después. **Medido:** WebP de 1400 × 1400 px, 794.410 B y SHA-256 `cf323536…2ff`, antes y después.
- [x] A 360, 768, 1024, 1280 y 1920 px (y 320, que se informa), la imagen se ve completa dentro de su contenedor, sin recorte ni deformación (relación de aspecto 1:1 con 1 % de tolerancia) y sin desborde horizontal. **Medido:** 318 × 318, 576 × 576, 546,58 × 546,58, 576 × 576 y 576 × 576 px (278 × 278 a 320 px); relación 1,0000 en los seis anchos; sin recorte; 0 px de desborde.
- [x] Alto reservado antes de cargar: el contenedor mide lo mismo antes y después de que la imagen cargue, y los cambios de diseño (CLS) medidos en una carga con desplazamiento hasta el mapa, a 360 y 1280 px, suman 0. **Medido:** contenedor de 354 px a 360 px y de 612 px a 1280 px, con la imagen bloqueada y con la imagen cargada; 0 entradas `layout-shift` (suma 0) en las cuatro cargas.
- [x] Texto alternativo igual al aprobado, carácter por carácter. La lista de localidades en texto sigue en la página, con las cinco localidades. **Medido:** `alt` idéntico; lista con Villarrica, Pucón, Licán Ray, Coñaripe y Freire.
- [x] La atribución «© colaboradores de OpenStreetMap» es visible junto al mapa a 360 y 1280 px, con texto de 12 px o más, contraste de 4,5:1 o más, y sin quedar cubierta por elementos fijos. **Medido:** texto idéntico, a 9 px bajo el mapa; 13 px; 11,34:1 (`#c8c6c5` sobre `#0e0e0e`, colores calculados); 0 % del texto cubierto en cinco posiciones de desplazamiento, a 360 × 640 y 1280 × 800 px.
- [x] Carga diferida: a 360 × 640 px, la imagen no se pide al cargar la página y se pide al acercarse a ella. Se informan las dimensiones, el formato y los bytes de la variante que se entrega a 360 px. **Medido:** 0 pedidos del mapa al cargar (solo la foto del hero); se pide cuando le faltan unos 1.200 px para entrar en pantalla. Variante: AVIF de 320 × 320 px y 10.194 B (densidad 1).
- [x] Peso a 360 × 640 px, densidad 1 y 4G: total de 400 KB o menos; HTML más CSS de 50 KB o menos; JavaScript de menos de 1 KB (960 B en la portada y 191 B en el 404, sin cambios); foto del hero de 150 KB o menos. **Medido:** 147,7 KB (151.196 B); 32,4 KB (33.216 B); 960 B y 191 B; 19,1 KB (19.549 B).
- [x] No existe `MapaEsquematico.astro` ni queda ninguna referencia a él en `src/` ni en la documentación vigente. **Medido:** el archivo no existe; 0 coincidencias en `src/`, `DESIGN.md`, `README.md` y `AGENTS.md`. Quedan, sin tocar, las de este archivo (que describe el retiro), las del historial y las de documentos cerrados (detalle en la bitácora).
- [x] Primera pantalla a 360 × 640 px sin cambios (17 px sobre la barra). 0 elementos enfocados cubiertos por elementos fijos en un recorrido con Tab y Mayús + Tab a 360 y 1280 px. Header de 112 px. **Medido:** 17 px; 0 cubiertos en 47 y 47 paradas a 360 px y en 51 y 53 a 1280 px; header de 112 px.
- [x] Se informa el alto del bloque «Dónde atendemos» y su diferencia con el anterior a 360, 768, 1024, 1280 y 1920 px, sin huecos ni superposiciones. Se informa además la altura en pantalla del rótulo «Villarrica» del mapa a 360 px (dato informativo, sin umbral). **Medido:** 939 (−55,44), 1.145 (+36), 623,58 (+6,58), 653 (+36) y 653 px (+36); a 320 px, 899 (−44,19); 0 px² de superposición. Rótulo «Villarrica» en negrita: unos 6,8 px de alto a 360 px (el del mapa base, unos 4 px).
- [x] `git status` muestra cambios solo en `src/`, `_planificacion/` y `DESIGN.md`. **Medido:** así es; aparte, el cambio ajeno `AD src/assets/LogoGruasBurgos.svg`, anterior a la iteración.

**Fase B, vista previa de `pages.dev` (evidencia en `evidencia-05-05-fase-b.md`):**

- [ ] El desarrollador revisa el mapa en el teléfono real y en escritorio: se ve completo, el círculo rojo queda centrado en Villarrica y la atribución es visible.
- [ ] El desarrollador deja la confirmación escrita de la fuente y la licencia del mapa base (OpenStreetMap, sin Google Maps) y de que la atribución cumple la licencia.
- [ ] `curl.exe -sI` contra la dirección de la vista previa devuelve `200 OK` y `x-robots-tag: noindex`.

## Fuera de alcance

- Editar, recolorear o volver a codificar la imagen.
- «Toda La Araucanía» y «traslado a todo Chile» van en texto (05-04), no en la imagen.
- Un mapa regional o interactivo, un iframe de Google Maps, zoom o ampliación de la imagen (requeriría JavaScript).
- El enlace «Cómo llegar» se mantiene como está.

## Tareas del desarrollador

1. Completar `evidencia-05-05-fase-b.md` con la vista previa de la rama, incluida la confirmación escrita del origen y la licencia del mapa base.
2. Hacer `commit`, `push`, el Pull Request y el merge cuando la iteración quede verificada, y marcarla «Terminada».