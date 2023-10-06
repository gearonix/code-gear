import { StoryObj } from '@storybook/react';
import { FC } from 'react';
import { CustomArguments } from '@/types';
export type TestStory<T extends FC> = CustomArguments<StoryObj<T>['play']>[0];
