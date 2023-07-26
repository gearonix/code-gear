import EditorErrors from '@/shared/errors'

import { isFunction, Nullable } from '$/client-shared'

export const useFileSaver = () => {
  return async (
    fileHandle: Nullable<FileSystemFileHandle>,
    textContent: string
  ) => {
    try {
      let handle = fileHandle

      if (!isFunction(fileHandle?.createWritable)) {
        handle = await window.showSaveFilePicker()
      }

      const stream = await (handle as FileSystemFileHandle).createWritable()
      await stream.write(textContent)
      await stream.close()

      return handle
    } catch (error) {
      console.warn(EditorErrors.NotSupportedByBrowser())
    }
  }
}
