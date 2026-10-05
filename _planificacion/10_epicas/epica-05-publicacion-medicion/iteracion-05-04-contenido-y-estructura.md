# Iteración 05-04 · Cambios del cliente: contenido y estructura de la página

- **Épica:** 05 · Ajustes finales, publicación y medición
- **Estado:** Pendiente
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

- Localidades, en este orden: Villarrica (base de operaciones), Pucón, Licán Ray, Coñaripe y Freire. Las referencias de las cuatro existentes no cambian. Coñaripe lleva la referencia de ruta solo si se puede verificar en una fuente oficial; si no, **detenerse y consultar**.
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

- [ ] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias.
- [ ] Orden de la página verificado en el DOM. Las tres anclas llevan a su sección con el título visible bajo el header, a 360, 768 y 1280 px.
- [ ] Ocho servicios con su botón y mensaje; cada mensaje abre `wa.me` con el texto aprobado (se prueba cada enlace).
- [ ] Alturas medidas a 360, 768, 1024, 1280 y 1920 px: Servicios y «Quiénes somos» dentro de los límites de las tareas 2 y 3. Sin huecos en las grillas de Servicios y de la galería.
- [ ] Peso a 360 × 640 px, densidad 1 y 4G: total de 400 KB o menos; HTML más CSS de 50 KB o menos; JavaScript de menos de 1 KB (igual al de 05-03); foto del hero de 150 KB o menos. Se informa también el peso de la página completa con carga diferida.
- [ ] Primera pantalla a 360 × 640 px: etiqueta, `h1` y ambos botones del hero completos con 8 px o más sobre la barra. 0 objetivos táctiles bajo 44 × 44 px. Sin desborde horizontal a 320, 360, 768, 1024 y 1280 px.
- [ ] Recorrido con Tab y Mayús + Tab a 320, 360, 768, 1280 y 1536 px: 0 elementos enfocados cubiertos por elementos fijos.
- [ ] Búsqueda en `dist/`: «15 toneladas» aparece una sola vez; no aparece «Yerko» fuera de las reseñas y de la URL de TikTok, ni «Rozas», ni la palabra «RUT», ni «razón social», ni «© 2026». Todo el contenido aprobado aparece tal cual. Ningún texto de la lista «No publicar» aparece.
- [ ] Las fotos usan los textos alternativos aprobados, sin rótulos, marca ni modelo.
- [ ] JSON-LD con `areaServed` y `paymentAccepted`, sin `priceRange` ni datos tributarios, y sin valores `PENDIENTE_CLIENTE`.
- [ ] `git status` muestra cambios solo en `src/`, `_planificacion/` y `DESIGN.md`.

**Fase B, vista previa de `pages.dev` (evidencia en `evidencia-05-04-fase-b.md`):**

- [ ] El desarrollador revisa en el teléfono real y en escritorio el orden, los servicios, la franja y los medios de pago.
- [ ] El cliente revisa la vista previa y aprueba los cambios (AUD-08-023). Si pide ajustes, se registran y se aplican en una tanda corta.
- [ ] JSON-LD sin errores en el validador de Schema.org y sin errores críticos en la Prueba de resultados enriquecidos.

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
