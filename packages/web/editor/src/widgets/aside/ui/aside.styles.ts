import { s }  from '@code-gear/web/shared'
import styled from 'styled-components'

export const AsideStyles = styled.div`
  background: ${({ theme }) => theme.grey};
  border-right: 2px solid ${({ theme }) => theme.lightGrey};
  box-sizing: border-box;
  ${s.wh('52px', '100%')};
  ${s.flex('space-between', 'center', 'column')};
  padding-bottom: 15px;
  z-index: 3;
`

export const Icon = styled.div`
  ${s.wh('23px')}
  svg {
    ${s.wh()}
    color: ${({ theme }) => theme.secondaryGrey};
    ${({ theme }) => s.hover(theme.light)}
  }
  transition: transform 200ms;
  &:hover {
    transform: scale(1.1);
  }
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
`
