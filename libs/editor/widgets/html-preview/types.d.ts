import { LanguagesValues } from '@/shared/consts/languages';
export type PreviewLanguages = Extract<LanguagesValues, 'html' | 'css' | 'javascript'>;
export interface PreviewState {
    html: string;
    css: string;
    javascript: string;
}
