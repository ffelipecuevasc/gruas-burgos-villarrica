# Iteración 03-01 · Sección Inicio: hero y contacto inmediato

- **Épica:** 03 · Contenido y secciones
- **Estado:** Terminada (corregida en 03-05; verificada por el desarrollador el 2026-10-01, commit `d6121eb`)
- **Rama sugerida:** `main` (temporal, ver `registro-log.md`)
- **Depende de:** 02-03
- **RDA relacionadas:** RDA-008
- **Hallazgos que cierra:** AUD-01-003 (parcial: hero y cinta), AUD-01-011 (parcial: sin imágenes del prototipo), AUD-01-017 (parcial: el hero queda listo para `<Picture />`), AUD-01-027 (el nuevo hero no reproduce el `div` vacío ni la franja «hazard»)

## Objetivo

Que en la primera pantalla del celular la persona sepa qué hace Grúas Burgos, dónde opera y cómo llamar.

## Tarea 0 · Cierre administrativo de la Épica 02

Instrucción del desarrollador del 2026-09-30: las tres verificaciones manuales pendientes de la Épica 02 quedan confirmadas (pestaña Red sin dominios de terceros, revisión en un teléfono real a 360 px y WebStorm con separador LF). Cambios, sin tocar bitácoras:

1. `iteracion-02-01-tokens-fuentes-iconos.md`, criterio de la pestaña Red: reemplazar «confirmación visual en la pestaña Red pendiente del desarrollador)» por «confirmado visualmente por el desarrollador en la pestaña Red el 2026-09-30)».
2. `definicion-epica-02.md`, segundo criterio de término: reemplazar «la pestaña Red queda pendiente de confirmación visual del desarrollador)» por «confirmado visualmente por el desarrollador en la pestaña Red el 2026-09-30)».
3. `auditoria-tecnica.md`, celda Estado de AUD-04-005: reemplazar «pendiente del desarrollador: configurar WebStorm con separador de línea LF)» por «WebStorm configurado con separador LF por el desarrollador el 2026-09-30)».
4. `registro-log.md`, nueva fila al final del historial: «| 2026-09-30 | Épica 02: el desarrollador confirmó las tres verificaciones manuales pendientes (pestaña Red sin dominios de terceros, revisión en un teléfono real a 360 px y WebStorm con separador LF). |».

## Contenido aprobado (copiar tal cual)

**Hero**

- Etiqueta: «Asistencia en ruta 24/7»
- `h1`: «Grúas en Villarrica y La Araucanía, 24 horas»
- Párrafo: «Traslado en grúa cama, rescate 4x4 y retiro de vehículos siniestrados en Villarrica, Pucón, Licán Ray, Freire y donde nos necesites.»
- Botones: `BotonLlamada` y `BotonWhatsApp` (mensaje de emergencia de `negocio.js`).

**TarjetaDespacho** (solo desde `md:`)

- Título: «Despacho directo»
- Texto: «Te atiende Yerko Burgos, a cualquier hora.»
- Número grande: `negocio.telefono.visible`, enlazado a `enlaceTelefono()`.
- Botón: `BotonWhatsApp` en variante secundaria.

**CintaMetricas** (4 datos)

| Valor | Etiqueta |
| :--- | :--- |
| 24/7 | Atención continua |
| Grúa cama | Plataforma hidráulica |
| Winche | Rescate 4x4 |
| Villarrica | Base en Vicente Reyes 870 |

## Tareas

1. **Datos en `src/data/negocio.js`:**
    - `coordenadas`: `latitud: '-39.2829139'` y `longitud: '-72.2253883'`, con un comentario que indique la fuente (ficha pública en directorio) y que se validan en 04-01.
    - `cobertura.localidades` pasa de texto a arreglo de objetos `{ nombre, referencia }`, en este orden: Villarrica · «Base de operaciones»; Pucón · «Ruta CH-199»; Licán Ray · «Ruta S-95-T»; Freire · «Ruta CH-199, conexión con la Ruta 5 Sur».
    - Nuevo campo `cobertura.asistenciasDocumentadas: 'Paso fronterizo Mamuil Malal (Ruta CH-199, Curarrehue)'`.
    - `cobertura.tiemposRespuesta` sigue en `PENDIENTE_CLIENTE` (AUD-01-005).
    - Nueva función `localidadesTexto()` que devuelve «Villarrica, Pucón, Licán Ray y Freire» a partir del arreglo.
    - Actualizar el JSDoc (`@typedef Cobertura` y la nueva función).
2. **`Footer.astro`:** la condición de cobertura pasa a ser «el arreglo tiene elementos», y el texto se obtiene con `localidadesTexto()`. Sin esto, el cambio de tipo rompe el footer.
3. **`Hero.astro`** en `#inicio`:
    - Fondo `surface-container-lowest` con textura CSS (sin imágenes) y velo degradado, preparado para recibir una foto real con `<Picture />` (AVIF/WebP, `loading="eager"`, `fetchpriority="high"`, dimensiones explícitas) cuando llegue.
    - Etiqueta, `h1` (`text-headline-xl-mobile` y `md:text-headline-xl`), párrafo y los dos botones.
4. **`TarjetaDespacho.astro`:** columna derecha del hero desde `md:`, en bloque naranja con texto `on-accent`. En móvil se oculta porque duplica las acciones del header, de la barra inferior y del propio hero; la justificación va en la bitácora.
5. **`CintaMetricas.astro`:** los 4 datos del contenido aprobado, en 2 columnas en móvil y 4 desde `md:`. Ninguna cifra adicional.
6. **`index.astro`:** reemplazar el contenido provisional de `#inicio` por `Hero` y `CintaMetricas`. El `h2` provisional «Quiénes somos» se mantiene hasta 03-02. `#servicios` y `#contacto` no se tocan.
7. **`404.astro`:** reemplazar los botones con la paleta por defecto de Tailwind por `BotonLlamada` y `BotonWhatsApp`, y usar tokens en los textos.

## Criterios de aceptación

- [x] A 360 × 640 px, la etiqueta, el `h1` y ambos botones de contacto se ven sin scroll, sin quedar tapados por el header (112 px) ni por la barra inferior (56 px). (Medido en 03-05 con el espaciado de letra del token: etiqueta 152–170 px, `h1` 174–342 px y botones hasta 510 y 566 px; zona útil 112–584 px.)
- [ ] Mientras no haya foto, el elemento LCP es el `h1` y el LCP es menor que 2 s en Lighthouse móvil sobre `pnpm preview`. Con foto, la imagen pasa a ser el elemento LCP con el mismo umbral. (Sin marcar: en 03-05 se midió en Chrome que el elemento LCP es el `h1`; Lighthouse móvil no se ha ejecutado y queda pendiente del desarrollador. La comprobación pendiente pasa a 04-03.) **04-03, fase B (2026-10-02): sigue sin marcar.** PageSpeed Insights móvil sobre `https://gruasvillarrica.cl` dio un LCP de 2,3 s en las tres ejecuciones: no cumple el umbral de menos de 2 s de este criterio. La decisión 9 de `definicion-epica-04.md` baja a 2,5 s el criterio de la Épica 04, no este; si se extiende a 03-01, lo decide el desarrollador (AUD-09-021). La evidencia tampoco indica cuál fue el elemento LCP, y la medición fue en producción, no sobre `pnpm preview`.
- [x] Ningún texto de la lista «No publicar» de la definición de la épica aparece en `dist/`. (Medido en 03-05: sin coincidencias fuera de las reseñas textuales y del texto aprobado; la frase «Zonas de atención rápida:» del footer se retiró.)
- [x] `index.astro` y `404.astro` no usan clases de la paleta por defecto de Tailwind (`orange-*`, `neutral-*`). (Medido en 03-05: búsqueda en `src/` sin coincidencias.)
- [x] El footer muestra «Villarrica, Pucón, Licán Ray y Freire». (Medido en 03-05 en `dist/`: bajo «Cobertura» queda solo ese texto.)

## Datos pendientes del cliente

- Fotos reales del camión y de rescates, con permiso de uso (AUD-01-011).
