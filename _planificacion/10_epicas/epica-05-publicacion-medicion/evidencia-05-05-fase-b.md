# Evidencia de la fase B de 05-05 · Mapa de cobertura con imagen real

Archivo para que el desarrollador entregue lo que solo él puede obtener: las pruebas del **mapa de cobertura** sobre la **vista previa de la rama** `iteracion/05-05-mapa-cobertura` (no sobre producción). Se rellena después del `push` de la rama y antes del Pull Request. Todo lo que quede vacío se registrará como «no verificado». No pegar claves, datos personales ni la conversación con el cliente.

* **Fecha y hora de las pruebas:**
* **Hash del commit desplegado en la vista previa (Cloudflare):**
* **Quién hizo las pruebas y con qué equipos:**

## 1. Vista previa de la rama en Cloudflare

Cómo encontrarla: en el panel de Cloudflare, **Workers & Pages** › proyecto `gruas-burgos-villarrica` › **Deployments**. Busca el despliegue más reciente de la rama `iteracion/05-05-mapa-cobertura` (entorno Preview). Su estado debe ser «Success» y el hash debe ser el del último commit de la rama. Usa el enlace «Visit» del despliegue: la dirección con el nombre de la rama respondió 404 en una fase B anterior.

* **Dirección de la vista previa que usaste:**
* **Estado del despliegue y hash del commit:**
* **Resultado de la compilación (¿errores o avisos en el registro?):**
* **¿El registro muestra las variantes de `mapa-cobertura` generadas (12 archivos, AVIF y WebP)?:**

Salida completa del comando, **contra la dirección que usaste** (debe decir `200 OK` e incluir `x-robots-tag: noindex`):

```
curl.exe -sI https://<dirección-de-la-vista-previa>/

```

## 2. Mapa en el teléfono

Abre la vista previa en el teléfono y baja hasta «Dónde atendemos», en la sección Contacto.

* **Equipo, sistema y navegador:**
* **¿Aparece el mapa nuevo (un mapa real con un círculo rojo) en lugar del dibujo esquemático anterior?:**
* **¿Se ve completo, sin cortes en los bordes y sin deformarse (el círculo se ve redondo)?:**
* **¿El círculo rojo queda centrado en Villarrica, a tu juicio?:**
* **¿Algo de la página se mueve o salta cuando el mapa termina de cargar?:**
* **¿Hay que desplazarse hacia los lados para verlo? (no debe):**
* **A este tamaño, ¿se alcanza a leer «Villarrica» en el mapa? ¿Y los demás nombres?:**
* **Si no se leen, ¿lo aceptas así (el mapa muestra la zona y las localidades se leen en la lista)?:**
* **¿La lista de arriba sigue mostrando Villarrica, Pucón, Licán Ray, Coñaripe y Freire?:**
* **Con el teléfono en horizontal, ¿se ve bien?:**

## 3. Mapa en escritorio

Con la ventana completa del navegador, baja hasta «Dónde atendemos».

* **Equipo, tamaño de la ventana y navegador:**
* **¿El mapa aparece a la derecha de la lista de localidades?:**
* **¿Se ve completo, sin cortes y sin deformarse?:**
* **¿El círculo rojo queda centrado en Villarrica, a tu juicio?:**
* **¿Se ve nítido (los nombres del mapa se leen)?:**
* **El mapa mide 576 px de lado y queda centrado dentro de un marco oscuro que es más ancho que él. ¿Lo dejas así o prefieres que ocupe todo el ancho de la columna (unos 700 px, con lo que no cabe completo en pantallas bajas)?:**
* **¿El mapa y su atribución caben completos en la pantalla, bajo el menú, sin desplazarse?:**
* **A 768 px de ancho (`F12`, `Ctrl + Shift + M`, «Responsive», 768 de ancho y recarga con `F5`), ¿el mapa queda bajo la lista, centrado y completo?:**

## 4. Atribución

* **¿Se lee «© colaboradores de OpenStreetMap» justo debajo del mapa, en el teléfono?:**
* **¿Y en escritorio?:**
* **¿El texto se lee con comodidad (tamaño y color)?:**
* **Al desplazar la página, ¿la barra inferior del teléfono o los botones flotantes de escritorio tapan el texto de la atribución en algún momento en que el mapa esté a la vista?:**

## 5. Origen y licencia del mapa base

Confirmación escrita, de tu puño y letra. El agente no pudo verificar nada de esto: solo vio la imagen.

* **¿De dónde salió el mapa base? (sitio o herramienta, y fecha en que lo obtuviste):**
* **¿Son datos y teselas de OpenStreetMap? (sí / no):**
* **¿Se usó Google Maps en alguna parte de la imagen: captura, fondo o calco? (sí / no):**
* **¿Con qué licencia se publica el mapa base? (por ejemplo, ODbL para los datos y CC BY-SA para las teselas estándar):**
* **¿Quién dibujó el círculo rojo y los rótulos en negrita, y con qué herramienta?:**
* **¿La atribución «© colaboradores de OpenStreetMap», tal como está publicada, cumple esa licencia? (sí / no, y por qué):**
* **La licencia de OpenStreetMap pide dejar claro que los datos están disponibles bajo la ODbL, lo que suele hacerse con un enlace a su página de copyright. Hoy la atribución es solo texto, sin enlace. ¿Lo aceptas así o quieres agregar el enlace? (sería un cambio nuevo):**

## 6. Otros navegadores

Si no los tienes, deja «no verificado».

* **Firefox en el PC: ¿el mapa y la atribución se ven igual que en Chrome?:**
* **Safari en iPhone (si hay uno):**

## 7. Observaciones y problemas adicionales

*

## 8. Veredicto del desarrollador

* **¿Apruebas la iteración para hacer el Pull Request y el merge? (sí / no, y por qué):**
