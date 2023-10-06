import { Dispatch } from 'react';
export type ReducerPayload<T> = Partial<{
    state: T;
    update: Dispatch<Partial<T>>;
}>;
