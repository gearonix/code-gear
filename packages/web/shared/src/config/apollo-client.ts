import { ApolloClient }       from '@apollo/client'
import { createHttpLink }     from '@apollo/client'
import { InMemoryCache }      from '@apollo/client'
import { setContext }         from '@apollo/client/link/context'
import { EndPoints }          from '@code-gear/config'
import { serverUrl }          from '@code-gear/config'

import { LocalStorageClient } from '@/lib/helpers'
import { Nullable }           from '@/types'

const graphqlUri = `${serverUrl}/${EndPoints._GRAPHQL}`

const storage = new LocalStorageClient()

const httpLink = createHttpLink({
  uri: graphqlUri
})

const authLink = setContext((_, { headers }) => {
  const accessToken = storage.get<Nullable<string>>('AUTH_TOKEN', '')
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
      // Needed to upload files
      'apollo-require-preflight': true
    }
  }
})

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})
// apolloClient.

export default apolloClient
