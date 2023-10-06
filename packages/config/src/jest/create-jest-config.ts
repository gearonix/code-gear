import { resolveRootPath } from '../lib'
import { ProjectLayer }    from '../types'

interface CreateJestConfigPayload {
  layer: ProjectLayer
  displayName: string
}

export const createJestConfig = (options: CreateJestConfigPayload) => {
  const rootPath = resolveRootPath(options.layer)

  return {
    displayName: options.displayName,
    preset: `${rootPath}/jest.preset.js`,
    testEnvironment: 'node',
    transform: {
      '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
    },
    moduleFileExtensions: ['ts', 'tsx'],
    coverageDirectory: `${rootPath}/coverage/apps/${options.displayName}`
  }
}
