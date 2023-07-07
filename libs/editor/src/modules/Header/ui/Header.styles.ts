import styled from 'styled-components'

import { br, flex, hPadding, wh } from '$/styles'


export const HeaderStyles = styled.div`
  background: ${({ theme }) => theme.grey};
  border-bottom: 2px solid ${({ theme }) => theme.lightGrey};
  height: ${wh('100%', '46px')};
  box-sizing: border-box;
  ${flex('space-between', 'center')}
  ${hPadding(23)}
`

export const FileName = styled.h2`
  color: ${({ theme }) => theme.light}

`
