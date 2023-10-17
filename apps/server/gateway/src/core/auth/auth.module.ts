import { Module }       from '@nestjs/common'

import { AuthResolver } from './auth.resolver'
import { KafkaModule }  from '@code-gear/api/common'
import { Microservice } from '@code-gear/api/common'

@Module({
  controllers: [],
  providers: [AuthResolver],
  imports: [KafkaModule.forRoot(Microservice.AUTH)],
  exports: []
})
export class AuthModule {}
