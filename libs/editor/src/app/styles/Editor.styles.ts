import styled from 'styled-components'

import { wh } from '$/styles'

export const EditorStyles = styled.div`
  ${wh('100vw', '100vh')}
`


export const EditorWrapper = styled.div`
  ${wh('100%', 'calc(100% - 45px)')};
  display: flex;
`
