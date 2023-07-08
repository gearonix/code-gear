import { ConfigProvider as AntdConfigProvider } from 'antd'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { AntdConfig } from '../config/antdConfig'
import { DarkThemePalette } from '../config/themes'

import { WithChildren } from '$/client-shared'

const ThemeProvider = ({ children }: WithChildren) => {
  return  <AntdConfigProvider theme={AntdConfig}>
    <StyledThemeProvider theme={DarkThemePalette}>
    {children}
  </StyledThemeProvider>
  </AntdConfigProvider>
}


export default ThemeProvider
