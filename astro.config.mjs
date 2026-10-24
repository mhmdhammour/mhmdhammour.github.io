import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mhmdhammour.github.io',
  integrations: [sitemap()],
});
