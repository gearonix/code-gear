import { StylesDecorator, ThemeDecorator } from '@code-gear/web/shared'
import { Preview } from '@storybook/react'
import { createPreviewDefaults } from '@code-gear/config'

const preview: Preview = createPreviewDefaults({
  decorators: [StylesDecorator, ThemeDecorator]
})

export default preview
