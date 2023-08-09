import { User } from '@/common/types/_prisma'
import { Field, ObjectType } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'

@ObjectType()
export class UserResponse implements Omit<User, 'password'> {
  @Field()
  @ApiProperty({ description: 'Username (used as userId)' })
  username: string

  @Field({ nullable: true })
  @ApiProperty({ description: 'User avatar location' })
  avatarUrl?: string
}
