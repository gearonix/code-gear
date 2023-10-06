const { buildWebpackConfig }  = require('cg-config/src/webpack')
const { resolve } = require('path')

module.exports = buildWebpackConfig({
  rootDir: resolve(__dirname, '..'),
  layer: 'second'
})
