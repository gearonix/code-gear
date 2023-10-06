import { Decorator }    from '@storybook/react'

import { GlobalStyles } from '@/providers'

export const StylesDecorator: Decorator = (story) => (
  <>
    {story()}
    <GlobalStyles />
  </>
)
