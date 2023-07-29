import { Field, ObjectType } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'

@ObjectType()
export class AccessToken {
  @Field()
  @ApiProperty({ description: 'Authorization token (jwt)' })
  accessToken: string
}
