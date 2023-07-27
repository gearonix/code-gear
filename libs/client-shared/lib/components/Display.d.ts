/// <reference types="react" />
import { WithChildren } from '@/types';
type DisplayProps<T> = WithChildren<{
    when: T;
}>;
export declare const Display: <T>({ when, children }: DisplayProps<T>) => import("react").ReactNode;
export {};
