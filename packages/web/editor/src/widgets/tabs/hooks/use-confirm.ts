import { AnyFunction } from '@code-gear/web/shared'
import { Nullable }    from '@code-gear/web/shared'
import { useState }    from 'react'

export const useConfirm = () => {
  const [confirmKey, setConfirmKey] = useState<Nullable<string>>(null)

  return {
    protect: (callback: AnyFunction) => {
      return (...args: unknown[]) => {
        if (confirmKey) {
          return
        }
        callback(...args)
      }
    },
    off: () => {
      setConfirmKey(null)
    },
    on: (key: string) => {
      setConfirmKey(key)
    },
    val: confirmKey
  }
}
