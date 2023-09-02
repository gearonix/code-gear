import { AnyObject } from '@/types'
import { ComponentChildren } from 'preact'
import { Component } from 'preact'
import { ReactElement } from 'react'
import { ReactNode } from 'react'

export type WithFeatures<
  T extends AnyObject,
  B extends Record<string, Component | ReactNode>
> = T & {
  features: B
}

export type WithPreactChildren<T extends AnyObject = AnyObject> = T & {
  children: ComponentChildren
}

export type WithChildren<T> = T & {
  children: ReactElement | ReactNode
}

export type CustomArguments<F> = F extends (...args: infer A) => unknown
  ? A
  : never
