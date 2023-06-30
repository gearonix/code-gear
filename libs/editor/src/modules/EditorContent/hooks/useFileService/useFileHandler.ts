import EditorErrors from '@/shared/errors'

import { FileData } from '../../types'

import { filePickerOptions } from './lib/consts'
import { getLanguageFromName } from './lib/getLanguageFromName'

import { isFunction, Undefinable } from '$/shared'

export const useFileHandler = () => {
  return async (): Promise<Undefinable<FileData>> => {
    if ('showOpenFilePicker' in window &&
      isFunction(window.showOpenFilePicker)
    ) {
      // Typescript does not support File System Access API
      const [fileHandle]: any = await window.showOpenFilePicker(filePickerOptions)
      const fileData = await fileHandle.getFile()
      const fileContent: string = await fileData.text()
      const fileLang = getLanguageFromName(fileData.name)
      return {
        name: fileData.name,
        type: fileData.type,
        content: fileContent,
        fileHandle: fileHandle,
        language: fileLang
      }
    }

    console.warn(EditorErrors.NotSupportedByBrowser())
  }
}

