import { AliasOptions }   from 'vite'
import { ResolveOptions } from 'vite'

type DefineAliases = ResolveOptions & { alias: AliasOptions }

export const defineAliases = (): DefineAliases => {
  return {
    preserveSymlinks: true,
    // Nx and Vite have issues with full support for yarn workspaces,
    // so i just will use tsconfig paths ;)

    alias: {}

    // alias: {
    //   '@code-gear/client-shared': resolve(
    //     __dirname,
    //     resolvepackages('client-shared', 'src', 'index.js')
    //   )
    // }
  }
}
