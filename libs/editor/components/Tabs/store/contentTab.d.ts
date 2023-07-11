import { FileHandlerData } from '@/modules/EditorContent/types';
import { LanguagesValues } from '@/shared/consts';
import { ContentTabInstance } from '../types';
import { Nullable } from '$/client-shared';
type ContentTabArgs = Partial<{
    lastNumber: number;
    fileData: FileHandlerData;
    instance: ContentTabInstance;
}>;
export declare class ContentTab {
    private _key;
    private _fileHandle;
    private _label;
    private _content;
    idx: number;
    lang: LanguagesValues;
    wasChanged: boolean;
    constructor({ lastNumber, fileData, instance }: ContentTabArgs);
    setFileHandle(fileHandle: FileSystemFileHandle): void;
    getFileHandle(): Nullable<FileSystemFileHandle>;
    setLabel(newLabel: string): void;
    getLabel(): string;
    private updateLabel;
    setTabContent(content: string): void;
    getContent(): string;
    getKeyId(): string;
    private initUsingFileData;
    private initUsingInstance;
}
export {};
