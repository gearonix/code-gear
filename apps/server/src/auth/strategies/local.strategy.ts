import { Strategy } from 'passport-local'

import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException
} from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { AuthService } from '../auth.service'

import { UserResponse } from './../responses'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'username', passwordField: 'password' })
  }

  async validate(username: string, password: string): Promise<UserResponse> {
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
