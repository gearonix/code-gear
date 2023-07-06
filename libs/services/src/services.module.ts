import { Module } from '@nestjs/common'

import { ExecutorApiModule } from './compiler-api'

@Module({
  controllers: [],
  providers: [],
  imports: [ExecutorApiModule]
})
export class ServicesModule {}
