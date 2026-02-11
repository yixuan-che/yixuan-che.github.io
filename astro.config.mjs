// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://yixuan-che.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()]
});