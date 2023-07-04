import { LocalStorage, LocalStorageKeys } from '../../config/localStorage'
import { isString } from '../../types'

export class LocalStorageClient {
  public get<T>(key: LocalStorageKeys, defaultVal: T): T {
    const value = localStorage.getItem(key) as string
    if (!value){
      return defaultVal
    }
    return isJson(value) ? JSON.parse(value): value
  }
  public set<T extends LocalStorageKeys>(key: T, value: unknown) {
    if (!(key in LocalStorage)){
      return
    }
    if (isString(value)){
      return localStorage.setItem(key, value)
    }
    localStorage.setItem(key, JSON.stringify(value))
  }
}

const isJson = (value: string) => {
  try {
    JSON.parse(value)
  } catch (e) {
    return false
  }
  return true
}
