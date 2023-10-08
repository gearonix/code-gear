import { CodeExecutorRequest }   from './../executor-api.interfaces'
import { ExecutorLanguages }     from './../executor-api.addons'
import { ExecutorLanguagesKeys } from './../executor-api.addons'
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
