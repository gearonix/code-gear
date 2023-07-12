import { Popconfirm, Tabs as AntdTabs } from 'antd';
import styled from 'styled-components'

import { antdColor } from '$/styles'


export const TabsStyles = styled(AntdTabs)`
  color: ${antdColor('secondaryGrey')};
  height: 50px;
  margin: 12px;
  min-width: 300px;
  .ant-tabs-nav::before{
    border-bottom: none;
  }
  .ant-tabs-tab {
    background: ${antdColor('grey')};
  }
  .ant-tabs-tab-active {
    background: #2E3139 !important;
  }
  .ant-tabs-tab-btn{
    color: ${antdColor('secondaryGrey')};
  }
`
