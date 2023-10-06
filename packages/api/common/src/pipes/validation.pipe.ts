import { ArgumentMetadata }    from '@nestjs/common'
import { BadRequestException } from '@nestjs/common'
import { Injectable }          from '@nestjs/common'
import { PipeTransform }       from '@nestjs/common'
import { plainToClass }        from 'class-transformer'
import { validate }            from 'class-validator'

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: unknown, metadata: ArgumentMetadata) {
    const validationErrors = await validate(
      plainToClass(metadata.metatype, value)
    )

    if (validationErrors.length > 0) {
      const messages = validationErrors.map((err) => {
        return `${err.property} - ${Object.values(err.constraints).join(', ')}`
      })
      throw new BadRequestException(messages.join('. '))
    }

    return value
  }
}
