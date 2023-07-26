import { AnyFunction, Nullable } from '$/client-shared';
export declare const useConfirm: () => {
    protect(callback: AnyFunction): (...args: unknown[]) => void;
    off(): void;
    on(key: string): void;
    val: Nullable<string>;
};
