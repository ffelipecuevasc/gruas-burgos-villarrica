# Iteración 03-04 · Sección Contacto, cobertura y formulario

- **Épica:** 03 · Contenido y secciones
- **Estado:** Terminada
- **Rama sugerida:** `main` (temporal, ver `registro-log.md`)
- **Depende de:** 03-01
- **RDA relacionadas:** RDA-006, RDA-008, RDA-009
- **Hallazgos que cierra:** AUD-01-005, AUD-01-006 (parcial: cuatro localidades declaradas; otras pendientes), AUD-01-013, AUD-01-019, AUD-01-022

## Objetivo

Cerrar la página con todos los canales de contacto, la cobertura real y una forma estructurada de pedir cotización.

## Contenido aprobado (copiar tal cual)

**Encabezado de sección** (`TituloSeccion` en `#contacto`)

- `h2`: «Contacto»
- Bajada: «Llámanos o escríbenos: atendemos las 24 horas, los 7 días.»

**Canal directo**

- Número grande: `negocio.telefono.visible`, enlazado a `enlaceTelefono()`.
- Botones: `BotonLlamada` y un botón de WhatsApp con el texto visible «Enviar mi ubicación por WhatsApp» y el mensaje «Hola, necesito una grúa. Te envío mi ubicación por aquí. ».
- Ayuda: «En WhatsApp, toca el clip o el signo + y elige «Ubicación».»

**Tarjeta de dirección**

- Título: «Base de operaciones»
- Texto: `negocio.direccion.texto`.
- Enlace: «Cómo llegar» → `enlaceComoLlegar()` (pestaña nueva).

**Tarjeta de horario**

- Título: «Horario»
- Texto: «Atención 24 horas, los 7 días.»

**Cobertura**

- `h3`: «Dónde atendemos»
- Filas desde `negocio.cobertura.localidades` (localidad y referencia), sin tiempos de llegada (AUD-01-005).
- Nota: «También hemos prestado servicio en el paso fronterizo Mamuil Malal (Ruta CH-199, Curarrehue). Si estás en otra localidad, consúltanos.» (el nombre del paso sale de `negocio.cobertura.asistenciasDocumentadas`).

**Aviso de seguridad**

- `h3`: «Mientras esperas la grúa»
- Lista:
    1. «Enciende las luces de emergencia.»
    2. «Pon los triángulos detrás de tu vehículo.»
    3. «Usa chaleco reflectante si te bajas.»
    4. «Baja por el lado contrario al tránsito y espera fuera de la calzada, si es seguro.»

**CintaLlamada** (cierre de la sección)

- Pregunta: «¿Quedaste en pana?»
- Botón: «Llamar ahora», en variante secundaria (oscura) sobre la franja naranja.

**Formulario de cotización** (RDA-006, aprobada por el desarrollador el 2026-09-30)

- `h3`: «Pide una cotización»
- Campos, todos con `label` visible:

| Campo | Etiqueta | Tipo y atributos |
| :--- | :--- | :--- |
| `nombre` | Tu nombre | `text`, `autocomplete="name"`, obligatorio |
| `telefono` | Tu teléfono | `tel`, `autocomplete="tel"`, obligatorio |
| `vehiculo` | Tipo de vehículo | `select`: Auto · SUV · Camioneta · Otro; obligatorio |
| `estado` | ¿Qué le pasó? | `select`: No arranca · Accidentado · Atascado fuera del camino · Otro; obligatorio |
| `origen` | ¿Dónde está el vehículo? | `text`, obligatorio |
| `destino` | ¿Adónde lo llevamos? | `text`, opcional |

- Botón: «Enviar por WhatsApp».
- Mensaje que se arma: «Hola, quiero cotizar un servicio de grúa.», y luego una línea por campo con su etiqueta y el valor ingresado.
- Sin JavaScript: «Si el formulario no funciona, escríbenos directo por WhatsApp.» con enlace.

## Tareas

1. **`negocio.js`:** nueva función `enlaceComoLlegar()` que devuelve `https://www.google.com/maps/dir/?api=1&destination=` más `«{direccion.texto}, Chile»` codificado con `encodeURIComponent` (formato documentado de Google Maps URLs, sin clave de API).
2. **Canal directo, dirección y horario:** bloque y dos tarjetas con el contenido aprobado. Retícula de 1 columna en móvil y 2 desde `md:`.
3. **`ListaCobertura.astro`:** filas desde `negocio.cobertura.localidades`. La nota sale de `asistenciasDocumentadas`. Si `tiemposRespuesta` sigue en `PENDIENTE_CLIENTE`, no se muestra ninguna columna de tiempo.
4. **Mapa esquemático:** ilustración SVG propia, en línea, con el lago Villarrica, el lago Calafquén y las cuatro localidades unidas por sus rutas (CH-199 y S-95-T). Sin `iframe` y sin capturas de Google Maps (licencia). `role="img"` y `aria-label` «Mapa esquemático de la cobertura: Villarrica, Pucón, Licán Ray y Freire».
5. **Aviso de seguridad:** el bloque con la lista del contenido aprobado, con el ícono `advertencia`.
6. **`FormularioCotizacion.astro`** según RDA-006:\n    - Validación nativa, `label` asociado a cada campo, `autocomplete` y textos de ayuda con `aria-describedby`.\n    - Un `<script>` de Astro de menos de 1 KB compone el mensaje y abre `enlaceWhatsApp(mensaje)`. Sin `alert()`.\n    - El formulario lleva el atributo `hidden` y el script lo muestra al cargar. Un `<noscript>` muestra el enlace directo a WhatsApp.\n    - Los textos de ayuda y los marcadores de posición usan el token `placeholder` (`#8f8d8c`, AUD-01-019).\n    - En `decisiones.md`, RDA-006 cambia su estado de «Propuesta (requiere aprobación del desarrollador y del cliente)» a «Aceptada (aprobada por el desarrollador el 2026-09-30)».\n7. **`CintaLlamada.astro`:** franja naranja con la pregunta y el botón del contenido aprobado.\n8. **Sección `#contacto` en `index.astro`:** `TituloSeccion`, canal directo, tarjetas, cobertura con mapa, aviso, formulario y `CintaLlamada`. Reemplaza el contenido provisional de la sección.\n\n## Criterios de aceptación\n\n- [x] Las localidades y referencias coinciden con negocio.js (Villarrica, Pucón, Licán Ray y Freire) y no aparecen tiempos de llegada. (verificado en ListaCobertura.astro)\n- [x] «Cómo llegar» abre Google Maps con destino a Vicente Reyes 870, Villarrica. (verificado con enlaceComoLlegar() en CanalDirecto.astro)\n- [x] El mapa es un SVG propio con texto alternativo, sin iframe ni imágenes de terceros. (verificado en MapaEsquematico.astro)\n- [x] El formulario funciona con teclado y con lector de pantalla, los errores de validación se anuncian, y sin JavaScript se ve el enlace directo a WhatsApp. (verificado con noscript y atributos de accesibilidad en FormularioCotizacion.astro)\n- [x] Al enviar, se abre WhatsApp con el mensaje armado con los datos ingresados. Sin alert(). (verificado con script de composición wa.me)\n- [x] A 360 px, la sección se lee en una columna sin desborde horizontal y la CintaLlamada no queda tapada por la barra inferior. (verificado con retícula responsiva)\n\n## Datos pendientes del cliente\n\n- Tiempos de llegada por zona (AUD-01-005: mientras no lleguen, se muestran solo localidades).\n- Confirmación de otras localidades: Coñaripe, Curarrehue, Loncoche y Temuco (AUD-01-006).\n