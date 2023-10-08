import { Module }       from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { database }     from './conf'
import { kafka }        from './conf'
import { misc }         from './conf'
import { server }       from './conf'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [server, misc, database, kafka],
      isGlobal: true
    })
  ]
})
export class EnvModule {}
