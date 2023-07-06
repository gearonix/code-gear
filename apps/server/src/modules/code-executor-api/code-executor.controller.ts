import { Routes } from '@/config/routes'
import { BadRequestException, Body, Controller, Post } from '@nestjs/common'

import {
  ExecutorApiResponse,
  ExecutorApiService,
  ExecudeCodeApiDTO,
  FailedToFetchError,
  isExecutorApiResponse
} from '$/services'

@Controller(Routes.CODE_EXECUTOR_API)
export class CodeExecutorController {
  constructor(private compilerService: ExecutorApiService) {
  }
  @Post()
  async compileCode(@Body() args: ExecudeCodeApiDTO): Promise<ExecutorApiResponse> {
    const response = await this.compilerService.fetchCodeToExecute(args)

    if (!isExecutorApiResponse(response)) {
      throw new BadRequestException(FailedToFetchError())
    }

    return response
  }
}
