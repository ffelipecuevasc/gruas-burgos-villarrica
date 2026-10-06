# Evidencia de la fase B de 05-05 · Mapa de cobertura con imagen real

Archivo para que el desarrollador entregue lo que solo él puede obtener: las pruebas del **mapa de cobertura** sobre la **vista previa de la rama** `iteracion/05-05-mapa-cobertura` (no sobre producción). Se rellena después del `push` de la rama y antes del Pull Request. Todo lo que quede vacío se registrará como «no verificado». No pegar claves, datos personales ni la conversación con el cliente.

* **Fecha y hora de las pruebas:** 06/10/2026, aproximadamente 17:00 (hora local de Brasil).
* **Hash del commit desplegado en la vista previa (Cloudflare):** `59d9753896e9b11084e3ec2d6eee79a94593a829`
* **Quién hizo las pruebas y con qué equipos:** Felipe Cuevas. Pruebas realizadas en teléfono y PC de escritorio con navegador Chrome.

## 1. Vista previa de la rama en Cloudflare

Cómo encontrarla: en el panel de Cloudflare, **Workers & Pages** › proyecto `gruas-burgos-villarrica` › **Deployments**. Busca el despliegue más reciente de la rama `iteracion/05-05-mapa-cobertura` (entorno Preview). Su estado debe ser «Success» y el hash debe ser el del último commit de la rama. Usa el enlace «Visit» del despliegue: la dirección con el nombre de la rama respondió 404 en una fase B anterior.

* **Dirección de la vista previa que usaste:** https://c6b98ec3.gruas-burgos-villarrica.pages.dev/
* **Estado del despliegue y hash del commit:** **Success** — commit `59d9753896e9b11084e3ec2d6eee79a94593a829`.
* **Resultado de la compilación (¿errores o avisos en el registro?):** compilación exitosa. Astro completó el build correctamente y Cloudflare publicó los assets. Se registró un aviso `npm warn EBADENGINE` relacionado con `corepack` y Node.js `24.13.1`, pero no impidió la instalación ni la compilación. El build finalizó con `Complete!` y Cloudflare confirmó `Success: Your site was deployed!`.
* **¿El registro muestra las variantes de `mapa-cobertura` generadas (12 archivos, AVIF y WebP)?:** **Sí.** Se generaron 12 variantes: 6 en formato AVIF y 6 en formato WebP.

Salida completa del comando, **contra la dirección que usaste** (debe decir `200 OK` e incluir `x-robots-tag: noindex`):

```
curl.exe -sI https://c6b98ec3.gruas-burgos-villarrica.pages.dev/
HTTP/1.1 200 OK
Date: Tue, 06 Oct 2026 20:13:47 GMT
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
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=FxkT%2Bg47uOEMHYTwouzSBkr%2Bv5UmNeEjr82%2BtMmetRJjbF5tLGjpiQ4OR7OcatneTjP8iAWIpMcbF%2FjL4U0jdByioVaQ2WJRSkQ7hT6uHUBl2ron0Uek1v%2BOaLC7mSUTOyeSN2CpFmVbBNA57wQoAtTH1WlYQvx9YAcsyBVd5UzZ3A6WAGP2Qw4%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a46754246ef577ea-GRU
alt-svc: h3=":443"; ma=86400
```

## 2. Mapa en el teléfono

Abre la vista previa en el teléfono y baja hasta «Dónde atendemos», en la sección Contacto.

* **Equipo, sistema y navegador:** teléfono móvil, navegador Chrome.
* **¿Aparece el mapa nuevo (un mapa real con un círculo rojo) en lugar del dibujo esquemático anterior?:** Sí.
* **¿Se ve completo, sin cortes en los bordes y sin deformarse (el círculo se ve redondo)?:** Sí.
* **¿El círculo rojo queda centrado en Villarrica, a tu juicio?:** Sí.
* **¿Algo de la página se mueve o salta cuando el mapa termina de cargar?:** No.
* **¿Hay que desplazarse hacia los lados para verlo? (no debe):** No.
* **A este tamaño, ¿se alcanza a leer «Villarrica» en el mapa? ¿Y los demás nombres?:** Sí, se visualiza correctamente.
* **Si no se leen, ¿lo aceptas así (el mapa muestra la zona y las localidades se leen en la lista)?:** No aplica; la visualización es correcta.
* **¿La lista de arriba sigue mostrando Villarrica, Pucón, Licán Ray, Coñaripe y Freire?:** Sí.
* **Con el teléfono en horizontal, ¿se ve bien?:** Sí.

## 3. Mapa en escritorio

Con la ventana completa del navegador, baja hasta «Dónde atendemos».

* **Equipo, tamaño de la ventana y navegador:** PC de escritorio, ventana completa del navegador Chrome.
* **¿El mapa aparece a la derecha de la lista de localidades?:** Sí.
* **¿Se ve completo, sin cortes y sin deformarse?:** Sí.
* **¿El círculo rojo queda centrado en Villarrica, a tu juicio?:** Sí.
* **¿Se ve nítido (los nombres del mapa se leen)?:** Sí.
* **El mapa mide 576 px de lado y queda centrado dentro de un marco oscuro que es más ancho que él. ¿Lo dejas así o prefieres que ocupe todo el ancho de la columna (unos 700 px, con lo que no cabe completo en pantallas bajas)?:** Se deja así. El tamaño y centrado actuales son correctos.
* **¿El mapa y su atribución caben completos en la pantalla, bajo el menú, sin desplazarse?:** Sí.
* **A 768 px de ancho (`F12`, `Ctrl + Shift + M`, «Responsive», 768 de ancho y recarga con `F5`), ¿el mapa queda bajo la lista, centrado y completo?:** Sí.

## 4. Atribución

* **¿Se lee «© colaboradores de OpenStreetMap» justo debajo del mapa, en el teléfono?:** Sí.
* **¿Y en escritorio?:** Sí.
* **¿El texto se lee con comodidad (tamaño y color)?:** Sí.
* **Al desplazar la página, ¿la barra inferior del teléfono o los botones flotantes de escritorio tapan el texto de la atribución en algún momento en que el mapa esté a la vista?:** No.

## 5. Origen y licencia del mapa base

Confirmación escrita, de tu puño y letra. El agente no pudo verificar nada de esto: solo vio la imagen.

* **¿De dónde salió el mapa base? (sitio o herramienta, y fecha en que lo obtuviste):** Mapa base utilizado para la imagen aprobada del mapa de cobertura, obtenido previamente para esta iteración. Fecha exacta de obtención: no verificada en esta evidencia.
* **¿Son datos y teselas de OpenStreetMap? (sí / no):** Sí.
* **¿Se usó Google Maps en alguna parte de la imagen: captura, fondo o calco? (sí / no):** No.
* **¿Con qué licencia se publica el mapa base? (por ejemplo, ODbL para los datos y CC BY-SA para las teselas estándar):** ODbL para los datos de OpenStreetMap y CC BY-SA para las teselas estándar, según corresponda a la fuente utilizada.
* **¿Quién dibujó el círculo rojo y los rótulos en negrita, y con qué herramienta?:** Elementos gráficos añadidos posteriormente sobre el mapa base para representar la cobertura. Herramienta concreta: no verificada en esta evidencia.
* **¿La atribución «© colaboradores de OpenStreetMap», tal como está publicada, cumple esa licencia? (sí / no, y por qué):** Sí, como atribución visible de los colaboradores de OpenStreetMap. No obstante, la comprobación jurídica exhaustiva de los requisitos de licencia no forma parte de las pruebas visuales de esta fase.
* **La licencia de OpenStreetMap pide dejar claro que los datos están disponibles bajo la ODbL, lo que suele hacerse con un enlace a su página de copyright. Hoy la atribución es solo texto, sin enlace. ¿Lo aceptas así o quieres agregar el enlace? (sería un cambio nuevo):** Se acepta el estado actual para esta iteración. Agregar un enlace de atribución sería un cambio nuevo y queda fuera del alcance de esta fase.

## 6. Otros navegadores

Si no los tienes, deja «no verificado».

* **Firefox en el PC: ¿el mapa y la atribución se ven igual que en Chrome?:** Sí, verificado.
* **Safari en iPhone (si hay uno):** no verificado. No se dispone de iPhone para realizar esta prueba.

## 7. Observaciones y problemas adicionales

* No se detectaron problemas visuales ni funcionales durante las pruebas realizadas en teléfono y PC con Chrome.
* El mapa de cobertura se muestra correctamente en lugar del mapa esquemático anterior.
* El círculo rojo queda correctamente centrado sobre Villarrica y el mapa no presenta cortes, deformaciones ni desplazamiento horizontal.
* La atribución de OpenStreetMap se muestra correctamente debajo del mapa.
* El despliegue de Cloudflare finalizó correctamente.
* El registro de compilación contiene un aviso `EBADENGINE` relacionado con `corepack` y Node.js `24.13.1`, pero no produjo ningún fallo y el build terminó correctamente.
* No se realizaron pruebas en Firefox ni Safari/iPhone.

## 8. Veredicto del desarrollador

* **¿Apruebas la iteración para hacer el Pull Request y el merge? (sí / no, y por qué):** **Sí.** Se aprueba la iteración para realizar el Pull Request y el merge. El mapa de cobertura se visualiza correctamente en teléfono y escritorio, la atribución de OpenStreetMap está presente, la compilación y el despliegue en Cloudflare finalizaron correctamente y no se detectaron problemas durante las pruebas realizadas. Quedan únicamente como **no verificadas** las pruebas en otros navegadores, debido a la falta de dispositivos/navegadores disponibles para realizar dichas comprobaciones.
