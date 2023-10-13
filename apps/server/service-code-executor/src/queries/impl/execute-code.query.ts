import { ExecuteCodeApiDTO } from '@code-gear/api/common'

export class ExecuteCodeQuery {
  constructor(public readonly payload: ExecuteCodeApiDTO) {}
}
