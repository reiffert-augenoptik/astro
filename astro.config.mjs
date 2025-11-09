// @ts-check
import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@astrojs/mdx';
import astroIcon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://reiffert-augenoptik.github.io/astro/',
  base: '/astro/',
  integrations: [mdx(), astroIcon()],
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
