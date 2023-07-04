export const LocalStorage = {
  EDITOR_THEME: 'EDITOR_THEME',
  EDITOR_CONTENT_DATA: 'EDITOR_CONTENT_DATA'
} as const

export type LocalStorageKeys = keyof typeof LocalStorage

export type LocalStorageValue<T extends LocalStorageKeys> = typeof LocalStorage[T]
