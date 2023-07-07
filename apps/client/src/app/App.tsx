import { ThemeProvider } from '@/app/providers/Theme'
import { GlobalStyles } from '@/app/styles'

import { RouterProvider } from './providers/Router'
import { StoreProvider } from './providers/Store'

function App() {
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
