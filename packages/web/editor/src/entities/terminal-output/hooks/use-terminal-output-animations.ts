import { useAnimations }       from '@code-gear/web/shared'
import { ForwardedRef }        from 'react'
import { useImperativeHandle } from 'react'

export const useTerminalOutputAnimations = (ref: ForwardedRef<void>) => {
  const { Spring } = useAnimations()

  const [spring, api] = Spring.useSpring(() => ({
    opacity: 1,
    x: 0
  }))

  useImperativeHandle(ref, () => ({
    close: async () => {
      api.start({
        opacity: 0,
        x: -20,
        immediate: false,
        config: Spring.config.wobbly
      })
      return new Promise((resolve) =>
        setTimeout(() => {
          api.start({
            opacity: 1,
            x: 0,
            immediate: false,
            config: Spring.config.wobbly
          })
          resolve(true)
        }, 300))
    }
  }))

  return {
    ref,
    spring,
    SpringDiv: Spring.a.div
  }
}
