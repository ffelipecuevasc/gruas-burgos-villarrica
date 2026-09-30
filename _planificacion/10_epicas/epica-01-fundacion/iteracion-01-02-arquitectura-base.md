# Iteración 01-02 · Arquitectura base, layout y datos del negocio

- **Épica:** 01 · Fundación del proyecto
- **Estado:** En revisión
- **Rama sugerida:** `main` (temporal, ver `registro-log.md`)
- **Depende de:** 01-01
- **RDA relacionadas:** RDA-008, RDA-009
- **Hallazgos que cierra:** AUD-01-001, AUD-01-002, AUD-01-014, AUD-01-026, AUD-02-003

## Objetivo

Establecer la estructura de carpetas, el layout único del sitio y la fuente única de datos del negocio.

## Tareas

1. Crear `src/components/`, `src/layouts/` y `src/data/` con archivos reales, y `src/assets/` con un `.gitkeep`. No crear `public/` vacío: Git no versiona carpetas vacías y un `.gitkeep` dentro de `public/` se copiaría a `dist/`; se crea con su primer archivo real (04-01).
2. Crear `src/data/negocio.js` con: nombre, eslogan, teléfono (visible y E.164), WhatsApp (número y mensajes predeterminados), correo, dirección, coordenadas, horario 24/7, cobertura, redes sociales y facturación. Usar `PENDIENTE_CLIENTE` donde falte información. Exportar helpers `enlaceTelefono()` y `enlaceWhatsApp(mensaje)`.
3. Registrar como datos confirmados solo: nombre "Grúas Burgos", dirección "Vicente Reyes 870, Villarrica", dominio y URLs de Instagram, Facebook y TikTok de `rrss-gruas-burgos.txt`.
4. Crear `src/layouts/LayoutBase.astro` con `lang="es-CL"`, `color-scheme: dark`, slot para `head` y `main`.
5. Crear `src/components/CabeceraSEO.astro` con título, descripción y canonical (Open Graph y JSON-LD se completan en 04-01).
6. Crear `src/pages/404.astro` en español con botones de llamada y volver al inicio.
7. Reemplazar `index.astro` por el layout con tres secciones vacías ancladas: `#inicio`, `#servicios`, `#contacto`, cada una con su `h2` (el `h1` va en el hero).
8. Año dinámico del footer calculado en compilación.

## Criterios de aceptación

- [x] Ningún componente contiene el número de teléfono escrito en duro.
- [x] `pnpm build` genera `index.html` y `404.html`.
- [x] El HTML resultante tiene `lang="es-CL"` y un único `h1` (puede ser provisional).
- [x] Bitácora 01-02 creada.

## Fuera de alcance

- Estilos definitivos (02-01).

## Datos requeridos del cliente

- Teléfono, WhatsApp y correo (se dejan como `PENDIENTE_CLIENTE` si no llegan).
