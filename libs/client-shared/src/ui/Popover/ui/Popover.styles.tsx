import styled from 'styled-components'

import { color, customScrollbar } from '../../../styles';

interface PopoverStylesProps {
  readonly $bottom: number
}

export const PopoverStyles = styled.div<PopoverStylesProps>`
  padding-left: 28px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${color('darkBlue')};
  border-top: 2px solid ${color('lightGrey')};
  touch-action: none;
  bottom: ${({ $bottom }) => `calc(-100vh + ${$bottom - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${customScrollbar()};
`
