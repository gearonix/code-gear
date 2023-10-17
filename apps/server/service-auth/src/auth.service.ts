import { Injectable }          from '@nestjs/common'
import { JwtService }          from '@nestjs/jwt'
import * as bcrypt             from 'bcryptjs'

import { AccessTokenResponse } from '@code-gear/api/contracts'
import { SignIn }              from '@code-gear/api/contracts'
import { UserResponse }        from '@code-gear/api/contracts'
import { Nullable }            from '@grnx-utils/types'
import { AccountsRepository }  from '@/repository/accounts.repository'
import { JwtTokenPayload }     from '@/lib/types'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly accountsService: AccountsRepository
  ) {}

  public async validate(payload: SignIn): Promise<Nullable<UserResponse>> {
    const user = await this.accountsService.getUserByUsername(payload.username)

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

    return this.accountsService.createUser({
      ...user,
      password: hashPassword
    })
  }

  public async generateToken(username: string): Promise<AccessTokenResponse> {
    const accessToken = this.jwtService.sign({
      username
    } satisfies JwtTokenPayload)

    return { accessToken }
  }
}
