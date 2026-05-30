// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    '/': { destination: '/en/', status: 301 },
    '/bits': { destination: '/en/bits', status: 301 },
    '/contact': { destination: '/en/contact', status: 301 },
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
