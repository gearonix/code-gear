import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { useCustomTheme } from '@/app'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Tabs } from '@/components/tabs'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { useActions, useGetters, useStorage, useStore } from '@/shared/hooks'
import { useMonaco } from '@monaco-editor/react'

import { useKeyboardManager } from '../../hooks'
import EditorCore from '../editor-core/editor-core'

import {
  EditorContentStyles,
  TabsSelects,
  TabsWrapper
} from './editor-content.styles'

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
    if (isString(value)) {
      actions.editor.saveContent(value)
      localSave()
    }
  }

  useEffect(() => {
    monaco.editor.setTheme(theme)
  }, [theme])

  useEffect(() => {
    defineCustomTheme({
      background: customBackground,
      color: customColor
    })
  }, [customBackground, customColor])

  return (
    <EditorContentStyles>
      <TabsWrapper>
        <Tabs />
        <TabsSelects>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </TabsSelects>
      </TabsWrapper>
      <AnimationProvider>
        <EditorCore onChange={onChange} />
      </AnimationProvider>
    </EditorContentStyles>
  )
})

export default EditorContent
