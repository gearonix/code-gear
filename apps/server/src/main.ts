import { corsConfig } from '@/config/cors'
import { HttpExceptionFilter } from '@/exception-filters'
import { ValidationPipe } from '@/pipes/validation.pipe'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

import { serverPort, serverPrefix } from '$/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix(serverPrefix)
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors(corsConfig)

  Logger.log(`🚀 Server is running on port ${serverPort}`)
  await app.listen(serverPort)
}

bootstrap()
