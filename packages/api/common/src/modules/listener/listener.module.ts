import { DynamicModule }         from '@nestjs/common'
import { Module }                from '@nestjs/common'
import { Provider }              from '@nestjs/common'
import { ConfigService }         from '@nestjs/config'
import { ListenerService }       from './listener.service'
import { NESTJS_FREE_PORT }      from './listener.consts'
import { EnvModule }             from '../env'
import { ListenerModuleOptions } from './listener.interfaces'

@Module({
  imports: [EnvModule],
  providers: [ListenerService],
  exports: [ListenerService]
})
export class ListenerModule {
  static forRoot({ isMicroservice }: ListenerModuleOptions): DynamicModule {
    const providers: Provider[] = [
      ListenerService,
      {
        provide: 'ListenerServiceConfig',
        useFactory: (configService: ConfigService) => {
          const applicationPort = configService.getOrThrow('server.port')

          const port = isMicroservice ? NESTJS_FREE_PORT : applicationPort

          return {
            isMicroservice,
            port
          }
        },
        inject: [ConfigService]
      }
    ]

    return {
      module: ListenerModule,
      providers,
      exports: providers
    }
  }
}
