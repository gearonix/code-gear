import { useEffect } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { useActions, useGetters, useStore } from '@/hooks'
import MonacoEditor, { useMonaco } from '@monaco-editor/react'

import { useKeyboardManager,useLanguageChanger,useThemeLoader } from './../hooks'

import { isString } from '$/shared'


export const EditorContent = observer(() => {
  useThemeLoader()
  const { editor } = useActions()
  const getters = useGetters()
  const { activeKey } = useStore()
  const textContent = getters.getActiveTabText()
  useKeyboardManager()
  const changeLang = useLanguageChanger()

  const onChange = (value: unknown) => {
    if (isString(value)){
      editor.saveContent(value)
    }
  }

  useEffect(() => {
    changeLang()
  }, [activeKey])

  return <MonacoEditor
      height="90vh"
      theme={'Nord'}
      onChange={onChange}
      value={toJS(textContent)}
    />
})

export default EditorContent
