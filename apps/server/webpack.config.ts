const { buildWebpackConfig } = require('cg-config/src/webpack')

module.exports = buildWebpackConfig({
  rootDir: __dirname,
  layer: 'second'
})
