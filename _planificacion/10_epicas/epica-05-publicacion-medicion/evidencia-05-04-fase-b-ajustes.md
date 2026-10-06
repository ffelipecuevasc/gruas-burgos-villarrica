# Evidencia de la fase B de 05-04 · Tanda de ajustes del cliente

Archivo para que el desarrollador entregue lo que solo él puede obtener: las pruebas de **lo que cambió en la tanda de ajustes** sobre la **vista previa de la rama** `iteracion/05-04-cambios-cliente` (no sobre producción). Se rellena después del `push` de la rama y antes del Pull Request. Todo lo que quede vacío se registrará como «no verificado». No pegar claves, datos personales ni la conversación con el cliente.

* **Fecha y hora de las pruebas:** 2026-10-06
* **Hash del commit desplegado en la vista previa (Cloudflare):** `c1b0eeacdd002ba8855adaa45e16b4be853dd3b5`
* **Quién hizo las pruebas y con qué equipos:** Felipe Cuevas. Pruebas realizadas en PC con Windows 10 Pro y teléfono Android, utilizando Google Chrome.

## 1. Vista previa de la rama en Cloudflare

Cómo encontrarla: en el panel de Cloudflare, **Workers & Pages** › proyecto `gruas-burgos-villarrica` › **Deployments**. Busca el despliegue más reciente de la rama `iteracion/05-04-cambios-cliente` (entorno Preview). Su estado debe ser «Success» y el hash debe ser el del último commit de la rama. En la fase B anterior, la dirección con el nombre de la rama respondió 404: usa el enlace «Visit» del despliegue.

* **Dirección de la vista previa que usaste:** `https://a7e59774.gruas-burgos-villarrica.pages.dev/`
* **Estado del despliegue y hash del commit:** `Success` — `c1b0eeacdd002ba8855adaa45e16b4be853dd3b5`
* **Resultado de la compilación (¿errores o avisos en el registro?):** Compilación completada correctamente. Astro generó 2 páginas, las imágenes optimizadas correctamente y el despliegue finalizó con `Success: Your site was deployed!`. No se registraron errores de compilación. Se observa un aviso `npm warn EBADENGINE` relacionado con `corepack@0.36.0`, que requiere una versión de Node distinta a la instalada (`Node v24.13.1`), pero no impidió la instalación, compilación ni despliegue.

Salida completa del comando, **contra la dirección que usaste** (debe decir `200 OK` e incluir `x-robots-tag: noindex`):

```
curl.exe -sI https://a7e59774.gruas-burgos-villarrica.pages.dev/
HTTP/1.1 200 OK
Date: Tue, 06 Oct 2026 18:37:28 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
content-security-policy: frame-ancestors 'none'
permissions-policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-frame-options: DENY
x-robots-tag: noindex
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=T9NeYqnJeW0mW%2FWedrqxDi4mm%2BytWDtTJ9ykBpvQex%2Bqcxj6ARAI%2FbltghSqMW93PDXy70%2FzleaTws2ws43BtJXEVUycRewWzLxcDY2Kupi9XBqgH7s3gXLphCkBaGvPGaExkz7RBUpCJjPi0KO4DoEeIMMpmSEJrblAU8e6F%2FP1Yr%2Buggvy59M%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a466c70dee8c13de-GRU
alt-svc: h3=":443"; ma=86400
```

## 2. Menú en el teléfono (tres enlaces)

* **Equipo, sistema y navegador:** Teléfono Android + Google Chrome.
* **¿El menú muestra solo «Inicio», «Servicios» y «Contacto»?:** Sí.
* **¿Los tres llevan a su sección, con el título visible bajo el header?:** Sí.
* **¿El header mide lo mismo que antes (no se ve más alto ni más bajo)?:** Sí.

## 3. Menú en escritorio (seis enlaces)

Prueba a 768 px (`F12`, `Ctrl + Shift + M`, «Responsive», 768 de ancho y recarga con `F5`) y con la ventana completa. Haz clic en cada enlace y responde sí o no: ¿la página llega a la sección correcta y su título se ve completo bajo el header?

| Enlace del menú     | 768 px | Ventana completa | Si algo falla, ¿qué viste? |
| :------------------ | :----- | :--------------- | :------------------------- |
| Inicio              | Sí     | Sí               | —                          |
| Servicios           | Sí     | Sí               | —                          |
| Quiénes somos       | Sí     | Sí               | —                          |
| Trabajos en terreno | Sí     | Sí               | —                          |
| Opiniones           | Sí     | Sí               | —                          |
| Contacto            | Sí     | Sí               | —                          |

* **A 768 px, ¿los seis enlaces caben en una sola línea, sin cortarse ni montarse sobre las banderas?:** Sí.
* **A 767 px (un píxel menos), ¿quedan solo tres enlaces?:** Sí.
* **Con `Tab`, ¿el foco pasa por los seis enlaces en orden y su contorno se ve completo?:** Sí.

## 4. Banderas del menú

Son las que entregaste el 2026-10-06 (íconos con las esquinas redondeadas; la de Argentina, con el Sol de Mayo).

* **Teléfono: ¿se ven las dos banderas en el extremo derecho del menú (24 px), sin tapar ni empujar los enlaces «Inicio», «Servicios» y «Contacto»?:** Sí.
* **Teléfono: ¿se reconocen a ese tamaño? ¿Se distingue el Sol de Mayo?:** Sí.
* **Escritorio: ¿se ven en el extremo derecho del menú, más grandes (32 px)?:** Sí.
* **A 768 px de ancho quedan a 16 px de «Contacto». ¿Se ve holgado o apretado?:** Se ve correctamente espaciado y sin sensación de estar apretado.
* **¿El header mide lo mismo que antes (las banderas no lo hacen más alto)?:** Sí.
* **¿Las dejas así o prefieres otro tamaño o posición?:** Se dejan así. El tamaño y la posición actuales funcionan correctamente. El único cambio que deseo es que no tengan los bordes redondeados, sino cuadrados.

## 5. Opiniones

* **¿Se ven las diez opiniones sin tocar nada, en el teléfono y en escritorio?:** Sí.
* **¿Sigue apareciendo el botón «Ver 4 opiniones más»? (no debe aparecer):** No, no aparece.
* **¿Sigue el botón «Ver más opiniones en Google» al final?:** Sí.
* **Teléfono: ¿el logotipo de Google se ve debajo del título «Lo que dicen nuestros clientes»?:** Sí.
* **Escritorio: ¿el logotipo queda en el extremo derecho de la fila del título, a su misma altura y lejos de la bajada «Opiniones publicadas en Google.»? Revísalo a 768 px y con la ventana completa:** Sí.
* **En un teléfono en horizontal o una ventana de 520 a 767 px, el logotipo queda al lado del título (no en el extremo derecho). ¿Lo aceptas?:** Sí.
* **¿El logotipo se ve bien sobre el fondo oscuro (colores y tamaño)?:** Sí.
* **En el teléfono, con las diez opiniones visibles y las ocho tarjetas completas, la página quedó unos 1.900 px más larga (unas tres pantallas más de desplazamiento). ¿Lo aceptas?:** Sí.

## 6. Medios de pago

* **¿El bloque «Medios de pago» se distingue del resto de Contacto (borde naranja)?:** Sí.
* **¿Se ven los cuatro medios, cada uno con su ícono y su nombre: «Efectivo», «Transferencia», «Tarjeta de débito» y «Tarjeta de crédito»?:** Sí.
* **¿Se lee debajo «Emitimos boletas y facturas.»?:** Sí.
* **¿Los íconos se entienden? En especial, ¿se distinguen el de débito y el de crédito?:** Sí.
* **En el teléfono, ¿algún nombre se corta o se sale del bloque?:** No.

## 7. Las ocho tarjetas de servicio

* **¿Las ocho tienen la misma estructura: ícono en un cuadro, línea, título, descripción, tres características y botón?:** Sí.
* **¿La tercera característica de las ocho es «Disponible 24/7»?:** Sí.
* **En «Rescate 4x4 y vehículos atascados», ¿se leen «Winche de tiro», «Caminos rurales y de cordillera» y «Disponible 24/7»?:** Sí.
* **¿Los íconos de los cinco servicios nuevos se entienden (batería, neumático, camión pluma, envío y maquinaria)? Si alguno no convence, di cuál:** Sí, todos se entienden correctamente.
* **Escritorio con la ventana completa: ¿se ven cuatro tarjetas arriba y cuatro abajo, sin espacios vacíos?:** Sí.
* **Teléfono: ¿las ocho van una bajo otra, sin textos cortados?:** Sí.
* **Toca «Escribir por WhatsApp» en dos tarjetas cualesquiera: ¿abre WhatsApp con el mensaje del servicio? (los mensajes no cambiaron):** Sí.

### 7.1 Banderas en la tarjeta de envío

* **En «Envío de vehículos a todo Chile y a Argentina», ¿se ven las dos banderas arriba a la derecha, frente al ícono, en el teléfono y en escritorio?:** Sí.
* **¿La tarjeta mide lo mismo que las de su fila (no quedó más alta ni descuadrada)?:** Sí.
* **¿Alguna otra tarjeta lleva banderas? (no debe):** No.
* **¿Te parece bien la ubicación o prefieres otra dentro de la tarjeta?:** La ubicación actual es correcta y se deja así.

### 7.2 Ícono del camión pluma

El sitio conserva el ícono actual. En la bitácora de la segunda pasada están los nombres de dos alternativas y la carpeta con sus capturas.

* **¿Cuál eliges: el actual, la alternativa 1 o la alternativa 2?:** Se mantiene el ícono actual.

## 8. Primera pantalla del teléfono

* **Con la barra de direcciones de Chrome a la vista, ¿se ven completos la etiqueta «Asistencia en ruta 24/7», el título y los dos botones sobre la barra inferior?:** Sí.
* **¿Las banderas del menú le quitan espacio o atención a esa primera pantalla?:** No.

## 9. Otros navegadores

Si no los tienes, deja «no verificado».

* **Firefox en el PC: ¿el menú de seis enlaces, las banderas, las opiniones, los medios de pago y las tarjetas se ven igual que en Chrome?:** Sí, verificado.
* **Safari en iPhone (si hay uno):** no verificado.

## 10. Observaciones y problemas adicionales

* No se detectaron problemas adicionales durante las pruebas.
* La compilación y el despliegue en Cloudflare finalizaron correctamente.
* La única comprobación pendiente corresponde a otros navegadores, ya que no se dispone de iPhone para probar Safari y no se realizó una prueba independiente en Firefox.

## 11. Veredicto del desarrollador

* **¿Apruebas la iteración para hacer el Pull Request y el merge? (sí / no, y por qué):** **Sí.** La iteración queda aprobada para Pull Request y merge luego de la pequeña 
 modificación a los archivos SVG de las banderas. Las pruebas realizadas sobre la vista previa confirman que los ajustes solicitados funcionan correctamente en teléfono 
 Android y escritorio con Chrome, incluyendo menú responsive, banderas, opiniones, medios de pago, tarjetas de servicio, tarjeta de envío, ícono del camión pluma y primera 
 pantalla. No se detectaron problemas funcionales ni visuales. Solo queda **no verificado** el apartado de otros navegadores por no disponer de un iPhone.
