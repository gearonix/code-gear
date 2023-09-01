import { ThemeProvider, GlobalStyles } from '@code-gear/web/shared'

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
