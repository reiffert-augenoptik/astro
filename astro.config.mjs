// @ts-check
import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@astrojs/mdx';
import astroIcon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.reiffert-optik.de',
  base: '/',
  integrations: [mdx(), astroIcon(), sitemap()],
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
