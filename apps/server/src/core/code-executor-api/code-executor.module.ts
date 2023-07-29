import { Module } from '@nestjs/common'

import { CodeExecutorController } from './code-executor.controller'

import { ExecutorApiModule } from '$/services'

@Module({
  imports: [ExecutorApiModule],
  controllers: [CodeExecutorController],
  providers: []
})
export class CodeExecutorModule {}
