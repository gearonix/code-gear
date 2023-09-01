import { join } from 'path'
import { Project, SourceFile } from 'ts-morph'

const resolveRoot = () => join(__dirname, '..', '..', '..', '..')

const runProjectFiles = async (cb: (file: SourceFile) => void) => {
  const project = new Project({
    tsConfigFilePath: join(resolveRoot(), 'tsconfig.base.json')
  })

  project.addSourceFilesAtPaths(`${resolveRoot()}/packages/**/*.ts`)
  project.addSourceFilesAtPaths(`${resolveRoot()}/packages/**/*.tsx`)
  project.addSourceFilesAtPaths(`${resolveRoot()}/packages/**/**/*.ts`)
  project.addSourceFilesAtPaths(`${resolveRoot()}/packages/**/**/*.tsx`)
  project.addSourceFilesAtPaths(`${resolveRoot()}/packages/**/**/**/*.ts`)
  project.addSourceFilesAtPaths(`${resolveRoot()}/packages/**/**/**/*.tsx`)
  project.addSourceFilesAtPaths(`${resolveRoot()}/apps/**/*.ts`)
  project.addSourceFilesAtPaths(`${resolveRoot()}/apps/**/*.tsx`)

  const files = project.getSourceFiles()

  files.forEach(cb)

  return project
}

export { runProjectFiles }
