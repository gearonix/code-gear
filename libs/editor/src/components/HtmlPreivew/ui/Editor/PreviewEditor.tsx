import { observer } from 'mobx-react-lite'

import { editorConfig } from '@/shared/editorConfig'
import { useStore } from '@/shared/hooks'
import MonacoEditor from '@monaco-editor/react'

import { usePreview } from '../../context'
import { PreviewLanguages } from '../../types'

import { EditorContainer, EditorTitle } from './PreviewEditor.styles'

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
    <EditorTitle>{lang}</EditorTitle>
    <MonacoEditor
    theme={theme}
    onChange={onChange}
    language={lang}
    height={'300px'}
    value={preview.state[lang]}
    options={editorConfig({
      fontSize,
      tabSize
    })}
  />
  </EditorContainer>
})


export default PreviewEditor
