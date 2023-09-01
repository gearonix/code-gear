// It is important to specify relative paths here.
import { createViteConfig } from '../../../../libs/config/src/vite'

import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default createViteConfig({
  projectName: 'web-shared',
  projectType: 'library',
  rootDir: resolve(__dirname, '..'),
  layer: 'third',
  external: [
    'react-smooth-scrollbar',
    'antd',
    'react-router-dom',
  ],
  plugins: [
    react(),
  ]
})
