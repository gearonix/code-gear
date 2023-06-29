
import Tabs from '@/components/Tabs/ui/Tabs'
import { EditorContent } from '@/modules/EditorContent'

import { EditorStoreProvider } from './providers/EditorStore'


export const Editor = () => {
  return <EditorStoreProvider>
    <Tabs/>
    <EditorContent/>
  </EditorStoreProvider>
}

export default Editor
