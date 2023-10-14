# Animations and Stylization

## Using react-spring + use-gesture


- [react-spring](https://www.npmjs.com/package/react-spring) is a library for animation in react. 
- [use-gesture](https://www.npmjs.com/package/@use-gesture/react) is a library that simplifies interaction 
with scrolling, zooming, and so on.

So why not connect them?

## Asynchronous Loading

To reduce the size of the *bundle*, I load these libraries *asynchronously*.

You can find the full code [here](https://github.com/Gearonix/code-gear/blob/master/packages/web/shared/src/providers/animations/animation-provider.tsx)

```tsx

const getAnimationModules = async () => {
  return Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react')
  ])
}


const AnimationProvider = ({ children }: WithChildren) => {
  const SpringRef = useRef<SpringType>()
  const GestureRef = useRef<GestureType>()
  const loader = useBooleanState()

  const loadLibraries = async () => {
    const [Spring, Gesture] = await getAnimationModules()
    // The full code can be found in the repository.
  }

  return (
    <AnimationContext.Provider value={animationPayload}>
          {children}
    </AnimationContext.Provider>
  )
}

```

You can use it like this.

```tsx
export const ExampleParent = () => {
  return (
    <AnimationProvider>
      <ExampleChild />
    </AnimationProvider>
  )
}

export const ExampleChild = () => {
  const { Spring, Gesture, isLoaded } = useAnimations()

  Spring.useDrag(({ offset: [ox, oy], down }) => {
    // some logic ...
  })
  
  return null
}

```

::: tip NOTE
`useAnimations` is imported from `@code-gear/web/shared` library.
:::

::: tip ✨ Examples

Examples of use using react-spring + use-gesture can be found here.

https://gearonix.github.io/code-gear

:::

## Stylization and Theming

- For styles, the project uses [styled-components](https://styled-components.com/). 
- UI library - [ant-design](https://ant.design/).

The project has a *dark theme* configured by default.

## Mixins

To use the default mixins, use the [@grnx-utils/css-presets](https://github.com/Gearonix/grnx-utils/tree/master/packages/css-presets)
package. It provides some *mixins* for styled-components.
