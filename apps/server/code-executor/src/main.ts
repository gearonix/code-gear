import { MicroserviceOptions } from '@nestjs/microservices'
import { Transport }           from '@nestjs/microservices'

import { Logger }              from '@nestjs/common'
import { NestFactory }         from '@nestjs/core'

import { AppModule }           from './app/app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'auth',
        brokers: ['localhost:29092']
      },
      consumer: {
        groupId: 'auth-consumer'
      }
    }
  })

  await app.startAllMicroservices()
}

bootstrap()
