import { WithReactChildren } from '@code-gear/client-shared'

type DisplayProps<T> = WithReactChildren<{when: T}>

export const Display = <T>({ when, children }: DisplayProps<T>) => {
  return when ? children : null
}

type TernaryProps<T> = WithReactChildren<{where: T}>

export const Ternary = <T>({ where, children }: TernaryProps<T>) => {
  const [first, second] = children
  return where ? first : second
}
