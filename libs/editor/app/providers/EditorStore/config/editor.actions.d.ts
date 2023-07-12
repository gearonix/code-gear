import { TabsActions } from '@/components/Tabs';
import { TerminalActions } from '@/components/Terminal';
import { EditorContentActions } from '@/modules/EditorContent';
import { FontSizes, TabSizes, Themes } from '@/shared/consts';
import EditorStore from './editor.store';
import { Hex } from '$/client-shared';
declare class EditorActions {
    private state;
    private readonly getters;
    readonly tabs: TabsActions;
    readonly editor: EditorContentActions;
    readonly terminal: TerminalActions;
    constructor(root: EditorStore);
    changeTheme(theme: Themes): void;
    changeFontSize(fontSize: FontSizes): void;
    changeTabSize(tabSize: TabSizes): void;
    changeCustomBackground(hex: Hex): void;
    changeCustomColor(hex: Hex): void;
    setIsLocalStorageDisabled(isDisabled: boolean): void;
}
export default EditorActions;
