import { Module } from '@nestjs/common'

import { CodeExecutorController } from './code-executor.controller'

import { ExecutorApiModule } from '@code-gear/api/services'

@Module({
  imports: [ExecutorApiModule],
  controllers: [CodeExecutorController],
  providers: []
})
export class CodeExecutorModule {}
