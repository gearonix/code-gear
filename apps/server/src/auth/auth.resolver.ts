import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { graphqlArg } from '$/config'
import {
  GqlAuthGuard,
  GqlLocalAuthGuard,
  JwtAuthGuard,
  User,
  WithUser
} from '$/nest-common'
import { AuthService } from './auth.service'
import { SignIn } from './inputs/sign-in.input'
import { AccessToken, UserResponse } from './responses'

@Resolver(() => UserResponse)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AccessToken)
  @UseGuards(GqlAuthGuard, GqlLocalAuthGuard)
  async signIn(
    @Args(graphqlArg) payload: SignIn,
    @WithUser() user: User
  ): Promise<AccessToken> {
    return this.authService.generateToken(user.username)
  }

  @Query(() => UserResponse)
  @UseGuards(JwtAuthGuard)
  async getProfile(@WithUser() user): Promise<UserResponse> {
    return user
  }
}
