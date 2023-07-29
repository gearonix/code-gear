import { ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'

import { graphqlArg } from '$/config'

export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super()
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    const gqlReq = ctx.getContext().req
    const user = ctx.getArgs()[graphqlArg]
    gqlReq.body.username = user.username
    gqlReq.body.password = user.password

    return gqlReq
  }
}
