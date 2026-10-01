# Iteración 03-02 · Sección Inicio: quiénes somos y reseñas

- **Épica:** 03 · Contenido y secciones
- **Estado:** Terminada
- **Rama sugerida:** `main` (temporal, ver `registro-log.md`)
- **Depende de:** 03-01
- **RDA relacionadas:** RDA-007, RDA-008
- **Hallazgos que cierra:** AUD-01-010 (parcial: reseñas seleccionadas; falta el enlace oficial al perfil), AUD-01-007 (parcial: el bloque se publica sin año de inicio)

## Objetivo

Dar confianza a quien duda entre varias grúas: quién es Grúas Burgos y qué dicen sus clientes.

## Contenido aprobado (copiar tal cual)

**Quiénes somos** (dentro de `#inicio`, con `TituloSeccion`)

- `h2`: «Quiénes somos»
- Párrafo 1: «Grúas Burgos es un servicio de grúas con base en Villarrica. Lo dirige Yerko Burgos, que está a cargo de los rescates.»
- Párrafo 2: «Trabajamos con un camión de plataforma hidráulica (grúa cama) y winche para sacar vehículos atascados fuera del camino. Atendemos autos, SUV y camionetas 4x4 en la ciudad, en caminos rurales y en rutas de cordillera, y hemos prestado servicio en el paso fronterizo Mamuil Malal.»
- Lema destacado: «Servicio de grúa 24/7 y donde nos necesiten.»
- Párrafo 3: «Quienes nos han llamado destacan la rapidez, la puntualidad, la buena disposición y el cuidado con su vehículo.»

No se incluyen años de experiencia ni cifras (AUD-01-007).

**Reseñas** (dentro de `#inicio`, después de Quiénes somos)

- `h2`: «Lo que dicen nuestros clientes»
- Bajada: «Opiniones publicadas en Google.»
- Enlace de cierre: «Ver más opiniones en Google».
- Resumen desplegable: «Ver 4 opiniones más».

## Datos: `src/data/resenas.js`

Las 10 reseñas entregadas por el desarrollador, con los mismos campos y valores del JSON, en el mismo orden, como módulo de JavaScript con JSDoc (`@typedef Resena`) y `export const resenas`. La única intervención es la de la decisión D1.

```js
export const resenas = [
  {
    id: 'res-01',
    autor: 'Leonel Zapata Mellado',
    calificacion: 5,
    fechaRelativa: 'Hace un año',
    fechaIso: '30-09-2025',
    servicio: 'No especificado',
    comentario:
      'Excelente servicio llegó en tiempo récord y se llevó el auto sin problema.. si necesitan un servicio seguro y confiable yerko es la persona..',
    destacada: true,
    urlResena: 'https://share.google/xWIxgQrftqzFI1m53',
  },
  {
    id: 'res-02',
    autor: 'Alejandro Aranda',
    calificacion: 5,
    fechaRelativa: 'Hace un año',
    fechaIso: '30-09-2025',
    servicio: 'No especificado',
    comentario:
      'excelente servicio, me quede atrapado en un camino de tierra y llegaron super rapido y se demoraron aun menos en sacar la camioneta 1000% recomendado',
    destacada: true,
    urlResena: 'https://share.google/aTeX8wS6TbcSlh8GC',
  },
  {
    id: 'res-03',
    autor: 'Nicolas Perez',
    calificacion: 5,
    fechaRelativa: 'Hace un año',
    fechaIso: '30-09-2025',
    servicio: 'No especificado',
    comentario: 'Excelente servicio muy recomedable, responsable y puntual👌buena disposición, buen precio',
    destacada: true,
    urlResena: 'https://share.google/KkWCj54J3667FCDjb',
  },
  {
    id: 'res-04',
    autor: 'Versa Beltran',
    calificacion: 5,
    fechaRelativa: 'Hace un año',
    fechaIso: '30-09-2025',
    servicio: 'No especificado',
    comentario: 'Excelente servicio 100% recomendado 👍',
    destacada: true,
    urlResena: 'https://share.google/4IEaErWxz8YxVNeIx',
  },
  {
    id: 'res-05',
    autor: 'Camila Arriagada',
    calificacion: 5,
    fechaRelativa: 'Hace 2 años',
    fechaIso: '30-09-2024',
    servicio: 'No especificado',
    comentario:
      'Lo recomiendo 100%. Yerko se demoro alrededor de 30min en llegar, super rápido, cuidadoso y amable. Nos ayudó a buscar mecánico y orientarnos en la ciudad de villarica. Precio super justo.',
    destacada: true,
    urlResena: 'https://share.google/Q3dOOBS6XLKhBnewV',
  },
  {
    id: 'res-06',
    autor: 'Cabañas Tornagaleones',
    calificacion: 5,
    fechaRelativa: 'Hace 2 años',
    fechaIso: '30-09-2024',
    servicio: 'No especificado',
    comentario: 'Servicio impecable.',
    destacada: true,
    urlResena: 'https://share.google/XyYGYMSkJfxCqbMtW',
  },
  {
    id: 'res-07',
    autor: 'Damian Cabezas Inostroza',
    calificacion: 5,
    fechaRelativa: 'Hace 2 años',
    fechaIso: '30-09-2024',
    servicio: 'No especificado',
    comentario: 'Muy buen servicio',
    destacada: true,
    urlResena: 'https://share.google/9dZ1J7qnhWo0vOnom',
  },
  {
    id: 'res-08',
    autor: 'Miriam Lasmar',
    calificacion: 5,
    fechaRelativa: 'Hace 3 años',
    fechaIso: '30-09-2023',
    servicio: 'No especificado',
    comentario: 'Gran servicio, buena disposición y atención, lo recomiendo totalmente',
    destacada: true,
    urlResena: 'https://share.google/E0vTcGUAFSctiAPdF',
  },
  {
    id: 'res-09',
    autor: 'Victor Berrios',
    calificacion: 5,
    fechaRelativa: 'Hace 3 años',
    fechaIso: '30-09-2023',
    servicio: 'No especificado',
    comentario: 'Muy buen servicio, recomendado…',
    destacada: true,
    urlResena: 'https://share.google/fZdr0yu931Z5QBcsD',
  },
  {
    id: 'res-10',
    autor: 'Tity Contreras',
    calificacion: 5,
    fechaRelativa: 'Hace 3 años',
    fechaIso: '30-09-2023',
    servicio: 'No especificado',
    comentario:
      'Un excelente servicio de Gruas , profesionalismo , precio razonable , rapidez , muy buena atención y disposición al usuario .\nRecomendable 100% 👍',
    destacada: true,
    urlResena: 'https://share.google/c8jaBCEq6AZ3PkBpJ',
  },
];
```

Notas sobre los campos:

- `fechaIso` está en formato DD-MM-AAAA y es una aproximación calculada a partir de la fecha relativa: se conserva, pero no se muestra.
- `servicio` vale «No especificado» en todas: no se muestra.
- Los comentarios se publican textuales, con su ortografía y sus emojis. El salto de línea de `res-10` se respeta con `white-space: pre-line`.

## Decisiones del desarrollador (2026-09-30)

- **D1:** en `res-09` se quita « … Más», que es el botón «Más» de Google y no parte de la opinión. El texto queda «Muy buen servicio, recomendado…».
- **D2:** la fecha visible es `fechaRelativa`, tal como la muestra Google. Se desactualiza con el tiempo: revisar las reseñas cada 6 meses.
- **D3:** el autor se muestra con su nombre completo, tal como aparece en Google (cambia RDA-007, que pedía nombre abreviado).

## Tareas

1. **`QuienesSomos.astro`** dentro de `#inicio`, con `TituloSeccion` y el contenido aprobado. Reemplaza el `h2` provisional de `index.astro`.
2. **`src/data/resenas.js`**, con el contenido exacto de arriba.
3. **`TarjetaResena.astro`** como `article`:
    - Calificación: cinco estrellas (★) en `primary-container` con `aria-hidden="true"`, más un texto solo para lectores de pantalla: «Calificación: 5 de 5». Las estrellas salen de `calificacion`, no se inventan.
    - Comentario en `blockquote` con `white-space: pre-line`.
    - Autor en `cite`, fecha según D2, y enlace «Ver en Google» a `urlResena` con `target="_blank"`, `rel="noopener noreferrer"` y `aria-label` «Ver en Google la opinión de {autor}».
4. **`Resenas.astro`** con `TituloSeccion` y retícula de 1 columna en móvil, 2 desde `md:` y 3 desde `lg:`. Muestra las 6 primeras. Las otras 4 van dentro de un `<details>` con el resumen «Ver 4 opiniones más»: no lleva JavaScript y funciona con teclado. Cierra con el enlace «Ver más opiniones en Google». Si el arreglo está vacío, el bloque no se renderiza.
5. **`negocio.js`:** nueva función `enlaceOpinionesGoogle()` que devuelve `https://www.google.com/maps/search/?api=1&query=` más «Grúas Burgos Villarrica» codificado con `encodeURIComponent`. Es un enlace provisional hasta tener el enlace oficial del perfil.
6. **RDA-007**, agregar al final: «**Actualización 2026-09-30:** el desarrollador entregó 10 reseñas seleccionadas (no de 3 a 6), que se publican textuales y con el nombre completo del autor tal como aparece en Google. Se mantiene la prohibición de `AggregateRating` y `Review` en el marcado.»

## Criterios de aceptación

- [x] Las 10 reseñas coinciden con resenas.js, sin cambios de sentido (la única intervención es D1). (verificado en resenas.js)
- [x] Sin AggregateRating ni Review en el marcado (RDA-007). (verificado: sin schema JSON-LD de reseñas)
- [x] Bloque legible en una columna a 360 px. El <details> se abre con teclado. (verificado con details nativo)
- [x] Todos los enlaces a Google abren en pestaña nueva con rel="noopener noreferrer". (verificado en TarjetaResena y Resenas)
- [x] Quiénes somos no incluye años, cifras ni datos de la lista «No publicar». (verificado en QuienesSomos.astro)

## Datos pendientes del cliente

- Enlace oficial al perfil de Google Maps (AUD-01-010), que reemplaza al enlace de búsqueda.
- Año de inicio de operaciones (AUD-01-007).
