import { IQueryHandler }          from '@nestjs/cqrs'
import { QueryHandler }           from '@nestjs/cqrs'
import { ExecuteCodeQuery }       from '../impl/execute-code.query'
import { CodeExecutorService }    from '../../code-executor.service'
import { isExecutorApiResponse }  from '../../lib/type-guards'
import { FailedToFetchException } from '../../exceptions'

@QueryHandler(ExecuteCoditeQuery)
export class ExecuteCodeHandler implements IQueryHandler<ExecuteCodeQuery> {
  constructor(private executorApiService: CodeExecutorService) {}

  async execute({ payload }: ExecuteCodeQuery) {
    const response = await this.executorApiService.fetchToCodeExecute(payload)

    if (!isExecutorApiResponse(response)) {
      throw new FailedToFetchException()
    }

    return response
  }
}
