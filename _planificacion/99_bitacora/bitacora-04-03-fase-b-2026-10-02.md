# Bitácora 04-03 (fase B) · Vista previa en Cloudflare, accesibilidad y Lighthouse

- **Fecha:** 2026-10-02
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `iteracion/04-03-auditoria`
- **Estado final:** En revisión

## Resumen

Fase B de 04-03: consolidación de la evidencia que obtuvo el desarrollador sobre producción (`https://gruasvillarrica.cl`, commit `b5fcbfc`) y registro de la Auditoría 09. El agente no consultó ninguna URL pública: su única fuente para Cloudflare, el dominio, PageSpeed, los validadores, el teléfono y el lector de pantalla es `evidencia-04-03-fase-b.md`. No se modificó nada de `src/` ni de `public/`.

PageSpeed móvil, mediana de tres ejecuciones: Rendimiento 97, Accesibilidad 100, Buenas prácticas 100 y SEO 100; LCP de 2,3 s y CLS 0 en las tres. De los 10 criterios de aceptación, **9 se cumplen y 1 no está verificado**: la vista previa en WhatsApp, que el desarrollador informa como correcta pero sin la captura que pide el criterio.

Auditoría 09: 22 hallazgos (AUD-09-001 a AUD-09-022). Los 11 primeros son FA-01 a FA-11; no queda ninguno de severidad Alta abierto. Las cabeceras de `_headers` se aplican, con cuatro diferencias que `_headers` no define (`Access-Control-Allow-Origin: *`, `Report-To` y `Nel`, una caché de 4 h en `robots.txt` y `favicon.ico`, y la ausencia de HSTS). La evidencia tiene incoherencias de hora y varias lagunas, listadas al final de «Verificación».

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/99_bitacora/bitacora-04-03-fase-b-2026-10-02.md` | Nueva. |
| `_planificacion/00_producto/auditoria-tecnica.md` | Auditoría 09 nueva (AUD-09-001 a AUD-09-022). Actualizados AUD-01-017, AUD-01-025, AUD-02-002, AUD-04-003, AUD-05-001, AUD-08-003 y AUD-08-023. |
| `_planificacion/00_producto/registro-log.md` | Fila de 04-03 («En revisión», dependencia de 04-04 y enlaces a las dos bitácoras), iteración activa, próximo hito, flujo de ramas, «Decisiones por tomar» (sale la alineación de `DESIGN.md`, entran cinco temas) y dos líneas del historial. |
| `…/epica-03-contenido-secciones/iteracion-03-04-contacto-cobertura.md` | Tres casillas marcadas con la evidencia de la fase B. |
| `…/epica-03-contenido-secciones/iteracion-03-01-inicio-hero.md` | La casilla de LCP sigue sin marcar; nota con el motivo. |
| `…/epica-05-publicacion-medicion/iteracion-05-01-publicacion.md` | Lo ya hecho pasa a una tabla de verificación con su evidencia; quedan solo las tareas pendientes. |
| `DESIGN.md` | §5.1: excepciones del anillo hacia adentro en la barra móvil y del borde `outline` de «Volver al inicio». §9: `scroll-padding-top`, `scroll-padding-bottom` y `scroll-margin-top` como en `src/styles/global.css`. Solo documentación de lo que implementó 04-04 (autorizado). |

No se tocaron `src/`, `public/`, `package.json`, `astro.config.mjs`, `AGENTS.md`, `README.md`, `decisiones.md`, la evidencia del desarrollador ni las bitácoras existentes. Ningún archivo renombrado ni eliminado.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos (igual que en 04-04).
- `pnpm build`: OK. 2 páginas, sin avisos; `dist/` con 114 archivos.
- Revisión móvil 360 px y escritorio: **el agente no midió en navegador en esta fase** (no hubo cambios de código). La medición local es la de 04-04; la de producción, la del desarrollador.
- Lighthouse (PageSpeed Insights, por el desarrollador, sobre `https://gruasvillarrica.cl`): móvil, mediana 97 / 100 / 100 / 100; escritorio, 100 / 100 / 100 / 100 en las tres ejecuciones.

### Quién obtuvo la evidencia y con qué

| Parte | Quién | Equipo | Cuándo (según la evidencia) |
| :--- | :--- | :--- | :--- |
| Registro de compilación de Cloudflare | Felipe Cuevas | Panel de Cloudflare Pages | Línea de validación: 2026-10-02T17:18:09Z (14:18 en Chile) |
| `curl.exe` (cabeceras y dominio) | Felipe Cuevas | PC con Windows 10 Pro | 22:33:44 a 22:35:00 GMT del 2 de octubre, y 00:25:48 y 00:26:55 GMT del 3 de octubre |
| Ofuscación de correos y `Select-String` | Felipe Cuevas | Panel de Cloudflare y PC con Windows | Desactivada a las 15:00; la descarga, sin hora |
| PageSpeed Insights | Felipe Cuevas | PC con Windows 10 Pro y Chrome (pagespeed.web.dev) | Sin hora |
| Validador de Schema.org | Felipe Cuevas | PC con Chrome | Sin hora |
| Prueba de resultados enriquecidos | Felipe Cuevas | PC con Chrome | Rastreo: 2 oct 2026, 20:15:16 |
| Teléfono real | Felipe Cuevas | «Samsung Galaxy A52+, Android 16, Google Chrome (móvil)» | Sin hora |
| Lector de pantalla | Felipe Cuevas | El mismo teléfono, TalkBack con Chrome | Sin hora |

### Tarea 1 · Evidencia transcrita

Copiada de `evidencia-04-03-fase-b.md` tal como la entregó el desarrollador (estado del commit `25bf6ab`), sin resumir ni corregir. Solo cambia el nivel de los títulos, para que queden dentro de esta sección.

- **Fecha y hora de las pruebas:** 2026-10-02 15:00
- **Hash del commit desplegado en producción (Cloudflare, `main`):** b5fcbfc
- **Quién hizo las pruebas y con qué equipos:** Felipe Cuevas, PC con Windows 10 Pro y Google Chrome.

#### 1. Compilación de `main` en Cloudflare

Pegar las líneas del registro de compilación que muestran:

- Versión de Node: v24.13.1
- Versión de pnpm: 12.8.1
- Instalación de `sharp` sin errores: Se descargó su binario nativo (@img/sharp-libvips-linux-x64@1.3.4), se listó como dependencia instalada (+ sharp 0.35.5) y funcionó con éxito en el build procesando 96 optimizaciones de imágenes a AVIF/WebP.
- Línea «Sin PENDIENTE_CLIENTE en N archivos publicados»: 2026-10-02T17:18:09.321155Z [validar-datos-provisionales] Sin PENDIENTE_CLIENTE en 114 archivos publicados.

#### 2. Cabeceras y dominio (`curl.exe`)

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
HTTP/1.1 200 OK
Date: Sat, 03 Oct 2026 00:25:48 GMT
Content-Type: image/jpeg
Content-Length: 112393
Connection: keep-alive
x-frame-options: DENY
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=hFYpA7iw2%2BQvFr6vHwZKFaQbY2ZqV01UY2MqSGtIxcFZ46q6Zk0ZIxgfpYg%2FrUi0PnjFNovMiwNW9hj3%2FgoJIB9yB7wCU5Qv24xXzFQ7Y9WXrH34%2FscmadLsP%2BGCI7f6Rv55R8w9EXKc0EZ2BBvCKks%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=31536000, immutable
ETag: "00828955e8bf3a758e7e0c57bb5d67fd"
content-security-policy: frame-ancestors 'none'
permissions-policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Server: cloudflare
Accept-Ranges: bytes
cf-cache-status: MISS
CF-RAY: a447cfcfed4bb92f-GRU
alt-svc: h3=":443"; ma=86400
```

```
curl.exe -s -o NUL -w "%{http_code}" https://gruasvillarrica.cl/no-existe
404
```

#### 3. Qué inyecta Cloudflare en el HTML

- ¿Se desactivó «Email Address Obfuscation»? (sí/no, y cuándo): Sí, hoy 2 de octubre 2026 a las 15:00.
- Salida de `Select-String -Path portada.html -Pattern "cdn-cgi","beacon","email-protection"`: sin coincidencias.
- JSON-LD publicado (copiar el bloque completo desde `view-source`): <script type="application/ld+json">{"@context":"https://schema.org","@type":["EmergencyService","AutomotiveBusiness"],"name":"Grúas Burgos","url":"https://gruasvillarrica.cl/","telephone":"+56946192286","email":"gruasburgosvillarrica@gmail.com","image":"https://gruasvillarrica.cl/_astro/06-grua-de-noche-con-auto-accidentado.BDfJntL4_Z2ewCoo.webp","logo":"https://gruasvillarrica.cl/apple-touch-icon.png","address":{"@type":"PostalAddress","streetAddress":"Vicente Reyes 870","addressLocality":"Villarrica","addressRegion":"La Araucanía","addressCountry":"CL"},"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"},"areaServed":[{"@type":"City","name":"Villarrica"},{"@type":"City","name":"Pucón"},{"@type":"City","name":"Licán Ray"},{"@type":"City","name":"Freire"}],"sameAs":["https://www.instagram.com/gruas_burgos_villarrica_chile/","https://www.facebook.com/p/Gr%C3%BAas-Burgos-villarrica-chile-247-100083010505193/","https://www.tiktok.com/@yerko.gruas.burgo"]}</script>

#### 4. PageSpeed Insights sobre `https://gruasvillarrica.cl`

Tres ejecuciones por categoría de dispositivo. Anotar las cuatro puntuaciones y, en móvil, LCP, CLS, TBT, FCP e Índice de velocidad. Incluir el enlace al informe de cada ejecución.

| Dispositivo | Ejecución | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP   | CLS   | TBT  | Enlace                                                                                       |
| :---------- | :-------- |:------------|:--------------|:-----------------|:----|:------|:------|:-----|:---------------------------------------------------------------------------------------------|
| Móvil       | 1         | 96          | 100           | 100              | 100 | 2.3 s | 0     | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/beelrz9gnh?form_factor=mobile)  |
| Móvil       | 2         | 97          | 100           | 100              | 100 | 2.3 s | 0     | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/pscdxxgueq?form_factor=mobile)  |
| Móvil       | 3         | 99          | 100           | 100              | 100 | 2.3 s | 0     | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/uy7qjtwlms?form_factor=mobile)  |
| Escritorio  | 1         | 100         | 100           | 100              | 100 | 0.6 s | 0.002 | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/beelrz9gnh?form_factor=desktop) |
| Escritorio  | 2         | 100         | 100           | 100              | 100 | 0.6 s | 0.002 | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/pscdxxgueq?form_factor=desktop) |
| Escritorio  | 3         | 100         | 100           | 100              | 100 | 0.6 s | 0.002 | 0 ms | (https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/uy7qjtwlms?form_factor=desktop) |

Auditorías que fallaron o con advertencias (nombre y detalle): ninguna.

#### 5. Validadores de datos estructurados

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

#### 6. Pruebas en teléfono real

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

#### 7. Lector de pantalla (TalkBack o VoiceOver)

- Equipo y lector usado: Samsung Galaxy A52+, Android 16, TalkBack con Google Chrome.
- Encabezados y orden: Estructura lógica y jerárquica clara (h1 -> h2 -> h3). La navegación por gestos recorre el contenido en el orden visual y semántico correcto, sin saltos inesperados.
- Nombres de botones y enlaces: Todos los elementos interactivos tienen etiquetas accesibles descriptivas. Los botones de acción rápida («Llamar ahora», enlaces a WhatsApp) anuncian con claridad su propósito y destino.
- Enlace «Saltar al contenido»: Operativo. Al recibir el foco inicial, se anuncia correctamente y permite saltar la navegación superior para posicionar el lector directamente en el contenido principal (`<main>`).
- Formulario y errores: Cada campo de entrada anuncia su etiqueta y estado requerido. Al provocar fallos de validación (envío en blanco o teléfono inválido), los mensajes de error asociados son leídos por TalkBack de forma oportuna.
- Problemas encontrados: Ninguno. La experiencia de navegación accesible fue fluida y sin bloqueos de foco.

#### 8. Observaciones y problemas adicionales

```
curl.exe -sI https://ff925603.gruas-burgos-villarrica.pages.dev/
HTTP/1.1 200 OK
Date: Sat, 03 Oct 2026 00:26:55 GMT
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
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1pXbPRMN9AzW%2FWNQ%2BJ1ROaepiAaLrKqRv6e5FccCaf3eQHbQR41ljNMngoq0hgMB9S6ItLUeLWI1XLMc7WRXKOjZN8pjzMJVrnHMwogm6W47WdjjeJD70x1kE6DODLfJXYwK99oWVbRIhspXfmmCuwtU5PeuucSZFSAdvEsgggZhSZevB8uaJYk%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a447d16f7a5c1d07-GRU
alt-svc: h3=":443"; ma=86400
```

### Tarea 2 · Cabeceras contra `public/_headers`

Reglas de `_headers` y lo que muestran las salidas de `curl.exe`. Los nombres de las cabeceras llegan en minúscula (`x-robots-tag`); en HTTP no distinguen mayúsculas, así que no es una diferencia.

| Regla de `_headers` | Esperado | Dominio propio | `pages.dev` | Despliegue por hash (`ff925603`) | Resultado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/*` seguridad | `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()`, `X-Frame-Options: DENY`, `Content-Security-Policy: frame-ancestors 'none'` | Las cinco, con el valor exacto, en `/`, `/robots.txt`, `/favicon.ico` y `/_astro/…` | Las cinco en `/` | Las cinco en `/` | Coincide |
| `/_astro/*` | `Cache-Control: public, max-age=31536000, immutable` | Ese valor, una sola vez (no se mezcló con otro) | No medido | No medido | Coincide en el dominio |
| `/` | `Cache-Control: public, max-age=0, must-revalidate` | Ese valor | Ese valor | Ese valor | Coincide |
| `https://:project.pages.dev/*` | `X-Robots-Tag: noindex` | — | `x-robots-tag: noindex` | — | Coincide |
| `https://:version.:project.pages.dev/*` | `X-Robots-Tag: noindex` | — | — | `x-robots-tag: noindex` | Coincide. El alias de la rama (`iteracion-04-03-auditoria.…`) no se midió |
| Dominio propio indexable | Sin `x-robots-tag` | Ausente en las cuatro respuestas 200 del dominio | — | — | Coincide |

Diferencias: lo que aparece y `_headers` no define, y lo que falta.

| Diferencia | Dónde | Hallazgo |
| :--- | :--- | :--- |
| `Access-Control-Allow-Origin: *` | Todas las respuestas 200: dominio propio (`/`, `robots.txt`, `favicon.ico`, `/_astro/…`), `pages.dev` y hash. No en las redirecciones | AUD-09-015 (observación) |
| `Cache-Control: public, max-age=14400, must-revalidate` | `robots.txt` y `favicon.ico` del dominio propio (`cf-cache-status: MISS`). `_headers` no fija `Cache-Control` para ellos | AUD-09-016 |
| `Report-To` y `Nel` (`success_fraction` 0.0) | Todas las respuestas, también las dos redirecciones 301 | AUD-09-017 (observación) |
| Sin `Strict-Transport-Security` | Ninguna respuesta del dominio propio. `_headers` tampoco lo define | AUD-09-018 |
| Sin cabeceras de seguridad en las redirecciones | `www` → raíz y `http` → `https` (301): solo `Location`, `Report-To`, `Nel`, `Server` y `CF-RAY` | Sin hallazgo: la respuesta no tiene página que proteger |
| `Server`, `CF-RAY`, `alt-svc`, `cf-cache-status`, `ETag`, `Accept-Ranges` | Según la respuesta | Sin hallazgo: propias de Cloudflare |

Otras comprobaciones con la evidencia:

| Comprobación | Resultado |
| :--- | :--- |
| `/no-existe` | 404 |
| `robots.txt` | 200, `text/plain`, 78 B: el mismo tamaño que `public/robots.txt` (78 B) |
| `favicon.ico` | 200, `image/vnd.microsoft.icon`, 2.009 B: el mismo tamaño que `public/favicon.ico` |
| Archivo de `/_astro/` | 200, `image/jpeg`, 112.393 B. El nombre quedó como `NOMBRE-DE-UN-ARCHIVO-CON-HUELLA`. Por tipo y tamaño **coincide** con la imagen de vista previa `vista-previa-gruas-burgos.DDnk_EC8.jpg` (112.393 B, bitácora 04-01), pero es una deducción: la evidencia no nombra el archivo |
| JSON-LD publicado | Idéntico, carácter por carácter, al de `dist/index.html` de la compilación local (comparado con código). El `email` no fue alterado por Cloudflare |
| HTML de la portada | Sin `cdn-cgi`, `beacon` ni `email-protection` (`Select-String`, según el desarrollador) |

### Tarea 3 · Criterios de aceptación de 04-03

| Criterio | Resultado | Evidencia |
| :--- | :--- | :--- |
| Lighthouse móvil en `https://gruasvillarrica.cl`, mediana de tres, ≥ 95 en las cuatro categorías | **Cumplido** | Rendimiento 96, 97 y 99 (mediana 97); Accesibilidad, Buenas prácticas y SEO 100 en las tres |
| Dominio propio: certificado, `www` con 301 conservando ruta y consulta, `http` a `https`, raíz sin `x-robots-tag` | **Cumplido** | `https://www.gruasvillarrica.cl/prueba?x=1` → 301 a `https://gruasvillarrica.cl/prueba?x=1`; `http://gruasvillarrica.cl/` → 301 a `https://gruasvillarrica.cl/`; raíz 200 sin `x-robots-tag`. Certificado: `curl.exe` obtuvo respuestas HTTPS del dominio y de `www` sin error de certificado; el emisor y el vencimiento no constan |
| LCP de 2,5 s o menos y CLS menor a 0,05 en Lighthouse móvil | **Cumplido** | LCP 2,3 s y CLS 0 en las tres ejecuciones. La mejora bajo 2,0 s es opcional: AUD-09-019 (Baja, no bloqueante) |
| JSON-LD: 0 errores en Schema.org y 0 críticos en la Prueba de resultados enriquecidos | **Cumplido** | Schema.org: 0 errores y 0 advertencias. Prueba de resultados enriquecidos: 2 elementos válidos, 0 errores críticos; avisos opcionales `priceRange` y `postalCode`, aceptados (AUD-09-020). Sin capturas ni enlace del validador de Schema.org |
| Vista previa de WhatsApp con imagen, título y descripción (captura en la bitácora) | **No verificado** | El desarrollador informa que la tarjeta muestra la imagen, el título y la descripción, pero **no adjuntó la captura** que exige el criterio |
| Cabeceras de `_headers` verificadas sobre HTTPS con `curl.exe` | **Cumplido** | Todas las reglas se aplican (tabla de la tarea 2); cuatro diferencias registradas como AUD-09-015 a AUD-09-018. En `pages.dev` solo se midió la portada |
| Compilación de `main` en Cloudflare con Node, pnpm y `sharp` correctos y la línea de validación | **Cumplido** | Node v24.13.1, pnpm 12.8.1, `sharp` 0.35.5 con su binario y 96 imágenes, y `[validar-datos-provisionales] Sin PENDIENTE_CLIENTE en 114 archivos publicados.` (114, igual que la compilación local). Lo de `sharp` es un resumen del desarrollador, no líneas del registro |
| Teclado, contraste, zoom al 200 % y 320 px sin hallazgos de severidad Alta abiertos | **Cumplido** | La única Alta, AUD-09-001 (FA-01), se corrigió en 04-04: 0 elementos tapados en diez recorridos y 1.848 casos, medido en local sobre el mismo código que está en producción. No se repitió en producción. Contraste, zoom al 200 % y 320 px no tenían Altas |
| Prueba en teléfono real y con lector de pantalla, con quién y con qué dispositivo | **Cumplido** | Felipe Cuevas, «Samsung Galaxy A52+, Android 16», Chrome y TalkBack: llamada, siete mensajes de WhatsApp, «Cómo llegar», formulario (vacío, teléfono con letras y válido), favicon, encabezados, nombres, «Saltar al contenido» y errores. Sin iPhone (el criterio lo pedía «si es posible»). El modelo y la versión hay que confirmarlos (ver incoherencias) |
| Auditoría 09 registrada en `auditoria-tecnica.md` | **Cumplido** | AUD-09-001 a AUD-09-022 |

Criterio de término de la Épica 04 con esta evidencia: Lighthouse móvil ≥ 95 en el dominio propio, cumplido; JSON-LD sin errores, cumplido; sin hallazgos Alta abiertos en la Auditoría 09, cumplido; vista previa en WhatsApp, **no verificada** (falta la captura). La épica no puede cerrarse hasta adjuntarla.

Casillas pendientes de la Épica 03:

| Casilla | Antes | Ahora | Motivo |
| :--- | :--- | :--- | :--- |
| 03-04 · «Cómo llegar» abre Google Maps con destino a Vicente Reyes 870 | Sin marcar | **Marcada** | El desarrollador la abrió en el teléfono: Google Maps con destino a Vicente Reyes 870, Villarrica |
| 03-04 · Formulario con teclado y lector de pantalla, errores anunciados, enlace sin JavaScript | Sin marcar | **Marcada** | Faltaba solo el lector de pantalla: TalkBack anuncia etiquetas, obligatoriedad y errores. Teclado y enlace sin JavaScript, medidos en 03-05 |
| 03-04 · Al enviar se abre WhatsApp con el mensaje armado | Sin marcar | **Marcada** | Un envío válido abrió WhatsApp con el mensaje línea por línea |
| 03-01 · LCP menor que 2 s en Lighthouse móvil | Sin marcar | **Sin marcar** | 2,3 s: no cumple el umbral de este criterio. La decisión 9 solo cambia el de la Épica 04 (AUD-09-021). Tampoco consta el elemento LCP |

03-02, 03-03 y 03-05 no tienen casillas pendientes.

### Tarea 4 · Auditoría 09

Registrada en `auditoria-tecnica.md`. Severidad de FA-01 a FA-11: la propuesta en la fase A, con FA-05 en Media y FA-09 en Baja como fija la iteración 04-04. Las severidades de los hallazgos nuevos son propuestas del agente.

| Grupo | Hallazgos |
| :--- | :--- |
| Resueltos en 04-04 | AUD-09-001 (Alta), 002, 003, 004 (Media), 006, 007, 008, 010 y 011 (Baja) |
| Abiertos y diferidos | AUD-09-005 (Media) y 009 (Baja) |
| Riesgo aceptado o aceptado | AUD-09-012 (320 × 568 px, Baja), 013 (dominio indexable antes de la aprobación del cliente, Media) y 020 (avisos opcionales del JSON-LD, Baja) |
| Resuelto por el desarrollador | AUD-09-014 (ofuscación de correos, Media) |
| Abiertos nuevos | AUD-09-016, 018, 019 y 021 (Baja) |
| Observaciones informativas | AUD-09-015, 017 y 022 (Baja) |

Hallazgos anteriores actualizados: AUD-01-017 (LCP medido), AUD-01-025 (validadores y SEO), AUD-02-002 (pnpm en Cloudflare), AUD-04-003 (sigue abierto, sin evidencia de las fuentes), AUD-05-001 (verificación final, con 1,40:1), AUD-08-003 (TalkBack) y AUD-08-023 (sigue abierto; enlaza AUD-09-013).

### Tareas 5 a 9

| Tarea | Resultado |
| :--- | :--- |
| 5 · Estados en `registro-log.md` | 04-03 pasa de «Pendiente» a «En revisión». 04-01, 04-02 y 04-04 siguen «En revisión»: sus comprobaciones pendientes quedaron verificadas con esta evidencia (salvo la captura de WhatsApp), y el paso a «Terminada» lo confirma el desarrollador |
| 6 · `DESIGN.md` | §9 con los valores de `global.css`; §5.1 con el anillo hacia adentro de la barra móvil y el borde `outline` de «Volver al inicio». Sin cambios de código |
| 7 · `iteracion-05-01-publicacion.md` | Dominio, `www`, HTTPS, Node, pnpm, `sharp` y la línea de validación pasan a verificación con su evidencia. Quedan: la falla de la validación en Cloudflare (decide el desarrollador), anclas y 404 en el teléfono, la primera pantalla con la barra de direcciones, iPhone si hay uno, las fuentes en el registro de compilación y la bitácora |
| 8 · Decisión del dominio indexable, FA-05, FA-09 y 320 px | AUD-09-013 (riesgo aceptado, relacionado con AUD-08-023), AUD-09-005 y AUD-09-009 (abiertos y diferidos) y AUD-09-012 (riesgo aceptado) |
| 9 · Sin cambios en `src/` ni `public/` | Cumplido: `git status` solo muestra `_planificacion/` y `DESIGN.md`, más el `AD` previo de `src/assets/LogoGruasBurgos.svg` |

### Incoherencias y lagunas de la evidencia

Incoherencias:

1. **Hora de las pruebas.** El encabezado dice «2026-10-02 15:00», pero lo fechado va de las 14:18 a las 21:26 (hora de Chile, UTC−3): compilación a las 14:18 (17:18:09Z); `curl.exe` del dominio de 19:33 a 19:35 (22:33:44 a 22:35:00 GMT); `curl.exe` de `/_astro/` y del despliegue por hash a las 21:25 y 21:26 (00:25:48 y 00:26:55 GMT del 3 de octubre); rastreo de la Prueba de resultados enriquecidos a las 20:15:16 (sin zona horaria). La hora 15:00 coincide con la desactivación de la ofuscación de correos, no con las pruebas.
2. **Dispositivo.** «Samsung Galaxy A52+» con «Android 16»: no conozco un modelo llamado «A52+», y hasta donde sé la familia Galaxy A52 recibió actualizaciones oficiales hasta Android 14. Conviene confirmar el modelo y la versión en Ajustes › Acerca del teléfono. No invalida los resultados, pero el dato queda registrado tal cual.
3. **Tarjeta de despacho en el teléfono.** El mensaje 1 se informa probado en «Hero, tarjeta de despacho y barra inferior», pero la tarjeta de despacho solo se muestra desde 768 px de ancho: en un teléfono en vertical no aparece. No consta cómo se probó (¿en horizontal?).
4. **Nombre del archivo de `/_astro/`.** La orden muestra `NOMBRE-DE-UN-ARCHIVO-CON-HUELLA`: esa dirección literal respondería 404, no 200. El archivo real no consta.
5. **Proceso de publicación.** `main` está en `b5fcbfc` sin merge commit (la tarea 4 lo pedía), con 04-04 aún «En revisión», y ese commit se rotula «Iteración 04-04» aunque contiene la evidencia de 04-03 (AUD-09-022, informativo). El código medido es el de 04-04 (`fb800b6`); los commits posteriores de la rama (`d8400fe` y `25bf6ab`) solo cambian documentación.

Coherencias comprobadas: el commit `b5fcbfc` es de las 14:17:09 −03:00 y la línea de validación de Cloudflare de las 17:18:09Z (un minuto después); los 114 archivos coinciden con `dist/`; tamaños de `robots.txt` y `favicon.ico` iguales a los de `public/`; JSON-LD idéntico al local; el teléfono que abre el marcador (+56 9 4619 2286) es el de `negocio.js`; los siete mensajes de WhatsApp coinciden con los de la fase A; el filtro del teléfono con letras coincide con el `pattern` del formulario. Que móvil y escritorio compartan el enlace de cada ejecución de PageSpeed es normal: un mismo análisis entrega ambos.

Lagunas (se registran como «no verificado»):

| Laguna | Efecto |
| :--- | :--- |
| Captura de la vista previa en WhatsApp | Criterio de 04-03 y de término de la Épica 04 sin verificar |
| PageSpeed: FCP, Índice de velocidad, elemento LCP, hora de cada ejecución, «Style & Layout» y cuántas fotos de la galería cargó | No se puede contrastar la alerta de LCP de la fase A ni elegir palanca para AUD-09-019. Con LCP y TBT iguales en las tres ejecuciones, la diferencia entre 96 y 99 debe venir de otras métricas que no constan |
| «Auditorías que fallaron o con advertencias: ninguna» | No queda claro si incluye diagnósticos y oportunidades |
| Validador de Schema.org sin modo (URL o código), hora, enlace ni captura; Prueba de resultados enriquecidos sin captura | Resultado registrado por testimonio |
| `sharp`, Node y pnpm como resumen y no como líneas del registro; sin las líneas de las fuentes | AUD-04-003 sigue sin verificar |
| `pages.dev`: solo la portada; sin `/_astro/`, `robots.txt` ni 404; sin el alias de la rama | El `noindex` del alias de rama no está verificado |
| Despliegue por hash `ff925603` | No consta a qué commit corresponde |
| TalkBack: si deletrea los textos en mayúsculas (observación de la fase A) y las cinco regiones vivas | No verificado |
| iPhone con Safari, anclas y 404 en el teléfono, primera pantalla con la barra de direcciones | No verificado (pasan a 05-01) |
| Hora de la descarga con `Select-String` | No se puede confirmar que fue posterior a las 15:00, aunque el resultado indica que sí |
| Tarea 10 del desarrollador (borrar `node_modules/.cache/prueba-csp` y las carpetas `cdp-gruas-*`) y el ícono de iOS | Sin información |

## Criterios de aceptación

- [x] Lighthouse móvil en `https://gruasvillarrica.cl` (mediana de tres) ≥ 95 en las cuatro categorías: 97, 100, 100 y 100.
- [x] Dominio propio: certificado, `www` con 301 conservando ruta y consulta, `http` a `https` y raíz sin `x-robots-tag`.
- [x] LCP de 2,5 s o menos y CLS menor a 0,05: 2,3 s y 0 en las tres ejecuciones.
- [x] JSON-LD: 0 errores en Schema.org y 0 críticos en la Prueba de resultados enriquecidos.
- [ ] Vista previa de WhatsApp con captura en la bitácora. **No verificado:** falta la captura.
- [x] Cabeceras de `_headers` verificadas sobre HTTPS con `curl.exe` (diferencias en AUD-09-015 a AUD-09-018).
- [x] Compilación de `main` en Cloudflare con Node, pnpm, `sharp` y la línea de validación.
- [x] Teclado, contraste, zoom al 200 % y 320 px sin hallazgos de severidad Alta abiertos (FA-01 resuelto en 04-04, medido en local).
- [x] Prueba en teléfono real y con lector de pantalla documentada, con quién y con qué dispositivo.
- [x] Auditoría 09 registrada en `auditoria-tecnica.md`.

Tareas de la fase B:

- [x] 1. Evidencia transcrita, con quién la obtuvo y con qué equipo.
- [x] 2. Cabeceras contrastadas con `public/_headers`.
- [x] 3. Criterios evaluados; casillas de 03-04 marcadas y la de 03-01 con nota.
- [x] 4. Auditoría 09 registrada y hallazgos anteriores actualizados.
- [x] 5. Estados de 04-01 a 04-04 en `registro-log.md`.
- [x] 6. `DESIGN.md` §5.1 y §9 alineados con 04-04.
- [x] 7. `iteracion-05-01-publicacion.md` actualizada.
- [x] 8. Decisión del dominio indexable, FA-05, FA-09 y 320 px registrados.
- [x] 9. Sin cambios en `src/` ni `public/`.

## Decisiones tomadas

Ninguna es estructural; son decisiones de método.

1. **WhatsApp sin captura, «no verificado».** El criterio pide la captura en la bitácora; un testimonio escrito no la reemplaza.
2. **Certificado.** No hay un dato explícito del certificado. Se da por activo porque `curl.exe` (que valida el certificado por defecto) obtuvo respuestas HTTPS del dominio y de `www`. Se dejó escrito que el emisor y el vencimiento no constan.
3. **Teclado sin Alta abiertas.** Se da por cumplido con la medición local de 04-04 porque producción publica el mismo código (`b5fcbfc` contiene `fb800b6` y no cambia `src/`). Se indica que no se repitió en producción.
4. **Archivo de `/_astro/`.** Se identifica por tipo y tamaño y se señala como deducción.
5. **Severidades.** FA-01 a FA-11 conservan la de la fase A (FA-05 y FA-09, la que fija 04-04). Las nuevas son propuestas; las fija el desarrollador.
6. **Estados.** 04-01, 04-02 y 04-04 quedan «En revisión»: el paso a «Terminada» es del desarrollador.
7. **Archivos fuera de la lista autorizada, sin editar:** `iteracion-04-03-auditoria-a11y-lighthouse.md` (estado y casillas), `iteracion-04-01-seo-datos-estructurados.md` (el favicon en la pestaña ya consta en Chrome móvil), `definicion-epica-04.md` (estado) y `decisiones.md` (RDA-012 dice que hay que confirmar `sharp` en Cloudflare, y ya consta). Se proponen al desarrollador.

## Pendientes y riesgos

- **Captura de la vista previa en WhatsApp.** Es lo único que falta para los criterios de 04-03 y de término de la Épica 04.
- **Confirmar el dispositivo** (modelo y versión de Android) y aclarar cómo se probó la tarjeta de despacho.
- **Decisiones del desarrollador** (en «Decisiones por tomar»): LCP de 03-01 (AUD-09-021), caché de 4 h (AUD-09-016), HSTS (AUD-09-018), falla de la validación en Cloudflare (05-01) y cuándo se corrigen FA-05 y FA-09.
- **Sitio indexable sin aprobación del cliente** (AUD-09-013). Lo que el cliente pida cambiar ya puede estar en el índice de Google.
- **Medido solo en Chrome.** Teclado y foco no se probaron en Firefox ni Safari; el teléfono fue Android.
- **Archivos que el agente no editó** (decisión 7): actualizarlos requiere autorización.
- **Estado previo.** `git status` sigue mostrando `AD src/assets/LogoGruasBurgos.svg`, anterior a 04-01. Los archivos de `_planificacion/` y `DESIGN.md` están con CRLF en la copia de trabajo; Git los normaliza a LF al confirmar (`.gitattributes`). Esta bitácora se escribió con LF.
- **Servidores.** No se inició ninguno en esta fase.

## Commit sugerido

`Épica 4 - Iteración 04-03: registra la Auditoría 09 con la evidencia de producción (PageSpeed, cabeceras, validadores, teléfono y TalkBack) y alinea DESIGN.md con 04-04 (fase B)`

(177 caracteres, contados con código.)
