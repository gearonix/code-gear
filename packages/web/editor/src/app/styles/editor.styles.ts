import styled from 'styled-components'

import { s } from '@code-gear/web/shared'

export const EditorStyles = styled.div`
  ${s.wh('100vw', '100vh')}
`

export const EditorWrapper = styled.div`
  ${s.wh('100%', 'calc(100% - 45px)')};
  display: flex;
`
