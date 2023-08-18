import { ThemeProvider, GlobalStyles } from '$/client-shared'

import 'normalize.css'

import { RouterProvider } from '../providers/router'
import { StoreProvider } from '../providers/store'

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
