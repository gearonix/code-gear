import { createStorybookVariant } from '$/client-shared'
import { SelectProps } from '@/select/select'
import { Select } from '@/select/select'
import type { Meta } from '@storybook/react'

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

export default Story
