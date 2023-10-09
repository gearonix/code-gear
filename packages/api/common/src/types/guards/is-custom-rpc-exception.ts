import { isObject }     from '@grnx-utils/types'
import { RpcException } from '@nestjs/microservices'

export interface CustomRpcException extends RpcException {
  code: number
}

export const isCustomRpcException = (
  rpcException: unknown
): rpcException is CustomRpcException => {
  return (
    isObject(rpcException) &&
    'code' in rpcException &&
    'message' in rpcException
  )
}
