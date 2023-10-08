import { Controller }              from '@nestjs/common'
import { ExecutorApiService }      from '@/executor-api/executor-api.service'
import { MessagePattern }          from '@nestjs/microservices'
import { Payload }                 from '@nestjs/microservices'
import { isExecutorApiResponse }   from '@/executor-api/lib/type-guards'
import { ExecuteCodeApiDTO }       from '@code-gear/api/common'
import { ExecutorApiResponse }     from '@code-gear/api/common'
import { ExecutorLanguagesValues } from '@code-gear/api/common'
import { FailedToFetchException }  from '@/executor-api/exceptions'

@Controller()
export class ExecutorApiConsumer {
  constructor(private executorApiService: ExecutorApiService) {}

  @MessagePattern('executeCode.test')
  async executeCode(
    @Payload() payload: ExecuteCodeApiDTO
  ): Promise<ExecutorApiResponse<ExecutorLanguagesValues>> {
    const response = await this.executorApiService.fetchToCodeExecute(payload)

    if (!isExecutorApiResponse(response)) {
      throw new FailedToFetchException()
    }

    return response
  }
}
