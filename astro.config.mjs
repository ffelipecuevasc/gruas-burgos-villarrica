// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Sitio estático (SSG) publicado en Cloudflare Pages. No requiere adaptador.
export default defineConfig({
  site: 'https://gruasvillarrica.cl',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
