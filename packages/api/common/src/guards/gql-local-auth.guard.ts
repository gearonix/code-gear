import { ExecutionContext }    from '@nestjs/common'
import { Injectable }          from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard }           from '@nestjs/passport'

@Injectable()
export class GqlLocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctxRequest = GqlExecutionContext.create(context).getContext().req
    return Boolean(ctxRequest)
  }
}
