// / <reference types="vitest" />
import * as path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import dynamicImport from 'vite-plugin-dynamic-import'
import importDynamicModule from 'vite-plugin-dynamic-import-module'
import viteTsConfigPaths from "vite-tsconfig-paths"

import react from "@vitejs/plugin-react"

export default defineConfig({
  cacheDir: "../../node_modules/.vite/editor",

  plugins: [
    dts({
      entryRoot: "src",
      tsConfigFilePath: path.join(__dirname, "tsconfig.lib.json"),
      skipDiagnostics: true
    }),
    react(),
    viteTsConfigPaths({
      root: "../../"
    }),
    dynamicImport()
  ],
  build: {
    lib: {
      entry: "src/app/index.ts",
      name: "editor",
      fileName: "index",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"]
    }
  },

  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest"
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  }
})
