# Evidencia de la fase B de 05-04

Archivo para que el desarrollador entregue lo que solo él puede obtener: las pruebas sobre la **vista previa de la rama** `iteracion/05-04-cambios-cliente` (no sobre producción) y la aprobación del cliente. Se rellena después del `push` de la rama y antes del Pull Request. Todo lo que quede vacío se registrará como «no verificado». No pegar claves, datos personales, datos tributarios ni la conversación con el cliente.

- **Fecha y hora de las pruebas:**
- **Hash del commit desplegado en la vista previa (Cloudflare):**
- **Quién hizo las pruebas y con qué equipos:**

## 1. Vista previa de la rama en Cloudflare

Cómo encontrarla: en el panel de Cloudflare, **Workers & Pages** › proyecto `gruas-burgos-villarrica` › **Deployments**. Busca el despliegue de la rama `iteracion/05-04-cambios-cliente` (entorno Preview). Su estado debe ser «Success» y el hash debe ser el del último commit de la rama. La dirección de la rama suele ser `https://iteracion-05-04-cambios-cliente.gruas-burgos-villarrica.pages.dev`; si no abre, usa el enlace «Visit» del despliegue.

- **Dirección de la vista previa que usaste:**
- **Estado del despliegue y hash del commit:**
- **Resultado de la compilación (¿errores o avisos en el registro?):**

Salida completa del comando (debe incluir `x-robots-tag: noindex`):

```
curl.exe -sI https://iteracion-05-04-cambios-cliente.gruas-burgos-villarrica.pages.dev/

```

## 2. Orden de la página y las tres anclas

El orden esperado, de arriba hacia abajo, es: hero, cinta de métricas, **Servicios**, «Quiénes somos», «Trabajos en terreno», «Lo que dicen nuestros clientes» y **Contacto**.

- En el teléfono, ¿las secciones aparecen en ese orden?:
- En escritorio (1280 px o más), ¿las secciones aparecen en ese orden?:

Toca o haz clic en cada enlace del menú y responde sí o no: ¿la página llega a la sección correcta y su título se ve completo bajo el header?

| Enlace del menú | Teléfono | Escritorio | Si algo falla, ¿qué viste? |
| :-------------- | :------- | :--------- | :------------------------- |
| Inicio          |          |            |                            |
| Servicios       |          |            |                            |
| Contacto        |          |            |                            |

## 3. Los ocho servicios y su botón de WhatsApp (teléfono real)

En el teléfono, toca «Escribir por WhatsApp» en cada tarjeta. Debe abrirse WhatsApp con el número del negocio y el mensaje ya escrito. **No hace falta enviarlo.** Compara el texto con el esperado.

| N.º | Servicio | Mensaje esperado | ¿Abre WhatsApp con ese texto? | Observación |
| :-- | :------- | :--------------- | :---------------------------- | :---------- |
| 1 | Traslado en grúa cama | Hola, quiero cotizar un traslado en grúa cama. | | |
| 2 | Rescate 4x4 y vehículos atascados | Hola, necesito un rescate 4x4. Mi ubicación es: | | |
| 3 | Retiro de vehículos siniestrados | Hola, necesito retirar un vehículo siniestrado. | | |
| 4 | Puente de batería | Hola, necesito un puente de batería. Mi ubicación es: | | |
| 5 | Cambio de neumático | Hola, necesito un cambio de neumático. Mi ubicación es: | | |
| 6 | Rescates complejos con camión pluma | Hola, necesito un rescate complejo con camión pluma. Mi ubicación es: | | |
| 7 | Envío de vehículos a todo Chile y a Argentina | Hola, quiero cotizar el envío de un vehículo. Destino: | | |
| 8 | Traslado de maquinaria liviana | Hola, quiero cotizar el traslado de maquinaria liviana. | | |

- En «Traslado en grúa cama», ¿la segunda característica dice «Autos, SUV, camionetas, furgones y camiones de tres cuartos»?:
- ¿Sigue apareciendo el bloque «¿Necesitas un traslado a otra ciudad?…»? (no debe aparecer):
- Las cinco tarjetas nuevas son más bajas y no llevan ícono ni lista. ¿Se ven ordenadas en el teléfono y en escritorio, sin espacios vacíos en las filas?:
- ¿Algún título o descripción se corta o se sale de su tarjeta?:

## 4. Franja «Quiénes somos» y galería

- Teléfono: ¿la franja muestra el título, dos párrafos cortos y, debajo, la foto de la grúa rescatando una camioneta con cable?:
- Escritorio: ¿la foto queda a la derecha del texto, pequeña, y la franja ocupa poco alto?:
- ¿Aparece algún nombre propio en la franja o en la tarjeta naranja del hero? (no debe; la tarjeta dice «Atendido por sus propios dueños, a cualquier hora.»):
- En el teléfono la foto va **apilada** bajo el texto. ¿La dejas así o prefieres que se oculte en el teléfono? (ver la propuesta y las medidas en la bitácora):
- Galería «Trabajos en terreno»: ¿se ven ocho fotos (una grande al inicio y siete más), sin celdas vacías, en el teléfono y en escritorio?:
- La última foto de la galería (dos grúas en la carretera) es apaisada. ¿Se ve bien el recorte?:
- ¿La foto de la camioneta rescatada con cable aparece solo en «Quiénes somos» y no en la galería?:

## 5. Medios de pago y cobertura

- En Contacto, ¿se ve sin tocar nada el bloque «Medios de pago» con el texto «Efectivo, transferencia, tarjeta de débito y tarjeta de crédito. Emitimos boletas y facturas.»?:
- En «Dónde atendemos», ¿se leen las dos líneas «Grúas en toda La Araucanía.» y «Traslado de vehículos a todo Chile.»?:
- ¿La lista muestra, en este orden, Villarrica, Pucón, Licán Ray, Coñaripe y Freire?:
- ¿La fila de Coñaripe muestra solo el nombre y queda alineada con las demás?:
- ¿El hero y el pie nombran también a Coñaripe?:
- El mapa esquemático sigue con cuatro localidades (sin Coñaripe) hasta la iteración 05-05, que lo reemplaza por la imagen. ¿Lo aceptas para esta vista previa?:

## 6. Primera pantalla del teléfono

- Equipo, sistema y navegador:
- Con la barra de direcciones de Chrome a la vista, ¿se ven completos la etiqueta «Asistencia en ruta 24/7», el título y los dos botones sobre la barra inferior?:
- El párrafo del hero ahora nombra cinco localidades. ¿Se lee completo?:

## 7. Validadores del JSON-LD

Pega la dirección de la vista previa en cada validador. Si el validador no puede leer la vista previa, copia el bloque `<script type="application/ld+json">` del código fuente de la página y pégalo como fragmento de código.

- **Validador de Schema.org** (`https://validator.schema.org/`): errores y advertencias:
- **Prueba de resultados enriquecidos de Google** (`https://search.google.com/test/rich-results`): errores críticos y advertencias:
- ¿El validador muestra `areaServed` con las cinco localidades (Villarrica, Pucón, Licán Ray, Coñaripe y Freire) y La Araucanía?:
- ¿Muestra `paymentAccepted` con «Efectivo, transferencia bancaria, tarjeta de débito, tarjeta de crédito»?:
- ¿Aparece `priceRange`, razón social o RUT? (no deben):

## 8. Otros navegadores

Si no los tienes, deja «no verificado».

- Firefox en el PC: ¿los servicios, la franja, la galería y Contacto se ven igual que en Chrome?:
- Safari en iPhone (si hay uno):

## 9. Aprobación del cliente (AUD-08-023)

Se le envía la vista previa al cliente y se registra su respuesta. Anota solo el resultado: sin teléfonos, sin capturas de la conversación y sin datos personales.

- **Fecha en que se envió la vista previa:**
- **Fecha de la respuesta:**
- **Resultado (aprueba / aprueba con ajustes / no aprueba):**
- **Ajustes que pidió, si los hay** (uno por línea, con tus palabras):
- **¿Confirmó el texto de los servicios nuevos, los medios de pago y la cobertura?:**

## 10. Observaciones y problemas adicionales

-

## 11. Veredicto del desarrollador

- ¿Apruebas la iteración para hacer el Pull Request y el merge? (sí / no, y por qué):
