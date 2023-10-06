import { DarkThemePalette } from './themes'
import { theme } from 'antd'
import { ThemeConfig } from 'antd/es/config-provider'

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
