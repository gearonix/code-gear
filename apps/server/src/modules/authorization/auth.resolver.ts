import { WithUser } from '@/decorators'
import { GqlAuthGuard } from '@/guards/gql-auth.guard'
import { GqlLocalAuthGuard } from '@/guards/gql-local-auth.guard'
import { JwtAuthGuard } from '@/guards/jwt-auth.guard'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AuthService } from './auth.service'
import { AccessToken, SignIn, User } from './dto'

import { graphqlArg } from '$/config'

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}
  @Query(() => AccessToken)
  @UseGuards(GqlAuthGuard, GqlLocalAuthGuard)
  async signIn(@Args(graphqlArg) payload: SignIn, @WithUser() user) {
    return this.authService.generateToken(user.username)
  }

  // @Mutation(() => AccessToken)

  // Graphql requires at least one @Query to
  // work so for now this will be here lol
  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  sayHello(@WithUser() user): string {
    console.log('say-hello')
    return user
  }
}
