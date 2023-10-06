import { useMonaco } from '@monaco-editor/react'
import { editor }    from 'monaco-editor'

export const useEditor = () => {
  const monaco = useMonaco()

  return monaco.editor.getEditors()[0] as editor.ICodeEditor
}
