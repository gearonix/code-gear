import styled from 'styled-components'

import { s } from '@code-gear/web/shared'

export const EditorContentStyles = styled.div`
  width: 100%;
`

export const TabsWrapper = styled.div`
  ${s.flex('space-between')}
  ${s.wh('100%', '48px')}
  margin-bottom: 10px;
`
export const TabsSelects = styled.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`
