# Evidencia de la fase B de 05-04

Archivo para que el desarrollador entregue lo que solo él puede obtener: las pruebas sobre la **vista previa de la rama** `iteracion/05-04-cambios-cliente` (no sobre producción) y la aprobación del cliente. Se rellena después del `push` de la rama y antes del Pull Request. Todo lo que quede vacío se registrará como «no verificado». No pegar claves, datos personales, datos tributarios ni la conversación con el cliente.

- **Fecha y hora de las pruebas:** 2026-10-06
- **Hash del commit desplegado en la vista previa (Cloudflare):** 2200f9f27d5ce00f3c2a130c784336bd66e65702
- **Quién hizo las pruebas y con qué equipos:** Felipe Cuevas. Mi Laptop con Google Chrome.

## 1. Vista previa de la rama en Cloudflare

Cómo encontrarla: en el panel de Cloudflare, **Workers & Pages** › proyecto `gruas-burgos-villarrica` › **Deployments**. Busca el despliegue de la rama `iteracion/05-04-cambios-cliente` (entorno Preview). Su estado debe ser «Success» y el hash debe ser el del último commit de la rama. La dirección de la rama suele ser `https://iteracion-05-04-cambios-cliente.gruas-burgos-villarrica.pages.dev`; si no abre, usa el enlace «Visit» del despliegue.

- **Dirección de la vista previa que usaste:** https://3e43c006.gruas-burgos-villarrica.pages.dev/
- **Estado del despliegue y hash del commit:** Success — `2200f9f27d5ce00f3c2a130c784336bd66e65702`
- **Resultado de la compilación (¿errores o avisos en el registro?):** Compilación completada correctamente. Astro generó 2 páginas estáticas y el despliegue a Cloudflare terminó con `Success: Your site was deployed!`. Se observa un aviso `npm warn EBADENGINE` relacionado con `corepack@0.36.0` y Node.js 24.13.1, pero no impidió la instalación ni la compilación.

Salida completa del comando (debe incluir `x-robots-tag: noindex`):

```
curl.exe -sI https://iteracion-05-04-cambios-cliente.gruas-burgos-villarrica.pages.dev/
HTTP/1.1 404 Not Found
Date: Tue, 06 Oct 2026 14:43:35 GMT
Content-Type: text/html
Connection: keep-alive
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FJZ2vP1wd1ywZcDs0%2FkrVCD01sVVPDsDhFtMYhl5hgpiaVkmxmBzrQh%2BWy%2BG0r%2F2AG29CA3XjnlwZ6IszIJfcLoIb5Wl8qSk79OX9WtU8y2KLDUN6tkbZtKdPmiWEF2z%2Fr0WVmPmM3FxQhRo%2BIxplpZU57%2BHROk6xLqyzhTAfpIAQovzE79Owc%2F9izd6J4xvSD9efNs7eT9rYLDidBIN8Q%3D%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a465706eca0336f6-GRU
alt-svc: h3=":443"; ma=86400
```

## 2. Orden de la página y las tres anclas

El orden esperado, de arriba hacia abajo, es: hero, cinta de métricas, **Servicios**, «Quiénes somos», «Trabajos en terreno», «Lo que dicen nuestros clientes» y **Contacto**.

- En el teléfono, ¿las secciones aparecen en ese orden?: Si, así es.
- En escritorio (1280 px o más), ¿las secciones aparecen en ese orden?: Sí, así es.

Toca o haz clic en cada enlace del menú y responde sí o no: ¿la página llega a la sección correcta y su título se ve completo bajo el header?

| Enlace del menú | Teléfono | Escritorio | Si algo falla, ¿qué viste?  |
| :-------------- |:---------|:-----------|:----------------------------|
| Inicio          | Sí       | Sí         | Nada falló                  |
| Servicios       | Sí       | Sí         | Nada falló                  |
| Contacto        | Sí       | Sí         | Nada falló                  |

## 3. Los ocho servicios y su botón de WhatsApp (teléfono real)

En el teléfono, toca «Escribir por WhatsApp» en cada tarjeta. Debe abrirse WhatsApp con el número del negocio y el mensaje ya escrito. **No hace falta enviarlo.** Compara el texto con el esperado.

| N.º | Servicio | Mensaje esperado | ¿Abre WhatsApp con ese texto? | Observación       |
| :-- | :------- | :--------------- |:------------------------------|:------------------|
| 1 | Traslado en grúa cama | Hola, quiero cotizar un traslado en grúa cama. | Sí                            | Sin observaciones |
| 2 | Rescate 4x4 y vehículos atascados | Hola, necesito un rescate 4x4. Mi ubicación es: | Sí                            | Sin observaciones |
| 3 | Retiro de vehículos siniestrados | Hola, necesito retirar un vehículo siniestrado. | Sí                              | Sin observaciones |
| 4 | Puente de batería | Hola, necesito un puente de batería. Mi ubicación es: | Sí                              | Sin observaciones |
| 5 | Cambio de neumático | Hola, necesito un cambio de neumático. Mi ubicación es: | Sí                              | Sin observaciones |
| 6 | Rescates complejos con camión pluma | Hola, necesito un rescate complejo con camión pluma. Mi ubicación es: | Sí                              | Sin observaciones |
| 7 | Envío de vehículos a todo Chile y a Argentina | Hola, quiero cotizar el envío de un vehículo. Destino: | Sí                              | Sin observaciones |
| 8 | Traslado de maquinaria liviana | Hola, quiero cotizar el traslado de maquinaria liviana. | Sí                              | Sin observaciones |

- En «Traslado en grúa cama», ¿la segunda característica dice «Autos, SUV, camionetas, furgones y camiones de tres cuartos»?: Así es.
- ¿Sigue apareciendo el bloque «¿Necesitas un traslado a otra ciudad?…»? (no debe aparecer): No, no aparece.
- Las cinco tarjetas nuevas son más bajas y no llevan ícono ni lista. ¿Se ven ordenadas en el teléfono y en escritorio, sin espacios vacíos en las filas?: Así es.
- ¿Algún título o descripción se corta o se sale de su tarjeta?: Ninguna.
- Observaciones finales:
  - Todas las tarjetas de servicios deben tener el mismo diseño y estructura (tal como los servicios "Traslado en grúa cama", "Rescate 4x4 y vehículos atascados" y "Retiro de vehículos siniestrados") donde
    hay un ícono SVG dentro de un cuadro en la parte superior, seguido de una línea separadora, y también un listado de 3 características siendo "Disponible 24/7" una característica de todos los servicios.

## 4. Franja «Quiénes somos» y galería

- Teléfono: ¿la franja muestra el título, dos párrafos cortos y, debajo, la foto de la grúa rescatando una camioneta con cable?: Así es.
- Escritorio: ¿la foto queda a la derecha del texto, pequeña, y la franja ocupa poco alto?: Así es.
- ¿Aparece algún nombre propio en la franja o en la tarjeta naranja del hero? (no debe; la tarjeta dice «Atendido por sus propios dueños, a cualquier hora.»): No aparece.
- En el teléfono la foto va **apilada** bajo el texto. ¿La dejas así o prefieres que se oculte en el teléfono? (ver la propuesta y las medidas en la bitácora): La dejamos así, se ve bien.
- Galería «Trabajos en terreno»: ¿se ven ocho fotos (una grande al inicio y siete más), sin celdas vacías, en el teléfono y en escritorio?: Así es.
- La última foto de la galería (dos grúas en la carretera) es apaisada. ¿Se ve bien el recorte?: Se ve bien.
- ¿La foto de la camioneta rescatada con cable aparece solo en «Quiénes somos» y no en la galería?: Así es. 

## 5. Medios de pago y cobertura

- En Contacto, ¿se ve sin tocar nada el bloque «Medios de pago» con el texto «Efectivo, transferencia, tarjeta de débito y tarjeta de crédito. Emitimos boletas y facturas.»?: Sí.
- En «Dónde atendemos», ¿se leen las dos líneas «Grúas en toda La Araucanía.» y «Traslado de vehículos a todo Chile.»?:
- ¿La lista muestra, en este orden, Villarrica, Pucón, Licán Ray, Coñaripe y Freire?: Sí.
- ¿La fila de Coñaripe muestra solo el nombre y queda alineada con las demás?: Sí.
- ¿El hero y el pie nombran también a Coñaripe?: Sí.
- El mapa esquemático sigue con cuatro localidades (sin Coñaripe) hasta la iteración 05-05, que lo reemplaza por la imagen. ¿Lo aceptas para esta vista previa?: Sí, lo acepto.

## 6. Primera pantalla del teléfono

- Equipo, sistema y navegador: Samsung Galaxy A52+, Android 16, Google Chrome.
- Con la barra de direcciones de Chrome a la vista, ¿se ven completos la etiqueta «Asistencia en ruta 24/7», el título y los dos botones sobre la barra inferior?: Sí.
- El párrafo del hero ahora nombra cinco localidades. ¿Se lee completo?: Sí.

### 7. Validadores del JSON-LD

* **Schema.org Markup Validator:** validación realizada sobre la vista previa `https://3e43c006.gruas-burgos-villarrica.pages.dev/`.

    * Resultado: **0 errores y 0 advertencias**.
    * Tipo detectado: `EmergencyService` / `AutomotiveBusiness`.
    * `areaServed` contiene las cinco localidades solicitadas: **Villarrica, Pucón, Licán Ray, Coñaripe y Freire**, además de **La Araucanía**.
    * `paymentAccepted` contiene exactamente: **Efectivo, transferencia bancaria, tarjeta de débito, tarjeta de crédito**.
    * No se detecta `priceRange`.
    * No se detecta `legalName`.
    * No se detecta RUT.

* **Google Rich Results Test:** validación realizada sobre la misma vista previa.

    * Se detectó **1 elemento válido de Empresas locales**.
    * Se detectó **1 elemento válido de Organización**.
    * Google informa un problema no crítico por ausencia de `priceRange` (campo opcional).
    * Google también informa que la URL no puede indexarse porque la respuesta contiene `X-Robots-Tag: noindex`. Esto es **esperado y correcto para la vista previa de la rama**, ya que esta versión no debe ser indexada.
    * Google confirmó que `areaServed` contiene **Villarrica, Pucón, Licán Ray, Coñaripe, Freire y La Araucanía**.
    * Google confirmó que `paymentAccepted` contiene **Efectivo, transferencia bancaria, tarjeta de débito y tarjeta de crédito**.
    * No se observa RUT ni `legalName` en los datos estructurados.
    * El aviso sobre `postalCode` corresponde a un campo opcional y no invalida el marcado.

## 8. Otros navegadores

Si no los tienes, deja «no verificado».

- Firefox en el PC: ¿los servicios, la franja, la galería y Contacto se ven igual que en Chrome?: Sí, se ven igual.
- Safari en iPhone (si hay uno): No verificado.

## 9. Aprobación del cliente (AUD-08-023)

Se le envía la vista previa al cliente y se registra su respuesta. Anota solo el resultado: sin teléfonos, sin capturas de la conversación y sin datos personales.

- **Fecha en que se envió la vista previa:** 06-10-2026.
- **Fecha de la respuesta:** 06-10-2026.
- **Resultado (aprueba / aprueba con ajustes / no aprueba):** Aprueba.
- **Ajustes que pidió, si los hay** (uno por línea, con tus palabras): Que aparezca un SVG de la bandera de Chile y de Argentina al otro extremo de la barra de navegación
  donde están los links de las secciones Inicio, Servicios y Contacto. Que en la barra de navegación también aparezca un link para la sección Quiénes Somos, Trabajos en
  Terreno, Lo que dicen Nuestros Clientes. Que la sección Lo que dicen Nuestros Clientes muestre todos los testimonios y no exista el botón "Ver 4 opiniones más" y que
  tenga un SVG del logotipo oficial de Google para que el usuario identifique más rápidamente que esos testimonios vienen de Google. Que la tarjeta "Medios de Pago"
  sea más llamativa con íconos SVG para cada medio de pago ya que esta tarjeta es información que constantemente le preguntan a él
- **¿Confirmó el texto de los servicios nuevos, los medios de pago y la cobertura?:** Sí, los confirmó.

## 10. Observaciones y problemas adicionales

- Ya están todos anotados en este documento.

## 11. Veredicto del desarrollador

- ¿Apruebas la iteración para hacer el Pull Request y el merge? (sí / no, y por qué): No, debemos modificar todo lo que aparece como observado antes de hacer el merge.
