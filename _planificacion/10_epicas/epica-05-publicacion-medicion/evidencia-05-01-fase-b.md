# Evidencia de la fase B de 05-01 · Publicación y verificación final en producción

Archivo para que el desarrollador entregue lo que solo él puede obtener: la cabecera HSTS en la **vista previa de la rama** `iteracion/05-01-verificacion-final` (antes del merge) y la verificación final en **producción**, `https://gruasvillarrica.cl` (después del merge). Todo lo que quede vacío se registrará como «no verificado». No pegar claves, datos personales ni la conversación con el cliente.

Los comandos son para **PowerShell**. Escribe siempre `curl.exe` (con `.exe`): en PowerShell, `curl` a secas es otro programa. Para filtrar una salida se usa `Select-String`.

* **Fecha y hora de las pruebas:**
* **Hash del commit desplegado en la vista previa (Cloudflare):**
* **Hash del commit desplegado en producción (Cloudflare, `main`):**
* **Quién hizo las pruebas y con qué equipos (PC, teléfono, sistema y navegador):**

## 1. Vista previa de la rama (antes del merge)

Cómo encontrarla: en el panel de Cloudflare, **Workers & Pages** › proyecto `gruas-burgos-villarrica` › **Deployments**. Busca el despliegue más reciente de la rama `iteracion/05-01-verificacion-final` (entorno Preview). Su estado debe ser «Success» y el hash debe ser el del último commit de la rama. Copia la dirección del enlace «Visit» del despliegue (la dirección con el nombre de la rama respondió 404 en una fase B anterior).

Los dominios `*.pages.dev` ya están en la lista de HSTS de los navegadores, así que esta prueba no tiene riesgo.

* **Dirección de la vista previa que usaste (enlace «Visit»):**
* **Estado del despliegue y hash del commit:**

Reemplaza `DIRECCION-VISIT` por esa dirección y pega la salida completa:

```
curl.exe -sI https://DIRECCION-VISIT/

```

* **¿La primera línea dice `200 OK`? (sí / no):**
* **¿Aparece `strict-transport-security: max-age=300`? (sí / no):**
* **¿Aparece `x-robots-tag: noindex`? (sí / no):**
* **¿La línea de `strict-transport-security` trae algo más que `max-age=300`, por ejemplo `includeSubDomains` o `preload`? (no debe):**

Si la cabecera no aparece o trae otro valor, **no hagas el merge** y anótalo en la sección 10.

## 2. Producción después del merge

En **Deployments**, busca el despliegue más reciente del entorno Production (rama `main`).

* **Estado del despliegue (debe ser «Success»):**
* **Hash del commit publicado y hash esperado (el del merge en `main`):**

### 2.1 Portada por HTTPS

Debe decir `200 OK` y traer `strict-transport-security: max-age=300`, y **no** debe traer `x-robots-tag`.

```
curl.exe -sI https://gruasvillarrica.cl/

```

### 2.2 Ruta inexistente (404) por HTTPS

Debe decir `404` y traer también `strict-transport-security: max-age=300`.

```
curl.exe -sI https://gruasvillarrica.cl/no-existe

```

### 2.3 Portada por HTTP

Debe decir `301` con `Location: https://gruasvillarrica.cl/`. Aquí la cabecera `strict-transport-security` **no** debe aparecer (los navegadores la ignoran por `http`).

```
curl.exe -sI http://gruasvillarrica.cl/

```

### 2.4 Subdominio `www`

Debe decir `301` con `Location: https://gruasvillarrica.cl/`.

```
curl.exe -sI https://www.gruasvillarrica.cl/

```

### 2.5 Resumen de las cabeceras

Mira la salida de 2.1 y responde sí o no por cada cabecera:

| Cabecera esperada en `https://gruasvillarrica.cl/` | ¿Aparece? (sí / no) |
| :--- | :--- |
| `strict-transport-security: max-age=300` | |
| `x-content-type-options: nosniff` | |
| `referrer-policy: strict-origin-when-cross-origin` | |
| `permissions-policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()` | |
| `x-frame-options: DENY` | |
| `content-security-policy: frame-ancestors 'none'` | |
| `Cache-Control: public, max-age=0, must-revalidate` | |

* **`max-age` de HSTS vigente en producción (el número que viste):**
* **¿La ruta inexistente (2.2) trae la cabecera HSTS? (sí / no):**
* **¿`http` (2.3) responde 301 a HTTPS y sin la cabecera HSTS? (sí / no):**
* **¿`www` (2.4) responde 301 a la raíz? (sí / no):**
* **¿`https://gruasvillarrica.cl/` trae `x-robots-tag`? (no debe):**

### 2.6 Plan de subida de HSTS (información, no se hace en esta iteración)

- Cada paso es un cambio de una línea en `public/_headers` (`Strict-Transport-Security: max-age=…`) y un push a `main`. Antes de cada paso, comprueba que el sitio sigue abriendo por HTTPS y que el certificado está vigente.
- Pasos: `300` (5 minutos, el actual) → `86400` (1 día) → `604800` (1 semana) → `31536000` (1 año). Los tiempos entre pasos los decides tú.
- `includeSubDomains` solo si todos los subdominios, incluido `www`, sirven HTTPS. `preload` solo con una decisión explícita.
- **Cómo revertir:** cambia la línea a `Strict-Transport-Security: max-age=0` y haz push a `main`. Surte efecto en cada navegador cuando vuelve a visitar el sitio por HTTPS; hasta entonces, ese navegador conserva el plazo que recibió.

## 3. Caché

Decisión ya tomada (2026-10-06): **se acepta el valor que ponga Cloudflare**. Aquí solo se mide y se registra. Ejecuta cada comando y copia en la tabla la primera línea (`HTTP/…`) y la línea `Cache-Control`.

```
curl.exe -sI https://gruasvillarrica.cl/ | Select-String "HTTP/","cache-control"
curl.exe -sI https://gruasvillarrica.cl/robots.txt | Select-String "HTTP/","cache-control"
curl.exe -sI https://gruasvillarrica.cl/favicon.ico | Select-String "HTTP/","cache-control"
curl.exe -sI https://gruasvillarrica.cl/favicon.svg | Select-String "HTTP/","cache-control"
curl.exe -sI https://gruasvillarrica.cl/apple-touch-icon.png | Select-String "HTTP/","cache-control"
curl.exe -sI https://gruasvillarrica.cl/sitemap-index.xml | Select-String "HTTP/","cache-control"
curl.exe -sI https://gruasvillarrica.cl/sitemap-0.xml | Select-String "HTTP/","cache-control"
curl.exe -sI https://gruasvillarrica.cl/no-existe | Select-String "HTTP/","cache-control"
curl.exe -sI https://gruasvillarrica.cl/_astro/Icono.DSEMQWBb.css | Select-String "HTTP/","cache-control"
```

| Dirección | Estado (`HTTP/…`) | `Cache-Control` |
| :--- | :--- | :--- |
| `/` | | |
| `/robots.txt` | | |
| `/favicon.ico` | | |
| `/favicon.svg` | | |
| `/apple-touch-icon.png` | | |
| `/sitemap-index.xml` | | |
| `/sitemap-0.xml` | | |
| `/no-existe` (404) | | |
| `/_astro/Icono.DSEMQWBb.css` | | |

Referencias: `/` debe decir `public, max-age=0, must-revalidate` y el archivo de `/_astro/`, `public, max-age=31536000, immutable` (los dos los fija `_headers`). El 2026-10-02, `robots.txt` y `favicon.ico` respondían `public, max-age=14400, must-revalidate`. Los demás no se habían medido.

Si el archivo de `/_astro/` responde 404, es que la hoja de estilos cambió de nombre en la compilación de Cloudflare: abre la portada, `Ctrl + U`, busca `/_astro/` y usa el primer archivo `.css` que aparezca.

* **Si usaste otro archivo de `/_astro/`, ¿cuál?:**
* **¿Algún valor te parece un problema? (la decisión vigente es aceptarlos):**

## 4. Prueba de humo en el teléfono

Abre `https://gruasvillarrica.cl` en el teléfono. Si ya lo habías abierto, recarga la página.

* **Equipo, sistema y navegador:**

### 4.1 Anclas

En el teléfono el menú muestra tres enlaces. Para las otras tres anclas, escribe la dirección completa en la barra del navegador (por ejemplo `gruasvillarrica.cl/#trabajos`). En cada una, el título de la sección debe quedar a la vista, justo bajo el header, sin quedar tapado.

| Ancla | Cómo llegar | ¿El título queda visible bajo el header? (sí / no) |
| :--- | :--- | :--- |
| `#inicio` | Menú: «Inicio» | |
| `#servicios` | Menú: «Servicios» | |
| `#contacto` | Menú: «Contacto» | |
| `#quienes-somos` | Escribe `gruasvillarrica.cl/#quienes-somos` | |
| `#trabajos` | Escribe `gruasvillarrica.cl/#trabajos` | |
| `#opiniones` | Escribe `gruasvillarrica.cl/#opiniones` | |

### 4.2 Llamada

Toca el botón y comprueba que se abre el marcador con el número del negocio. No hace falta llamar.

| Botón | ¿Abre el marcador con el número? (sí / no) |
| :--- | :--- |
| «Llamar ahora» del hero | |
| «Llamar» de la barra inferior | |

### 4.3 Mensajes de WhatsApp

Tabla extraída de `dist/`: 17 enlaces a WhatsApp (14 en la portada y 3 en el 404), todos al mismo número, con **11 mensajes distintos**. Toca cada botón y comprueba que WhatsApp se abre con el texto de la columna «Texto esperado», tal cual. Los mensajes terminan con un espacio para seguir escribiendo.

| N.º | Dónde aparece | Texto esperado | ¿Abre con ese texto? (sí / no) |
| :--- | :--- | :--- | :--- |
| 1 | Hero: «Escribir por WhatsApp». También la barra inferior («WhatsApp»). En escritorio, además, la tarjeta de despacho del hero y el botón flotante. En el 404: el botón de la página, la barra y el botón flotante | Hola, necesito una grúa en Villarrica. Mi ubicación es: | |
| 2 | Servicios: tarjeta «Traslado en grúa cama» | Hola, quiero cotizar un traslado en grúa cama. | |
| 3 | Servicios: tarjeta «Rescate 4x4 y vehículos atascados» | Hola, necesito un rescate 4x4. Mi ubicación es: | |
| 4 | Servicios: tarjeta «Retiro de vehículos siniestrados» | Hola, necesito retirar un vehículo siniestrado. | |
| 5 | Servicios: tarjeta «Puente de batería» | Hola, necesito un puente de batería. Mi ubicación es: | |
| 6 | Servicios: tarjeta «Cambio de neumático» | Hola, necesito un cambio de neumático. Mi ubicación es: | |
| 7 | Servicios: tarjeta «Rescates complejos con camión pluma» | Hola, necesito un rescate complejo con camión pluma. Mi ubicación es: | |
| 8 | Servicios: tarjeta «Envío de vehículos a todo Chile y a Argentina» | Hola, quiero cotizar el envío de un vehículo. Destino: | |
| 9 | Servicios: tarjeta «Traslado de maquinaria liviana» | Hola, quiero cotizar el traslado de maquinaria liviana. | |
| 10 | Contacto: «Enviar mi ubicación por WhatsApp» | Hola, necesito una grúa. Te envío mi ubicación por aquí. | |
| 11 | Contacto: formulario «Pide una cotización», al enviarlo con datos válidos | Hola, quiero cotizar un servicio de grúa. (y debajo, una línea por cada campo que llenaste, con su etiqueta) | |

Nota sobre el mensaje 11: el enlace con ese texto que figura en `dist/` solo se muestra si el navegador tiene JavaScript desactivado. Con JavaScript, el mensaje lo arma el formulario al enviarlo. Basta probar el formulario.

* **Mensaje 1: ¿qué botones probaste? (hero, barra inferior, 404):**
* **Formulario: ¿el envío vacío se bloquea y muestra los mensajes de los campos obligatorios? (sí / no):**

### 4.4 Contenido

Recorre la página de arriba abajo.

| Comprobación | ¿Conforme? (sí / no) |
| :--- | :--- |
| El orden es: hero, cinta de métricas, Servicios, «Quiénes somos», galería «Trabajos en terreno», opiniones y Contacto | |
| Servicios muestra ocho tarjetas, todas con el mismo diseño | |
| «Quiénes somos» aparece como una franja con su foto, sin nombres propios | |
| La galería muestra una foto destacada y siete fotos más, y todas cargan | |
| Se ven diez opiniones, todas abiertas, con el logotipo de Google junto al título | |
| El bloque «Medios de pago» se ve, con un ícono por cada medio | |
| El mapa de cobertura carga y debajo se lee «© colaboradores de OpenStreetMap» | |
| Las banderas de Chile y Argentina del menú tienen esquinas rectas | |
| Las banderas de la tarjeta «Envío de vehículos a todo Chile y a Argentina» tienen esquinas rectas | |
| No hay que desplazarse hacia los lados en ninguna parte de la página | |

### 4.5 Primera pantalla

Abre la portada con la barra de direcciones del navegador a la vista (recién cargada, sin desplazar).

* **¿Se ven completos el título, «Llamar ahora» y «Escribir por WhatsApp» del hero, sobre la barra inferior? (sí / no):**
* **¿Cuánto espacio sobra entre el último botón del hero y la barra inferior? (aproximado; o cuánto falta, si queda tapado):**

### 4.6 Página 404

Escribe en el teléfono `gruasvillarrica.cl/no-existe`.

* **¿Aparece la página «Página no encontrada» con el diseño del sitio? (sí / no):**
* **¿«Volver al inicio» se ve completo sobre la barra inferior y lleva a la portada? (sí / no):**
* **¿La barra inferior («Llamar» y «WhatsApp») funciona aquí también? (sí / no):**

### 4.7 iPhone con Safari

Si no hay un iPhone, escribe «no verificado».

* **Equipo y versión de iOS:**
* **¿La página, el menú, la llamada y WhatsApp funcionan igual que en Android?:**

## 5. Prueba de humo en escritorio

Abre `https://gruasvillarrica.cl` en el PC, con la ventana del navegador completa.

* **Equipo, tamaño de la ventana y navegador:**

### 5.1 Anclas

Haz clic en cada enlace del menú. El título de la sección debe quedar a la vista, justo bajo el header.

| Enlace del menú | Ancla | ¿El título queda visible bajo el header? (sí / no) |
| :--- | :--- | :--- |
| «Inicio» | `#inicio` | |
| «Servicios» | `#servicios` | |
| «Quiénes somos» | `#quienes-somos` | |
| «Trabajos en terreno» | `#trabajos` | |
| «Opiniones» | `#opiniones` | |
| «Contacto» | `#contacto` | |

### 5.2 Contacto

| Comprobación | ¿Conforme? (sí / no) |
| :--- | :--- |
| «Llamar ahora» del hero ofrece llamar (o abre la aplicación de llamadas del PC) | |
| «Escribir por WhatsApp» del hero abre WhatsApp con el mensaje 1 de la tabla de 4.3 | |
| La tarjeta de despacho del hero abre WhatsApp con el mensaje 1 | |
| El botón flotante de WhatsApp abre WhatsApp con el mensaje 1 | |
| Una tarjeta de servicio cualquiera abre WhatsApp con su mensaje (indica cuál probaste) | |
| El formulario «Pide una cotización» abre WhatsApp con el mensaje 11 y los datos | |

* **Tarjeta de servicio que probaste:**

### 5.3 Contenido

| Comprobación | ¿Conforme? (sí / no) |
| :--- | :--- |
| El orden es: hero, cinta de métricas, Servicios, «Quiénes somos», galería, opiniones y Contacto | |
| Servicios muestra ocho tarjetas, todas con el mismo diseño | |
| «Quiénes somos» aparece como una franja con su foto | |
| La galería muestra una foto destacada y siete fotos más | |
| Se ven diez opiniones, con el logotipo de Google en la fila del título | |
| El bloque «Medios de pago» se ve, con sus íconos | |
| El mapa de cobertura carga, a la derecha de la lista, con «© colaboradores de OpenStreetMap» debajo | |
| Las banderas del menú tienen esquinas rectas | |
| Las banderas de la tarjeta de envío tienen esquinas rectas | |

### 5.4 Botones flotantes

Baja hasta el final de la página y luego vuelve a subir.

* **¿Los dos botones flotantes («Llamar» y WhatsApp) desaparecen cuando el pie entra en la pantalla? (sí / no):**
* **¿Reaparecen al subir? (sí / no):**
* **Al final de la página, ¿el crédito del pie se lee completo, sin nada encima? (sí / no):**

## 6. Registro de compilación de Cloudflare (despliegue de `main`)

En **Deployments**, abre el despliegue de Production y entra a su registro de compilación («View details» › «Build log»). Usa el buscador del navegador (`Ctrl + F`).

Busca `font` y pega aquí, tal cual, las líneas que aparezcan (se espera una como `[assets] Copying fonts (6 files)...`):

```

```

Busca `validar-datos-provisionales` y pega la línea completa (se espera «Sin PENDIENTE_CLIENTE en N archivos publicados»):

```

```

* **Busca `No data found for font family`. ¿Aparece? (sí / no; si aparece, pega las líneas):**
* **¿El registro tiene otros avisos o errores? (cuáles):**

## 7. PageSpeed Insights sobre `https://gruasvillarrica.cl`

Abre `https://pagespeed.web.dev`, escribe `https://gruasvillarrica.cl` y pulsa «Analizar». Tres ejecuciones por categoría de dispositivo. Anota las cuatro puntuaciones y LCP, CLS y TBT, e incluye el enlace al informe de cada ejecución.

| Dispositivo | Ejecución | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT | Enlace |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Móvil | 1 | | | | | | | | |
| Móvil | 2 | | | | | | | | |
| Móvil | 3 | | | | | | | | |
| Escritorio | 1 | | | | | | | | |
| Escritorio | 2 | | | | | | | | |
| Escritorio | 3 | | | | | | | | |

Criterios (móvil, mediana de las tres ejecuciones): 95 o más en las cuatro categorías, LCP de 2,5 s o menos y CLS 0.

* **Elemento del LCP en móvil (en el informe: «Diagnóstico» › «Elemento de renderizado del mayor elemento con contenido»; copia qué elemento es):**
* **FCP e Índice de velocidad en móvil (de una ejecución):**
* **Auditorías que fallaron o con advertencias (nombre y detalle):**

## 8. Validadores de datos estructurados

Con los cambios de 05-04, el JSON-LD debe traer `areaServed` (con Coñaripe incluida) y `paymentAccepted`.

- Validador de Schema.org: abre `https://validator.schema.org`, pestaña «Obtener URL», escribe `https://gruasvillarrica.cl` y pulsa «Ejecutar prueba».
- Prueba de resultados enriquecidos de Google: abre `https://search.google.com/test/rich-results`, escribe `https://gruasvillarrica.cl` y pulsa «Probar URL».

* **Validador de Schema.org (resultado, errores y advertencias):**
* **¿El elemento detectado muestra `areaServed` y `paymentAccepted`? (sí / no; copia sus valores):**
* **Prueba de resultados enriquecidos de Google (fecha y hora de rastreo, elementos detectados, errores críticos y advertencias):**

## 9. Otros navegadores

Si no los tienes, deja «no verificado».

* **Firefox en el PC: ¿la página, el menú, los botones flotantes y WhatsApp funcionan igual que en Chrome?:**
* **Otro navegador (cuál y resultado):**

## 10. Observaciones y problemas adicionales

*

## 11. Veredicto del desarrollador

* **¿Das por verificada la versión final en producción y marcas la iteración «Terminada»? (sí / no, y por qué):**
* **¿Quedó algún defecto que deba corregirse en una iteración nueva? (cuál y con qué severidad):**
