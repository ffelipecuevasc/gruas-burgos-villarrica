# Iteración 04-04 · Corrección de la auditoría local

- **Épica:** 04 · SEO técnico, rendimiento y accesibilidad
- **Estado:** Terminada (verificada por el desarrollador el 2026-10-02, commit `57de857`)
- **Rama sugerida:** `iteracion/04-03-auditoria` (continúa en la misma rama; la vista previa de Cloudflare se reconstruye con cada push)
- **Depende de:** 04-03 (fase A)
- **RDA relacionadas:** RDA-006, RDA-009, RDA-011
- **Hallazgos que cierra:** FA-01, FA-02, FA-03, FA-04, FA-06, FA-07, FA-08, FA-10 y FA-11 de la bitácora de la fase A (`bitacora-04-03-fase-a-2026-10-02.md`). La Auditoría 09 los registra como `AUD-09-NNN` en la fase B.

## Objetivo

Corregir los defectos que halló la auditoría local para que la fase B (PageSpeed, vista previa y dominio) mida la versión corregida y no una con un defecto de severidad Alta abierto. El defecto principal es FA-01: con el teclado, algunos elementos enfocados quedan totalmente tapados por la barra móvil o por los botones flotantes (WCAG 2.4.11, AA).

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. La forma de lograrlo la decide quien implementa, dentro de las reglas de la iteración.

## Reglas de la iteración

1. **Verificar antes de corregir.** Cada defecto se reproduce en `pnpm preview` antes de tocar el código. Si no se reproduce, no se corrige y se registra con la evidencia. Las correcciones propuestas en la bitácora de la fase A son una referencia, no una instrucción.
2. Sin dependencias nuevas, sin JavaScript nuevo en el cliente (RDA-006: menos de 1 KB en total) y sin cambiar `package.json`, `astro.config.mjs` ni `public/_headers`.
3. Los textos aprobados no cambian. El único texto nuevo es el de «Contenido aprobado».
4. **Autorizado:** editar `DESIGN.md` §5 solo para documentar el enlace «Saltar al contenido» como componente nuevo. Cualquier otro cambio en `DESIGN.md` requiere consultar antes.
5. Si cumplir un criterio exige contradecir `DESIGN.md` (por ejemplo, cambiar una variante de botón o un tamaño de la escala), **detenerse y consultar**.
6. Fuera de esta iteración quedan FA-05 (zoom al 400 %), FA-09 (tamaños de letra en rem) y el estado de 320 × 568 px (riesgo aceptado). Se mantienen abiertos o aceptados y se registran así en la bitácora.
7. No se hacen `commit`, `push` ni cambios de rama. Los hace el desarrollador.
8. Para medir con Chrome, usar **un solo directorio de perfil reutilizable** y no crear carpetas nuevas en `%TEMP%` por cada ejecución (la fase A dejó 37 carpetas, unos 1,3 GB).

## Contenido aprobado de esta iteración

**Enlace para saltar al contenido (FA-11)**

- Texto: «Saltar al contenido».
- Primer elemento enfocable de la página, oculto a la vista hasta recibir el foco, y lleva a la sección principal (`main`).

Ningún otro texto cambia.

## Tareas

1. **Foco siempre visible (FA-01, FA-02, FA-03).**
    - Al recorrer la portada y el 404 con Tab y con Mayús + Tab, ningún elemento enfocado queda cubierto, ni en parte, por la barra móvil, por los botones flotantes ni por el header fijo. Incluye los elementos del final de la página (enlaces de redes, correo, «Ver en Google», el desplegable «¿Qué le pasó?» y el crédito «Sitio desarrollado por Felipe Cuevas»).
    - Al llegar al final de la página, a todos los anchos, el crédito y las redes del pie se ven completos y no quedan bajo los botones flotantes.
    - El anillo de foco de 3 px se ve completo (cuatro lados) en los botones de la barra móvil y en «Inicio» del header, sin recortes.
    - Las anclas `#inicio`, `#servicios` y `#contacto` siguen quedando bajo el header.

2. **Peso de imágenes (FA-04).** Los `sizes` del hero y de la galería coinciden con el ancho que las fotos ocupan realmente a 360, 768, 1024, 1280 y 1920 px, con una diferencia de 10 % como máximo. No se achican ni se cambian las fotos. El presupuesto de 04-02 se mantiene, medido a 360 × 640 px con densidad 1 y red 4G (hoy 167 KB en total); las cifras con densidad alta y con red 3G se informan, pero no se exigen.

3. **Marca y 404 (FA-06, FA-07, FA-10).**
    - Un clic o un toque sobre el isotipo del header lleva al inicio, igual que el nombre, y los lectores de pantalla no anuncian la marca dos veces.
    - En el 404 a 360 × 640 px, el botón «Volver al inicio» se ve completo y tocable (al menos 44 × 44 px) sin desplazarse, sobre la barra inferior con 8 px de margen o más, sin cambiar los textos aprobados.
    - En el 404, «Volver al inicio» se distingue del fondo: su borde o relleno tiene contraste de al menos 3:1 (WCAG 1.4.11).

4. **Espaciado de texto (FA-08).** Con el espaciado de WCAG 1.4.12 aplicado (interlineado 1,5; espacio entre párrafos 2 veces el tamaño; espacio entre letras 0,12 em; entre palabras 0,16 em), el header no recorta ni superpone texto a 360 y a 1280 px, y lo mismo ocurre en el 404 y en el pie.

5. **Enlace para saltar al contenido (FA-11).** Se implementa con el texto aprobado: aparece al enfocarlo con Tab, tiene el foco de 3 px y un tamaño táctil de al menos 44 × 44 px, y al activarlo el foco queda en el contenido principal con su título visible bajo el header. No agrega JavaScript.

6. **Documentación.**
    - Bitácora nueva `bitacora-04-04-AAAA-MM-DD.md` en `_planificacion/99_bitacora/`, con la plantilla completa de `_planificacion/README.md` §5.2, fecha real, fin de línea LF y estado final «En revisión». Para cada defecto: reproducido o no, cómo se comprobó y el resultado.
    - `DESIGN.md` §5 incluye el enlace «Saltar al contenido».
    - `registro-log.md`: fila de 04-04, «Iteración activa» y «Próximo hito».
    - `auditoria-tecnica.md` no se toca: la Auditoría 09 se registra en la fase B de 04-03.

## Criterios de aceptación

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias. **Medido (2026-10-02): `format:check` sin diferencias; `check` con 0 errores, 0 advertencias y 52 hints; `build` con código 0, 2 páginas y sin avisos.**
- [x] Recorrido completo con Tab y con Mayús + Tab (esperando a que termine el desplazamiento suave de la página, que está activo) a 320 × 568, 360 × 640, 768 × 1024, 1280 × 800 y 1536 × 864 px, en la portada y el 404: **0 elementos enfocados cubiertos por elementos fijos**. Se informa el número de paradas por ancho y la cobertura máxima medida. **Medido (2026-10-02): 0 cubiertos y cobertura máxima de 0 % en los diez recorridos, con Tab y con Mayús + Tab. Paradas: portada 44, 44, 47, 47 y 47; 404 17, 17, 18, 18 y 18. Antes: de 2 a 10 cubiertos por recorrido, con hasta 100 %. Prueba de estrés adicional: 0 de 1.848 casos.**
- [x] Con la página desplazada hasta el final, a 360, 768, 1024, 1280 y 1536 px: 0 elementos fijos superpuestos sobre el crédito y las redes del pie. **Medido (2026-10-02): 0 superpuestos en los cinco anchos (y a 1920 px), en la portada y el 404. Antes: hasta 81 % del crédito y 27 % de las redes.**
- [x] Anillo de foco con los cuatro lados pintados en cada elemento de la barra móvil y del header (se informa el porcentaje medido). **Medido (2026-10-02): cuatro lados pintados en todas las paradas de los diez recorridos; anillo pintado al 99 % a 101 % del esperado; en la barra, 100 % (antes, solo el lado superior en «Llamar» y dos lados en «WhatsApp»; en «Inicio», 2 de 3 px a la izquierda).**
- [x] `sizes` del hero y de la galería con una diferencia de 10 % o menos respecto del ancho real en los cinco anchos. Peso a 360 × 640 px, densidad 1 y 4G: total de 400 KB o menos, HTML más CSS de 50 KB o menos, JavaScript de menos de 1 KB y foto del hero de 150 KB o menos. Se adjunta la tabla comparada con la de 04-02, y se informan las cifras con densidad 2 y 3 y con 3G. **Medido (2026-10-02): diferencia máxima de 2,3 % en los cinco anchos (antes, +20,6 % y −34,3 % en el hero). Total 164.126 B (160,3 KB); HTML más CSS 21.862 B; JavaScript 769 B; hero 19.549 B. Tabla comparada y cifras de densidad alta y 3G en la bitácora.**
- [x] Isotipo clicable y marca anunciada una sola vez (árbol de accesibilidad). **Medido (2026-10-02): un clic real sobre el isotipo lleva de `/no-existe` a `/`; área real del enlace 174 × 48 px (antes 126 × 48); el árbol de accesibilidad del header tiene un solo enlace «Grúas Burgos» y ninguna imagen.**
- [x] 404 a 360 × 640 px: «Volver al inicio» con al menos 44 × 44 px visibles sin desplazarse y 8 px o más sobre la barra; contraste de al menos 3:1 (se informa la cifra). **Medido (2026-10-02): área real de 171 × 49 px sin desplazarse y 19 px sobre la barra (antes 169 × 21 px y −27 px); borde `outline` con 5,87:1 contra el fondo (antes, relleno con 1,04:1). Decisión del desarrollador del 2026-10-02.**
- [x] Con el espaciado de texto de WCAG 1.4.12: sin recortes ni superposiciones en header, 404 y pie a 360 y 1280 px. **Medido (2026-10-02): 0 recortes y 0 superposiciones en header, contenido, pie y barra, a 360, 1280 y 320 px, en la portada y el 404 (antes, el nombre de la marca se recortaba 8 px).**
- [x] «Saltar al contenido»: primera parada de Tab, visible solo al enfocarlo, con foco de 3 px y al menos 44 × 44 px; al activarlo, el foco queda en `main` y el título se ve bajo el header. **Medido (2026-10-02): primera parada en las dos páginas; fuera de la pantalla hasta el foco (y de −88 a −40 px); enfocado mide 200 × 48 px (área real 201 × 49), con anillo de 3 px en sus cuatro lados; tras Enter el foco queda en `main#contenido` y el `h1` empieza en 174 px (182 y 257 px en el 404), bajo el header de 112 px. Sin JavaScript nuevo.**
- [x] Primera pantalla a 360 × 640 px sin cambios: etiqueta, `h1` y ambos botones completos con al menos 8 px sobre la barra. 0 de los elementos interactivos bajo 44 × 44 px. Sin desborde horizontal a 320, 360, 768, 1024 y 1280 px. **Medido (2026-10-02): posiciones idénticas a las de 04-02 y 17 px sobre la barra; 0 objetivos bajo 44 × 44 px a 320, 360, 768 y 1280 px (el menor, 45 × 44); sin desborde en los cinco anchos ni a 1536 px.**
- [x] JavaScript total sigue por debajo de 1 KB; el contenido aprobado coincide con `dist/`; `git status` muestra cambios solo en `src/` y `_planificacion/`, más `DESIGN.md` §5. **Medido (2026-10-02): 1 script en línea de 769 B y 0 archivos `.js`; la única diferencia de texto en `dist/` es «Saltar al contenido», una vez por página; `git status` solo muestra `src/`, `_planificacion/` y `DESIGN.md`.**

## Fuera de alcance

- FA-05 (zoom al 400 %, 87 px de alto útil; cambia `DESIGN.md` §5) y FA-09 (tamaños de letra en rem; cambia `DESIGN.md` §3.1 y §9): quedan abiertos con severidad Media y Baja, y no bloquean el criterio de «sin hallazgos de severidad Alta».
- Primera pantalla a 320 × 568 px: riesgo aceptado por el desarrollador (2026-10-02).
- Medición del LCP y del tiempo de bloqueo con PageSpeed Insights, vista previa en Cloudflare y dominio propio: fase B de 04-03.