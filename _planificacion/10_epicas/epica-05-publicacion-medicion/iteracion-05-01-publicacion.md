# Iteración 05-01 · Publicación y verificación final en producción

- **Épica:** 05 · Ajustes finales, publicación y medición
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/05-01-verificacion-final`
- **Depende de:** 05-03, 05-04 y 05-05
- **RDA relacionadas:** RDA-001, RDA-008, RDA-012
- **Hallazgos que cierra:** AUD-04-003 (fuentes en el registro de compilación), AUD-09-016 (caché), AUD-09-018 (HSTS) y AUD-08-023 (aprobación del cliente). Evalúa AUD-08-032 si el desarrollador la autoriza.

## Objetivo

Verificar en producción la versión final del sitio, ya con los cambios de 05-03, 05-04 y 05-05, y cerrar lo que quedó pendiente de la publicación del 2026-10-02.

**Actualización 2026-10-05:** la publicación se adelantó (decisión 7 de la Épica 04) y `https://gruasvillarrica.cl` está en producción desde el commit `b5fcbfc`. Esta iteración ya no publica: verifica. Se hace al final de la épica porque la prueba de humo, PageSpeed, el caché y HSTS deben medirse sobre el sitio modificado. La evidencia previa está en `evidencia-04-03-fase-b.md` y `bitacora-04-03-fase-b-2026-10-02.md`.

Esta iteración define **qué** debe quedar logrado y **cómo se comprueba**. La forma de lograrlo la decide quien implementa, dentro de las reglas de la iteración.

## Ya verificado el 2026-10-02 (no se repite)

Dominio y `www` con 301 a la raíz, HTTPS forzado, indexación solo en el dominio propio, `noindex` en `pages.dev`, cabeceras de `_headers`, compilación de `main` con Node 24, pnpm 12.8.1 y `sharp` 0.35.5, validación de datos provisionales sin `PENDIENTE_CLIENTE` en 114 archivos, y llamada, WhatsApp, «Cómo llegar» y formulario en un Android.

## Reglas de la iteración

1. Esta iteración no cambia el diseño ni el contenido. Cualquier defecto que halle se registra y, si es de severidad Alta o Media, se corrige en una iteración corta nueva.
2. **Autorizado:** editar `public/_headers` para la caché de `robots.txt` y `favicon.ico`, si el desarrollador decide fijarla. Cualquier otro cambio en archivos de configuración requiere consultar antes.
3. **Autorizado solo con aprobación del desarrollador:** alinear `AGENTS.md` §6.4 y `DESIGN.md` §5 con la decisión D3 de RDA-007 (nombre completo del autor de las reseñas; AUD-08-032).
4. No se hacen `commit`, `push` ni cambios de rama. Los hace el desarrollador. El agente no consulta URLs públicas (`curl` y `wget` están denegados): las mediciones sobre producción son de la fase B.
5. Cuando se cite el registro de compilación de Cloudflare, se transcribe lo que entregó el desarrollador, sin inventar líneas.

## Contenido aprobado de esta iteración

Ninguno. No se publica nada nuevo.

## Tareas

1. **Validación de datos provisionales, caso de falla.** Hoy solo se probó en local (04-02, con `CF_PAGES_BRANCH=main`). Se reevalúa con el cambio de 05-04, que elimina razón social y RUT de los datos. El desarrollador decide si se prueba en Cloudflare (una compilación fallida de `main` no reemplaza la versión publicada, pero exige un push a `main`) o si basta la prueba local. La decisión queda registrada.

2. **Prueba de humo en producción**, tras el merge final, en el teléfono y en escritorio:
    - Las anclas `#inicio`, `#servicios` y `#contacto` llevan a su sección con el título visible bajo el header.
    - Llamada, y **todos** los mensajes de WhatsApp del sitio (hero, barra, siete servicios, formulario y botones flotantes), con el texto aprobado.
    - Orden de la página, servicios nuevos, franja de «Quiénes somos», medios de pago y mapa.
    - En escritorio, los botones flotantes se ocultan al llegar al pie y reaparecen al subir.
    - Página 404 vista en el teléfono.
    - Primera pantalla del teléfono con la barra de direcciones del navegador a la vista: etiqueta, `h1` y ambos botones del hero visibles sobre la barra inferior (se informa cuánto sobra).
    - iPhone con Safari, si hay uno disponible. Si no, se declara «no verificado».

3. **Fuentes (AUD-04-003).** El registro de compilación de `main` en Cloudflare no contiene «No data found for font family», y `dist/` publica los archivos `.woff2`. Se transcriben las líneas de las fuentes.

4. **Caché (AUD-09-016).** Hoy `robots.txt` y `favicon.ico` responden `Cache-Control: public, max-age=14400, must-revalidate` (4 horas), que `_headers` no define. Se miden también `favicon.svg`, `apple-touch-icon.png`, los sitemaps y el 404, que no se revisaron. El desarrollador decide si se fija un valor o se acepta el de Cloudflare. La decisión queda registrada.

5. **HSTS (AUD-09-018).** Se evalúa `Strict-Transport-Security` en el panel de Cloudflare (SSL/TLS › Edge Certificates, «HTTP Strict Transport Security») o en `_headers`; esta última vía no está probada.
    - **Riesgo real:** el navegador que recibe la cabecera se niega a abrir el sitio por `http` durante todo el `max-age`. Si el certificado vence o falla, si se pausa Cloudflare o si se mueven los servidores de nombres, los visitantes que ya la recibieron no pueden entrar. Con `includeSubDomains`, un subdominio sin HTTPS queda inaccesible. Con `preload`, salir de la lista de los navegadores tarda meses.
    - **Reversión:** se puede apagar con `max-age` en 0, pero solo surte efecto en los navegadores que vuelvan a visitar el sitio por HTTPS. Los que ya la recibieron siguen forzando HTTPS hasta que venza su plazo.
    - **Plan gradual:** empezar con `max-age=300` (5 minutos), sin `includeSubDomains` ni `preload`, y comprobarlo con `curl.exe -sI`. Si no hay problemas, subir a 86400 (1 día), luego a 604800 (1 semana) y por último a 31536000 (1 año). El avance hasta el año puede continuar después de la entrega. `includeSubDomains` solo si todos los subdominios, incluido `www`, sirven HTTPS. `preload` solo con una decisión explícita del desarrollador.

6. **Lighthouse y PageSpeed sobre la versión final** en `https://gruasvillarrica.cl`, móvil y escritorio, tres ejecuciones cada uno. Se informan las cifras y el elemento del LCP. Sirven de cifras base para 05-02.

7. **Validadores.** JSON-LD en el validador de Schema.org y en la Prueba de resultados enriquecidos de Google, con los cambios de 05-04 (`areaServed` y `paymentAccepted`).

8. **Documentación.**
    - Bitácora nueva `bitacora-05-01-AAAA-MM-DD.md` en `_planificacion/99_bitacora/`, con la plantilla de `_planificacion/README.md` §5.2, fecha real, fin de línea LF y estado final «En revisión». Nunca «Terminada».
    - `registro-log.md`: fila de 05-01, hallazgos cerrados, «Iteración activa» y «Próximo hito».
    - `auditoria-tecnica.md`: Auditoría 10 con los hallazgos de la fase B (AUD-10-NNN) y el estado de AUD-04-003, AUD-09-016, AUD-09-018 y AUD-08-023.

## Criterios de aceptación

**Fase A, local:**

- [ ] `pnpm format:check` sin diferencias; `pnpm check` y `pnpm build` con 0 errores y 0 advertencias.
- [ ] La lista de verificación de la prueba de humo, la plantilla de la fase B y la Auditoría 10 están preparadas, y `public/_headers` refleja lo que decida el desarrollador sobre la caché.

**Fase B, producción (evidencia en `evidencia-05-01-fase-b.md`):**

- [ ] Prueba de humo completa y documentada, con los puntos de la tarea 2. Lo que no se pudo verificar (iPhone, por ejemplo) figura como «no verificado».
- [ ] Registro de compilación de `main` sin «No data found for font family» y con los `.woff2` publicados.
- [ ] Caché de `robots.txt` y `favicon.ico` medida y decidida; los demás archivos, medidos.
- [ ] HSTS: decidido. Si se activa, se registra el `max-age` vigente y el comando que lo comprobó.
- [ ] PageSpeed móvil de la versión final: 95 o más en Rendimiento, Accesibilidad, Buenas prácticas y SEO (mediana de tres ejecuciones); LCP de 2,5 s o menos; CLS 0.
- [ ] JSON-LD sin errores en los dos validadores.
- [ ] Aprobación del cliente de los cambios registrada (AUD-08-023).
- [ ] Sin hallazgos de severidad Alta abiertos en la Auditoría 10.

## Fuera de alcance

- Search Console, Web Analytics y Google Ads: 05-02.
- FA-05 (zoom al 400 %), FA-09 (letra en rem) y AUD-09-019 (LCP bajo 2,0 s): siguen diferidos u opcionales.
- Primera pantalla a 320 × 568 px: riesgo aceptado.

## Tareas del desarrollador

1. Hacer el merge final a `main` y confirmar que Cloudflare publicó el commit esperado.
2. Ejecutar la fase B: prueba de humo, PageSpeed, validadores y mediciones de caché con `curl.exe -sI`, y completar `evidencia-05-01-fase-b.md` con la plantilla de `evidencia-04-03-fase-b.md`.
3. Entregar las líneas del registro de compilación de Cloudflare (fuentes y validación).
4. Decidir la caché, HSTS y la prueba de falla en Cloudflare.
5. Decidir si se alinean `AGENTS.md` §6.4 y `DESIGN.md` §5 con D3 (AUD-08-032).
6. Registrar la aprobación del cliente (AUD-08-023).
7. Marcar la iteración «Terminada» cuando la verifique.
