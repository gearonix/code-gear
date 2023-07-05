import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'

import { serverPort, serverPrefix } from '$/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(serverPrefix)
  Logger.log(`🚀 Server is running on port ${serverPort}`)
  await app.listen(serverPort)
}

bootstrap()
