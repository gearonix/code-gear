import { RpcException } from '@nestjs/microservices'
import { HttpStatus }   from '@nestjs/common'

export class FailedToFetchException extends RpcException {
  constructor(status = 400) {
    super(`Failed to get response from api.codex.jaagrav.in (${status}).`)
  }
}
