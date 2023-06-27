/// <reference types="vitest" />
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/client',

  server: {
    port: 3000,
    host: 'localhost',
  },

  preview: {
    port: 4200,
    host: 'localhost',
  },

  plugins: [
    preact(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
