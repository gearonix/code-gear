import { useState } from 'react'

import { AnyFunction, Nullable } from '$/client-shared'

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
