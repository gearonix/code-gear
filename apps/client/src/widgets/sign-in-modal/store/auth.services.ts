import { makeAutoObservable } from 'mobx'

import { AuthStore } from '@/widgets/sign-in-modal'
import { getProfileQuery } from '@/widgets/sign-in-modal/graphql/get-profile.query'

import { SignInMutation } from '../graphql/sign-in.mutation'
import { AccessToken, SignInForm, SignInResponse, UserEntity } from '../types'

import { ApolloMiddleware, LocalStorageClient } from '$/client-shared'

export class AuthServices {
  private state: AuthStore
  private readonly storage: LocalStorageClient
  private readonly apollo: ApolloMiddleware

  constructor(root) {
    this.state = root
    this.storage = new LocalStorageClient()
    this.apollo = new ApolloMiddleware()
    makeAutoObservable(this)
  }

  async signIn(form: SignInForm): Promise<SignInResponse> {
    const [payload] = await this.apollo.operate<AccessToken, SignInForm>(
      SignInMutation,
      form,
      'mutate'
    )

    if (payload) {
      this.storage.set('AUTH_TOKEN', payload.accessToken)

      await this.getProfile()
    }

    return {
      isError: !payload
    }
  }

  async getProfile() {
    const [payload] = await this.apollo.operate<UserEntity, void>(
      getProfileQuery
    )

    if (payload) {
      this.state.username = payload.username
      this.state.isAuthorized = true
    }
  }
}