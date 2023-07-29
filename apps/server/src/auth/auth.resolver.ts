import { WithUser } from '@/common/decorators'
import { GqlAuthGuard, GqlLocalAuthGuard, JwtAuthGuard } from '@/common/guards'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { SignIn } from './inputs/sign-in.input'
import { AuthService } from './auth.service'
import { AccessToken, UserResponse } from './responses'

import { graphqlArg } from '$/config'

@Resolver(() => UserResponse)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AccessToken)
  @UseGuards(GqlAuthGuard, GqlLocalAuthGuard)
  async signIn(
    @Args(graphqlArg) payload: SignIn,
    @WithUser() user
  ): Promise<AccessToken> {
    return this.authService.generateToken(user.username)
  }

  @Query(() => UserResponse)
  @UseGuards(JwtAuthGuard)
  async getProfile(@WithUser() user): Promise<UserResponse> {
    return user
  }
}
