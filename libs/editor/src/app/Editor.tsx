import { Settings } from '@/components/Settings'
import { Terminal } from '@/components/Terminal'
import { Aside } from '@/modules/Aside'
import { EditorContent } from '@/modules/EditorContent'
import { Header } from '@/modules/Header'

import { EditorStoreProvider } from './providers/EditorStore'
import { ModalsContextProvider } from './providers/ModalsProvider'
import { ThemeLoader } from './providers/ThemeLoader'
import { EditorStyles, EditorWrapper } from './styles/Editor.styles'

import { NotificationsProvider, Page, useOverflow } from '$/client-shared'
import { HtmlPreview } from '@/components/HtmlPreivew';


export const Editor = () => {
  useOverflow()

  return <Page>
    <EditorStoreProvider>
    <ThemeLoader>
      <ModalsContextProvider>
        <NotificationsProvider>
          <EditorStyles>
            <Header/>
            <EditorWrapper>
              <Aside/>
              <EditorContent/>
              <Terminal/>
              <HtmlPreview/>
            </EditorWrapper>
            <Settings/>
          </EditorStyles>
        </NotificationsProvider>
      </ModalsContextProvider>
    </ThemeLoader>
  </EditorStoreProvider>
  </Page>
}

export default Editor
