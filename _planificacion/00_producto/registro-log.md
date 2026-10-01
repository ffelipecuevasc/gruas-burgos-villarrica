# Registro de trabajo (registro-log)

**Fuente única de verdad del trabajo pendiente.** Si discrepa con `_planificacion/README.md` o con cualquier otro documento de planificación, prevalece este archivo.

- **Última actualización:** 2026-09-30
- **Iteración activa:** — (siguiente: Épica 03 · Secciones de contenido y alta conversión)
- **Próximo hito:** prototipo navegable en vista previa de Cloudflare Pages
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
| 03-01     | Sección Inicio: hero y contacto inmediato           | 03    | Pendiente  | 02-03      | —        |
| 03-02     | Sección Inicio: quiénes somos y reseñas             | 03    | Pendiente  | 03-01      | —        |
| 03-03     | Sección Servicios y equipamiento                    | 03    | Pendiente  | 02-03      | —        |
| 03-04     | Sección Contacto, cobertura y formulario            | 03    | Pendiente  | 02-03      | —        |
| 04-01     | SEO técnico y datos estructurados                   | 04    | Pendiente  | 03-04      | —        |
| 04-02     | Imágenes y presupuesto de rendimiento               | 04    | Pendiente  | 03-04      | —        |
| 04-03     | Auditoría de accesibilidad y Lighthouse             | 04    | Pendiente  | 04-01, 04-02 | —      |
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
| Localidades de cobertura y tiempos estimados                | AUD-01-005, AUD-01-006 | 03-04 | Pendiente |
| Año de inicio de operaciones                                | AUD-01-007  | 03-02          | Pendiente |
| Confirmación de cuentas de redes sociales                   | AUD-01-008  | 02-03          | Confirmado |
| Razón social, RUT y coordenadas de la base                  | AUD-01-009  | 02-03, 04-01   | Pendiente |
| Enlace al perfil de Google Maps y selección de reseñas      | AUD-01-010  | 03-02          | Pendiente |
| Fotos reales (flota, operaciones, base) y logo si existe    | AUD-01-011  | 03-01          | Pendiente |
| Textos del negocio (punto 2 de "Qué necesito de usted" en la propuesta) | — | 03-01 a 03-04 | Pendiente |

## 3. Decisiones por tomar

| Tema                                               | RDA      | Responsable            |
| :------------------------------------------------- | :------- | :--------------------- |
| Formulario de cotización vía WhatsApp              | RDA-006  | Desarrollador y cliente |
| Medición de conversiones de Google Ads en el sitio | RDA-010  | Desarrollador          |

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
