import { Decorator }     from '@storybook/react'

import { ThemeProvider } from '@/providers/theme'

export const ThemeDecorator: Decorator = (story) => (
  <ThemeProvider>{story()}</ThemeProvider>
)

