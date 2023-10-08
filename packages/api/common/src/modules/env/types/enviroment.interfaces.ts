import { NodeEnv } from './node-env.enum'

export interface DatabaseConfig {
  url: string
}

export interface KafkaConfig {
  brokers: string[]
}

export interface MiscConfig {
  clientUrl: string
  jwtSecret: string
  codeExecutorUrl: string
  nodeEnv: NodeEnv
}

export interface ServerConfig {
  prefix: string
  port: number
  url: string
}
