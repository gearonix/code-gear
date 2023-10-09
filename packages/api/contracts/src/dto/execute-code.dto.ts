import { ApiProperty }           from '@nestjs/swagger'
import { IsIn }                  from 'class-validator'
import { IsOptional }            from 'class-validator'
import { IsString }              from 'class-validator'
import { CodeExecutorRequest }   from './../interfaces'
import { ExecutorLanguages }     from './../interfaces'
import { ExecutorLanguagesKeys } from './../interfaces'

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
