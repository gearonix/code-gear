import { TabsActions } from '@/components/Tabs';
import { EditorContentActions } from '@/modules/EditorContent';
import { Themes } from '@/shared/consts';
import EditorStore from './editor.store';
declare class EditorActions {
    private state;
    private readonly getters;
    readonly tabs: TabsActions;
    readonly editor: EditorContentActions;
    constructor(root: EditorStore);
    changeTheme(newTheme: Themes): void;
}
export default EditorActions;
