import { defineConfig }      from 'vitepress'
import { createThemeConfig } from './conf/theme.config'

export default defineConfig({
  title: 'CodeGear',
  description: 'Online code editor built on Preact, Nest and Nx',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  base: '/code-gear/docs/',
  outDir: '../../dist/docs',

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/code-gear/docs/logo.svg' }
    ]
  ],

  themeConfig: createThemeConfig()
})
