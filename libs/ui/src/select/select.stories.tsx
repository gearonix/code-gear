import { TestStory } from '$/client-shared'
import { createStorybookVariant } from '$/client-shared'
import { SelectProps } from '@/select/select'
import { Select } from '@/select/select'
import { expect } from '@storybook/jest'
import type { Meta } from '@storybook/react'
import { userEvent } from '@storybook/testing-library'
import { within } from '@storybook/testing-library'

const Story: Meta<typeof Select> = {
  component: Select,
  title: 'ui/select'
}

const selectDefaultOptions = [
  {
    value: 'val-1',
    label: 'Label 1'
  },
  {
    value: 'val-2',
    label: 'Label 2'
  }
]

const variant = createStorybookVariant<SelectProps<unknown>>({
  onChange: () => null,
  value: 'val-1',
  options: selectDefaultOptions,
  defaultValue: 'val-1'
})

export const Default = variant()

Default.play = async ({ canvasElement }: TestStory<typeof Select>) => {
  const canvas = within(canvasElement)
  const select = await canvas.findByTestId('select')

  expect(select).toBeDefined()

  await userEvent.click(select)
}

export default Story
