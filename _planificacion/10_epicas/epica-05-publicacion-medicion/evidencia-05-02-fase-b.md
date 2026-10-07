# Evidencia de la fase B de 05-02 · Medición: Search Console, Web Analytics y Google Ads

Archivo para que el desarrollador entregue lo que solo él puede obtener en los paneles (Cloudflare, PageSpeed, Search Console, Perfil de Empresa de Google y Google Ads). Todo lo que quede vacío se registrará como «no verificado».

El repositorio es público. **No pegues** claves, identificadores de cuentas de pago (por ejemplo, el número de cliente de Google Ads), correos personales, textos de anuncios ni mensajes del cliente. Las capturas no deben mostrar datos personales.

Los comandos son para **PowerShell**. Escribe siempre `curl.exe` (con `.exe`): en PowerShell, `curl` a secas es otro programa. Para filtrar una salida se usa `Select-String`.

Sigue las secciones en orden: la 1 va antes de tocar nada.

* **Fecha y hora de las pruebas:** 7 de octubre de 2026.
* **Hash del commit desplegado en producción (Cloudflare, `main`):** `24660b338f185916cb213f810258eda093fbbca4`
* **Quién hizo las pruebas y con qué equipos (PC, teléfono, sistema y navegador):** Felipe Cuevas, PC Windows (PowerShell 7.6.6), Navegador Chrome.

## 1. Web Analytics: estado actual (antes de tocar nada)

### 1.1 ¿El script ya está en la página?

Ejecuta este comando. Si imprime una línea, el script de Cloudflare está activo; si no imprime nada, no lo está.

```text
curl.exe -s https://gruasvillarrica.cl/ | Select-String "cloudflareinsights"
Imprimió una línea (no se pega: trae el identificador del sitio)
```

La línea puede ser muy larga (el HTML va en pocas líneas) y trae el identificador del sitio en Web Analytics: no hace falta pegarla. Si quieres ver solo la dirección del script, usa este otro comando:

```text
curl.exe -s https://gruasvillarrica.cl/ | Select-String -Pattern 'static\.cloudflareinsights\.com/[^"'']+' -AllMatches | ForEach-Object { $_.Matches.Value }
static.cloudflareinsights.com/beacon.min.js
```

* **¿El primer comando imprimió una línea? (sí: script activo / no: no imprimió nada):** Sí, script activo.
* **Dirección del script que apareció (si apareció):** `static.cloudflareinsights.com/beacon.min.js`

### 1.2 ¿Qué dice el panel de Cloudflare?

En el panel de Cloudflare: **Workers & Pages** › proyecto `gruas-burgos-villarrica` › **Metrics**, sección **Web Analytics**. Si el panel lo muestra con otro nombre, busca «Web Analytics» dentro del proyecto.

* **¿Qué muestra la sección Web Analytics? (activado, con cifras / un botón «Enable» / otra cosa, cuál):** Activado, pero sin cifras aún (ha pasado muy poco tiempo desde que se activó).
* **¿Coincide con lo que dio el comando de 1.1? (sí / no):** Sí.

### 1.3 Si ya estaba activo

Las cifras de PageSpeed de 05-01 ya incluyen el script. Abre uno de los informes de PageSpeed (los enlaces de 05-01 o uno nuevo de la sección 2), busca la auditoría **«JavaScript heredado»** y despliégala.

* **Nombre o dirección del archivo que señala la auditoría «JavaScript heredado»:** `static.cloudflareinsights.com/beacon.min.js` (visible indirectamente mediante el ahorro en JS de terceros).
* **Ahorro estimado que indica:** 11 KiB.
* **¿Es el script de Cloudflare (`static.cloudflareinsights.com/beacon.min.js`)? (sí / no; si no, cuál es):** Sí.

Con esta respuesta se cierra AUD-10-001. Salta a la sección 2.

### 1.4 Si no estaba activo

*No verificado (salto indicado en 1.3)*

## 2. PageSpeed Insights con el estado final de Web Analytics

En `https://pagespeed.web.dev/`, analiza `https://gruasvillarrica.cl/`. Tres ejecuciones por dispositivo, con el script de Web Analytics activo (o, si ya estaba activo, tal como está). Anota las cuatro puntuaciones, LCP, CLS, TBT y el enlace al informe de cada ejecución.

Cifras de referencia (producción, 05-01, 2026-10-06):

| Dispositivo | Ejecución | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Móvil | 1 | 97 | 100 | 100 | 100 | 2,3 s | 0 | 0 ms |
| Móvil | 2 | 99 | 100 | 100 | 100 | 1,8 s | 0 | 0 ms |
| Móvil | 3 | 99 | 100 | 100 | 100 | 1,8 s | 0 | 0 ms |
| Escritorio | 1 a 3 | 100 | 100 | 100 | 100 | 0,6 s | — | — |

Mediciones de esta iteración:

| Dispositivo | Ejecución | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP   | CLS | TBT | Enlace |
| :--- | :--- | :--- | :--- | :--- | :--- |:------| :--- | :--- | :--- |
| Móvil | 1 | 96 | 100 | 100 | 100 | 2,5 s | 0 | 0 ms | `https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/fnk33135hs?form_factor=mobile` |
| Móvil | 2 | 96 | 100 | 100 | 100 | 2,5 s | 0 | 0 ms | `https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/h9e3amodqp?form_factor=mobile` |
| Móvil | 3 | 94 | 100 | 100 | 100 | 2,5 s | 0 | 10 ms | `https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/ler41v8sj0?form_factor=mobile` |
| Escritorio | 1 | 100 | 100 | 100 | 100 | 0,6 s | 0,004 | 10 ms | `https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/fnk33135hs?form_factor=desktop` |
| Escritorio | 2 | 100 | 100 | 100 | 100 | 0,7 s | 0 | 0 ms | `https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/h9e3amodqp?form_factor=desktop` |
| Escritorio | 3 | 100 | 100 | 100 | 100 | 0,6 s | 0 | 0 ms | `https://pagespeed.web.dev/analysis/https-gruasvillarrica-cl/ler41v8sj0?form_factor=desktop` |

* **¿El script de Web Analytics estaba activo durante estas ejecuciones? (sí / no):** Sí.
* **Auditorías que fallaron o con advertencias (nombre y detalle):** JavaScript heredado (Ahorro estimado de 11 KiB en móvil provocado por el script de Web Analytics).
* **Elemento del LCP en móvil (en el informe: «Diagnóstico» › «Elemento de renderizado del mayor elemento con contenido»; copia qué elemento es):** No visible en los PDFs (auditoría colapsada).

### 2.1 Decisión (RDA-013)

La condición es, en móvil y con el script activo: 95 o más en las cuatro categorías (mediana de las tres ejecuciones), LCP de 2,5 s o menos y CLS 0. El JavaScript propio del sitio ya está medido en local en la fase A (960 B en la portada, bajo 1 KB) y no cambia en esta iteración; el script de Cloudflare es de terceros y se cuenta aparte.

* **Medianas en móvil (Rendimiento, Accesibilidad, Buenas prácticas, SEO):** 96, 100, 100, 100.
* **¿95 o más en las cuatro categorías? (sí / no):** Sí.
* **¿LCP de 2,5 s o menos? (sí / no; valor):** Si.
* **¿CLS 0? (sí / no; valor):** Sí; 0.
* **Decisión: ¿Web Analytics se mantiene o se desactiva?:** Se mantiene.

### 2.2 Solo si se desactiva

En el panel de Cloudflare: **Web Analytics** (dentro de **Analytics & Logs**) › el sitio › **Manage site** › **Disable**. Después del siguiente despliegue, repite el comando de 1.1 para confirmar que el script desapareció.

* **¿Lo desactivaste? (sí / no) y a qué hora:** No verificado.
* **¿El comando de 1.1 ya no imprime nada? (sí / no):** No verificado.

## 3. Search Console

En `https://search.google.com/search-console`.

* **¿La propiedad es de dominio (`gruasvillarrica.cl`) o de prefijo de URL (`https://gruasvillarrica.cl/`)?:** De dominio (`gruasvillarrica.cl`).
* **¿Está verificada? (sí / no):** Sí.
* **Método de verificación (registro DNS TXT, archivo HTML, etiqueta, otro):** Registro DNS TXT.

### 3.1 Si falta verificarla

*No verificado (ya estaba verificada)*

### 3.2 Sitemap

En el menú **Indexación** › **Sitemaps**: escribe `sitemap-index.xml` y pulsa **Enviar**.

* **¿Lo enviaste ahora o ya estaba enviado?:** Ya estaba enviado (2 oct 2026).
* **Estado que muestra («Correcto», «No se ha podido obtener», otro):** Correcto.
* **Páginas descubiertas que indica:** 1.
* **Fecha de la última lectura:** 5 oct 2026.
* **Captura de la propiedad verificada y del sitemap, sin datos personales (nombre del archivo o «sin captura»):** `Google Search Console - Sitemaps.pdf`

## 4. Nueva inspección de la portada

En Search Console: **Inspección de URLs** (barra superior) › pega `https://gruasvillarrica.cl/` › espera el resultado › **Solicitar indexación**. Se hace una sola vez: no repitas la solicitud.

* **Antes de solicitar, ¿qué decía el resultado? («La URL está en Google», «La URL no está en Google», otro):** La URL está en Google.
* **Fecha del último rastreo que indica:** 2 oct 2026, 15:54:48.
* **¿Solicitaste la indexación? (sí / no), fecha y hora:** No (la URL ya está en Google y no hubo cambios en el sitio).
* **Resultado de la solicitud («Se solicitó la indexación», un error, cuál):** No verificado.

## 5. Perfil de Empresa de Google

En el perfil del negocio (`https://business.google.com/` o buscando el negocio en Google con la cuenta que lo administra): **Editar perfil** › **Contacto** › **Sitio web**. El nombre exacto de los menús puede variar.

El campo «Sitio web» debe ser `https://gruasvillarrica.cl/`.

* **¿Qué decía el campo «Sitio web» antes?:** No verificado.
* **¿Ya era `https://gruasvillarrica.cl/`? (sí / no):** No verificado.
* **¿Qué hiciste? (nada / lo cambiaste / no tienes acceso al perfil):** Nada (no se tiene acceso al perfil, las credenciales las posee el cliente y se debe esperar una reunión).
* **¿El cambio quedó publicado o «en revisión»?:** No verificado.

## 6. Google Ads (campaña sin activar)

Los textos del anuncio son los del borrador `borrador-textos-google-ads.md`, que guardas **fuera del repositorio**. Los apruebas tú y los pegas en el panel. No pegues aquí los textos ni datos de la cuenta: solo responde sí o no.

Los textos no llevan tiempos de respuesta, tarifas ni recargos, ni nombres propios del dueño (lista «No publicar» de `definicion-epica-05.md`).

| Punto | ¿Conforme? (sí / no) |
| :--- | :--- |
| Aprobaste los textos del borrador antes de pegarlos | No verificado |
| Los textos respetan la lista «No publicar» | No verificado |
| El tipo de campaña es **Búsqueda** | No verificado |
| El anuncio es un **anuncio de búsqueda adaptable** (no «solo de llamada», que se retira en febrero de 2027) | No verificado |
| La URL final es `https://gruasvillarrica.cl/` | No verificado |
| Hay un **recurso de llamada** con el número de `src/data/negocio.js` | No verificado |
| La conversión **«Llamadas desde anuncios»** está creada y asociada | No verificado |
| La campaña quedó en estado **«Pausada»** | No verificado |
| No se agregó ninguna etiqueta de Google al sitio (RDA-010) | No verificado |

* **Fecha en que quedó creada la campaña:** No verificado (pendiente).
* **Algo que no pudiste configurar o que el panel mostró distinto (qué):** No se pudo configurar nada en esta iteración debido a que las credenciales de acceso a Google Ads las tiene el cliente. Queda todo pendiente hasta concretar reunión con él.

Presupuesto, palabras clave y pujas quedan fuera de esta iteración. La campaña se activa cuando tú lo decidas.

## 7. JSON-LD

Esta iteración no cambia el sitio. Si no cambió nada, responde «sin cambios». Si cambió algo, repite los validadores (`https://validator.schema.org/` y `https://search.google.com/test/rich-results`).

* **¿Cambió algo del sitio desde 05-01? (no: «sin cambios» / sí: qué):** sin cambios.
* **Validador de Schema.org (solo si cambió algo):** No verificado.
* **Prueba de resultados enriquecidos de Google (solo si cambió algo):** No verificado.

## 8. Otros navegadores

No aplica: esta iteración no cambia el sitio.

## 9. Observaciones y problemas adicionales

* Se detectó que al activar el script de Web Analytics, el LCP en teléfonos móviles ascendió a **2,5 segundos**.
* No fue posible completar las validaciones de los pasos 5 y 6 (Perfil de Empresa y Google Ads) por no contar aún con las credenciales de administración que posee el propietario de la empresa.

## 10. Veredicto del desarrollador

* **¿Das por completada la medición (Search Console, Web Analytics, Perfil de Empresa y Google Ads)? (sí / no, y por qué):** No, porque falta la integración comercial (Perfil de Empresa y Ads) por motivo de bloqueo de credenciales.
* **RDA-013 (Web Analytics): ¿queda «Aceptada» o «Descartada»?:** Aceptada (LCP igual a 2,5 s).
* **RDA-010 (medición de Google Ads sin código en el sitio): ¿se confirma «Aceptada»? (sí / no):** Pendiente de confirmación.
* **¿Quedó algo pendiente para una iteración nueva? (qué y con qué severidad):** Sí.
    1.  Actualizar la información en el Perfil de Empresa de Google (Severidad: Alta).
    2.  Crear y configurar la campaña pausada en Google Ads (Severidad: Alta, ya que es el requisito para concluir la épica comercial).