// / <reference types="vitest" />
import { getCacheDir } from './misc'
import { defineServerOptions } from './builders'
import { CreateViteConfigOptions } from './types'
import { UserConfig } from 'vite'
import { defineConfig } from 'vite'

import {
  defineAliases,
  definePlugins,
  defineGlobals,
  defineVitest,
  defineBuildOptions,
  definePreviewOptions
} from './builders'

export const createViteConfig = (
  options: CreateViteConfigOptions
): UserConfig => {
  return defineConfig({
    cacheDir: getCacheDir(options),
    define: defineGlobals(),
    resolve: defineAliases(),
    server: defineServerOptions(options),
    preview: definePreviewOptions(options),
    plugins: definePlugins(options),
    test: defineVitest(options),
    build: defineBuildOptions(options)
  })
}
