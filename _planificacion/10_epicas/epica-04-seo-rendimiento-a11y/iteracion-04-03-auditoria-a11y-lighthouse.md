# Iteración 04-03 · Vista previa en Cloudflare, accesibilidad y Lighthouse

- **Épica:** 04 · SEO técnico, rendimiento y accesibilidad
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/04-03-auditoria` (desde aquí se vuelve a trabajar con ramas)
- **Depende de:** 04-01, 04-02
- **RDA relacionadas:** RDA-001, RDA-006, RDA-010, RDA-011, RDA-012
- **Hallazgos que cierra:** verificación final de los abiertos: AUD-01-025, AUD-05-001 y los que surjan en esta auditoría

## Objetivo

Verificar el sitio completo sobre HTTPS en la vista previa de Cloudflare Pages y registrar la **Auditoría 09** en `auditoria-tecnica.md`. Esta iteración también ejecuta las comprobaciones pendientes de la Épica 03 (casillas sin evidencia de 03-01 a 03-05).

## Cómo se reparte el trabajo

El agente (Claude Code) **no puede consultar la vista previa**: sus permisos niegan `curl` y `wget`, y `WebFetch` no incluye `pages.dev`. Por eso la iteración tiene dos fases:

- **Fase A (agente, en local):** auditoría con `pnpm preview`, sin depender de Cloudflare. Puede correr de inmediato.
- **Fase B (agente, con evidencia del desarrollador):** consolida las cifras y los resultados que el desarrollador obtuvo sobre la vista previa y registra la Auditoría 09.

El desarrollador hace sus tareas en paralelo a la fase A y entrega la evidencia al empezar la fase B.

## Tareas del desarrollador

1. Crear la rama `iteracion/04-03-auditoria` desde `main` (ya contiene 04-01 y 04-02).
2. Conectar el repositorio a Cloudflare Pages:
    - Rama de producción `main`, comando de compilación `pnpm build`, salida `dist`, sin dominio propio todavía.
    - Variable de compilación `PNPM_VERSION` = `12.8.1`. Node sale de `.nvmrc` (`24`); si el registro de compilación no muestra Node 24.x, fijar `NODE_VERSION` completo.
    - Nombre del proyecto: define la URL `<proyecto>.pages.dev`.
3. En el registro de compilación de `main`, comprobar y anotar: versión de Node, versión de pnpm, que `sharp` se instale sin errores y la línea «Sin PENDIENTE_CLIENTE en N archivos publicados».
4. Subir la rama `iteracion/04-03-auditoria` para que Cloudflare cree su vista previa, y anotar la URL.
5. Cabeceras, desde PowerShell (usar `curl.exe`, porque `curl` es otro comando en PowerShell). Copiar las salidas completas:
    - `curl.exe -sI https://URL/` (portada).
    - `curl.exe -sI https://URL/_astro/ARCHIVO` (cualquier archivo con huella: el nombre sale de `view-source` o de la pestaña Red).
    - `curl.exe -sI https://URL/robots.txt` y `https://URL/favicon.ico`.
    - `curl.exe -s -o NUL -w "%{http_code}" https://URL/no-existe` (debe ser 404).
6. Desde un teléfono real (Android y, si es posible, iPhone con Safari): llamada, WhatsApp (los tres mensajes), «Cómo llegar», formulario, y la vista previa del enlace al compartirlo en WhatsApp.
7. Con TalkBack o VoiceOver: encabezados, nombres de botones, formulario y errores.
8. PageSpeed Insights sobre la URL de la vista previa, en móvil y en escritorio: **tres ejecuciones** de cada una; guardar las cuatro cifras de cada ejecución y el enlace al informe.
9. Validador de Schema.org y Prueba de resultados enriquecidos (modo URL de la vista previa o pegando el bloque): resultado y capturas.
10. Revisar el favicon en la pestaña del navegador y borrar `node_modules/.cache/prueba-csp` (3,8 MB, resto de la prueba de CSP de 04-02).

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
5. Pasar 04-01, 04-02 y 04-03 al estado que corresponda en `registro-log.md` (el estado «Terminada» lo confirma el desarrollador).

## Criterios de aceptación

- [ ] Lighthouse móvil en la vista previa (mediana de tres ejecuciones): ≥ 95 en Rendimiento, Accesibilidad y Buenas prácticas. En SEO, ≥ 95 sin contar la auditoría de indexación (falla a propósito por el `noindex` de `*.pages.dev`; se informa la cifra con y sin ella).
- [ ] LCP < 2,0 s y CLS < 0,05 en Lighthouse móvil.
- [ ] JSON-LD: 0 errores en el validador de Schema.org y 0 errores críticos en la Prueba de resultados enriquecidos.
- [ ] Vista previa de WhatsApp con imagen, título y descripción (captura en la bitácora).
- [ ] Cabeceras de `_headers` verificadas sobre HTTPS con las salidas de `curl.exe`.
- [ ] Compilación de `main` en Cloudflare con Node, pnpm y `sharp` correctos y con la línea de validación de datos provisionales.
- [ ] Teclado, contraste, zoom al 200 % y 320 px sin hallazgos de severidad Alta abiertos.
- [ ] Prueba en teléfono real y con lector de pantalla documentada en la bitácora, indicando quién la hizo y con qué dispositivo.
- [ ] Auditoría 09 registrada en `auditoria-tecnica.md`.

## Fuera de alcance

- Dominio propio, HTTPS del dominio y medición de SEO completa en producción (05-01).
- Etiqueta de Google, conversiones y política de seguridad de contenido (RDA-010 y 05-02). Si se aprueba, debe volver a medirse Lighthouse.