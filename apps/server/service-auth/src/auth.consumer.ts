import { Controller } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'

@Controller()
export class TemplateConsumer {
  constructor(private readonly query: QueryBus) {}
}
