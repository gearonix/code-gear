import                         'normalize.css'

import { GlobalStyles }   from '@code-gear/web/shared'
import { ThemeProvider }  from '@code-gear/web/shared'

import { RouterProvider } from '../providers/router'
import { StoreProvider }  from '../providers/store'

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
