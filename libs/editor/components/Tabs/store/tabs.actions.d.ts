import { EditorStore } from '@/app';
import { FileHandlerData } from '@/modules/EditorContent/types';
declare class TabsActions {
    private state;
    constructor(root: EditorStore);
    createTab(fileData?: FileHandlerData): void;
    removeTab(targetKey?: string): void;
    changeActiveTab(targetKey: string): void;
}
export default TabsActions;
