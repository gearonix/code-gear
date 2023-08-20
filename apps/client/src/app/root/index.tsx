import { ThemeProvider, GlobalStyles } from '$/client-shared'

import 'normalize.css'

import { RouterProvider } from '../providers/router'
import { StoreProvider } from '../providers/store'

export const Root = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider />
        <GlobalStyles />
      </ThemeProvider>
    </StoreProvider>
  )
}
