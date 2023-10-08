import { ExecutorApiModule }      from '@code-gear/api/services'
import { Module }                 from '@nestjs/common'

import { CodeExecutorController } from './code-executor.controller'

@Module({
  imports: [ExecutorApiModule],
  controllers: [CodeExecutorController],
  providers: []
})
export class CodeExecutorModule {}
