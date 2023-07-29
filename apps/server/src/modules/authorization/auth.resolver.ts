import { WithUser } from '@/decorators'
import { GqlAuthGuard } from '@/guards/gql-auth.guard'
import { GqlLocalAuthGuard } from '@/guards/gql-local-auth.guard'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { SignIn, User } from './dto'

import { graphqlArg } from '$/config'

@Resolver(() => User)
export class AuthResolver {
  constructor() {}
  @Query(() => User)
  @UseGuards(GqlAuthGuard, GqlLocalAuthGuard)
  async signIn(
    @Args(graphqlArg) payload: SignIn,
    @WithUser() user
  ): Promise<User> {
    console.log('USER')
    console.log(user)
    return user
  }

  // Graphql requires at least one @Query to
  // work so for now this will be here lol
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!'
  }
}
