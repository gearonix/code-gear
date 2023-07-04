import { Themes } from '@/shared/consts'

import { AnyFunction } from '$/shared'

const EditorErrors: Record<string, AnyFunction<string>> = {
  ThemeUpload(theme: Themes){
    return `Unable to upload theme - ${theme}.json`
  },
  NotSupportedByBrowser(){
    return 'Your browser does not support saving and opening files.'
  },
  WrongJsonObject(type: string){
    return `incoming json object should be must be ${type} type.`
  }
}

export default EditorErrors
