import { gql } from '@apollo/react-hooks'

import { ApolloOperation } from '$/client-shared'

export const getProfileQuery: ApolloOperation = {
  gql: gql`
    query {
      getProfile {
        username
        avatarUrl
      }
    }
  `,
  method: 'getProfile'
}
