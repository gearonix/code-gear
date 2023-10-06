import { resolve }              from 'path'

import * as secondLayer         from '../../tsconfig/paths/second-layer.json'
import * as thirdLayer          from '../../tsconfig/paths/third-layer.json'
import { WebpackConfigOptions } from '../types'

/**
 * adds tsconfig paths depending on the layer of your library
 * @param options {WebpackConfigOptions} - options from
 * buildWebpackConfig root function
 */

export const resolveTsconfigPaths = (
  options: WebpackConfigOptions
): Record<string, string> => {
  const tsconfig = options.layer === 'second' ? secondLayer : thirdLayer

  // This solution actually don't work.

  // config.resolve.plugins.push(
  //   new TsconfigPathsPlugin({
  //     configFile: 'packages/config/src/tsconfig/paths/second-layer.json',
  //     baseUrl: '.'
  //   })
  // )

  return {
    '@': resolve(options.rootDir, 'src'),
    ...Object.fromEntries(
      Object.entries(tsconfig.compilerOptions.paths).map(([
        name,
        tsconfigPath
      ]) => {
        return [name, resolve(options.rootDir, (tsconfigPath as [string])[0])]
      })
    )
  }
}
