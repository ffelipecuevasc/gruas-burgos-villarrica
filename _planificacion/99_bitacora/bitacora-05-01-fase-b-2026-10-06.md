# Bitácora 05-01 · Publicación y verificación final en producción: fase B

- **Fecha:** 2026-10-06
- **Agente:** Claude Code (Claude Opus 5.5)
- **Rama:** `main` (la rama `iteracion/05-01-verificacion-final` ya está fusionada)
- **Estado final:** En revisión

## Resumen

Se registró la fase B con la evidencia del desarrollador ([`evidencia-05-01-fase-b.md`](../10_epicas/epica-05-publicacion-medicion/evidencia-05-01-fase-b.md)) sobre la vista previa de la rama y sobre producción, ambas con el commit `c3c4033`. No se implementó nada ni se cambió código ni `public/_headers`.

Cloudflare entrega la cabecera HSTS definida en `_headers` (`max-age=300`), en la vista previa, en la portada y en el 404. La caché quedó medida y aceptada, el registro de compilación no trae avisos de fuentes, la prueba de humo salió conforme en un teléfono Android y en un PC, PageSpeed móvil da 99, 100, 100 y 100 de mediana con LCP de 1,8 s, y el JSON-LD no tiene errores. Las ocho casillas de la fase B quedan marcadas; la de PageSpeed, con una salvedad.

Hay un hallazgo nuevo, AUD-10-001 (Baja): PageSpeed informa 11 KiB de «JavaScript heredado» que el sitio no tiene en `dist/`. No bloquea el cierre; se revisa en 05-02.

El veredicto del desarrollador es «sí». No equivale a «Terminada»: la iteración sigue «En revisión» y la marca él.

## Archivos creados o modificados

| Archivo | Cambio |
| :------ | :----- |
| `…/epica-05-publicacion-medicion/iteracion-05-01-publicacion.md` | Línea «Estado», el punto 1 de la fase B y sus ocho casillas, con su resultado. |
| `_planificacion/00_producto/auditoria-tecnica.md` | Solo la Auditoría 10: auditor, alcance, resumen, tabla de estado y el hallazgo AUD-10-001. |
| `_planificacion/00_producto/registro-log.md` | Fila de 05-01, «Iteración activa», «Próximo hito» y una línea del historial. |
| `_planificacion/99_bitacora/bitacora-05-01-fase-b-2026-10-06.md` | Nueva. |

No se tocaron `src/`, `public/_headers`, `AGENTS.md`, `DESIGN.md`, `decisiones.md`, `definicion-epica-05.md`, las bitácoras anteriores, el archivo de evidencia ni los demás archivos protegidos.

## Verificación

- `pnpm format:check`: OK («All matched files use Prettier code style!»).
- `pnpm check`: OK. 0 errores, 0 advertencias, 52 hints en 40 archivos.
- `pnpm build`: OK. Código 0, 2 páginas, 0 líneas con «warn» o «error»; `[assets] Copying fonts (6 files)...`.
- Revisión móvil 360 px y escritorio: **no repetida.** No cambió el código, así que valen las mediciones de la fase A ([bitacora-05-01-2026-10-06](bitacora-05-01-2026-10-06.md)). No se abrió navegador ni servidor, y no se consultó ninguna URL pública.
- Lighthouse: no lo ejecuté; los datos de PageSpeed son los de la evidencia.

### Commit revisado

El commit desplegado en la vista previa y en producción es `c3c4033c5284953cc3e642572a20d22db86105f7`. Respecto del commit de la fase A (`3b6b666`), `c3c4033` solo cambia una línea de `iteracion-05-01-publicacion.md`: el código y `_headers` son los medidos en la fase A. El último commit de `main` es `be44e53`, que solo agrega el archivo de evidencia completado; su despliegue no consta en la evidencia.

### Evidencia del desarrollador

Todo lo de esta sección consta en la evidencia; no lo medí yo. De las salidas de `curl.exe` copié solo las cabeceras útiles.

- **Fecha:** 2026-10-06, cerca de las 22:11 GMT.
- **Equipos:** «Teléfono Android verificado» y «PC verificado». La evidencia no indica modelo, sistema, navegador ni tamaño de ventana (ver «No verificado»).

#### Despliegue

| Entorno | Dirección | Estado | Commit |
| :--- | :--- | :--- | :--- |
| Vista previa | `https://5e271713.gruas-burgos-villarrica.pages.dev/` | Success | `c3c4033` |
| Producción (`main`) | `https://gruasvillarrica.cl/` | Success | `c3c4033c5284953cc3e642572a20d22db86105f7` |

#### HSTS y cabeceras (AUD-09-018)

| Comando (`curl.exe -sI`) | Estado | HSTS | Otras cabeceras |
| :--- | :--- | :--- | :--- |
| Vista previa, `/` | La línea de estado no está en la salida pegada; el desarrollador responde «sí (implícito en la respuesta exitosa)» | `Strict-Transport-Security: max-age=300` | `x-robots-tag: noindex`; `Cache-Control: public, max-age=0, must-revalidate`; las cinco de seguridad de `/*` |
| `https://gruasvillarrica.cl/` | `200 OK` | `Strict-Transport-Security: max-age=300` | Sin `x-robots-tag`; `Cache-Control: public, max-age=0, must-revalidate`; `x-content-type-options: nosniff`; `referrer-policy: strict-origin-when-cross-origin`; `permissions-policy` completa; `x-frame-options: DENY`; `content-security-policy: frame-ancestors 'none'` |
| `https://gruasvillarrica.cl/no-existe` | `404 Not Found` | `Strict-Transport-Security: max-age=300` | `Cache-Control: no-store`; las cinco de seguridad de `/*` |
| `http://gruasvillarrica.cl/` | `301 Moved Permanently`, `Location: https://gruasvillarrica.cl/` | No aparece (lo esperado) | — |
| `https://www.gruasvillarrica.cl/` | `301 Moved Permanently`, `Location: https://gruasvillarrica.cl/` | No aparece | — |

- La cabecera no trae `includeSubDomains` ni `preload` en ninguna respuesta. `max-age` vigente en producción: 300.
- Queda comprobado lo que la fase A dejó como deducido: Cloudflare Pages entrega la cabecera definida en `_headers`, también en el 404, y una sola vez.
- El plan de subida (300 → 86400 → 604800 → 31536000) queda pendiente, a decisión del desarrollador y fuera de esta iteración.
- Observación mía: en la redirección de `www` tampoco aparece la cabecera. Es coherente con no usar `includeSubDomains` y no es un defecto de esta iteración; habrá que tenerlo presente si algún día se evalúa `includeSubDomains`.

#### Caché (AUD-09-016)

| Dirección | Estado | `Cache-Control` |
| :--- | :--- | :--- |
| `/` | 200 | `public, max-age=0, must-revalidate` |
| `/robots.txt` | 200 | `public, max-age=14400, must-revalidate` |
| `/favicon.ico` | 200 | `public, max-age=14400, must-revalidate` |
| `/favicon.svg` | 200 | `public, max-age=14400, must-revalidate` |
| `/apple-touch-icon.png` | 200 | `public, max-age=14400, must-revalidate` |
| `/sitemap-index.xml` | 200 | `public, max-age=0, must-revalidate` |
| `/sitemap-0.xml` | 200 | `public, max-age=0, must-revalidate` |
| `/no-existe` | 404 | `no-store` |
| `/_astro/Icono.DSEMQWBb.css` | 200 | `public, max-age=31536000, immutable` |

Decisión del desarrollador: «Ninguno, todo conforme»; las 4 horas de `robots.txt` y los tres íconos son el valor de Cloudflare, que se acepta. `/` y el archivo de `/_astro/` responden lo que fija `_headers`. La hoja de estilos tiene en Cloudflare el mismo nombre que en la compilación local.

#### Registro de compilación de `main` (AUD-04-003)

Líneas transcritas de la evidencia:

```text
22:06:19 [assets] Copying fonts (6 files)...
22:06:45 [validar-datos-provisionales] Sin PENDIENTE_CLIENTE en 127 archivos publicados.
```

- «No data found for font family»: **no aparece.**
- Único aviso: `npm warn EBADENGINE` de `corepack` con la versión de Node, sin efecto en la compilación. Es el mismo aviso de las fases B de 05-04 y 05-05.
- Coincide con la fase A: 6 fuentes y 127 archivos.

#### Prueba de humo

Todas las casillas de la evidencia dicen «sí».

| Punto | Teléfono Android | PC |
| :--- | :--- | :--- |
| Seis anclas con el título visible bajo el header | Sí (tres por el menú y tres escribiendo la dirección) | Sí (seis enlaces del menú) |
| Llamada | Sí: «Llamar ahora» del hero y «Llamar» de la barra | Sí: «Llamar ahora» del hero |
| Mensajes de WhatsApp | Sí, los 11; mensaje 1: «Todos verificados» | Sí: hero, tarjeta de despacho, botón flotante, una tarjeta de servicio y el formulario |
| Formulario: envío vacío bloqueado | Sí | — |
| Orden de la página | Sí | Sí |
| Ocho tarjetas de servicio con el mismo diseño | Sí | Sí |
| Franja «Quiénes somos» con su foto | Sí, sin nombres propios | Sí |
| Galería: una destacada y siete más | Sí, todas cargan | Sí |
| Diez opiniones con el logotipo de Google | Sí | Sí |
| «Medios de pago» con sus íconos | Sí | Sí |
| Mapa con «© colaboradores de OpenStreetMap» | Sí | Sí, a la derecha de la lista |
| Banderas del menú con esquinas rectas | Sí | Sí |
| Banderas de la tarjeta de envío con esquinas rectas | Sí | Sí |
| Sin desplazamiento lateral | Sí | — |
| Primera pantalla con la barra de direcciones a la vista | Sí; sobra «suficiente para no quedar tapado» (sin medida) | — |
| 404 con el diseño del sitio, «Volver al inicio» y barra inferior | Sí | — |
| Botones flotantes: se ocultan al llegar al pie y reaparecen al subir | — | Sí |
| Crédito del pie legible, sin nada encima | — | Sí |

- Firefox en el PC: «sí». Otro navegador: no verificado.
- Con esto quedan vistas en producción las banderas con esquinas rectas, que 05-04 había dejado sin verificar en una vista previa.

#### PageSpeed Insights (`https://gruasvillarrica.cl`)

| Dispositivo | Ejecución | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Móvil | 1 | 97 | 100 | 100 | 100 | 2,3 s | 0 | 0 ms |
| Móvil | 2 | 99 | 100 | 100 | 100 | 1,8 s | 0 | 0 ms |
| Móvil | 3 | 99 | 100 | 100 | 100 | 1,8 s | 0 | 0 ms |
| **Móvil, mediana** | — | **99** | **100** | **100** | **100** | **1,8 s** | **0** | 0 ms |
| Escritorio | 1 | 100 | 100 | 100 | 100 | 0,6 s | 0 | 0 ms |
| Escritorio | 2 | 100 | 100 | 100 | 100 | 0,6 s | 0 | 0 ms |
| Escritorio | 3 | 100 | 100 | 100 | 100 | 0,6 s | 0,004 | 0 ms |

- Cumple los criterios: 95 o más en las cuatro categorías, LCP de 2,5 s o menos y CLS 0 en móvil. Las medianas las calculé yo a partir de las tres ejecuciones.
- FCP móvil: 1,7 s. Índice de velocidad: 2,6 s (ejecución 1).
- Los enlaces a los informes están en la evidencia. Los de escritorio son las mismas direcciones que los de móvil.
- Comparación con el 2026-10-02 (04-03): entonces la mediana móvil fue 97 con LCP de 2,3 s en las tres ejecuciones.
- **Advertencias de PageSpeed:** «JavaScript heredado» (ahorro estimado de 11 KiB), «Usa tiempos de almacenamiento en caché eficientes» (4 KiB) y una tarea larga en el subproceso principal, en escritorio.

#### Validadores de datos estructurados

| Validador | Resultado |
| :--- | :--- |
| Schema.org | `EmergencyService` / `AutomotiveBusiness` válida: 0 errores y 0 advertencias. `areaServed`: Villarrica, Pucón, Licán Ray, Coñaripe, Freire y La Araucanía. `paymentAccepted`: efectivo, transferencia bancaria, tarjeta de débito y tarjeta de crédito |
| Prueba de resultados enriquecidos de Google (6 oct 2026, 19:50:24) | 1 elemento válido («Grúas Burgos»), 0 errores críticos. Advertencias opcionales: falta `priceRange` y falta `postalCode` |

`priceRange` no se agrega: equivale a publicar tarifas, que están en «No publicar». `postalCode` no está en el alcance. Es lo ya aceptado en AUD-09-020.

### Contraste con la fase A

Nada de la evidencia contradice las mediciones de la fase A ni exige cambiar código en esta iteración. Dos puntos que conviene leer con cuidado:

1. **«JavaScript heredado», 11 KiB (AUD-10-001).** En la fase A medí 960 B de JavaScript en la portada de `dist/`, sin ningún archivo `.js` externo. Un ahorro estimado de 11 KiB no puede salir de 960 B: PageSpeed está viendo en producción un script que la compilación no contiene. El origen no se identificó; puede ser un script que agrega Cloudflare (entre ellos el de Web Analytics), lo que **no está confirmado**. No es una contradicción con la medición local, sino una diferencia entre `dist/` y lo que se sirve. Si se confirma un script inyectado, toca RDA-006 y el límite de JavaScript: por eso se traslada a 05-02, donde se decide Web Analytics. El antecedente es AUD-09-014 (la ofuscación de correos de Cloudflare agregaba un script y se desactivó el 2026-10-02).
2. **«Tiempos de caché eficientes», 4 KiB.** Es coherente con las 4 horas medidas en los íconos y `robots.txt`, aceptadas en AUD-09-016. Qué archivos señala PageSpeed no consta: la relación es una interpretación mía.

### Observaciones informativas

- **CLS de 0,004** en una de las tres ejecuciones de escritorio (0 en las otras dos). El criterio de CLS 0 es de móvil, donde las tres dieron 0. El 2026-10-02 escritorio daba 0,002.
- **Una tarea larga en escritorio,** con TBT de 0 ms en todas las ejecuciones.
- **Hora de las pruebas.** Los `curl` son de las 22:11 a 22:13 GMT y la compilación, de las 22:06. La prueba de Google dice 19:50: si es hora local de Chile (GMT−3), son las 22:50 GMT, posterior al despliegue. La zona horaria no consta; es una interpretación mía.
- **Casilla de la validación de la fase A.** En mi entrega de la fase A quedó sin marcar; hoy aparece marcada en `main`. No la toqué: entiendo que la marcó el desarrollador.

### No verificado

- **Safari en iPhone:** no hay equipo.
- **Elemento del LCP:** no determinado. La respuesta («título principal (H1) o imagen de fondo del hero») no se leyó del informe de PageSpeed.
- **Detalle de los equipos:** la evidencia dice «Teléfono Android verificado» y «PC verificado», sin modelo, sistema, navegador ni tamaño de ventana. La tarjeta de servicio probada en escritorio figura como «Verificado», sin decir cuál.
- **Línea `200 OK` de la vista previa:** no está en la salida pegada; consta por la respuesta del desarrollador.
- **Cuánto sobra en la primera pantalla del teléfono:** sin medida.
- **Origen del «JavaScript heredado»** (AUD-10-001).
- **Despliegue del commit `be44e53`** (solo documentación): no consta.
- **Lector de pantalla:** la evidencia no lo cubre.

## Criterios de aceptación

Fase B, según la evidencia del desarrollador:

- [x] Vista previa: `Strict-Transport-Security: max-age=300` y `x-robots-tag: noindex` (el `200 OK`, por la respuesta del desarrollador).
- [x] Cloudflare publicó el commit esperado: «Success», `c3c4033`.
- [x] HSTS en la portada y en el 404; `http` y `www` con 301; demás cabeceras presentes.
- [x] Prueba de humo completa en teléfono y escritorio, con los 11 mensajes de WhatsApp. Safari en iPhone figura como no verificado.
- [x] Registro de compilación sin «No data found for font family» y con la línea de la validación.
- [x] Caché medida, aceptada y registrada.
- [x] PageSpeed móvil: 99, 100, 100 y 100 de mediana; LCP 1,8 s; CLS 0. Escritorio informado. **Salvedad:** el elemento del LCP no se determinó.
- [x] JSON-LD sin errores en los dos validadores.
- [x] Sin hallazgos de severidad Alta abiertos en la Auditoría 10.

## Decisiones tomadas

Ninguna requiere RDA.

1. **La casilla de PageSpeed se marca con su salvedad,** en vez de dejarla sin marcar: los umbrales se cumplen y escritorio está informado; falta solo el elemento del LCP, que es un dato informativo. Si el desarrollador prefiere exigirlo, basta desmarcarla.
2. **AUD-04-003 se da por cerrado** con las líneas del registro de Cloudflare.
3. **Los estados de AUD-04-003, AUD-09-016 y AUD-09-018 se actualizan solo en la Auditoría 10.** Las filas originales, en las Auditorías 04 y 09, conservan su texto anterior: no estaba autorizado a tocarlas.
4. **No repetí las mediciones de la fase A:** el código y `_headers` no cambiaron desde `3b6b666`.

## Pendientes y riesgos

- **Tareas del desarrollador:** commit y push de este registro; marcar la iteración «Terminada» (archivo de la iteración y fila del registro).
- **AUD-10-001:** identificar en 05-02 de dónde salen los 11 KiB de «JavaScript heredado». Si es un script de Cloudflare, hoy se estaría sirviendo JavaScript de terceros sin una RDA.
- **Plan de subida de HSTS:** pendiente, a decisión del desarrollador. Cada paso, con un push a `main`.
- **Filas antiguas de la auditoría:** AUD-04-003 (Auditoría 04) y AUD-09-016 y AUD-09-018 (Auditoría 09) siguen con su estado anterior; el vigente está en la Auditoría 10.
- **No verificado:** Safari en iPhone, elemento del LCP y detalle de los equipos.
- **AUD-08-023** (aprobación del cliente de la Épica 03): sigue abierto.
- **Margen de JavaScript:** siguen quedando 64 B (960 B de 1.024 B) para 05-02.
- **Cambios ajenos en `git status`,** que no toqué: `AD src/assets/LogoGruasBurgos.svg`.
- **Servidores y Chrome:** no se abrió ninguno.

## Commit sugerido

`Épica 5 - Iteración 05-01: registra la fase B con la evidencia del desarrollador en producción, actualiza la Auditoría 10 y agrega el hallazgo AUD-10-001`

(153 caracteres, contados con código.)
