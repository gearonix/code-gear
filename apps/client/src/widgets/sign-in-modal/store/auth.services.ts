import { makeAutoObservable } from 'mobx'

import { SignInMutation } from '../graphql/sign-in.mutation'
import { SignInForm, SignInResponse } from '../types'

import { mutate } from '$/client-shared'

export class AuthServices {
  constructor() {
    makeAutoObservable(this)
  }

  async signIn(form: SignInForm) {
    const res = await mutate<SignInResponse, SignInForm>(SignInMutation, form)
    console.log(res)
  }
}
