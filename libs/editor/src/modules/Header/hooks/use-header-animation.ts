import { useSpring } from '@react-spring/web'

import { useAnimations } from '$/client-shared'

export const useHeaderAnimation = () => {
  const { Spring } = useAnimations()

  const spring = useSpring({
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
