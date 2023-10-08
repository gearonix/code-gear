import { EndPoints }           from '@code-gear/config'
import { BadRequestException } from '@nestjs/common'
import { Body }                from '@nestjs/common'
import { Controller }          from '@nestjs/common'
import { Inject }              from '@nestjs/common'
import { Post }                from '@nestjs/common'
import { ApiOperation }        from '@nestjs/swagger'
import { ApiResponse }         from '@nestjs/swagger'
import { ApiTags }             from '@nestjs/swagger'
import { Microservice }        from '@code-gear/api/common'
import { ClientKafka }         from '@nestjs/microservices'

@ApiTags('Code executor API')
@Controller(EndPoints.CODE_EXECUTOR_API)
export class CodeExecutorController {
  constructor(
    @Inject(Microservice.CODE_EXECUTOR) private executorClient: ClientKafka
  ) {}

  async onModuleInit() {
    this.executorClient.subscribeToResponseOf('executeCode.test')
    await this.executorClient.connect()
  }

  @ApiOperation({ summary: 'Execute your code' })
  @ApiResponse({ status: 200 })
  @Post()
  async executeCode(@Body() args: any): Promise<any> {
    const response = await this.executorClient.send('executeCode.test', {
      hello: 'sdfsdf'
    })

    console.log(response)


    return response
  }
}
