/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import * as path from 'path'
import './.storybook/test-runner.config'
// import './.storybook/test-runner.config'

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/ui',

  plugins: [
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true
    }),
    react(),
    viteTsConfigPaths({
      root: '../../../'
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ui',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'antd',
        'react-router-dom',
        'react-smooth-scrollbar',
        'cg-client-shared',
        'cg-config',
        'sb-cache'
      ]
    }
  },

  test: {
    globals: true,
    cache: {
      dir: '../../../node_modules/.vitest'
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
})
