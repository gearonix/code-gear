import { Module }                 from '@nestjs/common'

import { CodeExecutorController } from './code-executor.controller'
import { KafkaModule }            from '@code-gear/api/common'
import { Microservice }           from '@code-gear/api/common'

@Module({
  imports: [KafkaModule.forRoot(Microservice.CODE_EXECUTOR)],
  controllers: [CodeExecutorController],
  providers: []
})
export class CodeExecutorModule {}
