import { EndPoints }               from '@code-gear/config'
import { Body }                    from '@nestjs/common'
import { Controller }              from '@nestjs/common'
import { Inject }                  from '@nestjs/common'
import { Post }                    from '@nestjs/common'
import { ApiOperation }            from '@nestjs/swagger'
import { ApiResponse }             from '@nestjs/swagger'
import { ApiTags }                 from '@nestjs/swagger'
import { Microservice }            from '@code-gear/api/common'
import { ClientKafka }             from '@nestjs/microservices'
import { CodeExecutorTopic }       from '@code-gear/api/contracts'
import { ExecuteCodeApiDTO }       from '@code-gear/api/contracts'
import { ExecutorApiResponse }     from '@code-gear/api/contracts'
import { ExecutorLanguagesValues } from '@code-gear/api/contracts'

@ApiTags('Code executor API')
@Controller(EndPoints.CODE_EXECUTOR_API)
export class CodeExecutorController {
  constructor(
    @Inject(Microservice.CODE_EXECUTOR) private executorClient: ClientKafka
  ) {}

  async onModuleInit() {
    this.executorClient.subscribeToResponseOf(CodeExecutorTopic.EXECUTE_CODE)
    await this.executorClient.connect()
  }

  @ApiOperation({ summary: 'Execute your code' })
  @ApiResponse({ status: 200 })
  @Post()
  async executeCode(
    @Body() args: ExecuteCodeApiDTO
  ): Promise<ExecutorApiResponse<ExecutorLanguagesValues>> {
    return this.executorClient.send(CodeExecutorTopic.EXECUTE_CODE, args)
  }
}
