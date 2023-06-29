import { KeyboardEvent, MouseEvent } from 'react'
import { ComponentChildren } from 'preact'

export type AnyObject = Record<string, unknown>

export type Empty = Record<string, never>

export type WithChildren<T extends AnyObject = Empty> = T & {
  children: ComponentChildren
}

export type TargetKey = MouseEvent | KeyboardEvent | string;
