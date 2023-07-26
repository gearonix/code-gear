import { useCallback } from 'react'

import { isFileData } from '@/modules/editor-content/types'
import { useActions, useGetters } from '@/shared/hooks'

import { getLanguageFromName } from './lib/get-language-from-name'
import { useFileHandler } from './use-file-handler'
import { useFileSaver } from './use-file-saver'

export const useFileService = () => {
  const open = useFileHandler()
  const save = useFileSaver()
  const actions = useActions()
  const getters = useGetters()

  const openFile = useCallback(async () => {
    const fileData = await open()

    if (isFileData(fileData)) {
      actions.tabs.createTab(fileData)
    }
  }, [])

  const saveFile = async () => {
    const activeTab = getters.getActiveTab()
    const oldFileHandle = activeTab.getFileHandle()
    const textContent = activeTab.getContent()

    if (!activeTab.wasChanged) {
      return
    }

    const fileHandle = await save(oldFileHandle, textContent)

    if (!fileHandle) {
      return
    }

    activeTab.setFileHandle(fileHandle)
    activeTab.lang = getLanguageFromName(fileHandle.name)
  }

  return {
    openFile,
    saveFile
  }
}
