# AGENTS.md · Grúas Burgos

Instrucciones de trabajo para cualquier agente de IA (Claude Code u otro) que colabore en este repositorio. Este archivo es la entrada principal; no existe `CLAUDE.md`.

> Este archivo, `DESIGN.md` y `README.md` solo se modifican con aprobación explícita del desarrollador.

---

## 1. Contexto en 30 segundos

- **Cliente:** Yerko Burgos, dueño de Grúas Burgos (grúas, traslado y rescate vehicular 24/7).
- **Base:** Vicente Reyes 870, Villarrica, Región de La Araucanía, Chile.
- **Dominio:** `gruasvillarrica.cl`.
- **Objetivo:** que alguien en una emergencia vial encuentre el sitio en Google y llame o escriba por WhatsApp en un toque. El sitio reemplaza a la ficha de Google Maps como destino de los anuncios de Google Ads.
- **Alcance contratado:** sitio presentacional de una página con tres secciones (Inicio, Servicios, Contacto), dominio y configuración inicial de Google Ads. Cualquier sección o función adicional se cotiza por separado: no la implementes sin una RDA aprobada.
- **Desarrollador responsable:** Felipe Cuevas (https://felipecuevas.dev).

## 2. Orden de lectura obligatorio antes de trabajar

1. `_planificacion/00_producto/registro-log.md`: qué está pendiente y cuál es la iteración activa. Es la fuente única de verdad del trabajo.
2. El archivo de la iteración activa en `_planificacion/10_epicas/<epica>/`.
3. `_planificacion/00_producto/decisiones.md`: RDA vigentes. No contradigas una RDA aceptada.
4. `DESIGN.md` si la tarea toca interfaz.
5. `_planificacion/00_producto/vision-producto.md` si hay dudas de alcance o tono.

Si algo de lo anterior está en conflicto, detente y pregunta.

## 3. Stack y versiones

- Astro 7 (SSG, sin adaptador). Node.js 24 LTS (mínimo 22.12). PNPM 12 vía Corepack; los scripts de instalación permitidos se declaran en `pnpm-workspace.yaml` (`allowBuilds`).
- `astro check` requiere TypeScript 6 (no es compatible con TypeScript 7); no actualices `typescript` a la versión 7.
- Tailwind CSS 4 mediante `@tailwindcss/vite`. Los tokens viven en `src/styles/global.css` dentro de `@theme`. No existe `tailwind.config.js` y no debe crearse.
- JavaScript (ES2022+). Sin TypeScript en el código de la aplicación; `tsconfig.json` existe solo para el soporte del editor y `astro check`.
- Hosting: Cloudflare Pages (salida estática en `dist/`).

## 4. Comandos

```bash
pnpm dev            # servidor de desarrollo (http://localhost:4321)
pnpm build          # compilación de producción
pnpm preview        # sirve dist/ localmente
pnpm check          # astro check
pnpm format         # prettier --write
pnpm format:check   # prettier --check
```

Astro 7 detecta agentes de IA e inicia `astro dev` en segundo plano. Usa `pnpm astro dev status`, `pnpm astro dev logs` y `pnpm astro dev stop` para gestionarlo; no dejes servidores huérfanos al terminar.

Usa siempre PNPM. Nunca `npm install` ni `yarn`.

## 5. Límites de actuación

**Prohibido (lo hace solo el desarrollador):**

- `git commit`, `git push`, `git merge`, `git pull`, `git rebase`, `git reset`, `git tag` y cualquier operación que reescriba o publique historial.
- Desplegar (Wrangler, CLI de Cloudflare) o modificar configuración de Cloudflare, Google Search Console o Google Ads.
- Editar `.claude/`, `.git/` o archivos `.env`.

**Requiere consulta previa:**

- Crear o cambiar de rama. Al proponer una rama, usa el formato `iteracion/XX-YY-descripcion-corta` (por ejemplo `iteracion/02-01-tokens-diseno`).
- Editar `AGENTS.md`, `DESIGN.md`, `README.md`, `package.json`, `astro.config.mjs` u otros archivos de configuración de la raíz.
- Instalar, actualizar o eliminar dependencias. Cada dependencia nueva requiere justificar peso, alternativa sin dependencia y, si es estructural, una RDA.
- Eliminar o mover archivos.

**Permitido sin consulta:** editar `src/`, `public/` y `_planificacion/`; ejecutar los comandos de la sección 4; leer el repositorio.

## 6. Reglas de contenido

1. Todo el texto visible está en **español de Chile**, trato de **tú**, lenguaje simple y directo. Sin anglicismos innecesarios.
2. **No inventes datos del negocio.** Teléfono, correo, tiempos de respuesta, capacidades de carga, años de experiencia, garantías, coberturas y reseñas deben venir de `src/data/negocio.js` y estar confirmados por el cliente. El prototipo contiene afirmaciones no verificadas (ver `auditoria-tecnica.md`); no las copies tal cual.
3. Si falta un dato, usa un marcador explícito `PENDIENTE_CLIENTE` en `src/data/negocio.js` y regístralo en `registro-log.md`. Nunca publiques un número o afirmación de relleno que parezca real.
4. Las reseñas se reproducen solo si son reales, de Google Maps, con nombre abreviado del autor y enlace a la fuente. No se marca `AggregateRating` en el JSON-LD.
5. Las mayúsculas del diseño se aplican con CSS (`uppercase`), no escribiendo el texto en mayúsculas.

## 7. Reglas técnicas

1. **HTML semántico:** `header`, `nav`, `main`, `section` con `aria-labelledby`, `article`, `footer`. Un solo `h1` por página. Jerarquía de encabezados sin saltos.
2. **Cero JavaScript por defecto.** Primero HTML y CSS; luego `<script>` nativo de Astro (se empaqueta y difiere). React solo con una RDA aprobada y con la directiva de hidratación más tardía posible (`client:visible` o `client:idle`).
3. **Sin recursos de terceros en tiempo de ejecución:** nada de Tailwind CDN, Google Fonts remotas, fuentes de íconos ni imágenes de `lh3.googleusercontent.com`. Fuentes con la Fonts API de Astro; íconos como SVG en línea; imágenes locales en `src/assets/` procesadas con `<Image />` o `<Picture />` (AVIF/WebP).
4. **Contacto:** los enlaces usan `tel:+56…` y `https://wa.me/56…?text=…` generados desde `src/data/negocio.js`. Nunca escribas el número en duro dentro de un componente.
5. **Accesibilidad:** contraste mínimo WCAG 2.2 AA, foco visible, objetivos táctiles de al menos 44 × 44 px, `prefers-reduced-motion` respetado, textos alternativos descriptivos, formularios con `label` asociado.
6. **Rendimiento:** meta de 95–100 en Lighthouse móvil en las cuatro categorías. LCP < 2,0 s, CLS < 0,05, INP < 200 ms. Imágenes con `width`/`height`, la del hero con prioridad de carga y el resto con carga diferida.
7. **Astro 7 usa un compilador en Rust más estricto:** el HTML debe ser válido (etiquetas cerradas, anidación correcta). El espacio en blanco se compacta al estilo JSX; usa `{' '}` cuando necesites un espacio explícito entre elementos en línea.
8. **Componentes:** un componente por archivo en `src/components/`, nombres en PascalCase y en español (`BotonLlamada.astro`, `TarjetaServicio.astro`). Props documentadas con JSDoc.
9. **Formato:** ejecuta `pnpm format` y `pnpm check` antes de cerrar una iteración. `pnpm build` debe terminar sin errores ni advertencias nuevas.

## 8. Flujo de trabajo por iteración

1. Lee el registro y la iteración activa (sección 2).
2. Si la iteración requiere una rama, propón el nombre y espera aprobación.
3. Implementa solo lo descrito en los criterios de aceptación. Si detectas trabajo fuera de alcance, anótalo como propuesta en `registro-log.md`; no lo hagas.
4. Verifica: `pnpm format`, `pnpm check`, `pnpm build` y revisión en viewport móvil (360 px) y escritorio.
5. Escribe la bitácora en `_planificacion/99_bitacora/` con la plantilla de `_planificacion/README.md`.
6. Actualiza el estado en `registro-log.md` y, si corresponde, en `decisiones.md` y `auditoria-tecnica.md`.
7. Entrega un resumen al desarrollador con los archivos modificados y un mensaje de commit sugerido en formato Conventional Commits en español, por ejemplo `feat(hero): agrega botones de llamada y WhatsApp`. El commit lo hace él.

## 9. Cuándo detenerse y preguntar

- Falta un dato del cliente que bloquea la tarea.
- La tarea contradice una RDA, `DESIGN.md` o el alcance contratado.
- Hay que agregar una dependencia, cambiar configuración o crear una rama.
- Un cambio afectaría negativamente el puntaje de Lighthouse o la accesibilidad.
