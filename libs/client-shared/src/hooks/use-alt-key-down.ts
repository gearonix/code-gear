import { EventHandler, KeyboardEvent, useState } from 'react'

import { Nullable } from '../types'

type Handlers = Record<string, Nullable<() => void>>

export const useAltKeyDown = () => {
  const [subscribers, setSubscribers] = useState<EventHandler<any>[]>([])
  return {
    on: (handlers: Handlers) => {
      Object.entries(handlers).forEach(([key, handler]) => {
        const subscriber = (e: KeyboardEvent) => {
          if (e.altKey && e.key === key.toLowerCase()) {
            e.preventDefault()
            handler()
            return false
          }
        }
        setSubscribers([...subscribers, subscriber])
        document.addEventListener('keydown', subscriber as EventHandler<any>)
      })
    },
    clear: () => {
      subscribers.forEach((sub) => {
        document.removeEventListener('keydown', sub)
      })
    }
  }
}
