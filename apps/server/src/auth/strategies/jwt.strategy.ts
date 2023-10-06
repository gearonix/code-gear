import { jwtSecret }        from '@code-gear/config'
import { Injectable }       from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt }       from 'passport-jwt'
import { Strategy }         from 'passport-jwt'

import { UsersRepository }  from '@/core/users'

import { JwtTokenPayload }  from '../types'

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
