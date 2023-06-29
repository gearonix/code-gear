import MonacoEditor from '@monaco-editor/react'

import Tabs from '../components/Tabs/ui/Tabs'

import { EditorStoreProvider } from './providers/EditorStore'
import { useThemeLoader } from './hooks'


export const Editor = () => {
  useThemeLoader()
  const onChange = (value : string) => {
    console.log(value)
  }
  return <EditorStoreProvider>
    <Tabs/>
    <MonacoEditor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      theme={'Nord'} onChange={onChange}
    />
  </EditorStoreProvider>
}

export default Editor
