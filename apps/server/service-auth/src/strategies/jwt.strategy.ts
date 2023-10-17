import { jwtSecret }          from '@code-gear/config'
import { Injectable }         from '@nestjs/common'
import { PassportStrategy }   from '@nestjs/passport'
import { ExtractJwt }         from 'passport-jwt'
import { Strategy }           from 'passport-jwt'

import { JwtTokenPayload }    from '../lib/types'
import { AccountsRepository } from '@/repository/accounts.repository'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: AccountsRepository) {
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
