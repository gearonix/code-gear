import { Themes } from '@/shared/consts'

import { AnyFunction } from '$/client-shared'

const EditorErrors: Record<string, AnyFunction<string>> = {
  ThemeUpload(theme: Themes) {
    return `Unable to upload theme - ${theme}.json`
  },
  NotSupportedByBrowser() {
    return 'Your browser does not support saving and opening files.'
  },
  WrongJsonObject(type: string) {
    return `Incoming json object should be must be ${type} type.`
  },
  WrongResponseType(type: string) {
    return `Incoming response object should be must be ${type} type.`
  }
}

export default EditorErrors
