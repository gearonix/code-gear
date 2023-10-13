# Automation (CI/CD)

The project implements automation, automatic running of linting, 
unit tests and build of a monorepository when a pull request is sent to the `master` branch.

```
.github
├─ workflows
│  ├─ build.yml - project build + push to build bransh
│  ├─ lint.yml - linting 
   └─ storybook.yml - deploying and testing storybook remotely
└─ dependabot.yml
```


## Problems with [Single Version Policy](https://nx.dev/concepts/more-concepts/dependency-management#single-version-policy)

Nx popularizes the idea of storing all dependencies in one big `package.json` file. 
This approach has a number of pros and cons:

### Pros:
- You don't have to worry about different versions of your packages in different applications
- You get access to all the packages in the monorepository, without having to add them to your app `package.json`

### Cons:
- You have to install ALL the packages every time in your CI (or docker containers), and that takes a long time.
- `package.json` loses readability.

## How I accelerated the CI pipeline

However, I was able to find some ways to speed up CI.

### 1. Nx Distributed Caching

Using [nx-set-shas](https://github.com/nrwl/nx-set-shas) + [nx-affected](https://nx.dev/concepts/affected) 
gave its advantages in conjunction with [Nx Cloud](https://nx.dev/nx-cloud/intro/what-is-nx-cloud).

This uses the ntwl/nx-set-shas@v3 module in Github Actions.

```yaml
- uses: actions/checkout@v3
  with:
    fetch-depth: 0

- name: Derive appropriate SHAs for base and head for `nx affected` commands
  uses: nrwl/nx-set-shas@v3
  with:
    main-branch-name: 'master'

- run: |
    echo "BASE: ${{ env.NX_BASE }}"
    echo "HEAD: ${{ env.NX_HEAD }}"
```
When the build starts, nx affected starts.

```json
{
  "build": {
    "executor": "nx:run-commands",
    "options": {
      "command": "nx affected --base=origin/master -t build --parallel=3 --exclude='*,!tag:runtime:*'"
    }
  }
}
```

### 2. Storing yarn cache in the repository

Yarn Berry [(Yarn 2/3)](https://github.com/yarnpkg/berry) stores your node_module's zip files in its cache. 
The Cache can be global in your system, and therefore - shared between multiple projects, or local.
So you can use it wherever you want.

::: code-group

```.gitignore
.yarn/*
!.yarn/cache
```
:::

```yaml
- name: Cache Yarn dependencies
  uses: actions/cache@v3
  id: cache-yarn-cache
  with:
    path: |
      .yarn/cache
      node_modules
    key: ${{ runner.os }}-yarn-${{ hashFiles('**/*.yarn.lock') }}
    restore-keys: |
      ${{ runner.os }}-yarn-

- name: Installing dependencies
  run: yarn install --immutable --check-cache
```

## Why not [yarn PnP](https://yarnpkg.com/features/pnp)?

Despite the advantages of yarn PnP, I couldn't get it to work (there were problems with vite and preact), so I had 
to use node-modules `nodeLinker`.

```yaml
# .yarnrc.yml

nodeLinker: node-modules
```
