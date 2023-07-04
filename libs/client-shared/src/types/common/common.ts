import { KeyboardEvent, MouseEvent, ReactElement, ReactNode } from 'react'
import { ComponentChildren } from 'preact'

export type AnyObject = Record<string, unknown>

export type AnyFunction<T = void> = (...args: any[]) => T

export type WithChildren<T extends AnyObject = AnyObject> = T & {
  children: ComponentChildren
}

export type WithReactChildren<T extends AnyObject = AnyObject> = T & {
  children: ReactElement | ReactNode
}

export type TargetKey = MouseEvent | KeyboardEvent | string;

export type Nullable<T> = T | null

export type Undefinable<T> = T | undefined

export type ValueOf<T> = T[keyof T];
