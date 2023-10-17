import { Field }       from '@nestjs/graphql'
import { ObjectType }  from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'

import { User }        from '@code-gear/api/common'

@ObjectType()
export class UserResponse implements Omit<User, 'password'> {
  @Field()
  @ApiProperty({ description: 'Username (used as userId)' })
  username: string

  @Field({ nullable: true })
  @ApiProperty({ description: 'User avatar location' })
  avatarUrl: string
}
