import { WithReactChildren } from '@code-gear/client-shared';
type DisplayProps<T> = WithReactChildren<{
    when: T;
}>;
export declare const Display: <T>({ when, children }: DisplayProps<T>) => import("react").ReactNode;
export {};
