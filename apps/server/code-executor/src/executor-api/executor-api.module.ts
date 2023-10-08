import { HttpModule }          from '@nestjs/axios'
import { Module }              from '@nestjs/common'

import { ExecutorApiService }  from './executor-api.service'
import { ExecutorApiConsumer } from './executor-api.consumer'

@Module({
  imports: [HttpModule],
  providers: [ExecutorApiService],
  controllers: [ExecutorApiConsumer],
  exports: [ExecutorApiService]
})
export class ExecutorApiModule {}
