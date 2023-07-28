import { gql } from '@apollo/react-hooks'

import { ApolloMutation } from '$/client-shared'

export const SignInMutation: ApolloMutation = {
  gql: gql`
    mutation SignIn($payload: SignIn!) {
      signIn(_graphql: $payload) {
        username
        avatarUrl
      }
    }
  `,
  method: 'signIn'
}
