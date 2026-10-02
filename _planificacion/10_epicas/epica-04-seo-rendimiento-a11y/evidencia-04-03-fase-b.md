# Evidencia de la fase B de 04-03

Archivo para que el desarrollador entregue a Claude Code lo que solo él puede obtener. Se rellena después de fusionar `iteracion/04-03-auditoria` en `main`. Todo lo que quede vacío se registrará como «no verificado». No pegar claves ni datos personales.

- **Fecha y hora de las pruebas:** 2026-10-02 15:00
- **Hash del commit desplegado en producción (Cloudflare, `main`):** b5fcbfc
- **Quién hizo las pruebas y con qué equipos:** Felipe Cuevas, PC con Windows 10 Pro y Google Chrome.

## 1. Compilación de `main` en Cloudflare

Pegar las líneas del registro de compilación que muestran:

- Versión de Node: v24.13.1
- Versión de pnpm: 12.8.1
- Instalación de `sharp` sin errores: Se descargó su binario nativo (@img/sharp-libvips-linux-x64@1.3.4), se listó como dependencia instalada (+ sharp 0.35.5) y funcionó con éxito en el build procesando 96 optimizaciones de imágenes a AVIF/WebP.
- Línea «Sin PENDIENTE_CLIENTE en N archivos publicados»: 2026-10-02T17:18:09.321155Z [validar-datos-provisionales] Sin PENDIENTE_CLIENTE en 114 archivos publicados.

## 2. Cabeceras y dominio (`curl.exe`)

Pegar la salida completa de cada comando.

```
curl.exe -sI https://gruasvillarrica.cl/
HTTP/1.1 200 OK
Date: Fri, 02 Oct 2026 22:33:44 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aAK%2Fdk44IXooUSRQUl0WIvuPGpz47gAZYAUBAcjUc9hnZGiZJacCWJkakXMj%2FYzN0o8wJxOK7HPP%2FV%2Bh%2BCEEFby0qAkroXGOEIFSTYb9cjDQ%2FL2tqp%2FOsq6v7hPpzT%2FOyqfXoK0k5z2q047PEw6y7tg%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-frame-options: DENY
content-security-policy: frame-ancestors 'none'
permissions-policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Server: cloudflare
cf-cache-status: DYNAMIC
CF-RAY: a4472ba46a86f1c3-GRU
alt-svc: h3=":443"; ma=86400
```

```
curl.exe -sI "https://www.gruasvillarrica.cl/prueba?x=1"
HTTP/1.1 301 Moved Permanently
Date: Fri, 02 Oct 2026 22:34:09 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://gruasvillarrica.cl/prueba?x=1
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZemJC%2Bclgy71D2DHq%2BmsZ1C4YEZa03XEpduJ5mGJzrvg6fuR9K1JbR1QSrVgadHxwCPHExu9BtfSLvDMXiyPrVX4umwc7KPrrQtZFvR%2Fk4UGQyC8poDNYhyk6sz%2FhLaFuNF9N5Y2rw%2Fk1k5GtvAKWmtezUqb"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a4472c40d8ec0136-GRU
```

```
curl.exe -sI http://gruasvillarrica.cl/
HTTP/1.1 301 Moved Permanently
Date: Fri, 02 Oct 2026 22:34:22 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://gruasvillarrica.cl/
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cv8q4lp4mRhb91kCJaNh6Rl6M%2BZ6SVC81M%2B3LIIKGxEBiPakDqhtC31cgxzRr1DaW5jT5sCARQWd5%2FdT9NPzd5YWZ8nTxV%2BFKy%2FTca3wdLAd60VB01HIlOw1Nc%2Bk7MemJ60JgPM%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a4472c92bc5ca469-GRU
alt-svc: h3=":443"; ma=86400
```

```
curl.exe -sI https://gruas-burgos-villarrica.pages.dev/
HTTP/1.1 200 OK
Date: Fri, 02 Oct 2026 22:34:35 GMT
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
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vXR%2F71yCahiNiKiMm%2BQxFBE3g7aizLRGHYZxQOvoCKPtX1aSSE4klSrgiNuEMwx2mHlVpZPInjt1rEkL%2FrsN3EtrYmDkxTzp%2FAUkKl2Jfc1cn1DxhlB%2FSPksi%2FzGXazvYZNWbOn9ULokPiXNAumyGUAu8hGUYiBW%2Bz0KoAii64w%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a4472ce41ef2b92f-GRU
alt-svc: h3=":443"; ma=86400
```

```
curl.exe -sI https://gruasvillarrica.cl/robots.txt
HTTP/1.1 200 OK
Date: Fri, 02 Oct 2026 22:34:48 GMT
Content-Type: text/plain; charset=utf-8
Content-Length: 78
Connection: keep-alive
x-frame-options: DENY
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NWJSKUtPmK1CpP5lWq0BwkXJW3scprY%2B6%2BF%2Bp5wKaqZuZcQcxStC%2BJv7GDatplmRWA2r5Yg0wgW7lUHtO01Nq4mU2uPzVUY8d4cy87WtNgsCqi9SG6Hq%2FpAEjnGGLuE1vJoH62sWgot6VC4ai%2Bvsmk4%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=14400, must-revalidate
ETag: "ec048804df17ff6edb582bd39188552f"
content-security-policy: frame-ancestors 'none'
permissions-policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Server: cloudflare
Accept-Ranges: bytes
cf-cache-status: MISS
CF-RAY: a4472d35be17f204-GRU
alt-svc: h3=":443"; ma=86400
```

```
curl.exe -sI https://gruasvillarrica.cl/favicon.ico
HTTP/1.1 200 OK
Date: Fri, 02 Oct 2026 22:35:00 GMT
Content-Type: image/vnd.microsoft.icon
Content-Length: 2009
Connection: keep-alive
x-frame-options: DENY
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2TecmL7VY9SbTo0RpYI6Z6GrD4TA0HTGheg2bFc39dlhsNawnOdj73l6zKCeB0t4XDbbZnVS7wmIHtEK0Cc1%2B6qXKfgKcEl1fKtYn5gwfa%2FBwVSSddWWArLJ0r6mRqtyE9dS4zCBa4%2Fkvo37A4dnhjU%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=14400, must-revalidate
ETag: "45bcc1cfdef43739ce5c0e67986a3499"
content-security-policy: frame-ancestors 'none'
permissions-policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Server: cloudflare
Accept-Ranges: bytes
cf-cache-status: MISS
CF-RAY: a4472d8189f10b84-GRU
alt-svc: h3=":443"; ma=86400
```

```
curl.exe -sI https://gruasvillarrica.cl/_astro/NOMBRE-DE-UN-ARCHIVO-CON-HUELLA
No se encontró ningún asset publicado bajo /_astro/ en el HTML de producción de la portada ni en Chrome DevTools > Red. Prueba no aplicable/no verificada.
```

```
curl.exe -s -o NUL -w "%{http_code}" https://gruasvillarrica.cl/no-existe
404
```

## 3. Qué inyecta Cloudflare en el HTML

- ¿Se desactivó «Email Address Obfuscation»? (sí/no, y cuándo): Sí, hoy 2 de octubre 2026 a las 15:00.
- Salida de `Select-String -Path portada.html -Pattern "cdn-cgi","beacon","email-protection"`: sin coincidencias.
- JSON-LD publicado (copiar el bloque completo desde `view-source`): <script type="application/ld+json">{"@context":"https://schema.org","@type":["EmergencyService","AutomotiveBusiness"],"name":"Grúas Burgos","url":"https://gruasvillarrica.cl/","telephone":"+56946192286","email":"gruasburgosvillarrica@gmail.com","image":"https://gruasvillarrica.cl/_astro/06-grua-de-noche-con-auto-accidentado.BDfJntL4_Z2ewCoo.webp","logo":"https://gruasvillarrica.cl/apple-touch-icon.png","address":{"@type":"PostalAddress","streetAddress":"Vicente Reyes 870","addressLocality":"Villarrica","addressRegion":"La Araucanía","addressCountry":"CL"},"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"},"areaServed":[{"@type":"City","name":"Villarrica"},{"@type":"City","name":"Pucón"},{"@type":"City","name":"Licán Ray"},{"@type":"City","name":"Freire"}],"sameAs":["https://www.instagram.com/gruas_burgos_villarrica_chile/","https://www.facebook.com/p/Gr%C3%BAas-Burgos-villarrica-chile-247-100083010505193/","https://www.tiktok.com/@yerko.gruas.burgo"]}</script>

## 4. PageSpeed Insights sobre `https://gruasvillarrica.cl`

Tres ejecuciones por categoría de dispositivo. Anotar las cuatro puntuaciones y, en móvil, LCP, CLS, TBT, FCP e Índice de velocidad. Incluir el enlace al informe de cada ejecución.

| Dispositivo | Ejecución | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP   | CLS   | TBT  | Enlace                                                                                       |
| :---------- | :-------- |:------------|:--------------|:-----------------|:----|:------|:------|:-----|:---------------------------------------------------------------------------------------------|
| Móvil       | 1         | 96          | 100           | 100              | 100 | 2.3 s | 0     | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/beelrz9gnh?form_factor=mobile)  |
| Móvil       | 2         | 97          | 100           | 100              | 100 | 2.3 s | 0     | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/pscdxxgueq?form_factor=mobile)  |
| Móvil       | 3         | 99          | 100           | 100              | 100 | 2.3 s | 0     | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/uy7qjtwlms?form_factor=mobile)  |
| Escritorio  | 1         | 100         | 100           | 100              | 100 | 0.6 s | 0.002 | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/beelrz9gnh?form_factor=desktop) |
| Escritorio  | 2         | 100         | 100           | 100              | 100 | 0.6 s | 0.002 | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/pscdxxgueq?form_factor=desktop) |
| Escritorio  | 3         | 100         | 100           | 100              | 100 | 0.6 s | 0.002 | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/uy7qjtwlms?form_factor=desktop) |

Auditorías que fallaron o con advertencias (nombre y detalle):

## 5. Validadores de datos estructurados

- Validador de Schema.org (resultado y errores o advertencias): 
    EmergencyService / AutomotiveBusiness
    0 ERRORES
    0 ADVERTENCIAS
- Prueba de resultados enriquecidos de Google (resultado y errores o advertencias):
  - **URL analizada:** https://gruasvillarrica.cl/
  - **Fecha y hora de rastreo:** 2 oct 2026, 20:15:16
  - **Estado general:** Se han detectado 2 elementos válidos. Los elementos válidos pueden aparecer en los resultados enriquecidos de la Búsqueda de Google.
  - **Errores críticos:** 0

    **Elementos estructurados detectados:**
    1. **Empresas locales:**
        - Estado: 1 elemento válido (detectados problemas no críticos).
        - Elemento: Grúas Burgos (`type: EmergencyService`, `type: AutomotiveBusiness`).
        - Advertencia (no crítica): Falta el campo "priceRange" (opcional).

   2. **Organización:**
       - Estado: 1 elemento válido (detectados problemas no críticos).
       - Elemento: Grúas Burgos (`type: EmergencyService`, `type: AutomotiveBusiness`).
       - Advertencia (no crítica): Falta el campo "postalCode" (opcional) dentro de `address`.

## 6. Pruebas en teléfono real

- Equipo, sistema y navegador (Android y, si es posible, iPhone con Safari): Samsung Galaxy A52+, Android 16, Google Chrome (móvil).
- Llamada («Llamar ahora» y barra inferior): Funciona correctamente. Ambos botones («Llamar ahora» en el hero y «Llamar» en la barra de acción inferior) abren de forma inmediata el marcador telefónico con el número +56 9 4619 2286 listo para marcar.
- Los siete mensajes de WhatsApp (abren con el texto esperado; indicar cuáles probaste): Probados los 7 flujos con apertura exitosa en la app de WhatsApp y el texto predeterminado exacto:
    1. Hero, tarjeta de despacho y barra inferior: "Hola, necesito una grúa en Villarrica. Mi ubicación es: " (OK)
    2. Servicio «Traslado en grúa cama»: "Hola, quiero cotizar un traslado en grúa cama. " (OK)
    3. Servicio «Rescate 4x4»: "Hola, necesito un rescate 4x4. Mi ubicación es: " (OK)
    4. Servicio «Retiro de vehículos siniestrados»: "Hola, necesito retirar un vehículo siniestrado. " (OK)
    5. «¿Necesitas un traslado a otra ciudad?»: "Hola, quiero cotizar un traslado a otra ciudad. " (OK)
    6. «Enviar mi ubicación por WhatsApp» (sección Contacto): "Hola, necesito una grúa. Te envío mi ubicación por aquí. " (OK)
    7. Formulario «Pide una cotización» enviado: arma el mensaje "Hola, quiero cotizar un servicio de grúa." incluyendo una línea por cada campo completado (OK)
- «Cómo llegar» (abre Google Maps con la dirección): Funciona correctamente. Abre la aplicación de Google Maps con la ubicación y destino en Vicente Reyes 870, Villarrica.
- Formulario (envío vacío, teléfono con letras, envío válido):
    - Envío vacío: Bloquea el envío y muestra los mensajes de validación requeridos en los campos obligatorios.
    - Teléfono con letras: Validación de formato activada; rechaza caracteres no numéricos y exige un teléfono válido.
    - Envío válido: Procesa correctamente los datos ingresados y redirige a WhatsApp con el mensaje estructurado línea por línea.
- Vista previa del enlace al compartirlo en WhatsApp (imagen, título y descripción; adjuntar captura): Funciona correctamente. Al pegar la URL https://gruasvillarrica.cl genera de forma inmediata la tarjeta de vista previa con la imagen destacada (Open Graph), el título oficial y la meta descripción del sitio.
- Favicon en la pestaña del navegador: Visible correctamente en la pestaña de Chrome móvil.

## 7. Lector de pantalla (TalkBack o VoiceOver)

- Equipo y lector usado: Samsung Galaxy A52+, Android 16, TalkBack con Google Chrome.
- Encabezados y orden: Estructura lógica y jerárquica clara (h1 -> h2 -> h3). La navegación por gestos recorre el contenido en el orden visual y semántico correcto, sin saltos inesperados.
- Nombres de botones y enlaces: Todos los elementos interactivos tienen etiquetas accesibles descriptivas. Los botones de acción rápida («Llamar ahora», enlaces a WhatsApp) anuncian con claridad su propósito y destino.
- Enlace «Saltar al contenido»: Operativo. Al recibir el foco inicial, se anuncia correctamente y permite saltar la navegación superior para posicionar el lector directamente en el contenido principal (`<main>`).
- Formulario y errores: Cada campo de entrada anuncia su etiqueta y estado requerido. Al provocar fallos de validación (envío en blanco o teléfono inválido), los mensajes de error asociados son leídos por TalkBack de forma oportuna.
- Problemas encontrados: Ninguno. La experiencia de navegación accesible fue fluida y sin bloqueos de foco.

## 8. Observaciones y problemas adicionales