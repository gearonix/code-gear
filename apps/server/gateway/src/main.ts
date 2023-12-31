import {HttpExceptionFilter, RpcExceptionFilter} from '@code-gear/api/common'
import { ListenerModule }      from '@code-gear/api/common'
import { ListenerService }     from '@code-gear/api/common'
import { ValidationPipe }      from '@code-gear/api/common'
import { serverDocsPrefix }    from '@code-gear/config'
import { serverPort }          from '@code-gear/config'
import { serverPrefix }        from '@code-gear/config'
import { Logger }              from '@nestjs/common'
import { NestFactory }         from '@nestjs/core'
import { SwaggerModule }       from '@nestjs/swagger'

import { corsConfig }          from '@/config/cors'
import { createSwaggerDocs }   from '@/config/swagger'

import { AppModule }           from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix(serverPrefix)
  app.useGlobalFilters(new HttpExceptionFilter(), new RpcExceptionFilter())
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors(corsConfig)

  SwaggerModule.setup(serverDocsPrefix, app, createSwaggerDocs(app))

  const listener = app.get(ListenerService)

  await app.listen(listener.PORT, listener.getListenerCallback())
}

bootstrap()
