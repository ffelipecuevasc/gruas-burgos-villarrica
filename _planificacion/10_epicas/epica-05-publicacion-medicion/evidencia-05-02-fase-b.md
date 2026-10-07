# Evidencia de la fase B de 05-02 · Medición: Search Console, Web Analytics y Google Ads

Archivo para que el desarrollador entregue lo que solo él puede obtener en los paneles (Cloudflare, PageSpeed, Search Console, Perfil de Empresa de Google y Google Ads). Todo lo que quede vacío se registrará como «no verificado».

El repositorio es público. **No pegues** claves, identificadores de cuentas de pago (por ejemplo, el número de cliente de Google Ads), correos personales, textos de anuncios ni mensajes del cliente. Las capturas no deben mostrar datos personales.

Los comandos son para **PowerShell**. Escribe siempre `curl.exe` (con `.exe`): en PowerShell, `curl` a secas es otro programa. Para filtrar una salida se usa `Select-String`.

Sigue las secciones en orden: la 1 va antes de tocar nada.

* **Fecha y hora de las pruebas:**
* **Hash del commit desplegado en producción (Cloudflare, `main`):**
* **Quién hizo las pruebas y con qué equipos (PC, teléfono, sistema y navegador):**

## 1. Web Analytics: estado actual (antes de tocar nada)

### 1.1 ¿El script ya está en la página?

Ejecuta este comando. Si imprime una línea, el script de Cloudflare está activo; si no imprime nada, no lo está.

```text
curl.exe -s https://gruasvillarrica.cl/ | Select-String "cloudflareinsights"
```

La línea puede ser muy larga (el HTML va en pocas líneas) y trae el identificador del sitio en Web Analytics: no hace falta pegarla. Si quieres ver solo la dirección del script, usa este otro comando:

```text
curl.exe -s https://gruasvillarrica.cl/ | Select-String -Pattern 'static\.cloudflareinsights\.com/[^"'']+' -AllMatches | ForEach-Object { $_.Matches.Value }
```

* **¿El primer comando imprimió una línea? (sí: script activo / no: no imprimió nada):**
* **Dirección del script que apareció (si apareció):**

### 1.2 ¿Qué dice el panel de Cloudflare?

En el panel de Cloudflare: **Workers & Pages** › proyecto `gruas-burgos-villarrica` › **Metrics**, sección **Web Analytics**. Si el panel lo muestra con otro nombre, busca «Web Analytics» dentro del proyecto.

* **¿Qué muestra la sección Web Analytics? (activado, con cifras / un botón «Enable» / otra cosa, cuál):**
* **¿Coincide con lo que dio el comando de 1.1? (sí / no):**

### 1.3 Si ya estaba activo

Las cifras de PageSpeed de 05-01 ya incluyen el script. Abre uno de los informes de PageSpeed (los enlaces de 05-01 o uno nuevo de la sección 2), busca la auditoría **«JavaScript heredado»** y despliégala.

* **Nombre o dirección del archivo que señala la auditoría «JavaScript heredado»:**
* **Ahorro estimado que indica:**
* **¿Es el script de Cloudflare (`static.cloudflareinsights.com/beacon.min.js`)? (sí / no; si no, cuál es):**

Con esta respuesta se cierra AUD-10-001. Salta a la sección 2.

### 1.4 Si no estaba activo

1. En el mismo lugar (Workers & Pages › `gruas-burgos-villarrica` › Metrics), pulsa **Enable** bajo Web Analytics.
2. El script se agrega en el **siguiente despliegue de `main`**: lo provoca el merge de 05-02. Espera a que ese despliegue quede en «Success».
3. Repite el comando de 1.1 y confirma que aparece `static.cloudflareinsights.com/beacon.min.js`.

* **¿Pulsaste «Enable»? (sí / no) y a qué hora:**
* **Hash del commit del despliegue de `main` posterior y su estado:**
* **Después del despliegue, ¿el comando de 1.1 imprime la línea? (sí / no):**
* **Dirección del script que apareció:**
* **En un informe de PageSpeed posterior, ¿la auditoría «JavaScript heredado» sigue apareciendo? ¿Qué archivo señala y con qué ahorro?:**

Si la auditoría «JavaScript heredado» ya aparecía antes de activar Web Analytics (05-01) y el script no estaba, anota en la sección 9 qué archivo señalaba: AUD-10-001 tendría otro origen.

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

| Dispositivo | Ejecución | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT | Enlace |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Móvil | 1 | | | | | | | | |
| Móvil | 2 | | | | | | | | |
| Móvil | 3 | | | | | | | | |
| Escritorio | 1 | | | | | | | | |
| Escritorio | 2 | | | | | | | | |
| Escritorio | 3 | | | | | | | | |

* **¿El script de Web Analytics estaba activo durante estas ejecuciones? (sí / no):**
* **Auditorías que fallaron o con advertencias (nombre y detalle):**
* **Elemento del LCP en móvil (en el informe: «Diagnóstico» › «Elemento de renderizado del mayor elemento con contenido»; copia qué elemento es):**

### 2.1 Decisión (RDA-013)

La condición es, en móvil y con el script activo: 95 o más en las cuatro categorías (mediana de las tres ejecuciones), LCP de 2,5 s o menos y CLS 0. El JavaScript propio del sitio ya está medido en local en la fase A (960 B en la portada, bajo 1 KB) y no cambia en esta iteración; el script de Cloudflare es de terceros y se cuenta aparte.

* **Medianas en móvil (Rendimiento, Accesibilidad, Buenas prácticas, SEO):**
* **¿95 o más en las cuatro categorías? (sí / no):**
* **¿LCP de 2,5 s o menos? (sí / no; valor):**
* **¿CLS 0? (sí / no; valor):**
* **Decisión: ¿Web Analytics se mantiene o se desactiva?:**

### 2.2 Solo si se desactiva

En el panel de Cloudflare: **Web Analytics** (dentro de **Analytics & Logs**) › el sitio › **Manage site** › **Disable**. Después del siguiente despliegue, repite el comando de 1.1 para confirmar que el script desapareció.

* **¿Lo desactivaste? (sí / no) y a qué hora:**
* **¿El comando de 1.1 ya no imprime nada? (sí / no):**

## 3. Search Console

En `https://search.google.com/search-console`.

* **¿La propiedad es de dominio (`gruasvillarrica.cl`) o de prefijo de URL (`https://gruasvillarrica.cl/`)?:**
* **¿Está verificada? (sí / no):**
* **Método de verificación (registro DNS TXT, archivo HTML, etiqueta, otro):**

### 3.1 Si falta verificarla

1. Search Console › **Agregar propiedad** › **Dominio** › escribe `gruasvillarrica.cl`.
2. Copia el registro TXT que muestra (`google-site-verification=…`).
3. Cloudflare › el dominio `gruasvillarrica.cl` › **DNS** › **Records** › **Add record**: tipo `TXT`, nombre `@`, contenido el valor copiado. Guarda.
4. Vuelve a Search Console y pulsa **Verificar**. Puede tardar; si falla, espera unos minutos y reintenta.
5. **No borres el registro TXT después:** Google lo vuelve a comprobar cada cierto tiempo.

No pegues aquí el valor del registro.

* **¿Agregaste el registro TXT en Cloudflare? (sí / no / ya existía):**
* **¿Search Console confirmó la verificación? (sí / no; fecha y hora):**

### 3.2 Sitemap

En el menú **Indexación** › **Sitemaps**: escribe `sitemap-index.xml` y pulsa **Enviar**.

* **¿Lo enviaste ahora o ya estaba enviado?:**
* **Estado que muestra («Correcto», «No se ha podido obtener», otro):**
* **Páginas descubiertas que indica:**
* **Fecha de la última lectura:**
* **Captura de la propiedad verificada y del sitemap, sin datos personales (nombre del archivo o «sin captura»):**

## 4. Nueva inspección de la portada

En Search Console: **Inspección de URLs** (barra superior) › pega `https://gruasvillarrica.cl/` › espera el resultado › **Solicitar indexación**. Se hace una sola vez: no repitas la solicitud.

* **Antes de solicitar, ¿qué decía el resultado? («La URL está en Google», «La URL no está en Google», otro):**
* **Fecha del último rastreo que indica:**
* **¿Solicitaste la indexación? (sí / no), fecha y hora:**
* **Resultado de la solicitud («Se solicitó la indexación», un error, cuál):**

## 5. Perfil de Empresa de Google

En el perfil del negocio (`https://business.google.com/` o buscando el negocio en Google con la cuenta que lo administra): **Editar perfil** › **Contacto** › **Sitio web**. El nombre exacto de los menús puede variar.

El campo «Sitio web» debe ser `https://gruasvillarrica.cl/`.

* **¿Qué decía el campo «Sitio web» antes?:**
* **¿Ya era `https://gruasvillarrica.cl/`? (sí / no):**
* **¿Qué hiciste? (nada / lo cambiaste / no tienes acceso al perfil):**
* **¿El cambio quedó publicado o «en revisión»?:**

## 6. Google Ads (campaña sin activar)

Los textos del anuncio son los del borrador `borrador-textos-google-ads.md`, que guardas **fuera del repositorio**. Los apruebas tú y los pegas en el panel. No pegues aquí los textos ni datos de la cuenta: solo responde sí o no.

Los textos no llevan tiempos de respuesta, tarifas ni recargos, ni nombres propios del dueño (lista «No publicar» de `definicion-epica-05.md`).

| Punto | ¿Conforme? (sí / no) |
| :--- | :--- |
| Aprobaste los textos del borrador antes de pegarlos | |
| Los textos respetan la lista «No publicar» | |
| El tipo de campaña es **Búsqueda** | |
| El anuncio es un **anuncio de búsqueda adaptable** (no «solo de llamada», que se retira en febrero de 2027) | |
| La URL final es `https://gruasvillarrica.cl/` | |
| Hay un **recurso de llamada** con el número de `src/data/negocio.js` | |
| La conversión **«Llamadas desde anuncios»** está creada y asociada | |
| La campaña quedó en estado **«Pausada»** | |
| No se agregó ninguna etiqueta de Google al sitio (RDA-010) | |

* **Fecha en que quedó creada la campaña:**
* **Algo que no pudiste configurar o que el panel mostró distinto (qué):**

Presupuesto, palabras clave y pujas quedan fuera de esta iteración. La campaña se activa cuando tú lo decidas.

## 7. JSON-LD

Esta iteración no cambia el sitio. Si no cambió nada, responde «sin cambios». Si cambió algo, repite los validadores (`https://validator.schema.org/` y `https://search.google.com/test/rich-results`).

* **¿Cambió algo del sitio desde 05-01? (no: «sin cambios» / sí: qué):**
* **Validador de Schema.org (solo si cambió algo):**
* **Prueba de resultados enriquecidos de Google (solo si cambió algo):**

## 8. Otros navegadores

No aplica: esta iteración no cambia el sitio.

## 9. Observaciones y problemas adicionales

*

## 10. Veredicto del desarrollador

* **¿Das por completada la medición (Search Console, Web Analytics, Perfil de Empresa y Google Ads)? (sí / no, y por qué):**
* **RDA-013 (Web Analytics): ¿queda «Aceptada» o «Descartada»?:**
* **RDA-010 (medición de Google Ads sin código en el sitio): ¿se confirma «Aceptada»? (sí / no):**
* **¿Quedó algo pendiente para una iteración nueva? (qué y con qué severidad):**
