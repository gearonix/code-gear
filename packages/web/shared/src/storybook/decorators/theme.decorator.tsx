import { ThemeProvider } from '@/providers/theme'
import { Decorator } from '@storybook/react'

export const ThemeDecorator: Decorator = (story) => (
  <ThemeProvider>{story()}</ThemeProvider>
)
