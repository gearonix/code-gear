import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { DarkThemePalette } from '../config/themes'

import { WithChildren } from '$/client-shared'

const ThemeProvider = ({ children }: WithChildren) => {
  return <StyledThemeProvider theme={DarkThemePalette}>
    {children}
  </StyledThemeProvider>
}


export default ThemeProvider
