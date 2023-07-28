import { AuthResolver } from '@/modules/authorization/auth.resolver'
import { Module } from '@nestjs/common'

import { PrismaModule } from '$/services'

@Module({
  controllers: [],
  providers: [AuthResolver],
  imports: [PrismaModule]
})
export class AuthModule {}
