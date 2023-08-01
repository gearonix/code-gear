import { UsersModule } from '@/core/users'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { JwtStrategy } from './strategies/jwt.strategy'
import { LocalStrategy } from './strategies/local.strategy'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'

import { jwtSecret } from '$/config'

@Module({
  controllers: [],
  providers: [AuthResolver, JwtStrategy, LocalStrategy, AuthService],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  exports: []
})
export class AuthModule {}
