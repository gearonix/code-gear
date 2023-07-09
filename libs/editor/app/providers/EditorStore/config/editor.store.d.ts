import { ContentTab } from '@/components/Tabs';
import { Themes } from '@/shared/consts';
import EditorActions from './editor.actions';
import EditorGetters from './editor.getters';
import EditorServices from './editor.services';
declare class EditorStore {
    activeKey: string;
    content: ContentTab[];
    theme: Themes;
    getters: EditorGetters;
    actions: EditorActions;
    services: EditorServices;
    constructor();
}
export default EditorStore;
