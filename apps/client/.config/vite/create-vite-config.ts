// / <reference types="vitest" />
import * as path from 'path'
import { UserConfig } from 'vite'
// / <reference types="vite-plugin-pwa/client" />
import { defineConfig } from 'vite'
import { cacheDir } from './misc'

import {
  defineAliases,
  definePlugins,
  defineGlobals,
  defineVitest,
  preview,
  server
} from './builders'

export const createViteConfig = (): UserConfig => {
  return defineConfig({
    cacheDir,
    define: defineGlobals(),
    resolve: defineAliases(),
    server,
    preview,
    plugins: definePlugins(),
    test: defineVitest()
  })
}
