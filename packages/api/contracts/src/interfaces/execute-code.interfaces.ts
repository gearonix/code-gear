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

export const ExecutorLanguages = {
  java: 'java',
  python: 'py',
  cpp: 'cpp',
  c: 'c',
  go: 'go',
  cs: 'cs',
  javascript: 'js'
} as const

export type ExecutorLanguagesKeys = keyof typeof ExecutorLanguages
export type ExecutorLanguagesValues =
  (typeof ExecutorLanguages)[ExecutorLanguagesKeys]
