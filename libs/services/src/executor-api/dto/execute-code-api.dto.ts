import { IsIn, IsOptional, IsString } from 'class-validator'

import { ExecutorApiLanguages } from '../lib/types'

export class ExecudeCodeApiDTO {
  @IsString()
  readonly code: string
  @IsIn(Object.values(ExecutorApiLanguages))
  readonly language: ExecutorApiLanguages
  @IsString()
  @IsOptional()
  readonly input?: string
}
