export declare const LocalStorage: {
    readonly EDITOR_THEME: "EDITOR_THEME";
    readonly EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA";
    readonly EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES";
    readonly EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE";
    readonly EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE";
    readonly EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND";
    readonly EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR";
};
export type LocalStorageKeys = keyof typeof LocalStorage;
export type LocalStorageValue<T extends LocalStorageKeys> = typeof LocalStorage[T];
