import { StylesDecorator, ThemeDecorator } from '$/client-shared'
import { Preview } from '@storybook/react'
import { createPreviewDefaults } from '$/config'

const preview: Preview = createPreviewDefaults({
  decorators: [StylesDecorator, ThemeDecorator]
})

export default preview
