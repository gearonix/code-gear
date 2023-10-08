import { compilerApiUrl }          from '@code-gear/config'
import { HttpService }             from '@nestjs/axios'
import { Injectable }              from '@nestjs/common'
import stringify                   from 'qs-stringify'

import { ExecuteCodeApiDTO }       from '@code-gear/api/common'
import { ExecutorApiResponse }     from '@code-gear/api/common'
import { ExecutorLanguagesValues } from '@code-gear/api/common'

import { transformLanguage }       from './lib/helpers/transform-language'

@Injectable()
export class CodeExecutorService {
  constructor(private readonly httpService: HttpService) {}
  async fetchToCodeExecute(args: ExecuteCodeApiDTO) {
    try {
      const response = await this.httpService
        .post<ExecutorApiResponse<ExecutorLanguagesValues>>(
          compilerApiUrl,
          stringify(transformLanguage(args)),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )
        .toPromise()

      return response?.data
    } catch (error: unknown) {}
    return null
  }
}
