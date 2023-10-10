import { addProjectConfiguration }     from '@nx/devkit'
import { formatFiles }                 from '@nx/devkit'
import { generateFiles }               from '@nx/devkit'
import { Tree }                        from '@nx/devkit'
import * as path                       from 'path'
import { MicroserviceGeneratorSchema } from './schema'
import { execSync }                    from 'node:child_process'

export const microserviceGenerator = async (
  tree: Tree,
  options: MicroserviceGeneratorSchema
) => {
  const projectRoot = `apps/server/service-${options.name}`

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/src`,
    targets: {}
  })

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options)

  await formatFiles(tree)

  execSync('yarn install')
}

export default microserviceGenerator
