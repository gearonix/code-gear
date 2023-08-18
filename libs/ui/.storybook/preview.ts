import {
  createViewPorts,
  ThemeDecorator,
  StylesDecorator
} from '$/client-shared'
import { Preview, Decorator } from '@storybook/react'

const decorators: Decorator[] = [StylesDecorator, ThemeDecorator]

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: createViewPorts()
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      values: []
    }
  },
  decorators
}

export default preview
