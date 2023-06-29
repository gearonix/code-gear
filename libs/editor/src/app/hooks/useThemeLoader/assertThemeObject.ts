import { editor } from 'monaco-editor'

import { isObject } from '$/shared'

export function assertThemeObject(value: unknown):
  asserts value is editor.IStandaloneThemeData {

  if (isObject(value) && 'base' in value
    && typeof value.base === 'string'
    && 'colors' in value && isObject(value.colors)
  ) {
    return
  }

  throw new Error('incoming json object should be must be ThemeObject type.')
}
