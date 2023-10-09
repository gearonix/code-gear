import { Controller }              from '@nestjs/common'
import { Get }                     from '@nestjs/common'
import { MessagePattern }          from '@nestjs/microservices'
import { Payload }                 from '@nestjs/microservices'
import { ExecuteCodeApiDTO }       from '@code-gear/api/contracts'
import { ExecutorApiResponse }     from '@code-gear/api/contracts'
import { ExecutorLanguagesValues } from '@code-gear/api/contracts'
import { CodeExecutorTopic }       from '@code-gear/api/contracts'
import { QueryBus }                from '@nestjs/cqrs'
import { ExecuteCodeQuery }        from './queries/impl'

@Controller()
export class CodeExecutorConsumer {
  constructor(private readonly query: QueryBus) {}

  @MessagePattern(CodeExecutorTopic.EXECUTE_CODE)
  async executeCode(
    @Payload() payload: ExecuteCodeApiDTO
  ): Promise<ExecutorApiResponse<ExecutorLanguagesValues>> {
    const command = new ExecuteCodeQuery(payload)
    return this.query.execute(command)
  }
}
