import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { useCustomTheme } from '@/app'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Tabs } from '@/components/Tabs'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { useActions, useGetters, useStorage, useStore } from '@/shared/hooks'
import { useMonaco } from '@monaco-editor/react'

import { useKeyboardManager } from '../../hooks'
import EditorCore from '../EditorCore/EditorCore'

import { EditorContentStyles, TabsSelects, TabsWrapper } from './EditorContent.styles'

import { AnimationProvider, isString, useDebounce } from '$/client-shared'


export const EditorContent = observer(() => {
  const actions = useActions()
  const getters = useGetters()
  const { theme, content, customBackground, customColor } = useStore()
  const storage = useStorage()
  const defineCustomTheme = useCustomTheme()

  const localSave = useDebounce(() => {
    storage.set('EDITOR_CONTENT_DATA', content)
  }, 1000)

  useKeyboardManager()
  const monaco = useMonaco()

  const onChange = (value: unknown) => {
    if (isString(value)){
      actions.editor.saveContent(value)
      localSave()
    }
  }


  useEffect(() => {
    monaco?.editor.setTheme(theme)
  }, [theme])

  useEffect(() => {
    defineCustomTheme({
      background: customBackground,
      color: customColor })

  }, [customBackground, customColor])

  return <EditorContentStyles>
    <TabsWrapper>
      <Tabs/>
      <TabsSelects>
        <ThemeSwitcher/>
        <LanguageSwitcher/>
      </TabsSelects>
    </TabsWrapper>
    <AnimationProvider>
      <EditorCore onChange={onChange}/>
    </AnimationProvider>
    </EditorContentStyles>
})

export default EditorContent
