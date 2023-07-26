import styled from 'styled-components'

import { flex, wh } from '$/styles'

export const EditorContentStyles = styled.div`
  width: 100%;
`

export const TabsWrapper = styled.div`
  ${flex('space-between')}
  ${wh('100%', '48px')}
  margin-bottom: 10px;
`
export const TabsSelects = styled.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`
