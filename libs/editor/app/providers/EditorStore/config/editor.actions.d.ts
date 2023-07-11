import { TabsActions } from '@/components/Tabs';
import { TerminalActions } from '@/components/Terminal';
import { EditorContentActions } from '@/modules/EditorContent';
import { Themes } from '@/shared/consts';
import EditorStore from './editor.store';
declare class EditorActions {
    private state;
    private readonly getters;
    private readonly storage;
    readonly tabs: TabsActions;
    readonly editor: EditorContentActions;
    readonly terminal: TerminalActions;
    constructor(root: EditorStore);
    changeTheme(newTheme: Themes): void;
}
export default EditorActions;
