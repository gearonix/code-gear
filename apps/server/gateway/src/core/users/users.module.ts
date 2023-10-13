import { Module }          from '@nestjs/common'

import { UsersRepository } from './users.repository'
import { DatabaseModule }  from '@code-gear/api/common'

@Module({
  controllers: [],
  providers: [UsersRepository],
  imports: [DatabaseModule],
  exports: [UsersRepository]
})
export class UsersModule {}
