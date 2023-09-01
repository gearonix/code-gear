import { buildWebpackConfig } from 'cg-config/src/webpack'
import { resolve } from 'path'

export default buildWebpackConfig({
  rootDir: resolve(__dirname, '..'),
  layer: 'second'
})
