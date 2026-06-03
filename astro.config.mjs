// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://toma.gg',

  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      CONTACT_FORM_ACCESS_KEY: envField.string({ context: 'server', access: 'public', optional: true }),
    },
  },

  adapter: node({
    mode: 'standalone',
  }),
});
