import { AnimationProvider }   from '@code-gear/web/shared'
import { isString }            from '@code-gear/web/shared'
import { useDebounce }         from '@code-gear/web/shared'
import { useMonaco }           from '@monaco-editor/react'
import { observer }            from 'mobx-react-lite'
import { useEffect }           from 'react'

import { useCustomTheme }      from '@/app'
import { EditorCore }          from '@/entities/editor-core'
import { LanguageSwitcher }    from '@/features/language-switcher'
import { ThemeSwitcher }       from '@/features/switch-theme'
import { useActions }          from '@/shared/hooks'
import { useStorage }          from '@/shared/hooks'
import { useStore }            from '@/shared/hooks'
import { Tabs }                from '@/widgets/tabs'

import { useKeyboardManager }  from '../hooks'
import { EditorContentStyles } from './editor-content.styles'
import { TabsSelects }         from './editor-content.styles'
import { TabsWrapper }         from './editor-content.styles'

export const EditorContent = observer(() => {
  const actions = useActions()
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
