# Épica 03 · Contenido y secciones

- **Estado:** Pendiente
- **Objetivo:** construir las tres secciones contratadas (Inicio, Servicios y Contacto) con contenido verificado, para que quien tiene una emergencia en ruta entienda en segundos qué hace Grúas Burgos, dónde opera y cómo pedir ayuda.
- **Depende de:** Épica 02 (terminada el 2026-09-30).
- **Fuentes de contenido:**
    1. «Auditoría digital y levantamiento de contenidos: Grúas Burgos Villarrica», investigación entregada por el desarrollador el 2026-09-30 (fuentes: Facebook, TikTok y fichas públicas del negocio).
    2. Selección de 10 reseñas de Google entregada por el desarrollador el 2026-09-30 (se guarda tal cual en `src/data/resenas.js`, iteración 03-02).

## Alcance

1. **Inicio:** hero con contacto inmediato, cinta de datos verificados, quiénes somos y reseñas.
2. **Servicios:** tres tarjetas de servicio, nota de traslados a otras ciudades y bloque de equipamiento.
3. **Contacto:** canal directo, dirección y horario, cobertura con mapa esquemático, aviso de seguridad, formulario de cotización por WhatsApp (RDA-006, aprobada el 2026-09-30) y cinta de llamada final.

## Inventario de contenido

### Publicable (verificado en la investigación o entregado por el desarrollador)

| Dato | Contenido para el sitio | Dónde se usa |
| :--- | :--- | :--- |
| Disponibilidad | Atención 24 horas, los 7 días. | Hero, cinta, contacto |
| Teléfono y WhatsApp | El número de `negocio.js` (sin cambios). | Todo el sitio |
| Base de operaciones | Vicente Reyes 870, Villarrica. | Cinta, contacto, footer |
| Coordenadas de referencia | Latitud -39.2829139, longitud -72.2253883 (ficha pública del negocio en un directorio; validar contra el pin del perfil de Google en 04-01). | `negocio.js` (datos estructurados en 04-01) |
| Responsable | Yerko Burgos, fundador y operador; está a cargo de los rescates. | Quiénes somos, tarjeta de despacho |
| Equipamiento | Camión de rescate con plataforma (cama) hidráulica inclinable y winche de tiro, rotulado «Rescate en ruta». | Cinta, servicios, equipamiento |
| Vehículos atendidos | Autos, SUV y camionetas, incluidas 4x4. | Servicios, equipamiento |
| Servicios | Traslado en grúa cama; rescate 4x4 y de vehículos atascados; retiro de vehículos siniestrados. | Servicios |
| Traslados a otras ciudades | Se coordinan caso a caso (lema del negocio: «donde nos necesiten»). Sin rutas ni precios fijos. | Servicios (nota) |
| Localidades declaradas por el negocio | Villarrica (base), Pucón (Ruta CH-199), Licán Ray (Ruta S-95-T) y Freire (Ruta CH-199, conexión con la Ruta 5 Sur). | Hero, cobertura, footer |
| Asistencias documentadas | Paso fronterizo Mamuil Malal (Ruta CH-199, Curarrehue). | Quiénes somos, cobertura, servicios |
| Lemas del negocio | «Servicio de grúa 24/7 y donde nos necesiten»; «Preparados para todo tipo de rescate vehicular». | Quiénes somos |
| Valores que destacan los clientes | Rapidez, puntualidad, buena disposición, cuidado con el vehículo y precio justo. | Quiénes somos |
| Reseñas | 10 reseñas de Google, todas de 5 estrellas, seleccionadas por el desarrollador. | Reseñas (03-02) |

### No publicar hasta que Yerko lo confirme

- Años de experiencia o año de inicio (AUD-01-007). La huella digital solo muestra actividad desde 2022, lo que no es una fecha de inicio.
- Marca, modelo, cantidad y capacidad de las grúas; largo de plataforma; camioneta de apoyo (AUD-01-004).
- Asistencia menor en ruta: neumáticos, batería, apertura de vehículos.
- Rescate en nieve o arena como servicio formal; servicio en el camino al centro de esquí del volcán Villarrica.
- Rutas fijas, calendario o tarifas de larga distancia.
- Cobertura garantizada en Coñaripe, Curarrehue, Loncoche o Temuco (AUD-01-006).
- Tiempos de respuesta por zona (AUD-01-005).
- Tarifas, recargos, emisión de factura o boleta, y convenios con aseguradoras.
- Cualquier cifra o afirmación del prototipo (AUD-01-003).

## Iteraciones

| Iteración | Nombre | Depende de |
| :-------- | :----- | :--------- |
| 03-01 | Sección Inicio: hero y contacto inmediato | 02-03 |
| 03-02 | Sección Inicio: quiénes somos y reseñas | 03-01 |
| 03-03 | Sección Servicios y equipamiento | 03-01 |
| 03-04 | Sección Contacto, cobertura y formulario | 03-01 |

## Reglas transversales

1. Solo se publica lo que figura en «Publicable». Lo de «No publicar» no aparece en el sitio, ni siquiera reformulado (Ley 19.496 del Consumidor).
2. Cada iteración trae su «Contenido aprobado»: los textos se copian tal cual, sin agregar adjetivos ni cifras.
3. Datos del negocio solo desde `src/data/negocio.js`; reseñas solo desde `src/data/resenas.js`; servicios solo desde `src/data/servicios.js` (RDA-008).
4. Nombres de acción iguales en toda la página: «Llamar ahora» y «Escribir por WhatsApp» (DESIGN.md §10). Cuando un mismo texto se repite en varios enlaces, cada uno lleva `aria-label` con contexto y el texto visible incluido (WCAG 2.5.3).
5. Sin imágenes del prototipo (AUD-01-011). Hasta recibir fotos reales, los fondos usan color y textura CSS.
6. Cada iteración se cierra con `pnpm format:check`, `pnpm check` y `pnpm build` sin errores ni advertencias, y con medición en navegador a 360 × 640 y 1280 × 800 px.

## Criterio de término

- La página completa (Inicio, Servicios y Contacto) es navegable con `pnpm preview` (o en la vista previa de Cloudflare Pages, si ya está conectado en la Épica 05).
- Ninguna afirmación de la lista «No publicar» aparece en `dist/`.
- Revisión y aprobación del cliente (hito «Prototipo» de la propuesta).