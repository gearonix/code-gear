import { RpcException } from '@nestjs/microservices'

export class FailedToFetchException extends RpcException {
  constructor(status = 400) {
    super({
      code: status,
      message: `Failed to get response from api.codex.jaagrav.in (${status}).`
    })
  }
}
