import { createSidebarConfig } from './sidebar.config'
import { DefaultTheme }        from 'vitepress'

export const createThemeConfig = (): DefaultTheme.Config => {
  return {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction/about-project' }
    ],
    sidebar: createSidebarConfig(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gearonix/code-gear' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Uzhanin Egor'
    }
  }
}
