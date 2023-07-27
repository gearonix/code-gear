import { EditorStore } from '@/app';
import { FileHandlerData } from '@/widgets/editor-content/types';
import { ContentTab } from '@/widgets/tabs';
import { Nullable } from '$/client-shared';
declare class TabsActions {
    private state;
    constructor(root: EditorStore);
    createTab(fileData?: FileHandlerData): Nullable<ContentTab>;
    removeTab(targetKey?: string): void;
    changeActiveTab(targetKey: string): void;
}
export default TabsActions;
