import { editor } from 'monaco-editor';
import { FontSizes, TabSizes } from '@/shared/consts/font-sizes';
interface EditorConfigPayload {
    fontSize: FontSizes;
    tabSize: TabSizes;
}
type EditorConfig = (payload: EditorConfigPayload) => editor.IStandaloneEditorConstructionOptions;
export declare const editorConfig: EditorConfig;
export {};