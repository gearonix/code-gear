import { HttpStatus } from '@nestjs/common'

export const ExecutorLanguages =  {
  java : 'java',
  python : 'py',
  cpp : 'cpp',
  c : 'c',
  go : 'go',
  cs : 'cs',
  javascript : 'js'
} as const

export type ExecutorLanguagesKeys = keyof typeof ExecutorLanguages
export type ExecutorLanguagesValues = typeof ExecutorLanguages[ExecutorLanguagesKeys]

export interface ExecutorApiResponse {
  timeStamp: number
  status: HttpStatus
  output: string
  error: string
  language: ExecutorLanguagesValues
  info: string
}
