/// <reference types="vitest" />
/// <reference types="vite-plugin-pwa/client" />
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa'

import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/client',
  server: {
    port: 3000,
    host: 'localhost',
    fs: {
      strict: false
    }
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
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: 'auto',
      strategies: 'injectManifest',
      srcDir: 'public',
      filename: 'service-worker.js',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: false
      },
      includeAssets: [
        "**/*",
      ]
    })
  ],
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
