import { LocalStorage, LocalStorageKeys } from '@/config/local-storage'
import { isString } from '@/types'

import { appName } from '$/config'

export class LocalStorageClient {
  isDisabled = false
  constructor(isDisabled?: boolean) {
    this.isDisabled = isDisabled ?? this.isDisabled
  }

  public get<T>(key: LocalStorageKeys, defaultVal: T): T {
    if (this.isDisabled) {
      return defaultVal
    }

    const value = localStorage.getItem(`${appName}_${key}`) as string

    if (!value) {
      return defaultVal
    }

    return isJson(value) ? JSON.parse(value) : value
  }

  public set<T extends LocalStorageKeys>(key: T, value: unknown) {
    if (this.isDisabled || !(key in LocalStorage)) {
      return
    }

    if (isString(value)) {
      return localStorage.setItem(key, value)
    }
    localStorage.setItem(`${appName}_${key}`, JSON.stringify(value))
  }

  public clear(key?: LocalStorageKeys): void {
    if (key) {
      return localStorage.removeItem(key)
    }
    localStorage.clear()
  }
}

const isJson = (value: string) => {
  try {
    JSON.parse(value)
  } catch (error) {
    return false
  }
  return true
}