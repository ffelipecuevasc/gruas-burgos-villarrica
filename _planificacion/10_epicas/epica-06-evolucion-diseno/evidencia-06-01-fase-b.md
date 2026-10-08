# Evidencia de la fase B de 06-01 · Carrusel en la sección de opiniones

Archivo para que el desarrollador entregue lo que solo él puede obtener: la vista previa de Cloudflare Pages, el teléfono, TalkBack y PageSpeed en producción. Todo lo que quede vacío se registrará como «no verificado».

El repositorio es público. **No pegues** claves, identificadores de cuentas, correos personales ni mensajes del cliente. Las capturas no deben mostrar datos personales.

Sigue las secciones en orden.

* **Fecha y hora de las pruebas:**
* **Hash del commit de la rama `iteracion/06-01-carrusel-opiniones`:**
* **Quién hizo las pruebas y con qué equipos (PC, teléfono, sistema y navegador):**

## 1. Vista previa de la rama

En el panel de Cloudflare: **Workers & Pages** › proyecto del sitio › **Deployments**.

* **Estado del despliegue de la rama («Success» u otro):**
* **¿El commit desplegado es el de la rama? (sí / no):**

### 1.1 Teléfono Android (Chrome)

Abre la vista previa y baja hasta «Lo que dicen nuestros clientes».

* **¿Se ve una opinión a la vez? (sí / no):**
* **¿El carrusel se desliza con el dedo, hacia ambos lados? (sí / no):**
* **¿Los botones de anterior y siguiente y los puntos funcionan al tocarlos? (sí / no):**
* **¿Se llega a la opinión 10 y ahí el botón de siguiente queda apagado? (sí / no):**
* **¿Al deslizar el carrusel la página se mueve hacia los lados? (sí / no):**
* **¿«Ver en Google» abre la reseña? (sí / no):**
* **¿Algo se mueve solo, sin tocar nada? (sí / no):**
* **Observaciones:**

### 1.2 PC: Chrome y Firefox

* **Chrome, ventana ancha (1280 px o más): ¿tres opiniones a la vez y las flechas avanzan de a tres? (sí / no):**
* **Chrome, ventana de unos 800 px: ¿dos opiniones a la vez? (sí / no):**
* **Chrome: ¿se puede arrastrar con el ratón? (sí / no):**
* **Chrome, con Tab: ¿se llega a los enlaces «Ver en Google», a las flechas y a los puntos, y la opinión enfocada queda a la vista? (sí / no):**
* **Firefox: ¿las flechas, los puntos y el arrastre funcionan igual que en Chrome? (sí / no):**
* **Observaciones:**

## 2. TalkBack (teléfono Android)

Con TalkBack activado, recorre la sección de opiniones.

* **¿Anuncia la región «Opiniones de clientes» como carrusel? (sí / no; qué dice):**
* **¿Anuncia «Opinión N de 10» en cada opinión? (sí / no; qué dice):**
* **¿Cómo pronuncia la descripción «opinión» de cada diapositiva? (bien / mal; qué dice) (AUD-11-003):**
* **¿Anuncia los botones «Opinión anterior» y «Opinión siguiente» con su nombre? (sí / no):**
* **¿Anuncia como deshabilitado el botón del extremo? (sí / no) (AUD-11-002):**
* **¿Anuncia los puntos como «Ir al grupo N de M»? (sí / no):**
* **¿Se pueden leer las diez opiniones completas? (sí / no):**

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
