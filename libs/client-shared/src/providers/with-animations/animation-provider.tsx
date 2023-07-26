import { createContext, useContext, useEffect, useMemo, useRef } from 'react'

import { useBooleanState } from '../../hooks'
import { Display } from '../../lib/components'
import { GestureType, SpringType, WithChildren } from '../../types'

type AnimationContextPayload = Partial<{
  Gesture: GestureType
  Spring: SpringType
  isLoaded: boolean
}>

const AnimationContext = createContext<AnimationContextPayload>({})

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
    SpringRef.current = Spring
    GestureRef.current = Gesture
    loader.on()
  }

  useEffect(() => {
    loadLibraries()
  }, [])

  const animationPayload: AnimationContextPayload = useMemo(
    () => ({
      Spring: SpringRef.current,
      Gesture: GestureRef.current,
      isLoaded: loader.val
    }),
    [loader.val]
  )

  return (
    <AnimationContext.Provider value={animationPayload}>
      <Display when={loader.val}>{children}</Display>
    </AnimationContext.Provider>
  )
}

export const useAnimations = () => {
  return useContext(AnimationContext) as Required<AnimationContextPayload>
}

export default AnimationProvider
