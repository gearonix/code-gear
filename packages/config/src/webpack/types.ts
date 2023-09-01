import { ProjectLayer } from '../types'
import { Configuration } from 'webpack'

export interface BuildWebpackConfigPayload {
  rootDir: string
  layer: ProjectLayer
}

export interface WebpackConfigOptions extends BuildWebpackConfigPayload {
  config: Configuration
}
