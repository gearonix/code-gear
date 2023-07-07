import { createGlobalStyle } from 'styled-components'

import { font } from '$/styles'


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.default};
    ${font('Poppins')}
  }
  span, p, h2, h3, h4 {
    font-size: ${({ theme }) => theme.fz6};
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
  }
`
