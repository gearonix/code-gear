import { Keys, ValueOf } from '$/client-shared';
export declare const CUSTOM_THEME: "Custom";
export declare const themes: readonly ["vs-dark", "Monokai", "Dracula", "Dreamweaver", "GitHub", "Nord", "Twilight", "IDLE", "Eiffel", "Tomorrow", "Custom"];
export type Themes = typeof themes[number];
export declare const languages: {
    readonly js: "javascript";
    readonly ts: "typescript";
    readonly tsx: "typescript";
    readonly jsx: "typescript";
    readonly html: "html";
    readonly htm: "html";
    readonly txt: "text";
    readonly css: "css";
};
export type LanguagesValues = ValueOf<typeof languages>;
export type LanguagesKeys = keyof typeof languages;
export declare const maxTabsLength: 9;
export declare const executorAllowedLanguages: string[];
export declare const fontSizes: readonly [14, 16, 18, 20, 22, 24, 26];
export type FontSizes = Keys<typeof fontSizes>;
export declare const tabSizes: readonly [4, 2];
export type TabSizes = Keys<typeof tabSizes>;
export declare enum KeyBuildings {
    O = "O",
    S = "S",
    N = "N",
    T = "T",
    P = "P",
    J = "J",
    Q = "Q"
}
