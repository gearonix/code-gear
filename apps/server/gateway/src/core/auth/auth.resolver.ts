import { GqlAuthGuard }        from '@code-gear/api/common'
import { Microservice }        from '@code-gear/api/common'
import { GqlLocalAuthGuard }   from '@code-gear/api/common'
import { JwtAuthGuard }        from '@code-gear/api/common'
import { User }                from '@code-gear/api/common'
import { WithUser }            from '@code-gear/api/common'
import { graphqlArg }          from '@code-gear/config'
import { Inject }              from '@nestjs/common'
import { OnModuleInit }        from '@nestjs/common'
import { UseGuards }           from '@nestjs/common'
import { Args }                from '@nestjs/graphql'
import { Mutation }            from '@nestjs/graphql'
import { Query }               from '@nestjs/graphql'
import { Resolver }            from '@nestjs/graphql'

import { AccessTokenResponse } from '@code-gear/api/contracts'
import { AuthTopic }           from '@code-gear/api/contracts'
import { SignIn }              from '@code-gear/api/contracts'
import { UserResponse }        from '@code-gear/api/contracts'
import { ClientKafka }         from '@nestjs/microservices'
import { Observable }          from 'rxjs'

@Resolver(() => UserResponse)
export class AuthResolver implements OnModuleInit {
  constructor(
    @Inject(Microservice.AUTH) private readonly authClient: ClientKafka
  ) {}

  async onModuleInit() {
    this.authClient.subscribeToResponseOf(AuthTopic.SIGN_IN)
    this.authClient.subscribeToResponseOf(AuthTopic.GET_PROFILE)
    await this.authClient.connect()
  }

  @Mutation(() => AccessTokenResponse)
  @UseGuards(GqlAuthGuard, GqlLocalAuthGuard)
  async signIn(
    @Args(graphqlArg) payload: SignIn,
    @WithUser() user: User
  ): Promise<Observable<AccessTokenResponse>> {
    return this.authClient.send<AccessTokenResponse>(AuthTopic.SIGN_IN, user)
  }

  @Query(() => UserResponse)
  @UseGuards(JwtAuthGuard)
  async getProfile(@WithUser() user): Promise<UserResponse> {
    return user
  }
}
