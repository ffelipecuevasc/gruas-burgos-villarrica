# Bitácora 05-03 · Pie de página y hero menos oscuro (cierre de la documentación)

- **Fecha:** 2026-10-05
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `iteracion/05-03-pie-y-hero`
- **Estado final:** En revisión

## Resumen

Continuación corta de la iteración 05-03, sin cambios en `src/`. Se registran las cuatro decisiones que el desarrollador tomó el 2026-10-05 tras revisar la fase A ([bitácora de la fase A](bitacora-05-03-2026-10-05.md)): queda elegido el nivel 2 del hero y se aceptan tres comportamientos de los botones flotantes. Con eso, los 13 criterios de la fase A quedan marcados.

Se alinearon los dos documentos que habían quedado desfasados: el comentario de `DESIGN.md` §9 sobre la reserva del pie y el texto de RDA-008.

Se midió el hero a 600 y 768 px, como dato informativo. A 600 px el aclarado es menor que a 360 y 1280 px (+18,0 %). A 768 px **no** resultó menor, como se esperaba, sino mayor en términos relativos (+39,6 %); lo que es menor a 768 px es la luminancia absoluta.

La iteración sigue «En revisión»: falta la fase B del desarrollador.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `…/epica-05-publicacion-medicion/iteracion-05-03-pie-y-hero.md` | Estado con enlace a esta bitácora. Casilla «Con JavaScript desactivado…» marcada, con la nota de aceptación. Nivel 2 elegido y niveles 1 y 3 descartados en el criterio del hero. Dos aceptaciones (foco de teclado y 404 de escritorio) junto a la tarea 2. La fase B sigue sin marcar. |
| `DESIGN.md` | Solo el comentario CSS de §9 sobre la reserva del pie (edición autorizada). |
| `_planificacion/00_producto/decisiones.md` | Solo RDA-008: razón social y RUT no se publican, y la validación de `PENDIENTE_CLIENTE` se adelantó a 04-02. Estado y fecha sin cambios. |
| `_planificacion/00_producto/registro-log.md` | Fila de 05-03, «Iteración activa», «Próximo hito», nota del JavaScript de cliente, una fila menos en «Decisiones por tomar» y una línea del historial. |
| `_planificacion/99_bitacora/bitacora-05-03-cierre-2026-10-05.md` | Nueva. |

Ningún archivo eliminado ni renombrado. No se tocaron `src/`, `public/`, `AGENTS.md`, `README.md`, los archivos de configuración, `auditoria-tecnica.md`, la bitácora de la fase A ni `src/assets/mapa/mapa-cobertura.webp`. Sin dependencias nuevas.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»). `_planificacion/` y `DESIGN.md` están en `.prettierignore`: su fin de línea LF se comprobó con código al escribirlos.
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos (igual que antes).
- `pnpm build`: OK. Código 0, 2 páginas, sin avisos (0 líneas con «warn» o «error» en la salida).
- Revisión móvil 360 px y escritorio: no hubo cambios de interfaz. Se repitió la medición del hero a 360 × 640 y 1280 × 800 px como control, con el mismo resultado de la fase A (0,01135 y 0,01026).
- Lighthouse: **no ejecutado** (05-01).
- `git diff --stat`: cambios en `DESIGN.md`, `decisiones.md`, `registro-log.md` y el archivo de la iteración. La única línea de `src/` es `src/assets/LogoGruasBurgos.svg` (estado `AD`, 0 líneas), que ya estaba así antes de la iteración.

### Decisiones del desarrollador (2026-10-05)

| N.º | Tema | Decisión |
| :--- | :--- | :--- |
| 1 | Sin JavaScript, en tránsito | Se acepta que los botones flotantes pasen sobre el pie mientras se desplaza la página. Al llegar al final quedan limpios (0 px²). Es el comportamiento de cualquier botón fijo; el criterio queda cumplido con esa salvedad. |
| 2 | Botón flotante con foco de teclado | Se acepta que siga visible mientras tiene el foco, aunque tape un poco las redes si la persona baja con el mouse (1.961 px² a 768 px y 248 px² a 1280 px). Ocultarlo haría perder el foco. |
| 3 | Nivel del hero | **Se elige el nivel 2**, el aplicado. No hay cambios de valores. Los niveles 1 y 3 quedan descartados; el 3, además, no cumplía su umbral en móvil (+36,6 % frente a +45 %). |
| 4 | 404 de escritorio | Se acepta que los botones flotantes no se muestren a 800 y 1.024 px de alto, porque el pie está siempre a la vista. |

Las cifras de esta tabla son las medidas en la fase A; hoy no se volvieron a medir.

### Mediciones informativas del hero a 600 y 768 px

No cambian el nivel elegido. Mismo método de la fase A (`mhero.mjs`): luminancia relativa de WCAG promediada sobre la caja de la foto con todo el contenido del hero oculto, y contraste con el píxel más claro del fondo bajo la caja de cada texto.

- **Nivel 2:** medido hoy en Chrome 154 sin interfaz (CDP) sobre `pnpm preview`, con la compilación actual y el perfil único de siempre. Coincide con lo medido en la fase A.
- **Hoy (antes de 05-03):** no se volvió a medir, porque exigiría compilar el código anterior. Son las cifras que se tomaron el 2026-10-05, en la fase A, sobre la compilación de `main` (`3ff7802`) con el mismo script; la bitácora de la fase A no publicaba las de luminancia a 768 px.

| Tamaño | Luminancia, hoy | Luminancia, nivel 2 | Aumento | Gris medio de 8 bits: hoy → nivel 2 |
| :--- | :--- | :--- | :--- | :--- |
| 600 × 900 px | 0,00860 | 0,01015 | **+18,02 %** | 21,16 → 23,08 (+9,07 %) |
| 768 × 1024 px | 0,00710 | 0,00991 | **+39,58 %** | 19,12 → 22,73 (+18,88 %) |
| 360 × 640 px (control) | 0,00857 | 0,01135 | +32,44 % | 21,05 → 24,18 |
| 1280 × 800 px (control) | 0,00764 | 0,01026 | +34,29 % | 19,90 → 23,31 |

| Tamaño | Contraste hoy (etiqueta / `h1` / párrafo) | Contraste nivel 2 | Mínimo del nivel 2 |
| :--- | :--- | :--- | :--- |
| 600 × 900 px | 5,41 / 7,12 / 10,05 | 4,92 / 6,36 / 9,14 | **4,92:1** (etiqueta) |
| 768 × 1024 px | 9,80 / 8,20 / 6,48 | 9,68 / 6,77 / 5,13 | **5,13:1** (párrafo) |

Los dos anchos quedan sobre 4,5:1. El texto de «Escribir por WhatsApp» del hero da 9,53:1 a 600 px y 8,81:1 a 768 px.

## Observaciones de la auditoría del 2026-10-05

1. **Borrador de mapa en la rama.** La rama traía `src/assets/mapa/mapa-cobertura.webp` (1400 × 1050 px, 774 KB, sin perfil de color), que no cumple la especificación de 05-05 (1400 × 1400 px, 250 KB o menos, sRGB). El desarrollador lo saca de la rama. Las dimensiones y el perfil son los de la auditoría; aquí solo se comprobó que el archivo existe y que ningún archivo de `src/` lo usa. No se tocó.
2. **JavaScript de cliente: 960 B de 1.024 B. Quedan 64 B de margen**, lo que condiciona 05-02. Comprobado hoy sobre `dist/index.html` contando los bytes con código: dos scripts en línea, de 769 B y 191 B.
3. **Aclarado del hero en los anchos intermedios.** Lo esperado era que a 768 px el aclarado fuera menor que a 360 y 1280 px. La medición da otra cosa:
    - A **768 px el aumento relativo es mayor**: +39,58 %, frente a +32,44 % a 360 px y +34,29 % a 1280 px.
    - A 768 px sí es **menor la luminancia absoluta** del nivel 2: 0,00991, frente a 0,01135 a 360 px y 0,01026 a 1280 px. Ya partía más oscuro (0,00710). La causa no se midió; por lectura del código, a ese ancho la tarjeta de despacho va debajo del texto y el bloque es más alto (654 px medidos, frente a 387 px a 1280 px), con lo que cambia el recorte de la foto.
    - El ancho donde **el aumento relativo es menor** es 600 px: +18,02 %. Corresponde al tramo de 430 a 767 px, donde el velo se dejó más cerrado para conservar el contraste (decisión 14 de la fase A).

## Criterios de aceptación

Fase A: 13 de 13 marcados. Solo cambió esta casilla; el resto sigue como en la bitácora de la fase A.

- [x] Con JavaScript desactivado, a los cinco anchos. Aceptado por el desarrollador el 2026-10-05: al final de la página 0 px²; en tránsito los botones pasan sobre el pie, como cualquier botón fijo.

De esta continuación:

- [x] Iteración actualizada: casilla marcada con su nota, nivel 2 elegido, dos aceptaciones junto a la tarea 2 y estado «En revisión».
- [x] `DESIGN.md` §9: solo el comentario de la reserva del pie. `scroll-padding-bottom` no cambió: `global.css` sigue con `9.25rem` desde `md`, y `Footer.astro` reserva ese alto solo sin JavaScript (`md:noscript:pb-37`). Comprobado leyendo el código.
- [x] RDA-008 alineada, con estado «Aceptada» y fecha sin cambios. Ninguna otra RDA tocada.
- [x] Mediciones a 600 y 768 px registradas. Con la salvedad de que «hoy» es la medición de la fase A.
- [x] `pnpm format:check`, `pnpm check` y `pnpm build` limpios; sin cambios en `src/` por esta continuación.

Fase B: sin marcar. Es del desarrollador.

## Decisiones tomadas

Ninguna requiere RDA.

1. **«Hoy» no se volvió a medir.** Se usaron las cifras de la fase A sobre la compilación de `main`, tomadas el mismo día con el mismo script y el mismo Chrome. Medirlas de nuevo exigía compilar el código anterior, y esta continuación no toca `src/` ni cambia de rama.
2. **La casilla de la fase B «El desarrollador elige el nivel del hero…» queda sin marcar**, como pide el encargo, aunque el nivel ya está elegido: la marca el desarrollador con su evidencia.
3. **La fila «Nivel de aclarado del hero» sale de «Decisiones por tomar»** en `registro-log.md`, porque ya está decidida. Queda anotado en el historial.
4. **En RDA-008 se quitó «datos de facturación» de la lista de lo que exporta `negocio.js`** y se agregó la frase sobre razón social y RUT, para que la lista describa lo que el módulo exporta hoy.
5. **La nota del JavaScript de cliente va en tres lugares del registro:** «Iteración activa», la fila de Web Analytics de «Decisiones por tomar» (es la decisión que ese margen condiciona) y el historial.

## Pendientes y riesgos

- **Fase B del desarrollador:** revisar el pie en un Chrome de escritorio real y en el teléfono, completar `evidencia-05-03-fase-b.md`, y hacer commit, push, Pull Request y merge.
- **Observación 3 distinta de lo esperado.** Si la intención era dejar constancia de un aclarado menor, el dato que lo respalda es el de 600 px, no el de 768 px. No cambia el nivel elegido.
- **Margen de 64 B de JavaScript.** Cualquier script propio que agregue 05-02 debe caber ahí o pedir una RDA.
- **Mapa borrador.** Sigue en la rama hasta que el desarrollador lo saque.
- **Sigue pendiente de la fase A:** Firefox, Safari, teléfono real y lector de pantalla no se probaron.
- **Estado previo.** `git status` sigue mostrando `AD src/assets/LogoGruasBurgos.svg`, anterior a la iteración.
- **Servidores y Chrome.** `pnpm preview` cerrado (puerto 4321 libre), «No dev server is running.» y ningún Chrome sin interfaz en ejecución. No se crearon perfiles nuevos.

## Commit sugerido

`Épica 5 - Iteración 05-03: registra las decisiones del desarrollador (nivel 2 del hero y tres aceptaciones de los botones flotantes) y alinea DESIGN.md §9 y RDA-008; sigue en revisión`

(183 caracteres, contados con código.)
