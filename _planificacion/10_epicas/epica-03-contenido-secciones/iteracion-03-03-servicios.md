# Iteración 03-03 · Sección Servicios y equipamiento

- **Épica:** 03 · Contenido y secciones
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/03-03-servicios`
- **Depende de:** 02-03
- **RDA relacionadas:** RDA-008
- **Hallazgos que cierra:** AUD-01-004

## Objetivo

Mostrar con claridad qué hace Grúas Burgos para que la persona confirme que puede ayudarla.

## Tareas

1. `src/data/servicios.js` con los servicios confirmados: rescate y asistencia en ruta, traslado de vehículos livianos y camionetas (grúa cama), viajes interurbanos y larga distancia. Cada uno con título, descripción, hasta 3 características e ícono.
2. `TarjetaServicio.astro` como `article` con `h3`; enlace "Consultar tarifa" que lleva a WhatsApp con mensaje específico del servicio (en lugar de solo anclar a `#contacto`).
3. `BloqueEquipamiento.astro` con descripción de la flota y chips de especificaciones confirmadas.
4. Sección `#servicios` con `TituloSeccion` y retícula de 1 columna en móvil y 3 en escritorio.

## Criterios de aceptación

- [ ] Las capacidades técnicas coinciden con la ficha de flota entregada por el cliente.
- [ ] Cada tarjeta tiene una acción de contacto directa.
- [ ] Sin textos en inglés residuales (por ejemplo "URBAN • RURAL").

## Datos requeridos del cliente

- Ficha de la flota y lista final de servicios.
