import { Tabs } from 'antd'
import styled from 'styled-components'

import { absolute, antdColor, color, flex, hover, margin, wh } from '$/styles'

interface TerminalStylesProps{
  readonly $bottom: number
}

export const TerminalStyles = styled.div<TerminalStylesProps>`
  padding-left: 28px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${color('darkBlue')};
  border-top: 2px solid ${color('lightGrey')};
  touch-action: none;
  bottom: ${({ $bottom }) => `calc(-100vh + ${$bottom - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  user-select: none;
`

export const TerminalButtons = styled.div`
  ${absolute({
    right: '44px',
    top: '23px'
  })}
  ${flex('flex-end')};
  gap: 23px;
  ${wh('100px','22px')};
  cursor: pointer;
  svg {
    path {
      stroke: ${color('secondaryGrey')};
      ${({ theme }) => hover(theme.light)};
    }
    ${wh('22px')}
    color: ${color('secondaryGrey')};
    ${({ theme }) => hover(theme.light)}
  }
`

export const Navigation = styled(Tabs)`
  ${margin(0, 6)};

  .ant-tabs-nav::before{
    border-bottom: none;
  }
  .ant-tabs-tab-active div{
    color: ${antdColor('light')};
  }
  .ant-tabs-tab:hover, .ant-tabs-tab:active{
    color: ${color('light')};
  }
  .ant-tabs-ink-bar{
    background: ${color('light')};
  }
  .ant-tabs-tab {
    padding: 7px 0 !important;
  }

  font-size: ${({ theme }) => theme.fz6};
`
