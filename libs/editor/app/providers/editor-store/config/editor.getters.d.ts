import { EditorStore } from '@/app';
import { LanguagesValues } from '@/shared/consts/languages';
import { ContentTab } from '@/widgets/tabs';
declare class EditorGetters {
    private state;
    constructor(editorState: EditorStore);
    getActiveTab(key?: string): ContentTab;
    getActiveTabText(): string;
    getTabIndex(key?: string): number;
    getActiveLanguage(): LanguagesValues;
    isAllowedToExecute(): boolean;
}
export default EditorGetters;
