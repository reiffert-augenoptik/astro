// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

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
