import styled from 'styled-components'

import { br, color, flex, testBorder, wh } from '$/styles'

export const SettingsItem = styled.div`
  ${wh('100%', '70px')};
  ${flex('space-between', 'flex-start')};
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
    color: ${color('light')};
    font-size: ${({ theme }) => theme.fz8};
  }
  p {
    color: ${color('secondaryGrey')};
    font-size: ${({ theme }) => theme.fz5};
    margin-top: 10px;
  }
`

export const Separator = styled.div`
  background: ${color('lightGrey')};
  ${wh('100%', '2px')};
  margin-bottom: 30px;
  margin-top: -8px;
`

export const Title = styled.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fz10};
  border-bottom: ${br} ${color('lightGrey')};
`
