import { Decorator }       from '@storybook/react'
import { Preview }         from '@storybook/react'

import { createViewPorts } from './plugins/create-viewports'

interface PreviewDefaultsPayload {
  decorators: Decorator[]
}

type CreatePreviewDefaults = (args: PreviewDefaultsPayload) => Preview

export const createPreviewDefaults: CreatePreviewDefaults = ({
  decorators
}) => ({
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
    },
    storySort: (a, b) =>
      a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })
  },
  decorators
})
