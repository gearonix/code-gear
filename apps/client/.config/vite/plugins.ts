import { PluginOption } from 'vite'

import { fonts } from './fonts'

import preact from '@preact/preset-vite'
import { VitePWA } from 'vite-plugin-pwa'
import webfontDownload from 'vite-plugin-webfont-dl'

export const buildCustomPlugins = (): PluginOption[] => [
  webfontDownload(fonts),
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
