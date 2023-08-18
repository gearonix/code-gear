import type { Meta } from '@storybook/react'
import { ColorButtonProps } from './color-button'
import { default as ColorButton } from './color-button'

const Story: Meta<typeof ColorButton> = {
  component: ColorButton,
  title: 'ui/color-button'
}

const defaultArgs: ColorButtonProps = {
  children: 'Click me!',
  override: '#37decb'
}

export const Override = {
  args: {
    ...defaultArgs
  } satisfies ColorButtonProps
}

export const Primary = {
  args: {
    ...defaultArgs,
    type: 'primary'
  } satisfies ColorButtonProps
}

export const PrimaryGreen = {
  args: {
    ...defaultArgs,
    type: 'primary'
  } satisfies ColorButtonProps
}

export const Disabled = {
  args: {
    ...defaultArgs,
    override: '#14de39',
    type: 'primary',
    disabled: true
  } satisfies ColorButtonProps
}

export default Story
