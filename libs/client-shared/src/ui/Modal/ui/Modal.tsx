import { MouseEvent } from 'react'

import { Portal } from '@reach/portal'

import { AnimationProvider, Display, useAnimations } from '../../../lib/components'
import { WithChildren } from '../../../types'
import { useModalTransitions } from '../hooks/useModalTransitions'

import { ModalBackground, ModalContainer, ModalStyles, ModalTitle } from './Modal.styles';

type ModalProps = WithChildren<{
  isOpen: boolean
  onClose: () => void
  title: string
}>

export const Modal = ({ onClose, isOpen, children, title }: ModalProps) => {
  const { Spring, Gesture } = useAnimations()
  const { opacity, transform } = useModalTransitions()

  const containerTransition = Spring.useTransition(isOpen, {
    from: opacity.from(),
    enter: opacity.to(),
    leave: opacity.from(),
    config: Spring.config.stiff
  })

  const modalStyle = Spring.useSpring({
    from: transform.from(),
    to: transform.to(isOpen),
    config: Spring.config.wobbly
  })

  const [modalDrag, api] = Spring.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  }))

  const { y, x, scale } = modalDrag

  const bind = Gesture.useDrag(
    ({ offset: [ox, oy], down }) => {
      api.start({ y: down ? oy : 0, immediate: false, x: down ? ox : 0, scale: down ? 1.07 : 1 })
    },
    { from: () => [0, 0], filterTaps: true, rubberband: true, delay: 200 }
  )

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return <>
      {containerTransition(
        (spring, item) =>
          <Display when={item}>
            <Portal>
                <ModalBackground
                  style={spring}
                  onClick={onClose} as={Spring.a.div}>
                  <ModalStyles style={{ ...modalStyle, x, y, scale }} {...bind()}
                               onClick={stopPropagation} as={Spring.a.div}>
                    <ModalContainer>
                      <ModalTitle>{title}</ModalTitle>
                      {children}
                    </ModalContainer>
                  </ModalStyles>
                </ModalBackground>
            </Portal>
          </Display>)
      }
    </>
}

const ModalWrapper = (props: ModalProps) => {
  return <AnimationProvider>
    <Modal {...props} />
  </AnimationProvider>
}

export default ModalWrapper
