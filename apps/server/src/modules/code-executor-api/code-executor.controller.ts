import { BadRequestException, Body, Controller, Post } from '@nestjs/common'

import { EndPoints } from '$/config'
import {
  ExecuteCodeApiDTO,
  ExecutorApiResponse,
  ExecutorApiService,
  FailedToFetchError,
  isExecutorApiResponse
} from '$/services'

@Controller(EndPoints.CODE_EXECUTOR_API)
export class CodeExecutorController {
  constructor(private executorService: ExecutorApiService) {
  }
  @Post()
  async executeCode(@Body() args: ExecuteCodeApiDTO): Promise<ExecutorApiResponse> {
    const response = await this.executorService.fetchCodeToExecute(args)

    if (!isExecutorApiResponse(response)) {
      throw new BadRequestException(FailedToFetchError())
    }

    return response
  }
}