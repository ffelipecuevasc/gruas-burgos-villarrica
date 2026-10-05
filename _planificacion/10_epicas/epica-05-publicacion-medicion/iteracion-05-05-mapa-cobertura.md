# Iteración 05-05 · Mapa de cobertura con imagen real

- **Épica:** 05 · Ajustes finales, publicación y medición
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/05-05-mapa-cobertura`
- **Depende de:** 05-04 y el archivo WebP del desarrollador
- **RDA relacionadas:** RDA-004, RDA-009, RDA-011
- **Hallazgos que cierra:** ajuste A de la Épica 05 (mapa de cobertura).

## Objetivo

Reemplazar el mapa esquemático (`MapaEsquematico.astro`, un SVG propio) por una imagen real que muestre las zonas de atención, sin sugerir cobertura donde no la hay. La imagen la edita el desarrollador; esta iteración la integra.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. No empieza hasta que el archivo exista en `src/assets/mapa/mapa-cobertura.webp`.

## Especificación de la imagen (para el desarrollador)

| Característica | Valor |
| :--- | :--- |
| Dimensiones | 1400 × 1400 px (proporción 1:1) |
| Formato | WebP, calidad 80 a 85, perfil sRGB |
| Peso | 250 KB o menos |
| Texto dentro de la imagen | Al menos 60 px de alto, para que se lea a 13 px o más con el contenedor a 320 px |
| Zona geográfica | De Freire a Pucón y a Coñaripe: unos 55 × 70 km |
| Contenido | Villarrica (base de operaciones), Pucón, Licán Ray, Coñaripe y Freire; lagos, volcán y rutas como referencia |
| Qué no lleva | Ninguna otra localidad con nombre (Panguipulli, Valdivia, Temuco, etc.), para no sugerir cobertura. Ni capturas de Google Maps: sus términos lo prohíben |
| Atribución | Si parte de OpenStreetMap, lleva «© colaboradores de OpenStreetMap», visible al lado del mapa |
| Ubicación | `src/assets/mapa/mapa-cobertura.webp` (carpeta nueva, junto a `fotos/` y `marca/`). Los originales editables quedan fuera del repositorio |

Medido el 2026-10-05 en el contenedor del mapa: 280 px a 320 px de pantalla, 320 px a 360, 728 px a 768, 557 px a 1024 y 707 px desde 1280. Con 1400 px de lado y letra de 60 px, el texto se ve a 13,7 px con el contenedor a 320 px. La proporción cuadrada se mantiene porque la zona (55 × 70 km) es casi cuadrada: 4:3 obligaría a mostrar territorio de más.

## Reglas de la iteración

1. Solo se publica lo de «Contenido aprobado». **Si la imagen muestra otra localidad con nombre, o contradice `DESIGN.md`, detenerse y consultar.**
2. Sin dependencias nuevas. No se tocan `package.json`, `astro.config.mjs` ni `public/_headers`. Sin JavaScript nuevo.
3. **Autorizado:** editar `DESIGN.md` §5 y §7 (mapa de cobertura), y eliminar `src/components/MapaEsquematico.astro` si queda sin uso.
4. No se hacen `commit`, `push` ni cambios de rama. Los hace el desarrollador.
5. Las fuentes remotas pueden no descargar al medir: no es un criterio de esta iteración.

## Contenido aprobado de esta iteración

- Texto alternativo del mapa: «Mapa de la zona de atención: Villarrica, base de operaciones, Pucón, Licán Ray, Coñaripe y Freire.»
- Atribución, solo si el mapa parte de OpenStreetMap: «© colaboradores de OpenStreetMap».
- La lista de localidades en texto se mantiene tal como queda en 05-04.

## Tareas

1. **Integrar la imagen.** El mapa del bloque «Dónde atendemos» es la imagen, con su texto alternativo aprobado, dimensiones declaradas (sin desplazamiento de diseño) y carga diferida. Astro genera las variantes optimizadas.
2. **Retirar lo anterior.** `MapaEsquematico.astro` se elimina si no tiene otro uso. No quedan referencias al mapa esquemático en `src/` ni en la documentación vigente.
3. **Presupuesto.** La página no rompe el presupuesto de peso; la imagen no se descarga al abrir la página en móvil si queda bajo la primera pantalla.
4. **Documentación.**
    - Bitácora nueva `bitacora-05-05-AAAA-MM-DD.md` en `_planificacion/99_bitacora/`, con la plantilla de `_planificacion/README.md` §5.2, fecha real, fin de línea LF y estado final «En revisión». Nunca «Terminada».
    - `DESIGN.md` §5 y §7 (mapa como imagen estática local, atribución si corresponde).
    - `registro-log.md`: fila de 05-05, «Iteración activa» y «Próximo hito».

## Criterios de aceptación

**Fase A, local (`pnpm preview`):**

- [ ] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias.
- [ ] La imagen cumple la especificación: 1400 × 1400 px, WebP, perfil sRGB y 250 KB o menos (se informa el peso real).
- [ ] A 360, 768, 1024, 1280 y 1920 px, la imagen se ve completa dentro de su contenedor, sin recorte ni deformación (relación de aspecto intacta) y con el alto reservado antes de cargar: CLS 0.
- [ ] A 360 px de pantalla, el texto más pequeño de la imagen mide 13 px o más ya reducido (se mide en una captura). A 320 px se informa la cifra, sin exigirla.
- [ ] Texto alternativo igual al aprobado. La lista de localidades en texto sigue en la página, con las cinco localidades.
- [ ] Carga diferida: a 360 × 640 px, la imagen no se pide al cargar la página. Peso a 360 × 640 px, densidad 1 y 4G: total de 400 KB o menos; HTML más CSS de 50 KB o menos; JavaScript de menos de 1 KB; foto del hero de 150 KB o menos.
- [ ] No existe `MapaEsquematico.astro` ni queda ninguna referencia a él en `src/`.
- [ ] Primera pantalla a 360 × 640 px sin cambios. 0 elementos enfocados cubiertos por elementos fijos en un recorrido con Tab y Mayús + Tab a 360 y 1280 px.
- [ ] `git status` muestra cambios solo en `src/`, `_planificacion/` y `DESIGN.md`.

**Fase B, vista previa de `pages.dev` (evidencia en `evidencia-05-05-fase-b.md`):**

- [ ] El desarrollador revisa el mapa en el teléfono real y en escritorio: se lee sin hacer zoom.
- [ ] Si el mapa parte de OpenStreetMap, la atribución es visible. El desarrollador deja la confirmación escrita de la fuente y la licencia del mapa base.

## Fuera de alcance

- «Toda La Araucanía» y «traslado a todo Chile» van en texto (05-04), no en la imagen.
- Un mapa regional o interactivo, o un iframe de Google Maps.
- El enlace «Cómo llegar» se mantiene como está.

## Tareas del desarrollador

1. Editar el mapa con la especificación de arriba y guardarlo en `src/assets/mapa/mapa-cobertura.webp`.
2. Confirmar por escrito el origen y la licencia del mapa base, sin usar Google Maps. Si parte de OpenStreetMap, verificar que la atribución cumple la licencia.
3. Completar `evidencia-05-05-fase-b.md` con la plantilla de `evidencia-04-03-fase-b.md`.
4. Hacer `commit`, `push`, el Pull Request y el merge cuando la iteración quede verificada, y marcarla «Terminada».
