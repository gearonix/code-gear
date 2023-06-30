import { useEffect } from 'react'

import { useActions, useGetters, useStore } from '@/shared/hooks'

import { useAltKeyDown } from '$/shared'

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const

// allows the user to use alt + [number] to navigate tabs
export const useAltNavigation = () => {
  const keyboard = useAltKeyDown()
  const { tabs } = useActions()
  const { content } = useStore()

  useEffect(() => {
    keyboard.on(Object.fromEntries(keys.map((num) => {
      const key = content[Number(num) - 1]?.key
      return [
        num, key ? () => tabs.changeActiveTab(key): null
      ]
    })))

    return () => {
      keyboard.clear()
    }
  }, [content.length])
}
