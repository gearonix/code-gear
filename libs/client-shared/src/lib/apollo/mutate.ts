import { apolloClient } from '@/config'
import { AnyObject, ApolloMutation } from '@/types'

type WithTypeName<P extends AnyObject> = P & { __typename: string }

// type Operation = Extract<keyof typeof apolloClient, 'query' | 'mutate'>

export const mutate = async <Payload extends AnyObject, Args extends AnyObject>(
  mutation: ApolloMutation,
  args: Args
): Promise<WithTypeName<Payload>> => {
  const response = await apolloClient.mutate<Payload, { payload: Args }>({
    mutation: mutation.gql,
    variables: {
      payload: args
    }
  })

  return response.data?.[mutation.method] as WithTypeName<Payload>
}
