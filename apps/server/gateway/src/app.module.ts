import { join }               from 'path'
import { ApolloDriver }       from '@nestjs/apollo'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { Module }             from '@nestjs/common'
import { ConfigModule }       from '@nestjs/config'
import { GraphQLModule }      from '@nestjs/graphql'

import { AuthModule }         from '@/auth'

import { CodeExecutorModule } from './core/code-executor-api'
import { EnvModule }          from '@code-gear/api/common'
import { ListenerModule }     from '@code-gear/api/common'

@Module({
  imports: [
    CodeExecutorModule,
    EnvModule,
    AuthModule,
    ListenerModule.forRoot({
      isMicroservice: false
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/server/gateway/src/_schema.gql')
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
