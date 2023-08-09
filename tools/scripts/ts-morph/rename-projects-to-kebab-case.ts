// This script can be dangerous!

import { runProjectFiles } from '../lib/helpers'

const toKebabCase = (str) => {
  return str
    ? str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    : str
}

runProjectFiles(async (sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()
  const exportDeclarations = sourceFile.getExportDeclarations()

  importDeclarations.forEach((declaration) => {
    const value = declaration.getModuleSpecifierValue()
    console.log(`IMPORT: ${value}`)
    const newValue = toKebabCase(value)
    declaration.setModuleSpecifier(newValue)
  })

  exportDeclarations.forEach((declaration) => {
    const value = declaration.getModuleSpecifierValue()
    console.log(`EXPORT: ${value}`)
    if (!value) {
      return
    }
    const newValue = toKebabCase(value)
    declaration.setModuleSpecifier(newValue)
  })

  const oldFileName = sourceFile.getBaseName()

  const newFileName = toKebabCase(oldFileName)

  console.log(`FILENAME: ${newFileName}`)

  const newFile = await sourceFile.copy(newFileName)
  await Promise.all([newFile.save(), sourceFile.deleteImmediately()])
})

console.log('Done.')
