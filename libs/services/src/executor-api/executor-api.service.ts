import axios from 'axios'
import stringify from 'qs-stringify'

import { HttpService } from '@nestjs/axios'
import { Injectable, Logger } from '@nestjs/common'

import { ExecuteCodeApiDTO } from './dto/execute-code-api.dto'
import { FailedToFetchError } from './lib/errors'
import { transformLanguage } from './lib/helpers/transform-language'
import { ExecutorApiResponse } from './lib/types'

import { compilerApiUrl } from '$/config'

@Injectable()
export class ExecutorApiService {
  constructor(private readonly httpService: HttpService) {}
  async fetchCodeToExecute(args: ExecuteCodeApiDTO) {
    Logger.log('Request to execute custom code...')

    try {
      const response = await this.httpService.post<ExecutorApiResponse>(compilerApiUrl,
        stringify(transformLanguage(args)),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).toPromise()

      return response?.data
    }
    catch (e: unknown) {
      if (axios.isAxiosError(e)){
        Logger.warn(FailedToFetchError(e.status))
      }
    }
    return null
  }
}
