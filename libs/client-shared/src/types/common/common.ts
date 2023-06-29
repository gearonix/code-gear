import { KeyboardEvent, MouseEvent } from 'react'
import { ComponentChildren } from 'preact'

export type AnyObject = Record<string, unknown>

// eslint-disable-next-line
export type WithChildren<T extends AnyObject = {}> = T & {
  children: ComponentChildren
}

export type TargetKey = MouseEvent | KeyboardEvent | string;

export type Nullable<T> = T | null

