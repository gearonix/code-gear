import { customScrollbar } from '@/styles'
import { font } from '@/styles'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.default};
    ${font('Poppins')}
    overflow-x: hidden;
    user-select: none;
  }

  p, h2, h3, h4 {
    font-size: ${({ theme }) => theme.fz6};
  }
  h1, h2, h3, h4, h5, h6, p {
    font-weight: normal;
    margin: 0;
  }


  ${customScrollbar('body')}

  .ant-popconfirm {
    z-index: 2;
  }
`
