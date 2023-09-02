import { KeyboardEvent, MouseEvent } from 'react'

export type AnyObject = Record<string, unknown>

export type AnyFunction<T = void> = (...args: any[]) => T

export type VoidFunction = () => void

export type TargetKey = MouseEvent | KeyboardEvent | string

export type Nullable<T> = T | null

export type Undefinable<T> = T | undefined

export type ValueOf<T> = T[keyof T]

export type Keys<T extends readonly unknown[]> = T[number]

export type Hex = `#${string}`
