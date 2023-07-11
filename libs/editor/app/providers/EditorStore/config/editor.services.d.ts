import EditorStore from './editor.store';
declare class EditorServices {
    private state;
    private getters;
    private actions;
    constructor(root: EditorStore);
    requestCodeExecution(): Promise<void>;
}
export default EditorServices;
