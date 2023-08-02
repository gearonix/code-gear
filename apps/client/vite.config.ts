// / <reference types="vitest" />
// / <reference types="vite-plugin-pwa/client" />
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import webfontDownload from 'vite-plugin-webfont-dl'
import viteTsConfigPaths from 'vite-tsconfig-paths'

import preact from '@preact/preset-vite'

export default defineConfig({
  cacheDir: '../../node_modules/.vite/client',
  define: {
    'process.env': process.env,
    _isDev_: process.env.NODE_ENV === 'development'
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@code-gear/client-shared': path.resolve(
        __dirname,
        '../../libs/client-shared/src/index.ts'
      )
    }
  },
  server: {
    port: 3000,
    host: 'localhost',
    fs: {
      strict: false
    }
  },
  preview: {
    port: 4200,
    host: 'localhost'
  },
  plugins: [
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
    ]),
    preact(),
    viteTsConfigPaths({
      root: '../../'
    }),
    VitePWA({
      registerType: 'autoUpdate',
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
      includeAssets: ['**/*']
    })
  ],
  build: {
    rollupOptions: {
      external: ['@code-gear/client-shared']
    }
  },
  esbuild: {
    exclude: ['@code-gear/client-shared']
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest'
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
})
