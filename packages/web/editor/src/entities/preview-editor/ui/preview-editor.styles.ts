import styled from 'styled-components'

import { s } from '@code-gear/web/shared'

export const EditorContainer = styled.div`
  ${s.wh('33%', '100%')};
  border-radius: 6px;
`

export const EditorTitle = styled.h4`
  &:first-letter {
    text-transform: capitalize;
  }
  svg {
    margin-bottom: -3px;
  }
  color: ${s.color('light')};
  margin: 9px 4px;
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fz9};
`
