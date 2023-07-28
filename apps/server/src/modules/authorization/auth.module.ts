import { AuthResolver } from '@/modules/authorization/auth.resolver'
import { Module } from '@nestjs/common'

@Module({
  controllers: [],
  providers: [AuthResolver],
  imports: []
})
export class AuthModule {}
