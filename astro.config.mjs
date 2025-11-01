// @ts-check
import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://reiffert-augenoptik.github.io/astro/',
  base: '/astro/',
  integrations: [mdx()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
