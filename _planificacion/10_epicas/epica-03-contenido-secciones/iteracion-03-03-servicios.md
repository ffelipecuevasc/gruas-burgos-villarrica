# Iteración 03-03 · Sección Servicios y equipamiento

- **Épica:** 03 · Contenido y secciones
- **Estado:** Pendiente
- **Rama sugerida:** `main` (temporal, ver `registro-log.md`)
- **Depende de:** 03-01
- **RDA relacionadas:** RDA-008
- **Hallazgos que cierra:** AUD-01-004 (parcial: equipamiento verificado; capacidades y marcas pendientes)

## Objetivo

Mostrar con claridad qué hace Grúas Burgos, para que la persona confirme que puede ayudarla y pida el servicio en un toque.

## Contenido aprobado (copiar tal cual)

**Encabezado de sección** (`TituloSeccion` en `#servicios`)

- `h2`: «Servicios»
- Bajada: «Atendemos autos, SUV y camionetas en la ciudad, en caminos rurales y en rutas de cordillera.»

**Tarjetas** (en `src/data/servicios.js`)

| Campo | Traslado en grúa cama | Rescate 4x4 y vehículos atascados | Retiro de vehículos siniestrados |
| :--- | :--- | :--- | :--- |
| `id` | `grua-cama` | `rescate-4x4` | `siniestrados` |
| `icono` | `traslado` | `rescate` | `emergencia` |
| `descripcion` | Subimos tu vehículo a nuestra plataforma hidráulica y lo llevamos al taller, a tu casa o adonde lo necesites. | Sacamos vehículos atrapados en caminos de tierra, desniveles o fuera de la calzada, con winche de tiro. | Retiramos tu vehículo después de un accidente y lo llevamos al taller o al destino que nos indiques. |
| `caracteristicas` (3) | Plataforma hidráulica inclinable · Autos, SUV y camionetas · Disponible 24/7 | Winche de tiro · Caminos rurales y de cordillera · Servicio en el paso Mamuil Malal | Retiro desde el lugar del accidente · Traslado a talleres y desarmadurías · Disponible 24/7 |
| `mensajeWhatsApp` | Hola, quiero cotizar un traslado en grúa cama. | Hola, necesito un rescate 4x4. Mi ubicación es: | Hola, necesito retirar un vehículo siniestrado. |

Cada mensaje termina con un espacio, igual que los de `negocio.js`.

**Nota de traslados a otras ciudades** (debajo de las tarjetas)

- Texto: «¿Necesitas un traslado a otra ciudad? Escríbenos y coordinamos el viaje según el destino.»
- Enlace: «Escribir por WhatsApp», con el mensaje «Hola, quiero cotizar un traslado a otra ciudad. » e ícono `larga-distancia`.

**BloqueEquipamiento**

- `h3`: «Nuestro equipamiento»
- Texto: «Camión de rescate con plataforma hidráulica inclinable y winche de tiro, rotulado «Rescate en ruta». Preparado para autos, SUV y camionetas 4x4.»
- Chips: «Plataforma hidráulica» · «Winche de tiro» · «Autos, SUV y camionetas 4x4» · «Atención 24/7».

## Tareas

1. **`src/data/servicios.js`** con los tres servicios del contenido aprobado, en ese orden, con JSDoc (`@typedef Servicio`: `id`, `titulo`, `icono`, `descripcion`, `caracteristicas`, `mensajeWhatsApp`). Los íconos usan claves que ya existen en `Icono.astro`, así que no se agregan íconos nuevos.
2. **`TarjetaServicio.astro`** como `article`:
    - Ícono, barra de acento, `h3` con el título, descripción y las 3 características con el ícono `verificacion`.
    - Enlace de acción con el texto visible «Escribir por WhatsApp», `href` igual a `enlaceWhatsApp(mensajeWhatsApp)`, pestaña nueva con `rel="noopener noreferrer"` y `aria-label` «Escribir por WhatsApp sobre {título}». Usa `Boton` en variante contorno.
3. **`BloqueEquipamiento.astro`** con el contenido aprobado, usando `Chip`.
4. **Sección `#servicios` en `index.astro`:** `TituloSeccion`, retícula de 1 columna en móvil y 3 desde `lg:` (2 desde `md:`), la nota de traslados y `BloqueEquipamiento`. Reemplaza el contenido provisional de la sección.

## Criterios de aceptación

- [ ] Los textos de servicios y equipamiento coinciden con el contenido aprobado. No aparecen marcas, modelos, capacidades, cantidad de grúas ni asistencia menor (neumáticos, batería, apertura).
- [ ] Cada tarjeta tiene una acción directa de WhatsApp con su mensaje específico, verificada en `dist/` (el `href` incluye el mensaje codificado).
- [ ] Sin textos en inglés residuales del prototipo (por ejemplo «URBAN • RURAL»).
- [ ] A 360 px, las tarjetas se leen en una columna sin desborde horizontal.

## Datos pendientes del cliente

- Ficha de la flota: cantidad de grúas, marca, modelo, capacidad y largo de plataforma (AUD-01-004).
- Confirmación de servicios adicionales que hoy no se publican: asistencia menor en ruta y rescate en nieve o arena.