import { editor } from 'monaco-editor'

export const editorConfig: editor.IStandaloneEditorConstructionOptions = {
  fontSize: 20,
  glyphMargin: false,
  lineNumbersMinChars: 3,
  lineDecorationsWidth: 0,
  minimap: { enabled: false }
}
