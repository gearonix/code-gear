export interface DatabaseConfig {
  url: string
}

export interface KafkaConfig {
  brokers: string[]
  microservices: Record<string, string>
  heartbeatInterval: number
  sessionTimeout: number
}

export interface MiscConfig {
  clientUrl: string
  jwtSecret: string
  codeExecutorUrl: string
}

export interface ServerConfig {
  prefix: string
  port: number
  url: string
}
