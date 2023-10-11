# Precommit Hooks

The pre-commit hook is run first, before you even type in a commit message. 
I use [husky](https://typicode.github.io/husky/getting-started.html) for precommit hooks

The hooks are located in the `.husky` folder.

## Commitlint

[Commitlint](https://commitlint.js.org/#/) - is used for linting commits (wow), in my case I used
[semantic commit messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) plugin (like chore, feat, docs).

#### An example of commitlint in action:

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn dlx commitlint --edit $1
```

## Lint-Staged

[Lint-staged](https://github.com/okonet/lint-staged) - is a tool, what runs linters only on git staged files,
to speed up the linting process before committing.

#### An example of lint-staged in action:

```sh
# .lintstagedrc
{
  "*.ts": ["yarn dlx nx lint"]
}
```

## Updating Dependencies

Before each commit, try to update dependencies (using [yarn-upgrade-all](https://yarnpkg.com/package?name=yarn-upgrade-all)
for example).

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn install

yarn dlx yarn-upgrade-all

yarn lint-staged --relative

```

---

By the way, [dependabot](https://github.com/dependabot) is connected to the project and 
little by little it sends PRs to update dependencies.
