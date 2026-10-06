/**
 * @typedef {Object} Servicio
 * @property {string} id Identificador único del servicio.
 * @property {string} titulo Nombre descriptivo del servicio.
 * @property {string} [icono] Clave del ícono en Icono.astro. Las tarjetas compactas no llevan ícono.
 * @property {string} descripcion Resumen del alcance del servicio.
 * @property {string[]} [caracteristicas] Lista de 3 atributos clave verificados. Sin lista, la tarjeta es compacta.
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
      'Autos, SUV, camionetas, furgones y camiones de tres cuartos',
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
  // Servicios agregados en la iteración 05-04: tarjetas compactas, sin ícono ni lista de características.
  {
    id: 'puente-bateria',
    titulo: 'Puente de batería',
    descripcion:
      'Si tu vehículo no parte por la batería, le pasamos corriente para que vuelva a funcionar.',
    mensajeWhatsApp: 'Hola, necesito un puente de batería. Mi ubicación es: ',
  },
  {
    id: 'cambio-neumatico',
    titulo: 'Cambio de neumático',
    descripcion: 'Te ayudamos a cambiar el neumático de tu vehículo cuando quedas en ruta.',
    mensajeWhatsApp: 'Hola, necesito un cambio de neumático. Mi ubicación es: ',
  },
  {
    id: 'camion-pluma',
    titulo: 'Rescates complejos con camión pluma',
    descripcion:
      'Cuando una grúa con plataforma no puede operar en el lugar, el vehículo se levanta con camión pluma.',
    mensajeWhatsApp: 'Hola, necesito un rescate complejo con camión pluma. Mi ubicación es: ',
  },
  {
    id: 'envio-vehiculos',
    titulo: 'Envío de vehículos a todo Chile y a Argentina',
    descripcion:
      'Enviamos tu vehículo a cualquier ciudad de Chile y a Argentina. Precios muy competitivos.',
    mensajeWhatsApp: 'Hola, quiero cotizar el envío de un vehículo. Destino: ',
  },
  {
    id: 'maquinaria-liviana',
    titulo: 'Traslado de maquinaria liviana',
    descripcion:
      'Trasladamos minirretroexcavadoras, montacargas y minicargadores con la grúa cama y, si es necesario, con un camión de 15 toneladas.',
    mensajeWhatsApp: 'Hola, quiero cotizar el traslado de maquinaria liviana. ',
  },
];
