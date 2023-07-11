export declare const LocalStorage: {
    readonly EDITOR_THEME: "EDITOR_THEME";
    readonly EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA";
    readonly EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES";
};
export type LocalStorageKeys = keyof typeof LocalStorage;
export type LocalStorageValue<T extends LocalStorageKeys> = typeof LocalStorage[T];
