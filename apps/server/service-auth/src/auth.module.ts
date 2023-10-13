import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

import { TemplateConsumer } from './auth.consumer'
import { EnvModule } from '@code-gear/api/common'
import { ListenerModule } from '@code-gear/api/common'
import { KafkaService } from '@code-gear/api/common'
import { QueryHandlers } from '@/queries/handlers'
import { CqrsModule } from '@nestjs/cqrs'

@Module({
  imports: [
    HttpModule,
    EnvModule,
    CqrsModule,
    ListenerModule.forRoot({
      isMicroservice: true,
    }),
  ],
  providers: [KafkaService, ...QueryHandlers],
  controllers: [TemplateConsumer],
  exports: [],
})
export class TemplateModule {}
