import EditorErrors from '@/shared/errors'

import { Nullable } from '$/shared'


export const useFileSaver = () => {
  return async (fileHandle: Nullable<FileSystemFileHandle>, textContent : string) => {
      if ('showSaveFilePicker' in window) {
        const handle = fileHandle ?? await window.showSaveFilePicker()
        const stream = await handle.createWritable()
        await stream.write(textContent)
        await stream.close()

        return handle
      }

      console.warn(EditorErrors.NotSupportedByBrowser())
    }
}
