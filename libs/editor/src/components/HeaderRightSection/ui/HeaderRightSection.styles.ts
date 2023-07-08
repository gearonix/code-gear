import styled from 'styled-components'

import { Icon } from '@/modules/Aside/ui/Aside.styles'

import { flex, wh } from '$/styles'

export const RightSection = styled.div`
  ${wh('23%', '100%')};
  ${flex('flex-start', 'center')};
`


interface HeaderIconProps {
  readonly $disabled: boolean;
}

export const HeaderIcon = styled(Icon)<HeaderIconProps>`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme, $disabled }) => $disabled ? theme.secondaryGrey : theme.light};
  }
`
