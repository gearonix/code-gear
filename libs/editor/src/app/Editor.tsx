
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import Tabs from '@/components/Tabs/ui/Tabs'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { EditorContent } from '@/modules/EditorContent'

import { EditorStoreProvider } from './providers/EditorStore'
import { ThemeLoader } from './providers/ThemeLoader'


export const Editor = () => {
  return <EditorStoreProvider>
    <ThemeLoader>
      <Tabs/>
      <ThemeSwitcher/>
      <LanguageSwitcher/>
      <EditorContent/>
    </ThemeLoader>
  </EditorStoreProvider>
}

export default Editor
