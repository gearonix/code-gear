import { Hex } from '$/client-shared';
interface CustomTheme {
    background: Hex;
    color: Hex;
}
export declare const useCustomTheme: () => ({ background, color }: CustomTheme) => void;
export {};
