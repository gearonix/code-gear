import { makeAutoObservable } from 'mobx'

import { SignInForm } from '@/widgets/sign-in-modal/types'

export class AuthServices {
  constructor() {
    makeAutoObservable(this)
  }

  signIn(payload: SignInForm) {
    console.log(payload)
  }
}
