import { forwardRef, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import { useModalContextState, useStore } from '@/shared/hooks'

import { useTerminalOutputAnimations } from '../../hooks'
import {
  BottomScroll,
  BottomScrollHandle
} from '../bottom-scroll/bottom-scroll'
import { OutputLine } from '../terminal-output.styles'

export interface TerminalOutputHandle {
  close: () => Promise<void>
}

const TerminalOutput = observer<TerminalOutputHandle, void>(
  forwardRef((_, preparedRef) => {
    const outputRef = useRef<BottomScrollHandle>(null)
    const scrollEndRef = useRef<HTMLDivElement>(null)
    const { isTerminalOpened } = useModalContextState()
    const { executeMessages } = useStore()
    const { spring, SpringDiv } = useTerminalOutputAnimations(preparedRef)

    const scrollToBottom = () => {
      scrollEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
      outputRef.current.scrollToBottom()
    }, [executeMessages.length, isTerminalOpened])

    return (
      <BottomScroll ref={outputRef}>
        CodeGear output console.
        <SpringDiv style={{ ...spring }}>
          {executeMessages.map((msg, idx) => {
            return (
              <OutputLine
                key={idx}
                $isError={msg.isError}
                onClick={scrollToBottom}>
                User [{msg.fileName}] [{msg.date}] &gt; <em>{msg.message}</em>
              </OutputLine>
            )
          })}
          <div ref={scrollEndRef} />
        </SpringDiv>
      </BottomScroll>
    )
  })
)

export default TerminalOutput
