import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import { corsConfig } from '@/config/cors'
import { createSwaggerDocs } from '@/config/swagger'
import { serverDocsPrefix, serverPort, serverPrefix } from '@code-gear/config'
import { HttpExceptionFilter, ValidationPipe } from '$/nest-common'
import { AppModule } from './app.module'

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
