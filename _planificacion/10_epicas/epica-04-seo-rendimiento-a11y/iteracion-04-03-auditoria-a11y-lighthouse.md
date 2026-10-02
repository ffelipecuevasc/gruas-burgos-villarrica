# Iteración 04-03 · Vista previa en Cloudflare, accesibilidad y Lighthouse

- **Épica:** 04 · SEO técnico, rendimiento y accesibilidad
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/04-03-auditoria` (desde aquí se vuelve a trabajar con ramas)
- **Depende de:** 04-01, 04-02
- **RDA relacionadas:** RDA-001, RDA-006, RDA-010, RDA-011
- **Hallazgos que cierra:** verificación final de los abiertos: AUD-01-025, AUD-05-001 y los que surjan en esta auditoría

## Objetivo

Verificar el sitio completo sobre HTTPS en la vista previa de Cloudflare Pages y registrar la **Auditoría 09** en `auditoria-tecnica.md`. Esta iteración también ejecuta las comprobaciones pendientes de la Épica 03 (casillas sin evidencia de 03-01 a 03-05).

## Tareas del desarrollador (al inicio, en este orden)

1. Confirmar que `main` contiene 04-01 y 04-02 y crear la rama `iteracion/04-03-auditoria`.
2. Conectar el repositorio a Cloudflare Pages: rama de producción `main`, comando `pnpm build`, salida `dist`, `PNPM_VERSION` `12.8.1` y Node según `.nvmrc` (lista de 05-01, punto 2). Sin dominio propio todavía.
3. Comprobar en el registro de compilación que la validación de datos provisionales de 04-02 se ejecuta, y entregar al agente la URL de la vista previa de la rama.
4. Desde un teléfono real (Android y, si es posible, iPhone con Safari):
    - Llamada, WhatsApp (los tres mensajes), «Cómo llegar» y el formulario.
    - Vista previa del enlace en WhatsApp (imagen, título y descripción).
    - Recorrido con TalkBack o VoiceOver: encabezados, nombres de botones, formulario y errores.
5. PageSpeed Insights (o Lighthouse) en móvil y en escritorio sobre la URL de la vista previa: guardar las cuatro cifras y el informe.
6. Prueba de resultados enriquecidos y validador de Schema.org sobre la URL de la vista previa.

## Tareas del agente

1. Verificar sobre la URL de la vista previa:
    - Que las cabeceras de `_headers` se apliquen (incluido `noindex` en `*.pages.dev`).
    - Que `robots.txt`, el sitemap, el favicon y el `og:image` respondan.
    - Que el 404 sirva el código 404.
2. Recorrido solo con teclado: orden de foco, foco visible de 3 px y sin trampas, en la portada y el 404.
3. Contraste de todas las combinaciones usadas, incluido el texto del hero sobre la foto.
4. Zoom al 200 % y ancho de 320 px sin desplazamiento horizontal. Se informa la primera pantalla a 320 × 568 px y se propone una decisión (hoy el segundo botón del hero queda bajo la barra).
5. Tamaño táctil real del enlace de la marca en el header (estirado con `after:inset-0`) y de «Volver al inicio» en el 404 a 360 × 640 px.
6. Consolidar en la bitácora las cifras y observaciones del desarrollador (tareas 4 a 6), y marcar las casillas pendientes de 03-01 a 03-05 que queden verificadas.
7. Registrar la **Auditoría 09** con hallazgos `AUD-09-NNN`, y actualizar el estado de AUD-01-025, AUD-05-001 y de los demás hallazgos que cambien.

## Criterios de aceptación

- [ ] Lighthouse móvil en la vista previa: ≥ 95 en Rendimiento, Accesibilidad y Buenas prácticas. En SEO, ≥ 95 sin contar la auditoría de indexación (falla a propósito por el `noindex` de `*.pages.dev`; se informa la cifra con y sin ella).
- [ ] LCP < 2,0 s y CLS < 0,05 en Lighthouse móvil.
- [ ] JSON-LD: 0 errores en el validador de Schema.org y 0 errores críticos en la Prueba de resultados enriquecidos.
- [ ] Vista previa de WhatsApp con imagen, título y descripción (captura en la bitácora).
- [ ] Cabeceras de `_headers` verificadas sobre HTTPS.
- [ ] Teclado, contraste, zoom al 200 % y 320 px sin hallazgos de severidad Alta abiertos.
- [ ] Prueba en teléfono real y con lector de pantalla documentada en la bitácora, indicando quién la hizo y con qué dispositivo.
- [ ] Auditoría 09 registrada en `auditoria-tecnica.md`.

## Fuera de alcance

- Dominio propio, HTTPS del dominio y medición de SEO completa en producción (05-01).
- Etiqueta de Google y conversiones (RDA-010, 05-02). Si se aprueba, debe volver a medirse Lighthouse.