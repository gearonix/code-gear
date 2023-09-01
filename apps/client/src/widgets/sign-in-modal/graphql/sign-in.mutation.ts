import { gql } from '@apollo/react-hooks'

import { ApolloOperation } from '@code-gear/web/shared'

export const SignInMutation: ApolloOperation = {
  gql: gql`
    mutation SignIn($payload: SignIn!) {
      signIn(_graphql: $payload) {
        accessToken
      }
    }
  `,
  method: 'signIn'
}
