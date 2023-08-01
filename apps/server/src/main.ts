import { HttpExceptionFilter } from '@/common/exception-filters'
import { ValidationPipe } from '@/common/pipes/validation.pipe'
import { corsConfig } from '@/config/cors'
import { createSwaggerDocs } from '@/config/swagger'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

import { serverDocsPrefix, serverPort, serverPrefix } from '$/config'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix(serverPrefix)
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors(corsConfig)

  SwaggerModule.setup(serverDocsPrefix, app, createSwaggerDocs(app))

  Logger.log(`🚀 Server is running on port ${serverPort}`)
  await app.listen(serverPort)
}

bootstrap()
