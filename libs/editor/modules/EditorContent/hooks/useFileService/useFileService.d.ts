export declare const useFileService: () => {
    open: () => Promise<import("$/client-shared").Undefinable<import("../../types").FileHandlerData>>;
    save: (fileHandle: import("$/client-shared").Nullable<FileSystemFileHandle>, textContent: string) => Promise<import("$/client-shared").Nullable<FileSystemFileHandle> | undefined>;
};
