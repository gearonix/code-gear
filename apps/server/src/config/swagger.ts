import { serverAppName }   from '@code-gear/config'
import { DocumentBuilder } from '@nestjs/swagger'
import { OpenAPIObject }   from '@nestjs/swagger'
import { SwaggerModule }   from '@nestjs/swagger'

export const createSwaggerDocs = (app): OpenAPIObject => {
  const swagger = new DocumentBuilder()
    .setTitle(serverAppName)
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .build()

  return SwaggerModule.createDocument(app, swagger)
}
