import { theme }            from 'antd'
import { ThemeConfig }      from 'antd/es/config-provider'

import { DarkThemePalette } from './themes'

export const AntdConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgBase: DarkThemePalette.grey,
    colorTextBase: DarkThemePalette.light,
    colorBorder: DarkThemePalette.lightGrey,
    colorBgTextHover: DarkThemePalette.light,
    colorBgTextActive: DarkThemePalette.light,
    colorPrimary: DarkThemePalette.light
  }
}
