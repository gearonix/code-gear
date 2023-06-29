import { FileData } from '../../types'

import { filePickerOptions } from './consts'

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
      return {
        name: fileData.name,
        type: fileData.type,
        content: fileContent,
        fileHandle: fileHandle
      }
    }
    else {
      console.warn('Your browser does not support saving and opening files.')
    }
  }
}
