import { ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'

import { graphqlArg } from '$/config'

export class GqlAuthGuard extends AuthGuard('local') {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super()
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    const gqlReq = ctx.getContext().req
    gqlReq.body = ctx.getArgs()[graphqlArg]

    return gqlReq
  }
}
