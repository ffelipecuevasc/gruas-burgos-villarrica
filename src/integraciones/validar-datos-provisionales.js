import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PENDIENTE_CLIENTE } from '../data/negocio.js';

// Rama de producción en Cloudflare Pages, que expone `CF_PAGES_BRANCH` durante la compilación.
const RAMA_PRODUCCION = 'main';

/**
 * Integración de Astro que impide publicar datos provisionales (RDA-008).
 *
 * Al terminar la compilación de la rama de producción revisa todos los archivos generados y la
 * detiene si alguno contiene `PENDIENTE_CLIENTE`. Los datos provisionales que no se publican no
 * bloquean. Fuera de Cloudflare Pages, y en las vistas previas de otras ramas, no hace nada.
 *
 * @returns {import('astro').AstroIntegration}
 */
export default function validarDatosProvisionales() {
  return {
    name: 'validar-datos-provisionales',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        if (process.env.CF_PAGES_BRANCH !== RAMA_PRODUCCION) return;

        const raiz = fileURLToPath(dir);
        const entradas = await readdir(raiz, { recursive: true, withFileTypes: true });
        const archivos = entradas.filter((entrada) => entrada.isFile());

        const conMarcador = [];
        for (const archivo of archivos) {
          const ruta = path.join(archivo.parentPath, archivo.name);
          const contenido = await readFile(ruta);
          if (contenido.includes(PENDIENTE_CLIENTE)) {
            conMarcador.push(path.relative(raiz, ruta).replaceAll(path.sep, '/'));
          }
        }

        if (conMarcador.length > 0) {
          throw new Error(
            `La compilación de producción publica datos sin confirmar (${PENDIENTE_CLIENTE}) en: ` +
              `${conMarcador.join(', ')}. Confirma el dato en src/data/negocio.js o deja de publicarlo.`,
          );
        }

        logger.info(`Sin ${PENDIENTE_CLIENTE} en ${archivos.length} archivos publicados.`);
      },
    },
  };
}
