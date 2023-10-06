import { VoidFunction }        from '@code-gear/web/shared'
import { WithChildren }        from '@code-gear/web/shared'
import { forwardRef }          from 'react'
import { useImperativeHandle } from 'react'
import { useRef }              from 'react'

import { Output }              from '../terminal-output.styles'

export interface BottomScrollHandle {
  scrollToBottom: VoidFunction
}

export const BottomScroll = forwardRef<BottomScrollHandle, WithChildren>((
  { children },
  ref
) => {
  const outputRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    outputRef.current.scrollTo(0, outputRef.current.scrollHeight)
  }

  useImperativeHandle(ref, () => ({
    scrollToBottom: () => {
      scrollToBottom()
      setTimeout(scrollToBottom, 50)
    }
  }))

  return <Output ref={outputRef}>{children}</Output>
})
