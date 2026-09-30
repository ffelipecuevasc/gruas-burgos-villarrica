# Iteración 01-01 · Andamiaje del proyecto

- **Épica:** 01 · Fundación del proyecto
- **Estado:** En curso (ejecución manual del desarrollador)
- **Rama sugerida:** `main` (commit inicial)
- **Depende de:** —
- **RDA relacionadas:** RDA-001, RDA-002, RDA-003
- **Hallazgos que cierra:** —

## Objetivo

Crear el proyecto vacío en WebStorm e instalar Astro 7 manualmente con el stack definido.

## Tareas

1. Crear proyecto vacío `gruas-burgos-villarrica/` en WebStorm y configurar Node 24 y PNPM.
2. Inicializar Git con rama `main` y vincular el remoto de GitHub.
3. `pnpm init`, fijar PNPM con Corepack y definir scripts, `type: module` y `engines`.
4. Instalar `astro`, `tailwindcss`, `@tailwindcss/vite`, `@astrojs/sitemap` y, como dependencias de desarrollo, `prettier`, `prettier-plugin-astro`, `prettier-plugin-tailwindcss`, `@astrojs/check` y `typescript@6` (`astro check` aún no es compatible con TypeScript 7).
5. Aprobar el script de compilación de `esbuild` con `pnpm approve-builds esbuild` (PNPM 12 corta la instalación con `ERR_PNPM_IGNORED_BUILDS` hasta aprobarlo). Queda registrado en `pnpm-workspace.yaml` bajo `allowBuilds`.
6. Agregar `astro.config.mjs`, `tsconfig.json`, `.nvmrc`, `.gitignore`, `.prettierrc.json`, `src/styles/global.css` y `src/pages/index.astro` iniciales.
7. Copiar `README.md`, `AGENTS.md`, `DESIGN.md`, `.claude/settings.json` y `_planificacion/`.

## Criterios de aceptación

- [ ] `pnpm dev` muestra la página inicial en `http://localhost:4321`.
- [ ] `pnpm build` termina sin errores y genera `sitemap-index.xml`.
- [ ] `pnpm format:check` y `pnpm check` pasan.
- [ ] `package.json` contiene `packageManager` con la versión de PNPM.

## Fuera de alcance

- Diseño, componentes y contenido.
