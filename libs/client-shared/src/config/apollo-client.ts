import { ApolloClient, InMemoryCache } from '@apollo/client'

import { EndPoints, serverUrl } from '$/config'

const graphqlUri = `${serverUrl}/${EndPoints._GRAPHQL}`

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: graphqlUri
})

export default apolloClient
