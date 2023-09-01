import { PluginOption } from 'vite'
import { ProjectLayer } from '../types'

export interface CreateViteConfigOptions {
  layer: ProjectLayer
  projectName: string
  projectType: 'library' | 'application'
  rootDir: string
  plugins: PluginOption[]
  external: string[]
}
