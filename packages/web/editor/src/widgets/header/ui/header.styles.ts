import { s }  from '@code-gear/web/shared'
import styled from 'styled-components'

export const HeaderStyles = styled.div`
  background: ${({ theme }) => theme.grey};
  border-bottom: 2px solid ${({ theme }) => theme.lightGrey};
  height: ${s.wh('100%', '42px')};
  box-sizing: border-box;
  ${s.flex('space-between', 'center')}
  ${s.hPadding(23)}
`

export const FileName = styled.h2`
  color: ${({ theme }) => theme.light};
`
