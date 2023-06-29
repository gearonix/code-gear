import { FileHandle } from '@/components/Tabs/types'

import { AnyObject, isFunction } from '$/shared'


export const useFileSaver = () => {
  return async (fileHandle: FileHandle, text : string) => {
      if ( 'showSaveFilePicker' in window && isFunction<AnyObject>(window.showSaveFilePicker)) {
        const handle = fileHandle ?? await window.showSaveFilePicker()
        if (isFunction(handle.createWritable)){
          const stream: any = await handle.createWritable()
          await stream.write(text)
          await stream.close()
        }
        else{
          console.warn('Your browser does not support saving and opening files.')
        }
      }
    }
}
