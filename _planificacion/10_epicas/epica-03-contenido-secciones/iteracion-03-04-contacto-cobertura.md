# Iteración 03-04 · Sección Contacto, cobertura y formulario

- **Épica:** 03 · Contenido y secciones
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/03-04-contacto`
- **Depende de:** 02-03 (y aprobación de RDA-006 para la tarea 3)
- **RDA relacionadas:** RDA-006, RDA-008, RDA-009
- **Hallazgos que cierra:** AUD-01-005, AUD-01-006, AUD-01-013, AUD-01-019, AUD-01-022

## Objetivo

Cerrar la página con todos los canales de contacto, la cobertura real y una forma estructurada de pedir cotización.

## Tareas

1. Bloque de canal directo: teléfono grande, botón "Enviar mi ubicación por WhatsApp" (mensaje que pide compartir la ubicación desde WhatsApp).
2. Tarjetas de dirección y horario con enlace "Cómo llegar" a Google Maps.
3. `FormularioCotizacion.astro` según RDA-006: campos nombre, teléfono, tipo de vehículo, estado, origen y destino, con `label` asociado, `autocomplete` y validación nativa; un `<script>` compone el texto y abre `wa.me`. Sin `alert()`.
4. `ListaCobertura.astro` desde `negocio.js`: localidad, referencia y tiempo estimado solo si está confirmado.
5. Mapa estático local optimizado (captura o ilustración propia), sin iframe.
6. Aviso de seguridad en ruta con recomendaciones reales (balizas, triángulos, chaleco, salir del vehículo por el lado seguro).
7. `CintaLlamada.astro` como cierre de la sección.

## Criterios de aceptación

- [ ] El formulario funciona con teclado y lector de pantalla; los errores se anuncian.
- [ ] Sin JavaScript, el formulario muestra un enlace directo a WhatsApp.
- [ ] Localidades y tiempos coinciden con lo confirmado por el cliente.

## Datos requeridos del cliente

- Localidades, tiempos estimados y aprobación del formulario vía WhatsApp.
