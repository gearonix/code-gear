import { Module } from '@nestjs/common'

import { UsersRepository } from './users.repository'

import { PrismaModule } from '@code-gear/api/services'

@Module({
  controllers: [],
  providers: [UsersRepository],
  imports: [PrismaModule],
  exports: [UsersRepository]
})
export class UsersModule {}
