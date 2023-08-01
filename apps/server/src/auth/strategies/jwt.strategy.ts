import { ExtractJwt, Strategy } from 'passport-jwt'

import { UsersRepository } from '@/core/users'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { JwtTokenPayload } from '../types'

import { jwtSecret } from '$/config'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret
    })
  }

  validate(payload: JwtTokenPayload) {
    return this.usersService.getUserByUsername(payload.username)
  }
}
