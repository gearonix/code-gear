import styled from 'styled-components'

import { color, customScrollbar } from '$/styles'

export const Output = styled.div`
  color: ${color('light')};
  font-size: ${({ theme }) => theme.fz7};
  margin-top: 4px;
  font-weight: normal;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  ${customScrollbar()};

  span:first-child {
    margin-top: 22px;
  }
`

interface OutputLineProps {
  readonly $isError: boolean
}

export const OutputLine = styled.span<OutputLineProps>`
  color: ${color('light')};
  display: block;
  margin-top: 17px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fz7};
  em {
    color: ${({ $isError }) => ($isError ? 'red' : color('light'))};
    font-weight: bold;
    font-style: italic;
  }
`
