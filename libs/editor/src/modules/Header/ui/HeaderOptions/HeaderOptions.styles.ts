import styled from 'styled-components'

import { flex, wh } from '$/styles'

export const HeaderOptionsStyles = styled.div`
  ${wh('23%', '28px')}
  ${flex('flex-start', 'center')}
  gap: 25px;
  img {
    transition: transform 200ms;
    &:hover {
      transform: scale(1.1) rotate(3deg);
    }
  }
`

export const Option = styled.span`
  color: ${({ theme }) => theme.light};
  cursor: pointer;
`

