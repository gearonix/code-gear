import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { useActions, useGetters } from '@/hooks'
import MonacoEditor from '@monaco-editor/react'

import { useKeyboardManager,useThemeLoader } from './../hooks'

import { isString } from '$/shared'


export const EditorContent = observer(() => {
  useThemeLoader()
  const { editor } = useActions()
  const getters = useGetters()
  const textContent = getters.getActiveTabText()
  useKeyboardManager()

  const onChange = (value: unknown) => {
    if (isString(value)){
      editor.saveContent(value)
    }
  }

  return <MonacoEditor
      height="90vh"
      defaultLanguage="javascript"
      theme={'Nord'}
      onChange={onChange}
      value={toJS(textContent)}
    />
})

export default EditorContent
