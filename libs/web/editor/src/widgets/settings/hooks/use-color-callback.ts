import { CUSTOM_THEME } from '@/shared/consts/themes'
import { useActions, useStore } from '@/shared/hooks'

import { Hex, useDebounce } from '$/client-shared'

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
