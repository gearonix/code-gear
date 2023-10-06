import { AnimationProvider }   from '@code-gear/web/shared'
import { VoidFunction }        from '@code-gear/web/shared'
import { WithChildren }        from '@code-gear/web/shared'
import { useEffect }           from 'react'

import { usePopoverAnimation } from '../hooks'
import { PopoverStyles }       from './popover.styles'

export type PopoverProps = WithChildren<{
  onClose: VoidFunction
  isOpen: boolean
  height: number
}>

export const Popover = ({
  children,
  onClose,
  isOpen,
  height
}: PopoverProps) => {
  const motion = usePopoverAnimation(onClose, height)

  useEffect(() => {
    motion.toggle(isOpen)
  }, [isOpen])

  return (
    <PopoverStyles
      $bottom={height}
      {...motion.bind()}
      style={motion.springs}
      as={motion.div}
      data-testid="popover">
      {children}
    </PopoverStyles>
  )
}

export default (props: PopoverProps) => {
  return (
    <AnimationProvider>
      <Popover {...props} />
    </AnimationProvider>
  )
}
