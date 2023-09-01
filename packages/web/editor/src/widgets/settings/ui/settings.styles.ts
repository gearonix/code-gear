import styled from 'styled-components'

import { s } from '@code-gear/web/shared'

export const SettingsItem = styled.div`
  ${s.wh('100%', '70px')};
  ${s.flex('space-between', 'flex-start')};
  margin-bottom: 25px;
`

export const KeyBuildingStyles = styled(SettingsItem)`
  height: 45px;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 10px;
  gap: 30px;
`

export const SettingsText = styled.div`
  margin-top: -5px;
  height: 100%;
  h4 {
    color: ${s.color('light')};
    font-size: ${({ theme }) => theme.fz8};
  }
  p {
    color: ${s.color('secondaryGrey')};
    font-size: ${({ theme }) => theme.fz5};
    margin-top: 10px;
  }
`
