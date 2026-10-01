# Auditoría técnica

Registro acumulativo de auditorías. Las auditorías se agregan al final; no se borran. Un hallazgo se marca como resuelto indicando la iteración o la RDA que lo cerró (por ejemplo, `Resuelto en 02-01` o `Resuelto en RDA-004`).

**Severidad:** Alta (bloquea publicación o afecta al usuario/negocio), Media (afecta calidad o rendimiento), Baja (mejora).

---

## Auditoría 01 · Insumos iniciales del proyecto

- **Fecha:** 2026-09-29
- **Auditor:** Claude (asistente de planificación)
- **Alcance:** `index-prototipo.html`, propuesta comercial firmada (2 páginas) y `rrss-gruas-burgos.txt`.

### Resumen

El prototipo define bien la dirección visual (oscuro, naranja de alta visibilidad, tipografía condensada) y la jerarquía de contacto. Sin embargo, es un prototipo generado para mostrar el estilo: depende de recursos de terceros, contiene datos de relleno presentados como reales y afirmaciones comerciales sin respaldo, y tiene problemas de contraste. Debe tratarse como referencia visual, no como código base.

### A. Contenido y datos del negocio

| ID         | Severidad | Hallazgo                                                                                                                                                                                                 | Acción recomendada                                                                              | Estado  |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- | :------ |
| AUD-01-001 | Alta      | El teléfono `+56 9 9283 XXXX` se repite en todo el prototipo y no está confirmado como número real del cliente.                                                                                          | Confirmar número de llamada y de WhatsApp (pueden ser distintos). Centralizar en `negocio.js`. | Resuelto en 01-02 |
| AUD-01-002 | Alta      | El correo `contacto@gruasburgos.cl` usa un dominio distinto de `gruasvillarrica.cl` y no consta que exista.                                                                                              | Confirmar correo real o crear uno en el dominio contratado.                                    | Resuelto en 01-02 |
| AUD-01-003 | Alta      | Afirmaciones sin respaldo: "25 min tiempo promedio garantizado", "100 % seguro de carga", "0 daños", "tiempo de respuesta récord", "espera menor a 30 segundos", "respuesta en menos de 5 minutos con valor cerrado", "seguimiento GPS", "facturación inmediata", "operador certificado", "balizas homologadas MOP". | Validar cada una con el cliente. Eliminar o reformular las no respaldables para evitar publicidad engañosa (Ley 19.496 del Consumidor). | Resuelto parcialmente en 03-01 (Hero y Cinta de métricas usan exclusivamente contenido verificado; sin afirmaciones del prototipo) |
| AUD-01-004 | Alta      | Especificaciones técnicas inconsistentes: winche de "12.000 lbs" (≈ 5,4 t) en un texto y "6 TON" en otro; "hasta 4.5 TON"; "plataforma 6.5 metros"; mención de "grúas pluma" y maquinaria (Bobcat, miniexcavadora). | Obtener ficha real de la flota: cantidad de grúas, tipo, capacidad y largo de plataforma.        | Abierto |
| AUD-01-005 | Alta      | Tiempos de cobertura por zona (15–20, 20–30, 30–40, 35 min, "Villarrica–Temuco en 60 min") sin respaldo.                                                                                                 | Confirmar zonas y rangos, o mostrar solo localidades sin tiempos.                               | Abierto |
| AUD-01-006 | Media     | Cobertura del prototipo (Curarrehue, pasos fronterizos, aeropuerto, Concepción, Santiago) no coincide del todo con la del brief (Villarrica, Pucón, Loncoche, Temuco, Freire, Santiago, Puerto Montt). | Acordar lista definitiva de localidades y traslados de larga distancia.                         | Abierto |
| AUD-01-007 | Media     | "+5 años de trayectoria" aparece en el brief y en el prototipo, pero no hay un año de inicio documentado que lo respalde.                                                                                                     | Confirmar año de inicio de operaciones.                                                         | Resuelto parcialmente en 03-02 (Quiénes somos publicado sin año de inicio ni cifras no confirmadas) |
| AUD-01-008 | Media     | El usuario de TikTok es `yerko.gruas.burgo` (sin "s" final), distinto del nombre de marca.                                                                                                               | Confirmar que es la cuenta correcta.                                                            | Resuelto el 2026-09-30 (cuenta de TikTok confirmada por el cliente según informó el desarrollador; medio de confirmación no registrado) |
| AUD-01-009 | Media     | Faltan datos de facturación para el footer (razón social, RUT) y coordenadas exactas de la base para el JSON-LD.                                                                                        | Solicitar al cliente.                                                                           | Abierto |
| AUD-01-010 | Media     | No hay reseñas reales incorporadas; el brief exige prueba social de Google Maps.                                                                                                                          | Obtener enlace al perfil de Google Maps y seleccionar reseñas con el cliente (RDA-007).        | Resuelto parcialmente en 03-02 (10 reseñas reales con enlace provisional de búsqueda en Google Maps; pendiente enlace oficial al perfil) |
| AUD-01-011 | Alta      | Las imágenes son de `lh3.googleusercontent.com/aida-public/…` (generadas para el prototipo, no del cliente).                                                                                            | Reemplazar por fotos reales del cliente, optimizadas localmente.                               | Resuelto parcialmente en 03-01 (Hero usa textura CSS sin imágenes del prototipo; preparado para foto real con Picture) |

### B. Alcance

| ID         | Severidad | Hallazgo                                                                                                                                                                   | Acción recomendada                                                        | Estado                |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :-------------------- |
| AUD-01-012 | Media     | La propuesta contrata 3 secciones; el brief pide 6 bloques (hero, servicios, cobertura, testimonios, contacto, footer). Las secciones adicionales se cotizan aparte.      | Integrar los bloques dentro de las 3 secciones contratadas.               | Resuelto en RDA-009   |
| AUD-01-013 | Media     | El formulario de cotización del prototipo no envía nada (`alert()`), y la propuesta no incluye backend.                                                                   | Formulario que compone un mensaje de WhatsApp.                            | Abierto (RDA-006 propuesta) |
| AUD-01-014 | Baja      | El pie dice "© 2025".                                                                                                                                                      | Año dinámico en compilación.                                              | Resuelto en 01-02     |

### C. Rendimiento

| ID         | Severidad | Hallazgo                                                                                                     | Acción recomendada                                  | Estado              |
| :--------- | :-------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- | :------------------ |
| AUD-01-015 | Alta      | Tailwind se carga desde `cdn.tailwindcss.com` (compilador JIT en el navegador, no apto para producción).     | Tailwind 4 compilado con Vite.                      | Resuelto en RDA-002 |
| AUD-01-016 | Alta      | Tres hojas de Google Fonts remotas, dos de ellas de Material Symbols (una duplicada).                        | Fuentes autoalojadas e íconos SVG.                  | Resuelto en 02-01 (RDA-004 y RDA-005) |
| AUD-01-017 | Media     | La imagen del hero se carga como `<img>` sin dimensiones, formato moderno ni prioridad; el mapa es un `background-image` remoto. | `<Picture />` con AVIF/WebP, dimensiones y prioridad. | Resuelto parcialmente en 03-01 (Hero estructurado para LCP óptimo con h1 y preparado para Picture) |

### D. Accesibilidad

| ID         | Severidad | Hallazgo                                                                                                                         | Acción recomendada                                                            | Estado  |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- | :------ |
| AUD-01-018 | Alta      | Texto `#5d1800` sobre naranja `#ff5715` tiene contraste 4,15:1 (falla AA en texto normal) y se usa en botones y en la tarjeta de despacho. | Texto `#0e0e0e` sobre naranja (6,09:1). Definido en `DESIGN.md`.             | Resuelto en 02-02 |
| AUD-01-019 | Media     | Placeholder `#474746` sobre `#0e0e0e`: contraste 2,08:1.                                                                         | Usar `#8f8d8c` (5,84:1).                                                     | Abierto |
| AUD-01-020 | Media     | Texto escrito directamente en mayúsculas en el HTML; los lectores de pantalla pueden deletrearlo.                                | Texto en formato oración con `uppercase` en CSS.                             | Resuelto en 02-02 |
| AUD-01-021 | Media     | `::-webkit-scrollbar { display: none }` oculta la barra de desplazamiento; animaciones `ping` y `pulse` sin `prefers-reduced-motion`. | Eliminar la regla y respetar movimiento reducido.                          | Resuelto en 02-01 |
| AUD-01-022 | Media     | Etiquetas `<label>` del formulario no están asociadas a sus campos (`for`/`id`).                                                 | Asociar etiquetas y agregar `autocomplete`.                                  | Abierto |
| AUD-01-023 | Media     | En móvil el teléfono del header se oculta (`hidden xl:flex`) y la navegación de tres enlaces no tiene tratamiento móvil.         | Botón de llamada visible en header móvil y barra inferior de acciones.       | Resuelto en 02-03 (botón de llamada en el header móvil y barra fija inferior, ya integrados en `LayoutBase`; verificado en navegador a 360×640) |
| AUD-01-024 | Baja      | Íconos de fuente sin `aria-hidden`; el nombre del ícono se lee como texto.                                                       | Resuelto al pasar a SVG con `aria-hidden`.                                   | Resuelto en 02-01 (RDA-005) |

### E. SEO y estructura

| ID         | Severidad | Hallazgo                                                                                                            | Acción recomendada                                                           | Estado  |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------- | :------ |
| AUD-01-025 | Alta      | Sin `<title>`, meta descripción, canonical, Open Graph ni JSON-LD.                                                  | Componente de cabecera SEO y datos estructurados.                            | Abierto |
| AUD-01-026 | Media     | `lang="es"` en lugar de `es-CL`; clase `dark` sin uso real (el sitio es solo oscuro).                               | `lang="es-CL"` y `color-scheme: dark`.                                       | Resuelto en 01-02 |
| AUD-01-027 | Baja      | Elementos residuales del prototipo: círculo naranja vacío en el header, `div` vacío tras el texto de Quiénes somos, franja "hazard" con textos de relleno. | Eliminar o reemplazar con contenido real.                           | Resuelto en 03-01 (eliminado el div vacío y la franja hazard del hero anterior) |

---

## Auditoría 02 · Revisión del andamiaje 01-01

- **Fecha:** 2026-09-30
- **Auditor:** Claude (asistente de planificación)
- **Alcance:** rama `main` tras el commit `24fc78f` (estructura, `AGENTS.md`, `DESIGN.md`, `_planificacion/`, `.claude/settings.json`, `package.json`, `.gitignore`).

### Resumen

`pnpm install`, `format:check`, `check` y `build` pasan con PNPM 12.8.1; sin hallazgos de severidad Alta.

### Hallazgos

| ID         | Severidad | Área          | Hallazgo                                                                                                                                                                                  | Acción recomendada                                                                   | Estado                                                                                                             |
| :--------- | :-------- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| AUD-02-001 | Media     | Privacidad    | El teléfono `+56 9 9283 XXXX` del prototipo (origen desconocido) estuvo versionado completo en un repositorio público, y `README.md` §9 declara uso privado.                               | Enmascarar el número; el repositorio permanece público por decisión del desarrollador y no se reescribe el historial (riesgo aceptado). | Resuelto el 2026-09-30 (riesgo aceptado: el número sigue en el historial de Git) |
| AUD-02-002 | Media     | Publicación   | Cloudflare Pages usa PNPM 10.11.1 por defecto y no consta que respete `devEngines.packageManager`; el hito de vista previa llega antes de 05-01.                                           | Documentar `PNPM_VERSION=12.8.1` como paso obligatorio al conectar Cloudflare.       | Resuelto el 2026-09-30                                                                                             |
| AUD-02-003 | Baja      | Estructura    | `public/`, `src/assets/`, `src/components/`, `src/data/` y `src/layouts/` no existen (Git no versiona carpetas vacías); un `.gitkeep` dentro de `public/` se copia a `dist/`.              | Crear las carpetas con archivos reales en 01-02; no crear `public/` vacío.           | Resuelto en 01-02                                                                                                  |
| AUD-02-004 | Baja      | Documentación | El criterio de 01-01 exige `packageManager` (el proyecto usa `devEngines.packageManager`) y sus casillas están sin marcar aunque la bitácora las da por cumplidas.                       | Corregir la redacción y marcar las casillas.                                         | Resuelto el 2026-09-30                                                                                             |
| AUD-02-005 | Baja      | Documentación | `README.md` no lista PNPM como requisito previo y llama «Sitio en producción» a un sitio no publicado.                                                                                    | Agregar PNPM a los requisitos y ajustar el rótulo.                                   | Resuelto el 2026-09-30                                                                                             |
| AUD-02-006 | Baja      | Configuración | `.gitignore` repite cinco reglas `.idea/...` que `.idea/` ya cubre.                                                                                                                       | Eliminar las redundantes.                                                            | Resuelto el 2026-09-30                                                                                             |
| AUD-02-007 | Baja      | Configuración | `.claude/settings.json` no permite `pnpm format:check` y no bloquea `npx wrangler` ni `pnpm exec wrangler`, prohibidos en `AGENTS.md` §5.                                                 | Edición manual del desarrollador (`.claude/` está vedado a agentes).                 | Resuelto el 2026-09-30 (edición manual del desarrollador)                                                          |

---

## Auditoría 03 · Revisión de 01-02 e incorporación de Antigravity

- **Fecha:** 2026-09-30
- **Auditor:** Claude (asistente de planificación)
- **Alcance:** informe de Claude Code de la iteración 01-02 y configuración de Antigravity como agente en WebStorm.

### Resumen

Sin hallazgos de severidad Alta. 01-02 cumple los criterios informados; quedan observaciones menores y la verificación de permisos de Antigravity.

### Hallazgos

| ID | Severidad | Área | Hallazgo | Acción recomendada | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| AUD-03-001 | Baja | Calidad | `pnpm check` pasó de 0 a 4 sugerencias que, según el informe de Claude Code, proponen convertir el JSDoc de `Props` a tipos de TypeScript. | No aplicar: AGENTS.md §3 prohíbe TypeScript en el código de la aplicación. Reevaluar si las sugerencias aumentan. | Abierto (18 hints tras la corrección de 02-03; decisión del desarrollador: mantenerlos visibles, ver AUD-05-002) |
| AUD-03-002 | Baja | Estructura | `#inicio` incluye un `h2` provisional "Quiénes somos" sin contenido, que anticipa el bloque de 03-02 (RDA-009). | Completar o retirar en 03-02 y verificar la jerarquía h1 → h2 en el HTML generado. | Abierto |
| AUD-03-003 | Baja | Documentación | La tarea 3 de 01-02 listaba como confirmados solo nombre, dirección, dominio y redes, aunque el contacto ya estaba confirmado. | Actualizar la tarea 3 y la sección de datos requeridos. | Resuelto el 2026-09-30 |
| AUD-03-004 | Media | Privacidad | AUD-02-001 quedó pendiente de repositorio privado, pero el desarrollador decidió mantener el repositorio público. | Cerrar AUD-02-001 como riesgo aceptado; no reescribir historial. | Resuelto el 2026-09-30 |
| AUD-03-005 | Baja | Documentación | README §9 declaraba "uso privado", incompatible con un repositorio público, y el repositorio no tenía archivo LICENSE. | Adoptar licencia MIT para el código: archivo LICENSE, campo `license` en package.json y README §9 con reserva de marca y contenido del cliente. | Resuelto el 2026-09-30 |
| AUD-03-006 | Media | Gobernanza de agentes | `.claude/settings.json` solo rige a Claude Code. Con Antigravity, las prohibiciones de AGENTS.md §5 (commit, push, merge, despliegue, editar .claude/) dependen de que el agente las lea y del modo de operación del IDE. La prueba de permisos del 2026-09-30 (git status, git commit --dry-run y git push --dry-run) pidió aprobación al desarrollador en el IDE antes de ejecutarse; el agente no ve esa solicitud. | Elegir en el IDE un modo que pida aprobación para editar y ejecutar comandos, hacer la prueba de permisos (git commit --dry-run y git push --dry-run) y revisar cada comando antes de aprobar. | Resuelto el 2026-09-30 (verificado: el IDE pidió aprobación para cada comando de la prueba de permisos y para editar README.md, package.json y crear LICENSE). Condición: no activar aprobación automática ni listas de comandos permitidos que incluyan git |

---

## Auditoría 04 · Preparación de la iteración 02-01

- **Fecha:** 2026-09-30
- **Auditor:** Claude (asistente de planificación)
- **Alcance:** pruebas de astro-icon, Fonts API y tokens de DESIGN.md en una copia temporal con Astro 7.3.5 y PNPM 12.8.1.

### Resumen

Los tokens, astro-icon y la Fonts API funcionan con Astro 7. Se detectaron cinco ajustes respecto del plan original de 02-01.

### Hallazgos

| ID | Severidad | Área | Hallazgo | Acción recomendada | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| AUD-04-001 | Baja | Estructura | La tarea 5 de 02-01 proponía `src/pages/_muestrario.astro`, pero Astro no enruta archivos con prefijo `_` ni en desarrollo (probado: responde 404). | Usar `src/pages/[muestrario].astro` con `getStaticPaths` que devuelve datos solo en desarrollo, de modo que `pnpm build` no lo genera. | Resuelto en 02-01 |
| AUD-04-002 | Media | Compilación | `astro-icon` emite una advertencia en `pnpm build` si no existe `src/icons/` (probado con astro-icon 1.2.0). | Crear `src/icons/` con un `.gitkeep`. | Resuelto en 02-01 |
| AUD-04-003 | Media | Fuentes | Si el proveedor de la Fonts API no puede descargar las fuentes, `pnpm build` termina con éxito y solo avisa ("No data found for font family"): el sitio saldría sin fuentes propias. Probado en un entorno sin acceso al proveedor; en la máquina del desarrollador la descarga funcionó (6 archivos .woff2). | Exigir en cada compilación que no aparezcan esos avisos y que existan los .woff2 en `dist/`; revisar el registro de compilación de Cloudflare en 05-01. Si falla de forma recurrente, evaluar `fontProviders.local()` con archivos en el repositorio. | Abierto |
| AUD-04-004 | Baja | Accesibilidad | `astro-icon` no agrega `aria-hidden` por defecto (probado). | Envolver los íconos en `Icono.astro`, que siempre lo agrega. | Resuelto en 02-01 |
| AUD-04-005 | Baja | Configuración | Git en Windows avisa "LF will be replaced by CRLF the next time Git touches it" al ejecutar `git diff`, y el repositorio no define `.gitattributes`: los saltos de línea dependen de la configuración de cada máquina. | Evaluar un `.gitattributes` con `* text=auto eol=lf` y configurar WebStorm con saltos de línea LF; decidirlo con el desarrollador. | Resuelto el 2026-09-30 (.gitattributes con `* text=auto eol=lf`; WebStorm configurado con separador LF por el desarrollador el 2026-09-30) |

---

## Auditoría 05 · Preparación de la iteración 02-02

- **Fecha:** 2026-09-30
- **Auditor:** Claude (asistente de planificación)
- **Alcance:** prueba de los siete componentes base en una copia temporal con Astro 7.3.5 y PNPM 12.8.1, cálculo de contrastes WCAG 2.2 y decisiones del desarrollador.

### Resumen

Los componentes compilan y pasan `astro check` sin errores. Todos los textos cumplen contraste AA; hay una excepción de borde aceptada por el desarrollador.

### Hallazgos

| ID | Severidad | Área | Hallazgo | Acción recomendada | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| AUD-05-001 | Baja | Accesibilidad | El borde del botón «contorno» (`surface-container-highest`, según `DESIGN.md` §5.1) tiene un contraste de 1,51:1 sobre `surface` (1,57:1 sobre `surface-container-lowest`). El texto del botón sí cumple AA (14,98:1), pero el borde es lo único que lo distingue del fondo. | Mantener lo definido en `DESIGN.md` §5.1. Reevaluar con el token `outline` (5,87:1 sobre `surface`) si hay problemas de usabilidad. | Resuelto el 2026-09-30 (riesgo aceptado por el desarrollador) |
| AUD-05-002 | Baja | Calidad | `pnpm check` suma 2 hints por cada componente con JSDoc de `Props` (`AGENTS.md` §7.8): 18 tras 02-02 y en aumento. | Mantenerlos visibles sin cambiar el script `check`. Lo que bloquea son los errores y advertencias; el conteo de hints es solo referencia. | Resuelto el 2026-09-30 (decisión del desarrollador) |
| AUD-05-003 | Baja | Calidad | `astro check` marca el error ts(7053) al indexar un objeto literal con una clave dinámica (por ejemplo `variantes[variante]`) en componentes con JSDoc. | Usar `Map` (`new Map(Object.entries({...}))` y `.get(clave)`), patrón ya usado en `Icono.astro` y `Boton.astro`. | Resuelto en 02-02 |

## Auditoría 06 · Revisión de la Épica 02 y corrección de la estructura persistente

- **Fecha:** 2026-09-30
- **Auditor:** Claude Code (informe completo en `_planificacion/10_epicas/epica-02-sistema-diseno/auditoria-epica.md`) y Claude (asistente de planificación), que verificó esos hallazgos en el código y, tras la corrección, en un navegador real (Chromium) a 360×640, 768×1024 y 1280×800.
- **Alcance:** iteraciones 02-01, 02-02 y 02-03, hasta el commit `b67a438`. La corrección está en el commit `15c03d2`.

### Resumen

El informe declaró la épica INCOMPLETA: `Header`, `Footer` y `AccionesFlotantes` existían pero no estaban integrados en `LayoutBase`, y el footer publicaba datos no confirmados por el cliente. La causa fue doble: la tarea de 02-03 no pedía la integración de forma explícita y los criterios se marcaron como verificados sin medirse en el sitio real. Se corrigió en la iteración 02-03 (ver `bitacora-02-03-correccion-2026-09-30.md`). Los componentes atómicos de 02-01 y 02-02 no tuvieron hallazgos de fondo.

### Hallazgos

| ID | Severidad | Área | Hallazgo | Acción recomendada | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| AUD-06-001 | Alta | Integración | (E2-001) `Header`, `Footer` y `AccionesFlotantes` no estaban en `LayoutBase`; el sitio publicado conservaba el footer provisional. | Integrarlos en `LayoutBase` y medir los criterios de 02-03 en el sitio real. | Resuelto en 02-03 (corrección) |
| AUD-06-002 | Alta | Contenido | (E2-002) El footer afirmaba datos no confirmados: «365 días», localidades y traslados «a todo el país», «Boleta y Factura electrónica» y «Convenio con aseguradoras» (AGENTS.md §6.2; AUD-01-003). | Publicar solo datos respaldados; ocultar cobertura y facturación hasta que el cliente las confirme. | Resuelto en 02-03 (corrección) |
| AUD-06-003 | Alta | Datos | (E2-003) Correo y redes escritos en duro en `Footer.astro`; la facturación no se leía de `negocio.js` (RDA-008). | Leer todo de `negocio.js` y ocultar los datos `PENDIENTE_CLIENTE`. | Resuelto en 02-03 (corrección) |
| AUD-06-004 | Media | Auditoría | (E2-004) AUD-01-008 se cerró sin evidencia de confirmación de la cuenta de TikTok. | Registrar la confirmación. | Resuelto el 2026-09-30 (el desarrollador informó que el cliente la confirmó; `negocio.js` actualizado) |
| AUD-06-005 | Media | Auditoría | (E2-005) El texto de cierre de AUD-01-027 no correspondía al hallazgo. | Reescribir el estado como parcial. | Resuelto el 2026-09-30 (AUD-01-027 queda abierto, parcial) |
| AUD-06-006 | Media | Navegación | (E2-006) Ancla `#cobertura` fuera de RDA-009, sin sección asociada. | Tres anclas: Inicio, Servicios y Contacto. | Resuelto en 02-03 (corrección; decisión del desarrollador) |
| AUD-06-007 | Media | Navegación | (E2-007) Los enlaces `#inicio` y similares no llevaban a la portada desde la 404. | Usar `/#inicio`, `/#servicios` y `/#contacto`. | Resuelto en 02-03 (corrección) |
| AUD-06-008 | Media | Tokens | (E2-008) Clases con tokens inexistentes (`space-2xl`, `text-body-xs`) que no generaban CSS. | Usar tokens definidos. | Resuelto en 02-03 (corrección) |
| AUD-06-009 | Baja | Diseño | (E2-009) Botones de la barra móvil de 48 px (DESIGN.md pide 56) y relleno inferior en el footer en vez de `body`. Reclasificado de Media a Baja: el footer no quedaba tapado. | Botones de 56 px y relleno en `body` solo en móvil. | Resuelto en 02-03 (corrección) |
| AUD-06-010 | Media | Accesibilidad | (E2-010) Objetivos táctiles menores de 44 px (redes de 40 px; enlaces de navegación y del footer). | Enlaces y botones de al menos 44 px. | Resuelto en 02-03 (corrección) |
| AUD-06-011 | Baja | Diseño | (E2-011) Radios (`rounded-*`) y `shadow-lg` contra DESIGN.md §4. | Ángulos rectos y sombras xl o 2xl. | Resuelto en 02-03 (corrección) |
| AUD-06-012 | Baja | Accesibilidad | (E2-012) `focus-visible:outline-2` reducía el foco a 2 px (DESIGN.md pide 3). | Usar la regla global de 3 px. | Resuelto en 02-03 (corrección; medido 3 px) |
| AUD-06-013 | Baja | Voz | (E2-013) Nombres de acción no uniformes. | «Llamar ahora» y «Escribir por WhatsApp» como nombres de acción. | Resuelto en 02-03 (corrección; en la barra móvil el texto visible es corto, «Llamar» y «WhatsApp», con nombre accesible «Llamar ahora» y «Escribir por WhatsApp», según WCAG 2.5.3) |
| AUD-06-014 | Baja | Semántica | (E2-014) Footer con `h3` sin `h2`. | Usar `h2`. | Resuelto en 02-03 (corrección) |
| AUD-06-015 | Media | Documentación | (E2-015) Estados, casillas y bitácora de 02-03 incoherentes; el registro decía «Épica 02 cerrada con éxito». | Corregir documentos y registrar la corrección en una bitácora nueva. | Resuelto en 02-03 (corrección) |
| AUD-06-016 | Baja | Proceso | (E2-016) El commit `9378804` describe cambios que no contiene. | Informativo: no se reescribe el historial. | Resuelto el 2026-09-30 (aceptado) |
| AUD-06-017 | Baja | Documentación | (E2-017) Comentario obsoleto en `LayoutBase`, `public/` listado en README sin existir y razón de contraste atribuida a `surface` en AUD-05-001. | Actualizar. | Resuelto en 02-03 (corrección) |
| AUD-06-018 | Baja | Confianza | (Claude) El indicador «Disponible 24/7» quedaba oculto en móvil (`hidden sm:flex`). | Mostrarlo en todos los anchos. | Resuelto en 02-03 (corrección) |
| AUD-06-019 | Baja | Diseño | (Claude) Entre 640 y 767 px se veían a la vez el botón de llamada del header y la barra inferior (puntos de quiebre `sm` y `md`). | Unificar en `md`. | Resuelto en 02-03 (corrección) |
| AUD-06-020 | Baja | Calidad | (Claude) JavaScript de cliente (IntersectionObserver y `astro:page-load`) para un estado activo opcional. | No implementar la tarea opcional; el sitio queda sin JavaScript de cliente (AGENTS.md §7.1). | Resuelto en 02-03 (corrección) |
