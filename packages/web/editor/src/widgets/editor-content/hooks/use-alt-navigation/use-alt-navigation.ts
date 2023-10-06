import { useAltKeyDown } from '@code-gear/web/shared'
import { useEffect }     from 'react'

import { useActions }    from '@/shared/hooks'
import { useStore }      from '@/shared/hooks'

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const

// allows the user to use alt + [number] to navigate tabs
export const useAltNavigation = () => {
  const keyboard = useAltKeyDown()
  const { tabs } = useActions()
  const { content } = useStore()

  useEffect(() => {
    keyboard.on(
      Object.fromEntries(
        keys.map((num) => {
          const contentTab = content[num - 1]
          const key = contentTab?.key

          return [num.toString(), key ? () => tabs.changeActiveTab(key) : null]
        })
      )
    )

    return () => {
      keyboard.clear()
    }
  }, [content.length])
}
