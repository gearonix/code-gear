import { Nullable } from '../types';
type Handlers = Record<string, Nullable<() => void>>;
export declare const useAltKeyDown: () => {
    on: (handlers: Handlers) => void;
    clear: () => void;
};
export {};
