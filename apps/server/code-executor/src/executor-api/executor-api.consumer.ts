import { Controller }         from '@nestjs/common'
import { ExecutorApiService } from '@/executor-api/executor-api.service'
import { MessagePattern }     from '@nestjs/microservices'
import { Payload }            from '@nestjs/microservices'

@Controller()
export class ExecutorApiConsumer {
  constructor(private executorApiService: ExecutorApiService) {}

  @MessagePattern('executeCode.test.e')
  executeCode(@Payload() payload: any) {
    console.log('works!')
    return {
      hello: 'world'
    }
    // return this.executorApiService.fetchToCodeExecute(payload)
  }
}
