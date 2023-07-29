import { Field, ObjectType } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'

@ObjectType()
export class User {
  @Field()
  @ApiProperty({ description: 'Username (used as userId)' })
  username: string

  @Field({ nullable: true })
  @ApiProperty({ description: 'User avatar location' })
  avatarUrl?: string
}
