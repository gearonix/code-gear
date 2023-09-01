import { KeyboardEvent, MouseEvent, ReactElement, ReactNode } from 'react'
import { ComponentChildren } from 'preact'

export type AnyObject = Record<string, unknown>

export type AnyFunction<T = void> = (...args: any[]) => T

export type VoidFunction = () => void

export type WithPreactChildren<T extends AnyObject = AnyObject> = T & {
  children: ComponentChildren
}

export type WithChildren<T> = T & {
  children: ReactElement | ReactNode
}

export type TargetKey = MouseEvent | KeyboardEvent | string

export type Nullable<T> = T | null

export type Undefinable<T> = T | undefined

export type ValueOf<T> = T[keyof T]

export type Keys<T extends readonly unknown[]> = T[number]

export type Hex = `#${string}`

export type CustomArguments<F> = F extends (...args: infer A) => unknown
  ? A
  : never
