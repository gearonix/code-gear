import styled from 'styled-components'

import { flex, testBorder, wh } from '$/styles'

export const HeaderOptionsStyles = styled.div`
  ${wh('240px', '28px')}
  ${flex('flex-start', 'center')}
  gap: 23px;
`

export const Option = styled.span`
  color: ${({ theme }) => theme.light};
  cursor: pointer;
`

export const Logo = styled.img`
  margin-bottom: 5px;
`
