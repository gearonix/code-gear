import styled from 'styled-components'

import { color, flex, testBorder, wh } from '$/styles'

export const SettingsItem = styled.div`
  ${wh('100%', '70px')};
  ${flex('space-between', 'flex-start')};
  margin-bottom: 25px;
`

export const SettingsText = styled.div`
  margin-top: -5px;
  height: 100%;
  h4 {
    color: ${color('light')};
    font-size: ${({ theme }) => theme.fz8};
  }
  p {
    color: ${color('secondaryGrey')};
    font-size: ${({ theme }) => theme.fz5};
    margin-top: 10px;
  }

`
