import { CustomArguments } from '@/types'
import { StoryObj } from '@storybook/react'
import { FC } from 'react'

export type TestStory<T extends FC> = CustomArguments<StoryObj<T>['play']>[0]
