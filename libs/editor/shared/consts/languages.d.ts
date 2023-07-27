import { ValueOf } from '$/client-shared';
export declare const languages: {
    readonly js: "javascript";
    readonly ts: "typescript";
    readonly tsx: "typescript";
    readonly jsx: "typescript";
    readonly html: "html";
    readonly htm: "html";
    readonly txt: "text";
    readonly css: "css";
    readonly py: "python";
    readonly cpp: "cpp";
    readonly go: "go";
    readonly c: "c";
    readonly java: "java";
};
export type LanguagesValues = ValueOf<typeof languages>;
export type LanguagesKeys = keyof typeof languages;
export declare const executorAllowedLanguages: LanguagesValues[];
