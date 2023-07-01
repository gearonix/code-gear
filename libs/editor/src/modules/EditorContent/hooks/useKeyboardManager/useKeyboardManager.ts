import { useCallback, useEffect } from 'react'

import { useActions, useGetters } from '@/shared/hooks'

import { isFileData } from '../../types'
import { useAltNavigation, useFileService } from '..'

import { useAltKeyDown } from '$/shared'

export const useKeyboardManager = () => {
  const { tabs, changeFileHandle } = useActions()
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

  const saveFile = async () => {
    const activeTab = getters.getActiveTab()
    const oldFileHandle = activeTab.getFileHandle()
    const textContent = activeTab.getContent()

    if (!activeTab.wasChanged){
      return
    }

    const fileHandle = await fileService.save(oldFileHandle, textContent)

    if (!fileHandle) {
      return
    }

    changeFileHandle(fileHandle)

  }

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
