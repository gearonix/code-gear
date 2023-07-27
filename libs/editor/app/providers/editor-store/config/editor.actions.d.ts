import { FontSizes, TabSizes } from '@/shared/consts/font-sizes';
import { Themes } from '@/shared/consts/themes';
import { EditorContentActions } from '@/widgets/editor-content';
import { TabsActions } from '@/widgets/tabs';
import { TerminalActions } from '@/widgets/terminal';
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
