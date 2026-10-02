# Evidencia de la fase B de 04-03

Archivo para que el desarrollador entregue a Claude Code lo que solo él puede obtener. Se rellena después de fusionar `iteracion/04-03-auditoria` en `main`. Todo lo que quede vacío se registrará como «no verificado». No pegar claves ni datos personales.

- **Fecha y hora de las pruebas:**
- **Hash del commit desplegado en producción (Cloudflare, `main`):**
- **Quién hizo las pruebas y con qué equipos:**

## 1. Compilación de `main` en Cloudflare

Pegar las líneas del registro de compilación que muestran:

- Versión de Node:
- Versión de pnpm:
- Instalación de `sharp` sin errores:
- Línea «Sin PENDIENTE_CLIENTE en N archivos publicados»:

## 2. Cabeceras y dominio (`curl.exe`)

Pegar la salida completa de cada comando.

```
curl.exe -sI https://gruasvillarrica.cl/
```

```
curl.exe -sI "https://www.gruasvillarrica.cl/prueba?x=1"
```

```
curl.exe -sI http://gruasvillarrica.cl/
```

```
curl.exe -sI https://gruas-burgos-villarrica.pages.dev/
```

```
curl.exe -sI https://gruasvillarrica.cl/robots.txt
```

```
curl.exe -sI https://gruasvillarrica.cl/favicon.ico
```

```
curl.exe -sI https://gruasvillarrica.cl/_astro/NOMBRE-DE-UN-ARCHIVO-CON-HUELLA
```

```
curl.exe -s -o NUL -w "%{http_code}" https://gruasvillarrica.cl/no-existe
```

## 3. Qué inyecta Cloudflare en el HTML

- ¿Se desactivó «Email Address Obfuscation»? (sí/no, y cuándo):
- Salida de `Select-String -Path portada.html -Pattern "cdn-cgi","beacon","email-protection"`:
- JSON-LD publicado (copiar el bloque completo desde `view-source`):

## 4. PageSpeed Insights sobre `https://gruasvillarrica.cl`

Tres ejecuciones por categoría de dispositivo. Anotar las cuatro puntuaciones y, en móvil, LCP, CLS, TBT, FCP e Índice de velocidad. Incluir el enlace al informe de cada ejecución.

| Dispositivo | Ejecución | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT | Enlace |
| :---------- | :-------- | :---------- | :------------ | :--------------- | :-- | :-- | :-- | :-- | :----- |
| Móvil       | 1         |             |               |                  |     |     |     |     |        |
| Móvil       | 2         |             |               |                  |     |     |     |     |        |
| Móvil       | 3         |             |               |                  |     |     |     |     |        |
| Escritorio  | 1         |             |               |                  |     |     |     |     |        |
| Escritorio  | 2         |             |               |                  |     |     |     |     |        |
| Escritorio  | 3         |             |               |                  |     |     |     |     |        |

Auditorías que fallaron o con advertencias (nombre y detalle):

## 5. Validadores de datos estructurados

- Validador de Schema.org (resultado y errores o advertencias):
- Prueba de resultados enriquecidos de Google (resultado y errores o advertencias):

## 6. Pruebas en teléfono real

- Equipo, sistema y navegador (Android y, si es posible, iPhone con Safari):
- Llamada («Llamar ahora» y barra inferior):
- Los siete mensajes de WhatsApp (abren con el texto esperado; indicar cuáles probaste):
- «Cómo llegar» (abre Google Maps con la dirección):
- Formulario (envío vacío, teléfono con letras, envío válido):
- Vista previa del enlace al compartirlo en WhatsApp (imagen, título y descripción; adjuntar captura):
- Favicon en la pestaña del navegador:

## 7. Lector de pantalla (TalkBack o VoiceOver)

- Equipo y lector usado:
- Encabezados y orden:
- Nombres de botones y enlaces:
- Enlace «Saltar al contenido»:
- Formulario y errores:
- Problemas encontrados:

## 8. Observaciones y problemas adicionales