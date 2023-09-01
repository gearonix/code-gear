import { Tabs } from 'antd'
import styled from 'styled-components'

import { s } from '@code-gear/web/shared'

export const TerminalButtons = styled.div`
  ${s.absolute({
    right: '44px',
    top: '23px'
  })}
  ${s.flex('flex-end')};
  gap: 23px;
  ${s.wh('100px', '22px')};
  cursor: pointer;
  svg {
    path {
      stroke: ${s.color('secondaryGrey')};
      ${({ theme }) => s.hover(theme.light)};
    }
    ${s.wh('22px')}
    color: ${s.color('secondaryGrey')};
    ${({ theme }) => s.hover(theme.light)}
  }
`

export const Navigation = styled(Tabs)`
  ${s.margin(0, 6)};

  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab-active div {
    color: ${s.antdColor('light')};
  }
  .ant-tabs-tab:hover,
  .ant-tabs-tab:active {
    color: ${s.color('light')};
  }
  .ant-tabs-ink-bar {
    background: ${s.color('light')};
  }
  .ant-tabs-tab {
    padding: 7px 0 !important;
  }

  font-size: ${({ theme }) => theme.fz6};
`

export const TerminalTitle = styled.h3`
  color: ${s.color('light')};
  font-size: ${({ theme }) => theme.fz7};
`
