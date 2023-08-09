// / <reference types="vitest" />
// / <reference types="vite-plugin-pwa/client" />
import { defineConfig } from 'vite'

import { defineAliases, definePlugins, defineVariables } from './config'

export default defineConfig({
  cacheDir: '../../node_modules/.vite/client',
  define: defineVariables(),
  resolve: defineAliases(),
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
  plugins: definePlugins(),
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest'
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
})
