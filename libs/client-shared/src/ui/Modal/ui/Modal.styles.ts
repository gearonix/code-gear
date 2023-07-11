import styled from 'styled-components'

import { absolute, br, color, flex, wh } from '../../../styles'

export const ModalContainer = styled.div`
  ${flex('center', 'center')};
  ${absolute({
    left: '0',
    top: '0'
  })}
  ${wh('100vw','100vh')};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`

export const ModalStyles = styled.div`
  display: grid;
  position: relative;
  ${wh('60vw','70vh')};
  background: ${color('grey')};
  border: 2px solid ${color('lightGrey')};
  border-radius: 6px;
  cursor: grab;
  align-items: center;
  justify-items: center;
  font-family: sans-serif;
  color: white;
`
