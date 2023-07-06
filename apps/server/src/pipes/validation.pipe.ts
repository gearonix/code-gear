import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'



@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: unknown, metadata: ArgumentMetadata) {
    const validationErrors = await validate(plainToClass(metadata.metatype, value))

    if (validationErrors.length) {
      const messages = validationErrors.map(err => {
        return `${err.property} - ${Object.values(err.constraints).join(', ')}`
      })
      throw new BadRequestException(messages.join('. '))
    }

    return value
  }

}
