import { Module }                     from '@nestjs/common'
import { JwtModule as NestJwtModule } from '@nestjs/jwt'
import { JwtService }                 from '@nestjs/jwt'
import { jwtSecret }                  from '@code-gear/config'

@Module({
  imports: [
    NestJwtModule.register({
      secret: jwtSecret,
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  exports: [NestJwtModule]
})
export class JwtModule {}
