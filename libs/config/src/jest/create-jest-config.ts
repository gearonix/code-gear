import { ProjectLayer } from './../types'
import { resolveRootPath } from './../lib'

interface CreateJestConfigPayload {
  layer: ProjectLayer
  displayName: string
}

export const createJestConfig = (payload: CreateJestConfigPayload) => {
  const rootPath = resolveRootPath(payload.layer)

  return {
    displayName: payload.displayName,
    preset: `${rootPath}/jest.preset.js`,
    testEnvironment: 'node',
    transform: {
      '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
    },
    moduleFileExtensions: ['ts', 'tsx'],
    coverageDirectory: `${rootPath}/coverage/apps/server`
  }
}
