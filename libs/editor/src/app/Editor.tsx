import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { RunCode } from '@/components/RunCode'
import Tabs from '@/components/Tabs/ui/Tabs'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { EditorContent } from '@/modules/EditorContent'

import { EditorStoreProvider } from './providers/EditorStore'
import { ThemeLoader } from './providers/ThemeLoader'

import { Page } from '$/client-shared'


export const Editor = () => {
  return <Page>
    <EditorStoreProvider>
    <ThemeLoader>
      <Tabs/>
      <ThemeSwitcher/>
      <LanguageSwitcher/>
      <RunCode/>
      <EditorContent/>
    </ThemeLoader>
  </EditorStoreProvider>
  </Page>
}

export default Editor
