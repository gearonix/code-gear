import { ProjectLayer } from './types'

export const resolveRootPath = (layer: ProjectLayer) => {
  return layer === 'second' ? '../..' : '../../..'
}
