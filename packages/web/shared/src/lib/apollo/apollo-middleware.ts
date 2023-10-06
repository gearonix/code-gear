import { apolloClient }    from '@/config'
import { AnyObject }       from '@/types'
import { ApolloOperation } from '@/types'
import { Nullable }        from '@/types'

type WithTypeName<P extends AnyObject> = P & { __typename: string }

interface ToPayload<A extends AnyObject> {
  payload: A
}

type OperationType = 'query' | 'mutate'
export class ApolloMiddleware {
  public async request<Payload extends AnyObject, Args extends AnyObject>(
    mutation: ApolloOperation,
    args?: Args,
    type: OperationType = 'query'
  ): Promise<[Nullable<WithTypeName<Payload>>, Nullable<string>]> {
    const options = {
      variables: args
        ? {
            payload: args
          }
        : undefined
    }
    let response

    try {
      if (type === 'mutate') {
        response = await apolloClient.mutate<Payload, ToPayload<Args>>({
          mutation: mutation.gql,
          ...options
        })
      } else {
        response = await apolloClient.query<Payload, ToPayload<Args>>({
          query: mutation.gql,
          ...options
        })
      }

      return [response?.data?.[mutation.method] as WithTypeName<Payload>, null]
    } catch (error: unknown) {
      if (_isDev_) {
        console.log(error)
      }

      return [null, error as string]
    }
  }
}
