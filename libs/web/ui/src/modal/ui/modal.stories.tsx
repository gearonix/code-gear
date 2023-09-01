import { TestStory } from '@code-gear/web/shared'
import { createStorybookVariant } from '@code-gear/web/shared'
import { AnimationDecorator } from '@code-gear/web/shared'
import { DarkThemePalette } from '@code-gear/web/shared'
import { expect } from '@storybook/jest'
import type { Meta } from '@storybook/react'
import { userEvent } from '@storybook/testing-library'
import { within } from '@storybook/testing-library'
import { Modal } from './modal'

const Story: Meta<typeof Modal> = {
  component: Modal,
  title: 'ui/modal',
  decorators: [AnimationDecorator]
}

const variant = createStorybookVariant<typeof Modal>({
  isOpen: true,
  onClose: () => {},
  width: 50,
  height: 70
})

export const Default = variant()

Default.play = async ({ canvasElement }: TestStory<typeof Modal>) => {
  // .parentNode is important! @storybook/test-runner cannot find
  // element due to react-portal creation.

  const canvas = within(canvasElement.parentNode)
  const modal = await canvas.findByTestId('modal')

  const background = await canvas.findByTestId('background')
  expect(modal).toBeDefined()

  // write background-color instead of background because of storybook
  // errors.

  expect(modal).toHaveStyle(`background-color: ${DarkThemePalette.grey}`)
  expect(modal).toHaveStyle('min-height: 300px')
  expect(modal).toHaveStyle('border-radius: 6px')

  await userEvent.click(background)

  expect(Number(background.style.opacity)).not.toBeNaN()
  expect(Number(background.style.opacity)).toBeLessThan(1)
}

export default Story
