# Iteración 05-04 · Cambios del cliente: contenido y estructura de la página

- **Épica:** 05 · Ajustes finales, publicación y medición
- **Estado:** Terminada (marcada por el desarrollador el 2026-10-06; fusionada en `main`). Fase A medida el 2026-10-06, [bitácora](../../99_bitacora/bitacora-05-04-2026-10-06.md); fase B registrada el 2026-10-06, [bitácora](../../99_bitacora/bitacora-05-04-fase-b-2026-10-06.md); tanda de ajustes implementada y medida, [bitácora](../../99_bitacora/bitacora-05-04-ajustes-2026-10-06.md); segunda pasada, [bitácora](../../99_bitacora/bitacora-05-04-ajustes-2-2026-10-06.md); fase B de la tanda y tercera pasada (banderas con esquinas rectas), [bitácora](../../99_bitacora/bitacora-05-04-ajustes-fase-b-2026-10-06.md). Quedan sin verificar las banderas con esquinas rectas en una vista previa (se comprueban en producción en 05-01) y Safari en iPhone (no hay equipo). La aprobación del cliente de los ajustes queda para el hito final de la épica (AUD-08-023).
- **Rama sugerida:** `iteracion/05-04-cambios-cliente`
- **Depende de:** 05-03
- **RDA relacionadas:** RDA-006, RDA-007, RDA-008, RDA-009, RDA-011
- **Hallazgos que cierra:** pedidos de la reunión del 2026-10-04; ajuste D (imagen junto a «Quiénes somos»); la parte de razón social y RUT de AUD-01-009 (no se publican, decisión del cliente).

## Objetivo

Que quien llega con urgencia vea primero lo que puede resolver: los servicios van justo bajo el hero, «Quiénes somos» se reduce a una franja, y el sitio comunica los servicios nuevos, la cobertura regional y nacional, y los medios de pago. Sin nombres propios.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. La forma de lograrlo la decide quien implementa, dentro de las reglas de la iteración.

## Reglas de la iteración

1. Solo se publica lo de «Contenido aprobado». Los textos se copian tal cual, sin agregar adjetivos ni cifras. **Si una tarea necesita un texto que no está aprobado, o contradice `DESIGN.md`, detenerse y consultar.**
2. La lista «No publicar» de `definicion-epica-05.md` rige también para metadatos, textos alternativos y JSON-LD.
3. Datos solo desde `src/data/negocio.js` y `src/data/servicios.js`. Sin dependencias nuevas. No se tocan `package.json` ni `astro.config.mjs`.
4. **JavaScript:** sin JavaScript nuevo en el cliente.
5. **Autorizado:** editar `DESIGN.md` §5 y §7, actualizar RDA-009 y RDA-011 en `decisiones.md`, y eliminar archivos de `src/` que queden sin uso. Cualquier otro cambio en `DESIGN.md` requiere consultar antes.
6. Los textos de las reseñas se mantienen textuales (RDA-007), aunque una nombre a «Yerko».
7. El orden de las secciones cambia, pero las tres anclas `#inicio`, `#servicios` y `#contacto` siguen existiendo y funcionando.
8. No se hacen `commit`, `push` ni cambios de rama. Los hace el desarrollador.
9. Para medir con Chrome, usar un solo directorio de perfil reutilizable.

## Contenido aprobado de esta iteración

**Servicios nuevos** (los tres actuales no cambian; cada mensaje de WhatsApp termina con un espacio)

| Título                                          | Descripción                                                                                           | Mensaje de WhatsApp                                              |
| :---------------------------------------------- | :---------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| Puente de batería                               | Si tu vehículo no parte por la batería, le pasamos corriente para que vuelva a funcionar.             | Hola, necesito un puente de batería. Mi ubicación es:            |
| Cambio de neumático                             | Te ayudamos a cambiar el neumático de tu vehículo cuando quedas en ruta.                              | Hola, necesito un cambio de neumático. Mi ubicación es:          |
| Rescates complejos con camión pluma             | Cuando una grúa con plataforma no puede operar en el lugar, el vehículo se levanta con camión pluma.  | Hola, necesito un rescate complejo con camión pluma. Mi ubicación es: |
| Envío de vehículos a todo Chile y a Argentina   | Enviamos tu vehículo a cualquier ciudad de Chile y a Argentina. Precios muy competitivos.             | Hola, quiero cotizar el envío de un vehículo. Destino:           |
| Traslado de maquinaria liviana                  | Trasladamos minirretroexcavadoras, montacargas y minicargadores con la grúa cama y, si es necesario, con un camión de 15 toneladas. | Hola, quiero cotizar el traslado de maquinaria liviana.          |

**Traslado en grúa cama** (servicio existente): su tercera característica pasa de «Autos, SUV y camionetas» a «Autos, SUV, camionetas, furgones y camiones de tres cuartos». La descripción y las demás características no cambian.

Los servicios nuevos no llevan lista de características. «Rescates complejos con camión pluma» no dice que el camión sea propio. El bloque «¿Necesitas un traslado a otra ciudad?…» se reemplaza por el servicio de envío: no quedan dos mensajes para lo mismo.

**Quiénes somos** (título «Quiénes somos», sin cambio)

- «Grúas Burgos es un servicio de grúas con base en Villarrica, atendido por sus propios dueños.»
- «Trabajamos con un camión de plataforma hidráulica (grúa cama) y winche para rescate y traslado de vehículos. Hemos prestado servicio en el paso fronterizo Mamuil Malal.»
- Se retiran de esta sección: la mención a «Yerko Burgos», la frase destacada «Servicio de grúa 24/7 y donde nos necesiten.» y el párrafo «Quienes nos han llamado destacan…».
- Imagen: la foto 07 (`07-rescate-con-cable-de-camioneta.webp`), con su texto alternativo actual: «Grúa rescatando con cable una camioneta que se salió del camino entre Villarrica y Pucón.» Sale de la galería.

**Tarjeta de despacho del hero:** «Atendido por sus propios dueños, a cualquier hora.» (reemplaza «Te atiende Yerko Burgos, a cualquier hora.»).

**Cobertura**

- Localidades, en este orden: Villarrica (base de operaciones), Pucón, Licán Ray, Coñaripe y Freire. Las referencias de las cuatro existentes no cambian. Coñaripe va **sin referencia de ruta**: no hay una fuente verificada de la ruta (decisión del 2026-10-05). Su fila muestra solo el nombre y no rompe la alineación de la lista.
- Dos líneas nuevas en «Dónde atendemos»: «Grúas en toda La Araucanía.» y «Traslado de vehículos a todo Chile.»
- Se mantiene: «También hemos prestado servicio en el paso fronterizo Mamuil Malal (Ruta CH-199, Curarrehue). Si estás en otra localidad, consúltanos.»

**Medios de pago** (bloque nuevo en Contacto)

- Título: «Medios de pago».
- Texto: «Efectivo, transferencia, tarjeta de débito y tarjeta de crédito. Emitimos boletas y facturas.»

**JSON-LD:** `areaServed` con las cinco localidades y la región La Araucanía; `paymentAccepted` con «Efectivo, transferencia bancaria, tarjeta de débito, tarjeta de crédito». Sin `priceRange`, sin razón social ni RUT.

**Vehículos y maquinaria** (confirmados por escrito por el cliente y aprobados por el desarrollador el 2026-10-05, decisión 13 de la épica): solo se publica lo de la tabla y de la lista anterior. No se publica «todo tipo de vehículos» ni «etc.». «Nuestro equipamiento» no cambia. La cifra «15 toneladas» aparece **una sola vez** en el sitio, en el servicio de maquinaria liviana.

## Tareas

1. **Orden y estructura.**
   - El orden de la página es: hero, cinta de métricas, **Servicios**, «Quiénes somos» (franja), galería «Trabajos en terreno», opiniones de Google, **Contacto**.
   - Siguen existiendo tres anclas (`#inicio`, `#servicios`, `#contacto`) y cada una lleva a donde dice su nombre, con el título visible bajo el header. El bloque de «Quiénes somos», galería y opiniones queda entre `#servicios` y `#contacto`, sin ancla propia.
   - La jerarquía de títulos es coherente (un solo `h1`, sin saltos de nivel) y cada sección tiene su nombre accesible.
   - RDA-009 y `DESIGN.md` se actualizan con la nueva estructura.

2. **Servicios.**
   - Aparecen los 3 servicios actuales y los 5 nuevos (ocho en total), cada uno con título, descripción y botón «Escribir por WhatsApp» con su mensaje y un `aria-label` con contexto.
   - Los servicios nuevos son compactos: la sección completa mide 3.600 px o menos a 360 px de ancho y 1.800 px o menos a 1280 px (hoy 2.311 y 1.095 px, con 3 servicios).
   - La grilla no deja huecos a 360, 768, 1024, 1280 y 1920 px.
   - Se retira el bloque de «traslado a otra ciudad». El mensaje `trasladoOtraCiudad` se elimina de `negocio.js` si queda sin uso.

3. **Quiénes somos.**
   - Franja resumida con el texto aprobado y la foto 07. La sección completa mide 560 px o menos a 360 px, 420 px o menos a 768 px y 360 px o menos desde 1024 px (hoy 818 px a 360 y 552 px desde 768).
   - El ancho de lectura sigue en 75 caracteres por línea como máximo.
   - La imagen es pequeña, con carga diferida, dimensiones declaradas y sin desplazamiento de diseño. En móvil el agente propone si va apilada u oculta, con las medidas.
   - La galería, sin la foto 07, queda con 1 destacada y 7 fotos sin celdas vacías a 360, 768, 1024, 1280 y 1920 px. Ninguna foto aparece dos veces en la página.

4. **Cobertura y tarjeta de despacho.**
   - La lista de localidades, el texto de «Dónde atendemos», el pie y el JSON-LD reflejan las cinco localidades y las dos líneas nuevas.
   - La primera pantalla a 360 × 640 px se conserva: el hero lista las localidades y ahora lleva una más.
   - No queda ningún nombre propio del dueño en la página ni en `dist/`, salvo dentro de las reseñas textuales y en la URL oficial de TikTok.

5. **Medios de pago y facturación.** El bloque de medios de pago es visible sin interacción en Contacto, en el orden de lectura junto a los canales de contacto. `paymentAccepted` está en el JSON-LD, y este pasa los validadores en la fase B.

6. **Documentación.**
   - Bitácora nueva `bitacora-05-04-AAAA-MM-DD.md` en `_planificacion/99_bitacora/`, con la plantilla de `_planificacion/README.md` §5.2, fecha real, fin de línea LF y estado final «En revisión». Nunca «Terminada».
   - `DESIGN.md` §5 y §7; RDA-009 y RDA-011 actualizadas.
   - `registro-log.md`: fila de 05-04, datos del cliente (razón social y RUT: «no se publican»), «Iteración activa» y «Próximo hito».

## Criterios de aceptación

**Fase A, local (`pnpm preview`):**

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias. Medido: **0 errores, 0 advertencias y 52 hints** (igual que antes); `pnpm build` con código 0 y sin avisos.
- [x] Orden de la página verificado en el DOM. Las tres anclas llevan a su sección con el título visible bajo el header, a 360, 768 y 1280 px. Medido: **15 de 15 clics** con el título visible; sección a **111,6–112,2 px** con el header hasta 112 px; **1** `h1`, **0** saltos de nivel y **0** `id` duplicados.
- [x] Ocho servicios con su botón y mensaje; cada mensaje abre `wa.me` con el texto aprobado (se prueba cada enlace). Medido: **8 de 8** mensajes iguales al aprobado, carácter por carácter y con el espacio final. Se comprobó el enlace; la apertura de WhatsApp es de la fase B.
- [x] Alturas medidas a 360, 768, 1024, 1280 y 1920 px: Servicios y «Quiénes somos» dentro de los límites de las tareas 2 y 3. Sin huecos en las grillas de Servicios y de la galería. Medido: Servicios **3.099, 1.992, 1.403, 1.325 y 1.325 px**; «Quiénes somos» **552, 352, 324, 324 y 324 px**; **0 huecos** y **0 celdas vacías** en los cinco anchos. La línea base no coincide con el «hoy» de las tareas 2 y 3: medí 2.165 y 1.039 px en Servicios, y 764 y 526 px en «Quiénes somos».
- [x] Peso a 360 × 640 px, densidad 1 y 4G: total de 400 KB o menos; HTML más CSS de 50 KB o menos; JavaScript de menos de 1 KB (igual al de 05-03); foto del hero de 150 KB o menos. Se informa también el peso de la página completa con carga diferida. Medido: **137,4 KB** en total, **22,2 KB** de HTML más CSS, **960 B** de JavaScript (igual que en 05-03; 191 B en el 404) y **19,1 KB** de foto del hero. Página completa: **188,2 KB**.
- [x] Primera pantalla a 360 × 640 px: etiqueta, `h1` y ambos botones del hero completos con 8 px o más sobre la barra. 0 objetivos táctiles bajo 44 × 44 px. Sin desborde horizontal a 320, 360, 768, 1024 y 1280 px. Medido: **17 px** sobre la barra; **0** objetivos bajo 44 × 44 px (el menor, 45 × 44 px); **sin desborde** en esos cinco anchos ni a 1536 y 1920 px.
- [x] Recorrido con Tab y Mayús + Tab a 320, 360, 768, 1280 y 1536 px: 0 elementos enfocados cubiertos por elementos fijos. Medido: **0 cubiertos** en 20 recorridos completos (portada y 404) y en 393 paradas más, partiendo de la mitad y del final de la página. Los botones flotantes siguen ocultándose al llegar al pie.
- [x] Búsqueda en `dist/` (medido: «15 toneladas» **1 vez**; «Yerko» **4 veces** en `index.html`, 2 en reseñas y 2 en la URL de TikTok; el resto, **0**; las 26 cadenas aprobadas comprobadas, tal cual): «15 toneladas» aparece una sola vez; no aparece «Yerko» fuera de las reseñas y de la URL de TikTok, ni «Rozas», ni la palabra «RUT», ni «razón social», ni «© 2026». Todo el contenido aprobado aparece tal cual. Ningún texto de la lista «No publicar» aparece.
- [x] Las fotos usan los textos alternativos aprobados, sin rótulos, marca ni modelo. Medido: **10 de 10** sin cambios respecto de 04-02; 0 dígitos y 0 marcas.
- [x] La lista de localidades muestra las cinco en el orden aprobado; la fila de Coñaripe, sin referencia, queda alineada con las demás a 360, 768 y 1280 px. Medido: fila de **53 px** con el nombre en **x = 37 px**, igual que las demás de una línea, en los tres anchos.
- [x] JSON-LD con `areaServed` y `paymentAccepted`, sin `priceRange` ni datos tributarios, y sin valores `PENDIENTE_CLIENTE`. Medido: `areaServed` con **5 localidades y La Araucanía**; `paymentAccepted` con el texto aprobado; el JSON se interpreta sin error.
- [x] `git status` muestra cambios solo en `src/`, `_planificacion/` y `DESIGN.md`. Sigue además `AD src/assets/LogoGruasBurgos.svg`, anterior a la iteración.

**Fase B, vista previa de `pages.dev` (evidencia en `evidencia-05-04-fase-b.md`):**

- [x] El desarrollador revisa en el teléfono real y en escritorio el orden, los servicios, la franja y los medios de pago. Evidencia del 2026-10-06, sobre el commit `2200f9f`: **revisado y conforme** en el orden, las tres anclas, los ocho botones de WhatsApp (abren con el mensaje esperado), la franja (la foto 07 se deja apilada en el teléfono), la galería y los medios de pago; Firefox, igual que Chrome. **Una observación:** pide que las ocho tarjetas de servicios tengan el mismo diseño (ícono, separador y tres características). El desarrollador **no aprueba el merge** hasta aplicar los ajustes.
- [ ] El cliente revisa la vista previa y aprueba los cambios (AUD-08-023). Si pide ajustes, se registran y se aplican en una tanda corta. **Parcial: aprueba** (2026-10-06) y confirma los textos de los servicios nuevos, los medios de pago y la cobertura; pide **cuatro ajustes**, registrados en la bitácora de la fase B y **aplicados después** en la tanda de ajustes. La aprobación del cliente de esos ajustes queda pendiente y se registra en el hito final de la épica (AUD-08-023).
- [x] JSON-LD sin errores en el validador de Schema.org y sin errores críticos en la Prueba de resultados enriquecidos. Evidencia: **0 errores y 0 advertencias** en Schema.org; en Google, **2 elementos válidos** (empresa local y organización) y solo avisos de campos opcionales (`priceRange` y `postalCode`).

No verificado en la fase B: la cabecera `x-robots-tag: noindex` con `curl.exe` (la respuesta entregada es un 404 de la dirección de la rama, no del despliegue probado; el `noindex` consta solo por el aviso de Google), las dos líneas de alcance de «Dónde atendemos» en la vista previa (respuesta en blanco; en `dist/` sí están) y Safari en iPhone.

## Tanda de ajustes del cliente (2026-10-06)

Tras la fase B, el cliente aprobó la vista previa con cuatro ajustes y el desarrollador pidió un quinto. Se implementan en esta misma iteración, antes del merge. **Esta sección prevalece sobre lo anterior en lo que se contradiga**: reemplaza que los servicios nuevos sean compactos y sin características, los límites de alto de Servicios (3.600 y 1.800 px) y la regla de que existen solo tres anclas.

**Autorizado en esta tanda:** `DESIGN.md` §5 (menú, opiniones, medios de pago, tarjetas de servicio) y §6 (íconos nuevos y recursos locales); RDA-007 (opiniones visibles sin acordeón) y RDA-009 (seis anclas); la decisión 14 de `definicion-epica-05.md`.

### Contenido aprobado de la tanda

**Menú (desde 768 px, seis enlaces, en el orden de la página):** «Inicio», «Servicios», «Quiénes somos», «Trabajos en terreno», «Opiniones», «Contacto». Si a 768 px no caben, «Trabajos en terreno» pasa a «Trabajos». **Menos de 768 px:** solo «Inicio», «Servicios» y «Contacto», como hoy. El título de la sección de opiniones no cambia («Lo que dicen nuestros clientes»).

**Banderas:** las de Chile y Argentina, en SVG, en el extremo derecho del menú, con el nombre accesible «Banderas de Chile y Argentina». No son enlaces. Los SVG definitivos son los de la «Segunda pasada» (más abajo), que reemplazan a los dibujados antes: Argentina lleva el Sol de Mayo.

**Opiniones:** se muestran las diez, sin el botón «Ver 4 opiniones más» ni acordeón. Los textos y los nombres no cambian (RDA-007). Se mantiene «Ver más opiniones en Google». El logotipo de Google lleva el nombre accesible «Google» y va junto al título de la sección: desde 768 px, en el extremo derecho de la fila del título, lejos de la bajada; en el celular, debajo del título. Es este SVG entregado por el desarrollador, sin modificar:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="97.53" height="32" viewBox="0 0 512 168"><!-- Icon from SVG Logos by Gil Barbara - https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt --><path fill="#ff302f" d="m496.052 102.672l14.204 9.469c-4.61 6.79-15.636 18.44-34.699 18.44c-23.672 0-41.301-18.315-41.301-41.614c0-24.793 17.816-41.613 39.308-41.613c21.616 0 32.206 17.193 35.633 26.475l1.869 4.735l-55.692 23.049c4.236 8.348 10.84 12.584 20.183 12.584c9.345 0 15.823-4.61 20.495-11.525M452.384 87.66l37.19-15.45c-2.056-5.17-8.16-8.845-15.45-8.845c-9.281 0-22.176 8.223-21.74 24.295"/><path fill="#20b15a" d="M407.407 4.931h17.94v121.85h-17.94z"/><path fill="#3686f7" d="M379.125 50.593h17.318V124.6c0 30.711-18.128 43.357-39.558 43.357c-20.183 0-32.33-13.58-36.878-24.606l15.885-6.604c2.865 6.79 9.78 14.827 20.993 14.827c13.767 0 22.24-8.535 22.24-24.482v-5.98h-.623c-4.112 4.983-11.961 9.468-21.928 9.468c-20.807 0-39.87-18.128-39.87-41.488c0-23.486 19.063-41.8 39.87-41.8c9.905 0 17.816 4.423 21.928 9.282h.623zm1.245 38.499c0-14.702-9.78-25.417-22.239-25.417c-12.584 0-23.174 10.715-23.174 25.417c0 14.514 10.59 25.042 23.174 25.042c12.46.063 22.24-10.528 22.24-25.042"/><path fill="#ff302f" d="M218.216 88.78c0 23.984-18.688 41.613-41.613 41.613c-22.924 0-41.613-17.691-41.613-41.613c0-24.108 18.689-41.675 41.613-41.675c22.925 0 41.613 17.567 41.613 41.675m-18.19 0c0-14.95-10.84-25.23-23.423-25.23S153.18 73.83 153.18 88.78c0 14.826 10.84 25.23 23.423 25.23c12.584 0 23.423-10.404 23.423-25.23"/><path fill="#ffba40" d="M309.105 88.967c0 23.984-18.689 41.613-41.613 41.613c-22.925 0-41.613-17.63-41.613-41.613c0-24.108 18.688-41.613 41.613-41.613c22.924 0 41.613 17.443 41.613 41.613m-18.253 0c0-14.95-10.839-25.23-23.423-25.23s-23.423 10.28-23.423 25.23c0 14.826 10.84 25.23 23.423 25.23c12.646 0 23.423-10.466 23.423-25.23"/><path fill="#3686f7" d="M66.59 112.328c-26.102 0-46.534-21.056-46.534-47.158c0-26.101 20.432-47.157 46.534-47.157c14.079 0 24.357 5.544 31.957 12.646l12.522-12.521C100.479 7.984 86.338.258 66.59.258C30.833.259.744 29.414.744 65.17s30.089 64.912 65.846 64.912c19.312 0 33.889-6.354 45.289-18.19c11.711-11.712 15.324-28.158 15.324-41.489c0-4.174-.498-8.472-1.059-11.649H66.59v17.318h42.423c-1.246 10.84-4.672 18.253-9.718 23.298c-6.105 6.168-15.76 12.958-32.705 12.958"/></svg>
```

**Medios de pago:** el título y los textos no cambian. Cada medio lleva un ícono y su nombre visible: «Efectivo», «Transferencia», «Tarjeta de débito» y «Tarjeta de crédito», y debajo «Emitimos boletas y facturas.». El bloque se destaca del resto de Contacto.

**Tarjetas de servicio:** las ocho con la misma estructura: ícono dentro de un cuadro arriba, línea separadora y exactamente tres características, la última «Disponible 24/7» en todas. Las tres tarjetas originales conservan sus textos. Los textos nuevos:

| Servicio                                      | Característica 1                       | Característica 2                    | Característica 3 |
| :-------------------------------------------- | :------------------------------------- | :---------------------------------- | :--------------- |
| Puente de batería                             | Asistencia en ruta                     | Para vehículos que no parten        | Disponible 24/7  |
| Cambio de neumático                           | Asistencia en ruta                     | Atención en el lugar                | Disponible 24/7  |
| Rescates complejos con camión pluma           | Cuando la plataforma no puede operar   | Levantamiento con camión pluma      | Disponible 24/7  |
| Envío de vehículos a todo Chile y a Argentina | Envíos a todo Chile                    | Envíos a Argentina                  | Disponible 24/7  |
| Traslado de maquinaria liviana                | Minirretroexcavadoras y minicargadores | Montacargas                         | Disponible 24/7  |

### Tareas de la tanda

1. **Menú y banderas.** Seis enlaces desde 768 px y tres bajo 768 px. Los tres enlaces nuevos llevan a su sección con el título visible bajo el header. Las banderas van en el extremo derecho, sin cambiar el alto del header (112 px). RDA-009 se actualiza a seis anclas.
2. **Opiniones.** Las diez visibles, sin acordeón, y con el logotipo de Google junto al título. RDA-007 y `DESIGN.md` §5 se actualizan.
3. **Medios de pago.** Cuatro íconos distintos, uno por medio, del mismo paquete de íconos del sitio (`DESIGN.md` §6), cada uno con su nombre visible.
4. **Tarjetas de servicio.** Las ocho con ícono, separador y tres características. Los cinco íconos nuevos del mismo paquete y coherentes con cada servicio.
5. **Documentación.** `DESIGN.md` §5 y §6 (los íconos nuevos y los recursos locales: banderas y logotipo de Google); decisión 14 de `definicion-epica-05.md` (ajustes del 2026-10-06 y los textos nuevos); bitácora nueva `bitacora-05-04-ajustes-AAAA-MM-DD.md`; fila del registro; y `evidencia-05-04-fase-b-ajustes.md` vacío, para la revisión de lo cambiado.

### Criterios de aceptación de la tanda

**Fase A, local:**

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias. Medido: **0 errores, 0 advertencias y 52 hints** (antes, 52); `pnpm build` con código 0 y sin avisos.
- [x] Menos de 768 px: el menú muestra solo «Inicio», «Servicios» y «Contacto»; los otros tres no existen para el teclado ni el lector de pantalla. Desde 768 px: los seis, sin desborde horizontal a 768, 1024, 1280, 1536 y 1920 px. Medido a 320, 360 y 767 px: **3 enlaces** visibles, 3 con Tab y 3 en el árbol de accesibilidad. A 768, 1024, 1280, 1536 y 1920 px: **6 enlaces**, en una línea cada uno, con **0 px de desborde** en la página, el menú y la lista; a 768 px quedan **26,9 px** entre «Contacto» y las banderas, con «Trabajos en terreno» completo. Igual en el 404.
- [x] El alto del header sigue en 112 px a 320, 360, 768 y 1280 px, y las anclas dejan el título visible bajo él. Medido: **112 px** (64 + 48) en los ocho anchos, de 320 a 1920 px, en la portada y el 404; **44 de 44 clics** del menú con el título visible (360, 768, 1024, 1280 y 1920 px).
- [x] Cada uno de los tres enlaces nuevos lleva a su sección con el título visible, a 768 y 1280 px. Medido: **12 de 12 clics** (ida y vuelta en cada ancho); la sección queda en **111,6–112,2 px**, con el header hasta 112 px, y el título 40 px más abajo.
- [x] Las banderas son visibles sin desborde desde 360 px (a 320 px pueden ocultarse), con su nombre accesible. Medido: a 360 px ocupan **56,9 × 16 px**, de x = 283,1 a 340 px (el borde del contenido), a **23,9 px** de «Contacto» y con 0 px de desborde; visibles también a 767, 768, 1024, 1280, 1536 y 1920 px. A 320 px se ocultan. En el árbol de accesibilidad son **una imagen, «Banderas de Chile y Argentina»**; no son enlaces.
- [x] Las diez opiniones están visibles; no existe `<details>` ni el texto «Ver 4 opiniones más» en `dist/`; los textos de las opiniones no cambiaron. Medido: **10 de 10 visibles** (antes, 6) a 320, 360, 768, 1024, 1280 y 1920 px; **0** `<details>`, **0** `<summary>` y **0** apariciones de «opiniones más» en `dist/`; autor, texto, fecha, estrellas, enlace y orden **iguales en las 10** (50 campos comparados con la versión anterior). «Ver más opiniones en Google» sigue: 1.
- [x] El logotipo de Google aparece junto al título de las opiniones con su nombre accesible, a 360 y 1280 px. Medido: a 360 px, **73,1 × 24 px**, bajo el título (que ocupa dos líneas); a 1280 px, **97,5 × 32 px**, a la derecha del título, en la misma línea. Rol de imagen y nombre **«Google»**; fuera del `h2`. Proporción 3,047 (original, 3,048); los seis trazados y sus colores, **idénticos** al SVG entregado.
- [x] Medios de pago: cuatro íconos distintos con su nombre visible; contraste del texto de 4,5:1 o más. Medido: **4 íconos distintos**, cada uno junto a su nombre; contraste del título y de los nombres **12,76:1**, de «Emitimos boletas y facturas.» **9,66:1** y de los íconos sobre su cuadro **7,22:1**. Sin desborde a 320, 360, 768, 1024, 1280 y 1920 px.
- [x] Servicios: ocho tarjetas con la misma estructura (cuadro de ícono, separador y tres características); «Disponible 24/7» aparece en las ocho; los textos coinciden con los aprobados. Alto de la sección de 4.800 px o menos a 360 px y de 2.200 px o menos a 1280 px, sin huecos en la grilla a 360, 768, 1024, 1280 y 1920 px. Medido: **8 de 8** con cuadro de 48 × 48 px, separador de 32 × 2 px y **3 características**, la última «Disponible 24/7»; 8 íconos distintos. Alto: **4.156 px** a 360 px y **1.510 px** a 1280 px (2.280, 1.849 y 1.492 px a 768, 1024 y 1920 px). **0 huecos**: la última fila ocupa 320 de 320, 713 de 713, 969 de 969, 1.225 de 1.225 y 1.240 de 1.240 px. En «Rescate 4x4», «Disponible 24/7» reemplaza a «Servicio en el paso Mamuil Malal» (decisión del desarrollador del 2026-10-06).
- [x] JavaScript de cliente igual a la línea base (960 B). Peso a 360 × 640 px, densidad 1 y 4G: total de 400 KB o menos; HTML más CSS de 50 KB o menos; foto del hero de 150 KB o menos. Medido: **960 B** en la portada y **191 B** en el 404, sin cambios; total **140,9 KB** (antes, 137,4), HTML más CSS **25,7 KB** (antes, 22,2) y foto del hero **19,1 KB**. Página completa: **191,7 KB** (antes, 188,2).
- [x] Primera pantalla a 360 × 640 px con 8 px o más sobre la barra (hoy 17). 0 elementos enfocados cubiertos por elementos fijos con Tab y Mayús + Tab a 320, 360, 768, 1280 y 1536 px. Medido: **17 px**, sin cambios; **0 cubiertos** en 20 recorridos completos (portada y 404) y en 395 paradas más, partiendo de un cuarto, la mitad, tres cuartos y el final de la página. Los botones flotantes siguen ocultándose al llegar al pie.
- [x] `dist/` sin «Yerko» (salvo reseñas y URL de TikTok), sin «Rozas», «RUT», «razón social» ni «© 2026». Medido: «Yerko» **4 veces** en `index.html` (2 reseñas y 2 veces la URL de TikTok) y 1 en `404.html` (URL de TikTok); el resto, **0**.

**Fase B (vista previa):** el desarrollador revisa lo cambiado en el teléfono y en escritorio, en `evidencia-05-04-fase-b-ajustes.md`. Registrada el 2026-10-06 ([bitácora](../../99_bitacora/bitacora-05-04-ajustes-fase-b-2026-10-06.md)), sobre el commit `c1b0eea` (segunda pasada, con las banderas de esquinas redondeadas):

- [x] Vista previa de la rama: despliegue **Success** del commit `c1b0eea`; `curl.exe -sI` contra la dirección del despliegue con **`200 OK` y `x-robots-tag: noindex`** (queda verificado lo que faltaba de la fase B anterior). Un aviso `npm warn EBADENGINE` de `corepack`, sin efecto.
- [x] Menú en el teléfono (Android, Chrome): **tres enlaces**, llevan a su sección con el título visible; el header mide lo mismo que antes.
- [x] Menú en escritorio: **seis enlaces**, los seis llevan a su sección a 768 px y con la ventana completa; caben en una línea a 768 px; a 767 px quedan tres; el foco recorre los seis con el contorno completo.
- [x] Banderas del menú: visibles en el teléfono (24 px) y en escritorio (32 px), se reconocen y se distingue el Sol de Mayo; a 768 px, bien espaciadas. **Tamaño y posición aprobados.** Pedido: esquinas cuadradas en vez de redondeadas (tercera pasada).
- [x] Opiniones: las diez visibles; sin «Ver 4 opiniones más»; sigue «Ver más opiniones en Google»; logotipo de Google debajo del título en el teléfono y en el extremo derecho en escritorio. **Aceptado** que entre unos 520 y 767 px quede al lado del título y que la página sea unos 1.900 px más larga en el teléfono.
- [x] Medios de pago: bloque destacado, cuatro medios con ícono y nombre, «Emitimos boletas y facturas.», sin textos cortados.
- [x] Ocho tarjetas de servicio: misma estructura, «Disponible 24/7» en las ocho, íconos entendibles, cuatro y cuatro en escritorio, WhatsApp abre con el mensaje. Tarjeta de envío con las dos banderas, del mismo alto que su fila; **ubicación aprobada**. **El ícono del camión pluma se mantiene.**
- [x] Primera pantalla del teléfono: etiqueta, título y dos botones completos sobre la barra; las banderas no le quitan espacio.
- [x] Firefox en el PC: **verificado según la §9 de la evidencia** («Sí, verificado»). La §10 del mismo archivo dice que no se hizo una prueba independiente en Firefox: la inconsistencia queda anotada en la bitácora.
- [ ] Banderas con esquinas rectas, vistas en un despliegue. **No verificado en la vista previa:** el cambio es posterior al despliegue revisado y la rama se fusionó sin esa revisión. Se comprueban en producción en la prueba de humo de 05-01.
- [ ] Safari en iPhone. **No verificado:** no hay equipo. Riesgo aceptado; 05-01 lo repite solo si hay un iPhone.

Veredicto del desarrollador en la evidencia: «Sí», condicionado al cambio de las banderas (aplicado en la tercera pasada). La iteración la marca «Terminada» el desarrollador el 2026-10-06.

### Segunda pasada de la tanda (2026-10-06)

Tras revisar la primera pasada, el desarrollador pide estos cambios. **Prevalecen sobre lo anterior en lo que se contradiga.**

**Contenido aprobado de la segunda pasada**

- **Banderas del menú:** reemplazar los SVG de `src/assets/banderas/chile.svg` y `argentina.svg` por los entregados por el desarrollador, **sin modificar** sus trazados, colores ni proporciones (solo se escalan). Son íconos de 32 × 32 con esquinas redondeadas; el de Argentina lleva el Sol de Mayo. Reemplazan los colores y la regla «sin el Sol de Mayo» de la primera pasada.
- **Banderas en la tarjeta «Envío de vehículos a todo Chile y a Argentina»:** las mismas dos banderas, sin texto nuevo. Como decoración (el título ya dice «Chile» y «Argentina»).
- **Logotipo de Google:** desde 768 px, en el extremo derecho de la fila del título de las opiniones (misma fila, centrado con el título), lejos de la bajada «Opiniones publicadas en Google.». Bajo 768 px no cambia: debajo del título.
- **Ícono del camión pluma:** el aplicado hoy se mantiene. Se dejan capturas de **dos alternativas** del mismo paquete de íconos, fuera del repositorio, y su nombre en la bitácora, para que el desarrollador elija. No se deja código de comparación en el repositorio.

**Tareas de la segunda pasada**

1. Banderas nuevas en el menú, de 24 px bajo 768 px y de hasta 32 px desde 768 px, con al menos 12 px de separación del último enlace y sin cambiar el alto del header (112 px). A 320 px pueden ocultarse.
2. Banderas en la tarjeta de envío, sin romper la grilla de Servicios ni la altura uniforme de las tarjetas de su fila.
3. Logotipo de Google al extremo derecho en escritorio.
4. Dos alternativas del ícono del camión pluma, con capturas a 360 y 1280 px.
5. Documentación: `DESIGN.md` §6 (banderas definitivas y su origen), decisión 14 (quitar «sin el Sol de Mayo» y los colores elegidos antes), bitácora nueva `bitacora-05-04-ajustes-2-AAAA-MM-DD.md`, fila del registro y `evidencia-05-04-fase-b-ajustes.md` (agrega las banderas de la tarjeta de envío y la posición del logotipo de Google; sigue vacío).

**Criterios de aceptación de la segunda pasada (fase A)**

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias. Medido: **0 errores, 0 advertencias y 52 hints** (antes, 52); `pnpm build` con código 0 y sin avisos.
- [x] Los dos archivos de banderas son idénticos, trazado por trazado, a los entregados (se compara con los SVG del prompt). El de Argentina contiene el Sol de Mayo. Medido: los archivos se escribieron tal cual desde el encargo; **6 trazados** cada uno, y los atributos `d`, `fill`, `transform` y `opacity` que Chrome tiene en el DOM (menú y tarjeta) son **iguales a los de los archivos**. `argentina.svg` pesa **8.444 B** (los 8,4 KB que anota esta sección) y lleva **1 trazado** del Sol de Mayo (`#edb840`). Salvedad: la única copia de los SVG entregados es el propio encargo, así que no hay una segunda fuente contra la cual comparar.
- [x] Menú: banderas visibles sin desborde horizontal desde 360 px (a 320 px pueden ocultarse); separación de 12 px o más con el último enlace a 360, 768 y 1024 px; header de 112 px a 320, 360, 768 y 1280 px. Medido: **24 × 24 px** a 360, 390 y 767 px y **32 × 32 px** desde 768 px, con **0 px de desborde** en la página y el menú; separación de **28,8 px** a 360 px, **16 px** a 768 px y **271,8 px** a 1024 px; header de **112 px** en los nueve anchos (320 a 1920 px), en la portada y el 404. A 320 px se ocultan.
- [x] Tarjeta de envío: las dos banderas visibles a 360, 768, 1024, 1280 y 1920 px; la grilla de Servicios sin huecos; tarjetas de la misma fila con el mismo alto; ninguna otra tarjeta lleva banderas. Medido: **2 banderas de 32 × 32 px**, arriba a la derecha (a 25 px del borde), en los cinco anchos y también a 320, 390 y 1536 px; alto de la tarjeta **igual al de su fila** (417, 417, 395, 501 y 501 px, los mismos de antes); **0 huecos** (última fila de 320, 713, 969, 1.225 y 1.240 px, todo el ancho); **0** tarjetas más con banderas.
- [x] Logotipo de Google a 768, 1024, 1280 y 1920 px: borde derecho a 2 px o menos del borde derecho del contenedor, en la misma fila del título y centrado con él (4 px o menos de diferencia), sin tocar la bajada. Bajo 768 px, debajo del título, como antes. Medido: **0 px** del borde derecho y **0 px** de diferencia de centro en los cuatro anchos (y a 1536 px); la bajada queda **41 px** más abajo y no se tocan. A 320, 360 y 390 px, **debajo del título**, igual que antes. Bajo 768 px no cambió nada: como antes, cuando el título cabe en una línea con el logotipo (a 767 px, por ejemplo) el logotipo queda a su lado, a 24 px, y no debajo.
- [x] Dos alternativas del ícono del camión pluma capturadas a 360 y 1280 px, con su nombre en la bitácora; el código final conserva el ícono actual. Hecho: **`weight-outline`** y **`construction`**, con 9 capturas fuera del repositorio; `Icono.astro` sigue con `precision-manufacturing-outline` y no quedó código de comparación.
- [x] Toda la tanda (primera y segunda pasada) medida sobre la **compilación final**: menú, anclas, opiniones, medios de pago, servicios, teclado, peso y JavaScript (960 B). Medido: 3 enlaces bajo 768 px y 6 desde 768 px; **44 de 44** clics de anclas con el título visible; **10** opiniones visibles, 0 `<details>` y textos sin cambios; **4** íconos de pago distintos, contraste mínimo 9,66:1; **8 de 8** tarjetas iguales, Servicios de **4.156** y **1.510 px**; **0 cubiertos** en 20 recorridos completos y en 395 paradas más; JavaScript **960 B** y 191 B; primera pantalla con **17 px**.
- [x] Peso a 360 × 640 px, densidad 1 y 4G: total de 400 KB o menos; HTML más CSS de 50 KB o menos (la bandera de Argentina pesa 8,4 KB); foto del hero de 150 KB o menos. Medido: total **148,0 KB** (antes, 140,9); HTML más CSS **32,8 KB** (antes, 25,7); foto del hero **19,1 KB**. Página completa: **198,8 KB** (antes, 191,7). El aumento es HTML: la bandera de Argentina va incrustada dos veces.

### Tercera pasada de la tanda (2026-10-06)

Tras la fase B, el desarrollador pide un único cambio y lo deja como condición para dar por buena la tanda. **Prevalece sobre la segunda pasada** en lo que dice de no modificar los SVG de las banderas.

**Tarea:** las banderas de Chile y Argentina pasan de esquinas redondeadas a **esquinas rectas**, en el relleno, en el contorno translúcido y en el brillo superior. No cambia nada más: colores, franjas, proporción, el rectángulo de la bandera dentro del lienzo de 32 × 32 (de x 1 a 31 y de y 4 a 28), la estrella de Chile, el Sol de Mayo, ni `width`, `height` y `viewBox`. `Header.astro` y `TarjetaServicio.astro` no cambian. El ícono del camión pluma se mantiene.

**Criterios de aceptación de la tercera pasada (fase A)**

- [x] V1. Cada bandera nueva, comparada píxel a píxel con su original a 8× o más: 0 píxeles distintos fuera de las cuatro zonas de esquina (cuadrados de 4 × 4 unidades del lienzo en cada vértice). **Cumple con salvedad.** A 16×: **20 px** distintos en la de Chile y **40 px** en la de Argentina (de 262.144), todos en la cola del brillo original, que baja por el costado hasta y = 9, una unidad más allá de la zona (x de 2 a 2,19 y de 29,81 a 30; y de 8 a 8,69). A 32×: 80 y 160 px, en el mismo lugar. A 8× hay además 2.409 y 2.635 px con diferencias de hasta 19 y 22 niveles, todos a 1 px de los bordes rectos: es el suavizado con que Chrome dibuja los trazados curvos del original a esa escala (a 16× y 32× no aparece). Fuera de eso, 0. **Salvedad aceptada al marcar la iteración como terminada:** la zona de esquina de 4 × 4 unidades del criterio no cubría esa cola del brillo original; se quitó a propósito para que el brillo quedara recto (a 32 px de pantalla mide 0,19 px de ancho).
- [x] V2. En las cuatro esquinas de cada bandera el vértice es un píxel opaco del color de la bandera, y no hay píxeles transparentes dentro del rectángulo. Medido: **4 de 4 vértices opacos** en cada una (en el original, los cuatro transparentes); **0 píxeles no opacos** dentro del rectángulo (antes, 3.712 y 3.720 a 16×) y 0 píxeles con color fuera de él.
- [x] V3. Estrella de Chile y Sol de Mayo idénticos carácter por carácter. Medido: **iguales** (132 y 7.601 caracteres).
- [x] V4. Mismos valores de `fill` y `opacity`. Medido: **iguales** (`#1435a1`, `#c73a29` y `#fff`; `#81acdc`, `#edb840` y `#fff`; `.15` y `.2`).
- [x] V5. `width`, `height` y `viewBox` idénticos. Medido: la etiqueta `<svg>` es **igual** en ambos.
- [x] V6. Menú: banderas de 24 × 24 px a 360, 390 y 767 px y de 32 × 32 px desde 768 px; separación de 12 px o más a 360, 768 y 1024 px; ocultas a 320 px; sin desborde. Medido: **24 × 24** y **32 × 32 px**; **28,8, 16 y 271,8 px**; ocultas a 320 px; **0 px** de desborde. Igual que la línea base.
- [x] V7. Header de 112 px. Medido: **112 px** en los nueve anchos (320 a 1920 px), portada y 404.
- [x] V8. Tarjeta de envío: 2 banderas de 32 × 32 px; mismo alto que la línea base; sin huecos; ninguna otra tarjeta con banderas. Medido: **2 de 32 × 32 px**; **417, 417, 395, 501 y 501 px**; **0 huecos**; **0** tarjetas más.
- [x] V9. JavaScript de 960 B en la portada y 191 B en el 404. Medido: **960 B y 191 B**.
- [x] V10. A 360 × 640 px y 4G: total de 400 KB o menos; HTML más CSS de 50 KB o menos; foto del hero de 150 KB o menos; primera pantalla con 8 px o más. Medido: **147,8 KB** (antes, 148,0); **32,6 KB** (antes, 32,8); **19,1 KB**; **17 px**.
- [x] V11. `pnpm format:check`, `pnpm check` y `pnpm build` limpios. Medido: **0 errores, 0 advertencias y 52 hints**; build con código 0 y sin avisos.
- [x] V12. Hashes y bytes de los dos SVG nuevos; `google.svg` sin cambio. Medido: `chile.svg`, **617 B** (antes, 964); `argentina.svg`, **8.118 B** (antes, 8.444); `google.svg`, **igual** (2.330 B, mismo SHA-256). Los hashes completos están en la bitácora.
- [x] V13. Capturas de las esquinas de las banderas del menú y de la tarjeta de envío a 360 y 1280 px. Hecho: **4 capturas ampliadas** y 12 de contexto, fuera del repositorio.

## Fuera de alcance

- Mapa de cobertura como imagen: 05-05.
- Cualquier capacidad o cifra distinta de «15 toneladas», y «todo tipo de vehículos».
- Fotos del camión de carga y del camión pluma (no hay fotos aprobadas).
- Recargo por urgencia, tarifas, tiempos de respuesta y convenios (no se publican).
- `geo` y `hasMap` del JSON-LD: 05-02, cuando el desarrollador entregue el pin y el enlace del perfil.

## Tareas del desarrollador

1. Enviarle al cliente la vista previa para que apruebe los cambios, y registrar la aprobación (AUD-08-023).
2. Completar `evidencia-05-04-fase-b.md` con la plantilla de `evidencia-04-03-fase-b.md`.
3. Hacer `commit`, `push`, el Pull Request y el merge cuando la iteración quede verificada, y marcarla «Terminada».