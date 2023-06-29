export const isObject = (value: unknown): value is object => {
  return typeof value === 'object' && value !== null
}

export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}
