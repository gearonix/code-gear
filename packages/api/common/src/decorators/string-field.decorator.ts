import { applyDecorators } from '@nestjs/common'
import { Field }           from '@nestjs/graphql'
import { ApiProperty }     from '@nestjs/swagger'
import { IsString }        from 'class-validator'
import { MaxLength }       from 'class-validator'
import { MinLength }       from 'class-validator'

type StringFieldPayload = Partial<{
  min: number
  max: number
  example: string
}>

export const StringField = ({
  min = 6,
  max = 14,
  example
}: StringFieldPayload) => {
  return applyDecorators(
    Field(),
    IsString(),
    MinLength(min),
    MaxLength(max),
    ApiProperty({ example })
  )
}
