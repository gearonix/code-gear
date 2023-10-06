import { Hex }          from '@code-gear/web/shared'
import { useMonaco }    from '@monaco-editor/react'

import { CUSTOM_THEME } from '@/shared/consts/themes'

interface CustomTheme {
  background: Hex
  color: Hex
}

export const useCustomTheme = () => {
  const monaco = useMonaco()

  return ({ background, color }: CustomTheme) => {
    monaco.editor.defineTheme(CUSTOM_THEME, {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': background,
        'editor.foreground': color
      }
    })
  }
}
