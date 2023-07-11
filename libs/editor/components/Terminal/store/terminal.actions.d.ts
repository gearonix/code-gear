import { EditorStore } from '@/app';
import { ExecutorResponse } from '@/components/HeaderRightSection';
declare class TerminalActions {
    private state;
    private readonly getters;
    private readonly storage;
    constructor(root: EditorStore);
    addExecuteMessage(res: ExecutorResponse): void;
    clearExecuteMessages(): void;
}
export default TerminalActions;
