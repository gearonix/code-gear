import styled from 'styled-components'

import { Icon } from '@/widgets/aside/ui/aside.styles'

import { s } from '@code-gear/web/shared'

export const RightSection = styled.div`
  ${s.wh('23%', '100%')};
  ${s.flex('flex-start', 'center')};
  gap: 25px;
`

interface HeaderIconProps {
  readonly $disabled: boolean
}

export const HeaderIcon = styled(Icon)<HeaderIconProps>`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme, $disabled }) =>
      $disabled ? theme.secondaryGrey : theme.light};
  }
`
