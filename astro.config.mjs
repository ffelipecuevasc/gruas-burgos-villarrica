// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Sitio estático (SSG) publicado en Cloudflare Pages. No requiere adaptador.
export default defineConfig({
  site: 'https://gruasvillarrica.cl',
  trailingSlash: 'never',
  integrations: [sitemap(), icon()],
  // Fuentes autoalojadas (RDA-004): Astro las descarga al compilar y las sirve desde el propio dominio.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Barlow Condensed',
      cssVariable: '--font-barlow-condensed',
      weights: [600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Arial Narrow', 'Roboto Condensed', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Chivo',
      cssVariable: '--font-chivo',
      weights: [400, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
