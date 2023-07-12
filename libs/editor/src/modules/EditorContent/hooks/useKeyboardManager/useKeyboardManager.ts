import { useCallback, useEffect } from 'react';

import { useActions, useModalsContext, useModalToggle } from '@/shared/hooks'

import { useAltNavigation, useFileService } from '..'

import { useAltKeyDown } from '$/client-shared'

export const useKeyboardManager = () => {
  const actions = useActions()
  const keyboard = useAltKeyDown()
  const { openFile, saveFile } = useFileService()
  useAltNavigation()
  const toggle = useModalToggle('isTerminalOpened')
  const modalContext = useModalsContext()

  const test = useCallback(() => {
    modalContext.toggle('isSettingsOpened')
  }, [modalContext])

  useEffect(() => {
    keyboard.on({
      'O': openFile,
      'S': saveFile,
      'N': () => {actions.tabs.createTab()},
      'T': () => {actions.tabs.removeTab()},
      'P': toggle('terminal'),
      'J': toggle('test_cases'),
      'Q': test
    })

    return () => {
      keyboard.clear()
    }
  }, [modalContext.state.isSettingsOpened])
}
