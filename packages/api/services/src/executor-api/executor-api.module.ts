import { HttpModule }         from '@nestjs/axios'
import { Module }             from '@nestjs/common'

import { ExecutorApiService } from './executor-api.service'

@Module({
  imports: [HttpModule],
  providers: [ExecutorApiService],
  exports: [ExecutorApiService]
})
export class ExecutorApiModule {}
