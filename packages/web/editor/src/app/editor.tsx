import { NotificationsProvider } from '@code-gear/web/shared'
import { useOverflow }           from '@code-gear/web/shared'
import { WithChildren }          from '@grnx-utils/types'
import { ReactElement }          from 'react'
import { Suspense }              from 'react'

import { Aside }                 from '@/widgets/aside'
import { EditorContent }         from '@/widgets/editor-content'
import { Header }                from '@/widgets/header'
import { HtmlPreview }           from '@/widgets/html-preview'
import { Settings }              from '@/widgets/settings'
import { Terminal }              from '@/widgets/terminal'

import { EditorStoreProvider }   from './providers/editor-store'
import { ModalsContextProvider } from './providers/modals-provider'
import { ThemeLoader }           from './providers/theme-loader'
import { EditorStyles }          from './styles/editor.styles'
import { EditorWrapper }         from './styles/editor.styles'

interface EditorProps {
  SignIn: () => ReactElement
}

export const Editor = ({ SignIn }: WithChildren<EditorProps>) => {
  useOverflow()

  return (
    <EditorStoreProvider>
      <ThemeLoader>
        <ModalsContextProvider SignIn={SignIn}>
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
  )
}

export default Editor
