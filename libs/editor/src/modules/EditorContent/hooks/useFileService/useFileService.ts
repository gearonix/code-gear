import { useCallback } from 'react'

import { isFileData } from '@/modules/EditorContent/types'
import { useActions, useGetters } from '@/shared/hooks'

import { getLanguageFromName } from './lib/getLanguageFromName'
import { useFileHandler } from './useFileHandler'
import { useFileSaver } from './useFileSaver'

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

    if (!activeTab.wasChanged){
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
    openFile, saveFile
  }
}
