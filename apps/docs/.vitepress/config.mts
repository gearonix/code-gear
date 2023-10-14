import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CodeGear',
  description: 'Online code editor built on Preact, Nest and Nx',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  base: '/code-gear/docs/',
  outDir: '../../dist/docs',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/code-gear/docs/logo.svg' }]],

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction/about-project' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            base: '/introduction',
            text: 'Overview',
            link: '/about-project'
          },
          {
            base: 'introduction',
            text: 'Getting Started',
            link: '/getting-started'
          }
        ]
      },
      {
        text: 'Architecture',
        items: [
          {
            base: 'architecture',
            text: 'FSD and Microfrontends',
            link: '/frontend'
          },
          {
            base: 'architecture',
            text: 'CQRS and Microservices',
            link: '/backend'
          }
        ]
      },
      {
        text: 'Functionality',
        items: [
          {
            base: 'functionality',
            text: 'Prisma Concepts',
            link: '/prisma'
          },
          {
            base: 'functionality',
            text: 'GraphQL',
            link: '/graphql'
          }
        ]
      },
      {
        text: 'Featutes',
        items: [
          {
            base: 'features',
            text: 'Storybook',
            link: '/storybook'
          },
          {
            base: 'features',
            text: 'Code Generation',
            link: '/code-generation'
          },
          {
            base: 'features',
            text: 'Custom Libraries',
            link: '/custom-libraries'
          },
          {
            base: 'features',
            text: 'Precommit Hooks',
            link: '/precommit-hooks'
          },
          {
            base: 'features',
            text: 'Automation (CI/CD)',
            link: '/automation'
          },
          {
            base: 'features',
            text: 'Docker',
            link: '/docker'
          },
          {
            base: 'features',
            text: 'Ts-Morph',
            link: '/ts-morph'
          },
          {
            base: 'features',
            text: 'Config Incapsulation',
            link: '/config-incapsulation'
          },
          {
            base: 'features',
            text: 'Tests Coverage',
            link: '/testing'
          },
          {
            base: 'features',
            text: 'Validation',
            link: '/validation'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gearonix/code-gear' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Uzhanin Egor'
    }
  }
})
