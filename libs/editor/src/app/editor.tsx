import { Suspense } from 'react'

import { Aside } from '@/widgets/aside'
import { EditorContent } from '@/widgets/editor-content'
import { Header } from '@/widgets/header'
import { HtmlPreview } from '@/widgets/html-preview'
import { Settings } from '@/widgets/settings'
import { Terminal } from '@/widgets/terminal'

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
                <Suspense fallback={null}>
                  <Settings />
                </Suspense>
              </EditorStyles>
            </NotificationsProvider>
          </ModalsContextProvider>
        </ThemeLoader>
      </EditorStoreProvider>
    </Page>
  )
}

export default Editor
