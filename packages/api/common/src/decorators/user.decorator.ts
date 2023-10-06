import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { User } from '@/types/_prisma'

export const WithUser = createParamDecorator<User>(
  (data: unknown, context: ExecutionContext): User => {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req.user
  }
)
