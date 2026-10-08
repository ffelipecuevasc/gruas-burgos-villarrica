# Evidencia de la fase B de 06-01 · Carrusel en la sección de opiniones

Archivo para que el desarrollador entregue lo que solo él puede obtener: la vista previa de Cloudflare Pages, el teléfono, TalkBack y PageSpeed en producción. Todo lo que quede vacío se registrará como «no verificado».

El repositorio es público. **No pegues** claves, identificadores de cuentas, correos personales ni mensajes del cliente. Las capturas no deben mostrar datos personales.

Sigue las secciones en orden.

* **Fecha y hora de las pruebas:** 2026-10-08 a las 11:42.
* **Hash del commit de la rama `iteracion/06-01-carrusel-opiniones`:** `af4b832866996269d0110408357d58cb66a41deb` (HEAD en `af4b832`).
* **Quién hizo las pruebas y con qué equipos (PC, teléfono, sistema y navegador):** Por mi, Felipe Cuevas, con un PC con Windows 10 Pro y Google Chrome & Mozilla Firefox.

## 1. Vista previa de la rama

En el panel de Cloudflare: **Workers & Pages** › proyecto del sitio › **Deployments**.

* **Estado del despliegue de la rama («Success» u otro):** Success (Your site was deployed!).
* **¿El commit desplegado es el de la rama? (sí / no):** Sí, corresponde a `af4b832866996269d0110408357d58cb66a41deb`.

### 1.1 Teléfono Android (Chrome)

Abre la vista previa y baja hasta «Lo que dicen nuestros clientes».

* **¿Se ve una opinión a la vez? (sí / no):** Sí.
* **¿El carrusel se desliza con el dedo, hacia ambos lados? (sí / no):** Sí.
* **¿Los botones de anterior y siguiente y los puntos funcionan al tocarlos? (sí / no):** Sí.
* **¿Se llega a la opinión 10 y ahí el botón de siguiente queda apagado? (sí / no):** Sí.
* **¿Al deslizar el carrusel la página se mueve hacia los lados? (sí / no):** Sí.
* **¿«Ver en Google» abre la reseña? (sí / no):** Sí.
* **¿Algo se mueve solo, sin tocar nada? (sí / no):** No.
* **Observaciones:** Ninguna observación.

### 1.2 PC: Chrome y Firefox

* **Chrome, ventana ancha (1280 px o más): ¿tres opiniones a la vez y las flechas avanzan de a tres? (sí / no):** Sí.
* **Chrome, ventana de unos 800 px: ¿dos opiniones a la vez? (sí / no):** Sí.
* **Chrome: ¿se puede arrastrar con el ratón? (sí / no):** Sí.
* **Chrome, con Tab: ¿se llega a los enlaces «Ver en Google», a las flechas y a los puntos, y la opinión enfocada queda a la vista? (sí / no):** Sí.
* **Firefox: ¿las flechas, los puntos y el arrastre funcionan igual que en Chrome? (sí / no):** Sí.
* **Observaciones:** Ninguna observación.

## 2. TalkBack (teléfono Android)

Con TalkBack activado, recorre la sección de opiniones.

* **¿Anuncia la región «Opiniones de clientes» como carrusel? (sí / no; qué dice):**  Sí, dice "Opiniones de clientes".
* **¿Anuncia «Opinión N de 10» en cada opinión? (sí / no; qué dice):** Sí, dice "Opinión N de 10".
* **¿Cómo pronuncia la descripción «opinión» de cada diapositiva? (bien / mal; qué dice) (AUD-11-003):** Pronuncia bien la descripción de cada opinión. No es posible colocar acá qué es exactamente lo que dice en cada una de las 10 diapositivas por la extensión de todas las opiniones, pero lee bien cada una de ellas.
* **¿Anuncia los botones «Opinión anterior» y «Opinión siguiente» con su nombre? (sí / no):** Sí.
* **¿Anuncia como deshabilitado el botón del extremo? (sí / no) (AUD-11-002):** Sí.
* **¿Anuncia los puntos como «Ir al grupo N de M»? (sí / no):** Sí.
* **¿Se pueden leer las diez opiniones completas? (sí / no):** Sí.

## 3. PageSpeed Insights en producción, después del merge

En `https://pagespeed.web.dev/`, analiza `https://gruasvillarrica.cl/`. Tres ejecuciones por dispositivo. Anota las cuatro puntuaciones, LCP, CLS, TBT y el enlace al informe de cada ejecución.

Cifras de referencia (producción, 05-02, 2026-10-07): móvil 96, 96 y 94 de Rendimiento (mediana 96), 100 en las otras tres categorías, LCP 2,5 s, CLS 0; escritorio, 100 en las cuatro.

| Dispositivo | Ejecución | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT | Enlace |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Móvil | 1 | | | | | | | | |
| Móvil | 2 | | | | | | | | |
| Móvil | 3 | | | | | | | | |
| Escritorio | 1 | | | | | | | | |
| Escritorio | 2 | | | | | | | | |
| Escritorio | 3 | | | | | | | | |

* **Hash del commit publicado en `main`:**
* **Medianas en móvil (Rendimiento, Accesibilidad, Buenas prácticas, SEO):**
* **¿95 o más en las cuatro categorías? (sí / no):**
* **LCP de 2,5 s o menos (sí / no; valor):**
* **CLS 0 (sí / no; valor) (AUD-11-004):**
* **Auditorías que fallaron o con advertencias (nombre y detalle):**

## 4. Decisiones y veredicto

* **Botón del extremo con `aria-disabled` en vez de `disabled` (AUD-11-002): ¿se acepta? (sí / no, cambiar a `disabled`):**
* **Puntos de navegación cuadrados, y en dos filas de cinco bajo 768 px: ¿se aceptan? (sí / no; qué cambiar):**
* **No verificado (anota lo que no se pudo probar, por ejemplo Safari en iPhone):**
* **¿Se aprueba el Pull Request y el merge a `main`? (sí / no):**
