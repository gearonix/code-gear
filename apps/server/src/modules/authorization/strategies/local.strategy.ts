import { Strategy } from 'passport-local'

import { SignIn } from '@/modules/authorization/dto'
import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException
} from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { AuthService } from '../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'username', passwordField: 'password' })
  }

  async validate(username: string, password: string) {
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
