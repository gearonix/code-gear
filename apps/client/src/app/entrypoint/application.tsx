import { ThemeProvider } from '@/app/providers/theme'
import { GlobalStyles } from '@/app/styles'

import { RouterProvider } from '../providers/router'
import { StoreProvider } from '../providers/store'

import 'normalize.css'

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider />
        <GlobalStyles />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
