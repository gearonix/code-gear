import { editor } from 'monaco-editor'

import { FontSizes, TabSizes } from '@/shared/consts'

interface EditorConfigPayload {
  fontSize: FontSizes
  tabSize: TabSizes
}

type EditorConfig = (
  payload: EditorConfigPayload,
) => editor.IStandaloneEditorConstructionOptions

export const editorConfig: EditorConfig = ({ fontSize, tabSize }) => ({
  fontSize,
  tabSize,
  glyphMargin: false,
  lineNumbersMinChars: 2,
  lineDecorationsWidth: 0,
  minimap: {
    enabled: false
  },
  scrollbar: {
    verticalScrollbarSize: 6
  },
})
