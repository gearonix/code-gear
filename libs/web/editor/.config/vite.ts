// It is important to specify relative paths here.
import { createViteConfig } from '../../../../libs/config/src/vite'

import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dynamicImport from 'vite-plugin-dynamic-import'

export default createViteConfig({
  projectName: 'editor',
  projectType: 'library',
  rootDir: resolve(__dirname, '..'),
  layer: 'third',
  external: [
    'antd',
    'react-router-dom',
    'react-smooth-scrollbar'
  ],
  plugins: [
    react(),
    dynamicImport()
  ]
})
