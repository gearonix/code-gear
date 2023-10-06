import { useCallback }         from 'react'

import { useActions }          from '@/shared/hooks'
import { useGetters }          from '@/shared/hooks'

import { isFileData }          from '../../types'
import { getLanguageFromName } from './lib/get-language-from-name'
import { useFileHandler }      from './use-file-handler'
import { useFileSaver }        from './use-file-saver'

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
  }, [actions.tabs, open])

  const saveFile = async () => {
    const activeTab = getters.getActiveTab()
    const oldFileHandle = activeTab.fileHandle
    const textContent = activeTab.content

    if (!activeTab.wasChanged) {
      return
    }

    const fileHandle = await save(oldFileHandle, textContent)

    if (!fileHandle) {
      return
    }

    activeTab.fileHandle = fileHandle
    activeTab.lang = getLanguageFromName(fileHandle.name)
  }

  return {
    openFile,
    saveFile
  }
}
