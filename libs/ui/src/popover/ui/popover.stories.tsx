import { DarkThemePalette } from '$/client-shared'
import { TestStory } from '$/client-shared'
import { createStorybookVariant } from '$/client-shared'
import { AnimationDecorator } from '$/client-shared'
import { expect } from '@storybook/jest'
import type { Meta } from '@storybook/react'
import { userEvent } from '@storybook/testing-library'
import { within } from '@storybook/testing-library'
import { Popover, PopoverProps } from './popover'

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

Default.play = async ({ canvasElement }: TestStory<typeof Popover>) => {
  const canvas = within(canvasElement)
  const popover = await canvas.findByTestId('popover')

  expect(popover).toBeDefined()

  expect(popover).toHaveStyle(`background-color: ${DarkThemePalette.darkBlue}`)
  expect(popover).toHaveStyle('touch-action: none')
}

export default Story
