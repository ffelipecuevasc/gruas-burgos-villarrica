/**
 * @typedef {Object} Servicio
 * @property {string} id Identificador único del servicio.
 * @property {string} titulo Nombre descriptivo del servicio.
 * @property {string} icono Clave del ícono en Icono.astro.
 * @property {string} descripcion Resumen del alcance del servicio.
 * @property {string[]} caracteristicas Lista de 3 atributos clave verificados.
 * @property {string} mensajeWhatsApp Mensaje inicial para WhatsApp (termina con espacio).
 */

/** @type {Servicio[]} */
export const servicios = [
  {
    id: 'grua-cama',
    titulo: 'Traslado en grúa cama',
    icono: 'traslado',
    descripcion:
      'Subimos tu vehículo a nuestra plataforma hidráulica y lo llevamos al taller, a tu casa o adonde lo necesites.',
    caracteristicas: [
      'Plataforma hidráulica inclinable',
      'Autos, SUV y camionetas',
      'Disponible 24/7',
    ],
    mensajeWhatsApp: 'Hola, quiero cotizar un traslado en grúa cama. ',
  },
  {
    id: 'rescate-4x4',
    titulo: 'Rescate 4x4 y vehículos atascados',
    icono: 'rescate',
    descripcion:
      'Sacamos vehículos atrapados en caminos de tierra, desniveles o fuera de la calzada, con winche de tiro.',
    caracteristicas: [
      'Winche de tiro',
      'Caminos rurales y de cordillera',
      'Servicio en el paso Mamuil Malal',
    ],
    mensajeWhatsApp: 'Hola, necesito un rescate 4x4. Mi ubicación es: ',
  },
  {
    id: 'siniestrados',
    titulo: 'Retiro de vehículos siniestrados',
    icono: 'emergencia',
    descripcion:
      'Retiramos tu vehículo después de un accidente y lo llevamos al taller o al destino que nos indiques.',
    caracteristicas: [
      'Retiro desde el lugar del accidente',
      'Traslado a talleres y desarmadurías',
      'Disponible 24/7',
    ],
    mensajeWhatsApp: 'Hola, necesito retirar un vehículo siniestrado. ',
  },
];
