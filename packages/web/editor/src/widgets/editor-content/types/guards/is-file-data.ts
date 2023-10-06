import { FileHandlerData } from '../types'

import { isObject } from '@code-gear/web/shared'

export const isFileData = (value: unknown): value is FileHandlerData => {
  if (!isObject(value)) {
    return false
  }

  if (
    'name' in value &&
    typeof value.name === 'string' &&
    'type' in value &&
    typeof value.type === 'string' &&
    'content' in value &&
    typeof value.content === 'string'
  ) {
    return true
  }

  return false
}
