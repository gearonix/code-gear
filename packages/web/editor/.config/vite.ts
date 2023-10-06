// It is important to specify relative paths here.
import { resolve }          from 'path'
import react                from '@vitejs/plugin-react'
import dynamicImport        from 'vite-plugin-dynamic-import'

import { createViteConfig } from '../../../config/src/vite'

export default createViteConfig({
  projectName: 'editor',
  projectType: 'library',
  rootDir: resolve(__dirname, '..'),
  layer: 'third',
  external: ['antd', 'react-router-dom', 'react-smooth-scrollbar'],
  plugins: [react(), dynamicImport()]
})
