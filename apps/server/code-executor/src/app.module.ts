import { Module }            from '@nestjs/common'

import { EnvModule }         from '@code-gear/api/common'
import { KafkaService }      from '@code-gear/api/common'
import { ExecutorApiModule } from '@/executor-api'

@Module({
  imports: [EnvModule, ExecutorApiModule],
  controllers: [],
  providers: [KafkaService]
})
export class AppModule {}
