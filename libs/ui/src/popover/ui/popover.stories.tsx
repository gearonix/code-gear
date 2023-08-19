import { createStorybookVariant } from '$/client-shared'
import { AnimationDecorator } from '$/client-shared'
import { Popover, PopoverProps } from './popover'
import type { Meta } from '@storybook/react'

const Story: Meta<typeof Popover> = {
  component: Popover,
  title: 'ui/popover',
  decorators: [AnimationDecorator]
}

const variant = createStorybookVariant<PopoverProps>({
  isOpen: true,
  onClose: () => {},
  height: 200
})

export const Default = variant()

export default Story
