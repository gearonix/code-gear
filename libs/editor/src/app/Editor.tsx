import { Terminal } from '@/components/Terminal'
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
          <Terminal/>
        </EditorWrapper>
      </EditorStyles>
    </ThemeLoader>
  </EditorStoreProvider>
  </Page>
}

export default Editor
