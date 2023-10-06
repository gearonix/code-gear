import { Module }            from '@nestjs/common'

import { ExecutorApiModule } from './executor-api'

@Module({
  controllers: [],
  providers: [],
  imports: [ExecutorApiModule]
})
export class ServicesModule {}
