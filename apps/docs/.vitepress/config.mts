import { defineConfig } from 'vitepress'

/**
 * It is better not to decompose or refactor this config,
 * since hot-reload does not work without it.
 */
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
          },
          {
            base: 'introduction',
            text: 'About Me',
            link: '/who-am-i'
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
          },
          {
            base: 'functionality',
            text: 'Animations and Styles',
            link: '/animations'
          },
          {
            base: 'functionality',
            text: 'JWT Authorization',
            link: '/authorization'
          },
          {
            base: 'functionality',
            text: 'Frontend Business Logic',
            link: '/frontend-business-logic'
          },
          {
            base: 'functionality',
            text: 'FileSystem Web API',
            link: '/file-system-api'
          },
          {
            base: 'functionality',
            text: 'Throttle and Debounce',
            link: '/throttle-and-debounce'
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
          },
          {
            base: 'features',
            text: 'PWA',
            link: '/pwa'
          },
          {
            base: 'features',
            text: 'Other Concepts',
            link: '/other-concepts'
          }
        ]
      },
      {
        text: 'Ending',
        base: 'ending',
        items: [
          {
            text: 'Further Development',
            link: '/further-development'
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
