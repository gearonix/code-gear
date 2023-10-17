import { defineConfig } from 'vitepress'
import { withPwa }      from '@vite-pwa/vitepress'

/**
 * It is better not to decompose or refactor this config,
 * since hot-reload does not work without it.
 */
export default withPwa(
  defineConfig({
    title: 'CodeGear',
    description: 'Online code editor built on Preact, Nest and Nx',
    lastUpdated: true,
    cleanUrls: true,
    ignoreDeadLinks: true,

    base: '/code-gear/docs/',
    outDir: '../../dist/docs',

    head: [
      [
        'link',
        { rel: 'icon', type: 'image/svg+xml', href: '/code-gear/docs/logo.svg' }
      ]
    ],

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
          text: '😎 Cool Features',
          base: 'features',
          items: [
            {
              text: 'Storybook',
              link: '/storybook'
            },
            {
              text: 'Custom Libraries',
              link: '/custom-libraries'
            },
            {
              text: 'Automation (CI/CD)',
              link: '/automation'
            },
            {
              text: 'Config Incapsulation',
              link: '/config-incapsulation'
            },
            {
              text: 'PWA',
              link: '/pwa'
            },
            {
              text: 'Prisma Concepts',
              link: '/prisma'
            },
            {
              text: 'FileSystem Web API',
              link: '/file-system-api'
            },
            {
              text: 'Animations and Styles',
              link: '/animations'
            }
          ]
        },
        {
          text: '✨ Other Concepts',
          base: 'other-concepts',
          items: [
            {
              text: 'Code Generation',
              link: '/code-generation'
            },
            {
              text: 'Precommit Hooks',
              link: '/precommit-hooks'
            },
            {
              text: 'Ts-Morph',
              link: '/ts-morph'
            },
            {
              text: 'Tests Coverage',
              link: '/testing'
            },
            {
              text: 'Validation',
              link: '/validation'
            },
            {
              text: 'GraphQL',
              link: '/graphql'
            },
            {
              text: 'JWT Authorization',
              link: '/authorization'
            },
            {
              text: 'Frontend Business Logic',
              link: '/frontend-business-logic'
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
)
