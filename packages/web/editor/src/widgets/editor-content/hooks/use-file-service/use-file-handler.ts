import { Undefinable }         from '@code-gear/web/shared'

import EditorErrors            from '@/shared/exceptions'

import { FileHandlerData }     from '../../types'
import { filePickerOptions }   from './lib/consts'
import { getLanguageFromName } from './lib/get-language-from-name'

export const useFileHandler = () => {
  return async (): Promise<Undefinable<FileHandlerData>> => {
    if ('showOpenFilePicker' in window) {
      const [fileHandle] = await window.showOpenFilePicker(filePickerOptions)
      const fileData = await fileHandle.getFile()
      const fileContent = await fileData.text()
      const [fileLang] = getLanguageFromName(fileData.name)

      return {
        name: fileData.name,
        type: fileData.type,
        content: fileContent,
        fileHandle,
        language: fileLang
      }
    }

    console.warn(EditorErrors.NotSupportedByBrowser())
  }
}
