import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { EndPoints } from '$/config'
import {
  ExecuteCodeApiDTO,
  ExecutorApiResponse,
  ExecutorApiService,
  FailedToFetchError,
  isExecutorApiResponse
} from '$/services'

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
