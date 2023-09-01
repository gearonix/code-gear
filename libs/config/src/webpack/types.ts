import { Configuration } from 'webpack'

export interface BuildWebpackConfigPayload {
  rootDir: string
  layer: 'second' | 'third'
}

export interface WebpackConfigOptions extends BuildWebpackConfigPayload {
  config: Configuration
}
