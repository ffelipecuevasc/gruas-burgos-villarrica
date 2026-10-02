# Épica 04 · SEO técnico, rendimiento y accesibilidad

- **Estado:** En curso (04-01 en revisión)
- **Objetivo:** que Google encuentre el sitio en búsquedas locales de grúas, que la primera vista cargue en menos de 2 s con red móvil lenta (LCP de Lighthouse móvil) y que cualquier persona pueda usarlo (WCAG 2.2 AA).
- **Depende de:** Épica 03 (iteraciones 03-01 a 03-05 verificadas por el desarrollador el 2026-10-01, commit `d6121eb`; la épica sigue «En revisión» solo por la aprobación del cliente, AUD-08-023).
- **Material del cliente entregado el 2026-10-01:** isotipo (`LogoGruasBurgos.svg`) y 10 fotos de operaciones tomadas de las redes del negocio (ver RDA-011).

## Alcance

1. Metadatos, Open Graph, favicon, canonical, sitemap y `robots.txt` (04-01).
2. Isotipo en el header y en la marca del sitio (04-01).
3. Datos estructurados JSON-LD del negocio (04-01).
4. Foto fija en el hero y galería de trabajos en Inicio (04-02).
5. Presupuesto de rendimiento, cabeceras de Cloudflare Pages y validación de datos provisionales en la compilación (04-02).
6. Conexión de la vista previa de Cloudflare Pages, auditoría de accesibilidad y Lighthouse sobre HTTPS (04-03).

## Iteraciones

| Iteración | Nombre                                                  | Depende de   | Dónde se verifica                    |
| :-------- | :------------------------------------------------------ | :----------- | :----------------------------------- |
| 04-01     | SEO técnico, marca y datos estructurados                | 03-05        | Local (`pnpm build` y `pnpm preview`) |
| 04-02     | Fotos, galería, rendimiento y cabeceras                 | 04-01        | Local (`pnpm build` y `pnpm preview`) |
| 04-03     | Vista previa en Cloudflare, accesibilidad y Lighthouse  | 04-01, 04-02 | Vista previa de Cloudflare Pages      |

## Decisiones del desarrollador que rigen esta épica (2026-10-01)

1. **Verificación:** 04-01 y 04-02 se verifican en local. La vista previa de Cloudflare Pages se conecta al iniciar 04-03; desde ese momento se vuelve a trabajar con ramas `iteracion/XX-YY-…` y la compilación de producción debe fallar si publica datos provisionales.
2. **Hero:** una sola foto fija (la 6, nocturna). No hay carrusel, transición ni efecto de scroll (`DESIGN.md` §8 se mantiene).
3. **Galería:** las demás nueve fotos (1 a 5 y 7 a 10) forman una galería breve de trabajos dentro de Inicio.
4. **Fotos tal como están:** se publican como están en las redes del negocio, aunque varias muestran rótulos regenerados por el proceso de mejora (teléfonos y nombre incorrectos), patentes de terceros, personas y el emblema de Bomberos de Pucón. Es un riesgo aceptado por el desarrollador y se registra en RDA-011.
5. **Isotipo:** el SVG entregado es el ícono «auto-towing» de Material Symbols Light (licencia Apache 2.0). Se usa como isotipo junto al nombre «Grúas Burgos» en la tipografía del sitio; no es una marca registrable.
6. **Pendientes aprobados de 03-05:** se aprueba el `aria-label` «Métricas destacadas del servicio», se mantiene el mensaje genérico del navegador para el teléfono con letras, se acepta la etiqueta del hero sin cápsula ni punto, y la sombra de 1 px de la barra móvil pasa a borde (04-01).

## Reglas transversales

1. Solo se publica lo que figura en «Contenido aprobado» de cada iteración o en la Épica 03. La lista «No publicar» de `definicion-epica-03.md` sigue vigente, también para metadatos, textos alternativos y JSON-LD.
2. Ningún texto alternativo transcribe los rótulos de las fotos (teléfonos, nombres, patentes) ni nombra la marca o el modelo de las grúas.
3. Datos del negocio solo desde `src/data/negocio.js` (RDA-008). Un dato provisional o sin validar no se publica, ni siquiera dentro del JSON-LD.
4. Cada iteración cierra con `pnpm format:check`, `pnpm check` y `pnpm build` sin errores ni advertencias, y con medición real en navegador a 360 × 640 y 1280 × 800 px. Un criterio sin medición real no se marca como cumplido.
5. El JavaScript de cliente sigue por debajo de 1 KB (RDA-006).
6. La primera pantalla a 360 × 640 px se conserva: etiqueta, `h1` y ambos botones del hero completos sobre la barra inferior, con margen de al menos 8 px.
7. Lo que solo el desarrollador puede hacer (paneles, teléfono real, lector de pantalla, validadores con su cuenta) figura en cada iteración como «Tareas del desarrollador» y no bloquea el trabajo del agente.

## Criterio de término

- En la vista previa de Cloudflare Pages: Lighthouse móvil ≥ 95 en Rendimiento, Accesibilidad y Buenas prácticas. En SEO, ≥ 95 sin contar la auditoría de indexación, que falla a propósito por el `noindex` de `*.pages.dev`; la cifra completa de SEO se mide en producción (05-01).
- JSON-LD sin errores en el validador de Schema.org y sin errores críticos en la Prueba de resultados enriquecidos de Google.
- La vista previa del enlace en WhatsApp muestra imagen, título y descripción.
- Sin hallazgos de severidad Alta abiertos en la Auditoría 09.