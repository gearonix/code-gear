import preact from '@preact/preset-vite'
import { createViteConfig } from '../../../libs/config/src/vite'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import webfontDownload from 'vite-plugin-webfont-dl'

export default createViteConfig({
  projectName: 'client',
  projectType: 'application',
  rootDir: resolve(__dirname, '..'),
  layer: 'second',
  external: [],
  plugins: [
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
    ]),
    preact(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      strategies: 'injectManifest',
      srcDir: 'public',
      filename: 'service-worker.js',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: false
      },
      includeAssets: ['**/*']
    })
  ]
})
