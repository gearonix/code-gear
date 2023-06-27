// / <reference types="vitest" />
import * as path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import viteTsConfigPaths from "vite-tsconfig-paths"

import react from "@vitejs/plugin-react"

export default defineConfig({
  cacheDir: "../../node_modules/.vite/modules",
  plugins: [
    dts({
      entryRoot: "src",
      tsConfigFilePath: path.join(__dirname, "tsconfig.lib.json"),
      skipDiagnostics: true, noEmitOnError: true
    }),
    react(),
    viteTsConfigPaths({
      root: "../../"
    })
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "modules",
      fileName: "index",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"]
    }
  }
  //
  // test: {
  //   globals: true,
  //   cache: {
  //     dir: "../../node_modules/.vitest"
  //   },
  //   environment: "jsdom",
  //   include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  // }
})
