import styled from 'styled-components'

import { s } from '@code-gear/web/shared'

export const Output = styled.div`
  color: ${s.color('light')};
  font-size: ${({ theme }) => theme.fz7};
  margin-top: 4px;
  font-weight: normal;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  ${s.customScrollbar()};

  span:first-child {
    margin-top: 22px;
  }
`

interface OutputLineProps {
  readonly $isError: boolean
}

export const OutputLine = styled.span<OutputLineProps>`
  color: ${s.color('light')};
  display: block;
  margin-top: 17px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fz7};
  em {
    color: ${({ $isError }) => ($isError ? 'red' : s.color('light'))};
    font-weight: bold;
    font-style: italic;
  }
`
