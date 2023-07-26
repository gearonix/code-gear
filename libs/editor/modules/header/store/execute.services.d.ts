import { EditorStore } from '@/app';
import { NotificationMessage } from '@/modules/header/types';
declare class ExecuteServices {
    private state;
    private getters;
    private actions;
    constructor(root: EditorStore);
    requestCodeExecution(): Promise<NotificationMessage>;
}
export default ExecuteServices;
