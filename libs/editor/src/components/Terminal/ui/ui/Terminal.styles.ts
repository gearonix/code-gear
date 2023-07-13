import { Tabs } from 'antd'
import styled from 'styled-components'

import { absolute, antdColor, color, flex, hover, margin, wh } from '$/styles'

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
