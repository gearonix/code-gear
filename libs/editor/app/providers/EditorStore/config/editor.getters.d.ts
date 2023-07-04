import { EditorStore } from '@/app';
import { ContentTab } from '@/components/Tabs';
import { LanguagesValues } from '@/shared/consts';
declare class EditorGetters {
    private state;
    constructor(editorState: EditorStore);
    getActiveTab(key?: string): ContentTab;
    getActiveTabText(): string;
    getTabIndex(key?: string): number;
    getActiveLanguage(): LanguagesValues;
}
export default EditorGetters;
