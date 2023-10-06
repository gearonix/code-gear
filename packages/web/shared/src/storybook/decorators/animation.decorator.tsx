import { Decorator }         from '@storybook/react'

import { AnimationProvider } from '@/lib/components'

export const AnimationDecorator: Decorator = (story) => (
  <AnimationProvider>{story()}</AnimationProvider>
)
