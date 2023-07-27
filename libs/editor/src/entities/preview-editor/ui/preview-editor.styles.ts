import styled from 'styled-components'

import { color, wh } from '$/styles'

export const EditorContainer = styled.div`
  ${wh('33%', '100%')};
  border-radius: 6px;
`

export const EditorTitle = styled.h4`
  &:first-letter {
    text-transform: capitalize;
  }
  svg {
    margin-bottom: -3px;
  }
  color: ${color('light')};
  margin: 9px 4px;
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fz9};
`
