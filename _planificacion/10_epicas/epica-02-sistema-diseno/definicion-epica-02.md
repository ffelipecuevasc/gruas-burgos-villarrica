# Épica 02 · Sistema de diseño

- **Estado:** Terminada
- **Objetivo:** trasladar el lenguaje visual del prototipo a tokens de Tailwind 4 y componentes Astro reutilizables, corrigiendo los problemas de accesibilidad y rendimiento de la auditoría 01.

## Alcance

1. Tokens de color, tipografía, espaciado y movimiento en `global.css` según `DESIGN.md`.
2. Fuentes autoalojadas y sistema de íconos SVG.
3. Componentes base (botones, títulos de sección, contenedor, indicador de disponibilidad).
4. Estructura persistente: header, acciones flotantes de contacto y footer.

## Iteraciones

| Iteración | Nombre                              | Estado    |
| :-------- | :---------------------------------- | :-------- |
| 02-01     | Tokens de diseño, fuentes e íconos  | Terminada |
| 02-02     | Componentes base de interfaz        | Terminada |
| 02-03     | Header, acciones flotantes y footer | Terminada |

## Criterio de término

- Todas las piezas persistentes se ven según `DESIGN.md` a 360 px, 768 px y 1280 px. (verificado el 2026-09-30 con Chromium a 360×640, 768×1024 y 1280×800: header de 112 px, barra inferior solo bajo `md`, botones flotantes desde `md`, sin desborde horizontal)
- Ninguna petición de red a dominios de terceros al cargar la página. (sin referencias a dominios de terceros en `dist/` ni `src/`; la pestaña Red queda pendiente de confirmación visual del desarrollador)
- Contrastes AA verificados en todos los componentes. (texto desde 6,09:1; el borde del botón «contorno» es una excepción aceptada, AUD-05-001)
