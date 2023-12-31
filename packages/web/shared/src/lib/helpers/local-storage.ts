import { appName }          from '@code-gear/config'

import { LocalStorage }     from '@/config/local-storage'
import { LocalStorageKeys } from '@/config/local-storage'
import { isString }         from '@/types'

export class LocalStorageClient {
  isDisabled = false
  constructor(isDisabled?: boolean) {
    this.isDisabled = isDisabled ?? this.isDisabled
  }

  public get<T>(key: LocalStorageKeys, defaultVal: T): T {
    if (this.isDisabled) {
      return defaultVal
    }

    const value = localStorage.getItem(this.withPrefix(key)) as string

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
      return localStorage.setItem(this.withPrefix(key), value)
    }
    localStorage.setItem(this.withPrefix(key), JSON.stringify(value))
  }

  public clear(key?: LocalStorageKeys): void {
    if (key) {
      return localStorage.removeItem(this.withPrefix(key))
    }
    localStorage.clear()
  }

  private withPrefix(key: string) {
    return `${appName}__${key}`
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
