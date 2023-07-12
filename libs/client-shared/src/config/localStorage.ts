export const LocalStorage = {
  EDITOR_THEME: 'EDITOR_THEME',
  EDITOR_CONTENT_DATA: 'EDITOR_CONTENT_DATA',
  EDITOR_EXECUTE_MESSAGES: 'EDITOR_EXECUTE_MESSAGES',
  EDITOR_FONT_SIZE: 'EDITOR_FONT_SIZE',
  EDITOR_TAB_SIZE: 'EDITOR_TAB_SIZE',
  EDITOR_CUSTOM_BACKGROUND: 'EDITOR_CUSTOM_BACKGROUND',
  EDITOR_CUSTOM_COLOR: 'EDITOR_CUSTOM_COLOR'
} as const

export type LocalStorageKeys = keyof typeof LocalStorage

export type LocalStorageValue<T extends LocalStorageKeys> = typeof LocalStorage[T]
