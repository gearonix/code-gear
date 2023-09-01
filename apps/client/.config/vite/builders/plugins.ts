import { PluginOption } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import webfontDownload from 'vite-plugin-webfont-dl'
import viteTsConfigPaths from 'vite-tsconfig-paths'

import preact from '@preact/preset-vite'

export const definePlugins = (): PluginOption[] => {
  return [
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
    ]),
    preact(),
    viteTsConfigPaths(),
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
}
