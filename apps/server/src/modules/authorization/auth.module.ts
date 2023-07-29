import { SessionSerializer } from '@/guards/session-serializer.guard'
import { AuthResolver } from '@/modules/authorization/auth.resolver'
import { AuthService } from '@/modules/authorization/auth.service'
import { UsersModule } from '@/modules/users'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { JwtStrategy } from './strategies/jwt.strategy'
import { LocalStrategy } from './strategies/local.strategy'

import { jwtSecret } from '$/config'

@Module({
  controllers: [],
  providers: [
    AuthResolver,
    // JwtStrategy,
    LocalStrategy,
    AuthService,
    SessionSerializer
  ],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  exports: [LocalStrategy]
})
export class AuthModule {}
