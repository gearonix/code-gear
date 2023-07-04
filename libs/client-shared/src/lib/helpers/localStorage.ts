import { LocalStorage, LocalStorageKeys } from '../../config/localStorage'

export class LocalStorageClient {
  public get<T>(key: LocalStorageKeys, defaultVal: T): T {
    const value = localStorage.getItem(key) as string
    if (!value){
      return defaultVal
    }
    return isJson(value) ? JSON.parse(value): value
  }
  public set<T extends LocalStorageKeys>(key: T, value: string) {
    if (key in LocalStorage){
      localStorage.setItem(key, value)
    }
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
