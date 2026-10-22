// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const siteUrl = process.env.SITE_URL || 'https://ankurkumarsingh.tech';

export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});