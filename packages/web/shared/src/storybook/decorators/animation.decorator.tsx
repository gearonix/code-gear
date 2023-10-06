import { AnimationProvider } from '@/lib/components'
import { Decorator } from '@storybook/react'

export const AnimationDecorator: Decorator = (story) => (
  <AnimationProvider>{story()}</AnimationProvider>
)
