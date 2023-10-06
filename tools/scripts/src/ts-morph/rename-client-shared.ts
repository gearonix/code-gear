import { runProjectFiles } from '@/lib/helpers'

const isClientSharedPath = (value: string) => {
  const matcher = value.split('/')
  return matcher[0] === '$' && matcher[1] === 'shared'
}

runProjectFiles((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()
  importDeclarations.forEach((declaration) => {
    const importPath = declaration.getModuleSpecifierValue()

    if (isClientSharedPath(importPath)) {
      declaration.setModuleSpecifier('@code-gear/web/shared')
    }
  })
}).then((project) => {
  project.save()
})
