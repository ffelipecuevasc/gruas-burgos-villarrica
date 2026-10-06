# Iteración 05-01 · Publicación y verificación final en producción

- **Épica:** 05 · Ajustes finales, publicación y medición
- **Estado:** Terminada (marcada por el desarrollador el 2026-10-06). Fase A, local: [bitacora-05-01-2026-10-06](../../99_bitacora/bitacora-05-01-2026-10-06.md); fase B registrada: [bitacora-05-01-fase-b-2026-10-06](../../99_bitacora/bitacora-05-01-fase-b-2026-10-06.md). Quedan sin verificar: Safari en iPhone, el elemento del LCP y el detalle de los equipos. El origen de los 11 KiB de «JavaScript heredado» de PageSpeed (AUD-10-001, Baja) se resuelve en 05-02. El plan de subida de HSTS queda a decisión del desarrollador.
- **Rama sugerida:** `iteracion/05-01-verificacion-final`
- **Depende de:** 05-03, 05-04 y 05-05 (terminadas)
- **RDA relacionadas:** RDA-001, RDA-007, RDA-008, RDA-012
- **Hallazgos que cierra:** AUD-04-003 (fuentes en el registro de compilación), AUD-09-016 (caché), AUD-09-018 (HSTS) y AUD-08-032 (nombre del autor de las reseñas en la documentación).

## Objetivo

Verificar en producción la versión final del sitio, ya con los cambios de 05-03, 05-04 y 05-05, y cerrar lo que quedó pendiente de la publicación del 2026-10-02.

`https://gruasvillarrica.cl` está en producción desde el 2026-10-02 y cada merge a `main` la actualiza. Esta iteración no publica contenido nuevo: verifica, agrega la cabecera HSTS (con plazo corto) y alinea dos documentos. La evidencia previa está en `evidencia-04-03-fase-b.md` y `bitacora-04-03-fase-b-2026-10-02.md`.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. La forma de lograrlo la decide quien implementa, dentro de las reglas de la iteración.

## Decisiones del desarrollador (2026-10-06)

1. **Caché (AUD-09-016).** Se acepta el valor que Cloudflare pone hoy (`max-age=14400`, 4 horas) en `robots.txt` y `favicon.ico`. No se edita `_headers` por este motivo. Se miden y se registran.
2. **Validación de datos provisionales.** Basta la prueba local. No se prueba la falla en Cloudflare ni se hace un push de prueba a `main`.
3. **AUD-08-032.** Se alinean `AGENTS.md` §6.4 y `DESIGN.md` §5 (`TarjetaResena`) con la decisión D3 de RDA-007: **nombre completo** del autor de las reseñas.
4. **HSTS (AUD-09-018).** El panel de Cloudflare solo ofrece «Disable» o un plazo de 1 a 12 meses (Cloudflare Docs, HSTS), sin valores cortos. Por eso se activa desde `public/_headers`, con **`max-age=300`** (5 minutos), **sin `includeSubDomains` y sin `preload`**.
   - **Riesgo real:** el navegador que recibe la cabecera se niega a abrir el sitio por `http` durante todo el `max-age`. Si el certificado vence o falla, si se pausa Cloudflare o si se mueven los servidores de nombres, los visitantes que ya la recibieron no pueden entrar hasta que venza el plazo. Con 300 s el daño máximo son 5 minutos.
   - **Reversión:** poner `max-age=0` surte efecto en los navegadores que vuelvan a visitar el sitio por HTTPS.
   - **Plan gradual (después de esta iteración):** 300 → 86400 (1 día) → 604800 (1 semana) → 31536000 (1 año), con un push a `main` en cada paso, comprobando antes que el sitio sigue accesible. Los tiempos los decide el desarrollador y el avance puede continuar después de la entrega. `includeSubDomains` solo si todos los subdominios, incluido `www`, sirven HTTPS. `preload` solo con una decisión explícita.

## Ya verificado el 2026-10-02 (no se repite)

Dominio y `www` con 301 a la raíz, HTTPS forzado, indexación solo en el dominio propio, `noindex` en `pages.dev`, cabeceras de `_headers`, compilación de `main` con Node 24, pnpm 12.8.1 y `sharp` 0.35.5, validación de datos provisionales sin `PENDIENTE_CLIENTE` en 114 archivos, y llamada, WhatsApp, «Cómo llegar» y formulario en un Android.

## Reglas de la iteración

1. Esta iteración no cambia el diseño ni el contenido del sitio. Cualquier defecto que halle se registra y, si es de severidad Alta o Media, se corrige en una iteración corta nueva.
2. **Autorizado:**
   - `public/_headers`: solo agregar la cabecera HSTS descrita arriba en la regla `/*`, con su comentario. Ninguna otra línea cambia.
   - `AGENTS.md` §6.4 y `DESIGN.md` §5 (fila `TarjetaResena`): solo la frase del nombre del autor.
   - `auditoria-tecnica.md`: la Auditoría 10 (al final) y el estado de AUD-08-032.
   - Los archivos de documentación de esta iteración.
3. No se hacen `commit`, `push` ni cambios de rama. Los hace el desarrollador. El agente no consulta URLs públicas (`curl` y `wget` están denegados): las mediciones sobre producción son de la fase B.
4. Cuando se cite el registro de compilación de Cloudflare, se transcribe lo que entregó el desarrollador, sin inventar líneas.
5. Sin JavaScript nuevo ni dependencias nuevas.

## Contenido aprobado de esta iteración

Ninguno. No se publica nada nuevo.

## Tareas

1. **Validación de datos provisionales, caso de falla (local).** Se reevalúa con los cambios de 05-03 y 05-04, que retiraron razón social y RUT de los datos. Compilando con `CF_PAGES_BRANCH=main`: sin marcadores, la compilación termina y lo informa; con un marcador `PENDIENTE_CLIENTE` colocado a propósito, falla y nombra el archivo. La prueba no deja ningún rastro en el repositorio.
2. **HSTS en `_headers`.** La cabecera `Strict-Transport-Security: max-age=300` queda definida para todas las respuestas, con un comentario que explica el plan gradual. No lleva `includeSubDomains` ni `preload`.
3. **AUD-08-032.** `AGENTS.md` §6.4 y `DESIGN.md` §5 dicen «nombre completo» del autor, igual que RDA-007 y el sitio.
4. **Fuentes (AUD-04-003), parte local.** La compilación local no contiene «No data found for font family» y `dist/` publica los archivos `.woff2`; se informan sus nombres y pesos.
5. **Preparación de la fase B.** Archivo `evidencia-05-01-fase-b.md`, vacío para el desarrollador, con la lista de verificación de la prueba de humo, la tabla de todos los mensajes de WhatsApp del sitio (extraídos de `dist/`, con su texto decodificado y dónde aparecen), los comandos de `curl.exe` de cabeceras, HSTS y caché con la lista de archivos a medir, el espacio para las líneas del registro de compilación de Cloudflare, PageSpeed (móvil y escritorio, tres ejecuciones cada uno) y los dos validadores del JSON-LD.
6. **Auditoría 10.** Sección nueva al final de `auditoria-tecnica.md`, con el estado de AUD-04-003, AUD-09-016, AUD-09-018 y AUD-08-032 y la tabla de hallazgos nuevos (AUD-10-NNN) vacía, para completarla tras la fase B.
7. **Documentación.**
   - Bitácora nueva `bitacora-05-01-AAAA-MM-DD.md` en `_planificacion/99_bitacora/`, con la plantilla de `_planificacion/README.md` §5.2, fecha real, fin de línea LF y estado final «En revisión». Nunca «Terminada».
   - `registro-log.md`: fila de 05-01, «Iteración activa», «Próximo hito» y una línea del historial.

## Criterios de aceptación

**Fase A, local:**

- [x] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias (hints: hoy 52). JavaScript de cliente sin cambios (960 B en la portada y 191 B en el 404). **Medido:** sin diferencias; 0 errores, 0 advertencias y 52 hints; build con código 0 y 0 líneas con «warn» o «error»; 960 B (769 + 191) y 191 B.
- [x] Validación de datos provisionales: con `CF_PAGES_BRANCH=main` y sin marcadores, la compilación termina con código 0 y el mensaje «Sin PENDIENTE_CLIENTE en N archivos publicados»; con un marcador, falla con código distinto de 0 y nombra el archivo. `git status` final igual al inicial. 0 `PENDIENTE_CLIENTE`, «RUT», «razón social» y «© 2026» en `dist/`; en `src/data/` no hay «RUT», «razón social» ni «© 2026», y `PENDIENTE_CLIENTE` solo existe como marcador de los datos que no se publican (RDA-008). **Medido:** código 0 y «Sin PENDIENTE_CLIENTE en 127 archivos publicados»; con un marcador en un archivo temporal de `public/`, la compilación falla (código distinto de 0) y nombra `prueba-validacion-05-01.txt`; `git status` idéntico antes y después. En `dist/`: 0 `PENDIENTE_CLIENTE`, 0 «razón social», 0 «© 2026» y 0 «RUT» en los archivos de texto (la secuencia de bytes «RUT» aparece por azar dentro de dos imágenes WebP). «RUT», «razón social» y «© 2026»: 0 en `src/data/`. **Referencia corregida por el asistente de planificación:** el criterio original pedía «0 `PENDIENTE_CLIENTE` en `src/data/`», pero `src/data/negocio.js` lo contiene por diseño (5 veces en 4 líneas: un comentario, la constante que se exporta y dos datos que no se publican, `tiemposRespuesta` y `anioInicio`). Lo que se exige es que no llegue a `dist/`, y ahí hay 0.
- [x] `public/_headers`: la única diferencia respecto de `main` es la cabecera HSTS (y su comentario) en la regla `/*`. `dist/_headers` contiene `Strict-Transport-Security: max-age=300` una sola vez, sin `includeSubDomains` ni `preload`. Se informa el número de reglas y la línea más larga del archivo. **Medido:** la diferencia con `main` son 5 líneas agregadas (4 de comentario y la cabecera) y 0 quitadas; `dist/_headers` es idéntico a `public/_headers` y contiene la cabecera 1 vez, con `max-age=300`; 0 `includeSubDomains` y 0 `preload` fuera de los comentarios; 5 reglas; línea más larga, de 99 caracteres (106 bytes). No probado en Cloudflare: fase B.
- [x] `AGENTS.md` §6.4 y `DESIGN.md` §5 dicen «nombre completo» del autor, con 0 ocurrencias de «nombre abreviado» en ambos, y sin otros cambios en esos dos archivos. **Medido:** 1 «nombre completo» y 0 «nombre abreviado» en cada uno; 1 línea cambiada en cada archivo.
- [x] La compilación local no muestra «No data found for font family» y `dist/` contiene los `.woff2` (se listan). **Medido:** 0 apariciones; 6 archivos en `dist/_astro/fonts/`, 112.872 B en total (lista en la bitácora). La compilación local reutiliza la caché de fuentes del equipo: no prueba que el proveedor responda (eso lo muestra el registro de Cloudflare, fase B).
- [x] `evidencia-05-01-fase-b.md` existe con la estructura descrita; la tabla de WhatsApp coincide con los enlaces de `dist/`. **Medido:** 17 enlaces (14 en la portada y 3 en el 404), todos al mismo número, y 11 mensajes distintos: 11 filas.
- [x] La Auditoría 10 existe en `auditoria-tecnica.md` y AUD-08-032 figura «Resuelto en 05-01». **Medido:** así es.
- [x] `git status` muestra cambios solo en `public/_headers`, `AGENTS.md`, `DESIGN.md` y `_planificacion/`. **Medido:** así es, más un cambio ajeno que no se tocó (`AD src/assets/LogoGruasBurgos.svg`).

**Fase B (evidencia en `evidencia-05-01-fase-b.md`):**

1. En la **vista previa de la rama**, antes del merge: `curl.exe -sI` devuelve `200 OK` y `strict-transport-security: max-age=300` (más `x-robots-tag: noindex`). Los `*.pages.dev` ya están en la lista de HSTS de los navegadores, así que es una prueba sin riesgo. **Registrado (evidencia del 2026-10-06):** despliegue «Success» del commit `c3c4033`; la respuesta trae `Strict-Transport-Security: max-age=300`, sin `includeSubDomains` ni `preload`, y `x-robots-tag: noindex`. La salida pegada no incluye la línea de estado: el `200 OK` consta solo por la respuesta del desarrollador («sí, implícito en la respuesta exitosa»).
2. En **producción**, después del merge:
   - [x] Cloudflare publicó el commit esperado (estado «Success»). **Registrado:** «Success», commit `c3c4033c5284953cc3e642572a20d22db86105f7`.
   - [x] `https://gruasvillarrica.cl/` y una ruta inexistente (404) devuelven `strict-transport-security: max-age=300`; `http://gruasvillarrica.cl/` responde 301 a HTTPS y `www` responde 301 a la raíz. Las demás cabeceras de `_headers` siguen presentes. Se registra el `max-age` vigente y el comando. **Registrado:** portada (`200 OK`) y ruta inexistente (`404 Not Found`) con `Strict-Transport-Security: max-age=300`; `http` responde 301 a `https://gruasvillarrica.cl/` sin la cabecera; `www` responde 301 a la raíz; las otras cinco cabeceras de `/*` y el `Cache-Control` de `/`, presentes; sin `x-robots-tag`. `max-age` vigente: 300. Comando: `curl.exe -sI`.
   - [x] Prueba de humo completa y documentada (teléfono y escritorio), con todos los mensajes de WhatsApp de la tabla. Lo que no se pudo verificar (iPhone, por ejemplo) figura como «no verificado». **Registrado:** todas las casillas «sí» en un teléfono Android y en un PC, con los 11 mensajes de WhatsApp. Firefox en el PC: «sí». **No verificado:** Safari en iPhone. Detalle faltante: la evidencia no indica modelo, sistema, navegador ni tamaño de ventana, ni qué tarjeta de servicio se probó en escritorio.
   - [x] Registro de compilación de `main` sin «No data found for font family» y con la línea de la validación de datos provisionales; se transcriben las líneas. **Registrado:** `22:06:19 [assets] Copying fonts (6 files)...` y `22:06:45 [validar-datos-provisionales] Sin PENDIENTE_CLIENTE en 127 archivos publicados.`; «No data found for font family» no aparece. Único aviso: `npm warn EBADENGINE` de `corepack`, sin efecto en la compilación.
   - [x] Caché medida en `robots.txt`, `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, los sitemaps, el 404, `/` y un archivo de `/_astro/`; el valor de Cloudflare queda aceptado y registrado. **Registrado:** `/` y los dos sitemaps, `public, max-age=0, must-revalidate`; `robots.txt`, `favicon.ico`, `favicon.svg` y `apple-touch-icon.png`, `public, max-age=14400, must-revalidate`; 404, `no-store`; `/_astro/Icono.DSEMQWBb.css`, `public, max-age=31536000, immutable`. Aceptado por el desarrollador.
   - [x] PageSpeed móvil de la versión final: 95 o más en Rendimiento, Accesibilidad, Buenas prácticas y SEO (mediana de tres ejecuciones); LCP de 2,5 s o menos; CLS 0. Se informa también escritorio y el elemento del LCP. **Registrado:** móvil, tres ejecuciones: Rendimiento 97, 99 y 99 (mediana 99); Accesibilidad, Buenas prácticas y SEO, 100 en las tres; LCP 2,3, 1,8 y 1,8 s (mediana 1,8 s); CLS 0; TBT 0 ms. Escritorio: 100 en las cuatro categorías, LCP 0,6 s, CLS 0, 0 y 0,004. **Salvedad: el elemento del LCP no se determinó** (la respuesta no se leyó del informe).
   - [x] JSON-LD sin errores en el validador de Schema.org y en la Prueba de resultados enriquecidos de Google. **Registrado:** Schema.org, 0 errores y 0 advertencias, con `areaServed` y `paymentAccepted`; Google, 1 elemento válido y 0 errores críticos, con los avisos opcionales de `priceRange` y `postalCode`.
   - [x] Sin hallazgos de severidad Alta abiertos en la Auditoría 10. **Registrado:** un hallazgo nuevo, AUD-10-001, de severidad Baja.

## Fuera de alcance

- Search Console, Web Analytics y Google Ads: 05-02.
- Subir HSTS más allá de 300 s, `includeSubDomains` y `preload`: después de esta iteración, por pasos y con decisión del desarrollador.
- Fijar valores propios de caché para `robots.txt` y `favicon.ico`.
- Probar la falla de la validación en Cloudflare.
- FA-05 (zoom al 400 %), FA-09 (letra en rem) y AUD-09-019 (LCP bajo 2,0 s): siguen diferidos u opcionales.
- Primera pantalla a 320 × 568 px: riesgo aceptado.

## Tareas del desarrollador

1. Hacer `commit` y `push` de la rama y comprobar el HSTS en la vista previa (fase B, punto 1).
2. Hacer el Pull Request y el merge a `main` y confirmar que Cloudflare publicó el commit esperado.
3. Ejecutar la fase B en producción: prueba de humo, cabeceras, caché, PageSpeed y validadores con `curl.exe -sI`, y completar `evidencia-05-01-fase-b.md`.
4. Entregar las líneas del registro de compilación de Cloudflare (fuentes y validación).
5. Marcar la iteración «Terminada» cuando la verifique.