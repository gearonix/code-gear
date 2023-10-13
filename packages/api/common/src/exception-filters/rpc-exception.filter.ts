import { ArgumentsHost }                             from '@nestjs/common'
import { Catch }                                     from '@nestjs/common'
import { RpcExceptionFilter as BaseExceptionFilter } from '@nestjs/common'
import { Observable }                                from 'rxjs'
import { throwError }                                from 'rxjs'
import { RpcException }                              from '@nestjs/microservices'
import { isCustomRpcException }                      from '../types/guards'

@Catch()
export class RpcExceptionFilter implements BaseExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost): Observable<unknown> {
    const response = host.switchToHttp().getResponse()

    if (isCustomRpcException(exception)) {
      const errorToSend = {
        statusCode: exception.code,
        message: exception.message
      }

      response.status(exception.code).json(errorToSend)

      return throwError(() => errorToSend)
    }

    response.json(exception)
    return throwError(() => exception)
  }
}
