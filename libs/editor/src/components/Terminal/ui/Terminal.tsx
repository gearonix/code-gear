import React from 'react'

import styles from './styles.module.css'

import { AnimationProvider, useAnimations } from '$/client-shared'

const items = ['save item', 'open item', 'share item', 'delete item', 'cancel']
const height = items.length * 60 + 80

const Terminal = () => {
  const { Spring, Gesture } = useAnimations()
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const open = () => {
    api.start({ y: 0, immediate: false, config: Spring.config.gentle })
  }

  const close = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...Spring.config.stiff, velocity } })
  }
  console.log(height)

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel }) => {
      console.log(dy)
      // console.log(last)
      // console.log(vy)
      if (oy < -70) cancel()
      if (last) {
        oy > height * 0.5 || (vy > 0.5 && dy === 1) ? close(vy) : open()
      }
      else api.start({ y: oy, immediate: dy === -1 })
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  )

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return <>
      <div className={styles.actionBtn} onClick={open} />
      <Spring.a.div className={styles.sheet} {...bind()} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}>
        {items.map((entry, i) => (
          <div
            key={entry}
            onClick={() => (i < items.length - 1 ? alert('clicked on ' + entry) : close())}
            children={entry}
          />
        ))}
      </Spring.a.div>
  </>
}

const TerminalWrapper = () => {
  return <AnimationProvider>
    <Terminal/>
  </AnimationProvider>
}

export default TerminalWrapper
