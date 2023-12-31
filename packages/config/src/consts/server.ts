export const serverPrefix = process.env.SERVER_PREFIX ?? ''

export const serverPort = process.env.SERVER_PORT ?? 6868

export const compilerApiUrl =
  process.env.CODE_COMPILER_API_URL ?? 'https://api.codex.jaagrav.in'

export const serverUrl = process.env.SERVER_URL ?? 'http://localhost:6868'

export const EndPoints = {
  CODE_EXECUTOR_API: 'execute',
  _GRAPHQL: 'graphql'
} as const

export const serverAppName = 'CodeGear API'

export const serverDocsPrefix = 'docs'

export const graphqlArg = '_graphql'

export const jwtSecret =
  process.env.JWT_SECRET || 'I_WILL_REMOVE_THIS_AND_REWRITE_TO_CONFIG_SERVICE'
