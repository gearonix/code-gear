import { EditorStore } from '@/app';
import { ContentTab } from '@/components/tabs';
import { LanguagesValues } from '@/shared/consts';
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
