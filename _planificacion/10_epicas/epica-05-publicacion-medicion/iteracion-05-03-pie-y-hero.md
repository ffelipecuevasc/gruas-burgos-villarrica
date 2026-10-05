# Iteración 05-03 · Pie de página y hero menos oscuro

- **Épica:** 05 · Ajustes finales, publicación y medición
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/05-03-pie-y-hero`
- **Depende de:** 04-04
- **RDA relacionadas:** RDA-006, RDA-008, RDA-011
- **Hallazgos que cierra:** ajustes B (pie de página) y C (hero) de la Épica 05. No reabre AUD-09-002; protege FA-01 y FA-02 de 04-04.

## Objetivo

Que el pie de página quede limpio y sin espacio muerto, y que los botones flotantes de escritorio dejen de tapar el crédito y las redes. Y que la foto del hero se vea más clara sin perder la lectura del texto.

Hoy, con la página desplazada al final, no hay solape, pero la reserva de 148 px que se agregó en 04-04 deja unos 164 px vacíos bajo la franja del crédito a 1280 px. Medido el 2026-10-05: al quitar la reserva y centrar el crédito, el crédito choca con los botones hasta unos 915 px de ancho, y las redes quedan tapadas 12 px de 44 entre 768 y 1536 px. Por eso se ocultan los botones al llegar al pie.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. La forma de lograrlo la decide quien implementa, dentro de las reglas de la iteración.

## Reglas de la iteración

1. **Verificar antes de corregir.** Cada defecto se reproduce en `pnpm preview` antes de tocar el código.
2. **JavaScript.** Hoy el cliente tiene 769 B (el script del formulario) de los 1.024 B de RDA-006. Lo que se agregue debe caber. Si cumplir los criterios exige superar 1 KB, **detenerse y consultar**: la salida sería una RDA nueva que ajuste el límite.
3. Sin dependencias nuevas. No se tocan `package.json`, `astro.config.mjs` ni `public/_headers`.
4. **No reintroducir FA-01 ni FA-02.** Nada enfocado ni legible queda cubierto por elementos fijos.
5. **Autorizado:** editar `DESIGN.md` §5 (pie y acciones flotantes) y §7 (hero). Cualquier otro cambio en `DESIGN.md` requiere consultar antes.
6. Si cumplir un criterio exige contradecir `DESIGN.md`, **detenerse y consultar**.
7. Los textos aprobados no cambian, salvo los de «Contenido aprobado».
8. No se hacen `commit`, `push` ni cambios de rama. Los hace el desarrollador.
9. Para medir con Chrome, usar un solo directorio de perfil reutilizable. Para medir el foco, esperar a que termine el desplazamiento suave de la página.

## Contenido aprobado de esta iteración

- Se elimina el texto «© 2026 Grúas Burgos».
- El crédito queda como «Sitio desarrollado por Felipe Cuevas», con «Felipe Cuevas» enlazado a `https://felipecuevas.dev`. Es el mismo texto de hoy.
- Se elimina del pie la fila de razón social y RUT, y esos dos campos de `src/data/negocio.js` si no tienen otro uso. El cliente no publica datos tributarios.

Ningún otro texto cambia.

## Tareas

1. **Crédito del pie.**
    - «Sitio desarrollado por Felipe Cuevas» queda centrado horizontalmente en la franja inferior del pie, a todos los anchos, y es el único contenido de esa franja.
    - El espacio bajo el crédito, con la página desplazada al final, es igual al relleno normal de la franja: 32 px o menos desde 768 px de ancho (hoy unos 164 px a 1280 px).
    - La fila de razón social y RUT no existe en el pie ni queda código muerto que dependa de ella.

2. **Botones flotantes de escritorio.**
    - Desde 768 px, los botones «Llamar ahora» y «Escribir por WhatsApp» se ocultan cuando su presencia taparía texto o enlaces del pie, y reaparecen al subir. Los de móvil (barra inferior, menos de 768 px) no cambian: siguen siempre visibles.
    - Un botón oculto no recibe foco, no entra en el orden de Tab ni lo lee un lector de pantalla. Si un botón recibe foco, está visible mientras lo tenga.
    - Ocultar y mostrar los botones no mueve ningún elemento de la página (CLS 0).
    - Con `prefers-reduced-motion: reduce`, no hay transición.
    - Con JavaScript desactivado, los botones siguen funcionando y ningún texto ni enlace del pie queda cubierto, aunque quede espacio extra.

3. **Hero menos oscuro.**
    - Se proponen **tres niveles** de aclarado de la foto (opacidad y velo). La foto, su recorte y su peso no cambian.
    - Cada nivel aumenta la luminancia media de la zona de la foto, medida en capturas, respecto de hoy: al menos 15 %, 30 % y 45 %. Un nivel que no cumpla el contraste de abajo se informa y se descarta.
    - En los tres niveles, el contraste del texto del hero sobre la foto es de 4,5:1 o más (WCAG 1.4.3), medido en los mismos 12 anchos de la bitácora de 04-02 (320, 360, 390, 412, 480, 600, 767, 768, 1024, 1280, 1440 y 1920 px) y con el mismo método: con los textos ocultos, el píxel más claro del fondo bajo la caja de cada texto. Hoy el mínimo es 5,38:1 a 480 px.
    - El desarrollador debe poder ver cada nivel en su navegador antes de elegir. El código final contiene solo el nivel elegido.
    - La primera pantalla a 360 × 640 px se conserva, y el LCP no empeora.
    - `DESIGN.md` §7 se actualiza, incluida la regla de que el velo no baja del 30 % (§7.3): se reemplaza por la que corresponda al nivel elegido, con su contraste medido.

4. **Documentación.**
    - Bitácora nueva `bitacora-05-03-AAAA-MM-DD.md` en `_planificacion/99_bitacora/`, con la plantilla de `_planificacion/README.md` §5.2, fecha real, fin de línea LF y estado final «En revisión». Nunca «Terminada».
    - `DESIGN.md` §5 y §7 actualizados.
    - `registro-log.md`: fila de 05-03, «Iteración activa» y «Próximo hito».

## Criterios de aceptación

**Fase A, local (`pnpm preview`):**

- [ ] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias.
- [ ] Con la página desplazada al final, a 768, 1024, 1280, 1536 y 1920 px: el crédito está centrado (diferencia entre su centro y el de la página de 2 px o menos), el espacio bajo él es de 32 px o menos, y **0 px²** de superposición entre los botones visibles y el crédito o las redes.
- [ ] Desplazando la página en pasos de 100 px desde el final hasta 600 px más arriba, a los mismos cinco anchos: 0 superposición entre botones visibles y texto o enlaces del pie en todos los pasos. Se informa a partir de qué posición se ocultan y reaparecen los botones.
- [ ] Recorrido con Tab y Mayús + Tab a 320, 360, 768, 1024, 1280, 1536 y 1920 px, en la portada y el 404, con la página desplazada al final: **0 elementos enfocados cubiertos**. Un botón oculto no aparece en el recorrido, y uno enfocado está visible.
- [ ] CLS 0 al ocultar y mostrar los botones (medido en navegador, con 0 elementos desplazados).
- [ ] Con `prefers-reduced-motion: reduce`: 0 transiciones en los botones.
- [ ] Con JavaScript desactivado, a los mismos cinco anchos: 0 elementos del pie cubiertos y los dos botones se pueden usar.
- [ ] Menos de 768 px: la barra inferior sigue visible en todo momento y el último elemento del pie queda libre de ella con 8 px o más.
- [ ] Hero: los tres niveles medidos, con luminancia media y contraste mínimo en los 12 anchos. La tabla muestra hoy y los tres niveles.
- [ ] Primera pantalla a 360 × 640 px: etiqueta, `h1` y ambos botones del hero completos con 8 px o más sobre la barra. 0 objetivos táctiles bajo 44 × 44 px. Sin desborde horizontal a 320, 360, 768, 1024 y 1280 px.
- [ ] Presupuesto de peso a 360 × 640 px, densidad 1 y 4G: total de 400 KB o menos; HTML más CSS de 50 KB o menos; **JavaScript de menos de 1 KB** (se informa la cifra exacta); foto del hero de 150 KB o menos.
- [ ] El contenido aprobado coincide con `dist/`: no aparece «© 2026» ni «Grúas Burgos» en la franja del crédito, ni la palabra «RUT» ni «razón social».
- [ ] `git status` muestra cambios solo en `src/`, `_planificacion/` y `DESIGN.md`.

**Fase B, vista previa de `pages.dev` (evidencia en `evidencia-05-03-fase-b.md`):**

- [ ] El desarrollador elige el nivel del hero viendo los tres en escritorio y en el teléfono real.
- [ ] En un Chrome real de escritorio, con la página al final: el crédito centrado, sin vacío y sin botones encima; Tab y Mayús + Tab desde el pie sin elementos cubiertos.
- [ ] En el teléfono (Android, Chrome): la barra inferior no cambió y el hero se ve con la barra de direcciones a la vista.

## Fuera de alcance

- Cualquier otro cambio de contenido o de estructura: 05-04.
- FA-05 (zoom al 400 %) y FA-09 (tamaños de letra en rem): siguen abiertos y diferidos.
- Primera pantalla a 320 × 568 px: riesgo aceptado.
- Medición con PageSpeed Insights sobre producción: 05-01.

## Tareas del desarrollador

1. Elegir el nivel del hero en la vista previa y avisar cuál.
2. Revisar el pie de página en un Chrome de escritorio real y en el teléfono.
3. Completar `evidencia-05-03-fase-b.md` con la plantilla de `evidencia-04-03-fase-b.md`.
4. Hacer `commit`, `push`, el Pull Request y el merge cuando la iteración quede verificada, y marcarla «Terminada».
