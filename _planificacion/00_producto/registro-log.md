# Registro de trabajo (registro-log)

**Fuente única de verdad del trabajo pendiente.** Si discrepa con `_planificacion/README.md` o con cualquier otro documento de planificación, prevalece este archivo.

- **Última actualización:** 2026-10-01
- **Iteración activa:** 04-01 · SEO técnico, marca y datos estructurados (en revisión: espera la verificación del desarrollador)
- **Próximo hito:** verificación de 04-01 por el desarrollador (incluye validar el JSON-LD en Schema.org y en la Prueba de resultados enriquecidos) y decisión sobre `sharp` (sección 3), que bloquea 04-02; después, 04-02 y la vista previa de Cloudflare Pages al iniciar 04-03. Sigue pendiente la aprobación del cliente de la Épica 03 (hito «Prototipo»)
- **Entrega tentativa:** 2026-10-18
- **Flujo de ramas vigente:** trabajo directo en `main` mientras Cloudflare Pages no esté conectado; al conectarlo se retoma `iteracion/XX-YY-…`.

---

## 1. Estado de épicas e iteraciones

| Iteración | Nombre                                              | Épica | Estado     | Depende de | Bitácora |
| :-------- | :-------------------------------------------------- | :---- | :--------- | :--------- | :------- |
| 01-01     | Andamiaje del proyecto                              | 01    | Terminada  | —          | [bitacora-01-01-2026-09-30](../99_bitacora/bitacora-01-01-2026-09-30.md) |
| 01-02     | Arquitectura base, layout y datos del negocio       | 01    | Terminada  | 01-01     | [bitacora-01-02-2026-09-30](../99_bitacora/bitacora-01-02-2026-09-30.md) |
| 02-01     | Tokens de diseño, fuentes e íconos                  | 02    | Terminada  | 01-02     | [bitacora-02-01-2026-09-30](../99_bitacora/bitacora-02-01-2026-09-30.md) |
| 02-02     | Componentes base de interfaz                        | 02    | Terminada  | 02-01      | [bitacora-02-02-2026-09-30](../99_bitacora/bitacora-02-02-2026-09-30.md) |
| 02-03     | Header, acciones flotantes y footer                 | 02    | Terminada  | 02-02      | [bitacora-02-03-2026-09-30](../99_bitacora/bitacora-02-03-2026-09-30.md) |
| 03-01     | Sección Inicio: hero y contacto inmediato           | 03    | Terminada  | 02-03      | [bitacora-03-01-2026-09-30](../99_bitacora/bitacora-03-01-2026-09-30.md) |
| 03-02     | Sección Inicio: quiénes somos y reseñas             | 03    | Terminada  | 03-01      | [bitacora-03-02-2026-09-30](../99_bitacora/bitacora-03-02-2026-09-30.md) |
| 03-03     | Sección Servicios y equipamiento                    | 03    | Terminada  | 02-03      | [bitacora-03-03-2026-09-30](../99_bitacora/bitacora-03-03-2026-09-30.md) |
| 03-04     | Sección Contacto, cobertura y formulario            | 03    | Terminada  | 02-03      | [bitacora-03-04-2026-09-30](../99_bitacora/bitacora-03-04-2026-09-30.md) |
| 03-05     | Corrección de la Épica 03 tras la auditoría         | 03    | Terminada  | 03-04      | [bitacora-03-05-2026-10-01](../99_bitacora/bitacora-03-05-2026-10-01.md) |
| 04-01     | SEO técnico, marca y datos estructurados            | 04    | En revisión | 03-05      | [bitacora-04-01-2026-10-01](../99_bitacora/bitacora-04-01-2026-10-01.md) |
| 04-02     | Fotos, galería, rendimiento y cabeceras             | 04    | Pendiente  | 04-01      | —        |
| 04-03     | Vista previa en Cloudflare, accesibilidad y Lighthouse | 04 | Pendiente  | 04-01, 04-02 | —      |
| 05-01     | Publicación en producción                           | 05    | Pendiente  | 04-03      | —        |
| 05-02     | Medición: Web Analytics, Search Console y Google Ads | 05   | Pendiente  | 05-01      | —        |

Nota: la iteración 01-01 la ejecuta el desarrollador de forma manual en WebStorm (creación del proyecto). La bitácora 01-01 puede redactarla el agente a partir del resumen del desarrollador.

## 2. Datos pendientes del cliente

Bloquean contenido real. Mientras falten, se usa `PENDIENTE_CLIENTE` en `src/data/negocio.js`.

| Dato                                                        | Hallazgo    | Necesario para | Estado    |
| :---------------------------------------------------------- | :---------- | :------------- | :-------- |
| Teléfono de llamadas y número de WhatsApp                   | AUD-01-001  | 01-02          | Confirmado |
| Correo de contacto                                          | AUD-01-002  | 01-02          | Confirmado |
| Validación de afirmaciones comerciales                      | AUD-01-003  | 03-01          | Pendiente |
| Ficha de la flota (tipos, capacidades, plataforma)          | AUD-01-004  | 03-03          | Pendiente |
| Localidades de cobertura y tiempos estimados                | AUD-01-005, AUD-01-006 | 03-04 | Parcial: cuatro localidades declaradas y publicadas; tiempos por zona y otras localidades, pendientes |
| Año de inicio de operaciones                                | AUD-01-007  | 03-02          | Pendiente (lo confirma el desarrollador con Yerko; mientras tanto sigue en «No publicar» y no va en el JSON-LD) |
| Confirmación de cuentas de redes sociales                   | AUD-01-008  | 02-03          | Confirmado |
| Razón social, RUT y coordenadas de la base                  | AUD-01-009  | 02-03, 04-01   | Parcial: coordenadas de referencia cargadas en `negocio.js`, sin validar: el desarrollador las valida contra el pin del perfil de Google (tarea del desarrollador de 04-01) y hasta entonces no se publican (el JSON-LD no lleva `geo`); razón social y RUT, pendientes |
| Enlace al perfil de Google Maps y selección de reseñas      | AUD-01-010  | 03-02          | Parcial: 10 reseñas seleccionadas y publicadas; enlace oficial al perfil, pendiente (lo entrega el desarrollador; hasta entonces el JSON-LD no lleva `hasMap`) |
| Fotos reales (flota, operaciones, base) y logo si existe    | AUD-01-011  | 03-01, 04-01, 04-02 | Parcial: isotipo y 10 fotos de operaciones entregados el 2026-10-01 y guardados en `src/assets/marca/` y `src/assets/fotos/` (04-01); las fotos se publican en 04-02 (RDA-011, por registrar). Originales sin procesar, pendientes |
| Textos del negocio (punto 2 de "Qué necesito de usted" en la propuesta) | — | 03-01 a 03-04 | Pendiente |
| Aceptación de publicar reseñas que mencionan tiempos y precio («alrededor de 30min», «tiempo récord», «precio») | — | 03-05 | Pendiente |

## 3. Decisiones por tomar

| Tema                                               | RDA      | Responsable            |
| :------------------------------------------------- | :------- | :--------------------- |
| Medición de conversiones de Google Ads en el sitio | RDA-010  | Desarrollador          |
| Aprobación del cliente de la Épica 03 (hito Prototipo) | —    | Desarrollador          |
| Alinear `AGENTS.md` §6.4 y `DESIGN.md` §5 con la decisión D3 (nombre completo del autor) | RDA-007 (AUD-08-032) | Desarrollador |
| Cómo dar `sharp` al servicio de imágenes de Astro (dependencia directa o `publicHoistPattern` en `pnpm-workspace.yaml`): hoy `getImage`, `<Image />` y `<Picture />` hacen fallar `pnpm build` con `MissingSharp`. Bloquea 04-02 (ver bitácora 04-01) | Requiere RDA si se agrega la dependencia | Desarrollador |

## 4. Propuestas fuera de alcance

Ideas detectadas durante el trabajo que no forman parte de lo contratado. Se cotizan aparte si el cliente las quiere.

| Propuesta | Origen | Fecha |
| :-------- | :----- | :---- |
| —         | —      | —     |

## 5. Historial de cambios del registro

| Fecha      | Cambio                                               |
| :--------- | :--------------------------------------------------- |
| 2026-09-29 | Creación del registro, 5 épicas y 14 iteraciones.    |
| 2026-09-30 | Iteración 01-01 en revisión; bitácora agregada. PNPM 12.8.1 fijado en `devEngines.packageManager` (sin Corepack). |
| 2026-09-30 | Auditoría 02 registrada y corregida (número del prototipo enmascarado, `PNPM_VERSION=12.8.1` documentado para Cloudflare Pages, criterios de 01-01 corregidos, `README.md` y `.gitignore` ajustados). 01-01 terminada; 01-02 en revisión: `negocio.js`, `LayoutBase`, `CabeceraSEO`, 404 e `index` con tres secciones; teléfono, WhatsApp y correo confirmados. Trabajo directo en `main`. |
| 2026-09-30 | Auditoría 03 registrada; AUD-02-001 cerrado como riesgo aceptado (repositorio público); licencia MIT adoptada (LICENSE, `license` en package.json y README §9); tarea 3 de 01-02 actualizada; 01-02 terminada tras auditoría. Primera tarea ejecutada con Antigravity. |
| 2026-09-30 | Iteración 02-01 en revisión: tokens de `DESIGN.md`, Fonts API (fontsource), `astro-icon` con `Icono.astro` y página de desarrollo `[muestrario].astro`. Auditoría 04 registrada. AUD-03-006 cerrado. Convención de commits actualizada a «Épica N - Iteración NN-NN: descripción». |
| 2026-09-30 | Iteración 02-01 terminada tras la verificación del desarrollador en `/muestrario`. `.gitattributes` adoptado (AUD-04-005 resuelto); convención de commits alineada en `_planificacion/README.md`; estructura de `README.md` §5 actualizada. |
| 2026-09-30 | Iteración 02-02 en revisión: siete componentes base en `src/components/`, muestrario ampliado y verificaciones automáticas superadas. |
| 2026-09-30 | Iteración 02-03 terminada: Header persistente con nav activo (IntersectionObserver), AccionesFlotantes (móvil y desktop) y Footer accesible con redes oficiales; Épica 02 cerrada con éxito. |
| 2026-09-30 | Auditoría 06 de la Épica 02 (informe de Claude Code en `epica-02-sistema-diseno/auditoria-epica.md`): la estructura persistente no estaba integrada en `LayoutBase` y el footer publicaba datos no confirmados. La fila anterior «Épica 02 cerrada con éxito» queda sin efecto. |
| 2026-09-30 | Corrección de la Épica 02: `Header`, `Footer` y `AccionesFlotantes` integrados en `LayoutBase` (commit `15c03d2`); footer solo con datos respaldados; tres anclas según RDA-009; estados y criterios de 02-02, 02-03 y de la épica corregidos; bitácora `bitacora-02-03-correccion-2026-09-30`. Épica 02 terminada tras la verificación en navegador. |
| 2026-09-30 | Épica 02: el desarrollador confirmó las tres verificaciones manuales pendientes (pestaña Red sin dominios de terceros, revisión en un teléfono real a 360 px y WebStorm con separador LF). |
| 2026-09-30 | Iteración 03-01 terminada: Hero de alta conversión con CTA dual, TarjetaDespacho (escritorio), CintaMetricas verificadas, negocio.js refactorizado con coordenadas y localidadesTexto, y 404.astro saneado con tokens. |
| 2026-09-30 | Iteración 03-02 terminada: Quiénes somos (Yerko Burgos, plataforma hidráulica y winche), 10 reseñas de Google con acordeón accesible nativo sin JS, y RDA-007 actualizada. |
| 2026-09-30 | Iteración 03-03 terminada: Sección Servicios con 3 tarjetas y mensajes específicos a WhatsApp, nota de traslados a otras ciudades y BloqueEquipamiento con chips; AUD-06-001 registrado como deuda técnica. |
| 2026-09-30 | Iteración 03-04 y Épica 03 terminadas: Sección Contacto completa con CanalDirecto, ListaCobertura, MapaEsquematico SVG nativo, AvisoSeguridad, FormularioCotizacion (RDA-006) y CintaLlamada; AUD-06-002 registrado como deuda técnica. |
| 2026-10-01 | Auditoría de la Épica 03 (informe de Claude Code en `epica-03-contenido-secciones/auditoria-epica.md`, commit `5c31568`): veredicto INCOMPLETA, 31 hallazgos, 7 de severidad Alta. Registrada como Auditoría 08 (AUD-08-001 a AUD-08-032). Las cuatro filas anteriores que dan por terminadas 03-01 a 03-04 y la Épica 03 quedan sin efecto: pasan a «En revisión». |
| 2026-10-01 | Renumeración en `auditoria-tecnica.md`: la segunda sección «Auditoría 06 · Deuda técnica de la iteración 03-03» pasa a ser la Auditoría 07. Los «AUD-06-001» y «AUD-06-002» que citan las dos filas de 03-03 y 03-04 de este historial, las bitácoras 03-03 y 03-04 y los commits `a811d86` y `5c31568` corresponden ahora a AUD-07-001 y AUD-07-002. |
| 2026-10-01 | Iteración 03-05 en revisión: corrección de la Épica 03 (404, tokens de espaciado, textos no aprobados, formulario validado por el navegador y con el número desde `negocio.js`, objetivos táctiles, foco, mapa legible en móvil y `pnpm check` en 0 errores) y documentación corregida. Pendiente: verificación del desarrollador y aprobación del cliente. |
| 2026-10-01 | Iteraciones 03-01 a 03-05 terminadas: verificadas por el desarrollador el 2026-10-01 (commit `d6121eb`). La Épica 03 sigue «En revisión» hasta registrar la aprobación del cliente (AUD-08-023). Las casillas sin evidencia de 03-01 y 03-04 siguen sin marcar y se comprueban en 04-03. |
| 2026-10-01 | Aprobaciones del desarrollador sobre los pendientes de 03-05 (decisión 6 de `definicion-epica-04.md`): se aprueba el `aria-label` «Métricas destacadas del servicio»; se mantiene el mensaje genérico del navegador para el teléfono con letras; se acepta la etiqueta del hero sin cápsula ni punto; la sombra de 1 px de la barra móvil pasa a borde (hecho en 04-01). |
| 2026-10-01 | Épica 04 replanificada por el desarrollador (nuevos nombres y dependencias de 04-01, 04-02 y 04-03). Material del cliente recibido: isotipo y 10 fotos de operaciones. |
| 2026-10-01 | Iteración 04-01 en revisión: metadatos, Open Graph, Twitter Card, favicon, imagen de vista previa de 1200 × 630 px, JSON-LD del negocio sin `geo` ni `hasMap`, `robots.txt`, sitemap verificado, isotipo en el header (edición autorizada de `DESIGN.md` §6) y borde en la barra móvil. Hallazgo: Astro no encuentra `sharp` en este proyecto; bloquea 04-02 hasta que el desarrollador decida. Pendiente: verificación del desarrollador y validación del JSON-LD. |
