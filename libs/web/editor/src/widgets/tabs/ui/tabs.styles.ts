import { Tabs as AntdTabs } from 'antd'
import styled from 'styled-components'

import { s } from '@code-gear/web/shared'

export const TabsStyles = styled(AntdTabs)`
  color: ${s.antdColor('secondaryGrey')};
  height: 50px;
  margin: 12px;
  min-width: 300px;
  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab {
    background: ${s.antdColor('grey')};
  }
  .ant-tabs-tab-active {
    background: #2e3139 !important;
  }
  .ant-tabs-tab-btn {
    color: ${s.antdColor('secondaryGrey')};
  }
`
