 # GraphQL

In the project, I used *GraphQL* for client-server communication.

[GraphQL](https://graphql.org/learn/) - is a query language, architectural style, and toolset for creating and managing APIs. 

## Schema Generation

I used the [@nestjs/graphql](https://docs.nestjs.com/graphql/quick-start#installation) package to autogenerate the 
*GraphQL schema* from typescript interfaces
([Code First](https://docs.nestjs.com/graphql/quick-start#code-first)).


::: warning 

There may be problems with webpack hot reload during autogeneration,
in which case check that the `_schema.gql` file is in `.nxignore`.

::: code-group
```sh [.nxignore]
_schema.gql
```
You can read more about [.nxignore](https://nx.dev/reference/nxignore) here.

:::

Here's a common use case with `@nestjs/graphql`.

```ts
// API gateway

@Resolver(() => Example)
export class ExampleResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Example)
  @UseGuards(GqlAuthGuard, GqlLocalAuthGuard)
  async signIn(
    @Args(graphqlArg) payload: SignIn,
    @WithUser() user: User
  ): Promise<AccessToken> {
    return this.authService.generateToken(user.username)
  }
}


```

## Using the `@grnx-utils/apollo` package.

On the frontend, you can use the [@grnx-utils/apollo](https://www.npmjs.com/package/@grnx-utils/apollo) package to 
reduce the number of boilerplate code.

```ts
import { createApolloClient } from '@grnx-utils/apollo'

const apollo = createApolloClient({
  url: graphqlEndpoint
})

class AuthServices implements IAuthServices {
  async getProfile() {
    const [payload, error] = await apollo.request<Request, Response>(
      exampleQuery
    )

    if (payload) {
      this.state.username = payload.username
      this.state.isAuthorized = true
    }
  }
}

```
