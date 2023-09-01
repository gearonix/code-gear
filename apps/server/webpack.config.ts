const { composePlugins, withNx } = require('@nx/webpack')
const path = require('path')
const tsconfig = require('cg-config/src/tsconfig/paths/second-layer.json')

module.exports = composePlugins(
  withNx({
    skipTypeChecking: true
  }),
  (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      ...Object.fromEntries(
        Object.entries(tsconfig.compilerOptions.paths).map(
          ([name, tsconfigPath]) => {
            return [name, path.resolve(__dirname, tsconfigPath[0])]
          }
        )
      )
    }

    // This solution actually don't work.

    // config.resolve.plugins.push(
    //   new TsconfigPathsPlugin({
    //     configFile: 'libs/config/src/tsconfig/paths/second-layer.json',
    //     baseUrl: '.'
    //   })
    // )

    return config
  }
)
