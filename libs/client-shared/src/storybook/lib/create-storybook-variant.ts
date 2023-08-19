import { StoryObj } from '@storybook/react'
import { Decorator } from '@storybook/react'
import { ComponentProps } from 'react'
import { FC } from 'react'

export const createStorybookVariant = <T extends FC>(
  defaultArgs: ComponentProps<T>
) => {
  return (
    additionalArgs: Partial<ComponentProps<T>> = {},
    decorators: Decorator[] = []
  ) => ({
    args: {
      ...defaultArgs,
      ...additionalArgs
    },
    decorators
  })
}
