import { Injectable }      from '@nestjs/common'
import { JwtService }      from '@nestjs/jwt'
import * as bcrypt         from 'bcryptjs'

import { UsersRepository } from '@/core/users'

import { SignIn }          from './inputs/sign-in.input'
import { AccessToken }     from './responses'
import { UserResponse }    from './responses'
import { JwtTokenPayload } from './types'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersRepository
  ) {}

  public async validate(payload: SignIn): Promise<UserResponse | null> {
    const user = await this.usersService.getUserByUsername(payload.username)

    if (!user) {
      return this.registerUser(payload)
    }

    const isPasswordEquals = await bcrypt.compare(
      payload.password,
      user.password
    )

    if (!isPasswordEquals) {
      return null
    }

    return user
  }

  public async registerUser(user: SignIn): Promise<UserResponse> {
    const hashPassword = await bcrypt.hash(user.password, 5)

    return this.usersService.createUser({
      ...user,
      password: hashPassword
    })
  }

  public async generateToken(username: string): Promise<AccessToken> {
    const accessToken = this.jwtService.sign({
      username
    } satisfies JwtTokenPayload)

    return { accessToken }
  }
}
