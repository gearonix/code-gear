import { MicroserviceOptions } from '@nestjs/microservices'
import { NestFactory }         from '@nestjs/core'

import { AppModule }           from './app.module'
import { KafkaService }        from '@code-gear/api/common'
import { RpcExceptionFilter }  from '@code-gear/api/common'
import { Microservice }        from '@code-gear/api/common'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)

  const kafkaService = app.get(KafkaService)

  app.connectMicroservice<MicroserviceOptions>(
    kafkaService.getKafkaOptions(Microservice.CODE_EXECUTOR)
  )

  app.useGlobalFilters(new RpcExceptionFilter())

  await app.startAllMicroservices()
}

bootstrap()
