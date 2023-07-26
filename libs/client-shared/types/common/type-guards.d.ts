import { AnyFunction } from './common';
export declare const isObject: (value: unknown) => value is object;
export declare const isString: (value: unknown) => value is string;
export declare const isFunction: <T>(value: unknown) => value is AnyFunction<T>;
