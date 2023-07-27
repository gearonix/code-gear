import { EditorStore } from '@/app';
import { NotificationMessage } from '../types';
declare class ExecuteServices {
    private state;
    private getters;
    private actions;
    constructor(root: EditorStore);
    requestCodeExecution(): Promise<NotificationMessage>;
}
export default ExecuteServices;
