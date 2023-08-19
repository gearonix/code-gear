import type { Meta } from '@storybook/react'
import { createStorybookVariant } from '$/client-shared'
import { ColorButtonProps } from './color-button'
import { default as ColorButton } from './color-button'

const Story: Meta<typeof ColorButton> = {
  component: ColorButton,
  title: 'ui/color-button'
}

const variant = createStorybookVariant<ColorButtonProps>({
  children: 'Click me!',
  override: '#37decb'
})

export const Override = variant()

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
