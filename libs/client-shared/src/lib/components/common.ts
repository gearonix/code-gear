import { WithReactChildren } from '@code-gear/client-shared'

type DisplayProps<T> = WithReactChildren<{ when: T }>

export const Display = <T>({ when, children }: DisplayProps<T>) => {
  return when ? children : null
}
