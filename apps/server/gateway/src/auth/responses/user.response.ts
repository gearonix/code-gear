import { Field }       from '@nestjs/graphql'
import { ObjectType }  from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'

import { UserEntity }  from '$/nest-common'

@ObjectType()
export class UserResponse implements UserEntity {
  @Field()
  @ApiProperty({ description: 'Username (used as userId)' })
  username: string

  @Field({ nullable: true })
  @ApiProperty({ description: 'User avatar location' })
  avatarUrl: string
}
