import { HttpStatus } from '@nestjs/common'

export interface CodeExecutorRequest {
  code: string
  language: string
  input?: string
}

export interface ExecutorApiResponse<T> {
  timeStamp: number
  status: HttpStatus
  output: string
  error: string
  language: T
  info: string
}
