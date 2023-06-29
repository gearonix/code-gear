import { useEffect } from 'preact/compat'

import { assertThemeObject } from './assertThemeObject'
import { useMonaco } from '@monaco-editor/react'

import { nodeModulesPath ,THEMES } from './consts'


export const useThemeLoader = () => {
  const monaco = useMonaco()

  useEffect(() => {
    THEMES.forEach(async (theme) => {
      const json: unknown = await import(`${nodeModulesPath}/monaco-themes/themes/${theme}.json`)

      assertThemeObject(json)

      monaco?.editor.defineTheme(theme, json)
    })
  }, [monaco])
}
