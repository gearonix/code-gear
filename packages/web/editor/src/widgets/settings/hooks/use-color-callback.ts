import { Hex }          from '@code-gear/web/shared'
import { useDebounce }  from '@code-gear/web/shared'

import { CUSTOM_THEME } from '@/shared/consts/themes'
import { useActions }   from '@/shared/hooks'
import { useStore }     from '@/shared/hooks'

export const useColorCallback = (cb: (hex: Hex) => void) => {
  const { theme } = useStore()
  const actions = useActions()

  return useDebounce((_: unknown, hex: Hex) => {
    if (theme !== CUSTOM_THEME) {
      actions.changeTheme(CUSTOM_THEME)
    }

    return cb(hex)
  }, 300)
}
