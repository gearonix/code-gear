// It is important to specify relative paths here.
import { resolve }          from 'path'
import react                from '@vitejs/plugin-react'

import { createViteConfig } from '../../../config/src/vite'

export default createViteConfig({
  projectName: 'web-shared',
  projectType: 'library',
  rootDir: resolve(__dirname, '..'),
  layer: 'third',
  external: ['react-smooth-scrollbar', 'antd', 'react-router-dom'],
  plugins: [react()]
})
