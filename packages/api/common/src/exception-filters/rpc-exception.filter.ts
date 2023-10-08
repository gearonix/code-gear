import { Catch }                                     from '@nestjs/common'
import { RpcExceptionFilter as BaseExceptionFilter } from '@nestjs/common'
import { ArgumentsHost }                             from '@nestjs/common'
import { Observable }                                from 'rxjs'
import { throwError }                                from 'rxjs'
import { RpcException }                              from '@nestjs/microservices'

@Catch(RpcException)
export class RpcExceptionFilter implements BaseExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    return throwError(() => exception.getError())
  }
}
