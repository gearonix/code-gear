import { useCallback, useEffect } from 'react'

import { KeyBuildings } from '@/shared/consts/key-buildings'
import { useActions, useModalsContext, useModalToggle } from '@/shared/hooks'

import { useAltNavigation, useFileService } from '../index'

import { useAltKeyDown } from '@code-gear/web/shared'

export const useKeyboardManager = () => {
  const actions = useActions()
  const keyboard = useAltKeyDown()
  const { openFile, saveFile } = useFileService()
  useAltNavigation()
  const toggle = useModalToggle('isTerminalOpened')
  const modalContext = useModalsContext()

  const toggleSettings = useCallback(() => {
    modalContext.toggle('isSettingsOpened')
  }, [modalContext])

  useEffect(() => {
    keyboard.on({
      [KeyBuildings.O]: openFile,
      [KeyBuildings.S]: saveFile,
      [KeyBuildings.N]: () => {
        actions.tabs.createTab()
      },
      [KeyBuildings.T]: () => {
        actions.tabs.removeTab()
      },
      [KeyBuildings.P]: toggle('terminal'),
      [KeyBuildings.J]: toggle('test_cases'),
      [KeyBuildings.Q]: toggleSettings
    })

    return () => {
      keyboard.clear()
    }
  }, [modalContext.state.isSettingsOpened])
}
