import { useEffect } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Tabs } from '@/components/Tabs'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { useActions, useGetters, useStore } from '@/shared/hooks'
import MonacoEditor, { useMonaco } from '@monaco-editor/react'

import { editorConfig } from '../config/editorConfig'
import { useKeyboardManager } from '../hooks'

import { EditorContentStyles, TabsSelects, TabsWrapper } from './EditorContent.styles'

import { isString, LocalStorageClient, useDebounce } from '$/client-shared'


export const EditorContent = observer(() => {
  const { editor } = useActions()
  const getters = useGetters()
  const { theme, content } = useStore()
  const storage = new LocalStorageClient()

  const localSave = useDebounce(() => {
    console.log('saved to localStorage.')
    storage.set('EDITOR_CONTENT_DATA', content)
  }, 1000)

  const textContent = getters.getActiveTabText()
  const language = getters.getActiveLanguage()

  useKeyboardManager()
  const monaco = useMonaco()

  const onChange = (value: unknown) => {
    if (isString(value)){
      editor.saveContent(value)
      localSave()
    }
  }


  useEffect(() => {
    monaco?.editor.setTheme(theme)
  }, [theme])

  return <EditorContentStyles>
    <TabsWrapper>
      <Tabs/>
      <TabsSelects>
        <ThemeSwitcher/>
        <LanguageSwitcher/>
      </TabsSelects>
    </TabsWrapper>
    <MonacoEditor
      height="90vh"
      theme={'vs-dark'}
      onChange={onChange}
      language={language}
      value={toJS(textContent)}
      options={editorConfig}
    />
    </EditorContentStyles>
})

export default EditorContent
