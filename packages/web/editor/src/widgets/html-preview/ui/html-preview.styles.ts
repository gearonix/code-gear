import styled from 'styled-components'

import { s } from '@code-gear/web/shared'

export const PreviewWrapper = styled.div`
  ${s.wh('100%', '750px')};
  overflow-y: auto;
  scroll-behavior: smooth;
  margin-top: 10px;
  ${s.customScrollbar()};
`

export const EditorBlock = styled.div`
  ${s.wh('100%', '360px')};
  display: flex;
  gap: 20px;
`

export const PreviewBlock = styled.div`
  ${s.wh('100%', '50vh')};
  iframe {
    background: ${s.color('grey')};
    border-radius: 6px;
    margin-top: 8px;
  }
`
