import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { CodeExecutorModule } from './modules/code-executor-api'

@Module({
  imports: [ConfigModule.forRoot(), CodeExecutorModule],
  controllers: [],
  providers: []
})
export class AppModule {}
