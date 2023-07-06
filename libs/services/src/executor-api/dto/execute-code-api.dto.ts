import { IsIn, IsOptional, IsString } from 'class-validator'

import { ExecutorLanguages, ExecutorLanguagesKeys } from '../lib/types'

export class ExecuteCodeApiDTO {
  @IsString()
  readonly code: string
  @IsIn(Object.keys(ExecutorLanguages))
  readonly language: ExecutorLanguagesKeys
  @IsString()
  @IsOptional()
  readonly input?: string
}
