# Épica 05 · Ajustes finales, publicación y medición

- **Estado:** En curso.
- **Objetivo:** dejar el sitio de `gruasvillarrica.cl` con los ajustes que pidió el cliente, verificar la versión final en producción y dejar operativas la medición y la campaña de Google Ads. Es la etapa final del proyecto.
- **Depende de:** Épica 04 (terminada; verificada por el desarrollador el 2026-10-02, commit `57de857`). La Épica 03 sigue «En revisión» hasta registrar la aprobación del cliente (AUD-08-023).
- **Fechas:** entrega tentativa 2026-10-18. La campaña de Google Ads se activa a fines de octubre, cuando el desarrollador se lo avise al cliente. La mantención de octubre sigue vigente (ver «Después de la entrega»).

## Alcance

1. Pie de página sin solape con los botones flotantes y hero menos oscuro (05-03).
2. Cambios pedidos por el cliente: servicios al inicio, «Quiénes somos» reducido y sin nombres propios, servicios nuevos, medios de pago, cobertura y datos que ya no se publican (05-04).
3. Mapa de cobertura como imagen real (05-05).
4. Verificación final en producción: prueba de humo, caché, HSTS, PageSpeed y validadores (05-01).
5. Medición y Google Ads: Search Console, Web Analytics (decisión previa) y campaña (05-02).

Las acciones en Cloudflare, Google Search Console, Google Ads y el teléfono real las ejecuta el desarrollador. El agente prepara archivos, listas de verificación y documentación.

## Iteraciones

Se ejecutan en el orden de la tabla. 05-01 y 05-02 conservan sus números porque otros documentos las citan (AUD-09-016, AUD-09-018, RDA-008 y la bitácora de cierre de la Épica 04), pero se hacen al final, sobre el sitio ya modificado.

| Iteración | Nombre                                                       | Depende de   | Dónde se verifica                                        |
| :-------- | :----------------------------------------------------------- | :----------- | :------------------------------------------------------- |
| 05-03     | Pie de página y hero menos oscuro                            | 04-04        | Fase A en local; fase B en la vista previa de `pages.dev` |
| 05-04     | Cambios del cliente: contenido y estructura de la página     | 05-03        | Fase A en local; fase B en la vista previa y con el cliente |
| 05-05     | Mapa de cobertura con imagen real                            | 05-04 y el archivo WebP del desarrollador | Fase A en local; fase B en la vista previa |
| 05-01     | Publicación y verificación final en producción               | 05-03, 05-04 y 05-05 | Fase A en local; fase B en `gruasvillarrica.cl`   |
| 05-02     | Medición: Search Console, Web Analytics y Google Ads         | 05-01        | Fase B en los paneles                                    |

## Decisiones del desarrollador que rigen esta épica (2026-10-05)

1. **Revisión con el cliente (2026-10-04).** Yerko aprobó el diseño, los colores, el tamaño de letra y el hero con su texto. Los cambios que pidió son 05-03 a 05-05. Las notas y la transcripción de la reunión quedan **fuera del repositorio**, que es público y no debe contener datos personales ni comentarios comerciales. En los documentos se cita «reunión del 2026-10-04».
2. **Botones flotantes.** En escritorio se ocultan al llegar al pie de página y reaparecen al subir (05-03). Esto requiere JavaScript en el cliente: si no cabe bajo el límite de RDA-006 (1 KB), se detiene y se consulta.
3. **Pie de página.** Se elimina «© 2026 Grúas Burgos». Queda solo «Sitio desarrollado por Felipe Cuevas», centrado. Razón social y RUT no se publican nunca (decisión del cliente), por lo que la fila de facturación del pie se elimina.
4. **Quiénes somos.** Pasa a una franja resumida, sin nombres propios («atendido por sus propios dueños») y con una imagen pequeña: la foto 07, que sale de la galería (05-04).
5. **Servicios.** Suben justo bajo el hero. Se agregan puente de batería, cambio de neumático, rescates complejos con camión pluma y envío de vehículos a todo Chile y a Argentina. «Precios muy competitivos» queda aprobado por el desarrollador: es una afirmación subjetiva que no se respalda con datos y se acepta como riesgo (Ley 19.496).
6. **Cobertura.** «Grúas en toda La Araucanía» y «traslado de vehículos a todo Chile», en texto. Coñaripe entra a la lista de localidades, que queda en Villarrica, Pucón, Licán Ray, Coñaripe y Freire. Licán Ray y Coñaripe son de la Región de Los Ríos (comuna de Panguipulli): por eso la lista se mantiene y no se reemplaza por «toda La Araucanía». Panguipulli y Valdivia no se publican.
7. **Mapa.** Local, con las cinco localidades. La región se dice en texto, no en la imagen (05-05).
8. **Medios de pago y documentos.** Efectivo, transferencia, débito, crédito, boletas y facturas, aprobados desde ya, aunque la máquina de cobro del cliente llega el 2026-10-06.
9. **Recargo por urgencia.** No se publica. Yerko lo negocia por teléfono caso a caso.
10. **Hero menos oscuro.** Se mantiene el ajuste aunque la reunión no lo mencionó (Yerko dijo que el hero estaba bien). El desarrollador aprueba visualmente el nivel (05-03).
11. **Fotos.** Sin fotos de internet (derechos de autor). Las fotos del camión de carga y del camión pluma solo entran cuando Yerko o su colega las entreguen con permiso. Hasta entonces, esos servicios van sin foto.
12. **Orden de ejecución.** 05-03, 05-04, 05-05, 05-01 y 05-02.
13. **Vehículos y maquinaria (2026-10-05).** Yerko los confirmó por escrito (WhatsApp) y el desarrollador los aprueba, **incluido «camión de 15 toneladas»**: autos, SUV, camionetas, furgones y camiones de tres cuartos; maquinaria liviana (minirretroexcavadoras, montacargas y minicargadores), con la grúa cama y, si es necesario, con un camión de 15 toneladas. No se publica «todo tipo de vehículos» ni «etc.» (no se pueden respaldar). Entra en 05-04 como un servicio nuevo («Traslado de maquinaria liviana») y en la lista del traslado en grúa cama.
14. **Ajustes del cliente del 2026-10-06.** Tras ver la vista previa de 05-04, el cliente aprobó los cambios y pidió cuatro ajustes; el desarrollador agregó un quinto. Se implementan en 05-04, antes del merge:
    - **Menú.** Seis enlaces desde 768 px, en el orden de la página: «Inicio», «Servicios», «Quiénes somos», «Trabajos en terreno», «Opiniones» y «Contacto». Bajo 768 px siguen los tres de antes. La página pasa a seis anclas (RDA-009).
    - **Banderas.** Las de Chile y Argentina, en SVG, en el extremo derecho del menú, con el nombre accesible «Banderas de Chile y Argentina». No son enlaces. Son las entregadas por el desarrollador el 2026-10-06 (íconos de 32 × 32, sin modificar; la de Argentina lleva el Sol de Mayo) y van también, como decoración, en la tarjeta «Envío de vehículos a todo Chile y a Argentina».
    - **Opiniones.** Las diez visibles, sin acordeón ni «Ver 4 opiniones más» (RDA-007), con el logotipo de Google junto al título (nombre accesible «Google»; marca de un tercero, sin modificar). Se mantiene «Ver más opiniones en Google».
    - **Medios de pago.** Bloque destacado, con un ícono y el nombre visible de cada medio: «Efectivo», «Transferencia», «Tarjeta de débito» y «Tarjeta de crédito», y debajo «Emitimos boletas y facturas.».
    - **Tarjetas de servicio (pedido del desarrollador).** Las ocho con la misma estructura: ícono en un cuadro, separador y tres características, la última «Disponible 24/7». Textos nuevos: Puente de batería, «Asistencia en ruta» y «Para vehículos que no parten»; Cambio de neumático, «Asistencia en ruta» y «Atención en el lugar»; Rescates complejos con camión pluma, «Cuando la plataforma no puede operar» y «Levantamiento con camión pluma»; Envío de vehículos a todo Chile y a Argentina, «Envíos a todo Chile» y «Envíos a Argentina»; Traslado de maquinaria liviana, «Minirretroexcavadoras y minicargadores» y «Montacargas». En «Rescate 4x4 y vehículos atascados», «Disponible 24/7» reemplaza a «Servicio en el paso Mamuil Malal» (decisión del desarrollador del 2026-10-06, para dejar exactamente tres); el paso sigue nombrado en «Quiénes somos» y en la cobertura.

## Lista «No publicar» vigente

Actualiza la de `definicion-epica-03.md`. Rige también para metadatos, textos alternativos, JSON-LD y los textos de los anuncios de Google Ads.

**Sale de la lista (aprobado el 2026-10-05):**

- Asistencia menor en ruta, solo puente de batería y cambio de neumático.
- Cobertura en La Araucanía y en Coñaripe, sin garantías de tiempo.
- Emisión de boletas y facturas.
- Tipos de vehículo que se trasladan (furgones y camiones de tres cuartos, además de autos, SUV y camionetas), maquinaria liviana y la capacidad del camión de carga: «camión de 15 toneladas» (confirmado por escrito por el cliente el 2026-10-05).

**Sigue sin publicarse:**

- Años de experiencia o año de inicio.
- Marca, modelo, cantidad y capacidad de las grúas; largo de plataforma; camioneta de apoyo. Única excepción: «camión de 15 toneladas» (decisión 13).
- Apertura de vehículos.
- Rescate en nieve o arena como servicio formal; servicio en el camino al centro de esquí del volcán Villarrica.
- Rutas fijas, calendario o tarifas de larga distancia (el envío nacional e internacional se publica sin rutas ni tarifas).
- Tiempos de respuesta por zona.
- Tarifas, recargos (incluido el recargo por urgencia) y convenios con aseguradoras o con empresas de transporte.
- Cualquier cifra o afirmación del prototipo.
- Nombres propios del dueño y datos tributarios: razón social y RUT.
- Que el camión pluma sea propio: se publica como servicio, no como flota.

**Sin contenido pendiente por ahora.** Si Yerko confirma otra capacidad, cifra o tipo de vehículo, entra a «Contenido aprobado» solo con la aprobación explícita del desarrollador.

## Reglas transversales

1. Solo se publica lo que figura en «Contenido aprobado» de cada iteración. Los textos se copian tal cual, sin agregar adjetivos ni cifras.
2. Ningún texto alternativo transcribe rótulos de las fotos (teléfonos, nombres, patentes) ni nombra la marca o el modelo de las grúas (RDA-011).
3. Datos del negocio solo desde `src/data/negocio.js`, servicios desde `src/data/servicios.js` y reseñas desde `src/data/resenas.js` (RDA-008). Un dato sin confirmar no se publica, ni siquiera en el JSON-LD.
4. Cada iteración cierra con `pnpm format:check`, `pnpm check` y `pnpm build` sin errores ni advertencias, y con medición real en navegador a 360 × 640 y 1280 × 800 px, más los anchos que pida cada iteración. Un criterio sin medición real no se marca como cumplido.
5. El JavaScript de cliente propio sigue por debajo de 1 KB (RDA-006). Quien lo supere se detiene y consulta.
6. La primera pantalla a 360 × 640 px se conserva: etiqueta, `h1` y ambos botones del hero completos sobre la barra inferior, con 8 px de margen o más (hoy 17 px).
7. Presupuesto de peso medido a 360 × 640 px, densidad 1 y red 4G: total de 400 KB o menos, HTML más CSS de 50 KB o menos, JavaScript de menos de 1 KB y foto del hero de 150 KB o menos.
8. Nada enfocado ni legible queda cubierto por elementos fijos (FA-01 y FA-02 de 04-04). Cualquier cambio al pie, a los botones flotantes o a las secciones se mide con Tab y Mayús + Tab.
9. Lo que solo el desarrollador puede hacer figura en «Tareas del desarrollador» y se registra en un archivo de evidencia (fase B, plantilla de `evidencia-04-03-fase-b.md`).
10. Repositorio público: ni la transcripción de la reunión ni correos personales ni datos tributarios entran a ningún archivo.

## Después de la entrega

La mantención de octubre sigue incluida: el cliente pide cambios menores por mensaje y el desarrollador los aplica sin costo extra hasta el 2026-10-31. Los cambios se registran en una bitácora corta por tanda de cambios, bajo el flujo de ramas vigente. Cualquier sección nueva que no esté en esta épica se evalúa aparte.

## Criterio de término

- Todos los cambios de 05-03, 05-04 y 05-05 publicados en `https://gruasvillarrica.cl` y verificados en producción (05-01).
- Lighthouse móvil de la versión final con 95 o más en las cuatro categorías, y LCP de 2,5 s o menos.
- Aprobación del cliente de los cambios registrada (AUD-08-023).
- Propiedad verificada y `sitemap-index.xml` procesado en Search Console, con evidencia.
- Decisiones de RDA-010 y de Web Analytics registradas, y campaña de Google Ads con la URL final del sitio lista para activarse a fines de octubre.
