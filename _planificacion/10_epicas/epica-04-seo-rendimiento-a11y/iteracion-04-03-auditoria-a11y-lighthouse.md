# Iteración 04-03 · Vista previa en Cloudflare, accesibilidad y Lighthouse

- **Épica:** 04 · SEO técnico, rendimiento y accesibilidad
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/04-03-auditoria` (desde aquí se vuelve a trabajar con ramas)
- **Depende de:** 04-01, 04-02 y, para la fase B, 04-04
- **RDA relacionadas:** RDA-001, RDA-006, RDA-010, RDA-011, RDA-012
- **Hallazgos que cierra:** verificación final de los abiertos: AUD-01-025, AUD-05-001 y los que surjan en esta auditoría

## Objetivo

Verificar el sitio completo sobre HTTPS en la vista previa de Cloudflare Pages y registrar la **Auditoría 09** en `auditoria-tecnica.md`. Esta iteración también ejecuta las comprobaciones pendientes de la Épica 03 (casillas sin evidencia de 03-01 a 03-05).

## Cómo se reparte el trabajo

El agente (Claude Code) **no puede consultar la vista previa**: sus permisos niegan `curl` y `wget`, y `WebFetch` no incluye `pages.dev`. Por eso la iteración tiene dos fases:

- **Fase A (agente, en local):** auditoría con `pnpm preview`, sin depender de Cloudflare. Puede correr de inmediato.
- **04-04 (agente, en local):** corrige los defectos de la fase A. La fase B mide la versión corregida.
- **Fase B (agente, con evidencia del desarrollador):** consolida las cifras y los resultados que el desarrollador obtuvo sobre la vista previa y registra la Auditoría 09.

El desarrollador hace sus tareas en paralelo a la fase A y entrega la evidencia al empezar la fase B, rellenando el archivo `evidencia-04-03-fase-b.md` (misma carpeta). Lo que falte en ese archivo se registra como «no verificado».

## Tareas del desarrollador

Ya hechas el 2026-10-02: las tareas 1 a 3, la zona `gruasvillarrica.cl` activa en Cloudflare, el registro `www`, la redirección de `www` a la raíz y el HTTPS forzado.

1. Crear la rama `iteracion/04-03-auditoria` desde `main` (ya contiene 04-01 y 04-02).
2. Conectar el repositorio a Cloudflare Pages:
   - Rama de producción `main`, comando de compilación `pnpm build`, salida `dist`, sin dominio propio todavía.
   - Variable de compilación `PNPM_VERSION` = `12.8.1`. Node sale de `.nvmrc` (`24`); si el registro de compilación no muestra Node 24.x, fijar `NODE_VERSION` completo.
   - Nombre del proyecto: define la URL `<proyecto>.pages.dev`.
3. En el registro de compilación de `main`, comprobar y anotar: versión de Node, versión de pnpm, que `sharp` se instale sin errores y la línea «Sin PENDIENTE_CLIENTE en N archivos publicados».
4. Subir la rama `iteracion/04-03-auditoria` para que Cloudflare cree su vista previa, y anotar la URL.
   - Cuando 04-04 esté verificada, abrir un Pull Request de `iteracion/04-03-auditoria` hacia `main` en GitHub, esperar que la vista previa de Cloudflare compile y fusionarlo (merge commit). Eso publica en producción, en `https://gruasvillarrica.cl`, que es ahora **indexable** (decisión del 2026-10-02). Anotar el hash del commit que Cloudflare despliega, para saber qué versión se midió.
5. Cabeceras, desde PowerShell (usar `curl.exe`, porque `curl` es otro comando en PowerShell). Copiar las salidas completas:
   - `curl.exe -sI https://URL/` (portada).
   - `curl.exe -sI https://URL/_astro/ARCHIVO` (cualquier archivo con huella: el nombre sale de `view-source` o de la pestaña Red).
   - `curl.exe -sI https://URL/robots.txt` y `https://URL/favicon.ico`.
   - `curl.exe -s -o NUL -w "%{http_code}" https://URL/no-existe` (debe ser 404).
   - Dominio propio, con las mismas pruebas: `curl.exe -sI "https://www.gruasvillarrica.cl/prueba?x=1"` (301 a `https://gruasvillarrica.cl/prueba?x=1`), `curl.exe -sI http://gruasvillarrica.cl/` (redirige a `https`) y `curl.exe -sI https://gruasvillarrica.cl/` (200, sin `x-robots-tag`). La dirección `pages.dev` debe seguir trayendo `x-robots-tag: noindex`.
6. Desde un teléfono real (Android y, si es posible, iPhone con Safari): llamada, WhatsApp (los siete mensajes distintos que hay en el sitio; la lista está en la bitácora de la fase A), «Cómo llegar», formulario, y la vista previa del enlace al compartirlo en WhatsApp.
7. Con TalkBack o VoiceOver: encabezados, nombres de botones, formulario y errores.
8. PageSpeed Insights sobre `https://gruasvillarrica.cl` (después de fusionar en `main`), en móvil y en escritorio: **tres ejecuciones** de cada una; guardar las cuatro cifras de cada ejecución y el enlace al informe. Opcional: la misma medición sobre la vista previa de la rama, como referencia. Anotar LCP y tiempo de bloqueo total: la fase A midió un LCP local de 2,6 a 4,2 s con red y CPU limitadas, y debe contrastarse.
9. Validador de Schema.org y Prueba de resultados enriquecidos (modo URL de la vista previa o pegando el bloque): resultado y capturas.
10. Revisar el favicon en la pestaña del navegador y borrar `node_modules/.cache/prueba-csp` (3,8 MB, resto de la prueba de CSP de 04-02) y las carpetas `cdp-gruas-*` de `%TEMP%`.
11. Qué inyecta Cloudflare en el HTML. La consulta del 2026-10-02 mostró el correo del pie como `[email protected]` con un enlace `cdn-cgi/l/email-protection`: la **ofuscación de correos** de Cloudflare está activa, reescribe el HTML y agrega un script, contra el límite de JavaScript de RDA-006. Recomendación: desactivar «Email Address Obfuscation» en el panel de la zona (se encuentra con Ctrl+K). Después, descargar la portada con `curl.exe -s https://gruasvillarrica.cl/ -o portada.html` y buscar `Select-String -Path portada.html -Pattern "cdn-cgi","beacon","email-protection"`; pegar el resultado y, aparte, el JSON-LD publicado (para comprobar que el campo `email` no fue alterado).
12. Rellenar `evidencia-04-03-fase-b.md` con todo lo anterior.

## Tareas del agente · Fase A (local, sin Cloudflare)

1. Recorrido solo con teclado en la portada y el 404: orden de foco, foco visible de 3 px y sin trampas.
2. Contraste de todas las combinaciones usadas, incluido el texto del hero sobre la foto en 12 anchos.
3. Zoom al 200 % y ancho de 320 px sin desplazamiento horizontal. Se informa la primera pantalla a 320 × 568 px y se propone una decisión (hoy el segundo botón del hero queda bajo la barra).
4. Tamaño táctil real del enlace de la marca en el header (estirado con `after:inset-0`) y de «Volver al inicio» en el 404 a 360 × 640 px.
5. Peso a 1280 × 800 px: las nueve fotos de la galería se descargan al cargar; se informan las cifras contra el tope de 400 KB (el presupuesto de 04-02 solo se definió para móvil).
6. Revisión de que los enlaces de WhatsApp, llamada y «Cómo llegar» tengan el destino y el mensaje esperados (sin abrirlos).
7. Bitácora de la fase A con las cifras y las observaciones, y lista de lo que queda para la fase B.

## Tareas del agente · Fase B (con la evidencia del desarrollador)

1. Registrar en la bitácora, tal como las entregó el desarrollador, las salidas de `curl.exe`, el registro de compilación, las cifras de PageSpeed y los resultados de los validadores, indicando quién las obtuvo y con qué dispositivo.
2. Contrastar las cabeceras con `public/_headers` y señalar cualquier diferencia.
3. Evaluar los criterios de aceptación con esa evidencia y marcar las casillas pendientes de 03-01 a 03-05 que queden verificadas.
4. Registrar la **Auditoría 09** con hallazgos `AUD-09-NNN`, y actualizar el estado de AUD-01-025, AUD-05-001 y de los demás hallazgos que cambien.
5. Pasar 04-01, 04-02, 04-03 y 04-04 al estado que corresponda en `registro-log.md` (el estado «Terminada» lo confirma el desarrollador).
6. **Autorizado en esta fase:** alinear `DESIGN.md` con lo que implementó 04-04, solo como documentación: §9 (`scroll-padding-top` y `scroll-padding-bottom` con holgura y `scroll-margin-top` de las anclas), §5.1 (anillo de foco hacia adentro en la barra móvil) y el borde `outline` de «Volver al inicio» en el 404. No se cambia código.
7. Actualizar `iteracion-05-01-publicacion.md`: lo que ya se hizo (dominio, `www`, HTTPS, validación de datos provisionales) pasa a verificación, y queda solo lo pendiente.
8. Registrar en la Auditoría 09 la decisión del desarrollador del 2026-10-02 (dominio indexable antes de la aprobación del cliente, relacionado con AUD-08-023) y el estado de FA-05, FA-09 y de 320 × 568 px (abiertos, diferidos o riesgo aceptado).
9. Esta fase no modifica `src/` ni `public/`. Si la evidencia muestra un incumplimiento (por ejemplo, una categoría de Lighthouse bajo 95), se registra como hallazgo con su severidad y su corrección recomendada, para una iteración posterior.

## Criterios de aceptación

- [ ] Lighthouse móvil en `https://gruasvillarrica.cl` (mediana de tres ejecuciones): ≥ 95 en Rendimiento, Accesibilidad, Buenas prácticas y SEO. La vista previa de `*.pages.dev` es referencia: su SEO excluye la indexación por el `noindex`.
- [ ] Dominio propio: certificado activo, `www` redirigido a la raíz con código 301 conservando ruta y consulta, `http` redirigido a `https`, y la raíz sin `x-robots-tag`.
- [ ] LCP < 2,0 s y CLS < 0,05 en Lighthouse móvil.
- [ ] JSON-LD: 0 errores en el validador de Schema.org y 0 errores críticos en la Prueba de resultados enriquecidos.
- [ ] Vista previa de WhatsApp con imagen, título y descripción (captura en la bitácora).
- [ ] Cabeceras de `_headers` verificadas sobre HTTPS con las salidas de `curl.exe`.
- [ ] Compilación de `main` en Cloudflare con Node, pnpm y `sharp` correctos y con la línea de validación de datos provisionales.
- [ ] Teclado, contraste, zoom al 200 % y 320 px sin hallazgos de severidad Alta abiertos.
- [ ] Prueba en teléfono real y con lector de pantalla documentada en la bitácora, indicando quién la hizo y con qué dispositivo.
- [ ] Auditoría 09 registrada en `auditoria-tecnica.md`.

## Fuera de alcance

- Registro de la decisión de publicar antes de la aprobación del cliente: lo hace la fase B en la Auditoría 09 (AUD-08-023 sigue abierto).
- Google Search Console y envío del sitemap: tarea opcional del desarrollador, sin criterio asociado.
- Etiqueta de Google, conversiones y política de seguridad de contenido (RDA-010 y 05-02). Si se aprueba, debe volver a medirse Lighthouse.