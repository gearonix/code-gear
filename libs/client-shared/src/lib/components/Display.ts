import { WithChildren } from '@/types'

type DisplayProps<T> = WithChildren<{ when: T }>

export const Display = <T>({ when, children }: DisplayProps<T>) => {
  return when ? children : null
}
