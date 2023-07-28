import { DocumentNode } from 'graphql/language'

export interface ApolloMutation {
  gql: DocumentNode
  method: string
}
