import { ContentTab } from '@/components/Tabs';
import { Themes } from '@/shared/consts';
import EditorActions from './editor.actions';
import EditorGetters from './editor.getters';
declare class EditorStore {
    activeKey: string;
    content: ContentTab[];
    theme: Themes;
    getters: EditorGetters;
    actions: EditorActions;
    constructor();
}
export default EditorStore;
