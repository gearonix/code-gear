export const LocalStorage = {
  EDITOR_THEME: 'EDITOR_THEME'
} as const

export type LocalStorageKeys = keyof typeof LocalStorage

export type LocalStorageValue<T extends LocalStorageKeys> = typeof LocalStorage[T]
