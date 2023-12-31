import { composePlugins }            from '@nx/webpack'
import { withNx }                    from '@nx/webpack'
import { Configuration }             from 'webpack'

import { resolveTsconfigPaths }      from './resolvers'
import { BuildWebpackConfigPayload } from './types'
import { WebpackConfigOptions }      from './types'

/**
 * Combines your webpack config with nx modules and
 * custom tsconfig paths
 * @param rootDir {string} - root directory of current library
 * @param layer {BuildWebpackConfigPayload.layer} - nesting level of your library to include the
 * correct tsconfig paths depending on this
 */

export const buildWebpackConfig = ({
  rootDir,
  layer
}: BuildWebpackConfigPayload) => {
  return composePlugins(
    withNx({
      skipTypeChecking: true
    }),
    (config: Configuration) => {
      const options: WebpackConfigOptions = {
        layer,
        config,
        rootDir
      }

      config.resolve!.alias = {
        ...resolveTsconfigPaths(options)
      }

      return config
    }
  )
}
