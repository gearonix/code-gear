// / <reference types="vitest" />
import { UserConfig }              from 'vite'
import { defineConfig }            from 'vite'

import { defineServerOptions }     from './builders'
import { defineAliases }           from './builders'
import { defineBuildOptions }      from './builders'
import { defineGlobals }           from './builders'
import { definePlugins }           from './builders'
import { definePreviewOptions }    from './builders'
import { defineVitest }            from './builders'
import { getCacheDir }             from './misc'
import { CreateViteConfigOptions } from './types'

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
