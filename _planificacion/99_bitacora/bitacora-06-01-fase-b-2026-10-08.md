# Bitácora 06-01 · Carrusel en la sección de opiniones (fase B)

- **Fecha:** 2026-10-08
- **Agente:** Claude Code (Claude Sonnet 5.5)
- **Rama:** `main` (el código del carrusel, commit `af4b832866996269d0110408357d58cb66a41deb`, ya está publicado; la iteración se trabajó en `iteracion/06-01-carrusel-opiniones`)
- **Estado final:** En revisión

## Resumen

Esta bitácora registra la evidencia de la fase B entregada por el desarrollador en `evidencia-06-01-fase-b.md`, sin interpretarla de más. El agente no tocó código, no consultó URLs públicas y no repitió ninguna medición: todo lo de la sección «Evidencia» viene del desarrollador. La bitácora de la fase A es [`bitacora-06-01-2026-10-08`](bitacora-06-01-2026-10-08.md) y no se modificó.

Una corrección del desarrollador, dada durante esta sesión: en la sección 1.1 de la evidencia, la respuesta a «¿Al deslizar el carrusel la página se mueve hacia los lados?» figura como «Sí»; el desarrollador confirmó que fue un error y que la respuesta correcta es **«No»**. El archivo de evidencia no se modificó (es del desarrollador): el desarrollador debe corregirlo.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/99_bitacora/bitacora-06-01-fase-b-2026-10-08.md` | Nuevo. Esta bitácora |
| `_planificacion/10_epicas/epica-06-evolucion-diseno/iteracion-06-01-carrusel-opiniones.md` | Línea «Estado» y casillas (fase A: Lighthouse; fase B: las tres) |
| `_planificacion/00_producto/registro-log.md` | Cabecera, enlaces de 06-01 y fila de historial |
| `_planificacion/00_producto/auditoria-tecnica.md` | Solo la Auditoría 11: estado de AUD-11-001 a AUD-11-004 y una línea nueva |

Sin cambios: `src/`, `public/`, `DESIGN.md`, `decisiones.md`, `evidencia-06-01-fase-b.md` y los archivos protegidos. Cambio ajeno al encargo, sin tocar: `AD src/assets/LogoGruasBurgos.svg`.

## Evidencia (del desarrollador, 2026-10-08, 11:42)

Equipos informados: PC con Windows 10 Pro con Google Chrome y Mozilla Firefox, y teléfono Android con Chrome y TalkBack. Pruebas hechas por el desarrollador.

**Vista previa:** despliegue de la rama en «Success», con el commit `af4b832866996269d0110408357d58cb66a41deb`.

**Teléfono Android (Chrome):** una opinión a la vez; el carrusel se desliza con el dedo hacia ambos lados; botones y puntos funcionan; se llega a la opinión 10 y el botón de siguiente queda apagado; «Ver en Google» abre la reseña; nada se mueve solo. La página no se mueve hacia los lados al deslizar (respuesta corregida por el desarrollador, ver el resumen). Sin observaciones.

**PC:** Chrome a 1280 px o más, tres opiniones a la vez y las flechas avanzan de a tres; a unos 800 px, dos; se arrastra con el ratón; con Tab se llega a los enlaces, a las flechas y a los puntos y la opinión enfocada queda a la vista. Firefox: flechas, puntos y arrastre funcionan igual. Sin observaciones.

**TalkBack:** anuncia la región como «Opiniones de clientes» (el desarrollador no anotó si dice además «carrusel»); anuncia «Opinión N de 10»; pronuncia bien la descripción «opinión» (AUD-11-003); anuncia los botones con su nombre y como deshabilitado el del extremo (AUD-11-002); anuncia los puntos como «Ir al grupo N de M»; se pueden leer las diez opiniones completas.

**PageSpeed Insights en producción (3 ejecuciones por dispositivo):**

| Dispositivo | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Móvil, ejecuciones 1, 2 y 3 | 94, 96, 96 (mediana 96) | 100 | 100 | 100 | 2,5 s | 0 | 20, 0 y 0 ms |
| Escritorio, ejecuciones 1, 2 y 3 | 100 | 100 | 100 | 100 | 0,5, 0,6 y 0,6 s | 0,002 | 0 ms |

- Móvil: 95 o más en las cuatro categorías (medianas 96, 100, 100, 100), LCP de 2,5 s y CLS 0 en las tres ejecuciones, según el desarrollador.
- Escritorio (solo informado): CLS 0,002, el mismo valor del 2026-10-02, anterior al carrusel; no viene del carrusel (dato del desarrollador).
- Auditorías con advertencia, según el desarrollador: JavaScript heredado (ahorro estimado de 11 KiB); tiempos de caché eficientes (4 KiB); solicitudes de bloqueo de renderización (150 ms, ejecución 1 de escritorio); una tarea larga en el subproceso principal (ejecución 1 de móvil).
- El campo «Hash del commit publicado en `main`» de la sección 3 de la evidencia quedó como «Pendiente de indicar por el desarrollador». La sección 1 sí indica `af4b832…` como commit del código del carrusel.

**Decisiones del desarrollador:** se acepta `aria-disabled` en vez de `disabled`; se aceptan los puntos cuadrados y en dos filas de cinco bajo 768 px; se aprueba el Pull Request y el merge a `main`.

**No verificado:** Safari en iPhone (el desarrollador no tiene equipo). Tampoco se verificó el peso real transferido de la isla desde Cloudflare: PageSpeed no se desplaza, no carga la isla y no lo mide; el único peso de la isla medido es el de la fase A, en local (78.722 B transferidos, 79.356 B en gzip).

## Verificación

Documentación solamente; no se ejecutó `pnpm build` ni se midió nada nuevo. La tabla de comprobaciones de formato y de contenido está en la entrega al desarrollador.

## Criterios de aceptación

**Fase A, local:** las diez casillas anteriores siguen marcadas.

- [x] Lighthouse móvil local, mediana de tres, antes y después: las cuatro categorías informadas (99, 100, 100 y 100 en ambos casos). **Salvedad:** el CLS local de 0,0005 es anterior al carrusel (igual antes y después); en producción el CLS móvil fue 0 en las tres ejecuciones (AUD-11-004).

**Fase B:**

- [x] Vista previa en «Success» con el commit `af4b832866996269d0110408357d58cb66a41deb`; carrusel deslizable con el dedo en Android y con flechas en Chrome y Firefox del PC.
- [x] TalkBack anuncia la región, «Opinión N de 10» y los botones con su nombre.
- [x] PageSpeed móvil en producción, mediana de tres: Rendimiento 96 y las otras tres categorías en 100, LCP de 2,5 s y CLS 0; escritorio informado (100 en las cuatro, CLS 0,002).

## Decisiones tomadas

- **Del desarrollador:** AUD-11-002 aceptado (`aria-disabled`, con TalkBack anunciándolo como deshabilitado); puntos cuadrados en dos filas de cinco aceptados; Pull Request y merge aprobados.
- **Del agente:** marcar la casilla de Lighthouse local con la salvedad del CLS, por instrucción del desarrollador.

## Pendientes y riesgos

- **El desarrollador:** corregir en `evidencia-06-01-fase-b.md` la respuesta «Sí» de la sección 1.1 sobre el movimiento lateral de la página (debe ser «No») y, si quiere, completar el hash de la sección 3; marcar 06-01 «Terminada».
- **No verificado:** Safari en iPhone; peso real transferido de la isla desde Cloudflare.
- **LCP en el límite:** 2,5 s en producción, igual que en 05-02 (criterio de 2,5 s o menos; la meta de `AGENTS.md` es 2,0 s).
- **Margen del presupuesto de la isla:** unos 2,5 KB bajo los 80 KB (AUD-11-001, sigue abierto).
- **Aviso de licencia MIT de Embla:** no se incluye en el repositorio (riesgo aceptado, decisión 5).

## Commit sugerido

`Épica 6 - Iteración 06-01: registra la fase B del carrusel de opiniones (vista previa, Android, Chrome, Firefox, TalkBack y PageSpeed) y deja 06-01 en revisión`
