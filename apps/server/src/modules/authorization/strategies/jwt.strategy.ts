import { ExtractJwt, Strategy } from 'passport-jwt'

import { SignIn } from '@/modules/authorization/dto'
import { UsersService } from '@/modules/users'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { jwtSecret } from '$/config'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    })
  }

  validate(payload: SignIn) {
    return this.usersService.getUserByUsername(payload.username)
  }
}
