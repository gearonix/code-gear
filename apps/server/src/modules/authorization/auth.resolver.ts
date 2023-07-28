import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { SignIn, User } from './dto'

import { graphqlArg } from '$/config'
import { PrismaService } from '$/services'

@Resolver(() => User)
export class AuthResolver {
  constructor(private prisma: PrismaService) {}
  @Mutation(() => User)
  async signIn(@Args(graphqlArg) payload: SignIn): Promise<User> {
    const test = await this.prisma.users.findMany()
    console.log(test)
    return {
      avatarUrl: 'test',
      username: 'test2'
    }
  }

  // Graphql requires at least one @Query to
  // work so for now this will be here lol
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!'
  }
}
