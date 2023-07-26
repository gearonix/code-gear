import { runProjectFiles } from './lib/helpers'

runProjectFiles((sourceFile) => {
  const name = sourceFile.getBaseName()
  if (name !== name.toLowerCase()) {
    console.log(name)
  }
})
