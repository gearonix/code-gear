import type { StorybookConfig } from '@storybook/react-vite'

interface StorybookConfigPayload {
  viteConfigPath: string
  viteFinal: (config: StorybookConfig) => StorybookConfig
}

type CreateStorybookConfig = (args: StorybookConfigPayload) => StorybookConfig

export const createStorybookConfig: CreateStorybookConfig = ({
  viteConfigPath,
  viteFinal
}) => ({
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-jest',
    '@storybook/addon-coverage'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath
      }
    }
  },
  viteFinal
})
