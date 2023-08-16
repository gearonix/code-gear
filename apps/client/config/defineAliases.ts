import { resolve } from 'path'
import { AliasOptions, ResolveOptions } from 'vite'

type DefineAliases = ResolveOptions & { alias: AliasOptions }

const resolveLibs = (...args: string[]) =>
  resolve(__dirname, '..', '..', '..', 'libs', ...args)

export const defineAliases = (): DefineAliases => {
  return {
    preserveSymlinks: true,
    alias: {
      '@code-gear/client-shared': resolve(
        __dirname,
        resolveLibs('client-shared', 'src', 'index.js')
      )
    }
  }
}
