import { isString }         from '@code-gear/web/shared'
import MonacoEditor         from '@monaco-editor/react'
import { observer }         from 'mobx-react-lite'

import { editorConfig }     from '@/shared/editor-config'
import { useStore }         from '@/shared/hooks'
import { PreviewLanguages } from '@/widgets/html-preview'
import { usePreview }       from '@/widgets/html-preview'

import { EditorContainer }  from './preview-editor.styles'
import { EditorTitle }      from './preview-editor.styles'

interface PreviewEditorProps {
  lang: PreviewLanguages
}

const PreviewEditor = observer(({ lang }: PreviewEditorProps) => {
  const { theme, fontSize, tabSize } = useStore()
  const preview = usePreview()

  const onChange = (value: unknown) => {
    if (isString(value)) {
      preview.update({
        [lang]: value
      })
    }
  }

  return (
    <EditorContainer>
      <EditorTitle>{lang}</EditorTitle>
      <MonacoEditor
        theme={theme}
        onChange={onChange}
        language={lang}
        height="300px"
        value={preview.state[lang]}
        options={editorConfig({
          fontSize,
          tabSize
        })}
      />
    </EditorContainer>
  )
})

export default PreviewEditor
