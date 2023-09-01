import { CreateViteConfigOptions } from '../types'
import { BuildOptions } from 'vite'

export const defineBuildOptions = (
  options: CreateViteConfigOptions
): BuildOptions => {
  if (options.projectType === 'library') {
    return {
      lib: {
        entry: 'src/index.ts',
        name: options.projectName,
        fileName: 'index',
        formats: ['es', 'cjs']
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          ...options.external
        ]
      }
    }
  }
}
