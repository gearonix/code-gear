import { IsString, MaxLength, MinLength } from 'class-validator';

import { applyDecorators } from '@nestjs/common'
import { Field } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'

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
