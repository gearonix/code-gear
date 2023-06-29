import { useCallback, useEffect } from 'react'

import { useActions, useGetters, useStore } from '@/hooks'

import { isFileData } from './../../types'
import { useAltNavigation, useFileService } from './..'

import { useAltKeyDown } from '$/shared'

export const useKeyboardManager = () => {
  const { tabs } = useActions()
  const { activeKey } = useStore()
  const getters = useGetters()
  const keyboard = useAltKeyDown()
  const fileService = useFileService()
  useAltNavigation()

  const openFile = useCallback(async () => {
    const fileData = await fileService.open()

    if (isFileData(fileData)) {
      tabs.createTab(fileData)
    }
  }, [])

  const saveFile = useCallback(async () => {
    const { fileHandle, text } = getters.getActiveTab()
    fileService.save(fileHandle, text)

  }, [activeKey])

  useEffect(() => {
    keyboard.on({
      'O': openFile,
      'S': saveFile,
      'N': () => {tabs.createTab()},
      'T': () => {tabs.removeTab()}
    })

    return () => {
      keyboard.clear()
    }
  }, [])
}
