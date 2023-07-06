import { HttpStatus } from '@nestjs/common'

export enum ExecutorApiLanguages {
  java = 'java',
  py = 'py',
  cpp = 'cpp',
  c = 'c',
  go = 'go',
  cs = 'cs',
  js = 'js'
}

export interface ExecutorApiResponse {
  timeStamp: number
  status: HttpStatus
  output: string
  error: string
  language: ExecutorApiLanguages,
  info: string
}
