# Épica 01 · Fundación del proyecto

- **Estado:** En curso
- **Objetivo:** dejar un proyecto Astro 7 compilable, versionado y documentado, con la arquitectura de carpetas y la fuente única de datos del negocio lista para construir encima.

## Alcance

1. Proyecto creado en WebStorm con Astro 7, Tailwind 4, sitemap y Prettier, usando PNPM.
2. Documentación raíz (`README.md`, `AGENTS.md`, `DESIGN.md`) y permisos de Claude Code.
3. Estructura `_planificacion/` completa.
4. Layout base, cabecera HTML, página 404 y módulo `src/data/negocio.js`.

## Iteraciones

| Iteración | Nombre                                        |
| :-------- | :-------------------------------------------- |
| 01-01     | Andamiaje del proyecto                        |
| 01-02     | Arquitectura base, layout y datos del negocio |

## Criterio de término

- `pnpm build` genera `dist/` sin errores.
- El repositorio remoto tiene el primer commit del desarrollador.
- Cloudflare Pages está conectado y genera una URL de vista previa.
