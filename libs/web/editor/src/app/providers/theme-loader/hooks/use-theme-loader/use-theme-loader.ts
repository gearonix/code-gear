import { useEffect } from 'preact/compat'

import { themes } from '@/shared/consts/themes'
import EditorErrors from '@/shared/exceptions'
import { useStore } from '@/shared/hooks'
import { useMonaco } from '@monaco-editor/react'

import { useCustomTheme } from '../use-custom-theme/use-custom-theme'

import { assertThemeObject } from './assert-theme-object'

import { useBooleanState } from '$/client-shared'

export const useThemeLoader = () => {
  // TODO: refactor this
  const monaco = useMonaco()
  const loader = useBooleanState()
  const { theme: selectedTheme, customBackground, customColor } = useStore()
  const defineCustomTheme = useCustomTheme()

  useEffect(() => {
    let processed = 0
    themes.forEach(async (theme) => {
      try {
        const json: unknown = await import(`./themes/${theme}.json`)

        assertThemeObject(json)

        monaco?.editor.defineTheme(theme, json)
      } catch (error) {
        console.log(EditorErrors.ThemeUpload(theme))
      }

      processed += 1

      if (processed === themes.length) {
        defineCustomTheme({ background: customBackground, color: customColor })
        monaco?.editor.setTheme(selectedTheme)

        loader.on()
      }
    })
  }, [monaco])

  return loader.val
}
