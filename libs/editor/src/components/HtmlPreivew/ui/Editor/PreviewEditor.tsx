import { observer } from 'mobx-react-lite'

import { usePreview } from '../../context'
import { EditorContainer } from './PreviewEditor.styles'
import { editorConfig } from '@/shared/editorConfig'
import { useStore } from '@/shared/hooks'
import MonacoEditor from '@monaco-editor/react'

import { PreviewLanguages } from '../../types'

import { isString } from '$/client-shared'

interface PreviewEditorProps {
  lang: PreviewLanguages
}


const PreviewEditor = observer(({ lang }: PreviewEditorProps) => {
  const { theme, fontSize, tabSize } = useStore()
  const preview = usePreview()

  const onChange = (value: unknown) => {
    if (isString(value)){
      preview.update({
        [lang]: value
      })
    }
  }

  return <EditorContainer>
    <MonacoEditor
    theme={theme}
    onChange={onChange}
    language={lang}
    value={preview.state[lang]}
    options={editorConfig({
      fontSize,
      tabSize
    })}
  />
  </EditorContainer>
})


export default PreviewEditor
