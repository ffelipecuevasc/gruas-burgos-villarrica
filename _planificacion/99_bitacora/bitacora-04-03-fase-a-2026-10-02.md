# Bitácora 04-03 (fase A) · Vista previa en Cloudflare, accesibilidad y Lighthouse

- **Fecha:** 2026-10-02
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `iteracion/04-03-auditoria`
- **Estado final:** En revisión

## Resumen

Fase A de 04-03: auditoría local sobre `pnpm preview`, sin Cloudflare y sin corregir nada. Se midieron las seis tareas en Chrome 154 sin interfaz, sobre una compilación nueva de `dist/`. No se modificó ningún archivo de `src/` ni de `public/`.

Sin fallas: el contraste del texto (mínimo 5,38:1 en el hero y 5,42:1 en el resto), el tamaño táctil con cada objetivo a la vista (ninguno bajo 44 × 44 px), el orden de foco (sin trampas) y los enlaces de llamada, WhatsApp y «Cómo llegar» (62 de 62 con el destino y el mensaje esperados). No hay desplazamiento horizontal a 320 px ni con zoom al 200 % y al 400 %.

Se hallaron 11 defectos: 1 de severidad Alta propuesta, 4 Media y 6 Baja. El más serio: al avanzar con Tab, el elemento enfocado puede quedar tapado por la barra inferior (móvil) o por los botones flotantes (escritorio). Con ese hallazgo abierto, el criterio «sin hallazgos de severidad Alta» **no se cumple**.

Además queda una alerta para la fase B, sin confirmar: con la red y la CPU limitadas, el LCP local dio entre 2,6 y 4,2 s. No es Lighthouse.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `_planificacion/99_bitacora/bitacora-04-03-fase-a-2026-10-02.md` | Nueva. |

No se tocó nada más del repositorio: ni `src/`, ni `public/`, ni `registro-log.md`, ni `auditoria-tecnica.md`, ni las bitácoras existentes. `dist/` se volvió a generar (Git lo ignora). Los scripts de medición y las capturas quedaron en la carpeta temporal de la sesión, fuera del repositorio.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 50 hints en 39 archivos.
- `pnpm build`: OK. Código 0, 2 páginas, 6 fuentes copiadas, 96 imágenes tomadas de la caché, sin avisos. `dist/`: 114 archivos, 3.637.936 B, igual que en 04-02.
- Revisión móvil 360 px y escritorio: Chrome 154.0.8037.97 sin interfaz (protocolo CDP) sobre `pnpm preview` (`http://localhost:4321`, HTML y CSS con gzip). Tamaños: 360 × 640 y 1280 × 800 px en todas las tareas; 320 × 568 y 768 × 1024 px donde la tarea lo pide; otros tamaños se indican en cada tabla. Las seis fuentes del proyecto se cargaron (`document.fonts`): no hizo falta incrustar fuentes para las pruebas.
- Lighthouse: **no ejecutado** (no está instalado y la medición formal es del desarrollador en PageSpeed, fase B).

### Tarea 1 · Recorrido solo con teclado

Método: Tab real (eventos de teclado por CDP) desde el inicio de la página hasta volver al principio, y luego Mayús + Tab de vuelta. En cada parada se leyó el rol y el nombre del árbol de accesibilidad, el contorno calculado y el anillo **realmente pintado**: diferencia de píxeles entre dos capturas, con el contorno y sin él. También se midió qué parte del elemento queda bajo el header o los elementos fijos (25 puntos de muestra por elemento).

| Medición | Portada 360 × 640 | Portada 1280 × 800 | 404 a 360 × 640 | 404 a 1280 × 800 |
| :--- | :--- | :--- | :--- | :--- |
| Paradas de Tab | 43 | 46 | 16 | 17 |
| Elementos enfocables en el DOM | 43 | 46 | 16 | 17 |
| `tabindex` mayor que 0 | 0 | 0 | 0 | 0 |
| Vuelta con Mayús + Tab | 43, mismo orden inverso | 46, mismo orden inverso | 16, mismo orden inverso | 17, mismo orden inverso |
| Trampas de foco | Ninguna | Ninguna | Ninguna | Ninguna |
| Contorno calculado | `solid` 3 px, separación 2 px, en las 43 | Igual, en las 46 | Igual, en las 16 | Igual, en las 17 |
| `:focus-visible` | En las 43 | En las 46 | En las 16 | En las 17 |
| Contraste del anillo contra el fondo que lo rodea | Mínimo 6,09:1 (`on-accent` sobre naranja); 10,11:1 y 11,36:1 en el resto | Mínimo 6,09:1 | Mínimo 10,11:1 | Mínimo 10,22:1 |
| Paradas con rol y nombre accesible | 43 de 43 | 46 de 46 | 16 de 16 | 17 de 17 |
| Elemento enfocado **totalmente tapado** | **3** | **1** | **1** | 0 |
| Elemento enfocado parcialmente tapado | 2 | 3 | 1 | 3 |
| Anillo recortado con el elemento visible (menos del 95 % pintado) | 6 | 1 | 3 | 4 |

Orden de foco: sigue el orden del DOM. A 360 px avanza siempre de arriba hacia abajo. A 1280 px tiene tres saltos hacia arriba, los tres esperables por las dos columnas: de los botones del hero a la tarjeta de despacho, de «Cómo llegar» al formulario y del pie a los botones flotantes.

Acordeón de opiniones: Enter sobre «Ver 4 opiniones más» lo abre y las cuatro opiniones adicionales entran en el recorrido (por eso hay 43 y 46 paradas).

Antes del contenido principal hay 5 paradas en móvil y 6 en escritorio (marca, llamada y navegación), en cada página. No existe un enlace para saltar al contenido (ver FA-11).

Elementos enfocados que quedan tapados (Chrome deja el elemento donde ya estaba o lo centra; no considera los elementos fijos de abajo):

| Tamaño | Elemento enfocado | Parte visible | Anillo pintado | Lo tapa |
| :--- | :--- | :--- | :--- | :--- |
| 360 × 640 | «Ver en Google» de la opinión de Alejandro Aranda | 0 % | 0 % | Barra inferior |
| 360 × 640 | Desplegable «¿Qué le pasó?» del formulario | 0 % | 0 % | Barra inferior |
| 360 × 640 | «Felipe Cuevas» (pie) | 0 % | 34 % (solo el borde superior) | Barra inferior |
| 360 × 640 | «Ver en Google» de la opinión de Versa Beltran | 40 % | 50 % | Barra inferior |
| 360 × 640 | «Escribir por WhatsApp» de traslados a otras ciudades | 20 % | 46 % | Barra inferior |
| 360 × 640 (404) | «Felipe Cuevas» | 0 % | 34 % | Barra inferior |
| 360 × 640 (404) | «Volver al inicio» | 40 % | 49 % | Barra inferior |
| 1280 × 800 | «Ver en Google» de la opinión de Cabañas Tornagaleones | 0 % | 5 % | Botones flotantes |
| 1280 × 800 | Correo del pie | 68 % | 77 % | Botones flotantes |
| 1280 × 800 | TikTok del pie | 60 % | 56 % | Botones flotantes |
| 1280 × 800 | «Felipe Cuevas» | 20 % | 57 % | Botones flotantes |
| 1280 × 800 (404) | Correo, TikTok y «Felipe Cuevas» | 60 %, 84 % y 20 % | 91 %, 49 % y 57 % | Botones flotantes |

Anillo recortado en elementos visibles:

| Elemento | Anillo pintado | Detalle |
| :--- | :--- | :--- |
| «Llamar» de la barra móvil | 37 % | Se ve el borde superior (97 %); el izquierdo y el inferior quedan fuera de pantalla y el derecho casi no se pinta (8 %). |
| «WhatsApp» de la barra móvil | 49 % | Se ven el borde superior (97 %) y el izquierdo (92 %), que se dibuja sobre el botón naranja: 1,86:1. El derecho y el inferior quedan fuera de pantalla. |
| «Inicio» de la navegación | 93 % | El enlace empieza en x = 4 px: 1 de los 3 px del borde izquierdo queda fuera de pantalla. A 360 y a 1280 px, en ambas páginas. |
| Portada a 360 px: «Ver en Google» de Cabañas Tornagaleones y de Victor Berrios, y el desplegable «Tipo de vehículo» | 65 %, 65 % y 73 % | El elemento se ve completo, pero termina justo sobre la barra y el borde inferior del anillo queda debajo. |
| 404 a 1280 px: Instagram y Facebook del pie, y el teléfono del pie | 72 %, 72 % y 85 % | Los íconos quedan pegados al borde inferior de la ventana y el anillo se corta por abajo; el teléfono queda con el borde derecho bajo los botones flotantes. |

Prueba de la corrección que se recomienda, **solo en el navegador** (CSS inyectado por CDP, sin tocar el repositorio):

| `scroll-padding-bottom` inyectado | 360 × 640 | 1280 × 800 |
| :--- | :--- | :--- |
| Ninguno (estado actual) | 3 tapados y 2 parciales (portada); 1 y 1 (404) | 1 tapado y 3 parciales (portada); 3 parciales (404) |
| 57 px en móvil y 136 px desde `md` | 0 tapados y 0 parciales en ambas páginas. El borde inferior del anillo queda bajo la barra en 4 paradas de la portada y 2 del 404 | Portada: quedan 3 parciales, «¿Adónde lo llevamos?» (92 %), TikTok (84 %) y «Felipe Cuevas» (20 %). 404: TikTok (92 %) y «Felipe Cuevas» (20 %) |
| 65 px en móvil y 144 px desde `md` | 0 tapados, 0 parciales y anillo completo (salvo los dos botones de la barra) | Quedan TikTok (84 %) y «Felipe Cuevas» (20 %): están al final de la página y no se pueden destapar desplazando |

### Tarea 2 · Contraste

Texto: se recorrieron todos los nodos de texto visibles, con el acordeón abierto y los errores del formulario a la vista. El color se compuso con su transparencia sobre el fondo de sus ancestros.

| Página | Combinaciones distintas | Mínimo | Fallan AA |
| :--- | :--- | :--- | :--- |
| Portada, 360 × 640 | 19 | 5,42:1 (estrellas, decorativas) | 0 |
| Portada, 1280 × 800 | 20 | 5,42:1 (estrellas); 5,54:1 (texto `on-accent` al 90 % sobre naranja, 13 y 14 px) | 0 |
| 404, 360 × 640 y 1280 × 800 | 12 | 6,09:1 (`on-accent` sobre naranja) | 0 |

Otras combinaciones de texto, todas AA: `on-accent` sobre naranja 6,09:1; chips 9,53:1; navegación 10,10:1; `secondary` 10,10:1 a 11,34:1; `primary` 10,11:1 a 11,36:1; mensajes de error 10,12:1; `on-surface` 13,34:1 a 14,98:1.

Estados al pasar el cursor (`:hover` forzado en cada enlace, botón, resumen y tarjeta): 14 combinaciones en la portada a 360 px, 15 a 1280 px y 8 en el 404. Mínimo 6,09:1 (teléfono de la tarjeta de despacho, a 1280 px); el resto, de 10,11:1 a 14,98:1. Ninguna falla.

Texto del hero sobre la foto, por píxeles (con los textos ocultos, el píxel más claro del fondo bajo cada caja):

| Ancho | Etiqueta (14 px, `primary`) | `h1` (`on-surface`) | Párrafo (`secondary`) |
| :--- | :--- | :--- | :--- |
| 320 px | 8,76:1 | 6,99:1 | 10,18:1 |
| 360 px | 8,76:1 | 6,99:1 | 10,18:1 |
| 390 px | 8,48:1 | 6,99:1 | 9,82:1 |
| 412 px | 8,36:1 | 6,99:1 | 9,82:1 |
| 480 px | 5,38:1 | 7,01:1 | 7,64:1 |
| 600 px | 5,41:1 | 7,12:1 | 10,05:1 |
| 767 px | 5,39:1 | 7,45:1 | 10,01:1 |
| 768 px | 9,76:1 | 8,20:1 | 6,48:1 |
| 1024 px | 7,68:1 | 7,68:1 | 7,98:1 |
| 1280 px | 7,31:1 | 8,35:1 | 7,50:1 |
| 1440 px | 6,04:1 | 8,53:1 | 7,46:1 |
| 1920 px | 6,65:1 | 8,52:1 | 7,42:1 |

Mínimo: **5,38:1** a 480 px (AA pide 4,5:1 para texto normal y 3:1 para el `h1`). Coincide con 04-02, salvo la etiqueta a 1920 px (6,65:1; antes 6,63:1). El texto de «Escribir por WhatsApp» del hero da 9,53:1 contra su propio borde, el punto más claro bajo su caja, en 11 anchos. A 320 px no se pudo medir: el botón queda bajo la barra.

Elementos no textuales:

| Elemento | Contraste | Evaluación |
| :--- | :--- | :--- |
| Borde de los campos del formulario | 5,43:1 contra la tarjeta; 6,10:1 contra el relleno | Cumple (pide 3:1) |
| Texto y flecha del desplegable, leídos de la captura | `#e5e2e1` sobre `#0e0e0e`: 14,98:1 | Cumple |
| Anillo de foco | 6,09:1 a 11,36:1 | Cumple |
| Relleno naranja de los botones principales | 5,42:1 a 6,09:1 | Cumple |
| Íconos que acompañan a un texto | 5,54:1 a 14,98:1 | Cumple |
| Íconos de redes sociales (ícono solo) | 9,53:1 | Cumple |
| Punto de «Disponible 24/7» | 6,09:1 | Cumple |
| Borde del botón de contorno | 1,40:1 sobre `surface-container-low`; 1,51:1 sobre `surface`; 1,57:1 sobre `surface-container-lowest`; 1,28:1 a 1,59:1 sobre la foto del hero | Bajo 3:1. Es AUD-05-001, riesgo aceptado (ver «Verificación final de AUD-05-001») |
| Relleno del botón secundario, sin borde | 1,00:1 a 1,04:1 contra su fondo («Volver al inicio» del 404, «WhatsApp» de la barra) | Bajo 3:1. Ver FA-10 |
| Relleno de los botones de redes | 1,57:1 (su ícono, 9,53:1) | No exigible: el ícono identifica el control |
| Bordes de tarjetas y bloques | 1,05:1 a 2,71:1 | Decorativos |

**Verificación final de AUD-05-001.** El borde del botón de contorno sigue bajo 3:1 en todos los fondos. Hay un valor que el hallazgo no registraba: **1,40:1** sobre `surface-container-low` (los tres botones de las tarjetas de servicio y el del bloque de traslados). El texto del botón da 13,34:1 a 14,98:1 y al pasar el cursor el borde sube a 5,42:1 a 6,09:1. WCAG 1.4.11 no exige un borde visible cuando el texto identifica el control, así que no es un incumplimiento: sigue siendo el riesgo de usabilidad que el desarrollador ya aceptó. El estado del hallazgo lo actualiza la fase B.

### Tarea 3 · Zoom al 200 % y ancho de 320 px

El zoom se reprodujo con la densidad de pantalla: una ventana de 1280 × 800 px al 200 % equivale a un viewport de 640 × 400 px CSS con densidad 2 (así lo implementa Chrome). El 400 % corresponde a la ventana de referencia de WCAG 1.4.10 (1280 × 1024 px).

| Caso | Desplazamiento horizontal | Texto recortado | Alto útil entre el header y la barra |
| :--- | :--- | :--- | :--- |
| 320 × 568, portada | No (320 de 320) | Ninguno | 399 px (70 %) |
| 320 × 568, 404 | No (320 de 320) | Ninguno | 399 px (70 %) |
| 360 × 640, portada y 404 | No (360 de 360) | Ninguno | 471 px (74 %) |
| Zoom 200 % de 1280 × 800 (640 × 400), portada y 404 | No (625 de 625) | Ninguno | 231 px (58 %) |
| Zoom 200 % de 1280 × 1024 (640 × 512) | No (625 de 625) | Ninguno | 343 px (67 %) |
| Zoom 400 % de 1280 × 1024 (320 × 256), portada y 404 | No (305 de 305) | Ninguno | **87 px (34 %)** |
| Teléfono apaisado (640 × 360) | No (640 de 640) | Ninguno | 191 px (53 %) |
| 768 × 1024 y 1280 × 800 | No (753 de 753 y 1265 de 1265) | Ninguno | — |

En todos los casos se midió con el acordeón abierto y los errores del formulario visibles. A 640 px de ancho la página usa el diseño móvil: header de 112 px y barra de 57 px.

Primera pantalla a 320 × 568 px (portada):

| Elemento | Posición |
| :--- | :--- |
| Header | 0–112 px |
| Etiqueta | 152–170 px |
| `h1` | 174–342 px, 4 líneas |
| Párrafo | 358–446 px |
| «Llamar ahora» | 462–510 px: completo, a 1 px de la barra |
| «Escribir por WhatsApp» | 518–566 px: **oculto por completo** (55 px bajo el borde de la barra) |
| Barra inferior | 511–568 px |

En el 404 a 320 × 568 px: «Llamar ahora» se ve completo (434–482 px), «Escribir por WhatsApp» queda con 13 px visibles (498–546 px) y «Volver al inicio» queda fuera (562–610 px).

**Decisión que se propone para 320 px: aceptar el estado actual y registrarlo como riesgo aceptado.** Motivos:

1. La acción no se pierde: en la primera pantalla a 320 px siguen visibles tres formas de llamar (header, hero y barra) y una de escribir por WhatsApp (barra). El botón oculto repite el de la barra.
2. La regla transversal 6 de la épica está definida para 360 × 640 px, y ahí se cumple (17 px de margen).
3. No hay desplazamiento horizontal ni texto recortado a 320 px, que es lo que exige WCAG 1.4.10.

Alternativa si el desarrollador prefiere corregirlo: faltan 63 px (55 más 8 de margen). Ocultar el párrafo del hero bajo 360 px de ancho libera 104 px, pero quita texto aprobado en esos teléfonos. Reducir solo el `h1` no alcanza. Observación relacionada: lo mismo ocurre en cualquier viewport de menos de 631 px de alto con el `h1` en cuatro líneas, por ejemplo un teléfono de 360 × 640 px con la barra de direcciones del navegador a la vista. Se confirma en el teléfono real (fase B).

Pruebas adicionales de la misma familia (no pedidas en la tarea):

| Prueba | Resultado |
| :--- | :--- |
| Espaciado de texto de WCAG 1.4.12 (interlínea 1,5; letras 0,12em; palabras 0,16em; párrafos 2em), a 320, 360 y 1280 px | Sin desplazamiento horizontal. Un recorte: el nombre «Grúas Burgos» del header pierde 8 px por arriba (FA-08) |
| Tamaño de fuente predeterminado del navegador al doble (32 px), a 1280 × 800 | El texto no crece (`h1` 38 px, párrafo 15 px); el espaciado sí: header de 224 px. Sin desplazamiento horizontal |
| Lo mismo a 360 × 640 | Header de 224 px, alto útil del 49 % y **desplazamiento horizontal** (373 px de contenido en 360). Ver FA-09 |

### Tarea 4 · Tamaño táctil real

Método: prueba de impacto. Se recorrió cada punto de la zona, de 1 px en 1 px, con `elementFromPoint`, y se tomó la caja que encierra los puntos donde un toque llega al enlace.

| Elemento | Caja calculada | Área táctil real | Observación |
| :--- | :--- | :--- | :--- |
| Enlace de la marca, 360 × 640 | 124,7 × 26 px | **126 × 48 px** (x 67–192, y 7–54) | Cumple 44 × 44. Incluye «Disponible 24/7». El 95 % de los puntos de esa caja llega al enlace |
| Enlace de la marca, 1280 × 800 | 124,7 × 26 px | 126 × 48 px | Igual |
| Isotipo del header (40 × 40 px) | — | No pertenece al enlace | Tocarlo no lleva al inicio: el toque lo recibe el SVG (FA-06) |
| «Volver al inicio», 404 a 360 × 640, sin desplazar | 168 × 48 px (562–610 px) | **169 × 21 px** | La barra empieza en 583 px y tapa 27 px (FA-07) |
| «Volver al inicio», tras desplazar 40 px | 168 × 48 px | 169 × 49 px | Completo |
| «Volver al inicio», 404 a 320 × 568 | 562–610 px | 0 | Bajo la barra (511 px): hay que desplazar |
| «Volver al inicio», 404 a 390 × 844 y 412 × 915 | — | Completo | La barra queda más abajo |

Todos los objetivos, con cada uno centrado en pantalla y el acordeón abierto:

| Página y tamaño | Objetivos medidos | Menor área real | Bajo 44 × 44 px |
| :--- | :--- | :--- | :--- |
| Portada, 360 × 640 | 43 | 45 × 45 px | Ninguno |
| Portada, 1280 × 800 | 46 | 45 × 44 px | Ninguno |
| Portada, 320 × 568 | 43 | 45 × 45 px | Ninguno |
| 404, 360 × 640 | 16 | 45 × 45 px | Ninguno |
| 404, 1280 × 800 | 17 | 45 × 44 px | Ninguno |

Al final de la página en escritorio, los botones flotantes tapan contenido que no se puede destapar desplazando (portada y 404 dan lo mismo):

| Ventana | «Felipe Cuevas» (87 × 44 px) | Íconos de redes (44 × 44 px) |
| :--- | :--- | :--- |
| 768 × 1024 | 22 % libre | Los tres, con 44 × 32 px libres |
| 1024 × 768 | 22 % libre | Facebook y TikTok, con 45 × 32 px libres |
| 1280 × 800 | 22 % libre | TikTok, 86 % libre |
| 1366 × 768, 1440 × 900 y 1536 × 864 | 18 % libre: una franja de 87 × 8 px | Sin solape |
| 1920 × 1080 | Sin solape | Sin solape |

El texto «Sitio desarrollado por Felipe Cuevas» queda bajo los botones en todos los anchos de 768 a 1536 px.

### Tarea 5 · Peso de la carga inicial

Sin desplazarse, con la caché desactivada y vacía. Se cuentan los bytes del cuerpo tal como viajan (HTML y CSS con gzip). Tope: 400 KB (409.600 B). Todas las peticiones son del mismo origen (0 externas).

Desglose a 1280 × 800 px, densidad 1 (18 peticiones):

| Recurso | Bytes |
| :--- | :--- |
| HTML (gzip) | 15.502 B |
| CSS (gzip) | 6.004 B |
| Fuentes: 5 archivos WOFF2 | 97.628 B |
| Foto del hero, AVIF de 1280 px | 54.168 B |
| Galería: 9 fotos AVIF | 128.182 B |
| Favicon | 803 B |
| **Total** | **302.287 B (295,2 KB): cumple** |

En escritorio las nueve fotos de la galería se descargan al cargar en todos los tamaños medidos. El peso depende de la densidad de la pantalla:

| Ventana y densidad | Hero | Galería | Total | Contra 400 KB |
| :--- | :--- | :--- | :--- | :--- |
| 1280 × 800, densidad 1 | 54.168 B | 128.182 B (9) | 295,2 KB | Cumple |
| 1440 × 900 y 1920 × 1080, densidad 1 | 102.926 B | 128.182 B (9) | 342,8 KB | Cumple |
| 1536 × 864, densidad 1,25 | 102.926 B | 128.182 B (9) | 342,8 KB | Cumple |
| 1280 × 720, densidad 1,5 | 102.926 B | 250.353 B (9) | **462,1 KB** | Supera por 62,1 KB |
| 1280 × 800, densidad 2 | 102.926 B | 416.804 B (9) | **624,7 KB** | Supera por 224,7 KB |
| 768 × 1024, densidad 1 | 37.052 B | 112.209 B (9) | 262,9 KB | Cumple |
| 768 × 1024, densidad 2 | 102.926 B | 293.443 B (9) | **504,2 KB** | Supera por 104,2 KB |
| 404 a 1280 × 800 y a 360 × 640 | — | — | 71,1 KB (6 peticiones) | Cumple |

En móvil, cuántas fotos de la galería adelanta Chrome depende de la conexión que el propio navegador estima. Con 4G adelanta las que están a menos de 1250 px de la pantalla (medido en 04-02). Con 3G o peor el umbral es mayor: 2500 px según la documentación de Chrome; aquí se observó que carga las nueve, la más lejana a 1730 px. Se midió fijando la red emulada:

| Ventana y densidad | Red 4G: galería | Red 4G: total | Red 3G: galería | Red 3G: total |
| :--- | :--- | :--- | :--- | :--- |
| 360 × 640, densidad 1 | 3 de 9 | 167,1 KB | 9 de 9 | 208,0 KB |
| 360 × 640, densidad 2 | 3 de 9 | 253,2 KB | 9 de 9 | 392,5 KB |
| 360 × 640, densidad 3 | 3 de 9 | 354,8 KB | 9 de 9 | **582,6 KB** (supera por 182,6 KB) |
| 412 × 823, densidad 1,75 | 5 de 9 | 291,3 KB | 9 de 9 | 392,5 KB |

La cifra de 360 × 640 con densidad 1 y 4G coincide con 04-02 (166,3 KB más el favicon de 803 B, que esta vez sí se pidió). La salvedad aceptada en 04-02 («3 de 9») vale solo para 4G: con red lenta son 9 de 9.

Variante descargada frente a la mínima que bastaría para el tamaño en que se muestra la foto:

| Caso | Se muestra | `sizes` declara | Descarga | Bastaría | Ahorro |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Cuadradas, 1280 × 800, densidad 1 | 238,6 px | 242 px | 320w | 240w | 38.471 B |
| Cuadradas, 1280 × 800, densidad 2 | 238,6 px | 242 px | 640w | 480w | 123.361 B |
| Cuadradas, 360 × 640, densidad 1 (3G) | 156 px | 45vw (162 px) | 240w | 160w | 28.193 B |
| Cuadradas, 360 × 640, densidad 2 (3G) | 156 px | 45vw | 480w | 320w | 99.673 B |
| Cuadradas, 360 × 640, densidad 3 (3G) | 156 px | 45vw | 640w | 480w | 123.361 B |
| Destacada, 768 × 1024, densidad 1 | 713 px | 728 px | 960w | 720w | 22.498 B |
| Hero, 412 × 823, densidad 1,75 | 462 px de ancho real por el recorte | 640 px | 1280w (54.168 B) | 960w (37.052 B) | 17.116 B en la imagen LCP |

Con el `sizes` ajustado, 360 × 640 con densidad 3 y 3G bajaría a 462,1 KB (sigue sobre el tope) y 1280 × 800 con densidad 2 a 504,2 KB. No se probó en el repositorio: son cálculos con los pesos de los archivos de `dist/`.

En todas las cargas el elemento LCP fue la foto del hero (salvo en el 404, que no tiene foto). El CLS fue 0 con la red 4G y de 0,0005 a 0,0009 con la red 3G.

### Tarea 6 · Enlaces de llamada, WhatsApp y «Cómo llegar»

Lo esperado se calculó con las funciones de `src/data/negocio.js` y con `servicios.js`; lo publicado se leyó del DOM en Chrome (portada y 404, a 360 y 1280 px) y del HTML (enlace dentro de `<noscript>`). No se abrió ningún enlace.

| Tipo | Enlaces revisados | Correctos | Destino |
| :--- | :--- | :--- | :--- |
| Llamada | 36 (11 en la portada y 7 en el 404, a dos anchos) | 36 | `tel:+56946192286` (E.164 válido; igual al `telephone` del JSON-LD) |
| WhatsApp | 24 (9 y 3, a dos anchos) | 24 | `https://wa.me/56946192286?text=…`, en pestaña nueva con `rel="noopener noreferrer"` |
| «Cómo llegar» | 2 | 2 | `https://www.google.com/maps/dir/?api=1&destination=Vicente%20Reyes%20870%2C%20Villarrica%2C%20Chile` |
| «Ver más opiniones en Google» | 2 | 2 | Búsqueda de Google Maps «Grúas Burgos Villarrica» |
| Internos (marca, navegación, «Volver al inicio») | 18 | 18 | `/`, `/#inicio`, `/#servicios` y `/#contacto`; las tres anclas existen en la portada |
| Correo | 4 | 4 | `mailto:gruasburgosvillarrica@gmail.com` |
| Reseñas (`share.google`) y redes | 32 (20 y 12) | 32 con pestaña nueva y `rel` | Las redes coinciden con `negocio.js`. No se comprobó adónde llevan las reseñas |
| Crédito del desarrollador | 4 | 4 | `https://felipecuevas.dev` |

En el HTML de la portada hay un solo número en los 11 enlaces `tel:` y uno solo en las 11 apariciones de `wa.me`.

Mensajes de WhatsApp publicados. Son **siete** distintos; la tarea 6 del desarrollador habla de «los tres mensajes»:

| Dónde | Mensaje | ¿Igual al aprobado? |
| :--- | :--- | :--- |
| Hero, tarjeta de despacho, barra móvil, botones flotantes y 404 | «Hola, necesito una grúa en Villarrica. Mi ubicación es: » | Sí |
| Contacto, «Enviar mi ubicación por WhatsApp» | «Hola, necesito una grúa. Te envío mi ubicación por aquí. » | Sí |
| Servicios, traslado en grúa cama | «Hola, quiero cotizar un traslado en grúa cama. » | Sí |
| Servicios, rescate 4x4 | «Hola, necesito un rescate 4x4. Mi ubicación es: » | Sí |
| Servicios, vehículos siniestrados | «Hola, necesito retirar un vehículo siniestrado. » | Sí |
| Servicios, traslados a otras ciudades | «Hola, quiero cotizar un traslado a otra ciudad. » | Sí |
| Formulario y enlace sin JavaScript | «Hola, quiero cotizar un servicio de grúa.» y una línea por campo | Sí |

Formulario: un envío válido con «&» y «#» en la dirección abre una sola ventana hacia `https://wa.me/56946192286`, con `_blank` y `noopener,noreferrer`, y el mensaje coincide carácter por carácter con el esperado (saltos de línea como `%0A`, «&» como `%26`, «#» como `%23`). La apertura real de WhatsApp, de la llamada y de Google Maps es de la fase B.

### LCP orientativo (no es Lighthouse)

No lo pide la fase A; se midió porque afecta a dos criterios de la iteración. Red limitada por DevTools con el perfil «4G lenta» de Lighthouse (1,44 Mb/s y 562 ms por petición) y CPU ÷4, sobre `pnpm preview` (HTTP/1.1, sin Cloudflare):

| Pantalla | Corridas | LCP | Elemento |
| :--- | :--- | :--- | :--- |
| 412 × 823, densidad 1,75 | 3 | 2,62 s, 2,97 s y 3,91 s (mediana 2,97 s) | Foto del hero |
| 360 × 640, densidad 3 | 3 | 3,19 s, 4,15 s y 4,22 s (mediana 4,15 s) | Foto del hero |
| 360 × 640, densidad 1 | 1 | 3,26 s | Foto del hero |
| 412 × 823 y 360 × 640, sin limitar | 1 cada una | 0,40 s y 0,46 s | Foto del hero |

En todas las corridas limitadas el primer pintado coincide con el LCP: la foto ya había llegado (1,6 a 2,0 s) y la página aún no pintaba. La traza muestra qué lo retrasa: una tarea larga del hilo principal, el primer cálculo de diseño (`Layout`):

| Medición del primer `Layout` de la portada | Resultado |
| :--- | :--- |
| Pestaña nueva, sin limitar CPU (3 corridas) | 146, 169 y 207 ms, para 797 objetos de diseño |
| Segunda y tercera carga en la misma pestaña | 27 a 40 ms |
| Con CPU ÷4 | Tareas de 1,6 a 2,6 s antes del primer pintado |
| 404, pestaña nueva | 55 ms, para 155 objetos |
| Portada tras cargar antes el 404 en la misma pestaña (3 corridas) | 116, 139 y 165 ms |
| Lo mismo con todo el texto en Arial (prueba) | 62, 67 y 68 ms |
| Velocidad de esta máquina (índice de Lighthouse) | 1549: equipo rápido (8 núcleos) |

No sé cuánto de ese costo es propio de este entorno (Windows, Chrome sin interfaz, proceso recién creado). Con un perfil más cercano a la limitación simulada de Lighthouse (150 ms por petición, 1,6 Mb/s y CPU ÷4) el resultado fue parecido: 2,36 s, 3,06 s y 3,36 s. **No verificado con Lighthouse**: queda como alerta para la fase B.

## Defectos hallados

Identificadores provisionales de la fase A. La numeración `AUD-09-NNN` y la severidad definitiva se asignan en la fase B. Ninguno se corrigió.

| ID | Severidad propuesta | Área | Defecto y evidencia | Corrección recomendada |
| :--- | :--- | :--- | :--- | :--- |
| FA-01 | **Alta** | Teclado | El elemento enfocado queda tapado por los elementos fijos de abajo. A 360 × 640 px, 3 de 43 paradas quedan totalmente ocultas bajo la barra (entre ellas un campo del formulario) y 2 parcialmente; en el 404, 1 y 1. A 1280 × 800 px, 1 de 46 queda totalmente oculta bajo los botones flotantes y 3 parcialmente. En otras 5 paradas el elemento se ve, pero el borde inferior del anillo queda bajo la barra o fuera de la ventana. Incumple WCAG 2.2, criterio 2.4.11 «Foco no oculto (mínimo)», nivel AA. La barra también aparece en una ventana de escritorio con zoom al 200 % (640 px CSS); ahí no se hizo el recorrido con Tab. Medido solo en Chrome | `scroll-padding-bottom` en `html` (`src/styles/global.css`): alto de la barra más 8 px en móvil (65 px más `env(safe-area-inset-bottom)`) y 144 px desde `md`. Probado en el navegador: a 360 px no queda ninguna parada tapada. Lo que sigue tapado en escritorio es FA-02. Conviene reflejarlo en `DESIGN.md` §9 (requiere aprobación) |
| FA-02 | Media | Escritorio | Al final de la página, los botones flotantes tapan contenido que no se puede destapar desplazando: entre 768 y 1536 px de ancho queda libre el 18 % a 22 % del enlace «Felipe Cuevas» (a 1366 px o más, una franja de 87 × 8 px) y el texto «Sitio desarrollado por» queda debajo. A 768 y 1024 px, los íconos de redes quedan con 44 × 32 px libres. Afecta al mouse, al toque y al teclado | Reservar espacio al final en `md` o más: relleno inferior de unos 136 px en el `body` o en la franja inferior del pie, o alinear el crédito a la izquierda en esa franja. Decide el desarrollador |
| FA-03 | Media | Teclado | Anillo de foco recortado: en los dos botones de la barra móvil se pinta el 37 % y el 49 % (solo el borde superior y, en «WhatsApp», el izquierdo, sobre el naranja a 1,86:1). En «Inicio» se pierde 1 px del borde izquierdo. Hay indicador, pero no el que define `DESIGN.md` §5.1 | En los botones de la barra, contorno hacia adentro (`outline-offset` negativo) con `on-accent` sobre el naranja y `primary` sobre el oscuro. En «Inicio», lo mismo o quitar el margen negativo de la lista |
| FA-04 | Media | Rendimiento | La carga inicial supera 400 KB en pantallas de densidad alta: 462,1 KB (1280 × 720, densidad 1,5), 624,7 KB (1280 × 800, densidad 2), 504,2 KB (768 × 1024, densidad 2) y 582,6 KB (360 × 640, densidad 3, con red 3G). Con densidad 1 cumple (295,2 KB a 1280 × 800). Causas: la galería completa se descarga sin desplazarse en escritorio y, en móvil, cuando Chrome estima una red lenta; y `sizes` declara más ancho del que ocupan las fotos | 1) Ajustar `sizes` de la galería al ancho real (ahorro calculado: 38.471 B a 1280 px con densidad 1; 123.361 B con densidad 2 y en móvil con densidad 3 y red lenta). 2) Decidir si se limita la variante mayor de las fotos cuadradas o se acepta el exceso en densidad alta. 3) Si se quiere que la galería no cargue con red lenta, tendría que quedar a más de 2500 px de la primera pantalla (por ejemplo, bajo las opiniones): cambia el orden aprobado en `DESIGN.md` §5 y RDA-009 |
| FA-05 | Media | Zoom | Con zoom al 400 % (320 × 256 px CSS) el header fijo y la barra dejan 87 px de alto útil (34 %): el `h1` de cuatro líneas no cabe. Al 200 % (640 × 400) quedan 231 px (58 %) y en un teléfono apaisado (640 × 360), 191 px (53 %). No hay desplazamiento horizontal (WCAG 1.4.10 se cumple) | En viewports de poco alto (por ejemplo `max-height: 480px`), dejar de fijar el header u ocultar su fila de navegación. Cambia `DESIGN.md` §5 (header fijo): requiere decisión del desarrollador |
| FA-06 | Baja | Navegación | El isotipo del header (40 × 40 px) no pertenece al enlace de la marca: tocarlo no lleva al inicio. El área real del enlace es 126 × 48 px (nombre e indicador) | Mover `relative` al contenedor que incluye el isotipo, para que el área estirada lo cubra (unos 172 × 48 px), o envolver isotipo y nombre en el mismo enlace |
| FA-07 | Baja | 404 | A 360 × 640 px, «Volver al inicio» queda con 21 px de alto tocables en la primera pantalla (27 px bajo la barra); a 320 × 568 px queda oculto. Se ve completo tras desplazar 40 px, y a 390 × 844 y 412 × 915 px | Párrafo del 404 en `text-body-md` en móvil, como el del hero. Probado en el navegador: el botón termina en 564 px, 19 px sobre la barra. Con `mt-space-lg` además en el grupo de botones, 35 px |
| FA-08 | Baja | Espaciado de texto | Con el espaciado de WCAG 1.4.12 (nivel AA), el nombre «Grúas Burgos» del header se recorta 8 px por arriba: «Disponible 24/7» es un `<p>` dentro de una fila de alto fijo (64 px) y recibe el margen de párrafo. No hay otros recortes a 320, 360 y 1280 px | Que el indicador no sea un `<p>` (por ejemplo `<span>` o `<div>`), o que la fila use alto mínimo en vez de alto fijo |
| FA-09 | Baja | Texto | Los tamaños de letra están en px: con la fuente predeterminada del navegador al doble, el texto no crece y el espaciado en rem sí (header de 224 px); a 360 px aparece desplazamiento horizontal (373 de 360). El zoom del navegador funciona, así que WCAG 1.4.4 se cumple | Escala tipográfica en rem. Cambia `DESIGN.md` §3.1 y §9: requiere aprobación |
| FA-10 | Baja | Diseño | El botón secundario no tiene borde y su relleno (`#0e0e0e`) no se distingue del fondo `surface` (1,04:1): «Volver al inicio» del 404 se ve como texto suelto. No es exigible por WCAG 1.4.11 (el texto identifica el control) | Usar la variante de contorno en el 404, o aceptar como en AUD-05-001 |
| FA-11 | Baja | Teclado | No hay enlace para saltar al contenido: 5 paradas de Tab en móvil y 6 en escritorio antes del contenido, en cada página. WCAG 2.4.1 se cumple por los encabezados y las regiones | Enlace «Saltar al contenido» visible solo al enfocarlo. Es texto nuevo: requiere aprobación |

Observaciones sin severidad, para la prueba con lector de pantalla (tarea 7 del desarrollador): Chrome entrega en mayúsculas los nombres accesibles de los textos con `uppercase` («LLAMAR AHORA», «INICIO», «TU NOMBRE»); los que llevan `aria-label` llegan en formato oración. `DESIGN.md` §3 escribe el texto en formato oración para que los lectores no lo deletreen: hay que oírlo en TalkBack o VoiceOver.

## Criterios de aceptación

Los de la iteración completa. La fase A solo puede evaluar el séptimo.

- [ ] Lighthouse móvil en la vista previa. **No verificado:** fase B.
- [ ] LCP menor que 2,0 s y CLS menor que 0,05 en Lighthouse móvil. **No verificado:** fase B. En local el CLS fue de 0 a 0,0009; el LCP orientativo con limitación dio 2,6 a 4,2 s (no es Lighthouse).
- [ ] JSON-LD sin errores en los validadores. **No verificado:** fase B.
- [ ] Vista previa de WhatsApp. **No verificado:** fase B.
- [ ] Cabeceras de `_headers` sobre HTTPS. **No verificado:** fase B.
- [ ] Compilación de `main` en Cloudflare. **No verificado:** fase B.
- [ ] Teclado, contraste, zoom al 200 % y 320 px sin hallazgos de severidad Alta abiertos. **No se cumple** si se confirma la severidad de FA-01. Contraste, zoom al 200 % y 320 px no tienen hallazgos de severidad Alta.
- [ ] Prueba en teléfono real y con lector de pantalla. **No verificado:** fase B.
- [ ] Auditoría 09 registrada. **Pendiente:** fase B.

Tareas de la fase A:

- [x] 1. Recorrido con teclado en la portada y el 404: hecho. Orden correcto, foco de 3 px y sin trampas; hallazgos FA-01, FA-03 y FA-11.
- [x] 2. Contraste de todas las combinaciones y del hero en 12 anchos: hecho. Sin fallas de texto; AUD-05-001 verificado.
- [x] 3. Zoom al 200 % y 320 px: hecho. Sin desplazamiento horizontal; primera pantalla a 320 × 568 px informada y decisión propuesta; hallazgos FA-05, FA-08 y FA-09.
- [x] 4. Tamaño táctil real de la marca y de «Volver al inicio»: hecho. Hallazgos FA-02, FA-06 y FA-07.
- [x] 5. Peso a 1280 × 800 px contra 400 KB: hecho. 295,2 KB con densidad 1; hallazgo FA-04.
- [x] 6. Enlaces de WhatsApp, llamada y «Cómo llegar»: hecho. 62 de 62 correctos, sin abrirlos (122 enlaces revisados en total).
- [x] 7. Bitácora de la fase A con la lista para la fase B: este documento.

## Decisiones tomadas

Ninguna es estructural ni cambia el producto; son decisiones de método.

1. **Anillo de foco por diferencia de capturas.** El contorno calculado dice 3 px en todas las paradas, pero no dice si se ve. Se comparó una captura con el contorno y otra sin él, píxel a píxel. Así aparecieron los anillos recortados y los tapados.
2. **Tamaño táctil por prueba de impacto.** La caja calculada del enlace de la marca mide 26 px de alto; su área real, estirada con `::after`, mide 48 px. Solo `elementFromPoint` da el dato real, y también muestra lo que tapan los elementos fijos.
3. **Zoom con densidad de pantalla.** Chrome no ofrece el zoom del navegador por CDP. Un viewport de 640 × 400 px con densidad 2 es lo que ve la página con el zoom al 200 % en 1280 × 800 px.
4. **Red fijada al medir el peso.** La primera corrida a 360 px dio 9 fotos de galería y no las 3 de 04-02. La causa: Chrome adelanta más las imágenes diferidas cuando estima una red lenta, y esa estimación varía entre corridas. Desde ahí cada medida fija la red emulada (4G o 3G).
5. **Correcciones probadas sin tocar el repositorio.** Las recomendaciones de FA-01 y FA-07 se comprobaron inyectando CSS en el navegador por CDP.
6. **Severidad.** Se propone Alta solo para FA-01: incumple un criterio AA con efecto directo (un campo del formulario enfocado que no se ve). FA-08 también toca un criterio AA, pero su efecto es un recorte de 8 px bajo una hoja de estilos del usuario: se propone Baja. La severidad definitiva es del desarrollador.

## Diferencias entre lo pedido y lo encontrado

| Tema | Diferencia |
| :--- | :--- |
| Fuentes | El encargo permitía incrustar las de `@fontsource` si el entorno no las descargaba. No hizo falta: la compilación las copió y Chrome las cargó. |
| «Las nueve fotos se descargan al cargar» (tarea 5) | Confirmado en escritorio. En móvil también ocurre con red lenta, lo que cambia la salvedad de 04-02. |
| «Los tres mensajes» de WhatsApp (tarea 6 del desarrollador) | Son siete mensajes distintos. |
| Tope de 400 KB a 1280 × 800 px | Se cumple con densidad 1 y no con densidad 1,5 o 2, que la iteración no menciona. |
| Servidor de `pnpm preview` | El entorno detuvo la tarea en segundo plano por tiempo, pero el proceso siguió vivo en Windows. Se cerró a mano al terminar. |

## Lo que queda para la fase B

Con la evidencia que entregue el desarrollador:

1. Registrar las salidas de `curl.exe` y contrastarlas con `public/_headers`, incluidos los comodines de `X-Robots-Tag`.
2. Registrar el registro de compilación de `main` en Cloudflare: versión de Node, de pnpm, instalación de `sharp` y la línea «Sin PENDIENTE_CLIENTE en N archivos publicados».
3. Registrar PageSpeed (tres ejecuciones en móvil y tres en escritorio) y evaluar los criterios de Lighthouse, LCP y CLS. Revisar en el informe el tiempo total de bloqueo, «Style & Layout» y cuántas fotos de la galería cargó, por la alerta del LCP orientativo.
4. Registrar los resultados del validador de Schema.org y de la Prueba de resultados enriquecidos.
5. Registrar la prueba en teléfono real: llamada, los siete mensajes de WhatsApp, «Cómo llegar», formulario, vista previa del enlace y primera pantalla con la barra de direcciones visible.
6. Registrar la prueba con TalkBack o VoiceOver: encabezados, nombres de botones (¿deletrea los textos en mayúsculas?), formulario, errores y las cinco regiones vivas.
7. Registrar la revisión del favicon en la pestaña.
8. Decisiones del desarrollador que la fase B debe recoger: severidad definitiva de FA-01 a FA-11; si se corrigen dentro de 04-03 o en otra iteración; decisión sobre los 320 px; y si el exceso de peso en densidad alta se acepta.
9. Registrar la Auditoría 09 en `auditoria-tecnica.md` con los hallazgos `AUD-09-NNN`, y actualizar AUD-01-025, AUD-05-001 (con el valor nuevo de 1,40:1) y los demás que cambien.
10. Marcar las casillas pendientes de 03-01 a 03-05 que queden verificadas y actualizar `registro-log.md` (04-01, 04-02 y 04-03).

## Pendientes y riesgos

- **LCP con red y CPU limitadas.** Es la alerta principal para la fase B. Si PageSpeed confirma un LCP sobre 2,0 s, las primeras palancas son: `sizes` del hero más ajustado (en la pantalla que emula Lighthouse la foto baja de 54.168 a 37.052 B), menos fotos de galería en la carga inicial (FA-04) y revisar el costo del primer cálculo de diseño.
- **Medido solo en Chrome.** El comportamiento del foco (FA-01) puede variar en Firefox y Safari; no se probaron.
- **Carga diferida de la galería.** El umbral lo decide Chrome según la red que estima. No se controla desde el sitio sin JavaScript o sin mover la galería.
- **Reseñas.** Las 10 direcciones `share.google` y «Ver más opiniones en Google» no se abrieron. Esta última es una búsqueda, no el perfil oficial (AUD-01-010 sigue parcial).
- **No verificado en esta fase:** `prefers-reduced-motion`, lector de pantalla real, teléfono real, Safari de iOS, cabeceras y todo lo que depende de Cloudflare.
- **Carpetas temporales fuera del repositorio.** Chrome dejó 37 carpetas de perfil `cdp-gruas-*` en la carpeta temporal de Windows (`%TEMP%`), unos 1,3 GB; 24 son de hoy. El agente no pudo borrarlas: el borrado recursivo está denegado. El desarrollador puede eliminarlas.
- **Estado previo.** `git status` sigue mostrando `AD src/assets/LogoGruasBurgos.svg`, anterior a 04-01. Sigue pendiente borrar `node_modules/.cache/prueba-csp` (tarea 10 del desarrollador).
- **Servidores.** Ninguno activo al terminar: puerto 4321 libre y «No dev server is running.».

## Commit sugerido

`Épica 4 - Iteración 04-03: agrega la bitácora de la auditoría local de teclado, contraste, zoom, tamaño táctil, peso y enlaces, con 11 defectos y los pendientes de la fase B (fase A)`

(182 caracteres, contados con código.)
