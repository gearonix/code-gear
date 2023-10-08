import { Controller }              from '@nestjs/common'
import { MessagePattern }          from '@nestjs/microservices'
import { Payload }                 from '@nestjs/microservices'
import { ExecuteCodeApiDTO }       from '@code-gear/api/common'
import { ExecutorApiResponse }     from '@code-gear/api/common'
import { ExecutorLanguagesValues } from '@code-gear/api/common'
import { QueryBus }                from '@nestjs/cqrs'
import {ExecuteCodeQuery} from "@/app/queries/impl/execute-code.query";

@Controller()
export class CodeExecutorConsumer {
  constructor(private readonly queryBus: QueryBus) {}

  @MessagePattern('executeCode.test')
  async executeCode(
    @Payload() payload: ExecuteCodeApiDTO
  ): Promise<ExecutorApiResponse<ExecutorLanguagesValues>> {
    return this.queryBus.execute(new ExecuteCodeQuery(payload))
  }
}
