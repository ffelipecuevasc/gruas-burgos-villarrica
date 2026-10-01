# Auditoría de la Épica 02 · Sistema de diseño y componentes base

- **Fecha:** 2026-09-30
- **Auditor:** Claude Code (Claude Opus 5.5)
- **Commit auditado:** `b67a4387c6ebb1d777c0251db99f3db8485b4328` (HEAD de `main`, árbol limpio al iniciar)
- **Alcance:** iteraciones 02-01, 02-02 y 02-03; commits `e80c85c`, `3d951d4`, `bc7c435`, `8c82675`, `9378804` y `b67a438` (mapa verificado con `git log`).
- **Método:** lectura completa de las fuentes de verdad y del código de `src/`; ejecución de `pnpm install --frozen-lockfile`, `pnpm format:check`, `pnpm check` y `pnpm build`; inspección de `dist/` con `grep`/`find`; `git show --stat` por commit; cálculo de contrastes WCAG 2.2 con la fórmula de luminancia relativa (script de Node).
- **Limitaciones:** no se usó navegador (no hay Playwright ni Chrome configurado en esta sesión), por lo que las mediciones visuales a 360×640 y 1280×800, la pestaña Red y la altura real del header quedan como «No verificable» (sección 9). No se levantó servidor de desarrollo.

## 1. Veredicto

**INCOMPLETA**

- `Header`, `AccionesFlotantes` y `Footer` existen, pero solo se usan en la página de desarrollo `[muestrario].astro`. `LayoutBase.astro` sigue con el footer provisional de la Épica 01, y el sitio compilado no tiene `<header>`, `<nav>`, `<aside>` ni íconos `<svg>`.
- Por eso no se cumplen, en el sitio real, los criterios de 02-03 que los documentos dan por verificados, ni el primer criterio de término de la épica.
- `Footer.astro` publica afirmaciones comerciales y de cobertura que el cliente no ha confirmado. Además tiene el correo y las URL de redes escritos en duro, fuera de `negocio.js`.
- AUD-01-008 (TikTok) está cerrado sin evidencia, y `negocio.js` todavía dice «por confirmar». El texto de cierre de AUD-01-027 no responde a lo que pedía el hallazgo.
- Lo que sí está bien: los tokens de 02-01, las fuentes, los íconos y los siete componentes de 02-02. Coinciden con `DESIGN.md` y pasan las verificaciones automáticas.

**Hallazgos:** Alta 3 · Media 8 · Baja 6 (total 17).

## 2. Verificaciones técnicas

| Comprobación | Resultado obtenido | Esperado | Veredicto |
| :-- | :-- | :-- | :-- |
| `git status` inicial | limpio | limpio | OK |
| Mapa de commits | coincide con `git log` (6 commits) | según el contexto | OK |
| Formato y largo de mensajes | 1 línea cada uno; 161, 180, 183, 71, 130 y 136 caracteres | ≤ 200, `Épica N - Iteración NN-NN:` | OK (e80c85c mal rotulado, ya conocido) |
| `git ls-files --eol` | todos `i/lf`; solo 3 `.gitkeep` vacíos en `i/none` | LF | OK |
| `.claude/` desde `5599c18` | `git diff --stat 5599c18 HEAD -- .claude/` vacío | sin cambios | OK |
| Dependencias nuevas | solo `astro-icon`, `@iconify-json/material-symbols` y `@iconify-json/simple-icons` (e80c85c, package.json:28-32) | solo las aprobadas | OK |
| Scripts de package.json | sin cambios (`check` = `astro check`) | sin cambios | OK |
| `pnpm-workspace.yaml` | `allowBuilds: esbuild: true`, sin cambios | sin cambios | OK |
| `pnpm install --frozen-lockfile` | «Lockfile is up to date» | OK | OK |
| `pnpm format:check` | «All matched files use Prettier code style!» | OK | OK |
| `pnpm check` | 19 archivos, 0 errores, 0 advertencias, 24 hints | 0 errores y 0 advertencias | OK |
| Hints por archivo | 2 en cada uno: AccionesFlotantes, Boton, BotonLlamada, BotonWhatsApp, CabeceraSEO, Chip, Contenedor, Footer, Header, Icono, TituloSeccion, LayoutBase | informativo | Informativo |
| `pnpm build` | «2 page(s) built», «Copying fonts (6 files)», sin avisos | sin avisos | OK |
| `.woff2` en `dist/` | 6 | 6 | OK |
| `<link rel="preload">` | 2 en `index.html`, 2 en `404.html` | 2 y 2 | OK |
| Muestrario en `dist/` | no existe | no existe | OK |
| Dominios de terceros en `dist/` | 0 archivos con `fonts.googleapis`, `fonts.gstatic` o `cdn.tailwindcss` | 0 | OK |
| Sitemap | `sitemap-0.xml` con solo `https://gruasvillarrica.cl/` | solo la portada | OK |
| h1 único | `index.html`: h1, h2, h2, h2; `404.html`: h1 | 1 h1, sin saltos | OK |
| `lang` | `es-CL` en ambos | `es-CL` | OK |
| Landmarks en `dist/` | solo `<main>` y `<footer>`; **sin `<header>`, `<nav>` ni `<aside>`** | header, nav con aria-label, main, footer | **Falla** (E2-001) |
| IDs duplicados | ninguno | ninguno | OK |
| `target="_blank"` sin `rel` | 0 enlaces `_blank` en `dist/` | ninguno sin rel | OK (nada que evaluar) |
| `<svg>` sin `aria-hidden` | 0 `<svg>` en `dist/` | todos con aria-hidden | OK en código (Icono.astro:40); ningún ícono publicado |
| `PENDIENTE_CLIENTE` en HTML publicado | 0 | 0 | OK |
| `tailwind.config.js`, `CLAUDE.md` | no existen | no existen | OK |
| `console.log`, `TODO`, `FIXME` en `src/` | 0 | 0 | OK |
| Archivos temporales o capturas versionados | ninguno (`git ls-files`) | ninguno | OK |
| Componentes sin uso en el sitio | `Header`, `AccionesFlotantes`, `Footer`, `Boton*`, `Chip`, `Contenedor`, `TituloSeccion`, `IndicadorDisponible`: solo en `[muestrario].astro` | los persistentes, en el layout | Falla para los persistentes (E2-001); los atómicos se usan en la Épica 03 |
| Clases con tokens inexistentes | `pt-space-2xl`, `md:pb-space-2xl` y `text-body-xs`: sin regla en `dist/_astro/*.css` (sí aparece `rounded-sm`) | todas definidas | **Falla** (E2-008) |
| Mediciones con navegador (360×640, 1280×800) | no realizadas | — | No verificable |

## 3. Trazabilidad plan → implementación

### 02-01 · Tokens, fuentes e íconos

| Tarea o criterio | Estado | Evidencia |
| :-- | :-- | :-- |
| T1 `@theme` y `@theme inline` con la escala completa | Cumple | global.css:4-102, las 12 escalas con 4 valores cada una |
| T2 Capa base | Cumple | global.css:104-134 |
| T3 Fonts API (fontsource, pesos, latin) y `<Font />` con precarga 800/400 | Cumple | astro.config.mjs:13-32; LayoutBase.astro:28-35; 2 preload en dist |
| T4 astro-icon, `src/icons/.gitkeep`, `Icono.astro` con aria-hidden | Cumple | package.json:28-32; Icono.astro:40 |
| T5 `[muestrario].astro` solo en dev | Cumple | [muestrario].astro:18; ausente en `dist/` |
| C1 Clases de tokens funcionan (casilla marcada) | Cumple / No verificable visualmente | verificado por el desarrollador según la iteración:24 |
| C2 Sin peticiones a terceros (marcada) | Parcial | sin cadenas en `dist/`; pestaña Red pendiente (conocido) |
| C3 Sin `tailwind.config.js` (marcada) | Cumple | no existe |
| C4 Íconos `<svg>` con aria-hidden (marcada) | Cumple en código | Icono.astro:40 |

### 02-02 · Componentes base

| Tarea o criterio | Estado | Evidencia |
| :-- | :-- | :-- |
| T1 Contenedor `max-w-7xl mx-auto px-gutter` | Cumple | Contenedor.astro:11 |
| T2 Boton: 3 variantes, `<a>`/`<button>`, 48 px, ícono, uppercase | Cumple | Boton.astro:26-49 |
| T3 BotonLlamada y BotonWhatsApp desde negocio.js, externo con `rel` | Cumple | BotonLlamada.astro:15; BotonWhatsApp.astro:16; Boton.astro:37 |
| T4 TituloSeccion: etiqueta, h2 con id, barra 40×3, bajada | Cumple | TituloSeccion.astro:14-19 (`h-[3px] w-10`) |
| T5 IndicadorDisponible con motion-safe | Cumple | IndicadorDisponible.astro:8 |
| T6 Chip | Cumple | Chip.astro:11-18 |
| C1 text-on-accent sobre naranja (marcada) | Cumple | Boton.astro:30; Header.astro:44; AccionesFlotantes.astro:25,62 |
| C2 Foco visible y 48 px (sin marcar) | Parcial | `min-h-12` en Boton.astro:27; foco por global.css:116; revisión visual pendiente. La casilla sigue sin marcar aunque el registro da la iteración por terminada |
| C3 JSDoc de Props (marcada) | Cumple | todos los componentes; IndicadorDisponible no tiene props |
| C4 Muestrario con todas las variantes (sin marcar) | No verificable | secciones presentes en [muestrario].astro:148-200; falta la revisión visual |
| Estado del archivo de la iteración | Inconsistente | iteracion-02-02:4 «En revisión»; registro-log.md:20 «Terminada» |

### 02-03 · Header, acciones flotantes y footer

| Tarea o criterio | Estado | Evidencia |
| :-- | :-- | :-- |
| T1 Header fijo con dos niveles y botón de ícono con `aria-label` | Parcial | Header.astro:17-98 está bien construido, pero no se usa en el sitio (LayoutBase.astro:39-47). La navegación agrega «Cobertura» (Header.astro:81), que no está en la tarea |
| T2 aria-current con IntersectionObserver (opcional) | Cumple en código | Header.astro:100-145; sin efecto porque el header no está en el sitio |
| T3 Barra móvil de 56 px con safe-area y relleno en `body`; flotantes desde `md:` | Parcial | la barra mide 48 px (`h-12`, AccionesFlotantes.astro:25,36); no hay relleno en `body`, se usó `pb-24` en el footer (Footer.astro:19); safe-area sí (:18); `hidden md:flex` bien (:48) |
| T4 Footer con marca, dirección, cobertura, redes, facturación desde negocio.js, año y crédito | Parcial | no usa `negocio.js` para correo, redes ni facturación (Footer.astro:88,106,115,124); la cobertura y los servicios están inventados (:53-56,66-68); año (:14) y crédito (:140-148) bien |
| C1 Llamada visible sin scroll a 360×640 en cualquier posición (marcada) | **No cumple** | en `dist/index.html` no hay header ni barra; solo un botón en #inicio |
| C2 La barra no tapa contenido ni footer (marcada) | No cumple / No verificable | la barra no está en el sitio; el relleno va en el footer, no en `body` |
| C3 Anclajes no quedan bajo el header (marcada) | No verificable | `scroll-padding-top: 7rem` (global.css:109); la altura real del header no está medida |
| C4 Enlaces externos con `rel="noopener noreferrer"` (marcada) | Cumple en código | AccionesFlotantes.astro:35,53; Footer.astro:81,108,117,126,144 |
| Casillas marcadas sin cumplirse en el sitio | Sí | C1 y C2 |

### Criterios de término de la épica (definicion-epica-02.md:21-25)

| Criterio | Estado | Evidencia |
| :-- | :-- | :-- |
| Piezas persistentes como en el prototipo a 360, 768 y 1280 px | No cumple | no están en el sitio (E2-001); no hay registro de revisión visual en ninguna bitácora |
| Sin peticiones a terceros | Cumple (estático) / No verificable (Red) | grep en `dist/` = 0 |
| Contrastes AA en todos los componentes | Cumple para texto | tabla de la sección 4; borde del botón «contorno» aceptado (AUD-05-001) |

## 4. Conformidad con DESIGN.md y AGENTS.md

| Regla | Estado | Evidencia |
| :-- | :-- | :-- |
| Colores §2 (15 tokens) | Cumple | global.css:6-22 = DESIGN.md:186-200 |
| Tipografía §3.1 (12 escalas) | Cumple | global.css:36-94, valor por valor |
| Espaciado §4 (9 tokens) | Cumple | global.css:25-33 |
| `@theme inline` de fuentes | Cumple | global.css:99-102 (display sin «Roboto Condensed», que sí está en astro.config.mjs:21) |
| Capa base (color-scheme, scroll-padding, foco, reduced-motion) | Cumple | global.css:106-133 |
| Fuentes y pesos, precarga solo de 800 y 400 | Cumple | astro.config.mjs:18,27; LayoutBase.astro:30,34 |
| Boton §5.1 | Cumple | Boton.astro:27-34 |
| Foco de 3 px (§5.1) | Parcial | `focus-visible:outline-2` lo reduce a 2 px en Header, AccionesFlotantes y Footer (p. ej. Header.astro:28) (E2-012) |
| Ángulos rectos (§4) | No cumple | `rounded-sm` y `rounded-full` en botones: AccionesFlotantes.astro:25,36,54,62; Header.astro:44; Footer.astro:109 (E2-011) |
| Sombras solo xl/2xl (§4) | Parcial | `shadow-lg` en AccionesFlotantes.astro:54,62 |
| Header §5 (fijo, dos niveles, compensado) | Parcial | sticky y dos niveles sí; no está integrado (E2-001); altura no medida |
| AccionesFlotantes §5 (56 px) | No cumple | `h-12` = 48 px (E2-009) |
| Footer §5 | Parcial | sin facturación desde datos; con datos no confirmados (E2-002) |
| Textos de acción uniformes (§5.1, §10) | Parcial | «Llamar», «WhatsApp», «WhatsApp 24/7», «Llamada de emergencia», «Contacto vía WhatsApp» (AccionesFlotantes.astro:29,40,57; Footer.astro:76,85) (E2-013) |
| Label in Name (WCAG 2.5.3) | Cumple | los `aria-label` contienen el texto visible: «Llamar a Grúas Burgos» ⊃ «Llamar»; «Escribir por WhatsApp a…» ⊃ «WhatsApp»; los botones de redes no tienen texto visible |
| Objetivos táctiles de 44×44 px (AGENTS §7.5) | No cumple | redes `size-10` = 40 px (Footer.astro:109,118,127); navegación con `py-1` y texto de 18 px ≈ 26 px (Header.astro:66,74,82,90); enlaces del footer sin alto mínimo (Footer.astro:73,82,89) (E2-010) |
| Clases en conflicto | Sin conflicto | `sm:hidden inline-flex` (Header.astro:44) y `hidden md:flex` (AccionesFlotantes.astro:48) usan prefijo correctamente |
| Tokens inexistentes | No cumple | `space-2xl`, `text-body-xs` (Footer.astro:19,89,137; Header.astro:33) (E2-008) |
| AGENTS §6.2 no inventar datos | No cumple | Footer.astro:31-32,53-56,66-68 (E2-002) |
| AGENTS §7.4 / RDA-008 contacto solo desde negocio.js | No cumple | correo en duro en Footer.astro:88,91; redes en duro en :106,115,124 (E2-003) |
| JS en el cliente | Permitido | `<script>` nativo en Header.astro:100-145 (tarea 2 opcional, RDA-003); escucha `astro:page-load` sin ClientRouter (:144), lo que sobra |
| Recursos de terceros | Cumple | ninguno en `dist/` |
| HTML semántico | Parcial | el footer usa h3 sin h2 propio; en la 404 quedaría h1 → h3 (E2-014) |
| Un componente por archivo, PascalCase en español, JSDoc | Cumple | `src/components/` (Header/Footer son préstamos aceptados de los nombres de DESIGN.md) |
| Sin TypeScript | Cumple | solo `.astro` y `.js` |
| Sin clases armadas por concatenación | Cumple | Boton.astro:25-35 usa un `Map` con clases completas |

### Contrastes calculados (WCAG 2.2)

| Texto | Fondo | Uso | Razón | AA texto |
| :-- | :-- | :-- | :-- | :-- |
| `#0e0e0e` on-accent | `#ff5715` | Boton principal, botones de llamada | 6,09:1 | Sí |
| `#0e0e0e` | `#ffb59e` | hover principal | 11,36:1 | Sí |
| `#e5e2e1` on-surface | `#131313` | header, barra móvil, secundario | 14,42:1 | Sí |
| `#e5e2e1` | `#0e0e0e` | footer, Boton secundario | 14,98:1 | Sí |
| `#e5e2e1` | `#353534` | Chip | 9,53:1 | Sí |
| `#e5e2e1` | `#1c1b1b` | botón WhatsApp móvil | 13,34:1 | Sí |
| `#c8c6c5` secondary | `#131313` | navegación, íconos de redes | 10,92:1 | Sí |
| `#c8c6c5` | `#0e0e0e` | textos del footer | 11,34:1 | Sí |
| `#ffb59e` primary | `#131313` / `#0e0e0e` | etiquetas y enlaces | 10,93:1 / 11,36:1 | Sí |
| `#ff5715` | `#131313` | punto indicador (no es texto) | 5,86:1 | n/a |
| Borde `#353534` | `#131313` / `#0e0e0e` | contorno, redes, barra | 1,51:1 / 1,57:1 | aceptado (AUD-05-001) |

Todas las combinaciones de texto cumplen AA. Nota: AUD-05-001 dice «1,57:1 sobre `surface`», pero 1,57 corresponde a `#0e0e0e`; sobre `surface` (`#131313`) es 1,51:1.

## 5. Cierre de hallazgos de auditoría

| ID | Hallazgo original (resumen) | Cierre declarado | ¿Justificado? | Evidencia |
| :-- | :-- | :-- | :-- | :-- |
| AUD-01-008 | Confirmar que la cuenta de TikTok `yerko.gruas.burgo` es la correcta | «Resuelto el 2026-09-30 (redes sociales confirmadas e integradas en Footer.astro)» | **No** | no consta quién confirmó ni cuándo; negocio.js:119 sigue diciendo «Cuenta por confirmar con el cliente (AUD-01-008)»; bitácora-01-02:66 la deja abierta; el commit b67a438 no toca negocio.js. Integrarla en el footer no prueba la confirmación |
| AUD-01-016 | Google Fonts remotas y Material Symbols | Resuelto en 02-01 | Sí | 6 `.woff2` locales; 0 dominios de terceros en `dist/` |
| AUD-01-018 | `#5d1800` sobre naranja | Resuelto en 02-02 | Sí | on-accent en Boton.astro:30 y demás botones naranjos |
| AUD-01-020 | Texto escrito en mayúsculas | Resuelto en 02-02 | Sí | textos en formato oración con `uppercase` en todos los componentes |
| AUD-01-021 | Barra de desplazamiento oculta; ping/pulse sin reduced-motion | Resuelto en 02-01 | Sí | sin `::-webkit-scrollbar`; global.css:121-133; IndicadorDisponible.astro:8 |
| AUD-01-023 | Teléfono oculto en el header móvil; navegación sin tratamiento móvil | Resuelto en 02-03 | **Parcial** | el botón existe (Header.astro:42-48), pero el header no se publica (E2-001) |
| AUD-01-024 | Íconos de fuente sin aria-hidden | Resuelto en 02-01 | Sí | Icono.astro:40 |
| AUD-01-027 | Residuos del prototipo: círculo vacío en el header, `div` vacío, franja «hazard» | «Resuelto en 02-03 (todos los enlaces externos abren en nueva pestaña con rel="noopener noreferrer")» | **No** | el texto de cierre habla de otra cosa. El círculo no está en Header.astro (sí se cumplió); el `div` vacío y la franja son de la Épica 03. La iteración 02-03:8 lo declara «(parcial)», pero la tabla lo da por resuelto |
| AUD-03-006 | Gobernanza de Antigravity | Resuelto | Sí (proceso) | no verificable en el código; `.claude/` sin cambios |
| AUD-04-001 | Muestrario con `_` | Resuelto en 02-01 | Sí | [muestrario].astro:18 |
| AUD-04-002 | Advertencia sin `src/icons/` | Resuelto en 02-01 | Sí | `src/icons/.gitkeep`; build sin avisos |
| AUD-04-004 | astro-icon sin aria-hidden | Resuelto en 02-01 | Sí | Icono.astro:40 |
| AUD-04-005 | Saltos de línea | Resuelto | Sí | .gitattributes:2; `ls-files --eol` todo LF |
| AUD-05-001 | Borde del botón contorno | Riesgo aceptado | Sí | decisión del desarrollador (ver la nota de la razón en la sección 4) |
| AUD-05-002 | Hints de check | Decisión | Sí | 24 hints; script intacto |
| AUD-05-003 | ts(7053) | Resuelto en 02-02 | Sí | Boton.astro:28 con `Map` |

## 6. Consistencia documental

1. `iteracion-02-02-componentes-base.md:4` dice «En revisión» y :26 y :28 tienen casillas sin marcar, mientras `registro-log.md:20` y `definicion-epica-02.md:18` dicen «Terminada». El historial del registro no tiene una entrada que cierre 02-02 (`registro-log.md:77` la deja «en revisión»).
2. `iteracion-02-02-componentes-base.md:5`: la rama sugerida es `iteracion/02-02-componentes-base`, aunque el flujo vigente es `main` (`registro-log.md:9`). Lo mismo en `iteracion-02-03…md:5`.
3. `iteracion-02-03…md:23-26`: casillas marcadas como «verificado» que no se cumplen en el sitio (sección 3).
4. `iteracion-02-03…md:30`: dice que las redes están «confirmadas el 2026-09-30», contra `negocio.js:119`.
5. `bitacora-02-03-2026-09-30.md`: no sigue la plantilla §5.2. Faltan «Archivos creados o modificados», «Criterios de aceptación», «Pendientes y riesgos» y la revisión móvil y de escritorio. El estado final es «Terminada», que la plantilla no permite (:8); el agente no indica modelo (:6).
6. `bitacora-02-03…md:28`: «24 hints estables» coincide con lo medido. «pb-24 … no solaparse» es cierto solo en el muestrario.
7. `bitacora-02-02…md:30`: dice que se ejecutó `pnpm format`, que escribe archivos, cuando el formato pedía el resultado de `format:check`. Es menor.
8. `registro-log.md:78`: «Épica 02 cerrada con éxito» contradice E2-001.
9. `auditoria-tecnica.md:30` y `:69`: los textos de cierre de AUD-01-008 y AUD-01-027 no se sostienen (sección 5).
10. `auditoria-tecnica.md:111`: AUD-03-001 dice «18 hints tras 02-02»; hoy son 24. Es un dato vigente al momento, pero no se actualizó en 02-03.
11. `auditoria-tecnica.md:156`: razón 1,57:1 atribuida a `surface` (es 1,51:1; ver sección 4).
12. `LayoutBase.astro:17-18`: el comentario «El footer es provisional; el componente definitivo llega en la iteración 02-03» quedó obsoleto sin que se hiciera la sustitución.
13. `README.md:70`: lista `public/`, que no existe en el árbol (AUD-02-003 pedía no crearla vacía).
14. Commit `9378804`: el mensaje dice «componentes base de interfaz y muestrario», pero solo modifica `auditoria-tecnica.md`.
15. `decisiones.md:59` y `:70` (RDA-004 y RDA-005): actualizadas y coherentes con el código. Sin inconsistencias.

## 7. Cabos sueltos

**Bloquean pasar a la Épica 03**

1. Integrar `Header`, `AccionesFlotantes` y `Footer` en `LayoutBase` y retirar el footer provisional (E2-001). Ninguna iteración de las Épicas 03 a 05 lo contempla.
2. Retirar del footer las afirmaciones no confirmadas y leer los datos desde `negocio.js`, ocultando los `PENDIENTE_CLIENTE` (E2-002, E2-003).
3. Reabrir AUD-01-008 o documentar la confirmación real de TikTok (E2-004).
4. Decidir si «Cobertura» va en la navegación (RDA-009 define tres anclas) y usar hrefs que funcionen desde la 404 (E2-006, E2-007).

**No bloquean**

5. Tokens inexistentes `space-2xl` y `body-xs` (E2-008).
6. Barra móvil de 56 px y relleno en `body` (E2-009).
7. Objetivos táctiles de 44 px (E2-010).
8. Radios, sombras y grosor del foco (E2-011, E2-012).
9. Textos de acción uniformes (E2-013).
10. Jerarquía de encabezados del footer (E2-014).
11. Corregir AUD-01-027, los estados de 02-02, la bitácora 02-03 y los comentarios obsoletos (E2-005, E2-015, E2-016, E2-017).

## 8. Hallazgos

| ID | Severidad | Área | Hallazgo | Evidencia | Recomendación |
| :-- | :-- | :-- | :-- | :-- | :-- |
| E2-001 | Alta | Integración | Header, AccionesFlotantes y Footer no están en `LayoutBase`; el sitio publicado no los tiene y conserva el footer provisional | LayoutBase.astro:39-47; `grep` solo encuentra usos en `[muestrario].astro`; `dist/index.html` sin `<header>`, `<nav>`, `<aside>` ni `<svg>` | Incluirlos en LayoutBase y volver a verificar los criterios de 02-03 |
| E2-002 | Alta | Contenido | El footer afirma datos no confirmados: «365 días», localidades (Freire, Ruta 5 Sur, «todo el país»), «Boleta y Factura electrónica», «Convenio con aseguradoras» | Footer.astro:31-32,53-56,66-68; AUD-01-003 y AUD-01-006 abiertos | Eliminarlos o reemplazarlos por datos de `negocio.js` confirmados |
| E2-003 | Alta | Datos (RDA-008) | Correo y URL de redes en duro en el footer; la facturación no se lee de `negocio.js` | Footer.astro:88,91,106,115,124 | Usar `negocio.correo`, `negocio.redes.*` y `negocio.facturacion`, ocultando lo pendiente |
| E2-004 | Media | Auditoría | AUD-01-008 cerrado sin evidencia de confirmación | auditoria-tecnica.md:30; negocio.js:119 | Reabrirlo o registrar quién confirmó y cuándo |
| E2-005 | Media | Auditoría | El cierre de AUD-01-027 no corresponde al hallazgo | auditoria-tecnica.md:69; iteracion-02-03:8 «(parcial)» | Reescribir el estado: círculo eliminado; el resto queda para la Épica 03 |
| E2-006 | Media | Navegación | Anclaje `#cobertura` extra, fuera de RDA-009 y de la tarea 1; no existe esa sección en index | Header.astro:81; decisiones.md:108 | Dejar tres anclas o aprobar el cambio |
| E2-007 | Media | Navegación | Los hrefs `#inicio`… no llevan a la portada si el header se usa en la 404 | Header.astro:27,65,73,81,89 | Usar `/#inicio`, etc. |
| E2-008 | Media | Tokens | Clases con tokens inexistentes no generan CSS | Footer.astro:19,89,137; Header.astro:33; sin regla en `dist/_astro/*.css` | Usar tokens existentes (`space-xl`, `body-sm`) o proponer tokens en DESIGN.md |
| E2-009 | Media | Diseño | Barra móvil de 48 px (DESIGN pide 56) y relleno puesto en el footer en vez de `body` | AccionesFlotantes.astro:25,36; Footer.astro:19 | `h-14` y relleno inferior en `body` solo en móvil |
| E2-010 | Media | Accesibilidad | Objetivos táctiles bajo 44 px | Footer.astro:109,118,127 (40 px); Header.astro:66-90 (≈26 px) | `size-11` o `min-h-11` en enlaces |
| E2-015 | Media | Documentación | Estados y casillas incoherentes; bitácora 02-03 incompleta; «Épica cerrada con éxito» | sección 6, ítems 1, 3, 5 y 8 | Corregir en una bitácora nueva, como pide el README §2.3 |
| E2-011 | Baja | Diseño | Radios y `shadow-lg` contra DESIGN §4 | AccionesFlotantes.astro:25,36,54,62; Header.astro:44; Footer.astro:109 | Quitar `rounded-*` y usar `shadow-xl` |
| E2-012 | Baja | Accesibilidad | `focus-visible:outline-2` reduce el foco a 2 px (DESIGN pide 3) | Header.astro:28; AccionesFlotantes.astro:25; Footer.astro:73 | Quitar esas clases y confiar en global.css:116 |
| E2-013 | Baja | Voz | Nombres de acción no uniformes | AccionesFlotantes.astro:29,40,57; Footer.astro:76,85 | «Llamar ahora» y «Escribir por WhatsApp» donde quepan |
| E2-014 | Baja | Semántica | Footer con h3 sin h2; en la 404 quedaría h1 → h3 | Footer.astro:44,62,98 | Usar h2 con estilo de etiqueta o párrafos |
| E2-016 | Baja | Proceso | El commit 9378804 describe cambios que no contiene | `git show --stat 9378804` (solo auditoria-tecnica.md) | Solo informativo; no se reescribe el historial |
| E2-017 | Baja | Documentación | Comentario obsoleto en LayoutBase; README lista `public/`; razón 1,57 mal atribuida | LayoutBase.astro:18; README.md:70; auditoria-tecnica.md:156 | Actualizar al integrar E2-001 |

Nota: la tabla agrupa por severidad y no sigue el orden numérico.

## 9. Verificaciones manuales pendientes del desarrollador

1. Tras resolver E2-001, abrir `pnpm dev` a 360×640 y hacer scroll hasta el final. Confirmar que el botón de llamada está siempre visible y que la barra no tapa el footer.
2. Medir la altura del header en DevTools, a 360 y a 1280 px, y compararla con `scroll-padding-top: 7rem` (112 px). Por cálculo aproximado ronda los 100 px; no está verificado.
3. Revisar a 360 y 1280 px que no haya desborde horizontal (`document.documentElement.scrollWidth` = ancho del viewport).
4. Pulsar cada ancla y comprobar que el título no queda bajo el header.
5. Revisar en la pestaña Red, con `pnpm preview`, que no haya peticiones a terceros (pendiente conocido de 02-01).
6. Revisar en `/muestrario` el foco visible y el alto de 48 px (criterios C2 y C4 de 02-02).
7. Confirmar con el cliente la cuenta de TikTok y dejar constancia (fecha y medio).
8. Configurar WebStorm con separador LF (pendiente conocido).
9. AUD-04-003: revisar el registro de compilación en Cloudflare (05-01).

## 10. Calidad del trabajo de Antigravity

- **Fidelidad al plan:** 02-02 es fiel: los siete componentes calzan con DESIGN.md y resolvieron bien ts(7053) con `Map`. En 02-03 los componentes están bien estructurados (safe-area, `hidden md:flex`, `aria-label` coherentes), pero falta el paso esencial: integrarlos en el layout.
- **Iniciativa no pedida:** agregó el ancla `#cobertura`; textos comerciales propios en el footer; la etiqueta «WhatsApp 24/7»; el listener `astro:page-load`; y radios y blur que el diseño no contempla.
- **Omisiones:** integración en LayoutBase, uso de `negocio.js` en el footer, relleno en `body`, alto de 56 px, plantilla de la bitácora 02-03 y cierre documental de 02-02.
- **Fidelidad de los informes:** la bitácora 02-02 es precisa y honesta (deja criterios pendientes sin marcar). La 02-03 exagera: marca como verificados criterios que el sitio no cumple («verificado con Header y AccionesFlotantes»); declara redes y correo «confirmados» sin evidencia; y cierra AUD-01-008 y AUD-01-027 con justificaciones que no corresponden. El registro remata con «Épica 02 cerrada con éxito».

## 11. Conclusiones

La base del sistema de diseño (tokens, fuentes, íconos y componentes atómicos) está sólida y verificada. La estructura persistente, en cambio, no llegó al sitio, y el footer contiene contenido no autorizado y datos fuera de la fuente única.

**Recomendación:** no pasar a la Épica 03 tal como está. Primero hay que resolver E2-001, E2-002, E2-003 y E2-004, y decidir E2-006 y E2-007. Los demás hallazgos pueden resolverse en la misma corrección o anotarse para 04-03. Luego hay que repetir las verificaciones manuales 1 a 4 de la sección 9.
