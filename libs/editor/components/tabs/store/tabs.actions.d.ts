import { EditorStore } from '@/app';
import { ContentTab } from '@/components/tabs/lib';
import { FileHandlerData } from '@/modules/editor-content/types';
import { Nullable } from '$/client-shared';
declare class TabsActions {
    private state;
    constructor(root: EditorStore);
    createTab(fileData?: FileHandlerData): Nullable<ContentTab>;
    removeTab(targetKey?: string): void;
    changeActiveTab(targetKey: string): void;
}
export default TabsActions;
