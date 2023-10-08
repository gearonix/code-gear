import { CodeExecutorRequest }   from '@/index'
import { ExecutorLanguages }     from '@/index'
import { ExecutorLanguagesKeys } from '@/index'
import { ApiProperty }           from '@nestjs/swagger'
import { IsIn }                  from 'class-validator'
import { IsOptional }            from 'class-validator'
import { IsString }              from 'class-validator'

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
