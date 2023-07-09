import { ValueOf } from '$/client-shared';
export declare const themes: readonly ["vs-dark", "Monokai", "Dracula", "Dreamweaver", "GitHub", "Nord", "Twilight", "IDLE", "Eiffel", "Tomorrow"];
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
