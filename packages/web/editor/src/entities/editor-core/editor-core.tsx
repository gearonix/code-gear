import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { editorConfig } from '@/shared/editor-config'
import { useGetters, useStore } from '@/shared/hooks'
import MonacoEditor from '@monaco-editor/react'

import { useAnimations, WithChildren } from '@code-gear/web/shared'

interface EditorCoreProps {
  onChange: (val: unknown) => void
}

const EditorCore = observer(({ onChange }: EditorCoreProps) => {
  const { fontSize, tabSize } = useStore()
  const getters = useGetters()
  const textContent = getters.getActiveTabText()
  const language = getters.getActiveLanguage()

  return (
    <MonacoEditor
      height="90vh"
      theme="vs-dark"
      onChange={onChange}
      language={language}
      value={toJS(textContent)}
      options={editorConfig({
        fontSize,
        tabSize
      })}
    />
  )
})

const WithAnimations = ({ children }: WithChildren) => {
  const { Spring } = useAnimations()
  const spring = Spring.useSpring({
    from: {
      opacity: 0,
      x: 100
    },
    to: {
      opacity: 1,
      x: 0
    },
    config: Spring.config.stiff
  })

  return <Spring.a.div style={{ ...spring }}>{children}</Spring.a.div>
}

export default (props: EditorCoreProps) => {
  return (
    <WithAnimations>
      <EditorCore {...props} />
    </WithAnimations>
  )
}
