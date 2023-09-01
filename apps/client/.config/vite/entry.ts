// It is important to specify relative paths here.
import { createViteConfig } from '../../../libs/config/src/vite'

import { resolve } from 'path'
import { buildCustomPlugins } from './plugins'

export default createViteConfig({
  projectName: 'client',
  projectType: 'application',
  rootDir: resolve(__dirname, '..'),
  layer: 'second',
  external: [],
  plugins: buildCustomPlugins()
})
