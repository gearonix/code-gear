import { Nullable } from '$/client-shared';
export declare const useFileSaver: () => (fileHandle: Nullable<FileSystemFileHandle>, textContent: string) => Promise<Nullable<FileSystemFileHandle> | undefined>;
