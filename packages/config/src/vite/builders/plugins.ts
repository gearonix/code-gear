// / <reference types="vite-plugin-pwa/client" />
import { join } from 'path'
import { PluginOption } from 'vite'
import dts from 'vite-plugin-dts'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { CreateViteConfigOptions } from '../types'

export const definePlugins = (
  options: CreateViteConfigOptions
): PluginOption[] => {
  const defaultPlugins: PluginOption[] = [viteTsConfigPaths()]

  if (options.projectType === 'library') {
    defaultPlugins.push([
      dts({
        entryRoot: 'src',
        tsConfigFilePath: join(options.rootDir, 'tsconfig.lib.json'),
        skipDiagnostics: true
      })
    ])
  }

  return [...defaultPlugins, ...options.plugins]
}
