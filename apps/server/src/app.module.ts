import { join }               from 'path'
import { ApolloDriver }       from '@nestjs/apollo'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { Module }             from '@nestjs/common'
import { ConfigModule }       from '@nestjs/config'
import { GraphQLModule }      from '@nestjs/graphql'

import { AuthModule }         from '@/auth'

import { CodeExecutorModule } from './core/code-executor-api'

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
