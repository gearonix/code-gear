// It is important to specify relative paths here.
import { resolve }            from 'path'

import { createViteConfig }   from '../../../../packages/config/src/vite'
import { buildCustomPlugins } from './plugins'

export default createViteConfig({
  projectName: 'client',
  projectType: 'application',
  rootDir: resolve(__dirname, '..'),
  layer: 'second',
  external: [],
  plugins: buildCustomPlugins()
})
