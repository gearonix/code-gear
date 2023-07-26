import { join } from 'path'
import { Project, SourceFile } from 'ts-morph'

const resolveRoot = () => join(__dirname, '..', '..')

const runProjectFiles = async (cb: (file: SourceFile) => void) => {
  const project = new Project({
    tsConfigFilePath: join(resolveRoot(), 'tsconfig.base.json')
  })

  project.addSourceFilesAtPaths('../../libs/**/*.ts')
  project.addSourceFilesAtPaths('../../libs/**/*.tsx')
  project.addSourceFilesAtPaths('../../apps/**/*.ts')
  project.addSourceFilesAtPaths('../../apps/**/*.tsx')

  const files = project.getSourceFiles()

  files.forEach(cb)

  return project
}

export { runProjectFiles }
