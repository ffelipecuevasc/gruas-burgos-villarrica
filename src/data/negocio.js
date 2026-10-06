// Fuente única de datos del negocio (RDA-008).
// Ningún componente escribe estos valores en duro: todos los importan desde aquí.
// Los datos sin confirmar por el cliente llevan PENDIENTE_CLIENTE; la compilación de
// producción fallará si queda alguno (validación prevista en la iteración 05-01).

/** Marcador de dato que el cliente aún no confirma. */
export const PENDIENTE_CLIENTE = 'PENDIENTE_CLIENTE';

/**
 * @typedef {Object} Telefono
 * @property {string} visible Formato legible para mostrar en pantalla.
 * @property {string} e164 Formato internacional E.164 para enlaces `tel:`.
 */

/**
 * @typedef {Object} WhatsApp
 * @property {string} numero Solo dígitos, con código de país, para `wa.me`.
 * @property {{ emergencia: string, cotizacion: string, ubicacion: string }} mensajes Mensajes predeterminados; terminan con un espacio.
 */

/**
 * @typedef {Object} Direccion
 * @property {string} calle
 * @property {string} comuna
 * @property {string} region
 * @property {string} pais Código ISO 3166-1 alfa-2.
 * @property {string} texto Dirección en una línea para mostrar.
 */

/**
 * @typedef {Object} Coordenadas
 * @property {string} latitud
 * @property {string} longitud
 */

/**
 * @typedef {Object} Horario
 * @property {string} texto Horario para mostrar.
 * @property {boolean} siempreAbierto Atención 24 horas, los 7 días.
 */

/**
 * @typedef {Object} Localidad
 * @property {string} nombre
 * @property {string} [referencia] Referencia de ruta. Se omite si no hay una fuente verificada.
 */

/**
 * @typedef {Object} Cobertura
 * @property {Localidad[]} localidades Localidades atendidas.
 * @property {string} region Región donde se presta el servicio de grúa.
 * @property {string[]} alcance Frases sobre el alcance del servicio; cada una es una línea.
 * @property {string} asistenciasDocumentadas Lugar donde se ha prestado servicio, redactado para ir dentro de una frase.
 * @property {string} tiemposRespuesta Tiempos estimados de llegada por zona.
 */

/**
 * @typedef {Object} MedioPago
 * @property {string} nombre Nombre visible del medio de pago.
 * @property {string} icono Clave del ícono en Icono.astro.
 */

/**
 * @typedef {Object} Pagos
 * @property {MedioPago[]} medios Medios de pago, cada uno con su ícono, para mostrar.
 * @property {string} documentos Documentos tributarios que se emiten, para mostrar.
 * @property {string} aceptados Medios de pago en una lista, para los datos estructurados.
 */

/**
 * @typedef {Object} RedesSociales
 * @property {string} instagram
 * @property {string} facebook
 * @property {string} tiktok
 */

/**
 * @typedef {Object} Negocio
 * @property {string} nombre
 * @property {string} eslogan
 * @property {string} url Dominio del sitio, con protocolo.
 * @property {Telefono} telefono
 * @property {WhatsApp} whatsapp
 * @property {string} correo
 * @property {Direccion} direccion
 * @property {Coordenadas} coordenadas
 * @property {Horario} horario
 * @property {Cobertura} cobertura
 * @property {Pagos} pagos
 * @property {string} anioInicio Año de inicio de operaciones.
 * @property {RedesSociales} redes
 */

/** @type {Negocio} */
export const negocio = {
  nombre: 'Grúas Burgos',
  eslogan: 'Grúas en Villarrica y La Araucanía, 24 horas',
  url: 'https://gruasvillarrica.cl',
  telefono: {
    visible: '+56 9 4619 2286',
    e164: '+56946192286',
  },
  whatsapp: {
    numero: '56946192286',
    mensajes: {
      emergencia: 'Hola, necesito una grúa en Villarrica. Mi ubicación es: ',
      cotizacion: 'Hola, quiero cotizar un servicio de grúa. ',
      ubicacion: 'Hola, necesito una grúa. Te envío mi ubicación por aquí. ',
    },
  },
  correo: 'gruasburgosvillarrica@gmail.com',
  direccion: {
    calle: 'Vicente Reyes 870',
    comuna: 'Villarrica',
    region: 'La Araucanía',
    pais: 'CL',
    texto: 'Vicente Reyes 870, Villarrica',
  },
  // Coordenadas de referencia según ficha pública en directorio; validar contra pin oficial en 04-01
  coordenadas: {
    latitud: '-39.2829139',
    longitud: '-72.2253883',
  },
  horario: {
    texto: '24/7',
    siempreAbierto: true,
  },
  cobertura: {
    localidades: [
      { nombre: 'Villarrica', referencia: 'Base de operaciones' },
      { nombre: 'Pucón', referencia: 'Ruta CH-199' },
      { nombre: 'Licán Ray', referencia: 'Ruta S-95-T' },
      // Sin referencia de ruta: no hay una fuente verificada (decisión del 2026-10-05).
      { nombre: 'Coñaripe' },
      { nombre: 'Freire', referencia: 'Ruta CH-199, conexión con la Ruta 5 Sur' },
    ],
    region: 'La Araucanía',
    alcance: ['Grúas en toda La Araucanía.', 'Traslado de vehículos a todo Chile.'],
    // En minúscula inicial: el dato se lee dentro de una frase (ListaCobertura.astro).
    asistenciasDocumentadas: 'paso fronterizo Mamuil Malal (Ruta CH-199, Curarrehue)',
    tiemposRespuesta: PENDIENTE_CLIENTE,
  },
  pagos: {
    medios: [
      { nombre: 'Efectivo', icono: 'efectivo' },
      { nombre: 'Transferencia', icono: 'transferencia' },
      { nombre: 'Tarjeta de débito', icono: 'debito' },
      { nombre: 'Tarjeta de crédito', icono: 'credito' },
    ],
    documentos: 'Emitimos boletas y facturas.',
    aceptados: 'Efectivo, transferencia bancaria, tarjeta de débito, tarjeta de crédito',
  },
  anioInicio: PENDIENTE_CLIENTE,
  redes: {
    instagram: 'https://www.instagram.com/gruas_burgos_villarrica_chile/',
    facebook: 'https://www.facebook.com/p/Gr%C3%BAas-Burgos-villarrica-chile-247-100083010505193/',
    // Cuenta confirmada por el cliente (AUD-01-008).
    tiktok: 'https://www.tiktok.com/@yerko.gruas.burgo',
  },
};

/**
 * Enlace para iniciar una llamada al teléfono del negocio.
 * @returns {string} Enlace `tel:` en formato E.164.
 */
export function enlaceTelefono() {
  return `tel:${negocio.telefono.e164}`;
}

/**
 * Enlace para abrir una conversación de WhatsApp con un mensaje precargado.
 * @param {string} [mensaje] Texto inicial; por defecto, el mensaje de emergencia.
 * @returns {string} Enlace `https://wa.me/…?text=…`.
 */
export function enlaceWhatsApp(mensaje = negocio.whatsapp.mensajes.emergencia) {
  return `https://wa.me/${negocio.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;
}

/**
 * Devuelve una lista de localidades en formato texto continuo.
 * @param {string[]} [nombres] Nombres a unir; por defecto, todas las localidades de la cobertura.
 * @returns {string} Texto formateado (ej. "Villarrica, Pucón, Licán Ray, Coñaripe y Freire").
 */
export function localidadesTexto(nombres = negocio.cobertura.localidades.map((loc) => loc.nombre)) {
  if (nombres.length === 0) return '';
  if (nombres.length === 1) return nombres[0];
  return `${nombres.slice(0, -1).join(', ')} y ${nombres[nombres.length - 1]}`;
}

/**
 * Devuelve el enlace para consultar las opiniones del negocio en Google Maps.
 * @returns {string} URL de búsqueda formateada para Google Maps.
 */
export function enlaceOpinionesGoogle() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Grúas Burgos Villarrica')}`;
}

/**
 * Devuelve la URL de Google Maps con la ruta hacia la base de operaciones en Vicente Reyes 870.
 * @returns {string} URL formateada para Google Maps Directions.
 */
export function enlaceComoLlegar() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${negocio.direccion.texto}, Chile`)}`;
}
