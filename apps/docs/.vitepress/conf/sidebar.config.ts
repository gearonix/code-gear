import { createSidebarTab } from '../lib/sidebar-tab'
import { DefaultTheme }     from 'vitepress'

export const createSidebarConfig = (): DefaultTheme.Sidebar => {
  return [
    createSidebarTab({
      base: 'introduction',
      items: ['about-project', 'getting-started']
    }),
    createSidebarTab({
      base: 'architecture',
      items: [
        ['FSD and Microfrontends', 'frontend'],
        ['CQRS and Microservices', 'backend']
      ]
    }),
    createSidebarTab({
      base: 'functionality',
      items: [
        'prisma-concepts',
        ['GraphQL', 'graphql'],
        ['Animations and Styles', 'animations'],
        ['JWT Authorization', 'authorization'],
        'frontend-business-logic',
        ['FileSystem Web API', 'file-system-api'],
        'throttle-and-debounce'
      ]
    }),
    createSidebarTab({
      base: 'features',
      items: [
        'storybook',
        'code-generation',
        'custom-libraries',
        'precommit-hooks',
        ['Automation (CI/CD)', 'automation'],
        'docker',
        'ts-morph',
        'config-incapsulation',
        'testing',
        'validation',
        ['PWA', 'pwa'],
        'other-concepts'
      ]
    })
  ]
}
