import { WebpackConfigOptions } from '../types'
import { resolve } from 'path'
import secondLayer from '../../tsconfig/paths/second-layer.json'
import thirdLayer from '../../tsconfig/paths/third-layer.json'

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
  //     configFile: 'libs/config/src/tsconfig/paths/second-layer.json',
  //     baseUrl: '.'
  //   })
  // )

  return {
    '@': resolve(options.rootDir, 'src'),
    ...Object.fromEntries(
      Object.entries(tsconfig.compilerOptions.paths).map(
        ([name, tsconfigPath]) => {
          return [name, resolve(options.rootDir, (tsconfigPath as [string])[0])]
        }
      )
    )
  }
}
