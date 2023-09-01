---
to: src/<%= module_name %>/<%= module_name %>.stories.tsx
---

import { TestStory } from '@code-gear/web/shared'
import { createStorybookVariant } from '@code-gear/web/shared'
import { expect } from '@storybook/jest'
import type { Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { <%= h.changeCase.pascal(module_name) %>Props } from './<%= module_name %>'
import { <%= h.changeCase.pascal(module_name) %>, <%= h.changeCase.pascal(module_name) %>Props } from './<%= module_name %>'

const Story: Meta<typeof <%= h.changeCase.pascal(module_name) %>> = {
  component: <%= h.changeCase.pascal(module_name) %>,
  title: 'ui/<%= module_name %>'
}

const variant = createStorybookVariant<<%= h.changeCase.pascal(module_name) %>Props>({

})

export const Default = variant()

Default.play = async ({ canvasElement }: TestStory<typeof <%= h.changeCase.pascal(module_name) %>>) => {
  const canvas = within(canvasElement)
  const target = canvas.getByTestId('<%= module_name %>')

  expect(target).toBeDefined()
}


export default Story
