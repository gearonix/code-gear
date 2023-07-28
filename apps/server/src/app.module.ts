import { join } from 'path'

import { AuthModule } from '@/modules/authorization'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'

import { CodeExecutorModule } from './modules/code-executor-api'

import { clientUrl } from '$/config'

@Module({
  imports: [
    CodeExecutorModule,
    AuthModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/server/src/_schema.gql')
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
