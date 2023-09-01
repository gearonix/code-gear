export interface ProjectPath {
  target: string | string[]
  replacement: string
}

export const projectPaths: ProjectPath[] = [
  {
    target: ['$/client-shared', '$/assets', '$/styles', '$/icons'],
    replacement: '@code-gear/web/shared'
  },
  {
    target: '$/editor',
    replacement: '@code-gear/web/editor'
  },
  {
    target: '$/ui',
    replacement: '@code-gear/web/ui'
  },
  {
    target: ['$/common-types', '$/nest-common'],
    replacement: '@code-gear/api/common'
  },
  {
    target: '$/services',
    replacement: '@code-gear/api/services'
  },
  {
    target: '$/config',
    replacement: '@code-gear/config'
  }
]
