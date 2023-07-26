import { Project } from "ts-morph"
import { join } from 'path';

const resolveRoot = () => join(__dirname, '..', '..')

const project = new Project({
  tsConfigFilePath: join(resolveRoot(), 'tsconfig.base.json')
})


project.addSourceFilesAtPaths("../../libs/**/*.ts")
project.addSourceFilesAtPaths("../../libs/**/*.tsx")
project.addSourceFilesAtPaths("../../apps/**/*.ts")
project.addSourceFilesAtPaths("../../apps/**/*.tsx")

const files = project.getSourceFiles()

const isClientSharedPath = (value: string) => {
  const matcher = value.split("/")
  return matcher[0] === '$' && matcher[1] === 'shared'
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()
  importDeclarations.forEach((declaration) => {
    const importPath = declaration.getModuleSpecifierValue()

    if (isClientSharedPath(importPath)){
      declaration.setModuleSpecifier(`$/client-shared`)
    }
  })
})

project.save()
