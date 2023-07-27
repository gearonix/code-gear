import { EditorStore } from '@/app';
import { ExecutorResponse } from '@/modules/header';
declare class TerminalActions {
    private state;
    private readonly getters;
    private readonly storage;
    constructor(root: EditorStore);
    addExecuteMessage(res: ExecutorResponse): void;
    clearExecuteMessages(): void;
}
export default TerminalActions;