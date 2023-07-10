import { Tabs } from 'antd'
import styled from 'styled-components'

import { AnimatedDiv } from '$/client-shared'
import { absolute, antdColor, color, hover, margin, wh } from '$/styles'

interface TerminalStylesProps{
  readonly $bottom: number
}

export const createTerminalStyles = (div: AnimatedDiv) => styled(div)<TerminalStylesProps>`
  padding-left: 28px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 59px);
  border-radius: 6px 6px 0;
  background: ${color('darkBlue')};
  border-top: 2px solid ${color('lightGrey')};
  touch-action: none;
  bottom: ${({ $bottom }) => `calc(-100vh + ${$bottom - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  user-select: none;
`

export const CloseButton = styled.div`
  ${absolute({
    right: '34px',
    top: '23px'
  })}
  ${wh('21px')};
  cursor: pointer;
  svg {
    ${wh()}
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

export const Output = styled.p`
  color: ${color('light')};
  font-size: ${({ theme }) => theme.fz7};
  margin-top: 4px;
  font-weight: normal;

  span {
    display: block;
    margin-top: 17px;
    font-size: ${({ theme }) => theme.fz7};
  }

  span:first-child {
    margin-top: 22px;
  }
`
