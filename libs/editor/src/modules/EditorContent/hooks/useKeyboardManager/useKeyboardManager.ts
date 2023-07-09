import { useEffect } from 'react'

import { useActions } from '@/shared/hooks'

import { useAltNavigation, useFileService } from '..'

import { useAltKeyDown } from '$/client-shared'

export const useKeyboardManager = () => {
  const actions = useActions()
  const keyboard = useAltKeyDown()
  const { openFile, saveFile } = useFileService()
  useAltNavigation()


  useEffect(() => {
    keyboard.on({
      'O': openFile,
      'S': saveFile,
      'N': () => {actions.tabs.createTab()},
      'T': () => {actions.tabs.removeTab()}
    })

    return () => {
      keyboard.clear()
    }
  }, [])
}
