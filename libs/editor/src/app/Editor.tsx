import { Terminal } from '@/components/Terminal'
import { Aside } from '@/modules/Aside'
import { EditorContent } from '@/modules/EditorContent'
import { Header } from '@/modules/Header'

import { EditorStoreProvider } from './providers/EditorStore'
import { ModalsContextProvider } from './providers/ModalsProvider'
import { ThemeLoader } from './providers/ThemeLoader'
import { EditorStyles, EditorWrapper } from './styles/Editor.styles'

import { Page, useOverflow } from '$/client-shared'


export const Editor = () => {
  useOverflow()

  return <Page>
    <EditorStoreProvider>
    <ThemeLoader>
      <ModalsContextProvider>
        <EditorStyles>
          <Header/>
          <EditorWrapper>
            <Aside/>
            <EditorContent/>
            <Terminal/>
          </EditorWrapper>
        </EditorStyles>
      </ModalsContextProvider>
    </ThemeLoader>
  </EditorStoreProvider>
  </Page>
}

export default Editor
