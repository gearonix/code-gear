import { IsIn, IsOptional, IsString } from 'class-validator'

import { ApiProperty } from '@nestjs/swagger'

import { ExecutorLanguages, ExecutorLanguagesKeys } from '../lib/types'

export class ExecuteCodeApiDTO {
  @IsString()
  @ApiProperty({ example: 'print("hello world")', description: 'Your code' })
  readonly code: string

  @IsIn(Object.keys(ExecutorLanguages))
  @ApiProperty({ example: 'python', description: 'Code language' })
  readonly language: ExecutorLanguagesKeys

  @IsString()
  @IsOptional()
  readonly input?: string
}
