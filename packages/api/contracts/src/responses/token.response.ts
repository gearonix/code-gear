import { Field }                            from '@nestjs/graphql'
import { ObjectType }                       from '@nestjs/graphql'
import { ApiProperty }                      from '@nestjs/swagger'

import { AccessToken as CommonAccessToken } from '@code-gear/api/common'

@ObjectType()
export class AccessTokenResponse implements CommonAccessToken {
  @Field()
  @ApiProperty({ description: 'Authorization token (jwt)' })
  accessToken: string
}
