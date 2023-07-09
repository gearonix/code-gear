import EditorStore from './editor.store';
declare class EditorServices {
    private state;
    private getters;
    constructor(root: EditorStore);
    requestCodeExecution(): Promise<void>;
}
export default EditorServices;
