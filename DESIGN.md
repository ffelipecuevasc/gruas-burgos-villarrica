# DESIGN.md · Sistema de diseño de Grúas Burgos

Sistema de diseño derivado del prototipo aprobado (`index-prototipo.html`). El prototipo es la referencia visual; este documento es la referencia de implementación. Donde ambos difieren, prevalece este documento, porque aquí se corrigen problemas de accesibilidad y rendimiento detectados en la auditoría.

---

## 1. Concepto visual

**Señalética vial de emergencia sobre asfalto nocturno.** Fondo casi negro, un único naranja de alta visibilidad (el de chalecos, conos y balizas) y tipografía condensada en mayúsculas, como la de los letreros de carretera. El diseño debe transmitir tres cosas en menos de un segundo: disponibilidad inmediata, capacidad técnica y un número al que llamar.

Principios:

1. **El teléfono es el protagonista.** En cualquier punto de la página, en móvil, hay una acción de llamada o WhatsApp visible sin hacer scroll.
2. **Un solo acento.** El naranja `#ff5715` se reserva para acciones y datos críticos. Si todo es naranja, nada destaca.
3. **Ángulos rectos, estructura industrial.** Bloques sólidos, sin sombras suaves decorativas ni degradados como adorno (el único degradado permitido es el velo sobre la foto del hero).
4. **Modo oscuro único.** El sitio no tiene tema claro. Se declara `color-scheme: dark`.

## 2. Color

Paleta tonal oscura derivada de Material 3 a partir del naranja de marca.

### 2.1 Superficies (de más profunda a más clara)

| Token                       | Hex       | Uso                                               |
| :-------------------------- | :-------- | :------------------------------------------------ |
| `surface-container-lowest`  | `#0e0e0e` | Fondo de hero, header superior, footer            |
| `surface` / `background`    | `#131313` | Fondo general del `body`                          |
| `surface-container-low`     | `#1c1b1b` | Barra de navegación, secciones alternas, métricas |
| `surface-container`         | `#201f1f` | Tarjetas de servicio, bloques de datos            |
| `surface-container-high`    | `#2a2a2a` | Estado hover de tarjetas                          |
| `surface-container-highest` | `#353534` | Etiquetas (chips), bordes, contenedor de íconos   |

### 2.2 Acento y texto

| Token                | Hex       | Uso                                                         |
| :------------------- | :-------- | :---------------------------------------------------------- |
| `primary-container`  | `#ff5715` | Naranja de marca: botones principales, íconos, cifras clave |
| `primary`            | `#ffb59e` | Naranja claro: enlaces, textos destacados sobre oscuro      |
| `on-surface`         | `#e5e2e1` | Texto principal                                             |
| `secondary`          | `#c8c6c5` | Texto secundario y párrafos                                 |
| `on-surface-variant` | `#e5beb2` | Enlaces de navegación inactivos                             |
| `outline`            | `#ac897e` | Bordes de campos de formulario                              |
| `error`              | `#ffb4ab` | Mensajes de validación                                      |

### 2.3 Reglas de contraste (correcciones al prototipo)

Contrastes medidos según WCAG 2.2:

| Combinación                                           | Ratio   | Resultado                                   |
| :---------------------------------------------------- | :------ | :------------------------------------------ |
| `#0e0e0e` sobre `#ff5715`                             | 6,09:1  | AA para todo texto. **Usar en botones.**    |
| `#5d1800` (on-primary) sobre `#ff5715`                | 4,15:1  | Falla AA en texto normal. **No usar.**      |
| `#e5e2e1` o blanco sobre `#ff5715`                    | ≤ 3,2:1 | Falla. **No usar.**                         |
| `#ff5715` sobre `#0e0e0e`                             | 6,09:1  | AA                                          |
| `#c8c6c5` sobre `#201f1f`                             | 9,66:1  | AAA                                         |
| `#474746` (placeholder del prototipo) sobre `#0e0e0e` | 2,08:1  | Falla. Reemplazar por `#8f8d8c` o superior. |

Regla práctica: **el texto sobre naranja siempre es `surface-container-lowest` (`#0e0e0e`)**, token `on-accent`.

## 3. Tipografía

| Rol     | Familia          | Pesos         | Uso                                      |
| :------ | :--------------- | :------------ | :--------------------------------------- |
| Display | Barlow Condensed | 600, 700, 800 | Titulares, etiquetas, botones, cifras    |
| Texto   | Chivo            | 400, 600, 700 | Párrafos, formularios, datos de contacto |

Fallbacks: `"Arial Narrow", "Roboto Condensed", sans-serif` para display y `system-ui, sans-serif` para texto. Ambas familias se cargan con la Fonts API de Astro (autoalojadas, con `preload` solo de Barlow Condensed 800 y Chivo 400), nunca desde Google Fonts remoto.

### 3.1 Escala tipográfica

| Token                | Tamaño / interlínea | Tracking | Peso | Familia |
| :------------------- | :------------------ | :------- | :--- | :------ |
| `headline-xl`        | 56 / 60 px          | 0,04em   | 800  | Display |
| `headline-xl-mobile` | 38 / 42 px          | 0,04em   | 800  | Display |
| `headline-lg`        | 40 / 44 px          | 0,04em   | 800  | Display |
| `headline-lg-mobile` | 28 / 32 px          | 0,03em   | 800  | Display |
| `headline-md`        | 28 / 32 px          | 0,03em   | 700  | Display |
| `headline-sm`        | 22 / 26 px          | 0,03em   | 700  | Display |
| `label-lg`           | 16 / 20 px          | 0,08em   | 700  | Display |
| `label-md`           | 14 / 18 px          | 0,08em   | 700  | Display |
| `label-sm`           | 12 / 14 px          | 0,06em   | 600  | Display |
| `body-lg`            | 18 / 28 px          | 0        | 400  | Texto   |
| `body-md`            | 15 / 22 px          | 0        | 400  | Texto   |
| `body-sm`            | 13 / 18 px          | 0,01em   | 400  | Texto   |

Reglas:

1. Titulares, etiquetas y botones van en mayúsculas mediante la clase `uppercase`; el texto fuente se escribe en formato oración para que los lectores de pantalla no lo deletreen.
2. Los párrafos nunca van en mayúsculas y su ancho máximo es de 65–75 caracteres (`max-w-prose` o `max-w-2xl`).
3. En móvil se usan las variantes `-mobile` y se escala a la versión de escritorio desde `md:`.
4. `label-sm` (12 px) no se usa sobre fondo naranja ni para información crítica.

## 4. Espaciado, retícula y forma

| Token           | Valor    |
| :-------------- | :------- |
| `space-xs`      | 0,25 rem |
| `space-sm`      | 0,5 rem  |
| `space-md`      | 1 rem    |
| `space-lg`      | 1,5 rem  |
| `space-xl`      | 2,5 rem  |
| `gutter-mobile` | 0,75 rem |
| `gutter`        | 1,25 rem |
| `margin-mobile` | 1 rem    |
| `margin`        | 2 rem    |

- Contenedor: `max-w-7xl mx-auto px-gutter`.
- Retícula de escritorio de 12 columnas (`lg:grid-cols-12`); en móvil, una columna.
- Radios: ángulos rectos por defecto. Solo se permiten `rounded-full` para indicadores de estado (puntos) y un radio máximo de `0.25rem` en campos de formulario.
- Separadores de acento: barra de 48 × 3 px (`w-12 h-[3px]`) bajo titulares principales y de 40 × 3 px bajo titulares de sección, en `on-surface`.
- Sombras: solo `shadow-xl`/`shadow-2xl` en elementos flotantes (header fijo, botones flotantes, tarjeta de despacho).

## 5. Componentes

| Componente             | Descripción y reglas                                                                                                                                                                                         |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EnlaceSaltar`         | Enlace «Saltar al contenido»: primer elemento enfocable de cada página. Queda fuera de la pantalla hasta que recibe el foco con el teclado; entonces aparece sobre el header como botón principal, con el foco de 3 px, y lleva al `main`. Sin JavaScript.            |
| `Header`               | Fijo, dos niveles: marca + estado 24/7 + teléfono (el teléfono se muestra también en móvil como botón de ícono con `aria-label`), y navegación por anclas. Altura total compensada con `scroll-padding-top`. |
| `IndicadorDisponible`  | Punto naranja con texto "Disponible 24/7". La animación de pulso se desactiva con `prefers-reduced-motion`.                                                                                                  |
| `Hero`                 | Foto fija de la grúa (una sola, sin carrusel) al 35 % bajo el velo degradado: en móvil ocupa el 60 % superior del bloque y desde `md` lo cubre entero. `h1` con ubicación y servicio, párrafo de apoyo, botones de llamada y WhatsApp visibles sin scroll a 360 × 640 px. El texto mantiene contraste AA sobre la foto. |
| `TarjetaDespacho`      | Bloque naranja con el número grande y botón de WhatsApp. Texto en `#0e0e0e`.                                                                                                                                 |
| `CintaMetricas`        | 2–4 datos verificados (por ejemplo "24/7", "+5 años"). Ninguna cifra sin confirmación del cliente.                                                                                                           |
| `TituloSeccion`        | Etiqueta superior opcional, `h2`, barra de acento y bajada. La etiqueta superior solo se usa si aporta información.                                                                                          |
| `TarjetaServicio`      | Ícono, barra, `h3`, descripción, hasta 3 características con ícono de verificación y enlace de acción.                                                                                                       |
| `BloqueEquipamiento`   | Descripción técnica de la flota y chips de especificaciones confirmadas.                                                                                                                                     |
| `GaleriaTrabajos`      | Bloque de Inicio entre Quiénes somos y las opiniones: título «Trabajos en terreno» y nueve fotos, sin leyendas, visor ni interacción. La primera es apaisada y ocupa dos celdas; las demás son cuadradas. 2 columnas en móvil, 4 desde `md` y 5 desde `lg`, con separación `space-sm`, ángulos rectos y sin sombras. |
| `TarjetaResena`        | Cita breve, nombre abreviado del autor, fecha y enlace a Google Maps. Sin estrellas inventadas.                                                                                                              |
| `ListaCobertura`       | Filas con localidad, referencia de ruta y tiempo estimado. Tiempos solo si el cliente los confirma.                                                                                                          |
| `FormularioCotizacion` | Campos con `label` visible; al enviar compone un mensaje de WhatsApp (RDA-006). Sin `alert()`.                                                                                                               |
| `CintaLlamada`         | Franja naranja de cierre con pregunta y botón de llamada en oscuro.                                                                                                                                          |
| `AccionesFlotantes`    | Llamar y WhatsApp fijos abajo a la derecha (en móvil, barra inferior de ancho completo con dos botones de 56 px de alto). Respetan `env(safe-area-inset-bottom)`. Desde `md` se ocultan, sin transición, mientras el pie de página está a la vista, para no tapar sus textos ni enlaces, y reaparecen al subir. Ocultos no reciben foco ni los anuncia un lector de pantalla; si uno tiene el foco del teclado, sigue visible. Sin JavaScript no se ocultan y el pie les reserva espacio al final. La barra móvil no se oculta nunca. |
| `Footer`               | Marca, dirección, cobertura, contacto y redes sociales (Instagram, Facebook, TikTok). La franja inferior lleva solo el crédito del desarrollador, centrado a todos los anchos. Sin año ni datos tributarios: la razón social y el RUT no se publican. |

### 5.1 Botones

| Variante   | Fondo                                           | Texto                 | Hover                     |
| :--------- | :---------------------------------------------- | :-------------------- | :------------------------ |
| Principal  | `primary-container`                             | `on-accent` (#0e0e0e) | `primary`                 |
| Secundario | `surface-container-lowest`                      | `on-surface`          | texto `primary`           |
| Contorno   | transparente, borde `surface-container-highest` | `on-surface`          | borde `primary-container` |

Todos: tipografía display en mayúsculas, alto mínimo de 48 px, foco visible con `outline: 3px solid #ffb59e; outline-offset: 2px`. El texto de la acción dice exactamente lo que ocurre: "Llamar ahora", "Escribir por WhatsApp".

Excepciones (iteración 04-04, decisiones del desarrollador del 2026-10-02):

- **Botones de la barra móvil de `AccionesFlotantes`:** llegan a los bordes de la pantalla y un anillo hacia afuera no cabe. El anillo de 3 px se dibuja hacia adentro (`outline-offset: -3px`): en `on-accent` sobre el botón naranja (6,09:1) y en `primary` sobre el botón oscuro (11,36:1).
- **«Volver al inicio» del 404:** variante secundaria con un borde de 1 px en el token `outline` (5,87:1 contra `surface`). El relleno `surface-container-lowest` no se distingue del fondo `surface` (1,04:1) y el borde de la variante de contorno tampoco alcanza 3:1 (1,51:1).

## 6. Iconografía

Material Symbols Outlined, peso 400, **como SVG en línea** (paquete `@iconify-json/material-symbols` renderizado en compilación). Nunca como fuente web.

| Uso             | Ícono                                    |
| :-------------- | :--------------------------------------- |
| Marca           | Isotipo local (ver 6.1)                  |
| Llamada         | `call-outline`                           |
| WhatsApp        | ícono oficial de WhatsApp (Simple Icons) |
| Horario         | `schedule-outline`                       |
| Emergencia      | `emergency-outline`                      |
| Rescate en ruta | `home-repair-service-outline`            |
| Traslado        | `rv-hookup-outline`                      |
| Larga distancia | `distance-outline`                       |
| Verificación    | `check-circle-outline`                   |
| Ubicación       | `location-on-outline`                    |
| Cobertura       | `near-me-outline`                        |
| Advertencia     | `warning-outline`                        |

Íconos decorativos con `aria-hidden="true"`; íconos que actúan solos como botón llevan `aria-label` en el elemento interactivo.

### 6.1 Isotipo de la marca

El isotipo es el ícono «auto-towing» de Material Symbols Light (Apache License 2.0), entregado por el cliente el 2026-10-01. Es la única excepción al paquete de íconos: vive como recurso local en `src/assets/marca/isotipo-gruas-burgos.svg` y se usa con `<Icono nombre="marca" />`. No es una marca registrable: siempre acompaña al nombre «Grúas Burgos» escrito en la tipografía display.

| Uso                                                                              | Isotipo             | Fondo                                                               |
| :------------------------------------------------------------------------------- | :------------------ | :------------------------------------------------------------------ |
| Header                                                                           | `on-accent`, 32 px  | Bloque `primary-container` de 40 × 40 px, a la izquierda del nombre |
| Favicon (`favicon.svg`, `favicon.ico`) e ícono de iOS (`apple-touch-icon.png`)   | `primary-container` | `surface-container-lowest`                                          |

## 7. Imágenes

1. Solo fotos reales de Grúas Burgos (flota, operaciones, base), publicadas tal como están en las redes del negocio (RDA-011). Las imágenes del prototipo son de referencia y no se publican.
2. Formatos: AVIF con reserva WebP, generados por `<Picture />` (`formats={['avif']}` y `fallbackFormat="webp"`). No se publican PNG ni JPEG de reserva. Ancho máximo de origen 1920 px. El procesamiento requiere `sharp` como dependencia directa (RDA-012).
3. Hero: `loading="eager"` y `fetchpriority="high"`; opacidad 35 % bajo un velo de `surface-container-lowest`, parejo en la parte alta y opaco donde termina la foto. El velo tiene tres tramos, porque el recorte de la foto cambia con el ancho: en teléfonos, 12 % hasta el 40 % del alto del bloque y opaco en el 60 %; desde 430 px, 23 % con las mismas paradas; desde `md`, 28 % hasta el 70 % y opaco en el 100 %. Con esos valores el contraste mínimo medido del texto sobre la foto es 4,86:1 (iteración 05-03, 35 anchos entre 320 y 1920 px; AA pide 4,5:1). Cualquier valor que aclare más la foto exige volver a medir el contraste en esos anchos antes de publicarlo.
4. Mapa de cobertura: imagen estática local (no iframe de Google Maps en la carga inicial). El enlace "Cómo llegar" abre Google Maps.
5. Todas las imágenes con `alt` descriptivo en español y dimensiones explícitas. Ningún `alt` transcribe rótulos de las fotos ni nombra la marca o el modelo de las grúas.
6. Las fotos que quedan bajo la primera pantalla usan `loading="lazy"`. Cada `<Picture />` declara `widths` y `sizes` acordes al espacio que ocupa, y `width` y `height` del tamaño mayor que necesita, para no publicar la foto completa.

## 8. Movimiento

- Permitido: pulso del indicador de disponibilidad, transiciones de color en hover (150–200 ms) y `active:scale-95` en botones.
- No se usan animaciones de entrada por sección ni efectos de scroll.
- Con `prefers-reduced-motion: reduce`, se desactivan `animate-ping` y `animate-pulse`.
- No se oculta la barra de desplazamiento (el prototipo lo hacía; se elimina).

## 9. Implementación en Tailwind CSS 4

Tokens en `src/styles/global.css`:

```css
@import 'tailwindcss';

@theme {
  --color-surface-container-lowest: #0e0e0e;
  --color-surface: #131313;
  --color-surface-container-low: #1c1b1b;
  --color-surface-container: #201f1f;
  --color-surface-container-high: #2a2a2a;
  --color-surface-container-highest: #353534;
  --color-primary-container: #ff5715;
  --color-primary: #ffb59e;
  --color-on-accent: #0e0e0e;
  --color-on-surface: #e5e2e1;
  --color-on-surface-variant: #e5beb2;
  --color-secondary: #c8c6c5;
  --color-placeholder: #8f8d8c;
  --color-outline: #ac897e;
  --color-error: #ffb4ab;

  --spacing-space-xs: 0.25rem;
  --spacing-space-sm: 0.5rem;
  --spacing-space-md: 1rem;
  --spacing-space-lg: 1.5rem;
  --spacing-space-xl: 2.5rem;
  --spacing-gutter-mobile: 0.75rem;
  --spacing-gutter: 1.25rem;
  --spacing-margin-mobile: 1rem;
  --spacing-margin: 2rem;

  --text-headline-xl: 56px;
  --text-headline-xl--line-height: 60px;
  --text-headline-xl--letter-spacing: 0.04em;
  --text-headline-xl--font-weight: 800;
  /* …resto de la escala de la sección 3.1 con el mismo patrón… */
}

@theme inline {
  --font-display: var(--font-barlow-condensed), 'Arial Narrow', sans-serif;
  --font-body: var(--font-chivo), system-ui, sans-serif;
}

@layer base {
  html {
    color-scheme: dark;
    scroll-behavior: smooth;
    /* Lo que recibe el foco no queda bajo lo fijo (WCAG 2.4.11): header de 7rem arriba y barra
       móvil de 3.5rem más su borde abajo, cada uno con una holgura de 1.25rem. */
    scroll-padding-top: calc(7rem + 1.25rem);
    scroll-padding-bottom: calc(3.5rem + 1px + env(safe-area-inset-bottom) + 1.25rem);
  }
  /* Desde `md`, lo fijo de abajo son los botones flotantes (8rem) más la holgura.
     Al llegar al pie los botones se ocultan (`AccionesFlotantes`): `Footer` ya no reserva
     ese alto, salvo sin JavaScript, que lo conserva al final de la página. */
  @media (min-width: 48rem) {
    html {
      scroll-padding-bottom: 9.25rem;
    }
  }
  /* Las anclas descuentan la holgura: siguen quedando justo bajo el header. */
  main,
  section[id] {
    scroll-margin-top: -1.25rem;
  }
  body {
    @apply bg-surface text-on-surface font-body antialiased;
  }
  :focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
  }
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

Uso: `bg-primary-container text-on-accent font-display text-headline-sm uppercase px-space-lg py-space-md`.

## 10. Voz y textos

- Español de Chile, trato de tú, frases cortas. Primero la acción, después la explicación.
- Titular del hero con servicio y lugar: por ejemplo "Grúas en Villarrica y La Araucanía, 24 horas".
- Nada de superlativos no comprobables ("récord", "0 daños", "100 %") salvo que el cliente los respalde.
- Los nombres de las acciones se mantienen iguales en toda la página: "Llamar ahora" y "Escribir por WhatsApp".
