import { FileHandlerData } from '@/widgets/editor-content/types';
import { ContentTab } from '@/widgets/tabs/types';
type GenerateContentTabPayload = Partial<{
    lastNumber: number;
    fileData: FileHandlerData;
}>;
export declare const generateNewTab: ({ fileData, lastNumber }: GenerateContentTabPayload) => ContentTab;
export {};
