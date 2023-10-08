import { Field }                            from '@nestjs/graphql'
import { ObjectType }                       from '@nestjs/graphql'
import { ApiProperty }                      from '@nestjs/swagger'

import { AccessToken as CommonAccessToken } from '$/nest-common'

@ObjectType()
export class AccessToken implements CommonAccessToken {
  @Field()
  @ApiProperty({ description: 'Authorization token (jwt)' })
  accessToken: string
}
