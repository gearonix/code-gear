import { HttpModule }         from '@nestjs/axios'
import { Module }             from '@nestjs/common'

import { AuthConsumer }       from './auth.consumer'
import { DatabaseModule }     from '@code-gear/api/common'
import { EnvModule }          from '@code-gear/api/common'
import { JwtModule }          from '@code-gear/api/common'
import { KafkaService }       from '@code-gear/api/common'
import { ListenerModule }     from '@code-gear/api/common'
import { CqrsModule }         from '@nestjs/cqrs'
import { AuthService }        from './auth.service'
import { AccountsRepository } from './repository/accounts.repository'
import { JwtStrategy }        from '@/strategies/jwt.strategy'
import { LocalStrategy }      from '@/strategies/local.strategy'

@Module({
  imports: [
    HttpModule,
    EnvModule,
    CqrsModule,
    JwtModule,
    DatabaseModule,
    ListenerModule.forRoot({
      isMicroservice: true
    })
  ],
  providers: [
    KafkaService,
    AuthService,
    AccountsRepository,
    JwtStrategy,
    LocalStrategy
  ],
  controllers: [AuthConsumer],
  exports: []
})
export class AuthModule {}
