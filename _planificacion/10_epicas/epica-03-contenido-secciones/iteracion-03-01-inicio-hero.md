# Iteración 03-01 · Sección Inicio: hero y contacto inmediato

- **Épica:** 03 · Contenido y secciones
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/03-01-hero`
- **Depende de:** 02-03
- **RDA relacionadas:** RDA-008
- **Hallazgos que cierra:** AUD-01-003 (parcial), AUD-01-011 (parcial), AUD-01-017 (parcial)

## Objetivo

Que en la primera pantalla del celular la persona sepa qué es, dónde opera y cómo llamar.

## Tareas

1. `Hero.astro` en `#inicio`: foto real con `<Picture />` (AVIF/WebP, `loading="eager"`, `fetchpriority="high"`, dimensiones explícitas) bajo velo degradado; etiqueta de emergencia; `h1` "Grúas en Villarrica y La Araucanía, 24 horas" (o variante aprobada); párrafo de apoyo con localidades reales; `BotonLlamada` y `BotonWhatsApp` con mensaje "Hola, necesito una grúa en…".
2. `TarjetaDespacho.astro` (columna derecha en escritorio, bajo los botones en móvil o se omite en móvil si duplica acciones; justificar en la bitácora).
3. `CintaMetricas.astro` con solo datos confirmados (mínimo "24/7").
4. Mientras no haya foto real, usar un fondo sólido con textura CSS; no usar las imágenes del prototipo.

## Criterios de aceptación

- [ ] A 360 × 640 px, `h1` y ambos botones de contacto visibles sin scroll.
- [ ] La imagen del hero es el elemento LCP y carga en menos de 2 s en 4G simulado.
- [ ] No aparecen afirmaciones de AUD-01-003 sin confirmar.

## Datos requeridos del cliente

- Fotos reales, número definitivo y validación de afirmaciones.
