/**
 * @typedef {Object} Resena
 * @property {string} id Identificador único de la reseña.
 * @property {string} autor Nombre completo del autor en Google.
 * @property {number} calificacion Calificación numérica de 1 a 5 estrellas.
 * @property {string} fechaRelativa Antigüedad relativa visible (ej. "Hace un año").
 * @property {string} fechaIso Fecha aproximada en formato DD-MM-AAAA.
 * @property {string} servicio Contexto del servicio (o "No especificado").
 * @property {string} comentario Texto íntegro del comentario.
 * @property {boolean} destacada Si la reseña es prioritaria para visualización.
 * @property {string} urlResena Enlace directo a la reseña en Google Maps.
 */

/** @type {Resena[]} */
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
    comentario:
      'Excelente servicio muy recomedable, responsable y puntual👌buena disposición, buen precio',
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
