import { GlobalStyles } from '@/providers'
import { Decorator } from '@storybook/react'

export const StylesDecorator: Decorator = (story) => (
  <>
    {story()}
    <GlobalStyles />
  </>
)
