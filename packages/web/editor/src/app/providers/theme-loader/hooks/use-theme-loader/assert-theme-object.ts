import { isObject } from '@code-gear/web/shared'
import { editor }   from 'monaco-editor'

import EditorErrors from '@/shared/exceptions'

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function assertThemeObject(
  value: unknown
): asserts value is editor.IStandaloneThemeData {
  if (
    isObject(value) &&
    'base' in value &&
    typeof value.base === 'string' &&
    'colors' in value &&
    isObject(value.colors)
  ) {
    return
  }

  throw new Error(EditorErrors.WrongJsonObject('ThemeObject'))
}
