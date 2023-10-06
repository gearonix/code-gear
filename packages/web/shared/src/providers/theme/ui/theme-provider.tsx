import { ConfigProvider as AntdConfigProvider } from 'antd'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { WithChildren }                         from '@/types'

import { AntdConfig }                           from '../config/antd-config'
import { DarkThemePalette }                     from '../config/themes'

const ThemeProvider = ({ children }: WithChildren) => {
  return (
    <AntdConfigProvider theme={AntdConfig}>
      <StyledThemeProvider theme={DarkThemePalette}>
        {children}
      </StyledThemeProvider>
    </AntdConfigProvider>
  )
}

export default ThemeProvider
