import { Inject }         from '@nestjs/common'
import { Injectable }     from '@nestjs/common'
import { ListenerConfig } from './listener.interfaces'

@Injectable()
export class ListenerService {
  private readonly isMicroservice: boolean
  private readonly port: number

  constructor(
    @Inject('ListenerServiceConfig')
    private readonly config: ListenerConfig
  ) {
    this.isMicroservice = config.isMicroservice
    this.port = config.port
  }

  getListenerCallback() {
    return () => {
      console.log('Server is running on port', this.port)
    }
  }

  get PORT() {
    return this.port
  }
}
