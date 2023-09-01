import { createStorybookConfig } from 'cg-config/src'
import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = createStorybookConfig({
  viteConfigPath: 'libs/web/ui/vite.config.ts',
  viteFinal: (config: StorybookConfig): StorybookConfig => {
    return mergeConfig(config, {
      define: {
        'process.env': process.env
      },
      plugins: [
        viteTsConfigPaths()
      ]
    })
  }
})

export default config
