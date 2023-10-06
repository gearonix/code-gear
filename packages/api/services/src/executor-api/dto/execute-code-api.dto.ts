import { CodeExecutorRequest } from '@nest-common/src/types/common'
import { ApiProperty } from '@nestjs/swagger'
import { IsIn, IsOptional, IsString } from 'class-validator'
import { ExecutorLanguages, ExecutorLanguagesKeys } from '../lib/types'

export class ExecuteCodeApiDTO implements CodeExecutorRequest {
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
