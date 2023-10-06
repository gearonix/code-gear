import { Configuration } from 'webpack'

import { ProjectLayer }  from '../types'

export interface BuildWebpackConfigPayload {
  rootDir: string
  layer: ProjectLayer
}

export interface WebpackConfigOptions extends BuildWebpackConfigPayload {
  config: Configuration
}
