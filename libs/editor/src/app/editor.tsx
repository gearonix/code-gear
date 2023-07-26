import { HtmlPreview } from '@/components/html-preview'
import { Settings } from '@/components/settings'
import { Terminal } from '@/components/terminal'
import { Aside } from '@/modules/aside'
import { EditorContent } from '@/modules/editor-content'
import { Header } from '@/modules/header'

import { EditorStoreProvider } from './providers/editor-store'
import { ModalsContextProvider } from './providers/modals-provider'
import { ThemeLoader } from './providers/theme-loader'
import { EditorStyles, EditorWrapper } from './styles/editor.styles'

import { NotificationsProvider, Page, useOverflow } from '$/client-shared'

export const Editor = () => {
  useOverflow()

  return (
    <Page>
      <EditorStoreProvider>
        <ThemeLoader>
          <ModalsContextProvider>
            <NotificationsProvider>
              <EditorStyles>
                <Header />
                <EditorWrapper>
                  <Aside />
                  <EditorContent />
                  <Terminal />
                  <HtmlPreview />
                </EditorWrapper>
                <Settings />
              </EditorStyles>
            </NotificationsProvider>
          </ModalsContextProvider>
        </ThemeLoader>
      </EditorStoreProvider>
    </Page>
  )
}

export default Editor
