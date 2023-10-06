import { runProjectFiles } from '../../lib/helpers'
import { ProjectPath }     from './consts'
import { projectPaths }    from './consts'

const renameImports = async (projectPaths: ProjectPath[]) => {
  const project = await runProjectFiles((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations()
    importDeclarations.forEach((declaration) => {
      const importPath = declaration.getModuleSpecifierValue()
      const projectMatcher = projectPaths.find(
        (path) => path.target === importPath
      )

      if (projectMatcher) {
        declaration.setModuleSpecifier(projectMatcher.replacement)
      }
    })
  })

  project.save()
}

renameImports(projectPaths)
