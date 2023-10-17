import { MicroserviceOptions } from '@nestjs/microservices'
import { NestFactory }         from '@nestjs/core'
import { KafkaService }        from '@code-gear/api/common'
import { ListenerService }     from '@code-gear/api/common'
import { Microservice }        from '@code-gear/api/common'
import { RpcExceptionFilter }  from '@code-gear/api/common'
import { ValidationPipe }      from '@code-gear/api/common'
import { AuthModule }          from './auth.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AuthModule)

  const kafkaService = app.get(KafkaService)

  app.connectMicroservice<MicroserviceOptions>(
    kafkaService.getKafkaOptions(Microservice.AUTH)
  )

  app.useGlobalFilters(new RpcExceptionFilter())

  app.useGlobalPipes(new ValidationPipe())

  await app.startAllMicroservices()

  await app.init()

  const listener = app.get(ListenerService)

  await app.listen(listener.PORT, listener.getListenerCallback())
}

bootstrap()
