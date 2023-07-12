import { AnyFunction, Nullable } from '$/client-shared';
export declare const useConfirm: () => {
    protect(callback: AnyFunction): (...args: any[]) => void;
    off(): void;
    on(key: string): void;
    val: Nullable<string>;
};
