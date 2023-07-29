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
      ignoreExpiration: false,
      secretOrKey: jwtSecret
    })
  }

  validate(payload: { payload: { username: string } }) {
    console.log(payload)
    return this.usersService.getUserByUsername(payload.payload.username)
  }
}
