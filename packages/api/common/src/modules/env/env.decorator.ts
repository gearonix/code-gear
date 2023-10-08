import { applyDecorators } from '@nestjs/common'
import { IsNotEmpty }      from 'class-validator'
import { IsString }        from 'class-validator'

export const Env = () => {
  return applyDecorators(IsString(), IsNotEmpty())
}
