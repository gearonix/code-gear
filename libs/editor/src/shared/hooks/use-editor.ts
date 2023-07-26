import { editor } from 'monaco-editor'

import { useMonaco } from '@monaco-editor/react'

export const useEditor = () => {
  const monaco = useMonaco()

  return monaco.editor.getEditors()[0] as editor.ICodeEditor
}
