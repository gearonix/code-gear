import { render } from 'preact'
import { registerSW } from 'virtual:pwa-register'

import App from './application'

const updateSW = registerSW({
  onNeedRefresh: () => {
    if (confirm('New content available. Reload?')) {
      updateSW(true)
    }
  }
})

render(<App />, document.querySelector('#root')!)