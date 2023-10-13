const concat = require('concat-files')
const path = require('path')

const resolvePrisma = (...args) => path.join('prisma', ...args)

const concatPrismaFiles = ({ config, models, dest }) => {
  concat(
    [
      resolvePrisma('config', config),
      ...models.map((model) => resolvePrisma('models', `${model}.prisma`))
    ],
    resolvePrisma(dest),
    (error) => {
      if (error) {
        throw error
      }

      console.log('Prisma files merged.')
    }
  )
}

concatPrismaFiles({
  config: 'base.prisma',
  models: ['users'],
  dest: 'schema.prisma'
})
