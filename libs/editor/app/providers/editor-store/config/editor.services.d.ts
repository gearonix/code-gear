import { ExecuteServices } from '@/widgets/header';
import EditorStore from './editor.store';
declare class EditorServices {
    private state;
    private readonly getters;
    private readonly actions;
    readonly codeRunner: ExecuteServices;
    constructor(root: EditorStore);
}
export default EditorServices;
