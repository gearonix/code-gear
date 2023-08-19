import { Decorator } from '@storybook/react'

export const createStorybookVariant = <T>(defaultArgs: T) => {
  return (additionalArgs: Partial<T> = {}, decorators: Decorator[] = []) => ({
    args: {
      ...defaultArgs,
      ...additionalArgs
    },
    decorators
  })
}
