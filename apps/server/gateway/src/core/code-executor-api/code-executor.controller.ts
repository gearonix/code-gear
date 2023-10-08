import { ExecuteCodeApiDTO }     from '@code-gear/api/services'
import { ExecutorApiResponse }   from '@code-gear/api/services'
import { ExecutorApiService }    from '@code-gear/api/services'
import { FailedToFetchError }    from '@code-gear/api/services'
import { isExecutorApiResponse } from '@code-gear/api/services'
import { EndPoints }             from '@code-gear/config'
import { BadRequestException }   from '@nestjs/common'
import { Body }                  from '@nestjs/common'
import { Controller }            from '@nestjs/common'
import { Post }                  from '@nestjs/common'
import { ApiOperation }          from '@nestjs/swagger'
import { ApiResponse }           from '@nestjs/swagger'
import { ApiTags }               from '@nestjs/swagger'

@ApiTags('Code executor API')
@Controller(EndPoints.CODE_EXECUTOR_API)
export class CodeExecutorController {
  constructor(private executorService: ExecutorApiService) {}
  @ApiOperation({ summary: 'Execute your code' })
  @ApiResponse({ status: 200 })
  @Post()
  async executeCode(
    @Body() args: ExecuteCodeApiDTO
  ): Promise<ExecutorApiResponse> {
    const response = await this.executorService.fetchCodeToExecute(args)

    if (!isExecutorApiResponse(response)) {
      throw new BadRequestException(FailedToFetchError())
    }

    return response
  }
}
