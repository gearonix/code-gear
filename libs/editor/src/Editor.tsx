import MonacoEditor from '@monaco-editor/react'

import Tabs from './components/Tabs/ui/Tabs'
import { useThemeLoader } from './hooks'


export const Editor = () => {
  useThemeLoader()
  const onChange = (value : unknown) => {
    console.log(value)
  }
  return <>
    <Tabs/>
    <MonacoEditor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      theme={'Nord'} onChange={onChange}
    />
  </>
}

export default Editor
