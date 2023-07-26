import styled from 'styled-components'

import { color, customScrollbar, wh } from '$/styles'

export const PreviewWrapper = styled.div`
  ${wh('100%', '750px')};
  overflow-y: auto;
  scroll-behavior: smooth;
  margin-top: 10px;
  ${customScrollbar()};
`

export const EditorBlock = styled.div`
  ${wh('100%', '360px')};
  display: flex;
  gap: 20px;
`

export const PreviewBlock = styled.div`
  ${wh('100%', '50vh')};
  iframe {
    background: ${color('grey')};
    border-radius: 6px;
    margin-top: 8px;
  }
`
