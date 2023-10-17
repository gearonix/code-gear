# Automated refactoring (ts-morph)

In the project you can see automated refactoring tools such as `ts-morph`.

[Ts-morph](https://ts-morph.com/setup/) - TypeScript Compiler API wrapper. Provides an easier way to programmatically 
navigate and manipulate TypeScript and JavaScript code. (using an AST tree, for example).

Currently, you can see all the scripts that I have ever used in the `tools/scripts` folder. 
This is a package with which you can change the project structure in any way you want.

## Run ts-morph script

::: code-group

```sh [yarn]

nx run scripts:run --script=check-uppercase-files.ts
```

:::

## Create your own scripts

Place your script in the `src/ts-morph` folder. 
`runProjectFiles` is a small abstraction that simply 
adds the necessary files to the project.

```ts

import { runProjectFiles } from '@/lib/helpers'

/**
 * write your logic inside of runProjectFiles function
 */

runProjectFiles((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()
  
}).then((project) => {
  project.save()
})

```

The source code can be found [here](https://github.com/Gearonix/code-gear/tree/master/tools/scripts/src/ts-morph).

