import { h } from 'vue'
import Theme from 'vitepress/theme'
import            './style.css'

localStorage.setItem('vitepress-theme-appearance', 'dark')

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {})
  },
  enhanceApp({ app, router, siteData }) {}
}
