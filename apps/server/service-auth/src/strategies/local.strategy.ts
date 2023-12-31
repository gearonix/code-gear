import { Injectable }                   from '@nestjs/common'
import { InternalServerErrorException } from '@nestjs/common'
import { UnauthorizedException }        from '@nestjs/common'
import { PassportStrategy }             from '@nestjs/passport'
import { Strategy }                     from 'passport-local'

import { AuthService }                  from '../auth.service'
import { AccountsRepository }           from '@/repository/accounts.repository'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'username', passwordField: 'password' })
  }

  async validate(
    username: string,
    password: string
  ): Promise<AccountsRepository> {
    try {
      const user = await this.authService.validate({
        username,
        password
      })

      if (!user) {
        throw new UnauthorizedException()
      }

      return user
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }
}
