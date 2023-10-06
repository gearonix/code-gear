import { compilerApiUrl }          from '@code-gear/config'
import { HttpService }             from '@nestjs/axios'
import { Injectable }              from '@nestjs/common'
import { Logger }                  from '@nestjs/common'
import axios                       from 'axios'
import stringify                   from 'qs-stringify'

import { ExecutorApiResponse }     from '$/nest-common'

import { ExecuteCodeApiDTO }       from './dto/execute-code-api.dto'
import { FailedToFetchError }      from './lib/errors'
import { transformLanguage }       from './lib/helpers/transform-language'
import { ExecutorLanguagesValues } from './lib/types'

@Injectable()
export class ExecutorApiService {
  constructor(private readonly httpService: HttpService) {}
  async fetchCodeToExecute(args: ExecuteCodeApiDTO) {
    Logger.log('Request to execute custom code...')

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

      return response.data
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        Logger.warn(FailedToFetchError(error.status))
      }
    }
    return null
  }
}
