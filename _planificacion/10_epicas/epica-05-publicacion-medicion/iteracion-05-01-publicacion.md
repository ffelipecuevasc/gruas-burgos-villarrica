# Iteración 05-01 · Publicación en producción

- **Épica:** 05 · Publicación y medición
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/05-01-produccion`
- **Depende de:** 04-03
- **RDA relacionadas:** RDA-001, RDA-008

## Objetivo

Pasar de la vista previa a producción sin datos provisionales.

**Actualización 2026-10-02 (fase B de 04-03):** la publicación se adelantó. `https://gruasvillarrica.cl` está en producción desde el commit `b5fcbfc` de `main` (decisión 7 de la Épica 04). Lo ya hecho pasa a verificación; aquí queda solo lo pendiente. Evidencia en `bitacora-04-03-fase-b-2026-10-02.md`.

## Ya hecho: pasa a verificación

Hecho por el desarrollador y verificado con su evidencia del 2026-10-02 (`evidencia-04-03-fase-b.md`):

| Punto | Evidencia |
| :--- | :--- |
| Validación de datos provisionales (adelantada a 04-02) | El registro de compilación de `main` en Cloudflare muestra `[validar-datos-provisionales] Sin PENDIENTE_CLIENTE en 114 archivos publicados.` (2026-10-02T17:18:09Z). |
| Proyecto de Cloudflare Pages conectado a GitHub, rama de producción `main` | `main` compiló y se publicó (commit `b5fcbfc`). El comando de compilación y la carpeta de salida no constan textualmente en la evidencia. |
| Node y pnpm | Node v24.13.1 y pnpm 12.8.1 en el registro de compilación. |
| `sharp` | `sharp` 0.35.5 instalado (`@img/sharp-libvips-linux-x64@1.3.4`) y 96 imágenes generadas (resumen del desarrollador, no líneas del registro). |
| Dominio `gruasvillarrica.cl` y `www` con 301 a la raíz | `https://www.gruasvillarrica.cl/prueba?x=1` responde 301 a `https://gruasvillarrica.cl/prueba?x=1` (conserva ruta y consulta). |
| HTTPS forzado y certificado activo | `http://gruasvillarrica.cl/` responde 301 a `https://gruasvillarrica.cl/`; `curl.exe` obtuvo respuestas HTTPS del dominio y de `www` sin errores de certificado. El emisor y el vencimiento no constan. |
| Indexación | La raíz del dominio propio responde sin `x-robots-tag`; `pages.dev` y el despliegue por hash responden `x-robots-tag: noindex`. |
| Prueba de humo, parte hecha | Llamada (hero y barra), los siete mensajes de WhatsApp, «Cómo llegar» y el formulario en un teléfono Android; `/no-existe` responde 404; cabeceras de `_headers` aplicadas. |

## Tareas pendientes

1. **Validación de datos provisionales en Cloudflare, caso de falla.** Que la compilación de `main` pasa sin datos provisionales ya consta. Que **falla** con un dato provisional solo se probó en local (04-02, con `CF_PAGES_BRANCH=main`). Decide el desarrollador si se prueba en Cloudflare (una compilación fallida de `main` no reemplaza la versión publicada) o si basta la prueba local.
2. **Prueba de humo, lo que falta:**
   1. Anclas `#inicio`, `#servicios` y `#contacto` en producción, en el teléfono y en escritorio.
   2. Página 404 vista en el teléfono (hoy solo consta el código 404 con `curl.exe`).
   3. Primera pantalla del teléfono con la barra de direcciones del navegador a la vista (observación de la fase A de 04-03).
   4. iPhone con Safari, si hay uno disponible.
3. **Registro de compilación:** confirmar que no aparece «No data found for font family» y que `dist/` publica los archivos `.woff2` (AUD-04-003).
4. Bitácora de 05-01 con lo anterior.
5. **Caché de `robots.txt` y `favicon.ico` (AUD-09-016, trasladado por la decisión 12 de la Épica 04).** Hoy responden `Cache-Control: public, max-age=14400, must-revalidate` (4 h), valor que `public/_headers` no define. Decidir si se fija en `_headers` o se acepta el valor por defecto de Cloudflare. Medir también `favicon.svg`, `apple-touch-icon.png`, los sitemaps y el 404, que no se revisaron. Cambiar `_headers` requiere consulta previa (`AGENTS.md` §5).
6. **HSTS (AUD-09-018, trasladado por la decisión 12 de la Épica 04).** Evaluar `Strict-Transport-Security` en Cloudflare (panel de la zona, SSL/TLS › Certificados perimetrales) o en `_headers`.
   - **Riesgo:** el navegador que recibe la cabecera se niega a abrir el sitio por `http` durante todo el `max-age`. Si el certificado falla, o si con `includeSubDomains` algún subdominio no tiene HTTPS, el sitio queda inaccesible para esos visitantes hasta que venza el plazo, y no se puede revertir desde el servidor. Con `preload`, el dominio entra en la lista de los navegadores y salir de ella tarda meses.
   - **Plan gradual:** empezar con `max-age=300` (5 minutos), sin `includeSubDomains` ni `preload`, y comprobarlo con `curl.exe -sI`. Si no hay problemas, subir a `max-age=86400` (1 día), luego a 604800 (1 semana) y por último a 31536000 (1 año). Agregar `includeSubDomains` solo si todos los subdominios, incluido `www`, sirven HTTPS. `preload` solo con una decisión explícita del desarrollador.

## Criterios de aceptación

- [ ] Compilación de `main` falla ante datos provisionales y pasa sin ellos. (Pasa sin ellos: **verificado en Cloudflare** el 2026-10-02, 114 archivos. Falla con un dato forzado: simulado en local en 04-02; en Cloudflare, no verificado.)
- [ ] Prueba de humo documentada en la bitácora. (Parcial: llamada, WhatsApp, «Cómo llegar», formulario, 404 por código y cabeceras, en `bitacora-04-03-fase-b-2026-10-02.md`. Faltan los puntos de la tarea 2.)
