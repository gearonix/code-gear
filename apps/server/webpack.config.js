const { composePlugins, withNx } = require('@nx/webpack')

module.exports = composePlugins(withNx({
  skipTypeChecking: true
}), (config) => {
  return config
})
