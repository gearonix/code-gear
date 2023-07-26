import { useAnimations } from '$/client-shared'

export const useAsideAnimation = () => {
  const { Spring } = useAnimations()

  const spring = Spring.useSpring({
    from: {
      x: -100
    },
    to: {
      x: 0
    },
    config: Spring.config.stiff
  })

  return {
    animatedDiv: Spring.a.div,
    spring
  }
}
