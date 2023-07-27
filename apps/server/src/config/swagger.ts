import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger'

import { serverAppName } from '$/config'

export const createSwaggerDocs = (app): OpenAPIObject => {
  const swagger = new DocumentBuilder()
    .setTitle(serverAppName)
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .build()

  return SwaggerModule.createDocument(app, swagger)
}
