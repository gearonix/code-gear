# Storybook 

[Storybook](https://storybook.js.org/) is a popular open-source tool for developing UI components in isolation.

## Run storybook

::: code-group

```sh [yarn]
$ nx storybook:serve web-ui
```
:::

This will run the components that are written in the `packages/web/ui` library

::: tip NOTE

I'm using a reusable storybook config, which is in the .config folder. All config settings (vite, babel, swc) can be viewed in `packages/config`

```ts
// .config/storybook/main.ts

const config: StorybookConfig = createStorybookConfig({
  viteConfigPath: 'packages/web/ui/.config/vite.ts',
  viteFinal: (config: StorybookConfig): StorybookConfig => {
    return mergeConfig(config, {
      define: {
        'process.env': process.env
      },
      plugins: [viteTsConfigPaths()]
    })
  }
})

export default config

```

:::

## Unit Tests with Storybook

You can write storybook unit tests. On the project I use 
`@storybook/testing-library` and `storybook-test-runner`. It allows you to run
`unit` tests in an isolated storybook environment.

::: code-group

```sh [yarn]
$ nx storybook:test:development web-ui
```
:::

## Using storybook in production

I'm using `Github Actions` to automatically deploy and unit test the `storybook`.

This is to build storybook assets, push them to github (`storybook-build` branch) and test them remotely.

```yaml
- name: Installing dependencies
  run: yarn install

- name: Building storybook
  run: yarn nx run web-ui:storybook:build

- name: Pushing to build-storybook branch
  uses: JamesIves/github-pages-deploy-action@v4
  with:
    folder: dist/storybook/ui
    branch: storybook-build
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

- name: Testing storybook in production
  run: yarn nx run web-ui:storybook:test:production

```

Storybook test runner can test your storybook remotely, already on a deployed version.

```json
{
  "storybook:test:production": {
    "executor": "nx:run-commands",
    "options": {
      "command": "test-storybook -c packages/web/ui/.config/storybook --url=YOUR_URL"
    }
  }
}

```

::: tip NOTE

You can see all the settings in `project.json`, it is in every application/service.

:::

## Adding a new UI component

To create a new component, you can use the `hygen` generator.

::: code-group

```sh [yarn]
$ nx run generator:new --name=ui
```
:::

This will create a react component with styling (`styled-components`), and also add a reset for your `stories`.

```tsx
const Story: Meta<typeof Select> = {
  component: Select,
  title: 'ui/select'
}

const variant = createStorybookVariant<SelectProps<unknown>>({
  onChange: () => null,
  value: 'val-1',
  options: selectDefaultOptions,
  defaultValue: 'val-1'
})

export const Default = variant()

Default.play = async ({ canvasElement }: TestStory<typeof Select>) => {
  const canvas = within(canvasElement)
  const select = await canvas.findByTestId('select')

  expect(select).toBeDefined()

  await userEvent.click(select)
}

```

::: tip NOTE

createStorybookVariant is imported from `@code-gear/web/shared` library.

:::

You will have to add the `data-testid` attribute to your react component.

```tsx 

export const Select = <T,>(props: SelectProps<T>) => {
  return (
    <MySelect
      // ... props
      data-testid="select"
    />
  )
}

```

You can read about generators [here](./code-generation.md)

## What about decorators?

I mean *storybook* decorators. They are in the `web/shared` library, 
you can find and easily add yours if needed.

```tsx
// ~/storybook/decorators/my-decorator.ts

import { Decorator }     from '@storybook/react'

import { ThemeProvider } from '@/providers/theme'

export const CustomThemeDecorator: Decorator = <T,>(story) => (
  <ThemeProvider>{story<T>()}</ThemeProvider>
)
```

---

Also you can watch the current version of the storybook here:

https://gearonix.github.io/code-gear
