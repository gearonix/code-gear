interface WithUsername {
  username: string
}

export interface SignInForm extends WithUsername{
  password: string
}

export interface AccessToken {
  accessToken: string
}

export interface UserEntity extends WithUsername {
  avatarUrl: string
}

export interface SignInResponse {
  isError: boolean
}
