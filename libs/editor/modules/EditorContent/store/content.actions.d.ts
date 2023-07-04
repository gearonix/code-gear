import { EditorStore } from '@/app';
declare class ContentActions {
    private state;
    private getters;
    constructor(root: EditorStore);
    saveContent(content: string, key?: string): void;
}
export default ContentActions;
