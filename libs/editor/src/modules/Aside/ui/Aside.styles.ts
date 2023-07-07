import styled from 'styled-components'

import { flex, wh } from '$/styles'

export const AsideStyles = styled.div`
  background: ${({ theme }) => theme.grey};
  border-right: 2px solid ${({ theme }) => theme.lightGrey};
  box-sizing: border-box;
  ${wh('64px', '100%')};
  ${flex('space-between', 'center', 'column')}
`

export const Icon = styled.div`
  ${wh('28px')}
  svg {
    ${wh()}
    color: ${({ theme }) => theme.secondaryGrey}
  }
`
