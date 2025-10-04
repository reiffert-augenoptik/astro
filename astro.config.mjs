// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://reiffert-augenoptik.github.io/astro/',
  base: '/astro/',
  integrations: [mdx()],
  devToolbar: { enabled: false },
});
