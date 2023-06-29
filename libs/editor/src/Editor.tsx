import MonacoEditor from '@monaco-editor/react'

import { useThemeLoader } from './hooks'


export const Editor = () => {
  useThemeLoader()
  return (
    <MonacoEditor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      theme={'Nord'}
    />
  )
}

export default Editor
