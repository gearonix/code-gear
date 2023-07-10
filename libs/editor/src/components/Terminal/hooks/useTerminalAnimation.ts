import { useAnimations, VoidFunction } from '$/client-shared'

export const useTerminalAnimation = (closeCallback: VoidFunction) => {
  const terminalHeight = 260
  const { Spring, Gesture } = useAnimations()
  const [{ y }, api] = Spring.useSpring(() => ({ y: terminalHeight }))

  const open = () => {
    api.start({ y: 0, immediate: false, config: Spring.config.gentle })
  }

  const close = (velocity = 0) => {
    closeCallback()
    api.start({ y: terminalHeight, immediate: false, config: { ...Spring.config.stiff, velocity } })
  }

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel }) => {
      if (oy < -70) cancel()
      if (last) {
        oy > terminalHeight * 0.5 || (vy > 0.5 && dy === 1) ? close(vy) : open()
      }
      else api.start({ y: oy, immediate: dy === -1 })
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  )

  const display = y.to((py) => (py < terminalHeight ? 'block' : 'none'))

  const toggle = (isOpened : boolean) => {
    if (isOpened) {
      open()
    } else{
      close()
    }
  }

  return {
    toggle,
    open,
    close,
    bind,
    div: Spring.a.div,
    springs: {
      display,
      y
    },
    terminalHeight
  }
}
