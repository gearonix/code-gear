import { IQueryHandler } from '@nestjs/cqrs'
import { QueryHandler } from '@nestjs/cqrs'
import { ExecuteCodeQuery } from '../impl/execute-code.query'
import { isExecutorApiResponse } from '../../lib/type-guards'
import { FailedToFetchException } from '../../exceptions'
import { ExecutorApiResponse } from '@code-gear/api/contracts'
import { ExecutorLanguagesValues } from '@code-gear/api/contracts'
import { compilerApiUrl } from '@code-gear/config'
import stringify from 'qs-stringify'
import { transformLanguage } from '@/lib/helpers/transform-language'
import { HttpService } from '@nestjs/axios'

@QueryHandler(ExecuteCodeQuery)
export class ExecuteCodeHandler implements IQueryHandler<ExecuteCodeQuery> {
  constructor(private httpService: HttpService) {}

  async execute({ payload }: ExecuteCodeQuery) {
    try {
      const response = await this.httpService
        .post<ExecutorApiResponse<ExecutorLanguagesValues>>(
          compilerApiUrl,
          stringify(transformLanguage(payload)),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        )
        .toPromise()

      if (!isExecutorApiResponse(response)) {
        throw new FailedToFetchException()
      }

      return response?.data
    } catch (error: unknown) {
      throw new FailedToFetchException()
    }
  }
}
