import { useEffect } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { useActions, useGetters, useStore } from '@/shared/hooks'
import MonacoEditor, { useMonaco } from '@monaco-editor/react'

import { useKeyboardManager } from '../hooks'

import { isString } from '$/shared'


export const EditorContent = observer(() => {
  const { editor } = useActions()
  const getters = useGetters()
  const { theme, content } = useStore()

  const textContent = getters.getActiveTabText()
  const language = getters.getActiveLanguage()

  useKeyboardManager()
  const monaco = useMonaco()

  const onChange = (value: unknown) => {
    if (isString(value)){
      editor.saveContent(value)
    }
  }
  console.log(toJS(content))

  useEffect(() => {
    monaco?.editor.setTheme(theme)
  }, [theme])

  return <MonacoEditor
      height="90vh"
      theme={'vs-dark'}
      onChange={onChange}
      language={language}
      value={toJS(textContent)}
      options={{
        fontSize: 20
      }}
    />
})

export default EditorContent
