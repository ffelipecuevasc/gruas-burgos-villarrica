# Épica 06 · Evolución y mejoras de diseño

- **Estado:** En curso (abierta desde el 2026-10-07).
- **Objetivo:** incorporar las secciones nuevas y las modernizaciones de secciones existentes que pida el cliente después de la publicación, sin perder lo logrado en las Épicas 01 a 05: rendimiento, accesibilidad, contenido aprobado y repositorio público.
- **Depende de:** sitio publicado en `https://gruasvillarrica.cl` (Épica 05, iteración 05-01, terminada). No depende de que la Épica 05 esté cerrada: ambas pueden avanzar en paralelo.
- **Duración:** abierta y de larga duración (referencia: unos seis meses desde el 2026-10-07). No tiene fecha de término; la cierra el desarrollador.

## Alcance

Cada solicitud del cliente para agregar una sección o modernizar una existente entra como **una iteración** (`06-01`, `06-02`, …), con la misma estructura de las iteraciones anteriores: Épica, Estado, Rama sugerida, Depende de, RDA relacionadas, Hallazgos que cierra, Objetivo, Reglas de la iteración, Contenido aprobado, Tareas, Criterios de aceptación (fase A, local, y fase B, vista previa o producción), Fuera de alcance y Tareas del desarrollador.

Si una solicitud cabe como cambio menor de la mantención de octubre (sin costo hasta el 2026-10-31) o se trata como trabajo nuevo, lo decide el desarrollador. La propuesta comercial indica que «las secciones o funciones adicionales se cotizan por separado». Esta épica registra el trabajo técnico, no su cobro.

## Iteraciones

Se numeran en el orden en que entran. El orden de ejecución lo decide el desarrollador.

| Iteración | Nombre                                 | Depende de                         | Dónde se verifica                                         |
| :-------- | :------------------------------------- | :--------------------------------- | :-------------------------------------------------------- |
| 06-01     | Carrusel en la sección de opiniones    | 05-01 y las RDA de la iteración    | Fase A en local; fase B en la vista previa y en producción |

## Solicitudes que chocan con una decisión vigente

Antes de implementar, cada iteración se contrasta con `decisiones.md`, `DESIGN.md`, `AGENTS.md` y la lista «No publicar». Si una solicitud choca con una decisión vigente:

1. La iteración queda «Pendiente» y lista el choque en «RDA relacionadas».
2. El desarrollador decide. Su decisión se registra como **RDA nueva** en `decisiones.md` (la próxima libre se toma del índice), que reemplaza total o parcialmente a la anterior. La RDA anterior se actualiza con una línea que remite a la nueva; su texto original no se borra.
3. Si la decisión cambia `DESIGN.md` o `AGENTS.md`, el cambio se autoriza de forma expresa en la iteración, con el texto exacto.
4. Recién entonces se implementa. Un agente que encuentre un choque no previsto se detiene y consulta.

## Reglas transversales

Heredan las de la Épica 05 (`definicion-epica-05.md`), que siguen vigentes:

1. Solo se publica lo que figura en «Contenido aprobado» de cada iteración. Los textos se copian tal cual, sin agregar adjetivos ni cifras.
2. Rige la lista «No publicar» de `definicion-epica-05.md`, también para metadatos, textos alternativos, JSON-LD y textos de anuncios. Un dato de esa lista solo se publica si entra como «Contenido aprobado» con la aprobación explícita del desarrollador.
3. Fotos según RDA-011: tal como están en las redes del negocio, sin fotos de internet; ningún texto alternativo transcribe rótulos ni nombra marca o modelo.
4. Datos del negocio, servicios y reseñas solo desde `src/data/` (RDA-008).
5. Cada iteración cierra con `pnpm format:check`, `pnpm check` y `pnpm build` sin errores ni advertencias (hints: hoy 52), y con medición real en navegador a 360 × 640 y 1280 × 800 px, más los anchos que pida la iteración. Un criterio sin medición real no se marca como cumplido.
6. JavaScript de cliente propio por debajo de 1 KB (RDA-006; hoy 960 B en la portada y 191 B en el 404), salvo que una RDA nueva fije otro límite para un caso concreto. Quien lo supere sin esa RDA se detiene y consulta.
7. Primera pantalla a 360 × 640 px: etiqueta, `h1` y ambos botones del hero completos sobre la barra inferior, con 8 px de margen o más.
8. Presupuesto medido a 360 × 640 px, densidad 1 y red 4G: total de 400 KB o menos, HTML más CSS de 50 KB o menos y foto del hero de 150 KB o menos.
9. Accesibilidad WCAG 2.2 AA (`AGENTS.md` §7.5). Nada enfocado ni legible queda cubierto por elementos fijos; los cambios se miden con Tab y Mayús + Tab.
10. PageSpeed móvil en producción con 95 o más en las cuatro categorías, LCP de 2,5 s o menos y CLS 0, juzgado con la mediana de tres ejecuciones antes y después del cambio.
11. Repositorio público: ni datos personales, tributarios, credenciales, identificadores de cuentas, mensajes del cliente ni el identificador de Web Analytics entran a ningún archivo.
12. Lo que solo el desarrollador puede hacer va en «Tareas del desarrollador» y se registra en un archivo de evidencia (fase B, plantilla de `evidencia-05-02-fase-b.md`).

## Criterio de término

La épica se cierra cuando el desarrollador lo decida, con todas sus iteraciones «Terminada» o descartadas, y con un Lighthouse final en producción que cumpla la regla 10.