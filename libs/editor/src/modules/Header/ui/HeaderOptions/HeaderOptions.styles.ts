import styled from 'styled-components'

import { flex, wh } from '$/styles'

export const HeaderOptionsStyles = styled.div`
  ${wh('23%', '28px')}
  ${flex('flex-start', 'center')}
  gap: 23px;
`

export const Option = styled.span`
  color: ${({ theme }) => theme.light};
  cursor: pointer;
`

