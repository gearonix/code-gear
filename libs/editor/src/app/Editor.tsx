import { EnterFullScreen } from '@/components/EnterFullScreen'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { RunCode } from '@/components/RunCode'
import Tabs from '@/components/Tabs/ui/Tabs'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Aside } from '@/modules/Aside'
import { EditorContent } from '@/modules/EditorContent'
import { Header } from '@/modules/Header'

import { EditorStoreProvider } from './providers/EditorStore'
import { ThemeLoader } from './providers/ThemeLoader'
import { EditorStyles, EditorWrapper } from './styles/Editor.styles'

import { Page } from '$/client-shared'


export const Editor = () => {
  return <Page>
    <EditorStoreProvider>
    <ThemeLoader>
      <EditorStyles>
        <Header/>
        <EditorWrapper>
          <Aside/>
          <EditorContent/>
        </EditorWrapper>
        <Tabs/>
        <EnterFullScreen/>
        <ThemeSwitcher/>
        <LanguageSwitcher/>
        <RunCode/>
      </EditorStyles>
    </ThemeLoader>
  </EditorStoreProvider>
  </Page>
}

export default Editor
