import { Controller }          from '@nestjs/common'
import { QueryBus }            from '@nestjs/cqrs'
import { User }                from '@code-gear/api/common'
import { MessagePattern }      from '@nestjs/microservices'
import { Payload }             from '@nestjs/microservices'
import { AccessTokenResponse } from '@code-gear/api/contracts'
import { AuthTopic }           from '@code-gear/api/contracts'
import { AuthService }         from './auth.service'

@Controller()
export class AuthConsumer {
  constructor(
    private readonly query: QueryBus,
    private readonly authService: AuthService
  ) {}

  @MessagePattern(AuthTopic.SIGN_IN)
  async signIn(@Payload() user: User): Promise<AccessTokenResponse> {
    return this.authService.generateToken(user.username)
  }
}
