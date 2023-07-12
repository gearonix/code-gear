import styled from 'styled-components'

import { absolute, br, color, customScrollbar, flex, shadow, wh } from '../../../styles'

export const ModalBackground = styled.div`
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
  ${wh('50vw','60vh')};
  background: ${color('grey')};
  border: 2px solid ${color('lightGrey')};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${shadow};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${customScrollbar()};
`

export const ModalContainer = styled.div`
  margin: 0 auto;
  margin-top: 18px;
  ${wh('60%','100%')}
  & > * {
    cursor: initial;
    color: ${color('light')};
  }
`

export const ModalTitle = styled.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fz10};
  border-bottom: ${br} ${color('lightGrey')};
`
