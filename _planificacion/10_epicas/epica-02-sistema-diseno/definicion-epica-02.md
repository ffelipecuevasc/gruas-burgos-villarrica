# Épica 02 · Sistema de diseño

- **Estado:** Pendiente
- **Objetivo:** trasladar el lenguaje visual del prototipo a tokens de Tailwind 4 y componentes Astro reutilizables, corrigiendo los problemas de accesibilidad y rendimiento de la auditoría 01.

## Alcance

1. Tokens de color, tipografía, espaciado y movimiento en `global.css` según `DESIGN.md`.
2. Fuentes autoalojadas y sistema de íconos SVG.
3. Componentes base (botones, títulos de sección, contenedor, indicador de disponibilidad).
4. Estructura persistente: header, acciones flotantes de contacto y footer.

## Iteraciones

| Iteración | Nombre                               |
| :-------- | :----------------------------------- |
| 02-01     | Tokens de diseño, fuentes e íconos   |
| 02-02     | Componentes base de interfaz         |
| 02-03     | Header, acciones flotantes y footer  |

## Criterio de término

- Todas las piezas persistentes se ven como en el prototipo a 360 px, 768 px y 1280 px.
- Ninguna petición de red a dominios de terceros al cargar la página.
- Contrastes AA verificados en todos los componentes.
