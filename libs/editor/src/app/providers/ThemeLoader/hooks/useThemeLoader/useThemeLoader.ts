import { useEffect } from 'preact/compat'

import { themes } from '@/shared/consts'
import EditorErrors from '@/shared/errors'
import { useStore } from '@/shared/hooks'
import { useMonaco } from '@monaco-editor/react'

import { assertThemeObject } from './assertThemeObject'
import { nodeModulesPath } from './consts'

import { useBooleanState } from '$/shared'

export const useThemeLoader = () => {
  const monaco = useMonaco()
  const loader = useBooleanState()
  const { theme: selectedTheme } = useStore()

  useEffect(() => {
    let processed = 0
    themes.forEach(async (theme) => {
      try{
        // const json: unknown = await import(`${nodeModulesPath}/monaco-themes/themes/${theme}.json`)
        //
        // assertThemeObject(json)
        //
        // monaco?.editor.defineTheme(theme, json)
      }
      catch (e){
        console.log(EditorErrors.ThemeUpload(theme))
      }

      processed += 1

      if (processed === themes.length){
        monaco?.editor.setTheme(selectedTheme)
        loader.on()
      }
    })
  }, [monaco])

  return loader.val
}
