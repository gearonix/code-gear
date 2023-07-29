import { makeAutoObservable } from 'mobx'

import { AuthServices } from './auth.services'

export class AuthStore {
  username: string
  isAuthorized: boolean
  readonly services: AuthServices

  constructor() {
    makeAutoObservable(this)

    this.services = new AuthServices(this)
  }
}
