import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CodeGear',
  description: 'Online code editor built on Preact, Nest and Nx',
  lastUpdated: true,
  cleanUrls: true,

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/about-project' },
      { text: 'Preview', link: '#' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { base: 'guide', text: 'About Project', link: '/about-project' },
          { base: 'guide', text: 'Getting Started', link: '/getting-started' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gearonix/code-gear' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Uzhanin Egor'
    },
  }
})
