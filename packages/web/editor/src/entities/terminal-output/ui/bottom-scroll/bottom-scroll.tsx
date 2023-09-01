import { forwardRef, useImperativeHandle, useRef } from 'react'

import { Output } from '../terminal-output.styles'

import { VoidFunction, WithChildren } from '@code-gear/web/shared'

export interface BottomScrollHandle {
  scrollToBottom: VoidFunction
}

export const BottomScroll = forwardRef<BottomScrollHandle, WithChildren>(
  ({ children }, ref) => {
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
  }
)
