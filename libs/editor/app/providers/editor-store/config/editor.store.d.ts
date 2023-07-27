import { FontSizes, TabSizes } from '@/shared/consts/font-sizes';
import { Themes } from '@/shared/consts/themes';
import { ContentTab } from '@/widgets/tabs';
import { ExecuteMessage } from '@/widgets/terminal';
import EditorActions from './editor.actions';
import EditorGetters from './editor.getters';
import EditorServices from './editor.services';
import { Hex, LocalStorageClient } from '$/client-shared';
declare class EditorStore {
    activeKey: string;
    content: ContentTab[];
    theme: Themes;
    fontSize: FontSizes;
    tabSize: TabSizes;
    customBackground: Hex;
    customColor: Hex;
    isStorageDisabled: boolean;
    executeMessages: ExecuteMessage[];
    readonly getters: EditorGetters;
    readonly actions: EditorActions;
    readonly services: EditorServices;
    storage: LocalStorageClient;
    constructor();
}
export default EditorStore;
