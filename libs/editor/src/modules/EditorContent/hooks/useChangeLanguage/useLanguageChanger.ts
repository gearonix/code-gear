import { editor } from 'monaco-editor'

import { useGetters } from '@/hooks'
import { useMonaco } from '@monaco-editor/react'

import { Languages } from './consts'

export const useLanguageChanger = () => {
  const getters = useGetters()
  const monaco = useMonaco()
  return () => {
    const activeTab = getters.getActiveTab()
    const ext = activeTab?.label?.split('.').at(-1) as string
    const lang = Languages[ext] ?? 'text'
    const model = monaco?.editor.getModels()[0] as editor.ITextModel
    monaco?.editor.setModelLanguage(model, lang)
  }
}
