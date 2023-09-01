import { TestStory, createStorybookVariant } from '@code-gear/web/shared'
import { expect } from '@storybook/jest'
import type { Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { ColorButtonProps } from './color-button'
import { default as ColorButton } from './color-button'

const Story: Meta<typeof ColorButton> = {
  component: ColorButton,
  title: 'ui/color-button',
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
}

const variant = createStorybookVariant<ColorButtonProps>({
  children: 'Click me!',
  override: '#37decb'
})

export const Override = variant()

Override.play = async ({ canvasElement }: TestStory<typeof ColorButton>) => {
  const canvas = within(canvasElement)
  const target = canvas.getByTestId('color-button')

  expect(target).toBeDefined()
  expect(target.textContent).toBe('Click me!')
  expect(target.style.backgroundColor).toBeDefined()
}

export const Primary = variant({
  type: 'primary'
})

export const PrimaryGreen = variant({
  type: 'primary',
  override: '#14de39'
})

export const Disabled = variant({
  override: '#14de39',
  type: 'primary',
  disabled: true
})

export default Story
