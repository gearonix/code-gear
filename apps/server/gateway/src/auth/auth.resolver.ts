import { GqlAuthGuard }      from '@code-gear/api/common'
import { GqlLocalAuthGuard } from '@code-gear/api/common'
import { JwtAuthGuard }      from '@code-gear/api/common'
import { User }              from '@code-gear/api/common'
import { WithUser }          from '@code-gear/api/common'
import { graphqlArg }        from '@code-gear/config'
import { UseGuards }         from '@nestjs/common'
import { Args }              from '@nestjs/graphql'
import { Mutation }          from '@nestjs/graphql'
import { Query }             from '@nestjs/graphql'
import { Resolver }          from '@nestjs/graphql'

import { AuthService }       from './auth.service'
import { SignIn }            from './inputs/sign-in.input'
import { AccessToken }       from './responses'
import { UserResponse }      from './responses'

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
